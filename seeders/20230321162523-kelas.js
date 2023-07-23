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
            {
                id: 3,
                rombel: "3",
                nama: "Kelas 3",
                userId: null,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: 4,
                rombel: "4",
                nama: "Kelas 4",
                userId: null,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: 5,
                rombel: "5",
                nama: "Kelas 5",
                userId: null,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: 6,
                rombel: "6",
                nama: "Kelas 6",
                userId: null,
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
