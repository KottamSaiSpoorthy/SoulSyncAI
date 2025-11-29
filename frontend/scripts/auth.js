import { apiPost, API } from "./api.js";

document.getElementById("loginForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const loginId = document.getElementById("loginId").value;
  const password = document.getElementById("loginPassword").value;

  const res = await apiPost(API.AUTH.LOGIN, { loginId, password });

  if (res.token) {
    localStorage.setItem("token", res.token);
    localStorage.setItem("user", JSON.stringify(res.user));
    window.location.href = "./chat.html";
  } else {
    alert(res.message || "Login failed");
  }
});

// RANDOM EMOJI POSITIONS ON EVERY PAGE LOAD
document.addEventListener("DOMContentLoaded", () => {
  const emojis = document.querySelectorAll(".emoji-bg span");

  emojis.forEach((emoji) => {
    const randomTop = Math.random() * 100; // %
    const randomLeft = Math.random() * 100; // %
    const randomSize = 40 + Math.random() * 40; // 40–80px
    const randomDelay = Math.random() * 5;

    emoji.style.top = randomTop + "%";
    emoji.style.left = randomLeft + "%";
    emoji.style.fontSize = randomSize + "px";
    emoji.style.animationDelay = randomDelay + "s";
  });
});
