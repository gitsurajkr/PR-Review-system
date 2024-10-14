import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaCodePullRequest } from "react-icons/fa6";
import InputBox from "../InputBox";

function GithubLogin() {
    return (
        <div className="flex flex-col justify-center items-center min-h-screen bg-black">
            {/* Top box */}
            <div className="border border-gray-300 rounded-lg shadow-xl p-8 bg-white max-w-sm w-full">
                <div className="flex flex-col justify-center items-center mb-4">
                    <FaCodePullRequest className="text-3xl mb-2 text-slate-400" />
                    <div className="flex flex-col items-center text-2xl">
                        <h1 className="font-bold text-black">Sign in to GitHub</h1>
                        <h2 className="text-black text-center">
                            to continue to <b>PR review</b>
                        </h2>
                    </div>
                </div>
                <div className="flex flex-col items-center">
                    <InputBox input="Username Or Email" type="email" />
                    <InputBox input="Password" type="password" />
                    <a href="https://github.com/password_reset" className="text-black cursor-pointer hover:underline hover:text-blue-900 pb-1 text-sm">
                        Forgot password?
                    </a>
                    <div className="p-2 w-full">
                        <button className="bg-black text-white rounded-lg p-3 w-full transition duration-200 hover:bg-gray-800">
                            Sign in
                        </button>
                    </div>
                </div>
            </div>

            {/* Bottom box with matching width */}
            <div className="flex w-full justify-center pt-3">
                <div className="flex items-center justify-center p-3 border border-gray-300 rounded-lg shadow-xl bg-white max-w-sm w-full">
                    <div className="flex">
                        <p>New to Github?</p>
                        <a href="https://github.com/" className="ml-2 text-blue-600 hover:text-red-800 hover:underline transition duration-200">
                            Create an account
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default GithubLogin;
