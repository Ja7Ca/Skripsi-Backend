"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable("prestasis", {
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
            olahRaga: {
                type: Sequelize.TEXT,
            },
            kesenian: {
                type: Sequelize.TEXT,
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
        await queryInterface.dropTable("prestasis");
    },
};
