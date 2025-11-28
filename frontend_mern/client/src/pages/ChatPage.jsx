import React, { useEffect, useRef } from "react";
import MainLayout from "../layouts/MainLayout";
import ChatWindow from "../components/ChatWindow";
import InputBox from "../components/InputBox";

export default function ChatPage() {

  return (
    <MainLayout>
      {/* Fullscreen ChatGPT-style container */}
      <div className="h-[calc(100vh-80px)] flex flex-col items-center justify-between">

        {/* Messages Scroll Area */}
        <div
          id="chat-scroll-area"
          className="w-full max-w-3xl flex-1 overflow-y-auto px-4 py-8 
                     scroll-smooth"
        >
          <ChatWindow />
        </div>

        {/* Fixed Bottom Input Bar */}
        <div className="w-full max-w-3xl px-4 py-4 border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900">
          <InputBox />
        </div>

      </div>
    </MainLayout>
  );
}
