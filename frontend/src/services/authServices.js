import axios from "axios";

export const registerUser = async (user) => {
  try {
    const res = await axios.post(
      `${import.meta.env.VITE_API_ROUTES}/v1/users/register`,
      { user },
      { withCredentials: true }
    );
    return res;
  } catch (error) {
    return error;
  }
};

export const loginUser = async (email, password) => {
  try {
    const res = await axios.post(
      `${import.meta.env.VITE_API_ROUTES}/v1/users/login`,
      { email, password },
      { withCredentials: true }
    );
    return res;
  } catch (error) {
    return error;
  }
};

export const checkAuthStatus = async () => {
  try {
    const res = await axios.get(
      `${import.meta.env.VITE_API_ROUTES}/v1/users/auth-status`,
      { withCredentials: true }
    );
    const data = res.data;
    return data;
  } catch (error) {
    if (error) {
      throw new Error("Unable to Authenticate" + error.message);
    }
    return error;
  }
};

export const logoutUser = async () => {
  try {
    const res = await axios.get(
      `${import.meta.env.VITE_API_ROUTES}/v1/users/logout`,
      {
        withCredentials: true,
      }
    );
    return res;
  } catch (error) {
    return error;
  }
};
