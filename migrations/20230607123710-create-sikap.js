"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable("sikaps", {
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
            spiritual: {
                type: Sequelize.STRING,
            },
            sosial: {
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
        await queryInterface.dropTable("sikaps");
    },
};
