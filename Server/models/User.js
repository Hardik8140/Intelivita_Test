const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  userId: Number,
  fullName: String,
  totalPoints: { type: Number, default: 0 },
  rank: { type: Number, default: null },
});

module.exports = mongoose.model("User", userSchema);
