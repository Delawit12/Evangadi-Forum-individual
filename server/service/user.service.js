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
  getOTPByUserEmail: (userEmail, otp) => {
    const rows = query(usersQuery.getOTPByUserEmail, [userEmail]);
    return rows;
  },

  // get user password by user ID, ordered by created date ascending
  getUserPasswordsByUserId: (userId) => {
    const rows = query(usersQuery.getUserPasswordsByUserId, [userId]);
    return rows;
  },
};

export default userService;
