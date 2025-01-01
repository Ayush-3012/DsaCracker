import { Router } from "express";
import {
  registerUser,
  loginUser,
  getUserDetails,
  logoutUser,
} from "../controllers/user2.controller.js";
import { verifyToken } from "../utils/token-manager.js";

const userRouter = Router();

userRouter.route("/login").post(loginUser);
userRouter.route("/register").post(registerUser);
userRouter.route("/auth-status").get(verifyToken, (req, res) => {
  res
    .status(200)
    .json({ message: "User is Authenticated", userId: req.user.userId });
});
userRouter.route("/profile").get(verifyToken, getUserDetails);
userRouter.route("/logout").get(verifyToken, logoutUser);

export default userRouter;
