// the database connection is created based on the concept of pool
import mysql from "mysql2/promise";
import dotenv from "dotenv";
dotenv.config();
const host = process.env.DB_HOST;
const port = process.env.DB_PORT;
const password = process.env.DB_PASS;
const user = process.env.DB_USER;
const database = process.env.DB_NAME;

const connection = mysql.createPool({
  host,
  port,
  password,
  user,
  database,
  connectionLimit: 20,
});

async function query(sql, params) {
  const [rows, fields] = await connection.execute(sql, params, (err, res) => {
    if (err) {
      console.log(err.message);
    } else {
      console.log("db connected");
    }
  });
  return rows;
}

export default query;
