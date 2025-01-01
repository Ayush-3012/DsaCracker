import { Router } from "express";
import {
  getSheetTopics,
  getTopicQuestions,
} from "../controllers/sheet.controller.js";

const sheetRouter = Router();

sheetRouter.get("/:sheetName", getSheetTopics);

sheetRouter.get("/:sheetName/:topicName", getTopicQuestions);

export default sheetRouter;
