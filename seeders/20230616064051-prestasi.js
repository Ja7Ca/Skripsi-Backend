"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        let seedPrestasi = [
            {
                id: 1,
                siswaId: 1,
                olahRaga: null,
                kesenian: "Juara 2 lomba pencaksilat kabupaten",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: 2,
                siswaId: 2,
                olahRaga: "Juara 1 sepak bola kecamatan",
                kesenian: null,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ];
        return queryInterface.bulkInsert("prestasis", seedPrestasi);
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
