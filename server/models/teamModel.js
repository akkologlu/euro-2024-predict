const mongoose = require("mongoose");

const TeamSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    group: {
      type: String,
      required: true,
    },
    value: {
      type: Number,
      required: true,
    },
    flag: {
      type: String,
      required: true,
    },
    coach: {
      type: String,
      required: true,
    },
    ageAverage: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const TeamModel = mongoose.model("Teams", TeamSchema);
module.exports = TeamModel;
