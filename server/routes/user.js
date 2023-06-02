const express = require("express");
const router = express.Router();

const UserController = require("../controllers/UserController");

router.post("/register", UserController.register);
router.post("/login", UserController.login);
router.post("/verify/:token", UserController.verify);
router.get("/get/:id", UserController.getAccount);
router.get("/getCoaches", UserController.getCoaches);

module.exports = router;
