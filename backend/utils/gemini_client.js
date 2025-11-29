import fetch from "node-fetch";
import { ENV } from "../config/env.js";

export const callGemini = async (prompt) => {
  try {
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${ENV.GEMINI_API_KEY}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [
            {
              parts: [{ text: prompt }],
            },
          ],
        }),
      }
    );

    const data = await response.json();

    return (
      data?.candidates?.[0]?.content?.parts?.[0]?.text ||
      "I'm here with you. Tell me more."
    );
  } catch (err) {
    console.error("Gemini API error:", err);
    return "I couldn't reach my mindful space right now. Let's try again.";
  }
};
