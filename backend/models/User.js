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
    githubAccessToken: {
        type: String,
    },
    profileUrl: {
        type: String,
    },
}, { timestamps: true });

// Hash the password & tokens before saving the user
userSchema.pre('save', async function (next) {
    if (this.isModified('githubAccessToken')) {
        const salt = await bcrypt.genSalt(10);
        this.githubAccessToken = await bcrypt.hash(this.githubAccessToken, salt);
    }
    next();
});

// Compare GitHub access token
userSchema.methods.compareGithubAccessToken = async function (token) {
    return await bcrypt.compare(token, this.githubAccessToken);
};

// Clear access token
userSchema.methods.clearGithubAccessToken = async function () {
    this.githubAccessToken = null;
    return await this.save();
};

const User = mongoose.model('User', userSchema);

module.exports = User;
