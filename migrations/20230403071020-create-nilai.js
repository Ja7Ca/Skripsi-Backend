"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable("nilais", {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            siswaId: {
                type: Sequelize.INTEGER,
                references: {
                    model: "siswas",
                    key: "id",
                },
                onUpdate: "cascade",
                onDelete: "cascade",
            },
            mapelId: {
                type: Sequelize.INTEGER,
                references: {
                    model: "mapels",
                    key: "id",
                },
                onUpdate: "cascade",
                onDelete: "cascade",
            },
            kelas: {
                type: Sequelize.INTEGER,
            },
            nilai_k3_smst1: {
                type: Sequelize.INTEGER,
            },
            nilai_k4_smst1: {
                type: Sequelize.INTEGER,
            },
            nilai_k3_smst2: {
                type: Sequelize.INTEGER,
            },
            nilai_k4_smst2: {
                type: Sequelize.INTEGER,
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
        await queryInterface.dropTable("nilais");
    },
};
