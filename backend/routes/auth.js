const express = require('express');
const passport = require('passport');
const router = express.Router();

// GitHub OAuth Login
router.get('/github', passport.authenticate('github'));

// GitHub OAuth Callback
router.get('/github/callback',
    passport.authenticate('github', {
        failureRedirect: '/login',
    }),
    (req, res) => {
        res.redirect('/dashboard');
    }
);

// Logout
router.get('/logout', (req, res) => {
    req.logout(() => {
        res.redirect('/login');
    });
});

module.exports = router;
