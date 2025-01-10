import axios from "axios";

export const getSheetTopics = async (sheetName) => {
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
