import dotenv from "dotenv";
// import nodemailer from 'nodemailer';
dotenv.config();

export default {
  generateDigitOTP() {
    return Math.floor(Math.random() * 900000 + 100000);
  },
};
