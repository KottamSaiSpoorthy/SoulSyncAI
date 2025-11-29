import express from "express";
import { sendMessage, getHistory } from "../controllers/chat_controller.js";
import { protect } from "../middleware/auth_middleware.js";

const router = express.Router();

router.post("/send", protect, sendMessage);
router.get("/history", protect, getHistory);

export default router;
