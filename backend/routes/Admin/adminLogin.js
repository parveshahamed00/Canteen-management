const express = require("express");
const { login } = require("../../controllers/Admin/jwtAuth");

const router = express.Router();

router.post("/", login);

module.exports = router;
