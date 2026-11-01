
const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./config/db");
const studentRoutes = require("./routes/studentRoutes");

// Create Express application
const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use("/api/students", studentRoutes);
// Test route
app.get("/", (req, res) => {
    res.send("Student Management System Backend is Running!");
});

// Start server after connecting to MongoDB
const PORT = process.env.PORT || 5000;

const startServer = async () => {
    await connectDB();

    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
};

startServer();
