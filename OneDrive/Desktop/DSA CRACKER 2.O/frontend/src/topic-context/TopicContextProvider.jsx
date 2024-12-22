/* eslint-disable react/prop-types */
import { useState } from "react";
import TopicContext from "./TopicContext";

const TopicContextProvider = ({ children }) => {
  const [topics, setTopics] = useState([]);
  return (
    <TopicContext.Provider value={{ topics, setTopics }}>
      {children}
    </TopicContext.Provider>
  );
};

export default TopicContextProvider;
