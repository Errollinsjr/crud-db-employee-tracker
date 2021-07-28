require('dotenv').config();
const mysql = require('mysql');
// const Sequelize = require('sequelize');

const connection = mysql.createConnection({
  host: 'localhost',

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: process.env.user,

  // Your password
  password: process.env.password,
  database: process.env.database
});

module.exports = mysql;
module.exports = connection;
