import React, { useState } from "react";
import MainLayout from "../layouts/MainLayout";
import { useAuth } from "../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";

export default function LoginPage() {
  const { login } = useAuth();
  const nav = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      await login({ email, password });
      nav("/");
    } catch (err) {
      setError("Invalid email or password");
    }
  };

  return (
    <MainLayout>
      <div className="flex items-center justify-center py-24 px-4">
        <div className="w-full max-w-md space-y-6">
          
          <h1 className="text-center text-3xl font-semibold text-gray-900 dark:text-white">
            Log in
          </h1>

          <p className="text-center text-gray-600 dark:text-gray-400 text-sm">
            Welcome back — continue your journey
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            {error && (
              <p className="text-red-500 text-sm text-center">{error}</p>
            )}

            <input
              type="email"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-xl 
                         bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none"
              required
            />

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-xl 
                         bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none"
              required
            />

            <button
              type="submit"
              className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white text-lg rounded-full 
                         transition font-semibold"
            >
              Continue
            </button>
          </form>

          <p className="text-center text-sm text-gray-600 dark:text-gray-400">
            Don't have an account?{" "}
            <Link to="/signup" className="text-blue-600 hover:underline">
              Create one
            </Link>
          </p>
        </div>
      </div>
    </MainLayout>
  );
}
