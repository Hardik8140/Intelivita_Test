const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const leaderboardRoutes = require("./routes/leaderboardRoutes");
const cors = require("cors");

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGO_URI);

app.use("/api/leaderboard", leaderboardRoutes);

app.listen(5000, () => console.log("Server running on port 5000"));
