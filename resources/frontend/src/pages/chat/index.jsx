import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { MessageBox } from "react-chat-elements";
import { Box } from "@mui/material";
import moment from "moment";
import "moment/locale/ja";
import clsx from "clsx";
import "react-chat-elements/dist/main.css";
import api from "../../api";
import { makeStyles } from "@mui/styles";
import { AnimTypingIcon } from "../../assets/loader";
import { useAuth } from "../../contexts/AuthContext";
import { selectorChat } from "../../reduxStore/selector/selectorChat";
import { actionChat } from "../../reduxStore/actions/chat_action";
import ChatInput from "../../components/chat/ChatInput";
import { PanelContent, useDispatch, useSelector } from "../../components";
import { PUBLIC_HOST } from "../../config";

moment.locale("ja");

const ChatsPage = () => {
    const { auth } = useAuth();
    const dispatch = useDispatch();
    const selectedUser = useSelector(selectorChat.handleGetCurrentUser);
    const _chats = useSelector(selectorChat.handleGetChats);
    const classes = useStyles();

    const lastmessage = useRef(null);
    const [sending, setSending] = useState(false);

    const chats = useMemo(() => {
        if (auth && selectedUser && Array.isArray(_chats) && _chats.length > 0)
            return _chats?.filter(
                ({ from, to }) =>
                    (from == auth?.id && to == selectedUser.id) ||
                    (from == selectedUser.id && to == auth?.id)
            );
        return [];
    }, [auth, selectedUser, _chats]);

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
    }, [handleReadChat, chats, selectedUser, sending]);

    return (
        <PanelContent
            // title="Messages"
            title="メッセージ"
        >
            <Box className={classes.container} pb={4}>
                {selectedUser ? (
                    <>
                        <Box
                            className={clsx(
                                "non-scrollbar",
                                classes.chatWrapper
                            )}
                        >
                            {chats?.map((msg, index) => (
                                <ChatItem
                                    key={index}
                                    chat={msg}
                                    selectedUser={selectedUser}
                                />
                            ))}
                            {sending && (
                                <Box
                                    display={"flex"}
                                    justifyContent={"end"}
                                    px={4}
                                    py={2}
                                >
                                    <AnimTypingIcon />
                                </Box>
                            )}
                            <Box ref={lastmessage}></Box>
                        </Box>
                        <ChatInput
                            sending={sending}
                            setSending={setSending}
                            selectedUser={selectedUser}
                        />
                    </>
                ) : (
                    <Box
                        display="flex"
                        width="100%"
                        justifyContent="center"
                        alignItems="center"
                    >
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
    const dispatch = useDispatch();

    const type = chat.type.startsWith("video/")
        ? "video"
        : chat.type.startsWith("image/")
        ? "photo"
        : chat.type.startsWith("audio/")
        ? "audio"
        : chat.type == "txt"
        ? "text"
        : "file";

    const data = chat.other
        ? {
              uri: PUBLIC_HOST + "/storage/" + JSON.parse(chat.other)?.path,
              videoURL:
                  PUBLIC_HOST + "/storage/" + JSON.parse(chat.other)?.path,
              audioURL:
                  PUBLIC_HOST + "/storage/" + JSON.parse(chat.other)?.path,
              audioType: chat.type,
              size: JSON.parse(chat.other)?.size,
              status: {
                  click: true,
                  loading: 0,
                  download: true,
                  autoDownload: true,
              },
          }
        : null;

    const handleClickRemove = useCallback(() => {
        const removefunc = async () => {
            try {
                await api.delete("chats/" + chat.id);
                dispatch(actionChat.handleDeleteChats(chat.id));
            } catch (error) {
                console.log(error);
            }
        };
        removefunc();
    }, [dispatch, chat]);

    return (
        <div>
            {chat.to === selectedUser.id ? (
                <div
                    style={{
                        bottom: "-5px",
                        right: "10px",
                        fontSize: "12px",
                        color: "gray",
                        textAlign: "right",
                        paddingRight: "20px",
                    }}
                >
                    {moment(chat.created_at).fromNow()} {/* Relative time */}
                </div>
            ) : (
                <div
                    style={{
                        bottom: "-5px",
                        right: "10px",
                        fontSize: "12px",
                        color: "gray",
                        textAlign: "left",
                        paddingLeft: "20px",
                    }}
                >
                    {moment(chat.created_at).fromNow()} {/* Relative time */}
                </div>
            )}
            <MessageBox
                id={chat.id}
                position={chat.to === selectedUser.id ? "right" : "left"}
                type={type}
                // title={chat.content}
                text={chat.content}
                // date={chat.created_at}
                data={data}
                // replyButton={true}
                removeButton={true}
                // onClick={(e) => {
                //     console.log(e);
                // }}
                // onDownload={(e) => {
                //     console.log(e);
                // }}
                // onReplyClick={(e) => {
                //     console.log(e);
                // }}
                onRemoveMessageClick={handleClickRemove}
                status={chat.status == "read" ? "read" : "sent"}
            />
        </div>
    );
};

const useStyles = makeStyles((theme) => ({
    container: {
        height: "100%",
        maxWidth: "768px",
        marginLeft: "auto",
        marginRight: "auto",
    },
    chatWrapper: {
        height: "calc(100% - 80px)",
        maxHeight: "calc(100% - 80px)",
        overflowY: "scroll",
    },
}));
