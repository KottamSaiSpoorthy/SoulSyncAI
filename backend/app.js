import express from "express";
import cors from "cors";

import authRoutes from "./routes/auth_routes.js";
import chatRoutes from "./routes/chat_routes.js";
import { errorHandler } from "./middleware/error_middleware.js";

const app = express();

app.use(cors());
app.use(express.json());

// ROUTES
app.use("/api/auth", authRoutes);
app.use("/api/chat", chatRoutes);

// ERROR HANDLER
app.use(errorHandler);

export default app;
