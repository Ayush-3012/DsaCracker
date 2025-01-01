/* eslint-disable react/prop-types */
import AppContext from "./AppContext";
import { useEffect, useState } from "react";
import { createContext, useContext } from "react";

const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const auth = useAuth();
  const topics = useTopics();
  const questions = useQuestions();

  const contextValue = { auth, topics, questions };
  // const [isLoggedIn, setIsLoggedIn] = useState(
  //   sessionStorage.getItem("isLoggedIn") === "true"
  // );
  // const [user, setUser] = useState(sessionStorage.getItem("user") || null);
  // const [isAuthenticated, setIsAuthenticated] = useState(
  //   sessionStorage.getItem("isAuthenticated") === "true"
  // );

  // useEffect(() => {
  //   sessionStorage.setItem("isLoggedIn", isLoggedIn);
  //   sessionStorage.setItem("user", user);
  //   sessionStorage.setItem("isAuthenticated", isAuthenticated);
  // }, [isLoggedIn, user, isAuthenticated]);

  return (
    <AppContext.Provider
      value={{
        contextValue,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
