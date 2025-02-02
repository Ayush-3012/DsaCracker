import { useState } from "react";
import {
  getSpecifcSheet,
  getSpecificSheetTopics,
  getSheetQuestions,
} from "../services/sheetServices";

export const useSheet = () => {
  const [sheet, setSheet] = useState([]);
  const [topics, setTopics] = useState([]);
  const [questions, setQuestions] = useState([]);

  const getSheet = async (sheetName) => {
    const data = await getSpecifcSheet(sheetName);
    if (data?.data?.length !== 0) {
      setSheet(data);
    } else {
      console.log("delay in data fetched, not fetched");
    }
  };

  const getTopics = async (sheetName) => {
    const data = await getSpecificSheetTopics(sheetName);
    if (data?.data?.length !== 0) {
      setTopics(data);
    } else {
      console.log("delay in data fetched, not fetched");
    }
  };

  const getQuestions = async (sheetName, dsName) => {
    const data = await getSheetQuestions(sheetName, dsName);
    if (data?.data?.length !== 0) {
      setQuestions(data);
    } else {
      console.log("delay in data fetched, not fetched");
    }
  };

  return {
    sheet,
    topics,
    questions,
    getSheet,
    getTopics,
    getQuestions,
  };
};
