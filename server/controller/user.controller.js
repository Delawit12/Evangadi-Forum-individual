import userService from "../service/user.service.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

const userController = {
  registerUser: async (req, res) => {
    // check all fields are required
    // console.log(req.body);
    const { firstName, middleName, lastName, otherName, email, password } =
      req.body;
    if (!userEmail || !userPassword || !userPhone) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }
    const isEmailExist = await userService.getUserByEmail(userEmail);
    if (isEmailExist.length) {
      //   console.log(isEmailExist);
      return res.status(500).json({
        success: false,
        message: "Email is already used",
      });
    }

    //  if the userEmail didn't exist we can create the account by it
    // password encryption
    const saltRounds = 10;
    const salt = bcrypt.genSaltSync(saltRounds);
    req.body.userPassword = bcrypt.hashSync(userPassword, salt);
    const registerUser = await userService.registerUser(req.body);
  },
  login: (req, res) => {},
  forgetPassword: (req, res) => {},
  confimOTP: (req, res) => {},
};

export default userController;
