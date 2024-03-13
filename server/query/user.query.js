export default {
  // select query
  getUserByUserId: `SELECT * FROM users WHERE userId = ?;`,
  getUserByEmail: `SELECT * FROM users WHERE email = ?;`,
  getUserPasswordByUserId: `SELECT * FROM userPassword WHERE userPasswordId = ?;`,
  getOTPByUserEmail: `SELECT * FROM users WHERE email = ? AND otp = ?;`,
  getUserPasswordByUserId: `SELECT * FROM userPassword WHERE userId = ? ORDER BY createdDate ASC`,

  // Insert Queries
  insertInToUser: `INSERT INTO users (username, firstName, lastName, email, otp, insertedDatetime) VALUES (?, ?, ?, ?, ?, CURRENT_TIMESTAMP);`,
  insertInToUserPassword: `INSERT INTO userPassword (userId, userPassword, createdDate) VALUES (?, ?, CURRENT_TIMESTAMP);`,

  // Update Queries
  updateOTP: `UPDATE users SET OTP = ? WHERE userId = ?`,
  updateUserPassword: `UPDATE userPassword SET userId = ?, userPassword = ? WHERE userPasswordId = ?;`,
};
