const { mapel } = require("../models");

module.exports = {
    getMapel: (req, res) => {
        mapel
            .findAll({ exclude: ["createdAt", "updatedAt"] })
            .then((result) => {
                res.json({
                    message: "success get Mapel",
                    success: true,
                    data: result,
                });
            })
            .catch((err) => {
                res.json({
                    message: "gagal get Mapel",
                    success: false,
                    data: err.message,
                });
            });
    },
};
