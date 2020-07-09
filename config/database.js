const { createPool } = require("mysql");

MYSQL_HOST = 'localhost',
MYSQL_PORT = '3000',
MYSQL_USER = 'root',
MYSQL_PASSWORD = '12345678',
MYSQL_DATABASE = 'node-todo',
MYSQL_TABLE = 'registration'

const pool = createPool({
  host: MYSQL_HOST,
  port: MYSQL_PORT,
  user: MYSQL_USER,
  password: MYSQL_PASSWORD,
  database: MYSQL_DATABASE,
  table : MYSQL_DATABASE,
  connectionLimit: 10
});

module.exports = pool;