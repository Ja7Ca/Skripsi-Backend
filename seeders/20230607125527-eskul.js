"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        let seedEskul = [
            {
                id: 1,
                siswaId: 1,
                pramuka: "A",
                komputer: "A",
                menari: "A",
                melukis: "A",
                marchingBand: "A",
                belaDiri: "A",
                musik: "A",
                karawitan: "A",
                bola: "A",
                hadroh: "A",
                tilawah: "A",
                paduan: "A",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: 2,
                siswaId: 2,
                pramuka: "A",
                komputer: "A",
                menari: "A",
                melukis: "A",
                marchingBand: "A",
                belaDiri: "A",
                musik: "A",
                karawitan: "A",
                bola: "A",
                hadroh: "A",
                tilawah: "A",
                paduan: "A",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ];
        return queryInterface.bulkInsert("eskuls", seedEskul);
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
