import { Router } from "express";
import {
  addQuestions,
  getQuestions,
  updateSolved,
} from "../controllers/question2.controller.js";
import { verifyToken } from "../utils/token-manager.js";

const questionRouter = Router();

questionRouter.route("/getQuestions").get(verifyToken, getQuestions);
questionRouter.route("/addQuestions").post(verifyToken, addQuestions);
questionRouter.route("/addQuestions").post(verifyToken, updateSolved);

export default questionRouter;
