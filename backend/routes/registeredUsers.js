import express from "express";
import User from "../models/signUp.model.js";

const registeredUsersRouter = express();

registeredUsersRouter.get("/getUser", (req, res) => {
  const { email } = req.query;
  User.findOne({ email })
    .then((found) => res.status(201).json(found))
    .catch(() => res.status(400).json({ message: "Server Error" }));
});

registeredUsersRouter.post("/addUser", (req, res) => {
  const { user_id, email, name, password } = req.body;

  User.findOne({ email }).then((existingUser) => {
    if (existingUser) {
      res.status(400).json({ message: "Username already exists" });
    } else {
      const newUser = {
        user_id,
        email,
        name,
        password,
      };
      User.create(newUser).then(() => {
        res
          .status(201)
          .json({ message: "New User Added Successfully, Please SignIn" });
      });
    }
  });
});

export default registeredUsersRouter;
