import { useCallback, useRef, useState } from "react";
import { useDispatch } from "react-redux";
// import InputEmoji from "react-input-emoji";
import axios from "axios";
import Picker from "@emoji-mart/react";
import emojiData from "@emoji-mart/data";
import { Box, Popover, TextField, Typography } from "@mui/material";
import { AttachFileOutlined } from "@mui/icons-material";
import ReplyIcon from "@mui/icons-material/Reply";
import CloseIcon from "@mui/icons-material/Close";
import MoodIcon from "@mui/icons-material/Mood";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import SendIcon from "@mui/icons-material/Send";
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
                to: selectedUser.id,
                status: "unread",
                reply: reply ? reply.id : 0,
                emoji: "",
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
                            sx={{ mr: 1, py: 0, borderRadius: 20 }}
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
