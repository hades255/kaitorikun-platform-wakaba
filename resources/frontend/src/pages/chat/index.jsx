import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { MessageBox } from "react-chat-elements";
import "react-chat-elements/dist/main.css";
import { TextField, Button, Box } from "@mui/material";
import api from "../../api";
import { useAuth } from "../../contexts/AuthContext";
import { selectorChat } from "../../reduxStore/selector/selectorChat";
import { actionChat } from "../../reduxStore/actions/chat_action";
import { PanelContent, useDispatch, useSelector } from "../../components";
import { makeStyles, useTheme } from "@mui/styles";

const ChatsPage = () => {
    const { auth } = useAuth();
    const dispatch = useDispatch();
    const selectedUser = useSelector(selectorChat.handleGetCurrentUser);
    const _chats = useSelector(selectorChat.handleGetChats);
    const classes = useStyles();

    const lastmessage = useRef(null);

    const chats = useMemo(() => {
        if (
            auth &&
            selectedUser &&
            Array.isArray(_chats) &&
            _chats.length > 0
        )
            return _chats.filter(
                ({ from, to }) =>
                    (from == auth?.id && to == selectedUser.id) ||
                    (from == selectedUser.id && to == auth?.id)
            );
        return [];
    }, [auth, selectedUser, _chats]);

    const [message, setMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (message.trim() && selectedUser) {
            const newMessage = {
                content: message,
                to: selectedUser.id,
                status: "unread",
                reply: 0,
                emoji: "",
            };
            const sendMsgFunc = async () => {
                try {
                    await api.post("chats", newMessage);
                    setMessage("");
                } catch (error) {
                    console.log(error);
                }
            };
            sendMsgFunc();
        }
    };

    const handleReadChat = useCallback(
        async (userId) => {
            try {
                await api.patch("chats", { userId });
                dispatch(actionChat.handleReadChats(userId));
            } catch (error) {
                console.log(error);
            }
        },
        [dispatch]
    );

    useEffect(() => {
        if (selectedUser && lastmessage.current) {
            {
                lastmessage.current.scrollIntoView({ behavior: "smooth" });
                if (
                    chats.find(
                        (item) =>
                            item.from == selectedUser.id &&
                            item.status === "unread"
                    )
                ) {
                    handleReadChat(selectedUser.id);
                }
            }
        }
    }, [handleReadChat, chats, selectedUser]);

    return (
        <PanelContent
            headerContent
            // title="Messages"
            title="メッセージ"
        >
            <Box className={classes.container} p={4}>
                {selectedUser ? (
                    <>
                        <Box className={classes.chatWrapper}>
                            {chats.map((msg, index) => (
                                <ChatItem
                                    key={index}
                                    chat={msg}
                                    selectedUser={selectedUser}
                                />
                            ))}
                            <Box ref={lastmessage}></Box>
                        </Box>
                        <form onSubmit={handleSubmit}>
                            <Box display="flex" marginTop={4}>
                                <TextField
                                    fullWidth
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    // placeholder="Type a message..."
                                    placeholder="メッセージを入力..."
                                    sx={{ mr: 1 }}
                                />
                                <Button variant="contained" type="submit">
                                    {/* Send */}送信
                                </Button>
                            </Box>
                        </form>
                    </>
                ) : (
                    <Box display="flex" width="100%" justifyContent="center" alignItems="center">
                        {/* Select a user to start chatting */}
                        チャットを開始するユーザーを選択
                    </Box>
                )}
            </Box>
        </PanelContent>
    );
};

export default ChatsPage;

const ChatItem = ({ chat, selectedUser }) => {
    return (
        <MessageBox
            position={chat.from === selectedUser.id ? "left" : "right"}
            type={"text"}
            text={chat.content}
        />
    );
};

const useStyles = makeStyles((theme) => ({
    container: {
        height: "calc(100vh - 200px)",
        maxWidth: "768px",
        marginLeft: "auto",
        marginRight: "auto",
    },
    chatWrapper: {
        height: "calc(100% - 80px)",
        maxHeight: "calc(100% - 80px)",
        overflowY: "scroll", 
    }
  }));
