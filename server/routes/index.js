import express from "express";
const appRoute = express.Router();

// all routes
import userRoute from "./user.route.js";
import questionRoute from "./question.route.js";
import answerRoute from "./answer.route.js";
// import profileRoute from "./profile.route.js";

// adding to Middleware
appRoute.use(userRoute);
appRoute.use(questionRoute);
appRoute.use(answerRoute);
// appRoute.use(profileRoute);

export default appRoute;
