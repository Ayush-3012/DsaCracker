import axios from "../config/axiosConfig.js";

export const getSheetTopics = async (req, res) => {
  const { sheetName } = req.params;
  try {
    const response = await axios.get(`/${sheetName}Questions/topics`);
    return res.status(200).json(response?.data);
  } catch (error) {
    console.error("Error fetching sheet topics:", error.message);
    return res.status(500).json({ error: "Failed to fetch sheet topics." });
  }
};

export const getTopicQuestions = async (req, res) => {
  const { sheetName, topicName } = req.params;
  try {
    const response = await axios.get(
      `/${sheetName}Questions/topics/${topicName}`
    );
    return res.status(200).json(response?.data);
  } catch (error) {
    console.error("Error fetching topic questions:", error.message);
    return res.status(500).json({ error: "Failed to fetch topic questions." });
  }
};
