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
            <Typography variant="p" fontSize={12} color="white" pl={2}>
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

            <Typography variant="p" fontSize={12} color="white" pl={2}>
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

            <Typography variant="p" fontSize={12} color="white" pl={2}>
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

const ChatItem = (chat) => (
    <div className="flex items-center justify-between p-3 hover:bg-gray-700 rounded-md cursor-pointer group">
        <div className="flex items-center space-x-3">
            <div className="relative">
                <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center">
                    <UserIcon className="w-4 h-4 text-gray-300" />
                </div>
                <Circle
                    className={`w-3 h-3 absolute -bottom-0.5 -right-0.5 ${getStatusColor(
                        chat.participants[1].status
                    )}`}
                />
            </div>
            <div>
                <p className="text-gray-200">{chat.participants[1].username}</p>
                {chat.lastMessage && (
                    <p className="text-gray-400 text-sm truncate">
                        {chat.lastMessage.message}
                    </p>
                )}
            </div>
        </div>
        <button
            onClick={(e) => {
                e.stopPropagation();
                togglePinChat(chat.id);
            }}
            className={`p-1 rounded-full ${
                chat.isPinned ? "text-blue-400" : "text-gray-400"
            } opacity-0 group-hover:opacity-100 hover:bg-gray-600`}
        >
            <Pin className="w-4 h-4" />
        </button>
    </div>
);
