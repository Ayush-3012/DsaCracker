import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      index: true,
    },
    name: {
      type: String,
      required: true,
      trim: true,
      index: true,
    },
    password: {
      type: String,
      required: [true, "Password is required"],
    },
    completedQuestions: [
      {
        topicId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Topic",
        },
        questionIds: [
          {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Question",
          },
        ],
      },
    ],
  },
  { timestamps: true }
);

export const User = new mongoose.model("User", userSchema);
