const { getUser } = require("../controllers/UserController");

const express = require("express");

const router = express.Router();

router.get("/:id", getUser);

module.exports = router;
