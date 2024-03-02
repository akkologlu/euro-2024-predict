const UserModel = require("../models/userModel");

module.exports.getUser = async (req, res) => {
  const id = req.params.id;

  try {
    const user = await UserModel.findById(id);
    if (user) {
      const { password, ...otherDetails } = user._doc;
      res.status(200).json(otherDetails);
    } else {
      res.status(404).json("No such user");
    }
  } catch (error) {
    res.status(500).json(error.message);
  }
};

module.exports.getAllUser = async (req, res) => {
  try {
    let users = await UserModel.find();
    users = users.map((user) => {
      const { password, ...otherDetails } = user._doc;
      return otherDetails;
    });
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

module.exports.deleteUser = async (req, res) => {
  const id = req.params.id;
  const { currentUserId, currentUserAdmin } = req.body;

  if (currentUserId === id || currentUserAdmin) {
    try {
      await UserModel.findByIdAndDelete(id);
      res.status(200).json("User deleted successfully");
    } catch (error) {
      res.status(500).json(error.message);
    }
  } else {
    res.status(403).json("Access Denied");
  }
};
