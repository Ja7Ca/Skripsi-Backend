"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        let seedNilai = [];
        for (let siswa = 1; siswa <= 2; siswa++) {
            for (let mapel = 1; mapel <= 9; mapel++) {
                seedNilai.push({
                    siswaId: siswa,
                    mapelId: mapel,
                    kelas: siswa,
                    nilai_k3_smst1: Math.floor(Math.random() * 101),
                    nilai_k4_smst1: Math.floor(Math.random() * 101),
                    nilai_k3_smst2: Math.floor(Math.random() * 101),
                    nilai_k4_smst2: Math.floor(Math.random() * 101),
                    createdAt: new Date(),
                    updatedAt: new Date(),
                });
            }
        }
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
