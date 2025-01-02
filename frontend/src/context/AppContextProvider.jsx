/* eslint-disable react/prop-types */
import { createContext, useContext } from "react";
import { useTopics } from "../hooks/useTopics";
import { useQuestions } from "../hooks/useQuestions";
import { useAuth } from "../hooks/useAuth";

const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const auth = useAuth();
  const topics = useTopics();
  const questions = useQuestions();

  const contextValue = { auth, topics, questions };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
