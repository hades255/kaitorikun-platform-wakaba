import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import clsx from "clsx";
import { Box, List, Typography } from "@mui/material";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import PushPinOutlinedIcon from "@mui/icons-material/PushPinOutlined";
import { getUserStatusColor } from "../../../feature/action";
import { selectorChat } from "../../../reduxStore/selector/selectorChat";
import { actionChat } from "../../../reduxStore/actions/chat_action";

const ChatSidebar = () => {
    const dispatch = useDispatch();

    const users = useSelector(selectorChat.handleGetUsers);
    const selectedUser = useSelector(selectorChat.handleGetCurrentUser);

    const recentChats = users.filter((item) => item.recent);
    const pinnedChats = users.filter((item) => item.pinned);
    const suggestedUsers = users.filter((item) => !item.pinned && !item.pinned);

    const handleSetSelectedUser = useCallback(
        (user) => {
            dispatch(actionChat.handleSetCurrentUser(user));
        },
        [dispatch]
    );

    const handleSetPinUser = useCallback(
        (userId, pinned) => {
            dispatch(actionChat.handlePinUser({ userId, pinned }));
        },
        [dispatch]
    );

    return (
        <Box
            sx={{
                borderColor: "divider",
                py: 2,
            }}
        >
            <Typography variant="p" fontSize={12} color="white" pl={2}>
                {/* Pinned */}固定
            </Typography>
            <List>
                {pinnedChats.map((user) => (
                    <ChatItem
                        key={user.id}
                        user={user}
                        selected={selectedUser}
                        onClick={handleSetSelectedUser}
                        setPin={handleSetPinUser}
                    />
                ))}
            </List>

            <Typography variant="p" fontSize={12} color="white" pl={2}>
                {/* Recent */}最近
            </Typography>
            <List>
                {recentChats.map((user) => (
                    <ChatItem
                        key={user.id}
                        user={user}
                        selected={selectedUser}
                        onClick={handleSetSelectedUser}
                        setPin={handleSetPinUser}
                    />
                ))}
            </List>

            <Typography variant="p" fontSize={12} color="white" pl={2}>
                {/* Suggested */}おすすめ
            </Typography>
            <List>
                {suggestedUsers.map((user) => (
                    <ChatItem
                        key={user.id}
                        user={user}
                        selected={selectedUser}
                        onClick={handleSetSelectedUser}
                        setPin={handleSetPinUser}
                    />
                ))}
            </List>
        </Box>
    );
};

export default ChatSidebar;

const ChatItem = ({ user, selected, onClick, setPin }) => {
    const handleClick = useCallback(() => {
        onClick(user);
    }, [onClick, user]);

    const handleClickPin = (e) => {
        e.stopPropagation();
        setPin(user.id, !user.pinned);
    };

    return (
        <div
            className={clsx(
                "flex items-center justify-between mb-1 px-3 py-2 hover:bg-gray-700 rounded-md cursor-pointer group transition-all",
                {
                    "bg-[#fff2]": selected?.id == user.id,
                }
            )}
            onClick={handleClick}
        >
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
                onClick={handleClickPin}
                className={`px-1 rounded-full ${
                    user.isPinned ? "text-blue-400" : "text-gray-400"
                } opacity-0 group-hover:opacity-100 hover:bg-gray-600`}
            >
                <PushPinOutlinedIcon className="!w-4 !h-4" />
            </button>
        </div>
    );
};
