const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');


// Dashboard

router.get('/', authMiddleware, (req, res) => {
    res.render('dashboard',{user: req.user});
});

module.exports = router;