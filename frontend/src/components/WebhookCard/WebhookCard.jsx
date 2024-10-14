import React, { useState } from 'react';
import { FaGithub } from "react-icons/fa";

const AuthorizationSuccess = () => {
  const [repoName, setRepoName] = useState('');

  const handleInputChange = (e) => {
    setRepoName(e.target.value);
  };

  const createWebhook = () => {
    console.log('Creating webhook for repo:', repoName);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black">
      <div className="bg-white shadow-slate-800 shadow-inner rounded-lg p-8 max-w-sm w-full">
        <div className="flex justify-center mb-6">
          
        </div>
        <h2 className="text-2xl font-bold text-center text-black mb-4">
          Authorization Successful!
        </h2>
        <p className="text-center text-gray-600 mb-8">
          Your connection to GitHub was successful. Let's set up your webhook.
        </p>
        <div className="mb-6">
          <label htmlFor="repoName" className="block text-gray-700 font-medium mb-2">
            GitHub Repo Name (owner/repo)
          </label>
          <div className="flex items-center border border-2 border-gray-400 rounded-md hover:border-slate-800 focus-within:border-black">
            <FaGithub className="text-4xl pl-2" />
            <input
              type="text"
              id="repoName"
              className="w-full px-4 py-2 focus:outline-none rounded-r-md "
              placeholder="e.g. john/project1"
              value={repoName}
              onChange={handleInputChange}
            />
          </div>
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

export default AuthorizationSuccess;
