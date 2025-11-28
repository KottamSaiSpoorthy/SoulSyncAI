import { useState, useEffect, useRef } from "react";
import axios from "axios";

export function useChat() {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  // Optional: store last user message to show "assistant typing..."
  const lastUserMessage = useRef("");

  const API_URL = "http://localhost:8000/api/chat"; // your FastAPI route

  // Send message
  const sendMessage = async (text) => {
    if (!text.trim()) return;

    // Add user message immediately
    const userMsg = { role: "user", content: text };
    lastUserMessage.current = text;

    setMessages((prev) => [...prev, userMsg]);
    setLoading(true);

    try {
      const res = await axios.post(API_URL, {
        message: text,
      });

      const reply = res.data.reply || "No response";

      const assistantMsg = { role: "assistant", content: reply };

      setMessages((prev) => [...prev, assistantMsg]);
    } catch (err) {
      console.error("Chat API Error:", err);

      const errorMsg = {
        role: "assistant",
        content: "⚠️ Unable to connect to SoulSyncAI right now.",
      };

      setMessages((prev) => [...prev, errorMsg]);
    }

    setLoading(false);
  };

  return {
    messages,
    loading,
    sendMessage,
  };
}
