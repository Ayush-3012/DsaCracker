/* eslint-disable react/prop-types */
import { useState } from "react";
import QuestionContext from "./QuestionContext";

const QuestionContextProvider = ({ children }) => {
  const [questions, setQuestions] = useState([]);
  const [description, setDescription] = useState("");
  return (
    <QuestionContext.Provider value={{ questions, setQuestions, description, setDescription }}>
      {children}
    </QuestionContext.Provider>
  );
};

export default QuestionContextProvider;
