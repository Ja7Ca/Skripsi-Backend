"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class kehadiran extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            this.belongsTo(models.siswa, {
                foreignKey: "siswaId",
                as: "siswa",
            });
        }
    }
    kehadiran.init(
        {
            siswaId: DataTypes.INTEGER,
            sakit: DataTypes.INTEGER,
            ijin: DataTypes.INTEGER,
            tanpaKehadiran: DataTypes.INTEGER,
        },
        {
            sequelize,
            modelName: "kehadiran",
        }
    );
    return kehadiran;
};
