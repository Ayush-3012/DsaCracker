/* eslint-disable react/prop-types */
import { useContext } from "react";
import QuestionItems from "./QuestionItems";
import QuestionContext from "../../question-context/QuestionContext";

const QuestionTable = () => {
  const { questions } = useContext(QuestionContext);

  return (
    <>
      {questions?.map((item, index) => (
        <QuestionItems key={index} item={item} />
      ))}
    </>
  );
};

export default QuestionTable;
