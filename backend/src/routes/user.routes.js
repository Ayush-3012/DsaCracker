import { Router } from "express";
import {
  registerUser,
  getUser,
  updateSolved,
  getUserDetails,
} from "../controllers/user.controller.js";

const router = Router();

router.route("/getUser").get(getUser);
router.route("/register").post(registerUser);
router.route("/updateSolved").patch(updateSolved);
router.route("/account").get(getUserDetails)

export default router;
