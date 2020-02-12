"use strict";
const mysql = require("mysql");
const db = mysql.createConnection({
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER || "saa",
  password: process.env.DB_PASSWORD || "123456",
  database: process.env.DB_NAME || "appmobile"
});
module.exports = db;
