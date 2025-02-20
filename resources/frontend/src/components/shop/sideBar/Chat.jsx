import { useCallback, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    Avatar,
    Box,
    List,
    Typography,
    Badge,
    IconButton,
    InputBase,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import RateReviewOutlinedIcon from "@mui/icons-material/RateReviewOutlined";
import PushPinOutlinedIcon from "@mui/icons-material/PushPinOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import FilterListIcon from "@mui/icons-material/FilterList";
import DoneAllOutlinedIcon from "@mui/icons-material/DoneAllOutlined";
import CheckOutlinedIcon from "@mui/icons-material/CheckOutlined";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import { format, isThisYear, isToday } from "date-fns";
import { getUserStatusColor } from "../../../feature/action";
import { useAuth } from "../../../contexts/AuthContext";
import { actionChat } from "../../../reduxStore/actions/chat_action";
import { selectorChat } from "../../../reduxStore/selector/selectorChat";
import { parseMixedTagsToText } from "../../helper/func";

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
    const dispatch = useDispatch();

    const users = useSelector(selectorChat.handleGetUsers);
    const selectedUser = useSelector(selectorChat.handleGetCurrentUser);
    const pinnedUsers = useSelector(selectorChat.handleGetPinned);

    const [showFilter, setShowFilter] = useState(false);
    const [search, setSearch] = useState("");

    const pinnedChats = useMemo(
        () =>
            Array.isArray(users)
                ? users
                      .filter((item) => item.name.indexOf(search) != -1)
                      .filter((item) =>
                          pinnedUsers?.includes((item.type || "") + item.id)
                      )
                : [],
        [users, pinnedUsers, search]
    );
    const recentChats = useMemo(
        () =>
            Array.isArray(users)
                ? users
                      .filter((item) => item.name.indexOf(search) != -1)
                      .filter(
                          (item) =>
                              //   recentlyUsers?.includes(item.id) &&
                              !pinnedUsers?.includes(
                                  (item.type || "") + item.id
                              )
                      )
                : [],
        [users, pinnedUsers, search]
    );
    // const suggestedUsers = useMemo(
    //     () =>
    //         Array.isArray(users)
    //             ? users.filter(
    //                   (item) =>
    //                       !recentlyUsers?.includes(item.id) &&
    //                       !pinnedUsers?.includes(item.id)
    //               )
    //             : [],
    //     [users, recentlyUsers, pinnedUsers]
    // );

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

    const handleClickOpenFitler = useCallback(() => setShowFilter(true), []);
    const handleClickCloseFitler = useCallback(() => {
        setShowFilter(false);
        setSearch("");
    }, []);
    const handleClickNewChat = useCallback(() => {
        dispatch(
            actionChat.handleSetCurrentUser({ id: "new", name: "New Chat" })
        );
    }, [dispatch]);

    const handleFilterChange = useCallback((e) => {
        setSearch(e.target.value);
    }, []);

    return (
        <Box sx={{ py: 2 }}>
            {showFilter ? (
                <Box
                    component="form"
                    sx={{
                        px: "2px",
                        display: "flex",
                        alignItems: "center",
                        borderBottom: "1px solid gray",
                    }}
                >
                    {/* <IconButton sx={{ p: "10px" }} aria-label="menu">
                        <MenuIcon />
                    </IconButton> */}
                    <InputBase
                        sx={{ ml: 1, flex: 1, color: "white" }}
                        placeholder="検索"
                        inputProps={{ "aria-label": "検索" }}
                        onChange={handleFilterChange}
                        value={search}
                    />
                    {/* <IconButton
                        type="button"
                        sx={{ p: "10px" }}
                        aria-label="search"
                    >
                        <TuneOutlinedIcon />
                    </IconButton> */}
                    {/* <Divider
                        sx={{ height: 24, m: 0.5, bgcolor: "white" }}
                        orientation="vertical"
                    /> */}
                    <IconButton onClick={handleClickCloseFitler}>
                        <CloseOutlinedIcon htmlColor="white" />
                    </IconButton>
                </Box>
            ) : (
                <Box display={"flex"} justifyContent={"end"}>
                    <Box display={"flex"} alignItems={"center"}>
                        <IconButton onClick={handleClickOpenFitler}>
                            <FilterListIcon htmlColor="white" />
                        </IconButton>
                        <IconButton onClick={handleClickNewChat}>
                            <RateReviewOutlinedIcon htmlColor="white" />
                        </IconButton>
                    </Box>
                </Box>
            )}

            <Typography variant="p" fontSize={12} color="white" pl={2}>
                {/* Pinned */}固定
            </Typography>
            <List>
                {pinnedChats?.map((user) => (
                    <ChatItem
                        key={user.type + user.id}
                        user={user}
                        selected={selectedUser}
                        onClick={handleSetSelectedUser}
                        pinned={pinnedUsers?.includes(
                            (user.type || "") + user.id
                        )}
                        setPin={handleSetPinUser}
                    />
                ))}
            </List>

            <Typography variant="p" fontSize={12} color="white" pl={2}>
                {/* Recent */}最近
            </Typography>
            <List>
                {selectedUser && selectedUser.id == "new" && (
                    <ChatItem
                        user={selectedUser}
                        selected={selectedUser}
                        onClick={handleSetSelectedUser}
                        pinned={false}
                        setPin={handleSetPinUser}
                    />
                )}
                {recentChats?.map((user) => (
                    <ChatItem
                        key={user.type + user.id}
                        user={user}
                        selected={selectedUser}
                        onClick={handleSetSelectedUser}
                        pinned={pinnedUsers?.includes(
                            (user.type || "") + user.id
                        )}
                        setPin={handleSetPinUser}
                    />
                ))}
            </List>

            {/* <Typography variant="p" fontSize={12} color="white" pl={2}>
                おすすめ
            </Typography>
            <List>
                {suggestedUsers?.map((user) => (
                    <ChatItem
                        key={user.id}
                        user={user}
                        selected={selectedUser}
                        onClick={handleSetSelectedUser}
                        pinned={pinnedUsers?.includes((user.type || "") + user.id)}
                        setPin={handleSetPinUser}
                    />
                ))}
            </List> */}
        </Box>
    );
};

export default ChatSidebar;

const ChatItem = ({ user, selected, onClick, pinned, setPin }) => {
    const chats = useSelector(selectorChat.handleGetChats);

    const classes = useStyles();
    const { auth } = useAuth();
    const count = useMemo(
        () =>
            chats.filter((item) => {
                if (item.group_id && user.type == "group") {
                    return item.group_id == user.id && item.status == "unread";
                }
                if (!item.group_id && user.type == "chat") {
                    return (
                        item.from == user?.id &&
                        item.to == auth?.id &&
                        item.status == "unread"
                    );
                }
                return false;
            }).length,
        [chats, user, auth]
    );

    const lastChat = useMemo(() => {
        if (user && Array.isArray(chats) && chats.length > 0) {
            return chats
                .filter((item) => {
                    if (item.group_id && user.type == "group") {
                        return item.group_id == user.id;
                    }
                    if (!item.group_id && user.type == "chat") {
                        if (auth?.id == user?.id)
                            return item.from == user?.id && item.to == user?.id;
                        return item.from == user?.id || item.to == user?.id;
                    }
                    return false;
                })
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
            setPin((user.type || "") + user.id, !pinned);
        },
        [setPin, user, pinned]
    );

    return (
        <Box
            className={`${classes.boxContainer} ${
                selected?.id === user.id && selected?.type === user?.type
                    ? classes.selected
                    : ""
            }`}
            onClick={handleClick}
        >
            <div className={classes.container} onClick={handleClick}>
                <div className={classes.iconWrapper}>
                    <Badge
                        overlap="circular"
                        anchorOrigin={{
                            vertical: "bottom",
                            horizontal: "right",
                        }}
                        badgeContent={
                            count > 0 ? (
                                <div className={classes.notification}>
                                    {count}
                                </div>
                            ) : (
                                <></>
                            )
                        }
                    >
                        <Avatar alt="Remy Sharp">
                            {user.type == "group" ? (
                                <GroupsOutlinedIcon color="primary" />
                            ) : (
                                user.name[0]
                            )}
                        </Avatar>
                    </Badge>
                    {/* <Avatar sx={{ width: 32, height: 32, color: "black" }}></Avatar> */}
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
                                {user.type == "chat" && auth?.id === user.id
                                    ? "(あなた)"
                                    : user.name}
                            </div>
                            <div className={classes.lastMessage}>
                                {parseMixedTagsToText(lastChat?.content || "")}
                            </div>
                        </Box>
                        <div className={classes.userTime}>
                            {lastChat?.from == auth?.id && (
                                <>
                                    {lastChat?.status == "read" ? (
                                        <DoneAllOutlinedIcon
                                            fontSize="12"
                                            color="success"
                                        />
                                    ) : (
                                        <CheckOutlinedIcon
                                            fontSize="12"
                                            color="success"
                                        />
                                    )}
                                </>
                            )}
                            {formatDate(lastChat?.updated_at)}
                        </div>
                    </div>
                </div>
                <div className={classes.pinWrapper}>
                    <button
                        onClick={handleClickPin}
                        className={classes.pinButton}
                    >
                        <PushPinOutlinedIcon
                            fontSize="small"
                            htmlColor={"#9ca3af"}
                            sx={{ transform: pinned ? "" : "rotate(45deg)" }}
                        />
                    </button>
                </div>
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
        display: "flex",
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
        top: 16,
        right: 4,
    },
    pinButton: {
        width: 32,
        height: 32,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "50%",
        border: "none",
        opacity: 0.5,
        backgroundColor: "transparent",
        "&:hover": {
            backgroundColor: "#4b5563",
            opacity: 1,
        },
        "&:hover + &": {
            opacity: 1,
        },
    },
    notification: {
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
    badge: {
        "& .MuiBadge-badge": {
            backgroundColor: "#dc2626",
            color: "#dc2626",
            boxShadow: "0 0 0 2px #fff",
            "&::after": {
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                borderRadius: "50%",
                animation: "ripple 1.2s infinite ease-in-out",
                border: "1px solid currentColor",
                content: '""',
            },
        },
    },
}));
