"use strict";

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class user extends Model {
        checkPassword = (password, db_password) => {
            return bcrypt.compareSync(password, db_password);
        };

        generateToken = (id, username) => {
            const payload = {
                exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24,
                id,
                username,
            };
            console.log(payload);
            const rahasia = "Ini sangat rahasia";
            const token = jwt.sign(payload, rahasia);
            return token;
        };

        static authenticate = async (username, password) => {
            try {
                const userLog = await this.findOne({ where: { username } });
                if (!userLog) return Promise.reject("Username not found!");
                const isPasswordValid = await userLog.checkPassword(
                    password,
                    userLog.password
                );
                if (!isPasswordValid) return Promise.reject("Wrong Password!");

                return Promise.resolve(userLog);
            } catch (error) {
                return Promise.reject(error);
            }
        };
        static associate(models) {
            this.hasMany(models.kelas, { as: "wali" });
        }
    }
    user.init(
        {
            username: DataTypes.STRING,
            password: DataTypes.STRING,
            email: DataTypes.STRING,
            nama: DataTypes.STRING,
            nip: DataTypes.STRING,
            role: DataTypes.ENUM("admin", "guru"),
            key: DataTypes.STRING,
        },
        {
            sequelize,
            modelName: "user",
        }
    );
    return user;
};
