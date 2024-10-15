// routes/webhook.js
const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware'); // Middleware for authentication
const axios = require('axios');
const cookieParser = require('cookie-parser'); // Middleware to parse cookies

router.use(cookieParser()); // Use cookie parser middleware

// Create Webhook
router.post('/', authMiddleware, async (req, res) => {
    const { repoOwner, repoName } = req.body;

    // Check for required fields
    if (!repoOwner || !repoName) {
        return res.status(400).json({ message: 'Repository owner and name are required.' });
    }

    const githubToken = req.cookies.githubToken; // Get the token from cookies

    if (!githubToken) {
        return res.status(401).json({ message: 'User not authenticated or token missing.' });
    }

    const webhookUrl = process.env.WEBHOOK_URL; // Ensure this is set in your .env

    try {
        const response = await axios.post(`https://api.github.com/repos/${repoOwner}/${repoName}/hooks`, {
            config: {
                url: webhookUrl,
                content_type: 'json',
            },
            events: ['push'], // Modify as needed
            active: true,
        }, {
            headers: {
                'Authorization': `Bearer ${githubToken}`, // Use the token from cookies
                'Accept': 'application/vnd.github.v3+json',
            }
        });

        res.status(201).json({ message: 'Webhook created successfully!', data: response.data });
    } catch (error) {
        console.error('Error creating webhook:', error.response.data);
        res.status(error.response.status).json({ message: error.response.data.message });
    }
});

module.exports = router;
