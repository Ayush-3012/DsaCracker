import { Router } from "express";
import {
  getCompletedQuestions,
  saveCompletedQuestions,
} from "../controllers/question2.controller.js";
import { verifyToken } from "../utils/token-manager.js";

const questionRouter = Router();

questionRouter
  .route("/getCompletedQuestions")
  .get(verifyToken, getCompletedQuestions);
questionRouter
  .route("/saveCompletedQuestion")
  .post(verifyToken, saveCompletedQuestions);

export default questionRouter;
