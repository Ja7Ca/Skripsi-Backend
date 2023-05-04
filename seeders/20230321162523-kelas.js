"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        let seedKelas = [
            {
                id: 1,
                rombel: "1",
                nama: "Kelas 1",
                userId: 2,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: 2,
                rombel: "2",
                nama: "Kelas 2",
                userId: 3,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ];
        return queryInterface.bulkInsert("kelas", seedKelas);
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
