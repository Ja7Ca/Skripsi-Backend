require("dotenv").config();

const {
    DB_USER,
    DB_PASSWORD,
    DB_NAME,
    DB_HOST,
    DB_PORT,
    DB_USER_DEV,
    DB_PASSWORD_DEV,
    DB_NAME_DEV,
    DB_HOST_DEV,
} = process.env;

module.exports = {
    development: {
        username: DB_USER_DEV,
        password: DB_PASSWORD_DEV,
        database: DB_NAME_DEV,
        host: DB_HOST_DEV,
        dialect: "postgres",
    },
    test: {
        username: "root",
        password: null,
        database: "database_test",
        host: "127.0.0.1",
        dialect: "mysql",
    },
    production: {
        username: DB_USER,
        password: DB_PASSWORD,
        database: DB_NAME,
        host: DB_HOST,
        dialect: "postgres",
        port: DB_PORT,
    },
};
