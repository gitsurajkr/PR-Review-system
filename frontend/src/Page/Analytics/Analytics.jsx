import React from "react";
import { ResponsiveContainer, LineChart, Line,  XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"


const mockEngagementData = [
    { name: 'Jan', PRs: 4, Comments: 20, Reviews: 15 },
    { name: 'Feb', PRs: 3, Comments: 18, Reviews: 12 },
    { name: 'Mar', PRs: 5, Comments: 25, Reviews: 20 },
    { name: 'Apr', PRs: 6, Comments: 30, Reviews: 25 },
    { name: 'May', PRs: 4, Comments: 22, Reviews: 18 },
    { name: 'Jun', PRs: 7, Comments: 35, Reviews: 30 },
  ]

const Analytics = () => {
    return (
        <div className="space-y-4 p-4 bg-black">
            <h1 className="text-white text-2xl font-bold">User Engagement Matrics</h1>
            <Card>
                <CardHeader>
                    <CardTitle>Activity Over Time</CardTitle>
                </CardHeader>
                <CardContent>
                    <ResponsiveContainer width="100%" height={400}>
                        <LineChart data={mockEngagementData}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Line type="monotone" dataKey="PRs" stroke="#8884d8" />
                            <Line type="monotone" dataKey="Comments" stroke="#82ca9d" />
                            <Line type="monotone" dataKey="Reviews" stroke="#ffc658" />
                        </LineChart>
                    </ResponsiveContainer>
                </CardContent>
            </Card>
        </div>
    );
}

export default Analytics;