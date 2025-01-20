import { useState } from "react";
import { TextField, Button, Typography, Paper } from "@mui/material";
import api from "../../api";
import { selectorChat } from "../../reduxStore/selector/selectorChat";
import { PanelContent, useSelector } from "../../components";

const ChatsPage = () => {
    const selectedUser = useSelector(selectorChat.handleGetCurrentUser);
    const chats = useSelector(selectorChat.handleGetChats);
    const [message, setMessage] = useState("");

    const handleSendMessage = () => {
        if (message.trim() && selectedUser) {
            const newMessage = {
                content: message,
                sender: "currentUser",
                receiver: selectedUser.id,
                timestamp: new Date(),
            };
            const sendMsgFunc = async () => {
                try {
                    const response = await api.post("chats", newMessage);
                    console.log(response.data);
                    setMessage("");
                    // updateRecentChats(selectedUser.id);  //  todo    necessary it to change the order of the users list
                } catch (error) {
                    console.log(error);
                }
            };
            sendMsgFunc();
        }
    };

    return (
        <PanelContent headerContent title="Messages">
            <div className="p-2 h-[calc(100vh_-_200px)]">
                {selectedUser ? (
                    <>
                        <div
                            sx={{
                                height: "calc(100% - 80px)",
                                overflow: "auto",
                            }}
                        >
                            {chats.map((msg, index) => (
                                <Paper
                                    key={index}
                                    sx={{
                                        p: 2,
                                        mb: 1,
                                        ml:
                                            msg.sender === "currentUser"
                                                ? "auto"
                                                : 0,
                                        mr:
                                            msg.sender === "currentUser"
                                                ? 0
                                                : "auto",
                                        maxWidth: "70%",
                                    }}
                                >
                                    <Typography>{msg.content}</Typography>
                                </Paper>
                            ))}
                        </div>
                        <div sx={{ display: "flex", mt: 2 }}>
                            <TextField
                                fullWidth
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                placeholder="Type a message..."
                                sx={{ mr: 1 }}
                            />
                            <Button
                                variant="contained"
                                onClick={handleSendMessage}
                            >
                                Send
                            </Button>
                        </div>
                    </>
                ) : (
                    <div className="flex h-full justify-center items-center">
                        Select a user to start chatting
                    </div>
                )}
            </div>
        </PanelContent>
    );
};

export default ChatsPage;
