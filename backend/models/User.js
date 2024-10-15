const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
    githubId: {
        type: String,
        unique: true,
    },
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
    },
 
    profileUrl: {
        type: String,
    },
}, { timestamps: true });

const User = mongoose.model('User', userSchema);

module.exports = User;
