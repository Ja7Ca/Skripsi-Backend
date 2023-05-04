"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        let seedNilai = [
            {
                id: 1,
                siswaId: 1,
                mapelId: 1,
                kelas: 1,
                nilai_k3_smst1: 86,
                nilai_k4_smst1: 93,
                nilai_k3_smst2: 0,
                nilai_k4_smst2: 0,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: 2,
                siswaId: 1,
                mapelId: 2,
                kelas: 1,
                nilai_k3_smst1: 85,
                nilai_k4_smst1: 95,
                nilai_k3_smst2: 0,
                nilai_k4_smst2: 0,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ];
        return queryInterface.bulkInsert("nilais", seedNilai);
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
