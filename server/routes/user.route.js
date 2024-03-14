import express from "express";
import userController from "../controller/user.controller.js";
const userRoute = express.Router();

userRoute.post("/api/user/register", userController.registerUser);
userRoute.post("/api/users/login", userController.loginUser);
userRoute.post("/api/users/forgetPassword", userController.forgetPassword);
userRoute.post("/api/users/conformation", userController.confirmOTP);
userRoute.post("/api/users/newPassword", userController.newPassword);

export default userRoute;
