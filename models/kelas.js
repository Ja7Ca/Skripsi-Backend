"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class kelas extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            this.belongsTo(models.user, {
                foreignKey: "userId",
                as: "wali",
                unique: true,
            });
            this.hasMany(models.siswa, { as: "siswa" });
        }
    }
    kelas.init(
        {
            userId: DataTypes.INTEGER,
            rombel: DataTypes.ENUM("1", "2", "3", "4", "5", "6"),
            nama: DataTypes.STRING,
        },
        {
            sequelize,
            modelName: "kelas",
        }
    );
    return kelas;
};
