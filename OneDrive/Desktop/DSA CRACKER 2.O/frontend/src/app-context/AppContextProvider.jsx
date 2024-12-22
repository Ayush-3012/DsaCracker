/* eslint-disable react/prop-types */
import AppContext from "./AppContext";
import { useEffect, useState } from "react";

const AppContextProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(
    sessionStorage.getItem("isLoggedIn") === "true"
  );
  const [user, setUser] = useState(sessionStorage.getItem("user") || null);
  const [isAuthenticated, setIsAuthenticated] = useState(
    sessionStorage.getItem("isAuthenticated") === "true"
  );

  useEffect(() => {
    sessionStorage.setItem("isLoggedIn", isLoggedIn);
    sessionStorage.setItem("user", user);
    sessionStorage.setItem("isAuthenticated", isAuthenticated);
  }, [isLoggedIn, user, isAuthenticated]);

  return (
    <AppContext.Provider
      value={{
        isLoggedIn,
        user,
        isAuthenticated,
        setIsAuthenticated,
        setUser,
        setIsLoggedIn,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
