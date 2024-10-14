const express = require('express');
const router = express.Router();

// Homepage
router.get('/', (req, res) => {
    res.render('index'); // Assuming you have an index.ejs file for the homepage
});

module.exports = router;
