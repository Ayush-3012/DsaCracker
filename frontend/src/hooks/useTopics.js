import { useState } from "react";

export const useTopics = () => {
  const [topics, setTopics] = useState([]);

  return {
    topics,
    setTopics,
  };
};
