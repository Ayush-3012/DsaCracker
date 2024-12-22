import mongoose from "mongoose";

const questionSchema = new mongoose.Schema(
  {
    topic: {
      type: String,
      required: true,
      trim: true,
      unique: true,
      index: true,
    },
    questions: [
      {
        problem: {
          type: String,
          required: true,
          trim: true,
        },
        done: {
          type: Boolean,
          required: true,
        },
        url: {
          type: String,
          required: true,
          trim: true,
        },
        url2: {
          type: String,
          trim: true,
        },
      },
    ],
  },
  { timestamps: true }
);

export const Question = new mongoose.model("Question", questionSchema);
