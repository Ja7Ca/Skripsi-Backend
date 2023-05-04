"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        let seedMapel = [
            {
                id: 1,
                nama: "Ilmu Pengetahuan Alam",
                alias: "ipa",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: 2,
                nama: "Ilmu Pengetahuan Sosial",
                alias: "ips",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ];
        return queryInterface.bulkInsert("mapels", seedMapel);
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
