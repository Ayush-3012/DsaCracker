import express from "express";
import cors from "cors";
// import cookieParser from "cookie-parser";

const app = express();

// app.use(cors());
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*"); // All origins
  res.header(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, PATCH, DELETE, OPTIONS"
  ); // All HTTP methods
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  ); // All headers
  next();
});
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
// app.use(cookieParser());

import userRouter from "./routes/user.routes.js";
import questionRouter from "./routes/question.routes.js";

app.use("/dsa-cracker-backend.vercel.app/users", userRouter);
app.use("/dsa-cracker-backend.vercel.app/questions", questionRouter);

export default app;
