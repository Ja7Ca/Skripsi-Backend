"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        let seedSiswa = [
            {
                id: 1,
                nama: "Kobira Jamaika",
                nisn: "11100031231",
                nis: "3012",
                tempatLahir: "Karanganayar",
                tanggalLahir: new Date("2003/12/12"),
                kelaId: 1,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: 2,
                nama: "Hisaki Gelar",
                nisn: "1100031231",
                nis: "3013",
                tempatLahir: "Surakarta",
                tanggalLahir: new Date("2003/12/12"),
                kelaId: 2,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ];
        return queryInterface.bulkInsert("siswas", seedSiswa);
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
