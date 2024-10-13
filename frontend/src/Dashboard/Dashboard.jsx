import React from "react";
import Header from "../Components/Header";
import PRCard from "../Components/PRCard";
import PRStatusDistributionGraph from "../Components/Graph/PRStatusDistributionGraph";
import TeamPerformance from "../Components/Graph/TeamPerformance";
import PRInfo from "../Components/PRInfo";
import RecentActivities from "../Components/RecentActivities";

const Dashboard = () => {
    return (
        <div className="min-h-screen bg-gray-100">
            <Header />
            <div className="p-5 grid gap-6 mb-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 w-full">
                <PRCard />
                <PRCard />
                <PRCard />
                <PRCard />
            </div>
            <div className="p-5 grid gap-6 grid-cols-1 lg:grid-cols-2">
                <PRStatusDistributionGraph />
                <TeamPerformance />
            </div>
            <div className="p-5 grid gap-6 grid-cols-1 lg:grid-cols-2">
                <PRInfo className="lg:col-span-2" />
                <RecentActivities />
            </div>
        </div>
    );
};

export default Dashboard;
