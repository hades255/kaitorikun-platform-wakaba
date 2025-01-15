import { useState, useEffect } from "react";
import {
    Box,
    List,
    ListItem,
    ListItemText,
    TextField,
    Button,
    Typography,
    Paper,
} from "@mui/material";

const ChatSidebar = () => {
    const socket = null;

    const [selectedUser, setSelectedUser] = useState(null);
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
        <Box
            sx={{
                borderColor: "divider",
                p: 2,
            }}
        >
            <Typography variant="h6" color="white">
                Pinned
            </Typography>
            <List>
                {pinnedChats.map((user) => (
                    <ListItem
                        key={user.id}
                        onClick={() => setSelectedUser(user)}
                        sx={{ color: "white" }}
                    >
                        <ListItemText primary={user.name} />
                    </ListItem>
                ))}
            </List>

            <Typography variant="h6" color="white">
                Recent
            </Typography>
            <List>
                {recentChats.map((userId) => {
                    const user = suggestedUsers.find((u) => u.id === userId);
                    return (
                        <ListItem
                            key={userId}
                            onClick={() => setSelectedUser(user)}
                            sx={{ color: "white" }}
                        >
                            <ListItemText primary={user.name} />
                        </ListItem>
                    );
                })}
            </List>

            <Typography variant="h6" color="white">
                Suggested
            </Typography>
            <List>
                {suggestedUsers.map((user) => (
                    <ListItem
                        key={user.id}
                        onClick={() => setSelectedUser(user)}
                        sx={{ color: "white" }}
                    >
                        <ListItemText primary={user.name} />
                    </ListItem>
                ))}
            </List>
        </Box>
    );
};

export default ChatSidebar;
