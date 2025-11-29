// ========================================
// UnmuteMind API CONFIG (Frontend)
// Centralized endpoints + fetch helpers
// ========================================

export const API = {
  // Automatically switch envs
  BASE_URL:
    window.location.hostname === "localhost"
      ? "http://localhost:5000/api"
      : "https://your-production-domain.com/api",

  // AUTH ROUTES
  AUTH: {
    LOGIN: "/auth/login",
    SIGNUP: "/auth/signup",
    PROFILE: "/auth/profile",
  },

  // CHAT ROUTES
  CHAT: {
    SEND: "/chat/send",
    HISTORY: "/chat/history",
  },
};

// ===================================================
// Generic Fetch Wrapper (JWT + JSON handling)
// ===================================================

export async function apiFetch(path, options = {}) {
  const token = localStorage.getItem("token");

  const headers = {
    "Content-Type": "application/json",
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
  };

  try {
    const response = await fetch(API.BASE_URL + path, {
      ...options,
      headers,
    });

    // Parse response
    const data = await response.json().catch(() => {
      throw new Error("Invalid JSON from server");
    });

    // Auto logout on unauthorized
    if (response.status === 401) {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      window.location.href = "../pages/login.html";
    }

    return data;
  } catch (err) {
    console.error("API Error:", err);
    return { error: err.message || "Network error" };
  }
}

// ===================================================
// Helper Methods for GET & POST
// ===================================================

export const apiGet = (path) => apiFetch(path);

export const apiPost = (path, bodyObj) =>
  apiFetch(path, {
    method: "POST",
    body: JSON.stringify(bodyObj),
  });
