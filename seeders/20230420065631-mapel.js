"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        let seedMapel = [
            {
                id: 1,
                nama: "Pendidikan Agama dan Budi Pekert",
                alias: "pai",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: 2,
                nama: "Pendidikan Pancasila dan Kewarganegaraan",
                alias: "pkn",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: 3,
                nama: "Bahasa Indonesia",
                alias: "bindo",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: 4,
                nama: "Matematika",
                alias: "mtk",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: 5,
                nama: "Ilmu Pengetahuan Alam",
                alias: "ipa",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: 6,
                nama: "Ilmu Pengetahuan Sosial",
                alias: "ips",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: 7,
                nama: "Seni Budaya dan Parkarya",
                alias: "sbd",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: 8,
                nama: "Pendidikan Jasmani, Olahraga dan Kesehatan",
                alias: "pjok",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: 9,
                nama: "Bahasa Jawa",
                alias: "bjawa",
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
