const express = require("express");
const restrict = require("../middleware/restrict");
const router = express.Router();

const siswaController = require("../controller/siswaController");

router.get("/siswa", restrict, siswaController.getSiswa);
router.get("/siswa/:nisn", restrict, siswaController.getOneSiswa);
router.get("/cek-nisn/:nisn", restrict, siswaController.cekNisn);
router.get("/cek-nis/:nis", restrict, siswaController.cekNis);
router.post("/siswa/tambah", restrict, siswaController.addSiswa);
router.delete("/siswa/:nisn", restrict, siswaController.deleteSiswa);
router.put("/edit-siswa", restrict, siswaController.guruEditSiswa);
router.post("/upload-file", restrict, siswaController.addSiswaUploadExcel);

module.exports = router;
