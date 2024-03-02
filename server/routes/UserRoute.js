const { getUser, getAllUser } = require("../controllers/UserController");

const express = require("express");

const router = express.Router();

router.get("/:id", getUser);
router.get("/", getAllUser);

module.exports = router;
