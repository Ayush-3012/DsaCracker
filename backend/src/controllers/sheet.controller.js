import axios from "../config/axiosConfig.js";

export const getAllSheets = async (req, res) => {
  try {
    const sheets = await axios.get(`/sheets`);
    return res.status(200).json(sheets?.data);
  } catch (error) {
    console.error("Error fetching sheets:", error.message);
    return res.status(500).json({ error: "Failed to fetch sheet topics." });
  }
};

export const getSelectedSheet = async (req, res) => {
  try {
    const allSheets = await axios.get("/sheets");
    await allSheets?.data?.sheets?.map(async (sheet) => {
      if (sheet.name.toUpperCase() === req.params.sheetName.toUpperCase()) {
        const specificSheet = await axios.get(`/sheets/${sheet._id}`);
        return res.status(200).json(specificSheet?.data?.foundSheet);
      }
    });
  } catch (error) {
    console.error("Error in fetching selected sheet:", error.message);
    return res.status(500).json({ error: "Failed to fetch sheet topics." });
  }
};

export const getSpecificSheetTopics = async (req, res) => {
  try {
    const allSheets = await axios.get("/sheets");
    await allSheets?.data?.sheets?.map(async (sheet) => {
      if (sheet.name.toUpperCase() === req.params.sheetName.toUpperCase()) {
        const allTopics = await axios.get(`/topics/${sheet._id}/`);
        return res.status(200).json(allTopics?.data?.topics);
      }
    });
  } catch (error) {
    console.error("Error in fetching all topics :", error.message);
    return res.status(500).json({ error: "Failed to fetch topics." });
  }
};

export const getSheetQuestions = async (req, res) => {
  try {
    const allSheets = await axios.get("/sheets");
    await allSheets?.data?.sheets?.map(async (sheet) => {
      if (sheet.name.toUpperCase() === req.params.sheetName.toUpperCase()) {
        const allTopics = await axios.get(`/topics/${sheet._id}/`);
        await allTopics?.data?.topics?.map(async (topic) => {
          if (topic.name.toUpperCase() === req.params.topicName.toUpperCase()) {
            const fetchedQuestions = await axios.get(
              `/questions/${topic._id}/`
            );
            return res.status(200).json(fetchedQuestions?.data);
          }
        });
      }
    });
  } catch (error) {
    console.error("Error in fetching all questions :", error.message);
    return res.status(500).json({ error: "Failed to fetch questions." });
  }
};
