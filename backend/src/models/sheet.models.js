import mongoose from "mongoose";

const sheetSchema = new mongoose.Schema(
  {
    sheetId: {
      type: String,
      required: true,
      unique: true,
    }, // Store API sheetId
    name: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
  },
  { timestamps: true }
);

export const Sheet = mongoose.model("Sheet", sheetSchema);
