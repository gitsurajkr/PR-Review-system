import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { FaRegBell } from "react-icons/fa6";
const mockActivities = [
    { id: 1, text: "John Doe opened a new PR", time: "2 hours ago" },
    { id: 2, text: "Jane Doe commented on 'Refactor database queries'", time: "4 hours ago" },
    { id: 3, text: "Bob Smith merged 'Update README.md'", time: "1 day ago" },
    { id: 4, text: "Alice Brown requested changes on 'Fix login bug'", time: "2 days ago" },
    { id: 5, text: "Charlie Green approved 'Add unit tests for auth module'", time: "3 days ago" },
]

const RecentActivities = () => {
    return (

        <Card>
            <CardHeader>
                <CardTitle>
                    Recent Activities
                </CardTitle>
            </CardHeader>
            <CardContent>
                <ul className="space-y-4">
                    {mockActivities.map((activity) => (
                        <li key={activity.id} className=" flex items-start space-x-2">
                            <FaRegBell className="h-5 w-5 mt-0.5 text-muted-foreground " />
                            <div >
                                <p className="text-md">{activity.text}</p>
                                <p className="text-xs text-muted-foreground">{activity.time}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </CardContent>
        </Card>

    )
}
export default RecentActivities;