const express = require("express");
const restrict = require("../middleware/restrict");
const router = express.Router();

const eskulController = require("../controller/eskulController");

router.get("/eskul/:nisn", restrict, eskulController.getEskul);

module.exports = router;
