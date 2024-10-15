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
console.log('Cookie options set')

// Initiate GitHub OAuth
router.get('/github', passport.authenticate('github'));
console.log('GitHub OAuth initiated');
// GitHub OAuth Callback
router.get('/github/callback',
    passport.authenticate('github', { failureRedirect: '/login' }),
    (req, res) => {
      res.cookie('githubToken', req.user.githubAccessToken, cookieOptions);
      res.redirect('/auth/github/'); // Redirect to success page
    }
  );
  

module.exports = router;
