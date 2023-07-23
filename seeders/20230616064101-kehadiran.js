"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        let seedKehadiran = [
            {
                id: 1,
                siswaId: 1,
                sakit: 0,
                ijin: 2,
                tanpaKehadiran: 0,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: 2,
                siswaId: 2,
                sakit: 1,
                ijin: 0,
                tanpaKehadiran: 1,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ];
        return queryInterface.bulkInsert("kehadirans", seedKehadiran);
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
