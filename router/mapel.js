const express = require("express");
const restrict = require("../middleware/restrict");
const router = express.Router();

const mapelController = require("../controller/mapelController");

router.get("/mapel", restrict, mapelController.getMapel);

module.exports = router;
