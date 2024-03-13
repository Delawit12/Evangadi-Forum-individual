import express from "express";
import userController from "../controller/user.controller.js";
const userRoute = express.Router();

userRout.post("/api/user/register", userController.registerUser);
// userRout.post("/api/users/otpConfimation", userController.confirmOTP);
// userRout.post("/api/users/login", userController.loginUser);
export default userRoute;
