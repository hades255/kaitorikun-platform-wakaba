import { useCallback, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Avatar, Box, List, ListItemAvatar, Typography } from "@mui/material";
import PushPinOutlinedIcon from "@mui/icons-material/PushPinOutlined";
import { makeStyles } from "@mui/styles";
import { format, isThisYear, isToday } from "date-fns";
import { getUserStatusColor } from "../../../feature/action";
import { useAuth } from "../../../contexts/AuthContext";
import { actionChat } from "../../../reduxStore/actions/chat_action";
import { selectorChat } from "../../../reduxStore/selector/selectorChat";

export const formatDate = (dateString) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    if (!isThisYear(date)) {
        return format(date, "yyyy/MM/dd");
    } else if (!isToday(date)) {
        return format(date, "MM/dd");
    }
    return format(date, "HH:mm");
};

const ChatSidebar = () => {
    const classes = useStyles();
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
                {pinnedChats?.map((user) => (
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
                {recentChats?.map((user) => (
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
                {suggestedUsers?.map((user) => (
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
    const chats = useSelector(selectorChat.handleGetChats);

    const classes = useStyles();
    const { auth } = useAuth();

    const lastChat = useMemo(() => {
        if (user && Array.isArray(chats) && chats.length > 0) {
            return chats
                .filter(({ from, to }) =>
                    auth?.id == user?.id
                        ? from == auth?.id && to == auth?.id
                        : from == user?.id || to == user?.id
                )
                .sort((a, b) => {
                    if (a.created_at < b.created_at) return 1;
                    if (a.created_at > b.created_at) return -1;
                    return 0;
                })[0];
        }
        return null;
    }, [chats, user, auth]);

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
            className={`${classes.boxContainer} ${
                selected?.id === user.id ? classes.selected : ""
            }`}
            onClick={handleClick}
        >
            <div className={classes.container} onClick={handleClick}>
                <div className={classes.iconWrapper}>
                    <ListItemAvatar>
                        <Avatar sx={{ color: "black" }}>{user.name[0]}</Avatar>
                    </ListItemAvatar>
                    <div
                        className={`${classes.statusDot} ${getUserStatusColor(
                            "online"
                        )}`}
                    />
                </div>
                <div className={classes.detailsContainer}>
                    <div className={classes.detailsHeader}>
                        <Box display={"flex"} flexDirection={"column"}>
                            <div className={classes.userName}>
                                {auth?.id === user.id ? "あなた" : user.name}
                            </div>
                            <div className={classes.lastMessage}>
                                {lastChat?.content}
                            </div>
                        </Box>
                        <div className={classes.userTime}>
                            {formatDate(lastChat?.updated_at)}
                        </div>
                    </div>
                </div>
                <div className={classes.pinWrapper}>
                    <button
                        onClick={handleClickPin}
                        className={classes.pinButton}
                    >
                        <PushPinOutlinedIcon fontSize="small" color="white" />
                    </button>
                </div>
                {count > 0 && (
                    <div className={classes.notification}>{count}</div>
                )}
            </div>
        </Box>
    );
};

const useStyles = makeStyles((theme) => ({
    boxContainer: {
        marginBottom: "4px",
        padding: "8px 12px",
        borderRadius: "6px",
        cursor: "pointer",
        position: "relative",
        transition: "all 0.3s ease",
        "&:hover": {
            backgroundColor: "#4B5563",
        },
    },
    selected: {
        backgroundColor: "#fff2",
    },
    container: {
        width: "100%",
        display: "flex",
        alignItems: "center",
        gap: "12px",
        position: "relative",
    },
    iconWrapper: {
        position: "relative",
    },
    icon: {
        color: "grey",
        width: "32px",
        height: "32px",
    },
    statusDot: {
        width: "12px",
        height: "12px",
        borderRadius: "50%",
        position: "absolute",
        bottom: -2,
        right: -2,
    },
    detailsContainer: {
        width: "100%",
        display: "flex",
        flexDirection: "column",
    },
    detailsHeader: {
        display: "flex",
        justifyContent: "space-between",
    },
    userName: {
        color: "#e5e7eb",
    },
    userTime: {
        paddingTop: 4,
        color: "#9ca3af",
        fontSize: "12px",
        lineHeight: "16px",
    },
    lastMessage: {
        color: "#9ca3af",
        fontSize: "14px",
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        width: 100,
    },
    pinWrapper: {
        position: "absolute",
        top: 0,
        right: "16px",
        height: "100%",
        display: "flex",
        alignItems: "center",
    },
    pinButton: {
        padding: "4px",
        borderRadius: "50%",
        color: (props) => (props.isPinned ? "#111827" : "#9ca3af"),
        opacity: 0,
        "&:hover": {
            backgroundColor: "#4b5563",
            opacity: 1,
        },
        "&:hover + &": {
            opacity: 1,
        },
    },
    notification: {
        position: "absolute",
        bottom: "8px",
        right: "8px",
        width: "16px",
        minWidth: "16px",
        height: "16px",
        borderRadius: "50%",
        backgroundColor: "#dc2626",
        color: "white",
        fontSize: "12px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
}));
