import { useState, useEffect } from "react";
import { fetchCompletedQuestions, saveCompletedQuestion } from "../services/questionServices.js";

export const useQuestion = () => {
  useEffect(() => {
    const fetchCompleted = async () => {
      const data = await fetchCompletedQuestions();
      return data;
    };
    fetchCompleted();
  }, []);

  const saveQuestion = async (question) => {
    const data = await saveCompletedQuestion(question);
    return data;
  };

  return {
    saveQuestion,
  };
};
