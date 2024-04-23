const mysql = require("mysql2");

// let pool = mysql.connect({
//   host: process.env.DB_HOST || "127.0.0.1",
//   database: process.env.DB_NAME || "project_peso",
//   user: process.env.DB_USER || "root",
//   password: process.env.DB_PASS || "",
//   port: process.env.DB_PORT || 3306,
// });

let pool = mysql.connect({
  host: process.env.PROD_HOST,
  database: process.env.PROD_NAME,
  user: process.env.PROD_USER,
  password: process.env.PROD_PASS,
  port: process.env.PROD_PORT,
});

pool.connect((err) => {
  if (!err) {
    console.log("Database connected successfully.");
  } else {
    console.log(err);
  }
});

module.exports = pool;
