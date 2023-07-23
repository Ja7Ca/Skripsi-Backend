"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class prestasi extends Model {
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
    prestasi.init(
        {
            siswaId: DataTypes.INTEGER,
            olahRaga: DataTypes.TEXT,
            kesenian: DataTypes.TEXT,
        },
        {
            sequelize,
            modelName: "prestasi",
        }
    );
    return prestasi;
};
