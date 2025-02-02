import axios from "axios";

export const getAllSheet = async () => {
  try {
    const res = await axios.get(
      `${import.meta.env.VITE_API_ROUTES}/v2/sheets/`,
      { withCredentials: true }
    );
    return res;
  } catch (error) {
    return error;
  }
};

export const getSpecifcSheet = async (sheetName) => {
  try {
    const res = await axios.get(
      `${import.meta.env.VITE_API_ROUTES}/v2/sheets/${sheetName}`,
      { withCredentials: true }
    );
    return res;
  } catch (error) {
    return error;
  }
};

export const getSpecificSheetTopics = async (sheetName) => {
  try {
    const res = await axios.get(
      `${import.meta.env.VITE_API_ROUTES}/v2/sheets/${sheetName}/topics`,
      { withCredentials: true }
    );
    return res;
  } catch (error) {
    return error;
  }
};

export const getSheetQuestions = async (sheetName, dsName) => {
  try {
    const res = await axios.get(
      `${
        import.meta.env.VITE_API_ROUTES
      }/v2/sheets/${sheetName}/topics/${dsName}`,
      { withCredentials: true }
    );
    return res;
  } catch (error) {
    return error;
  }
};
