import React from "react";
import Header from "@/components/Header";
import PRCard from "@/components/PRCard";
import PRStatusDistributionGraph from "@/components/Graph/PRStatusDistributionGraph";
import TeamPerformance from "@/components/Graph/TeamPerformance";
import PRInfo from "@/components/PRInfo";
import RecentActivities from "@/components/RecentActivities";

const Dashboard = () => {
    return (
        <div className="min-h-screen bg-black">
            <Header />
            <div className="p-5 grid gap-6 mb-3 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 w-full">
                <PRCard />
                <PRCard />
                <PRCard />
                <PRCard />
            </div>
            <div className="p-3 grid gap-6 grid-cols-1 lg:grid-cols-2">
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
