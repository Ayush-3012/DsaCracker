/* eslint-disable react/prop-types */
import { createContext, useContext } from "react";
import { useSheet } from "../hooks/useSheet";
import { useAuth } from "../hooks/useAuth";
import { useQuestion } from "../hooks/useQuestion";

const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const auth = useAuth();
  const sheet = useSheet();
  const question = useQuestion();

  const contextValue = { auth, sheet, question };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
