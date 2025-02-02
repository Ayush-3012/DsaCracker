/* eslint-disable react/prop-types */
import QuestionItems from "./QuestionItems";
import { useAppContext } from "../context/AppContextProvider";

const QuestionTable = () => {
  const { sheet } = useAppContext();

  return (
    <>
      {sheet?.questions?.data?.map((item, index) => (
        <QuestionItems key={index} item={item} />
      ))}
    </>
  );
};

export default QuestionTable;
