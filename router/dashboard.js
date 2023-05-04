const express = require("express");
const restrict = require("../middleware/restrict");
const router = express.Router();

const dashboard = require("../controller/dashboardController");

router.get("/dashboard", restrict, dashboard.getDashboard);

module.exports = router;
