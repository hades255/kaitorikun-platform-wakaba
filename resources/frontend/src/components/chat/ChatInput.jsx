import React, {
    useCallback,
    useEffect,
    useMemo,
    useRef,
    useState,
} from "react";
import { useDispatch, useSelector } from "react-redux";
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
import Tagify from "@yaireo/tagify";
import "@yaireo/tagify/dist/tagify.css";
import api from "../../api";
import { API_ROUTE } from "../../config";
import { actionChat } from "../../reduxStore/actions/chat_action";
import { selectorChat } from "../../reduxStore";

const ChatInput = ({ sending, setSending, selectedUser, reply, setReply }) => {
    const dispatch = useDispatch();
    const currentUser = useSelector(selectorChat.handleGetCurrentUser);
    const fileInput = useRef(null);
    const tagifyRef = useRef();
    const [tagify, setTagify] = useState(null);
    const [anchorEl, setAnchorEl] = useState(null);

    const showEmojiPicker = Boolean(anchorEl);
    const tagifySettings = useMemo(
        () => ({
            enforceWhitelist: true,
            // whitelist: [
            //     currentUser?.users.map(({ id, name, email }) => ({
            //         value: name,
            //         text: name,
            //         title: email,
            //         id,
            //     })),
            // ],
            addTagOnBlur: true,
            mode: "mix",
            pattern: /@|#/,
            tagTextProp: "text",
            dropdown: {
                enabled: 1,
                position: "text",
                mapValueTo: "text",
                highlightFirst: true,
            },
        }),
        [currentUser]
    );

    const handleClickEmojiOpen = useCallback((event) => {
        setAnchorEl(event.currentTarget);
    }, []);

    const handleCloseEmojiOpen = useCallback(() => {
        setAnchorEl(null);
    }, []);

    const sendMessage = useCallback(async () => {
        const message = tagify ? tagify.getMixedTagsAsString() : "";
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
                if (tagify) {
                    tagify.removeAllTags();
                    tagify.DOM.input.innerHTML = "";
                }
            } catch (error) {
                console.log(error);
            } finally {
                setSending(false);
            }
        }
    }, [dispatch, setSending, selectedUser, reply, setReply, tagify]);

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
            if (tagify) {
                const currentValue = tagify.getMixedTagsAsString();
                const newValue =
                    currentValue.substring(0, currentValue.length - 2) +
                    emojiData.native;
                console.log(currentValue, newValue);
                tagify.DOM.input.innerHTML = newValue;
                tagify.dropdown.hide();
            }
            handleCloseEmojiOpen();
        },
        [handleCloseEmojiOpen, tagify]
    );

    const handleRemoveReply = useCallback(() => {
        setReply(null);
    }, [setReply]);

    useEffect(() => {
        console.log(tagifySettings);
        const tagify = new Tagify(tagifyRef.current, tagifySettings);
        setTagify(tagify);
        return () => tagify.destroy();
    }, [tagifySettings]);

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
                        <TextField
                            inputRef={tagifyRef}
                            placeholder="メッセージを入力..."
                            variant="outlined"
                            size="small"
                            sx={{ mr: 1, py: 0 }}
                            disabled={sending}
                            fullWidth
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
