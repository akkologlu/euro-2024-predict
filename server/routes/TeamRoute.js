const {
  getTeam,
  addTeam,
  getTeamsByGroup,
  getAllTeams,
} = require("../controllers/TeamController");

const express = require("express");

const router = express.Router();

router.get("/", getAllTeams);
router.get("/:id", getTeam);
router.post("/addTeam", addTeam);
router.get("/group/:group", getTeamsByGroup);

module.exports = router;
