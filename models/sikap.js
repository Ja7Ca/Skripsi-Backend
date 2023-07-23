"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class sikap extends Model {
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
    sikap.init(
        {
            siswaId: DataTypes.INTEGER,
            spiritual: DataTypes.ENUM("A", "B", "C", "D", "E"),
            sosial: DataTypes.ENUM("A", "B", "C", "D", "E"),
        },
        {
            sequelize,
            modelName: "sikap",
        }
    );
    return sikap;
};
