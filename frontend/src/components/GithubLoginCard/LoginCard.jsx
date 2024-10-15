import React from "react";
import { FaGithub } from "react-icons/fa";

function LoginCard() {
    const handleLogin = () => {
        // Redirect to backend's GitHub OAuth endpoint
        window.location.href = "http://localhost:5000/auth/github";
      };

    return (
        <div className="flex justify-center items-center min-h-screen bg-black shadow-lg">
            <div className="border border-gray-300 rounded-lg shadow-xl p-6 bg-white max-w-md w-full">
                <h1 className="text-3xl font-bold text-center mb-4 text-gray-800">GitHub Connection</h1>
                <p className="text-center mb-6 text-gray-600">Connect your GitHub account to use this application.</p>
                <button 
                    onClick={handleLogin} 
                    className="flex justify-center items-center w-full border-none bg-gray-900 text-white py-3 rounded-md hover:bg-gray-800 transition duration-300 ease-in-out transform hover:scale-105"
                >
                    <FaGithub className="text-2xl mr-2" />
                    <span>Connect GitHub Account</span>
                </button>
            </div>
        </div>
    );
}

export default LoginCard;
