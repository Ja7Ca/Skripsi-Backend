const { kelas, user } = require("../models");

module.exports = {
    getKelas: (req, res) => {
        if (req.user.role == "admin") {
            kelas
                .findAll({
                    attributes: ["id", "rombel", "nama"],
                    include: {
                        model: user,
                        as: "wali",
                        attributes: ["id", "nama", "nip"],
                    },
                })
                .then((response) => {
                    res.json({
                        success: true,
                        message: "Success get all kelas",
                        data: response,
                    });
                });
        } else {
            kelas
                .findOne({
                    where: { userId: req.user.id },
                    attributes: ["id", "rombel", "nama"],
                    include: {
                        model: user,
                        as: "wali",
                        attributes: ["id", "nama", "nip"],
                    },
                })
                .then((response) => {
                    res.json({
                        success: true,
                        message: "Success get kelas",
                        data: response,
                    });
                });
        }
    },
    getKelasKosong: (req, res) => {
        kelas
            .findAll({ where: { userId: null } })
            .then((result) => {
                res.json({
                    message: "success get kelas kosong",
                    success: true,
                    data: result,
                });
            })
            .catch((err) => {
                res.json({
                    message: err.message,
                    success: false,
                });
            });
    },
};
