import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { FaRegBell } from "react-icons/fa6";
import { mockActivities } from "@/data/MockActivity";
// Mock activities data
// const mockActivities = Array.from({ length: 15 }, (_, index) => ({
//     id: index + 1,
//     text: `Activity ${index + 1} happened.`,
//     time: `${Math.floor(Math.random() * 5) + 1} hours ago`,
// }));

const RecentActivities = () => {
    // const [activities, setActivities] = useState([]);
    // const [loading, setLoading] = useState(true);
    // const [error, setError] = useState(null);

    // useEffect(() => {
    //     const loadActivities = async () => {
    //         try {
    //             const data = await fetchActivities();
    //             setActivities(data);
    //         } catch (error) {
    //             setError("Failed to load activities.");
    //         } finally {
    //             setLoading(false);
    //         }
    //     };

    //     loadActivities();
    // }, []);

    // if (loading) {
    //     return <div>Loading...</div>;
    // }

    // if (error) {
    //     return <div>{error}</div>;
    // }

    return (
        <Card className="w-full">
            <CardHeader>
                <CardTitle>Recent Activities</CardTitle>
            </CardHeader>
            <CardContent>
                <ul
                    className="
                        space-y-4
                        max-h-60
                        overflow-y-auto
                        pr-3
                        scrollbar-thin
                        scrollbar-thumb-gray-600
                        scrollbar-track-gray-200
                    "
                    style={{
                        scrollbarWidth: "16px",
                        height: "calc(45rem - 1rem)",
                    }}
                >
                    {mockActivities.map((activity) => (
                        <li key={activity.id} className="flex items-start space-x-3">
                            <FaRegBell className="h-5 w-5 mt-1 text-gray-500" />
                            <div>
                                <p className="text-sm">{activity.text}</p>
                                <p className="text-xs text-gray-500">{activity.time}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </CardContent>
        </Card>
    );
};

export default RecentActivities;
