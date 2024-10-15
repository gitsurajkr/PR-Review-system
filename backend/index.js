const express = require("express");
const session = require("express-session");
const passport = require("passport");
const mongoose = require("mongoose");
const connectDB = require("./config/db");
const authRoutes = require("./routes/auth");
const dashboardRoutes = require("./routes/dashboard");
const homeRoutes = require("./routes/index");
const passportConfig = require("./config/passport");

const cors = require("cors");
require("dotenv").config();

const app = express();
connectDB();

// Middleware
app.use(cors({
    origin: "http://127.0.0.1:5173/", // Fixed extra space
    credentials: true,
}));
app.use(express.json());
app.use(express.urlencoded({ extended: false })); // For parsing application/x-www-form-urlencoded

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
}));

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());


// Routes
app.use("/", homeRoutes);
app.use("/auth", authRoutes);
app.use("/dashboard", dashboardRoutes);

// PORT
app.listen(5000, () => console.log("Server is running on port 5000"));
