import path from "path";
import dotenv from "dotenv";
dotenv.config();
console.log(process.env.JWT_SECRET);
import express from "express";
import connect from "./Datab.js";
import info from "./Infodb.js";
import Chat from "./Chatdb.js";
import cors from "cors";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import verifytoken from "./Verifytoken.js";
import verifyadmin from "./Verifyadmin.js";

const app = express();
const port = 3000;

connect();
app.use(cors());
app.use(express.json());
app.use(express.static(path.resolve("public")));

app.listen(port, () => {
    console.log("server connected on port", port);
});

app.get("/users",verifytoken,verifyadmin, async (req, res) => {
    const users = await info.find();
    res.json(users);
});

app.post("/savecre",async (req, res) => {
    const { email, FirstName, LastName, DOB, username, password } = req.body;

    const user = new info({
        email: email,
        FirstName: FirstName,
        LastName: LastName,
        DOB: DOB,
        username: username,
        password: password,
        // role:"admin"
    });

    await user.save();

    const uu = await info.find();
    res.json(uu);
});

app.post("/savemsg", async (req, res) => {
    const { messege, reply } = req.body;
    const m = new Chat({
        messege: messege,
        reply: reply
    });

    await m.save();

    const um = await Chat.find();
    res.json(um);
});

app.post("/login", async (req, res) => {
    const { username, password } = req.body;
    const user = await info.findOne({ username });

    if (!user) return res.json({ success: false, message: "User not found" });

    const match = await bcrypt.compare(password, user.password);
    if (!match) return res.json({ success: false, message: "Wrong password" });

    if (!process.env.JWT_SECRET) {
        console.error("JWT secret not defined in .env");
        return res.json({ success: false, message: "Server error: JWT secret missing" });
    }

    const token = jwt.sign(
        { username: user.username, role: user.role },
        process.env.JWT_SECRET,
        { expiresIn: "1d" }
    );

    return res.json({ success: true,token:token, user: { username: user.username, role: user.role } });
});

import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

app.post("/chat", verifytoken, async (req, res) => {
    try {
        const { message } = req.body;

        if (!message) {
            return res.json({ success: false, message: "Message required" });
        }

        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

        const result = await model.generateContent(message);
        const reply = result.response.text();

        const chatEntry = new Chat({
            messege: message,
            reply: reply,
        });
        await chatEntry.save();

        res.json({
            success: true,
            reply: reply,
        });

    } catch (error) {
        console.log("Gemini API Error:", error);
        res.json({ success: false, message: "AI Error", error });
    }
});
