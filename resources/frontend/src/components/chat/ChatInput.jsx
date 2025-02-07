import { useCallback, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import InputEmoji from "react-input-emoji";
import axios from "axios";
import { Box } from "@mui/material";
import { AttachFileOutlined } from "@mui/icons-material";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import SendIcon from "@mui/icons-material/Send";
import { API_ROUTE } from "../../config";
import api from "../../api";
import { actionChat } from "../../reduxStore/actions/chat_action";

const ChatInput = ({ sending, setSending, selectedUser }) => {
    const dispatch = useDispatch();

    const fileInput = useRef(null);

    const [message, setMessage] = useState("");

    const handleSubmit = useCallback(
        (e) => {
            e.preventDefault();
            if (message.trim() && selectedUser) {
                setSending(true);
                const newMessage = {
                    content: message,
                    to: selectedUser.id,
                    status: "unread",
                    reply: 0,
                    emoji: "",
                };
                const sendMsgFunc = async () => {
                    try {
                        const response = await api.post("chats", newMessage);
                        dispatch(
                            actionChat.handleReceiveChat(response.data.chat)
                        );
                        setMessage("");
                        setSending(false);
                    } catch (error) {
                        console.log(error);
                    }
                };
                sendMsgFunc();
            }
        },
        [dispatch, message, setSending, selectedUser]
    );

    const handleFileSelect = useCallback(
        (event) => {
            const files = Array.from(event.target.files);
            if (files.length == 0) return;
            setSending(true);
            const formData = new FormData();
            files.forEach((file) => {
                formData.append("files[]", file);
            });
            const sendFilesFunc = async () => {
                try {
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
                        const sendFilesToChatFunc = async () => {
                            try {
                                const response = await api.post("chats/files", {
                                    chats: uploadedFiles.map((item) => ({
                                        to: selectedUser.id,
                                        ...item,
                                    })),
                                });
                                response.data.chats.forEach((item) => {
                                    dispatch(
                                        actionChat.handleReceiveChat(item)
                                    );
                                });
                            } catch (error) {
                                console.log(error);
                            } finally {
                                setSending(false);
                            }
                        };
                        sendFilesToChatFunc();
                    } else {
                        setSending(false);
                    }
                } catch (error) {
                    setSending(false);
                    console.log(error);
                }
            };
            sendFilesFunc();
        },
        [dispatch, setSending, selectedUser]
    );

    const handleClickFileInput = useCallback(() => {
        if (fileInput && fileInput.current) {
            fileInput.current.click();
        }
    }, []);

    return (
        <Box sx={{ position: "relative" }}>
            <form onSubmit={handleSubmit}>
                <Box display="flex" alignItems={"center"} width={"100%"} mt={1}>
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
                    <InputEmoji
                        onChange={(e) => setMessage(e)}
                        value={message}
                        theme="auto"
                        placeholder="メッセージを入力してください"
                        language="ja"
                    />
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
    );
};

export default ChatInput;
