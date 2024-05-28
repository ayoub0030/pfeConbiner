require('dotenv').config(); // Load environment variables from .env file

module.exports = {
  development: {
    username: 'root',
    password: 'password',
    database: 'tutu',
    host: 'localhost',
    dialect: 'mysql',
  },
  test: {
    username: "root",
    password: null,
    database: "database_test",
    host: "127.0.0.1",
    dialect: "mysql"
  },
  production: {
    username: "root",
    password: null,
    database: "database_production",
    host: "127.0.0.1",
    dialect: "mysql"
  }
};
