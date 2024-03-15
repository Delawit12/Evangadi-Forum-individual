import questionService from "../service/question.service.js";

const questionController = {
  insertQuestion: async (req, res) => {
    const userId = req.body.Id;
    console.log(userId);
    const { question, questionDescription, category } = req.body;
    req.body.userId = userId;

    // check all felids are required
    if (!question || !userId) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    // insert the question to the table
    const isQuestionInserted = questionService.insertQuestion(req.body);

    if (!isQuestionInserted) {
      return res.status(400).json({
        success: false,
        message: "Question is not inserted properly",
      });
    } else {
      return res.status(200).json({
        success: true,
        message: "Question inserted successfully",
      });
    }
  },
  getAllQuestions: async (req, res) => {
    try {
      // Call the service method to fetch all questions
      const questions = await questionService.getAllQuestions();

      // Send the questions as a response
      if (questions) {
        res.status(200).json({ questions });
      } else {
        res.status(404).json({ message: "No questions found" });
      }
    } catch (error) {
      // Handle errors
      console.error("Error in getAllQuestionsController:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },
  getSingleQuestion: async (req, res) => {
    const questionId = req.params.questionId;

    try {
      // Retrieve question from the database based on question ID
      const question = await questionService.getQuestionByQuestionId(
        questionId
      );

      if (!question) {
        // If question not found, send 404 response
        return res.status(404).json({ message: "Question not found" });
      }

      // Send the question as a response
      res.status(200).json({ question });
    } catch (error) {
      // Handle errors
      console.error("Error in getSingleQuestion:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },
};

export default questionController;
