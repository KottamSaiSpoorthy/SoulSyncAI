import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function MainNavbar() {
  const { user, logout } = useAuth();
  const nav = useNavigate();

  const handleLogout = () => {
    logout();
    nav("/login");
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur border-b 
                border-gray-200 dark:bg-gray-900/80 dark:border-gray-700 py-4 shadow-sm">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link
          to="/"
          className="text-2xl font-semibold text-gray-900 dark:text-white"
        >
          SoulSyncAI
        </Link>

        {user ? (
          <div className="flex items-center gap-4">
            <Link
              to="/profile"
              className="text-sm text-gray-700 dark:text-gray-300 hover:text-blue-600"
            >
              {user.name || user.email}
            </Link>

            <button
              onClick={handleLogout}
              className="px-4 py-1.5 bg-blue-600 hover:bg-blue-700 
                         text-white text-sm rounded-full"
            >
              Log out
            </button>
          </div>
        ) : (
          <Link
            to="/login"
            className="px-5 py-1.5 bg-blue-600 hover:bg-blue-700 text-white text-sm rounded-full"
          >
            Log in
          </Link>
        )}
      </div>
    </nav>
  );
}
