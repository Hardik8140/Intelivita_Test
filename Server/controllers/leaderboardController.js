const Activity = require("../models/Activity");
const User = require("../models/User");
const { calculateRanks } = require("../utils/rankCalculator");

const getLeaderboard = async (req, res) => {
  const { filter = "day", userId } = req.query;
  const startDate = {
    day: new Date(new Date().setHours(0, 0, 0, 0)),
    month: new Date(new Date().getFullYear(), new Date().getMonth(), 1),
    year: new Date(new Date().getFullYear(), 0, 1),
  }[filter];

  const activities = await Activity.find({ timestamp: { $gte: startDate } });
  const pointsMap = new Map();

  activities.forEach(({ userId }) => {
    pointsMap.set(userId, (pointsMap.get(userId) || 0) + 20);
  });

  for (let [uid, points] of pointsMap.entries()) {
    await User.updateOne(
      { userId: uid },
      { $inc: { totalPoints: points } },
      { upsert: true }
    );
  }

  await calculateRanks();
  let users = await User.find().sort({ rank: 1 });

  if (userId) {
    const user = await User.findOne({ userId: parseInt(userId) });
    if (user) users = [user, ...users.filter((u) => u.userId !== user.userId)];
  }

  res.json(users);
};

const recalculate = async (req, res) => {
  const activities = await Activity.find();
  await User.updateMany({}, { totalPoints: 0 });

  activities.forEach(async ({ userId }) => {
    await User.updateOne(
      { userId },
      { $inc: { totalPoints: 20 } },
      { upsert: true }
    );
  });

  await calculateRanks();
  res.json({ success: true });
};

module.exports = { getLeaderboard, recalculate };
