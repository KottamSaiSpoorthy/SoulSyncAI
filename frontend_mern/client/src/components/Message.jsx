import React from "react";

export default function Message({ role, content }) {
  const isUser = role === "user";

  return (
    <div
      className={`w-full flex ${
        isUser ? "justify-end" : "justify-start"
      }`}
    >
      <div
        className={`max-w-[75%] px-5 py-3 rounded-2xl text-sm leading-relaxed 
          ${
            isUser
              ? "bg-blue-600 text-white rounded-br-none"
              : "bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-bl-none"
          }`}
      >
        {content}
      </div>
    </div>
  );
}
