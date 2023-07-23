const { siswa, kelas, user } = require("../models");
const { Op } = require("sequelize");

module.exports = {
    getDashboard: async (req, res) => {
        let dataSiswa;
        let dataUser;
        let datakelas;
        if (req.user.role == "admin") {
            dataSiswa = await siswa.findAll({
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
            });
            dataUser = await user.findAll({
                where: { role: { [Op.eq]: "guru" } },
            });
        } else {
            dataSiswa = await siswa.findAll({
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
            });
            dataKelas = await kelas.findOne({ where: { userId: req.user.id } });
        }
        if (req.user.role == "admin") {
            res.json({
                message: "success get dashboard",
                success: true,
                data: { siswa: dataSiswa.length, user: dataUser.length },
            });
        } else {
            res.json({
                message: "success get dashboard",
                success: true,
                data: { siswa: dataSiswa.length, user: 0, dataKelas },
            });
        }
    },
};
