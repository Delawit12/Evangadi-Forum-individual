import express from "express";
import questionController from "../controller/question.controller.js";
import auth from "../auth/auth.js";

const questionRoute = express.Router();

questionRoute.post(
  "/api/questions/askQuestion",
  auth,
  questionController.insertQuestion
);
questionRoute.get(
  "/api/questions/allQuestions",
  questionController.getAllQuestions
);
questionRoute.get(
  "/api/questions/getSingleQuestion:questionId",
  questionController.getSingleQuestion
);

export default questionRoute;
