import query from "../config/db.js";
import usersQuery from "../query/user.query.js";

const userService = {
  // get user by user ID
  getUserByUserId: (userId) => {
    const rows = query(usersQuery.getUserByUserId, [userId]);
    return rows;
  },

  // get user by email
  getUserByEmail: (userEmail) => {
    const rows = query(usersQuery.getUserByEmail, [userEmail]);
    return rows;
  },

  // get user password by user ID
  getUserPasswordByUserId: (userId) => {
    const rows = query(usersQuery.getUserPasswordByUserId, [userId]);
    return rows;
  },

  // get  OTP by userEmail
  getOTPByUserEmail: (userEmail) => {
    const rows = query(usersQuery.getOTPByUserEmail, [userEmail]);
    return rows;
  },

  // get user password by user ID, ordered by created date ascending
  getUserPasswordsByUserId: (userId) => {
    const rows = query(usersQuery.getUserPasswordsByUserId, [userId]);
    return rows;
  },
  // Insert user data into the users table
  insertInToUser: (data) => {
    console.log(data);
    const rows = query(usersQuery.insertInToUser, [
      data.username,
      data.firstName,
      data.lastName,
      data.email,
      data.OTP,
    ]);
    return rows;
  },

  // Insert user password data into the userPassword table
  insertInToUserPassword: (data) => {
    const rows = query(usersQuery.insertInToUserPassword, [
      data.userId,
      data.userPassword,
    ]);
    return rows;
  },
  updateOTP: (data) => {
    const rows = query(usersQuery.updateOTP, [data.OTP, data.userId]);
    return rows;
  },
  confirmOTPByEmail: async (email, otp) => {
    const rows = await query(usersQuery.confirmOTPByEmail, [otp, email]);
    return rows;
  },
};

export default userService;
