const passport = require('passport');
const GitHubStrategy = require('passport-github').Strategy;
const User = require('../models/User');
require('dotenv').config();

passport.use(new GitHubStrategy({
    clientID: process.env.GITHUB_CLIENT_ID,
    clientSecret: process.env.GITHUB_CLIENT_SECRET,
    callbackURL: process.env.GITHUB_CALLBACK_URL,
}, async (accessToken, refreshToken, profile, done) => {
    try {
        let user = await User.findOne({ githubId: profile.id });

        // If user doesn't exist, create a new user
        if (!user) {
            user = new User({
                githubId: profile.id,
                username: profile.username,
                email: profile.emails[0]?.value, // Use optional chaining to avoid errors
                githubAccessToken: accessToken,
                profileUrl: profile._json.avatar_url,
            });
            await user.save();
        } else {
            user.githubAccessToken = accessToken; // Update access token
            await user.save();
        }

        return done(null, user);
    } catch (error) {
        console.error(error);
        return done(error);
    }
}));

passport.serializeUser((user, done) => done(null, user.id));
passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) => done(err, user));
});

module.exports = passport;
