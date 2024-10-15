// routes/auth.js
const express = require('express');
const passport = require('passport');
const router = express.Router();

const cookieOptions = {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    maxAge: 24 * 60 * 60 * 1000, // 1 day
};
console.log('Cookie options set')

// Initiate GitHub OAuth
router.get('/github', passport.authenticate('github'));

// GitHub OAuth Callback
router.get('/github/callback',
    passport.authenticate('github', { failureRedirect: '/login' }),
    (req, res) => {
      res.cookie('githubToken', req.user.githubAccessToken, cookieOptions);
      console.log('Cookie set')
      console.log('User authenticated:', req.user);
      res.redirect('/webhook'); // Redirect to success page
    }
);

module.exports = router;
