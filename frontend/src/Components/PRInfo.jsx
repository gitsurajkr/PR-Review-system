import React from "react";
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { useState } from "react"

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
const mockPRs = [
    { id: 1, title: "Add new feature: User authentication", author: "johndoe", status: "Open", feedback: "2 approvals" },
    { id: 2, title: "Refactor database queries", author: "janedoe", status: "In Review", feedback: "1 comment" },
    { id: 3, title: "Update README.md", author: "bobsmith", status: "Merged", feedback: "Approved" },
    { id: 4, title: "Fix login bug", author: "alicebrown", status: "Open", feedback: "Needs changes" },
    { id: 5, title: "Add unit tests for auth module", author: "charliegreen", status: "In Review", feedback: "3 approvals" },
  ]


const PRinfo = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const filteredPRs = mockPRs.filter(pr => 
        pr.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        pr.author.toLowerCase().includes(searchTerm.toLowerCase())

    )
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 w-full">
            <Card className="col-span-2">
                <CardHeader>
                    <CardTitle>
                        Pull Requests
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="mb-4">
                        <Input
                            type="text"
                            placeholder="Search PRs..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="max-w-sm"
                        />
                    </div>
                   <Table>
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
                </CardContent>
            </Card>
        </div>
    )
}

export default PRinfo;