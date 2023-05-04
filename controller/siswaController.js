const { kelas, siswa } = require("../models");

module.exports = {
    getSiswa: (req, res) => {
        if (req.user.role == "admin") {
            siswa
                .findAll({
                    attributes: [
                        "id",
                        "nama",
                        "nisn",
                        "nis",
                        "tempatLahir",
                        "tanggalLahir",
                    ],
                    include: {
                        model: kelas,
                        as: "kelas",
                        attributes: ["id", "rombel", "nama"],
                    },
                })
                .then((response) => {
                    res.json({
                        success: true,
                        message: "Success get all siswa",
                        data: response,
                    });
                });
        } else {
            siswa
                .findAll({
                    attributes: [
                        "id",
                        "nama",
                        "nisn",
                        "nis",
                        "tempatLahir",
                        "tanggalLahir",
                    ],
                    include: {
                        model: kelas,
                        as: "kelas",
                        attributes: ["id", "rombel", "nama"],
                        where: { userId: req.user.id },
                    },
                })
                .then((response) => {
                    res.json({
                        success: true,
                        message: "Success get siswa",
                        data: response,
                    });
                });
        }
    },
    cekNisn: (req, res) => {
        let { nisn } = req.params;
        siswa
            .findOne({
                attributes: ["nama"],
                where: { nisn },
            })
            .then((response) => {
                if (response) {
                    res.json({
                        message: "Nisn Sudah dipakai",
                        success: false,
                        data: response,
                    });
                } else {
                    res.json({
                        message: "Nisn Kosong",
                        success: true,
                        data: response,
                    });
                }
            });
    },
    cekNis: (req, res) => {
        let { nis } = req.params;
        siswa
            .findOne({
                attributes: ["nama"],
                where: { nis },
            })
            .then((response) => {
                if (response) {
                    res.json({
                        message: "Nis Sudah dipakai",
                        success: false,
                        data: response,
                    });
                } else {
                    res.json({
                        message: "Nis Kosong",
                        success: true,
                        data: response,
                    });
                }
            });
    },
    addSiswa: (req, res) => {
        let { nama, nisn, nis, tempat, tanggal } = req.body;
        kelas
            .findOne({
                attributes: ["id"],
                where: { userId: req.user.id },
            })
            .then((response) => {
                console.log(response.id);
                siswa
                    .create({
                        nama,
                        nisn,
                        nis,
                        tempatLahir: tempat,
                        tanggalLahir: tanggal,
                        kelaId: response.id,
                    })
                    .then((resSiswa) => {
                        res.json({
                            message: "Success tambah siswa",
                            success: true,
                            data: resSiswa,
                        });
                    })
                    .catch((err) => {
                        res.json({
                            message: "Gagal tambah siswa",
                            success: false,
                            data: err.message,
                        });
                    });
            });
    },
    getOneSiswa: (req, res) => {
        let { nisn } = req.params;
        siswa
            .findOne({
                where: { nisn },
                attributes: [
                    "id",
                    "nama",
                    "nisn",
                    "nis",
                    "tempatLahir",
                    "tanggalLahir",
                ],
            })
            .then((result) => {
                res.json({
                    message: "success get siswa",
                    success: true,
                    data: result,
                });
            })
            .catch((err) => {
                res.json({
                    message: "gagal get siswa",
                    success: false,
                    data: err.message,
                });
            });
    },
    deleteSiswa: (req, res) => {
        let { nisn } = req.params;
        siswa
            .destroy({ where: { nisn } })
            .then((result) => {
                res.json({
                    message: "success delete siswa",
                    success: true,
                    data: result,
                });
            })
            .catch((err) => {
                res.json({
                    message: "gagal delete siswa",
                    success: false,
                    data: err.message,
                });
            });
    },
    guruEditSiswa: (req, res) => {
        let { nama, tempat, tanggal, nisn } = req.body;
        siswa
            .update(
                { nama, tempatLahir: tempat, tanggalLahir: tanggal },
                { where: { nisn } }
            )
            .then((result) => {
                res.json({
                    message: "success update siswa",
                    success: true,
                    data: result,
                });
            })
            .catch((err) => {
                res.json({
                    message: "gagal update siswa",
                    success: false,
                    data: err.message,
                });
            });
    },
};
