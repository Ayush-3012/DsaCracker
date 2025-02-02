import mongoose from "mongoose";

const topicSchema = new mongoose.Schema(
  {
    topicId: {
      type: String,
      required: true,
      unique: true,
    }, // Store API topicId
    name: {
      type: String,
      required: true,
      trim: true,
    },
    sheet: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Sheet",
      required: true,
    },
  },
  { timestamps: true }
);

export const Topic = mongoose.model("Topic", topicSchema);
