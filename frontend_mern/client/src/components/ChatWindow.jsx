import React, { useEffect, useRef } from "react";
import Message from "./Message";
import { useChat } from "../hooks/useChat";

export default function ChatWindow() {
  const { messages } = useChat();

  const scrollRef = useRef(null);
  const initialLoadRef = useRef(false);

  // Auto scroll only when new message arrives (ChatGPT style)
  useEffect(() => {
    if (!initialLoadRef.current) {
      // First load — don't scroll
      initialLoadRef.current = true;
      return;
    }

    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="flex flex-col gap-6">
      {messages.length === 0 && (
        <div className="text-center text-xl text-gray-400 mt-24">
          Ask something to begin your chat…
        </div>
      )}

      {messages.map((msg, index) => (
        <Message key={index} role={msg.role} content={msg.content} />
      ))}

      {/* This element scrolls into view */}
      <div ref={scrollRef} />
    </div>
  );
}
