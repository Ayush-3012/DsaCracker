import { useEffect, useState } from "react";
import {
  checkAuthStatus,
  loginUser,
  logoutUser,
  registerUser,
} from "../services/authServices";

export const useAuth = () => {
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const checkStatus = async () => {
      const data = await checkAuthStatus();
      if (data) {
        setUser(data);
        setIsLoggedIn(true);
        localStorage.setItem("userId", data.userId);
      }
    };
    checkStatus();
  }, []);

  const registerAuth = async (user) => {
    const data = await registerUser(user);
    return data;
  };

  const loginAuth = async (email, password) => {
    const data = await loginUser(email, password);
    if (data.status === 200) {
      setUser(data);
      setIsLoggedIn(true);
      localStorage.setItem("userId", data?.data?.userId);
    }
    return data;
  };

  const logoutAuth = async () => {
    const data = await logoutUser();
    if (data.status === 200) {
      setUser(null);
      setIsLoggedIn(false);
      localStorage.removeItem("userId");
    }
    return data;
  };

  return {
    user,
    isLoggedIn,
    loginAuth,
    logoutAuth,
    registerAuth,
  };
};
