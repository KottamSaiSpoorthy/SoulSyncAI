import React from "react";
import { useNavigate } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";

export default function LandingPage() {
  const nav = useNavigate();

  const handleTryFree = () => {
    nav("/chat-free");
  };

  return (
    <MainLayout>
      <div className="max-w-6xl mx-auto px-4 pt-10 pb-20 text-center">

        {/* HERO */}
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
          Your Personal AI Diary<br />
          & <span className="text-indigo-600 dark:text-indigo-400">Emotional Support Buddy</span>
        </h1>

        <p className="mt-6 text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          SoulSyncAI listens to your thoughts, understands your emotions,
          and responds with calm, warm, supportive messages.
          A private space to vent, reflect, heal, and feel heard.
        </p>

        {/* CTA */}
        <button
          onClick={handleTryFree}
          className="mt-10 px-10 py-4 text-lg bg-indigo-600 hover:bg-indigo-700 
                     text-white rounded-xl shadow-lg transition"
        >
          Try Free Session
        </button>

        {/* FEATURE CARDS */}
        <div className="mt-24 grid md:grid-cols-3 gap-10 text-left">
          <FeatureCard
            title="Private Emotional Diary"
            text="An intimate space where you can express anything—your thoughts, worries, goals, or quiet reflections."
          />
          <FeatureCard
            title="AI Chat Companion"
            text="SoulSyncAI responds like a calm friend—supportive, empathetic, and always here to listen."
          />
          <FeatureCard
            title="Emotion Understanding"
            text="Advanced emotion detection helps the AI respond with emotional intelligence and compassion."
          />
        </div>
      </div>
    </MainLayout>
  );
}

function FeatureCard({ title, text }) {
  return (
    <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow hover:shadow-lg transition">
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300">{text}</p>
    </div>
  );
}
