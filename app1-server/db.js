const mysql = require('mysql2')

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'arya',
  port: 3306,
  database: 'blogapp',
  connectionLimit: 10,
})

module.exports = {
  pool,
}
