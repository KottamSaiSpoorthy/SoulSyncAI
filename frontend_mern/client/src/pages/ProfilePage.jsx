import React from "react";
import MainLayout from "../layouts/MainLayout";
import { useAuth } from "../context/AuthContext";

export default function ProfilePage() {
  const { user } = useAuth();

  return (
    <MainLayout>
      <div className="max-w-xl mx-auto bg-white dark:bg-gray-800 p-6 rounded-xl shadow">
        <h2 className="text-2xl font-bold mb-4">Your Profile</h2>

        {user ? (
          <>
            <p className="mb-2"><strong>Name:</strong> {user.name}</p>
            <p className="mb-4"><strong>Email:</strong> {user.email}</p>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              Your conversations will be stored securely and accessible anytime.
            </p>
          </>
        ) : (
          <p>You are not logged in.</p>
        )}
      </div>
    </MainLayout>
  );
}
