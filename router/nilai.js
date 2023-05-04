const express = require("express");
const restrict = require("../middleware/restrict");
const router = express.Router();

const nilaiController = require("../controller/nilaiController");

router.get("/nilai/:nisn", restrict, nilaiController.getNilai);
router.put("/nilai/:nisn", restrict, nilaiController.editNilai);

module.exports = router;
