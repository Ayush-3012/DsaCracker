import { useState } from "react";
import { getSheetTopics } from "../services/sheetServices";

export const useSheet = () => {
  const [topics, setTopics] = useState([]);
  const [questions, setQuestions] = useState([]);
  const [description, setDescription] = useState("");
  const [completedQuestions, setCompletedQuestions] = useState([]);

  const getTopics = async (sheetName) => {
    const data = await getSheetTopics(sheetName);
    if (data?.data?.length !== 0) {
      setTopics(data);
    } else {
      console.log("delay in data fetched, not fetched");
      await getSheetTopics(sheetName);
    }
  };

  return {
    topics,
    questions,
    completedQuestions,
    description,
    setCompletedQuestions,
    setQuestions,
    setDescription,
    getTopics,
  };
};
