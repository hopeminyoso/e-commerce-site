const express = require("express");
const router = express.Router();

const { createUser, loginUserCtrl } = require("../controllers/userCtrl"); // Importing both functions createUser and loginUserCtrl from the userCtrl controller file

router.post("/register", createUser);
router.post("/login", loginUserCtrl);

module.exports = router;
