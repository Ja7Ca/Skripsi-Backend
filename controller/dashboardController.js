const { siswa, kelas } = require("../models");

module.exports = {
    getDashboard: async (req, res) => {
        let dataSiswa;
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
        }
        res.json({
            message: "success get dashboard",
            success: true,
            data: { siswa: dataSiswa.length },
        });
    },
};
