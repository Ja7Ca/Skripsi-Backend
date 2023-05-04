"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable("siswas", {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            kelaId: {
                type: Sequelize.INTEGER,
                references: {
                    model: "kelas",
                    key: "id",
                },
                onUpdate: "cascade",
                onDelete: "cascade",
            },
            nama: {
                type: Sequelize.TEXT,
            },
            nisn: {
                type: Sequelize.TEXT,
                unique: true,
            },
            nis: {
                type: Sequelize.TEXT,
            },
            tempatLahir: {
                type: Sequelize.STRING,
            },
            tanggalLahir: {
                type: Sequelize.DATE,
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable("siswas");
        // return queryInterface.sequelize.transaction((t) => {
        //     return Promise.all([
        //         queryInterface.removeColumn("siswa", "kelaId", {
        //             transaction: t,
        //         }),
        //     ]);
        // });
    },
};
