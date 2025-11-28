import React from "react";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 dark:border-gray-700 mt-12 py-8">
      <div className="container mx-auto px-4 text-center">
        
        <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
          SoulSyncAI
        </h3>

        <p className="text-gray-500 dark:text-gray-400 text-sm mt-2 max-w-xl mx-auto">
          Your personal AI diary and emotional companion — 
          a calm, private space for your thoughts, feelings, and reflections.
        </p>

        <div className="flex justify-center gap-6 mt-4 text-sm text-gray-600 dark:text-gray-400">
          <a href="#" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition">Privacy Policy</a>
          <a href="#" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition">Terms</a>
          <a href="#" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition">Support</a>
        </div>

        <p className="text-xs text-gray-400 dark:text-gray-500 mt-6">
          © {new Date().getFullYear()} SoulSyncAI. All rights reserved.
        </p>

      </div>
    </footer>
  );
}
