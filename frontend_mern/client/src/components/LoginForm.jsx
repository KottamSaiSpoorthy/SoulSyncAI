import React, { useState } from "react";

export default function LoginForm({ onSubmit, loading, error }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submit = (e) => {
    e.preventDefault();
    onSubmit({ email, password });
  };

  return (
    <form onSubmit={submit} className="max-w-md mx-auto bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
      <h2 className="text-xl font-semibold mb-4">Login</h2>
      {error && <div className="text-red-500 mb-3">{error}</div>}
      <label className="block mb-2 text-sm">Email</label>
      <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" className="w-full p-2 mb-3 border rounded" required />
      <label className="block mb-2 text-sm">Password</label>
      <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" className="w-full p-2 mb-4 border rounded" required />
      <button disabled={loading} className="w-full py-2 bg-indigo-600 text-white rounded">{loading ? "Logging in..." : "Login"}</button>
    </form>
  );
}
