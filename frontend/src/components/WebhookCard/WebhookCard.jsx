import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; 
import Cookies from 'js-cookie';

const WebhookCard = () => {
  const [repoOwner, setRepoOwner] = useState('');
  const [repoName, setRepoName] = useState('');
  const [githubToken, setGithubToken] = useState('');
  const navigate = useNavigate(); 

  useEffect(() => {
    const token = Cookies.get('githubToken'); // Automatically retrieve token from cookies
    console.log(token); // Check if token is retrieved
    if (token) {
      setGithubToken(token);
    } else {
      console.error('GitHub token not found in cookies');
      navigate('/login'); // Redirect to login if token is not found
    }
  }, []);

  const handleOwnerChange = (e) => setRepoOwner(e.target.value);
  const handleNameChange = (e) => setRepoName(e.target.value);

  const createWebhook = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/webhook', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${githubToken}`,
        },
        body: JSON.stringify({ repoOwner, repoName }),
      });

      if (response.ok) {
        console.log('Webhook created successfully!');
        navigate('/dashboard'); // Redirect to dashboard on success
      } else {
        const errorData = await response.json();
        console.error('Failed to create webhook:', errorData.message);
      }
    } catch (error) {
      console.error('Error creating webhook:', error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black">
      <div className="bg-white shadow-slate-800 shadow-inner rounded-lg p-8 max-w-sm w-full">
        <h2 className="text-2xl font-bold text-center text-black mb-4">
          Authorization Successful!
        </h2>
        <p className="text-center text-gray-600 mb-8">
          Your connection to GitHub was successful. Let's set up your webhook.
        </p>
        <div className="mb-6">
          <label htmlFor="repoOwner" className="block text-gray-700 font-medium mb-2">
            GitHub Repo Owner
          </label>
          <input
            type="text"
            id="repoOwner"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-black"
            placeholder="e.g. john"
            value={repoOwner}
            onChange={handleOwnerChange}
          />
        </div>
        <div className="mb-6">
          <label htmlFor="repoName" className="block text-gray-700 font-medium mb-2">
            GitHub Repo Name
          </label>
          <input
            type="text"
            id="repoName"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-black"
            placeholder="e.g. project1"
            value={repoName}
            onChange={handleNameChange}
          />
        </div>
        <button
          className="w-full bg-black text-white py-2 rounded-md font-bold hover:bg-purple-700 transition duration-300"
          onClick={createWebhook}
        >
          Create Webhook
        </button>
      </div>
    </div>
  );
};

export default WebhookCard;
