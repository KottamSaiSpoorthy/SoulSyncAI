import React, { useState } from "react";
import { useChat } from "../hooks/useChat";

export default function InputBox() {
  const [input, setInput] = useState("");
  const { sendMessage } = useChat();

  const handleSend = async () => {
    if (!input.trim()) return;

    await sendMessage(input);
    setInput("");
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="w-full flex items-center justify-center">
      <div className="w-full flex items-center gap-3 border border-gray-300 dark:border-gray-700 
                      rounded-3xl px-5 py-3 shadow-sm bg-white dark:bg-gray-900 transition">

        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyPress}
          placeholder="Ask anything..."
          rows={1}
          className="flex-grow bg-transparent resize-none outline-none text-gray-900 dark:text-gray-100 
                     placeholder-gray-400 text-sm max-h-32"
        />

        {/* Send Button */}
        <button
          onClick={handleSend}
          className="px-4 py-2 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white 
                     text-sm font-medium transition"
        >
          Send
        </button>
      </div>
    </div>
  );
}
