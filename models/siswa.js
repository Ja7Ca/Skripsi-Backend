"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class siswa extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            this.belongsTo(models.kelas, {
                foreignKey: "kelaId",
                as: "kelas",
            });
        }
    }
    siswa.init(
        {
            kelaId: DataTypes.INTEGER,
            nama: DataTypes.TEXT,
            nisn: DataTypes.TEXT,
            nis: DataTypes.TEXT,
            tempatLahir: DataTypes.STRING,
            tanggalLahir: DataTypes.DATEONLY,
            recycle: DataTypes.BOOLEAN,
        },
        {
            sequelize,
            modelName: "siswa",
        }
    );
    return siswa;
};
