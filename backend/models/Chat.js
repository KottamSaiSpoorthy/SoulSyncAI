import mongoose from "mongoose";

const messageSchema = new mongoose.Schema(
  {
    role: { type: String, enum: ["user", "assistant"] },
    content: String,
  },
  { timestamps: true }
);

const chatSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    messages: [messageSchema],
  },
  { timestamps: true }
);

export default mongoose.model("Chat", chatSchema);
