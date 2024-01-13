const mongoose = require("mongoose");

const profileSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    default: "John",
  },
  lastName: {
    type: String,
    required: true,
    default: "Doe",
  },
  description: {
    type: String,
    required: true,
    default: "I am a new user!",
  },
  walletAddress: {
    type: String,
    required: true,
  },
  creatingDate: {
    type: Date,
    required: true,
    default: Date.now,
  },
});

const profile = mongoose.model("profile", profileSchema);

module.exports = profile;
