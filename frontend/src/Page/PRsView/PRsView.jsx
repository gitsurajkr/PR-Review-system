import React, { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { mockPRDetails } from "@/data/MockPRsDetails"; // Correct import
import { TbAlertTriangleFilled } from "react-icons/tb";
import { FiMessageSquare } from "react-icons/fi";
import { FaCheckCircle } from "react-icons/fa";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { FiRefreshCw } from "react-icons/fi";
import { FaThumbsUp } from "react-icons/fa";
import { FaThumbsDown } from "react-icons/fa";
import { Badge } from "@/components/ui/badge";

const PRsView = () => {
    const [selectedPR, setSelectedPR] = useState(mockPRDetails[0])
    const [newComment, setNewComment] = useState('')
    const [nlpSummary, setNlpSummary] = useState('')

    const handleCommentSubmit = () => {
        console.log('Submitting comment:', newComment)
        setNewComment('')
    }

    const handleGenerateSummary = () => {
        setNlpSummary(`This PR ${selectedPR.description.toLowerCase()} It includes changes to ${selectedPR.title.toLowerCase()}.`)
    }

    const calculateSentiment = () => {
        const sentiments = selectedPR.comments.map(comment => comment.sentiment)
        const positiveCount = sentiments.filter(s => s === 'positive').length
        const negativeCount = sentiments.filter(s => s === 'negative').length

        if (positiveCount > negativeCount) return 'Positive'
        if (negativeCount > positiveCount) return 'Negative'
        return 'Neutral'
    }
    return (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 p-4">
            <Card className="md:col-span-1 p-3 max-h-screen overflow-y-auto"> {/* Set max height and enable scroll */}
                <CardHeader>
                    <CardTitle>Pull Requests</CardTitle>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Title</TableHead>
                                <TableHead>Author</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {mockPRDetails.map((pr) => (
                                <TableRow
                                    key={pr.id}
                                    className={`cursor-pointer ${selectedPR.id === pr.id ? 'bg-muted' : ''}`}
                                    onClick={() => setSelectedPR(pr)}
                                >
                                    <TableCell className="font-medium">{pr.title}</TableCell>
                                    <TableCell>{pr.author}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>

            <div className="md:col-span-3 space-y-4">
                <h1 className="text-2xl font-bold">{selectedPR.title}</h1>
                <Card>
                    <CardHeader>
                        <CardTitle>Code Changes</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                            <code>{selectedPR.diffContent}</code>
                        </pre>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>Automated Review Feedback</CardTitle>
                    </CardHeader>
                    <CardContent>
                        {selectedPR.automatedFeedback.map((feedback, index) => (
                            <div key={index} className="flex items-start space-x-2 mb-2">
                                {feedback.type === 'issue' && <TbAlertTriangleFilled className="text-destructive" />}
                                {feedback.type === 'suggestion' && <FiMessageSquare className="text-muted-foreground" />}
                                {feedback.type === 'praise' && <FaCheckCircle className="text-primary" />}
                                <span>{feedback.message}</span> {/* Changed <p> to <span> */}
                            </div>
                        ))}
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>NLP Summary</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <span className="mb-2">{nlpSummary || 'No summary generated yet.'}</span> {/* Changed <p> to <span> */}
                        <Button onClick={handleGenerateSummary}>
                            <FiRefreshCw className="mr-2 h-4 w-4" /> Generate Summary
                        </Button>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>Comments</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            {selectedPR.comments.map(comment => (
                                <div key={comment.id} className="bg-muted p-2 rounded-md">
                                    <div className="flex justify-between items-center mb-2">
                                        <strong>{comment.author}</strong>
                                        {comment.sentiment === 'positive' && <FaThumbsUp className="text-primary" />}
                                        {comment.sentiment === 'negative' && <FaThumbsDown className="text-destructive" />}
                                        {comment.sentiment === 'neutral' && <FiMessageSquare className="text-muted-foreground" />}
                                    </div>
                                    <span>{comment.content}</span> {/* Changed <p> to <span> */}
                                </div>
                            ))}
                        </div>
                        <div className="mt-4">
                            <Textarea
                                placeholder="Add a comment..."
                                value={newComment}
                                onChange={(e) => setNewComment(e.target.value)}
                                className="mb-2"
                            />
                            <Button onClick={handleCommentSubmit}>Submit Comment</Button>
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>Sentiment Analysis</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <span>Overall Sentiment: <Badge variant="outline">{calculateSentiment()}</Badge></span> {/* Changed <p> to <span> */}
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};

export default PRsView;
