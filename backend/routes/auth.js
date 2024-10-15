// routes/auth.js
const express = require('express');
const passport = require('passport');
const router = express.Router();

// Set cookie options (secure flag should be true in production over HTTPS)
const cookieOptions = {
    httpOnly: true,
    secure: false, // Set to true in production
    maxAge: 24 * 60 * 60 * 1000, // 1 day
};

// Initiate GitHub OAuth
router.get('/github', passport.authenticate('github'));

// GitHub OAuth Callback
router.get('/github/callback',
    passport.authenticate('github', {
        failureRedirect: '/login',
    }),
    (req, res) => {
        // Store GitHub access token in a cookie
        res.cookie('githubToken', req.user.githubAccessToken, cookieOptions);
        console.log('GitHub Token:', req.user.githubAccessToken);
        res.redirect('/webhook'); // Redirect to WebhookCard
    }
);

module.exports = router;
