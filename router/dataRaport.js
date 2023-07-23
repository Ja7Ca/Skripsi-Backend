const express = require("express");
const restrict = require("../middleware/restrict");
const router = express.Router();

const sikapController = require("../controller/dataRaportController");

router.get("/sikap/:nisn", restrict, sikapController.getSikap);
router.get("/saran/:nisn", restrict, sikapController.getSaran);
router.get("/prestasi/:nisn", restrict, sikapController.getPrestasi);
router.get("/kehadiran/:nisn", restrict, sikapController.getKehadiran);

module.exports = router;
