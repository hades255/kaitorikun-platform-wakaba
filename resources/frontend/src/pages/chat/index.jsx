import { useState, useEffect } from "react";
import { Box, TextField, Button, Typography, Paper } from "@mui/material";
import { PanelContent } from "../../components";

const ChatsPage = () => {
    const socket = null;

    const [selectedUser, setSelectedUser] = useState({
        id: 1,
        name: "John Doe",
    });
    const [message, setMessage] = useState("");
    const [messages, setMessages] = useState([]);
    const [suggestedUsers] = useState([
        { id: 1, name: "John Doe" },
        { id: 2, name: "Jane Smith" },
        // Add more suggested users
    ]);
    const [recentChats, setRecentChats] = useState([]);
    const [pinnedChats, setPinnedChats] = useState([]);

    useEffect(() => {
        socket?.on("receive-message", (message) => {
            setMessages((prev) => [...prev, message]);
            updateRecentChats(message.sender);
        });

        return () => socket?.off("receive-message");
    }, [socket]);

    const updateRecentChats = (userId) => {
        if (!recentChats.includes(userId)) {
            setRecentChats((prev) => [...prev, userId]);
        }
    };

    const handleSendMessage = () => {
        if (message.trim() && selectedUser) {
            const newMessage = {
                content: message,
                sender: "currentUser",
                receiver: selectedUser.id,
                timestamp: new Date(),
            };
            socket?.emit("new-message", newMessage);
            setMessages((prev) => [...prev, newMessage]);
            setMessage("");
            updateRecentChats(selectedUser.id);
        }
    };

    return (
        <PanelContent headerContent title="Messages">
            <div className="p-2 h-[calc(100vh_-_200px)]">
                {selectedUser ? (
                    <>
                        <Box
                            sx={{
                                height: "calc(100% - 80px)",
                                overflow: "auto",
                            }}
                        >
                            {messages.map((msg, index) => (
                                <Paper
                                    key={index}
                                    sx={{
                                        p: 2,
                                        mb: 1,
                                        ml:
                                            msg.sender === "currentUser"
                                                ? "auto"
                                                : 0,
                                        mr:
                                            msg.sender === "currentUser"
                                                ? 0
                                                : "auto",
                                        maxWidth: "70%",
                                    }}
                                >
                                    <Typography>{msg.content}</Typography>
                                </Paper>
                            ))}
                        </Box>
                        <Box sx={{ display: "flex", mt: 2 }}>
                            <TextField
                                fullWidth
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                placeholder="Type a message..."
                                sx={{ mr: 1 }}
                            />
                            <Button
                                variant="contained"
                                onClick={handleSendMessage}
                            >
                                Send
                            </Button>
                        </Box>
                    </>
                ) : (
                    <div className="flex h-full justify-center items-center">
                        Select a user to start chatting
                    </div>
                )}
            </div>
        </PanelContent>
    );
};

export default ChatsPage;
