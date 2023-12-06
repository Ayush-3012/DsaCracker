import { User } from "../models/user.models.js";

const getUser = async (req, res) => {
  const { email } = req.query;
  User.findOne({ email })
    .then((found) => {
      return res.status(201).json(found);
    })
    .catch(() => {
      return res.status(400).json({ message: "Server Error" });
    });
};

const getUserDetails = async (req, res) => {
  const { user } = req.query;
  if (user) {
    User.findOne({ email: user })
      .then((foundUser) => {
        res.status(201).json({ message: "Found User is : ", foundUser });
      })
      .catch((err) => {
        res.status(400).json({ message: "No such user found" });
        console.log(err);
      });
  }
};

const updateSolved = async (req, res) => {
  const { questionId, topicId } = req.body;
  let message = "";
  try {
    const userEmail = req.query.user;
    const user = await User.findOne({ email: userEmail });

    if (user) {
      const foundTopic = user.completedQuestions.find(
        (completedTopic) => String(completedTopic.topicId) === String(topicId)
      );

      if (foundTopic) {
        const foundQuestion = foundTopic.questionIds.find(
          (solved) => String(solved) === questionId
        );
        if (!foundQuestion) {
          foundTopic.questionIds.push(questionId);
          message = "Question Added Successfully";
        } else {
          const index = foundTopic.questionIds.indexOf(questionId);
          if (index !== -1) {
            foundTopic.questionIds.splice(index, 1);
            message = "Question Removed Successfully";
          }
        }
      } else {
        user.completedQuestions.push({ topicId, questionIds: [questionId] });
      }

      await user.save();
      res.status(200).json({ message, user });
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (err) {
    console.error("Error updating user's completed questions:", err);
    res.status(500).json({
      message: "Error updating user's completed questions",
      error: err,
    });
  }
};

const registerUser = async (req, res) => {
  const { user_id, email, name, password } = req.body;
  User.findOne({ email })
    .then((existingUser) => {
      if (existingUser) {
        res
          .status(201)
          .json({ message: "Username already exists, Please Log In" });
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
            .json({ message: "New User Added Successfully, Please Log In" });
        });
      }
    })
    .catch((err) => {
      res.status(400).json({ message: "Server not responding" }),
        console.log(err);
    });
};

export { registerUser, getUser, updateSolved, getUserDetails };
