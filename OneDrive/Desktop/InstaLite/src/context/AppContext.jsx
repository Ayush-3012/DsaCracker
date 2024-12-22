/* eslint-disable react/prop-types */
// AppContext.js

import { createContext, useEffect, useState } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [user, setUser] = useState(sessionStorage.getItem("user") || null);
  const [posts, setPosts] = useState([]);
  const [isLoggedin, setIsLoggedin] = useState(
    sessionStorage.getItem("isLoggedIn") === "true"
  );
  const [isAuthenticated, setIsAuthenticated] = useState(
    sessionStorage.getItem("isAuthenticated") === "true"
  );
  const [isNewUser, setIsNewUser] = useState(false);

  useEffect(() => {
    sessionStorage.setItem("isAuthenticated", isAuthenticated);
    sessionStorage.setItem("isLoggedIn", isLoggedin);
    sessionStorage.setItem("user", user);
  }, [isAuthenticated, isLoggedin, user]);

  return (
    <AppContext.Provider
      value={{
        user,
        posts,
        isLoggedin,
        isAuthenticated,
        isNewUser,
        setUser,
        setPosts,
        setIsLoggedin,
        setIsAuthenticated,
        setIsNewUser,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
