/* eslint-disable react/prop-types */
import { useState } from "react";
import QuestionContext from "./QuestionContext";

const QuestionContextProvider = ({ children }) => {
  const [questions, setQuestions] = useState([]);
  const [description, setDescription] = useState("");
  const [completedQuestions, setCompletedQuestions] = useState([]);

  return (
    <QuestionContext.Provider
      value={{
        questions,
        completedQuestions,
        description,
        setCompletedQuestions,
        setQuestions,
        setDescription,
      }}
    >
      {children}
    </QuestionContext.Provider>
  );
};

export default QuestionContextProvider;
