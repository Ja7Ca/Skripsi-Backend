const { nilai, kelas, mapel, siswa } = require("../models");

module.exports = {
    getNilai: async (req, res) => {
        let nilaiKelas = await kelas.findOne({
            where: { userId: req.user.id },
            atributes: ["rombel"],
        });

        await nilai
            .findAll({
                where: { kelas: nilaiKelas.rombel },
                include: [
                    {
                        model: mapel,
                        as: "mapel",
                        attributes: ["id", "nama", "alias"],
                    },
                    {
                        model: siswa,
                        as: "siswa",
                        attributes: ["id", "nama", "nisn"],
                        where: { nisn: req.params.nisn },
                    },
                ],
            })
            .then((response) => {
                res.json({
                    message: "succes get nilai",
                    success: true,
                    data: response,
                });
            });
    },
    editNilai: async (req, res) => {
        const { dataNilai } = req.body;
        const { nisn } = req.params;

        let konUpdate = false;

        const siswaId = await siswa.findOne({ where: { nisn } });
        console.log(req.body);
        Object.keys(dataNilai).map((el) => {
            mapel
                .findOne({ where: { alias: el } })
                .then(async (result) => {
                    konUpdate = await nilai.update(
                        {
                            nilai_k3_smst1: dataNilai[el].ki3_1,
                            nilai_k4_smst1: dataNilai[el].ki4_1,
                            nilai_k3_smst2: dataNilai[el].ki3_2,
                            nilai_k4_smst2: dataNilai[el].ki4_2,
                        },
                        { where: { siswaId: siswaId.id, mapelId: result.id } }
                    );
                })
                .catch((err) => {
                    console(err.message);
                });
        });
        if (await konUpdate) {
            res.json({ message: "success update nilai", success: true });
        } else {
            res.json({
                message: "gagal update nilai",
                success: false,
            });
        }
    },
};
