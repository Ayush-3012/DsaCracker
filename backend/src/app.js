import express from "express";
import cors from "cors";
// import cookieParser from "cookie-parser";

const app = express();

app.use(
  cors({
    origin: ["*"],
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
// app.use(cookieParser());

import userRouter from "./routes/user.routes.js";
import questionRouter from "./routes/question.routes.js";

app.get("/", (req, res) => res.json("Hello Welcome"));
app.use("/dsa-cracker-backend.vercel.app/users", userRouter);
app.use("/dsa-cracker-backend.vercel.app/questions", questionRouter);

export default app;
