import { useCallback, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import clsx from "clsx";
import { Box, List, Typography } from "@mui/material";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import PushPinOutlinedIcon from "@mui/icons-material/PushPinOutlined";
import { getUserStatusColor } from "../../../feature/action";
import { useAuth } from "../../../contexts/AuthContext";
import { actionChat } from "../../../reduxStore/actions/chat_action";
import { selectorChat } from "../../../reduxStore/selector/selectorChat";

const ChatSidebar = () => {
    const { auth } = useAuth();
    const dispatch = useDispatch();

    const users = useSelector(selectorChat.handleGetUsers);
    const selectedUser = useSelector(selectorChat.handleGetCurrentUser);
    const pinnedUsers = useSelector(selectorChat.handleGetPinned);
    const recentlyUsers = useSelector(selectorChat.handleGetRecently);
    const chats = useSelector(selectorChat.handleGetChats);

    const newChatCounts = useMemo(() => {
        let newChats = {};
        if (Array.isArray(chats))
            chats
                .filter(
                    (item) =>
                        item.from !== auth?.id &&
                        item.to == auth?.id &&
                        item.status == "unread"
                )
                .forEach((chat) => {
                    if (newChats[chat.from]) newChats[chat.from] += 1;
                    else newChats[chat.from] = 1;
                });
        return newChats;
    }, [chats, auth]);

    const pinnedChats = useMemo(
        () =>
            Array.isArray(users)
                ? users.filter((item) => pinnedUsers?.includes(item.id))
                : [],
        [users, pinnedUsers]
    );
    const recentChats = useMemo(
        () =>
            Array.isArray(users)
                ? users.filter(
                      (item) =>
                          recentlyUsers?.includes(item.id) &&
                          !pinnedUsers?.includes(item.id)
                  )
                : [],
        [users, recentlyUsers, pinnedUsers]
    );
    const suggestedUsers = useMemo(
        () =>
            Array.isArray(users)
                ? users.filter(
                      (item) =>
                          !recentlyUsers?.includes(item.id) &&
                          !pinnedUsers?.includes(item.id)
                  )
                : [],
        [users, recentlyUsers, pinnedUsers]
    );

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
                        pinned={pinnedUsers?.includes(user.id)}
                        setPin={handleSetPinUser}
                        count={newChatCounts[user.id] || 0}
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
                        pinned={pinnedUsers?.includes(user.id)}
                        setPin={handleSetPinUser}
                        count={newChatCounts[user.id] || 0}
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
                        pinned={pinnedUsers?.includes(user.id)}
                        setPin={handleSetPinUser}
                        count={newChatCounts[user.id] || 0}
                    />
                ))}
            </List>
        </Box>
    );
};

export default ChatSidebar;

const ChatItem = ({ user, selected, onClick, pinned, setPin, count }) => {
    const { auth } = useAuth();

    const handleClick = useCallback(() => {
        onClick(user);
    }, [onClick, user]);

    const handleClickPin = useCallback(
        (e) => {
            e.stopPropagation();
            setPin(user.id, !pinned);
        },
        [setPin, user, pinned]
    );

    return (
        <Box
            className={clsx(
                "mb-1 px-3 py-2 hover:bg-gray-700 rounded-md cursor-pointer group transition-all relative",
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
                        <p className="text-gray-200">
                            {user.name}
                            {auth?.id == user.id && "(あなた)"}
                        </p>
                        <p className="text-gray-400 text-xs">{"10:18"}</p>
                    </div>
                    <p className="text-gray-400 text-sm truncate">
                        {"lastMessage"}
                    </p>
                </div>
            </div>
            <div className="absolute top-0 right-2 h-full flex items-center">
                <button
                    onClick={handleClickPin}
                    className={`px-1 rounded-full ${
                        user.isPinned ? "text-blue-400" : "text-gray-400"
                    } opacity-0 group-hover:opacity-100 hover:bg-gray-600`}
                >
                    <PushPinOutlinedIcon className="!w-4 !h-4" />
                </button>
            </div>
            {count > 0 && (
                <div className="absolute bottom-2 right-2 w-4 min-w-4 h-4 rounded-full bg-red-600 text-white text-sm flex justify-center items-center">
                    {count}
                </div>
            )}
        </Box>
    );
};
