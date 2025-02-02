import { Sheet } from "../models/sheet.models.js";
import { Topic } from "../models/topic.models.js";
import { Question } from "../models/question.models.js";
import { User } from "../models/user.models.js";

export const getCompletedQuestions = async (req, res) => {
  try {
    const foundUser = await User.findById(req.user.userId);

    return (
      foundUser &&
      res.status(201).json({
        message: "User's completed questions are : ",
        completedQuestions: foundUser.completedQuestions,
      })
    );
  } catch (err) {
    console.log(err);
    return res
      .status(500)
      .json({ message: "Server Error while completed questions" });
  }
};

export const saveCompletedQuestions = async (req, res) => {
  try {
    const { sheetId, sheetName, topicId, topicName, questionId } =
      req.body.question; // EXTERNAL API DATA

    let sheet = await Sheet.findOne({ sheetId });
    if (!sheet) {
      sheet = new Sheet({ sheetId, name: sheetName });
      await sheet.save();
    }

    let topic = await Topic.findOne({ topicId, sheet: sheet._id });
    if (!topic) {
      topic = new Topic({ topicId, name: topicName, sheet: sheet._id });
      await topic.save();
    }

    let existingQuestion = await Question.findOne({
      questionId,
      topicId: topic._id,
    });

    if (!existingQuestion) {
      existingQuestion = new Question({
        questionId,
        topicId: topic._id,
      });

      await existingQuestion.save();
    }

    // Step 4: Check if the question is already completed by the user
    const user = await User.findById(req.user.userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Step 5: Check if the question is already completed
    const isCompleted = user.completedQuestions.includes(existingQuestion._id);

    if (isCompleted) {
      // Remove the question from completedQuestions
      user.completedQuestions = user.completedQuestions.filter(
        (completedQuestionId) =>
          completedQuestionId.toString() !== existingQuestion._id.toString()
      );
      await user.save();

      return res.status(200).json({
        message: "Question removed from completed list",
      });
    }

    // Step 6: Add the question to completedQuestions if not already completed
    user.completedQuestions.push(existingQuestion._id);
    await user.save();

    return res.status(200).json({
      message: "Question added to completed list",
    });
  } catch (err) {
    console.log(err);
    return res
      .status(500)
      .json({ message: "Server error while managing completed questions" });
  }
};
