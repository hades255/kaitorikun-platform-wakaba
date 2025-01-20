import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { MessageBox } from "react-chat-elements";
import "react-chat-elements/dist/main.css";
import { TextField, Button } from "@mui/material";
import api from "../../api";
import { useAuth } from "../../contexts/AuthContext";
import { selectorChat } from "../../reduxStore/selector/selectorChat";
import { actionChat } from "../../reduxStore/actions/chat_action";
import { PanelContent, useDispatch, useSelector } from "../../components";

const ChatsPage = () => {
    const { auth } = useAuth();
    const dispatch = useDispatch();
    const selectedUser = useSelector(selectorChat.handleGetCurrentUser);
    const _chats = useSelector(selectorChat.handleGetChats);

    const lastmessage = useRef(null);

    const chats = useMemo(() => {
        if (auth && selectedUser && _chats)
            return _chats.filter(
                ({ from, to }) =>
                    (from == auth.id && to == selectedUser.id) ||
                    (from == selectedUser.id && to == auth.id)
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
            <div className="p-2 h-[calc(100vh_-_200px)] container max-w-[768px]">
                {selectedUser ? (
                    <>
                        <div className="h-[calc(100%_-_80px)] max-h-[calc(100%_-_80px)] overflow-y-scroll">
                            {chats.map((msg, index) => (
                                <ChatItem
                                    key={index}
                                    chat={msg}
                                    selectedUser={selectedUser}
                                />
                            ))}
                            <div ref={lastmessage}></div>
                        </div>
                        <form onSubmit={handleSubmit}>
                            <div className="flex mt-2">
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
                            </div>
                        </form>
                    </>
                ) : (
                    <div className="flex h-full justify-center items-center">
                        {/* Select a user to start chatting */}
                        チャットを開始するユーザーを選択
                    </div>
                )}
            </div>
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
