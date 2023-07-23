const express = require("express");
const restrict = require("../middleware/restrict");
const router = express.Router();

const authController = require("../controller/authController");

router.post("/login", authController.postLogin);
router.post("/forgot", authController.forgot);
router.put("/changeforgotpass", authController.changeForgotPassword);
router.get("/whoami", restrict, authController.getWhoami);
router.get("/getuserkey/:key", authController.getUserKey);
router.put("/updateuser", restrict, authController.updateUser);
router.get("/user", restrict, authController.getAllUser);
router.get("/user/:username", restrict, authController.getOneUser);
router.post("/user/updatePass", restrict, authController.updatePassUser);
router.post("/user", restrict, authController.addUser);
router.get("/cek-user/:id", restrict, authController.cekUsername);
router.delete("/user/:id", restrict, authController.deleteUser);

module.exports = router;
