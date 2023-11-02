import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();
const port = process.env.PORT;

app.listen(port, () => {
  console.log(`Server is listening to port ${port}`);
});
