"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable("eskuls", {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            siswaId: {
                type: Sequelize.INTEGER,
                unique: true,
                references: {
                    model: "siswas",
                    key: "id",
                },
                onUpdate: "cascade",
                onDelete: "cascade",
            },
            pramuka: {
                type: Sequelize.STRING,
            },
            komputer: {
                type: Sequelize.STRING,
            },
            menari: {
                type: Sequelize.STRING,
            },
            melukis: {
                type: Sequelize.STRING,
            },
            marchingBand: {
                type: Sequelize.STRING,
            },
            belaDiri: {
                type: Sequelize.STRING,
            },
            musik: {
                type: Sequelize.STRING,
            },
            karawitan: {
                type: Sequelize.STRING,
            },
            bola: {
                type: Sequelize.STRING,
            },
            hadroh: {
                type: Sequelize.STRING,
            },
            tilawah: {
                type: Sequelize.STRING,
            },
            paduan: {
                type: Sequelize.STRING,
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
        await queryInterface.dropTable("eskuls");
    },
};
