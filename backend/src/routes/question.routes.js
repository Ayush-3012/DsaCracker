import { Router } from "express";
import {
  addQuestions,
  getQuestions,
} from "../controllers/question.controller.js";

const router = Router();

router.route("/getQuestions").get(getQuestions);
router.route("/addQuestions").post(addQuestions);

export default router;
