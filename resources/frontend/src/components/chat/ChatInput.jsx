import React, {
    useCallback,
    useEffect,
    useMemo,
    useRef,
    useState,
} from "react";
import { useDispatch } from "react-redux";
// import InputEmoji from "react-input-emoji";
import axios from "axios";
import Picker from "@emoji-mart/react";
import emojiData from "@emoji-mart/data";
import { Box, Popover, Avatar, TextField, Typography } from "@mui/material";
import { AttachFileOutlined } from "@mui/icons-material";
import ReplyIcon from "@mui/icons-material/Reply";
import CloseIcon from "@mui/icons-material/Close";
import MoodIcon from "@mui/icons-material/Mood";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import SendIcon from "@mui/icons-material/Send";
import Tagify from "@yaireo/tagify";
import "@yaireo/tagify/dist/tagify.css";
import { API_ROUTE } from "../../config";
import api from "../../api";
import { actionChat } from "../../reduxStore/actions/chat_action";

const ChatInput = ({ sending, setSending, selectedUser, reply, setReply }) => {
    const dispatch = useDispatch();

    const fileInput = useRef(null);

    const [message, setMessage] = useState("");
    const [anchorEl, setAnchorEl] = useState(null);

    const showEmojiPicker = Boolean(anchorEl);

    const handleClickEmojiOpen = useCallback((event) => {
        setAnchorEl(event.currentTarget);
    }, []);

    const handleCloseEmojiOpen = useCallback(() => {
        setAnchorEl(null);
    }, []);

    const sendMessage = useCallback(async () => {
        if (message.trim() && selectedUser) {
            setSending(true);
            const newMessage = {
                content: message,
                to:
                    selectedUser.type == "chat"
                        ? selectedUser.id
                        : reply
                        ? reply.id
                        : 0,
                status: "unread",
                reply: reply ? reply.id : 0,
                emoji: "",
                group_id: selectedUser.type == "group" ? selectedUser.id : null,
            };
            try {
                const response = await api.post("chats", newMessage);
                dispatch(actionChat.handleReceiveChat(response.data.chat));
                setReply(null);
                setMessage("");
            } catch (error) {
                console.log(error);
            } finally {
                setSending(false);
            }
        }
    }, [dispatch, message, setSending, selectedUser, reply, setReply]);

    const handleSubmit = useCallback(
        (e) => {
            e.preventDefault();
            sendMessage();
        },
        [sendMessage]
    );

    const handleFileSelect = useCallback(
        async (event) => {
            try {
                const files = Array.from(event.target.files);
                if (files.length == 0) return;
                setSending(true);
                const formData = new FormData();
                files.forEach((file) => {
                    formData.append("files[]", file);
                });
                const response = await axios.post(
                    `${API_ROUTE}upload`,
                    formData,
                    {
                        headers: {
                            "Content-Type": "multipart/form-data",
                        },
                    }
                );
                const uploadedFiles = response.data.files;
                if (uploadedFiles.length > 0) {
                    const _response = await api.post("chats/files", {
                        chats: uploadedFiles.map((item) => ({
                            to: selectedUser.id,
                            ...item,
                        })),
                    });
                    _response.data.chats.forEach((item) => {
                        dispatch(actionChat.handleReceiveChat(item));
                    });
                }
            } catch (error) {
                console.log(error);
            } finally {
                setSending(false);
            }
        },
        [dispatch, setSending, selectedUser]
    );

    const handleClickFileInput = useCallback(() => {
        if (fileInput && fileInput.current) {
            fileInput.current.click();
        }
    }, []);

    const handleNewEmojiClick = useCallback(
        (emojiData) => {
            setMessage(message + emojiData.native);
            handleCloseEmojiOpen();
        },
        [handleCloseEmojiOpen, message]
    );

    const handleRemoveReply = useCallback(() => {
        setReply(null);
    }, [setReply]);

    // const handleMessageChange = useCallback((e) => setMessage(e), []);

    return (
        <>
            {/* <MixModeTagInput
                setValues={(e) => {
                    console.log(e);
                }}
            /> */}
            <Box sx={{ position: "relative" }}>
                {reply && (
                    <Box
                        position={"absolute"}
                        left={0}
                        bottom={"105%"}
                        width={"100%"}
                        px={2}
                        m={1}
                        borderRadius={2}
                        bgcolor={"lightgray"}
                    >
                        <Box
                            display={"flex"}
                            justifyContent={"space-between"}
                            alignItems={"center"}
                            gap={2}
                        >
                            <Box display={"flex"} alignItems={"center"} gap={2}>
                                <ReplyIcon fontSize="large" color="primary" />
                                <Box display={"flex"} flexDirection={"column"}>
                                    <Typography
                                        variant="subtitle1"
                                        color="primary"
                                    >
                                        {selectedUser.id == reply.from
                                            ? selectedUser.name
                                            : "あなた"}
                                    </Typography>
                                    <Typography variant="subtitle2">
                                        {reply.content}
                                    </Typography>
                                </Box>
                            </Box>
                            <IconButton onClick={handleRemoveReply}>
                                <CloseIcon />
                            </IconButton>
                        </Box>
                    </Box>
                )}
                <form onSubmit={handleSubmit}>
                    <Box display="flex" alignItems={"center"} width={"100%"}>
                        <IconButton
                            onClick={handleClickFileInput}
                            sx={{ p: "10px" }}
                            aria-label="menu"
                        >
                            <AttachFileOutlined />
                            <input
                                type="file"
                                onChange={handleFileSelect}
                                multiple
                                ref={fileInput}
                                style={{ display: "none" }}
                                disabled={sending}
                            />
                        </IconButton>
                        {/* <InputEmoji
                        value={message}
                        theme="auto"
                        placeholder="メッセージを入力してください"
                        language="ja"
                        onChange={handleMessageChange}
                        onEnter={sendMessage}
                    /> */}
                        <TextField
                            fullWidth
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            // placeholder="Type a message..."
                            placeholder="メッセージを入力..."
                            sx={{ mr: 1, py: 0 }}
                            size="small"
                            disabled={sending}
                        />
                        <IconButton
                            color="primary"
                            onClick={handleClickEmojiOpen}
                            sx={{ p: "10px" }}
                            disabled={sending}
                        >
                            <MoodIcon />
                        </IconButton>
                        <Divider
                            sx={{ height: 28, m: 0.5 }}
                            orientation="vertical"
                        />
                        <IconButton
                            type="submit"
                            disabled={sending}
                            color="primary"
                            sx={{ p: "10px" }}
                            aria-label="directions"
                        >
                            <SendIcon />
                        </IconButton>
                    </Box>
                </form>
            </Box>
            <Popover
                id={"open-emogi-popover-chat"}
                anchorEl={anchorEl}
                anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                }}
                transformOrigin={{
                    vertical: "bottom",
                    horizontal: "right",
                }}
                open={showEmojiPicker}
                onClose={handleCloseEmojiOpen}
            >
                <Box sx={{ minWidth: 360 }}>
                    <Picker
                        locale="ja"
                        theme="light"
                        previewPosition="none"
                        skinTonePosition="none"
                        emojiButtonSize={44}
                        emojiSize={28}
                        emojiButtonRadius={"6px"}
                        emojiButtonColors={[
                            "rgba(155,223,88,.7)",
                            "rgba(149,211,254,.7)",
                            "rgba(247,233,34,.7)",
                            "rgba(238,166,252,.7)",
                            "rgba(255,213,143,.7)",
                            "rgba(211,209,255,.7)",
                        ]}
                        icons={"solid"}
                        data={emojiData}
                        onEmojiSelect={handleNewEmojiClick}
                    />
                </Box>
            </Popover>
        </>
    );
};

export default ChatInput;

const MixModeTagInput = ({ setValues }) => {
    const tagifyRef = useRef();
    const [tags, setTags] = useState([]);
    const [users, setUsers] = useState([]);
    const [tagify, setTagify] = useState(null);
    const [showDropdown, setShowDropdown] = useState(false);
    const whitelist = useMemo(
        () =>
            users.filter(
                ({ email }) => !tags.map((item) => item.email).includes(email)
            ),
        [users, tags]
    );

    const tagifySettings = {
        whitelist: [],
        maxTags: 5,
        addTagOnBlur: false,
        mode: "mix",
        pattern: /@|#/,
        templates: {},
    };

    useEffect(() => setValues(tags), [setValues, tags]);

    useEffect(() => {
        setShowDropdown(whitelist && whitelist.length > 0);
    }, [whitelist]);

    useEffect(() => {
        const tagify = new Tagify(tagifyRef.current, tagifySettings);
        setTagify(tagify);
    }, []);

    useEffect(() => {
        if (!tagify) return;
        tagify.on("add", (e) => {
            setTags(
                tagify.value.map(({ value }) =>
                    users.find(({ email }) => email === value)
                )
            );
        });
    }, [tagify, users]);

    useEffect(() => {
        if (!tagify) return;
        tagify.on("remove", (e) => {
            setTags(
                tagify.value.map(({ value }) =>
                    users.find(({ email }) => email === value)
                )
            );
        });
    }, [tagify, users]);

    useEffect(() => {
        if (!tagify) return;
        let timer;
        tagify.on("input", (e) => {
            const text = e.detail.value;
            if (timer) clearTimeout(timer);
            if (text.length > 2)
                timer = setTimeout(async () => {
                    const res = await getUsers(text);
                }, 500);
            else {
                setUsers([]);
            }
        });

        return () => tagify.destroy();
    }, [getUsers, tagify]);

    const getUsers = useCallback(async (input) => {
        try {
            const response = await api(`users/search?search=${input}`);
            setUsers(response.data);
            return response.data;
        } catch (error) {
            console.log(error);
        }
    }, []);

    const handleClickUser = useCallback(
        (user) => tagify.addTags(user.email),
        [tagify]
    );

    const handleMouseLeave = useCallback(() => {
        const timer = setTimeout(() => setShowDropdown(false), 500);
        return () => {
            if (timer) clearTimeout(timer);
        };
    }, []);

    const handleMouseEnter = useCallback(() => {
        setShowDropdown(whitelist && whitelist.length > 0);
    }, [whitelist]);

    return (
        <Box
            width={"100%"}
            position={"relative"}
            onMouseLeave={handleMouseLeave}
            onMouseEnter={handleMouseEnter}
            mb={"-1px"}
        >
            <TextField
                inputRef={tagifyRef}
                placeholder="名前、メールを入力"
                variant="standard"
                size="small"
                fullWidth
            />
            {showDropdown && (
                <Box
                    position={"absolute"}
                    width={"100%"}
                    top={"100%"}
                    left={0}
                    border={"1px solid lightgray"}
                    borderRadius={2}
                    boxShadow={"2px 3px 4px #0004"}
                >
                    {whitelist.map((user) => (
                        <UserItem
                            user={user}
                            key={user.id}
                            onClick={handleClickUser}
                        />
                    ))}
                </Box>
            )}
        </Box>
    );
};

const UserItem = ({ user, onClick }) => {
    const handleClick = () => {
        onClick(user);
    };

    return (
        <Box
            onClick={handleClick}
            display={"flex"}
            alignItems={"center"}
            gap={2}
            sx={{
                cursor: "pointer",
                "&:hover": {
                    bgcolor: "#0001",
                },
            }}
            px={2}
            py={1}
        >
            <Avatar alt="Remy Sharp">{user.name[0]}</Avatar>
            <Box>
                <Typography variant="subtitle1">{user.name}</Typography>
                <Typography variant="subtitle2">{user.email}</Typography>
            </Box>
        </Box>
    );
};
