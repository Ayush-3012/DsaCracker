import { Router } from "express";
import {
  getAllSheets,
  getSelectedSheet,
  getSpecificSheetTopics,
  getSheetQuestions,
} from "../controllers/sheet.controller.js";
import { verifyToken } from "../utils/token-manager.js";

const sheetRouter = Router();

sheetRouter.route("/").get(verifyToken, getAllSheets);
sheetRouter.route("/:sheetName").get(verifyToken, getSelectedSheet);
sheetRouter
  .route("/:sheetName/topics")
  .get(verifyToken, getSpecificSheetTopics);
sheetRouter
  .route("/:sheetName/topics/:topicName")
  .get(verifyToken, getSheetQuestions);

export default sheetRouter;
