const mongoose = require("mongoose");
const User = require("../models/User");
const Activity = require("../models/Activity");
const dotenv = require("dotenv");
dotenv.config();

const dummyUsers = [
  { userId: 1, fullName: "Jake Williamson", totalPoints: 900 },
  { userId: 32, fullName: "Margaret Dawson", totalPoints: 1000 },
  { userId: 18, fullName: "Richard Mulligan", totalPoints: 998 },
  { userId: 2, fullName: "Robert Montoya", totalPoints: 997 },
  { userId: 10, fullName: "Steven Phillips", totalPoints: 995 },
  { userId: 8, fullName: "Scott Miller", totalPoints: 995 },
  { userId: 20, fullName: "Brent Hayes", totalPoints: 992 },
  { userId: 30, fullName: "Emma Perry", totalPoints: 990 },
  { userId: 31, fullName: "Johnson", totalPoints: 989 },
  { userId: 35, fullName: "Petry Thoams", totalPoints: 989 },
];

const seed = async () => {
  await mongoose.connect(process.env.MONGO_URI);
  await User.deleteMany({});
  await Activity.deleteMany({});

  await User.insertMany(dummyUsers);

  const activities = [];
  dummyUsers.forEach((user) => {
    const count = Math.floor(Math.random() * 60) + 1;
    for (let i = 0; i < count; i++) {
      activities.push({
        userId: user.userId,
        timestamp: new Date(),
        points: 20,
      });
    }
  });

  await Activity.insertMany(activities);
  console.log("Seeding complete");
  process.exit();
};

seed();
