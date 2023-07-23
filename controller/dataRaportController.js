const { siswa, sikap, saran, prestasi, kehadiran } = require("../models");

module.exports = {
    getSikap: (req, res) => {
        let { nisn } = req.params;
        sikap
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
                    message: "sikap berhasil ditemukan",
                    success: true,
                    data: result,
                });
            })
            .catch((err) => {
                res.json({
                    message: "sikap berhasil ditemukan",
                    success: true,
                    data: result,
                });
            });
    },
    getSaran: (req, res) => {
        let { nisn } = req.params;
        saran
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
                    message: "saran berhasil ditemukan",
                    success: true,
                    data: result,
                });
            })
            .catch((err) => {
                res.json({
                    message: "saran berhasil ditemukan",
                    success: true,
                    data: result,
                });
            });
    },
    getPrestasi: (req, res) => {
        let { nisn } = req.params;
        prestasi
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
                    message: "prestasi berhasil ditemukan",
                    success: true,
                    data: result,
                });
            })
            .catch((err) => {
                res.json({
                    message: "prestasi berhasil ditemukan",
                    success: true,
                    data: result,
                });
            });
    },
    getKehadiran: (req, res) => {
        let { nisn } = req.params;
        kehadiran
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
                    message: "kehadiran berhasil ditemukan",
                    success: true,
                    data: result,
                });
            })
            .catch((err) => {
                res.json({
                    message: "kehadiran berhasil ditemukan",
                    success: true,
                    data: result,
                });
            });
    },
};
