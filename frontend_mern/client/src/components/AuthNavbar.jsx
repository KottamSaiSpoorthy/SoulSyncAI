import React from "react";
import { Link } from "react-router-dom";

export default function AuthNavbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white dark:bg-gray-900 
                border-b border-gray-200 dark:border-gray-800 py-4">
      <div className="container mx-auto px-4">
        <Link
          to="/"
          className="text-2xl font-semibold text-gray-900 dark:text-white"
        >
          SoulSyncAI
        </Link>
      </div>
    </nav>
  );
}
