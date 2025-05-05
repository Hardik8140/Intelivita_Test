# Intelivita Leaderboard System

A full-stack production-level leaderboard system built using **React.js**, **Node.js (Express)**, **MongoDB**, and **Material-UI**. The app tracks user activity, calculates points, ranks users dynamically, and provides recalculation and filtering features.

---

## 🚀 Features

- ✅ Recalculate leaderboard score for any user by ID  
- ✅ Filter by Day, Month, or Year  
- ✅ Dynamic leaderboard with real-time sorting  
- ✅ Responsive UI using Material-UI  
- ✅ MongoDB integration for persistent data storage  
- ✅ RESTful API with Express.js  

---

## 📁 Project Structure

/client # React frontend
/server # Node.js backend
/mongo-seed # Seed scripts for initial MongoDB data
.env # Environment variables


---

## 🛠️ Tech Stack

| Frontend | Backend | Database | Styling      |
|----------|---------|----------|--------------|
| React.js | Node.js | MongoDB  | Material-UI  |

---

## ⚙️ Installation

### 🔽 1. Clone the Repository

git clone https://github.com/Hardik8140/Intelivita_Test.git
cd Intelivita_Test

### 🔽 2. Install Dependencies

Backend (Express.js)
cd server
npm install

Frontend (React.js)
cd client/vite-project
npm install

### 🔽 3. Setup Environment Variables
MONGO_URI=your_mongodb_connection_string

### 🔽 4. Seed Initial Data
If the provided seed script does not work, manually insert data into your MongoDB collection using:

MongoDB Compass GUI, or

A custom script (seed.js) with hardcoded user activity data.

Each activity should contain:

User ID

Full Name

Date/Time of Activity

Fixed 20 points per entry

The seeding should follow the structure as per the reference image: consistent format of user name, ID, date/time, and 20 points per activity.

### 🔽 5. Run the Application
Start Backend
cd server
npm start

Start Frontend
cd client
npm start

Frontend: http://localhost:3000

Backend: http://localhost:5000






