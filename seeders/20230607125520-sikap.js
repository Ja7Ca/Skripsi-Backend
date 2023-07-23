"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        let seedSikap = [
            {
                id: 1,
                siswaId: 1,
                spiritual: "A",
                sosial: "A",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: 2,
                siswaId: 2,
                spiritual: "A",
                sosial: "A",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ];
        return queryInterface.bulkInsert("sikaps", seedSikap);
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
