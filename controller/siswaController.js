const {
    kelas,
    siswa,
    nilai,
    mapel,
    sikap,
    eskul,
    saran,
    prestasi,
    kehadiran,
} = require("../models");

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
                attributes: ["nama", "nisn"],
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
                attributes: ["nama", "nis"],
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
        let konSikap, konEskul, konSaran, konPrestasi, konKehadiran;
        kelas
            .findOne({
                attributes: ["id", "rombel"],
                where: { userId: req.user.id },
            })
            .then(async (response) => {
                let proses = await siswa
                    .create({
                        nama,
                        nisn,
                        nis,
                        tempatLahir: tempat,
                        tanggalLahir: tanggal,
                        kelaId: response.id,
                        recycle: false,
                    })
                    .then(async (resSiswa) => {
                        await mapel
                            .findAll({ attributes: ["id"] })
                            .then((resMapel) => {
                                resMapel.map(async (el) => {
                                    await nilai.create({
                                        siswaId: resSiswa.id,
                                        mapelId: el.id,
                                        kelas: response.rombel,
                                        nilai_k3_smst1: 0,
                                        nilai_k4_smst1: 0,
                                        nilai_k3_smst2: 0,
                                        nilai_k4_smst2: 0,
                                    });
                                });
                            });
                        konSikap = await sikap.create({
                            spiritual: "A",
                            sosial: "A",
                            siswaId: resSiswa.id,
                        });
                        konEskul = await eskul.create({
                            pramuka: "",
                            komputer: "",
                            menari: "",
                            melukis: "",
                            marchingBand: "",
                            belaDiri: "",
                            musik: "",
                            karawitan: "",
                            bola: "",
                            hadroh: "",
                            tilawah: "",
                            paduan: "",
                            siswaId: resSiswa.id,
                        });
                        konSaran = await saran.create({
                            siswaId: resSiswa.id,
                            saran: "",
                        });
                        konPrestasi = await prestasi.create({
                            siswaId: resSiswa.id,
                            olahRaga: "",
                            kesenian: "",
                        });
                        konKehadiran = await kehadiran.create({
                            siswaId: resSiswa.id,
                            sakit: 0,
                            ijin: 0,
                            tanpaKehadiran: 0,
                        });
                        if (
                            konSikap &&
                            konEskul &&
                            konSaran &&
                            konPrestasi &&
                            konKehadiran
                        ) {
                            res.json({
                                message: "Success tambah siswa",
                                success: true,
                                data: resSiswa,
                            });
                        } else {
                            res.json({
                                message: "Gagal tambah siswa",
                                success: false,
                                data: err.message,
                            });
                        }
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
                    "kelaId",
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
    addSiswaUploadExcel: async (req, res) => {
        const { dataMurid } = req.body;

        const kelasId = await kelas.findOne({
            attributes: ["id", "rombel"],
            where: { userId: req.user.id },
        });

        let proses = await dataMurid.map(async (el) => {
            console.log(el);
            await siswa
                .create({
                    nama: el.Nama,
                    nisn: el.NISN,
                    nis: el.NIS,
                    kelaId: kelasId.id,
                    tempatLahir: el["Tempat Lahir"],
                    tanggalLahir: el["Tanggal Lahir"],
                    recycle: false,
                })
                .then(async (resSiswa) => {
                    await mapel
                        .findAll({ attributes: ["id"] })
                        .then((resMapel) => {
                            resMapel.map(async (el) => {
                                await nilai.create({
                                    siswaId: resSiswa.id,
                                    mapelId: el.id,
                                    kelas: kelasId.rombel,
                                    nilai_k3_smst1: 0,
                                    nilai_k4_smst1: 0,
                                    nilai_k3_smst2: 0,
                                    nilai_k4_smst2: 0,
                                });
                            });
                        });
                    await sikap.create({
                        spiritual: "A",
                        sosial: "A",
                        siswaId: resSiswa.id,
                    });
                    await eskul.create({
                        pramuka: "",
                        komputer: "",
                        menari: "",
                        melukis: "",
                        marchingBand: "",
                        belaDiri: "",
                        musik: "",
                        karawitan: "",
                        bola: "",
                        hadroh: "",
                        tilawah: "",
                        paduan: "",
                        siswaId: resSiswa.id,
                    });
                    await saran.create({
                        siswaId: resSiswa.id,
                        saran: "",
                    });
                    await prestasi.create({
                        siswaId: resSiswa.id,
                        olahRaga: "",
                        kesenian: "",
                    });
                    await kehadiran.create({
                        siswaId: resSiswa.id,
                        sakit: 0,
                        ijin: 0,
                        tanpaKehadiran: 0,
                    });
                });
        });
        if (proses) {
            res.json({
                message: "success tambah siswa",
                success: true,
            });
        } else {
            res.json({
                message: "gagal tambah siswa",
                success: false,
            });
        }
    },
};
