import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow,} from "@/components/ui/table";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
const mockPRs = [
    { id: 1, title: "Add new feature: User authentication", author: "johndoe", status: "Open", feedback: "2 approvals" },
    { id: 2, title: "Refactor database queries", author: "janedoe", status: "In Review", feedback: "1 comment" },
    { id: 3, title: "Update README.md", author: "bobsmith", status: "Merged", feedback: "Approved" },
    { id: 4, title: "Fix login bug", author: "alicebrown", status: "Open", feedback: "Needs changes" },
    { id: 5, title: "Add unit tests for auth module", author: "charliegreen", status: "In Review", feedback: "3 approvals" },
];
const PRInfo = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const filteredPRs = mockPRs.filter(pr =>
        pr.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        pr.author.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return (
        <Card className="w-full">
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
                <div className="overflow-auto">
                    <Table className="min-w-full">
                        <TableHeader>
                            <TableRow>
                                <TableHead>Title</TableHead>
                                <TableHead>Author</TableHead>
                                <TableHead>Status</TableHead>
                                <TableHead>Feedback</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {filteredPRs.map((pr) => (
                                <TableRow key={pr.id}>
                                    <TableCell>{pr.title}</TableCell>
                                    <TableCell>{pr.author}</TableCell>
                                    <TableCell>{pr.status}</TableCell>
                                    <TableCell>{pr.feedback}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
            </CardContent>
        </Card>
    );
};

export default PRInfo;
