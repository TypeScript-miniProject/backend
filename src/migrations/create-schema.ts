import { QueryInterface, Sequelize, Options } from "sequelize";
import * as dotenv from 'dotenv';
dotenv.config();
/*
데이터베이스 스키마를 만드는 파일
* */
class options implements Options{
    dialect!: 'mysql';
    username!: string;
    password!: string;
    host!: string;
}

const createDBOptions = new options();
createDBOptions.username = process.env.MYSQL_USERNAME || 'root';
createDBOptions.password = process.env.MYSQL_PASSWORD || 'your password';
createDBOptions.host = process.env.MYSQL_HOST || 'localhost';
createDBOptions.dialect = 'mysql';

let db_name = process.env.MYSQL_DATABASE || 'new DataBase';

const dbCreateSequelize = new Sequelize(createDBOptions);

console.log(`======Create DataBase : ${db_name}======`);

dbCreateSequelize.getQueryInterface().createDatabase(db_name)
    .then(() => {
        console.log("✅db create success!");
    })
    .catch((e) => {
        console.log("❗️error in create db : ", e);
    })
