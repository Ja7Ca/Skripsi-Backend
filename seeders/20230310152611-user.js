"use strict";

const bcrypt = require("bcrypt");
const hash = (password) => {
    return bcrypt.hashSync(password, 10);
};

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        let seedUser = [
            {
                id: 1,
                username: "admin",
                password: hash("admin"),
                nama: "Admin",
                nip: "11111111 1111111 1 111",
                role: "admin",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: 2,
                username: "kelas1",
                password: hash("kelas1"),
                nama: "Wahono",
                nip: "11991230 1231249 0 001",
                role: "guru",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: 3,
                username: "kelas2",
                password: hash("kelas2"),
                nama: "Sasono",
                nip: "11995414 1231567 0 002",
                role: "guru",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ];
        return queryInterface.bulkInsert("users", seedUser);
    },

    async down(queryInterface, Sequelize) {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
    },
};
