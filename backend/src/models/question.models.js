import mongoose from "mongoose";

const questionSchema = new mongoose.Schema(
  {
    questionId: {
      type: String, // Unique ID for the question (from external API)
      required: true,
      unique: true,
    },
    topicId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Topic", // References to the Topic model
      required: true,
    },
  },
  { timestamps: true }
);

export const Question = mongoose.model("Question", questionSchema);
