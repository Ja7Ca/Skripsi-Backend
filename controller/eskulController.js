const { siswa, eskul } = require("../models");

module.exports = {
    getEskul: (req, res) => {
        let { nisn } = req.params;
        eskul
            .findOne({
                include: [
                    {
                        model: siswa,
                        as: "siswa",
                        attributes: ["id", "nama", "nisn"],
                        where: { nisn: nisn },
                    },
                ],
            })
            .then((result) => {
                res.json({
                    message: "eskul berhasil ditemukan",
                    success: true,
                    data: result,
                });
            })
            .catch((err) => {
                res.json({
                    message: "eskul berhasil ditemukan",
                    success: true,
                    data: result,
                });
            });
    },
};
