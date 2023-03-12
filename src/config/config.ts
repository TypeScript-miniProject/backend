import * as dotenv from "dotenv"
dotenv.config()

const config = {
  development: {
    username: process.env.MYSQL_USERNAME || 'root',
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE || 'defaultDb',
    host: process.env.MYSQL_HOST || 'localhost',
    port: 3306,
    dialect: "mysql"
  }
};

export default config;