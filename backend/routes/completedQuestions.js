import express from "express";
import CompletedQuestions from "../models/completedQuestions.model.js";
import _ from "lodash";
import questions from "../questions.js";

const completedQuestionsRouter = express();

const updateDoneQuestions = (topic, problem, done) => {
  questions.forEach((item) => {
    if (item.topicName === topic) {
      item.questions.forEach((q) => {
        if (q.Problem == problem) {
          q.Done = done;
        }
      });
    }
  });
};

const updateCount = () => {
  for (var i = 0; i < CompletedQuestions.length; i++) {
    const currentTable = CompletedQuestions[i];
    currentTable.countDocuments().then((cnt) => {
      questions.forEach((item) => {
        if (_.lowerCase(item.topicName) === currentTable.modelName) {
          item.doneQuestions = cnt;
        }
      });
    });
  }
};

completedQuestionsRouter.get("/", (req, res) => {
  for (var i = 0; i < CompletedQuestions.length; i++) {
    const currentTable = CompletedQuestions[i];
    currentTable.find().then((questions) =>
      questions.forEach((item) => {
        updateDoneQuestions(item.topic, item.problem, item.done);
      })
    );
  }

  updateCount();

  res.send(questions);
});

completedQuestionsRouter.get("/updateCount", () => {});

completedQuestionsRouter.post("/add", (req, res) => {
  const { topic, problem, done, url, url2 } = req.body;
  for (var i = 0; i < CompletedQuestions.length; i++) {
    const currentTable = CompletedQuestions[i];

    if (currentTable.modelName === _.camelCase(_.lowerCase(topic))) {
      currentTable.findOne({ problem }).then((found) => {
        if (!found) {
          const newQuestion = {
            topic,
            problem,
            done,
            url,
            url2,
          };
          currentTable
            .create(newQuestion)
            .then(() => {
              updateDoneQuestions(topic, problem, done);
              updateCount();
              res.status(200).json({ message: "Question Added Successfully" });
            })
            .catch((err) => res.status(500).json({ message: err }));
        } else {
          currentTable
            .deleteOne({ problem })
            .then(() => {
              updateDoneQuestions(topic, problem, done);
              updateCount();
              res
                .status(200)
                .json({ message: "Question Removed Successfully" });
            })
            .catch(() =>
              res.status(400).json({ message: "Question Not Found" })
            );
        }
      });
    }
  }
});

export default completedQuestionsRouter;
