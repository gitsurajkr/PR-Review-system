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
        console.log(profile);
        let user = await User.findOne({ githubId: profile.id });

        if (!user) {
            user = new User({
                githubId: profile.id,
                username: profile.username,
                email: profile.emails && profile.emails.length > 0 ? profile.emails[0].value : null, // Safeguard here
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
        console.error('Error during GitHub strategy:', error);
        return done(error); // Pass error to done
    }
}));

passport.serializeUser((user, done) => done(null, user.id));
console.log('User serialized');
passport.deserializeUser(async (id, done) => {
    try {
        const user = await User.findById(id);
        done(null, user);
    } catch (err) {
        done(err, null);
    }
});
console.log('User deserialized');


module.exports = passport;
