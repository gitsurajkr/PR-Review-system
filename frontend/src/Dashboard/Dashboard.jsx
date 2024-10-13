import React from "react";
import Header from "../Components/Header";
import PRCard from "../Components/PRCard";
import PRStatusDistributionGraph from "../Components/Graph/PRStatusDistributionGraph";
import TeamPerformance from "../Components/Graph/TeamPerformance";
import PRInfo from "../Components/PRInfo";
import RecentActivities from "../Components/RecentActivities";
const Dashboard = () => {
    return (
        <div className="min-h-screen">
            <Header />
            <div
                className="p-5 grid gap-4 mb-8 
                grid-cols-1 sm:grid-cols-2 lg:grid-cols-4  w-100%"
            >
                <PRCard />
                <PRCard />
                <PRCard />
                <PRCard />
            </div>
            <div className="p-5 grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <PRStatusDistributionGraph />
            <TeamPerformance />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <PRInfo />
            <RecentActivities />
            </div>
        </div>
    );
};

export default Dashboard;
