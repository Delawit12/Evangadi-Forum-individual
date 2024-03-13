import express from "express";
const appRoute = express.Router();

// all routes
import userRoute from "./user.route.js";

// adding to Middleware
appRoute.use(userRoute);

export default appRoute;
