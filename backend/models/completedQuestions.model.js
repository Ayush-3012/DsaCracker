import mongoose from "mongoose";
import questions from "../questions.js";
import _ from "lodash";

const completedQuestonSchema = {
  topic: {
    type: String,
    required: true,
  },
  problem: {
    type: String,
    required: true,
  },
  done: {
    type: Boolean,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
  url2: {
    type: String,
  },
};

const CompletedQuestions = [];
questions.forEach(function (item) {
  CompletedQuestions.push(
    mongoose.model(
      `${_.camelCase(_.lowerCase(item.topicName))}`,
      completedQuestonSchema
    )
  );
});

export default CompletedQuestions;
