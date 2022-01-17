const express = require("express");

const UserController = require("../controllers/user");

const router = express.Router();

router.route("/").get(UserController.indexPage).post(UserController.getUsers);

router.route("/update/:userId").get(UserController.updateUser);

module.exports = router;
