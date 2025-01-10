/* eslint-disable react/prop-types */
import { createContext, useContext } from "react";
import { useSheet } from "../hooks/useSheet";
import { useAuth } from "../hooks/useAuth";

const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const auth = useAuth();
  const sheet = useSheet();

  const contextValue = { auth, sheet };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
