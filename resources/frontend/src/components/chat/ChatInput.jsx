import { useCallback, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { Box, Button, TextField } from "@mui/material";
import { AttachFileOutlined } from "@mui/icons-material";
import api from "../../api";
import { actionChat } from "../../reduxStore/actions/chat_action";
import "./ChatInput.css";
import { API_ROUTE } from "../../config";

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
                <Box display="flex" height={"100%"} marginTop={4}>
                    <Button variant="outlined" onClick={handleClickFileInput}>
                        <input
                            type="file"
                            onChange={handleFileSelect}
                            multiple
                            ref={fileInput}
                            className="file-input"
                            disabled={sending}
                        />
                        <AttachFileOutlined />
                    </Button>
                    <TextField
                        fullWidth
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        // placeholder="Type a message..."
                        placeholder="メッセージを入力..."
                        sx={{ mr: 1 }}
                        disabled={sending}
                    />
                    <Button
                        variant="contained"
                        type="submit"
                        disabled={sending}
                    >
                        {/* Send */}送信
                    </Button>
                </Box>
            </form>
        </Box>
    );
};

export default ChatInput;
