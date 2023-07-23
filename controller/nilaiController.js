const {
    nilai,
    kelas,
    mapel,
    siswa,
    sikap,
    eskul,
    saran,
    prestasi,
    kehadiran,
} = require("../models");

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
        const {
            dataNilai,
            dataSikap,
            dataEskul,
            dataSaran,
            dataPrestasi,
            dataKehadiran,
        } = req.body;
        const { nisn } = req.params;

        let konNilai = false;
        let konSikap = false;
        let konEskul = false;
        let konSaran = false;
        let konPrestasi = false;
        let konKehadiran = false;

        const siswaId = await siswa.findOne({ where: { nisn } });

        // Nilai
        Object.keys(dataNilai).map((el) => {
            mapel
                .findOne({ where: { alias: el } })
                .then(async (result) => {
                    if (!dataNilai[el].ki3_1) {
                        dataNilai[el].ki3_1 = 0;
                    }
                    if (!dataNilai[el].ki4_1) {
                        dataNilai[el].ki4_1 = 0;
                    }
                    if (!dataNilai[el].ki3_2) {
                        dataNilai[el].ki3_2 = 0;
                    }
                    if (!dataNilai[el].ki4_2) {
                        dataNilai[el].ki4_2 = 0;
                    }
                    konNilai = await nilai.update(
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
        // Sikap
        konSikap = await sikap.update(
            { spiritual: dataSikap.spiritual, sosial: dataSikap.sosial },
            { where: { siswaId: siswaId.id } }
        );
        // Eskul
        konEskul = await eskul.update(
            {
                pramuka: dataEskul.pramuka,
                komputer: dataEskul.komputer,
                menari: dataEskul.menari,
                melukis: dataEskul.melukis,
                marchingBand: dataEskul.marchingBand,
                belaDiri: dataEskul.belaDiri,
                musik: dataEskul.musik,
                karawitan: dataEskul.arawitan,
                bola: dataEskul.bola,
                hadroh: dataEskul.hadroh,
                tilawah: dataEskul.tilawah,
                paduan: dataEskul.paduan,
            },
            { where: { siswaId: siswaId.id } }
        );

        // Saran
        konSaran = await saran.update(
            {
                saran: dataSaran,
            },
            { where: { siswaId: siswaId.id } }
        );

        // Prestasi
        konPrestasi = prestasi.update(
            {
                kesenian: dataPrestasi.kesenian,
                olahRaga: dataPrestasi.olahRaga,
            },
            { where: { siswaId: siswaId.id } }
        );

        // Kehadiran
        konKehadiran = kehadiran.update(
            {
                sakit: dataKehadiran.sakit,
                ijin: dataKehadiran.ijin,
                tanpaKehadiran: dataKehadiran.tanpaKeterangan,
            },
            { where: { siswaId: siswaId.id } }
        );

        if (
            (await konNilai) &&
            (await konSikap) &&
            (await konEskul) &&
            (await konSaran) &&
            (await konPrestasi) &&
            (await konKehadiran)
        ) {
            res.json({ message: "success update nilai", success: true });
        } else {
            res.json({
                message: "gagal update nilai",
                success: false,
            });
        }
    },
};
