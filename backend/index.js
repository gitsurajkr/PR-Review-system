const express = require("express");
const session = require("express-session");
const passport = require("passport");
const mongoose = require("mongoose");
const connectDB = require("./config/db");
const authRoutes = require("./routes/auth");
const webhookRoutes = require("./routes/webhook"); // Import the webhook routes
const homeRoutes = require("./routes/index");
const passportConfig = require("./config/passport");
const cors = require("cors");
require("dotenv").config();

const app = express();
connectDB();

// Middleware
app.use(cors({
    origin: "http://127.0.0.1:5173", // Update this as needed
    credentials: true,
}));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: { secure: process.env.NODE_ENV === 'production' }, // Secure cookie in production
}));

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

// Routes
app.use("/", homeRoutes);
app.use("/auth", authRoutes);
app.use("/webhook", webhookRoutes); // Register the webhook routes

// PORT
app.listen(5000, () => console.log("Server is running on port 5000"));
