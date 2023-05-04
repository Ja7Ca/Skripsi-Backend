"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class nilai extends Model {
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
            this.belongsTo(models.mapel, {
                foreignKey: "mapelId",
                as: "mapel",
            });
        }
    }
    nilai.init(
        {
            siswaId: DataTypes.INTEGER,
            mapelId: DataTypes.INTEGER,
            kelas: DataTypes.INTEGER,
            nilai_k3_smst1: DataTypes.INTEGER,
            nilai_k4_smst1: DataTypes.INTEGER,
            nilai_k3_smst2: DataTypes.INTEGER,
            nilai_k4_smst2: DataTypes.INTEGER,
        },
        {
            sequelize,
            modelName: "nilai",
        }
    );
    return nilai;
};
