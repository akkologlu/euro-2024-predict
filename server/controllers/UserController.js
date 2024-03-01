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
