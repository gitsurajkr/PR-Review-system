const express = require('express');
const passport = require('passport');
const router = express.Router();

// Github OAuth Login

router.get('/github', passport.authenticate('github'));

// Github OAuth Callback

// Github OAuth Callback
router.get('/github/callback',
    passport.authenticate('github', {
        failureRedirect: '/login', // Redirect if authentication fails
    }),
    (req, res) => {
        res.redirect('/dashboard'); // Redirect to dashboard if successful
    }
);

// Logout

router.get('/logout', (req, res)=>{
    req.logout(() =>{
        res.redirect('/login');
    })
})

module.exports = router;