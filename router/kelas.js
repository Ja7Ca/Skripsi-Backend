const express = require("express");
const restrict = require("../middleware/restrict");
const router = express.Router();
const bodyParser = require("body-parser");

const kelasController = require("../controller/kelasController");

router.get("/kelas", restrict, kelasController.getKelas);
router.get("/kelas-kosong", restrict, kelasController.getKelasKosong);

module.exports = router;
