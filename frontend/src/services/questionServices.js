import axios from "axios";

export const fetchCompletedQuestions = async () => {
  try {
    const res = await axios.get(
      `${import.meta.env.VITE_API_ROUTES}/v1/questions/getCompletedQuestions`,
      { withCredentials: true }
    );

    return res;
  } catch (error) {
    return error;
  }
};

export const saveCompletedQuestion = async (question) => {
  try {
    const res = await axios.post(
      `${import.meta.env.VITE_API_ROUTES}/v1/questions/saveCompletedQuestion`,
      { question },
      { withCredentials: true }
    );

    return res;
  } catch (error) {
    return error;
  }
};
