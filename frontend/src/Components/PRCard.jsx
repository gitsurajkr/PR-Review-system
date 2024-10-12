import React from "react";
import { FaCodePullRequest } from "react-icons/fa6";
function PRCard() {
    return (
        <div className="border border-gray-200 border-2 max-w-xs mx:auto rounded-lg shadow-lg bg-white ">
            <div className="flex flex-col">
                <div className="flex justify-between p-2 ml-2"> 
                    <h1 className="text-lg font-semibold">Total Open PRs</h1>
                    <FaCodePullRequest className="text-2xl text-gray-600 mr-1" />
                </div>

                <div className="flex flex-col items-start p-2 ml-2 ">
                    <h1 className="text-3xl font-bold">2</h1>
                    <p className="pt-1 text-gray-600 text-sm opacity-80 ">+2 since last week</p>
                </div>
            </div>
        </div>
    );
}
export default PRCard;