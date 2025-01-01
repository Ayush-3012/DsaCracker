// import { Question } from "../models/questions.models.js";
import { User } from "../models/user.models.js";

// const updateDoneQuestions = (topic, problem, done) => {
//   const foundTopic = questions.find((q) => q.topicName === topic);
//   const solvedQues = foundTopic.questions.find((q) => q.Problem === problem);
//   solvedQues.Done = done;
// };

// var count = 0;
// const updateCount = (topics, item) => {
//   if (item.problem) count++;

//   questions.find((q) => {
//     if (q.topicName === topics.topic) q.doneQuestions = count;
//   });
// };

// const resetCheckedAndCount = () => {
//   questions.forEach((item) => {
//     item.doneQuestions = 0;
//     item.questions.forEach((q) => (q.Done = false));
//   });
// };

export const getQuestions = async (req, res) => {
  //   resetCheckedAndCount();
  try {
    const completedQuestions = [];
    const foundUser = await User.findById(req.user.userId);

    if (!foundUser) {
      return res.status(404).json({ message: "User not found" });
    }

    if (foundUser.completedQuestions.length > 0) {
      const { completedTopicIds, completedQuestionIds } =
        foundUser.completedQuestions.reduce(
          (acc, topics) => {
            acc.completedTopicIds.push(topics.topicId);
            acc.completedQuestionIds.push(...topics.questionIds);
            return acc;
          },
          { completedTopicIds: [], completedQuestionIds: [] }
        );
      // const completedQuestionIdsStr = completedQuestionIds.map(String);
      // const completedQuestionsTopics = await Question.find({
      //   _id: { $in: completedTopicIds },
      // });
      // completedQuestionsTopics.forEach((topics) => {
      //   count = 0;
      //   topics.questions.forEach((item) => {
      // if (completedQuestionIdsStr.includes(String(item._id))) {
      // updateDoneQuestions(topics.topic, item.problem, item.done);
      // updateCount(topics, item);
      // completedQuestions.push({
      //   topic: topics.topic,
      //   problem: item.problem,
      //   url: item.url,
      // });
      //   }
      // });
      // });
    }
    await res.send({ completedQuestions });
  } catch (error) {
    console.log("Error in getting questions: ", error);
    await res.status(500).send("Error in getting questions");
  }
};

export const updateSolved = async (req, res) => {
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

export const addQuestions = async (req, res) => {
  try {
    const { topic, problem, done, url, url2 } = req.body;
  } catch (err) {
    console.log(err);
  }

  try {
    let existingQuestion = await Question.findOne({
      topic,
      "questions.problem": problem,
    });

    if (!existingQuestion) {
      existingQuestion = await Question.findOneAndUpdate(
        { topic },
        { $push: { questions: { problem, done, url, url2 } } },
        { upsert: true, new: true }
      );
    }

    if (existingQuestion) {
      const specificQuestion = existingQuestion.questions.find(
        (q) => q.problem === problem
      );

      res.status(201).json({
        questionId: specificQuestion._id,
        topicId: existingQuestion._id,
      });
    }
  } catch (err) {
    console.error("Error while adding question:", err);
    res
      .status(400)
      .json({ message: "Error while adding question", error: err });
  }
};
