import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MockPullRequests } from "@/data/pullRequestsData";

const PRInfo = () => {
    const [searchTerm, setSearchTerm] = useState("");

    const filteredPRs = MockPullRequests.filter(pr =>
        pr.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        pr.author.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Inline CSS for the custom scrollbar
    const scrollContainerStyle = {
        maxHeight: '240px',
        overflow: 'auto',
        border: '1px solid #e0e0e0', // Add border to the scroll area
        borderRadius: '8px', // Rounded corners
        marginTop: '10px', // Space between input and table
        scrollbarWidth: 'thin', // Firefox support
        scrollbarColor: '#888 #f1f1f1',
    };

    return (
        <Card className="w-full shadow-md rounded-lg"> {/* Added shadow and rounded corners */}
            <CardHeader>
                <CardTitle>Pull Requests</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="mb-4">
                    <Input
                        type="text"
                        placeholder="Search PRs..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full sm:max-w-md"
                    />
                </div>
                <div style={scrollContainerStyle} className="scrollbar-container">
                    <Table className="min-w-full">
                        <TableHeader>
                            <TableRow>
                                <TableHead>Title</TableHead>
                                <TableHead>Author</TableHead>
                                <TableHead>Status</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {filteredPRs.map((pr) => (
                                <TableRow key={pr.id}>
                                    <TableCell>{pr.title}</TableCell>
                                    <TableCell>{pr.author}</TableCell>
                                    <TableCell>{pr.status}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
                <style>
                    {`
                        .scrollbar-container::-webkit-scrollbar {
                            width: 8px;
                            height: 8px;
                        }
                        .scrollbar-container::-webkit-scrollbar-thumb {
                            background-color: #888;
                            border-radius: 10px;
                        }
                        .scrollbar-container::-webkit-scrollbar-thumb:hover {
                            background-color: #555;
                        }
                        .scrollbar-container::-webkit-scrollbar-track {
                            background: #f1f1f1;
                            border-radius: 10px;
                        }
                    `}
                </style>
            </CardContent>
        </Card>
    );
};

export default PRInfo;
