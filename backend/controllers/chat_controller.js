import Chat from "../models/Chat.js";
import { callGemini } from "../utils/gemini_client.js";

export const sendMessage = async (req, res) => {
  const { message } = req.body;
  const userId = req.user.id;

  let chat = await Chat.findOne({ user: userId });
  if (!chat) chat = await Chat.create({ user: userId, messages: [] });

  // save user's msg
  chat.messages.push({ role: "user", content: message });

  // call Gemini AI
  const aiReply = await callGemini(message);

  // save AI response
  chat.messages.push({ role: "assistant", content: aiReply });

  await chat.save();

  res.json({
    reply: aiReply,
    chat,
  });
};

export const getHistory = async (req, res) => {
  const chats = await Chat.find({ user: req.user.id });
  res.json(chats);
};
