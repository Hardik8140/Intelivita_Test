const express = require("express");
const router = express.Router();
const {
  getLeaderboard,
  recalculate,
} = require("../controllers/leaderboardController");

router.get("/", getLeaderboard);
router.post("/recalculate", recalculate);

module.exports = router;
