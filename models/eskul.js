"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class eskul extends Model {
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
    eskul.init(
        {
            siswaId: DataTypes.INTEGER,
            pramuka: DataTypes.ENUM("A", "B", "C", "D", "E"),
            komputer: DataTypes.ENUM("A", "B", "C", "D", "E"),
            menari: DataTypes.ENUM("A", "B", "C", "D", "E"),
            melukis: DataTypes.ENUM("A", "B", "C", "D", "E"),
            marchingBand: DataTypes.ENUM("A", "B", "C", "D", "E"),
            belaDiri: DataTypes.ENUM("A", "B", "C", "D", "E"),
            musik: DataTypes.ENUM("A", "B", "C", "D", "E"),
            karawitan: DataTypes.ENUM("A", "B", "C", "D", "E"),
            bola: DataTypes.ENUM("A", "B", "C", "D", "E"),
            hadroh: DataTypes.ENUM("A", "B", "C", "D", "E"),
            tilawah: DataTypes.ENUM("A", "B", "C", "D", "E"),
            paduan: DataTypes.ENUM("A", "B", "C", "D", "E"),
        },
        {
            sequelize,
            modelName: "eskul",
        }
    );
    return eskul;
};
