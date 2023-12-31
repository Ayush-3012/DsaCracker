import express from "express";
import cors from "cors";
// import cookieParser from "cookie-parser";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
// app.use(cookieParser());

import userRouter from "./routes/user.routes.js";
import questionRouter from "./routes/question.routes.js";

app.get("/", (req, res) => res.json("Hello Welcome"));
app.use("/api/v1/users", userRouter);
app.use("/api/v1/questions", questionRouter);

export default app;
