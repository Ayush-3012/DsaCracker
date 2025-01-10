import { User } from "../models/user.models.js";
import { createToken } from "../utils/token-manager.js";
import bcrypt from "bcrypt";

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const foundUser = await User.findOne({ email });
    if (!foundUser) return res.status(404).json({ message: "User not found" });

    const passwordMatch = await bcrypt.compare(password, foundUser.password);
    if (!passwordMatch)
      return res.status(400).json({ message: "Invalid password" });

    res.clearCookie(process.env.COOKIE_NAME, {
      httpOnly: true,
      domain: "localhost",
      signed: true,
      path: "/",

      // ----------------------- PRODUCTION ----------------------
      //   httpOnly: true,
      //   path: "/",
      //   signed: true,
      //   secure: process.env.NODE_ENV === "production",
      //   sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
      // ----------------------- PRODUCTION ----------------------
    });

    const token = createToken(foundUser._id.toString());

    res.cookie(process.env.COOKIE_NAME, token, {
      httpOnly: true,
      path: "/",
      domain: "localhost",
      signed: true,

      // ----------------------- PRODUCTION ----------------------
      //   httpOnly: true,
      //   path: "/",
      //   signed: true,
      //   secure: process.env.NODE_ENV === "production",
      //   sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
      //   maxAge: 168 * 60 * 60 * 1000, // 7 days in milliseconds
      // ----------------------- PRODUCTION ----------------------
    });

    return res.status(200).json({ message: "User LoggedIn Successfull" });
  } catch (err) {
    return res.status(400).json({ message: "Server Error", Error: err });
  }
};

export const getUserDetails = async (req, res) => {
  try {
    User.findById(req.user.userId)
      .then((foundUser) => {
        return res.status(201).json({ message: "Found User is : ", foundUser });
      })
      .catch((err) => {
        return res.status(404).json({ message: "User Not found", Error: err });
      });
  } catch (err) {
    console.log(err);
    return res
      .status(500)
      .json({ message: "Server Error while finding profile" });
  }
};

export const registerUser = async (req, res) => {
  try {
    const { email, name, password } = req.body.user;
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res
        .status(400)
        .json({ message: "Username already exists, Please Log In" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
      email,
      name,
      password: hashedPassword,
    });
    await newUser.save();
    return res
      .status(201)
      .json({ message: "New User Added Successfully, Please Log In" });
  } catch (err) {
    console.log(err);
    return res.status(400).json({ message: "Server not responding" });
  }
};

export const logoutUser = (req, res) => {
  try {
    res.clearCookie(process.env.COOKIE_NAME, {
      httpOnly: true,
      domain: "localhost",
      signed: true,
      path: "/",

      // ----------------------- PRODUCTION ----------------------
      // httpOnly: true,
      // path: "/",
      // signed: true,
      // secure: process.env.NODE_ENV === "production",
      // sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
      // ----------------------- PRODUCTION ----------------------
    });

    res.json({ message: "User Logged out successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
