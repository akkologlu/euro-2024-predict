const TeamModel = require("../models/teamModel");

module.exports.addTeam = async (req, res) => {
  const { name, group, value, flag, coach, ageAverage } = req.body;
  try {
    const checkTeam = await TeamModel.findOne({ name });
    if (checkTeam) {
      return res.status(400).json("Team is exist");
    } else {
      const newTeam = await TeamModel.create({
        name,
        group,
        value,
        flag,
        coach,
        ageAverage,
      });
      res.status(201).json({ result: "success", newTeam });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports.getTeam = async (req, res) => {
  const id = req.params.id;
  try {
    const team = await TeamModel.findById(id);
    if (team) {
      res.status(200).json({ result: "success", team });
    } else {
      res.status(404).json("fail");
    }
  } catch (error) {
    res.status(500).json(error.message);
  }
};

module.exports.getTeamsByGroup = async (req, res) => {
  try {
    const group = req.params.group;
    const teams = await TeamModel.find({ group: group });
    if (teams.length > 0) {
      res.status(200).json(teams);
    } else {
      res.status(404).send("No teams found in this group");
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports.getAllTeams = async (req, res) => {
  try {
    const teams = await TeamModel.find();
    res.status(200).json({ message: "success", teams });
  } catch (error) {
    res.status(500).send(error.message);
  }
};
