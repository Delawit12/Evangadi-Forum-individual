import express from "express";
const appRoute = express.Router();

// all routes
import userRoute from "./user.route.js";
import questionRoute from "./question.route.js";

// adding to Middleware
appRoute.use(userRoute);
appRoute.use(questionRoute);

export default appRoute;
