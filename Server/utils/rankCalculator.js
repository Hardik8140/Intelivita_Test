const User = require("../models/User");

const calculateRanks = async () => {
  const users = await User.find().sort({ totalPoints: -1 });
  let rank = 1,
    prevPoints = null,
    duplicateRank = 1;

  for (let i = 0; i < users.length; i++) {
    if (users[i].totalPoints !== prevPoints) {
      rank = i + 1;
      duplicateRank = rank;
    }
    await User.updateOne({ _id: users[i]._id }, { rank: duplicateRank });
    prevPoints = users[i].totalPoints;
  }
};

module.exports = { calculateRanks };
