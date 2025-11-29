import { apiPost, API } from "./api.js";

async function sendMessage() {
  const message = input.value.trim();
  if (!message) return;

  const res = await apiPost(API.CHAT.SEND, { message });

  if (res.reply) {
    addAssistantMessage(res.reply);
  }
}

// Chat history population in ChatGPT 2024 style cards
export function loadChatHistory() {
  const list = document.getElementById("chat-history-list");
  if (!list) return;

  const history = [
    "Morning Reflection",
    "Stress Talk",
    "Project Ideas",
    "Relationship Thoughts",
    "Yesterday Review",
  ];

  list.innerHTML = "";

  history.forEach((item) => {
    const card = document.createElement("div");
    card.className = "history-card";
    card.textContent = item;
    list.appendChild(card);
  });
}

// Chat sending logic can go here
export function sendMessage() {
  const input = document.getElementById("userInput");
  const conversation = document.getElementById("conversation");

  if (!input.value.trim()) return;

  const userBubble = document.createElement("div");
  userBubble.className = "msg user";
  userBubble.innerHTML = `<div class="bubble bubble-user">${input.value}</div>`;
  conversation.appendChild(userBubble);

  conversation.scrollTop = conversation.scrollHeight;

  setTimeout(() => {
    const bot = document.createElement("div");
    bot.className = "msg assistant";
    bot.innerHTML = `
      <div class="bubble bubble-assistant">
        Thank you for sharing. I'm here with you.
      </div>`;
    conversation.appendChild(bot);

    conversation.scrollTop = conversation.scrollHeight;
  }, 700);

  input.value = "";
}
