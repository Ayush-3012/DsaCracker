/* eslint-disable react/prop-types */
import AppContext from "./AppContext";
import { useState } from "react";

const AppContextProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <AppContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
