const mysql = require('mysql');
require('dotenv').config();

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'okanemo',
});

connection.connect((error, res) => {
  if (error) {
    console.log('Database Belom Terkoneksi');
  } else {
    console.log('Connected');
  }
});

module.exports = connection;
