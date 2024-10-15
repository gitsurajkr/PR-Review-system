const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware'); // Ensure this middleware is in place
const axios = require('axios');
const User = require('../models/User'); // Assuming you have a User model

// Create Webhook
router.post('/', authMiddleware, async (req, res) => {
    const { repoOwner, repoName } = req.body;

    if (!repoOwner || !repoName) {
        return res.status(400).json({ message: 'Repository owner and name are required.' });
    }

    const user = await User.findById(req.user.id);
    if (!user || !user.githubAccessToken) {
        return res.status(401).json({ message: 'User not authenticated or token missing.' });
    }

    const githubToken = user.githubAccessToken;

    // Create webhook
    const webhookUrl = process.env.GITHUB_WEBHOOK_URL; // Your ngrok URL should be set here

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
                'Authorization': `Bearer ${githubToken}`,
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
