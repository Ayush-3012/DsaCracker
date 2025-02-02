import axios from "../config/axiosConfig.js";

// ✅ Fetch all sheets
export const getAllSheets = async (req, res) => {
  try {
    const sheets = await axios.get(`/sheets`);
    return res.status(200).json(sheets.data);
  } catch (error) {
    console.error("Error fetching sheets:", error.message);
    return res.status(500).json({ error: "Failed to fetch sheet topics." });
  }
};

// ✅ Fetch a specific sheet
export const getSelectedSheet = async (req, res) => {
  try {
    const allSheets = await axios.get("/sheets");

    for (let sheet of allSheets.data.sheets) {
      if (sheet.name.toUpperCase() === req.params.sheetName.toUpperCase()) {
        const specificSheet = await axios.get(`/sheets/${sheet._id}`);
        return res.status(200).json(specificSheet.data.foundSheet);
      }
    }

    return res.status(404).json({ error: "Sheet not found." });
  } catch (error) {
    console.error("Error in fetching selected sheet:", error.message);
    return res.status(500).json({ error: "Failed to fetch sheet topics." });
  }
};

// ✅ Fetch topics of a specific sheet
export const getSpecificSheetTopics = async (req, res) => {
  try {
    const allSheets = await axios.get("/sheets");

    for (let sheet of allSheets.data.sheets) {
      if (sheet.name.toUpperCase() === req.params.sheetName.toUpperCase()) {
        const allTopics = await axios.get(`/sheets/${sheet._id}/topics`);
        return res.status(200).json(allTopics.data.topics);
      }
    }

    return res.status(404).json({ error: "Sheet not found." });
  } catch (error) {
    console.error("Error in fetching all topics:", error.message);
    return res.status(500).json({ error: "Failed to fetch topics." });
  }
};

// ✅ Fetch questions of a specific topic in a sheet
export const getSheetQuestions = async (req, res) => {
  try {
    const allSheets = await axios.get("/sheets");

    for (let sheet of allSheets.data.sheets) {
      if (sheet.name.toUpperCase() === req.params.sheetName.toUpperCase()) {
        const allTopics = await axios.get(`/sheets/${sheet._id}/topics`);

        for (let topic of allTopics.data.topics) {
          if (topic.name.toUpperCase() === req.params.topicName.toUpperCase()) {
            const fetchedQuestions = await axios.get(
              `/sheets/${sheet._id}/topics/${topic._id}/questions`
            );
            return res.status(200).json(fetchedQuestions.data);
          }
        }

        return res.status(404).json({ error: "Topic not found." });
      }
    }

    return res.status(404).json({ error: "Sheet not found." });
  } catch (error) {
    console.error("Error in fetching all questions:", error.message);
    return res.status(500).json({ error: "Failed to fetch questions." });
  }
};
