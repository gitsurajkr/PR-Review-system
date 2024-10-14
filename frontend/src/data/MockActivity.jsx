// src/services/activityService.js
// import axios from 'axios';

// const API_URL = 'https://your-backend-api.com/api/activities'; // Replace with your backend URL

// export const fetchActivities = async () => {
//     try {
//         const response = await axios.get(API_URL);
//         return response.data; // Adjust based on the structure of your API response
//     } catch (error) {
//         console.error('Error fetching activities:', error);
//         throw error; // Optionally, you can handle errors as needed
//     }
// };

// src/data/activitiesData.js
export const mockActivities = [
    { id: 1, text: "User A completed a task.", time: "2 hours ago" },
    { id: 2, text: "User B started a new project.", time: "3 hours ago" },
    { id: 3, text: "User C commented on a document.", time: "1 hour ago" },
    { id: 4, text: "User D uploaded a new file.", time: "4 hours ago" },
    { id: 5, text: "User E updated their profile.", time: "5 hours ago" },
    { id: 6, text: "User F sent a message.", time: "30 minutes ago" },
    { id: 7, text: "User G liked a post.", time: "2 hours ago" },
    { id: 8, text: "User H joined a team.", time: "45 minutes ago" },
    { id: 9, text: "User I completed a survey.", time: "3 hours ago" },
    { id: 10, text: "User J marked a task as complete.", time: "10 minutes ago" },
    { id: 11, text: "User K created a new event.", time: "1 hour ago" },
    { id: 12, text: "User L edited a document.", time: "2 hours ago" },
    { id: 13, text: "User M submitted a report.", time: "3 hours ago" },
    { id: 14, text: "User N followed a new user.", time: "5 minutes ago" },
    { id: 15, text: "User O shared a post.", time: "1 day ago" },
];
