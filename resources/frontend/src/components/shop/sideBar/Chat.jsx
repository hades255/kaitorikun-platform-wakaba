import { useState } from "react";
import { Box, List, ListItem, ListItemText, Typography } from "@mui/material";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import PushPinOutlinedIcon from "@mui/icons-material/PushPinOutlined";
import clsx from "clsx";
import { getUserStatusColor } from "../../../feature/action";

const ChatSidebar = () => {
    const [selectedUser, setSelectedUser] = useState(null);
    const [suggestedUsers] = useState([
        { id: 1, name: "John Doe" },
        { id: 2, name: "Jane Smith" },
    ]);
    const [recentChats, setRecentChats] = useState([]);
    const [pinnedChats, setPinnedChats] = useState([]);

    return (
        <Box
            sx={{
                borderColor: "divider",
                py: 2,
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
                    <ChatItem key={user.id} user={user} />
                ))}
            </List>
        </Box>
    );
};

export default ChatSidebar;

const ChatItem = ({ user }) => {
    return (
        <div className="flex items-center justify-between px-3 py-2 hover:bg-gray-700 rounded-md cursor-pointer group">
            <div className="w-full flex items-center space-x-3">
                <div className="relative">
                    <AccountCircleOutlinedIcon className="text-gray-300 !w-8 !h-8" />
                    <div
                        className={clsx(
                            `w-3 h-3 rounded-full absolute -bottom-0.5 -right-0.5`,
                            getUserStatusColor("online")
                        )}
                    />
                </div>
                <div className="w-full flex flex-col">
                    <div className="flex justify-between items-center">
                        <p className="text-gray-200">{user.name}</p>
                        <p className="text-gray-400 text-xs">{"10:18"}</p>
                    </div>
                    <p className="text-gray-400 text-sm truncate">
                        {"lastMessage"}
                    </p>
                </div>
            </div>
            <button
                onClick={(e) => {
                    e.stopPropagation();
                    // togglePinChat(user.id);
                }}
                className={`px-1 rounded-full ${
                    user.isPinned ? "text-blue-400" : "text-gray-400"
                } opacity-0 group-hover:opacity-100 hover:bg-gray-600`}
            >
                <PushPinOutlinedIcon className="!w-4 !h-4" />
            </button>
        </div>
    );
};
