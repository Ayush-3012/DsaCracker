import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(cookieParser(process.env.COOKIE_SECRET));

import userRouter from "./routes/user.routes.js";
// import questionRouter from "./routes/question.routes.js";
import sheetRouter from "./routes/sheet.routes.js";

app.get("/", (req, res) => res.json("Hello Welcome"));
app.use("/api/v1/users", userRouter);
// app.use("/api/v1/questions", questionRouter);
app.use("/api/v2/sheets", sheetRouter);

export default app;
