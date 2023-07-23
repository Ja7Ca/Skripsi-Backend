"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        let seedSaran = [
            {
                id: 1,
                siswaId: 1,
                saran: "Harus belajar lebih giat lagi",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: 2,
                siswaId: 2,
                saran: "Lebih rajin membawa buku",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ];
        return queryInterface.bulkInsert("sarans", seedSaran);
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
