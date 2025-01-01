export const useQuestions = () => {
  const [questions, setQuestions] = useState([]);
  const [description, setDescription] = useState("");
  const [completedQuestions, setCompletedQuestions] = useState([]);

  return {
    questions,
    completedQuestions,
    description,
    setCompletedQuestions,
    setQuestions,
    setDescription,
  };
};
