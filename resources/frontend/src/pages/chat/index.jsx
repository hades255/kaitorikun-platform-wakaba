import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { MessageBox } from "react-chat-elements";
import "react-chat-elements/dist/main.css";
import moment from "moment";
import "moment/locale/ja";
import clsx from "clsx";
import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import api from "../../api";
import { PUBLIC_HOST } from "../../config";
import { AnimTypingIcon } from "../../assets/loader";
import { useAuth } from "../../contexts/AuthContext";
import { selectorChat } from "../../reduxStore/selector/selectorChat";
import { actionChat } from "../../reduxStore/actions/chat_action";
import { PanelContent, useDispatch, useSelector } from "../../components";
import ChatInput from "../../components/chat/ChatInput";
import NewGroupChat from "../../components/chat/NewGroupChat";
import "./style.css";

moment.locale("ja");

const ChatsPage = () => {
    const { auth } = useAuth();
    const dispatch = useDispatch();
    const selectedUser = useSelector(selectorChat.handleGetCurrentUser);
    const _chats = useSelector(selectorChat.handleGetChats);
    const classes = useStyles();

    const lastmessage = useRef(null);
    const [sending, setSending] = useState(false);
    const [reply, setReply] = useState(null);

    const chats = useMemo(() => {
        if (auth && selectedUser && Array.isArray(_chats) && _chats.length > 0)
            return _chats?.filter(({ from, to, group_id }) =>
                selectedUser.type == "chat"
                    ? (from == auth?.id && to == selectedUser.id) ||
                      (from == selectedUser.id && to == auth?.id)
                    : selectedUser.type == "group"
                    ? group_id == selectedUser.id
                    : false
            );
        return [];
    }, [auth, selectedUser, _chats]);

    const handleReadChat = useCallback(
        async (selectedUser) => {
            try {
                await api.patch("chats", {
                    userId: selectedUser.id,
                    type: selectedUser.type,
                });
                dispatch(
                    actionChat.handleReadChats({
                        id: selectedUser.id,
                        type: selectedUser.type,
                    })
                );
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
                            (selectedUser.type == "chat" &&
                                item.from == selectedUser.id &&
                                item.status === "unread") ||
                            (selectedUser.type == "group" &&
                                item.group_id == selectedUser.id &&
                                item.status === "unread")
                    )
                ) {
                    handleReadChat(selectedUser);
                }
            }
        }
    }, [handleReadChat, chats, selectedUser, sending]);

    useEffect(() => {
        dispatch(actionChat.handleSetCurrentUser(null));
    }, [dispatch]);

    return (
        <PanelContent title="メッセージ">
            <Box className={classes.container}>
                {selectedUser ? (
                    selectedUser.id == "new" ? (
                        <>
                            <Box
                                className={clsx(
                                    "non-scrollbar",
                                    classes.chatWrapper
                                )}
                            >
                                <NewGroupChat />
                            </Box>
                            <ChatInput sending={true} />
                        </>
                    ) : (
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
                                        setReply={setReply}
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
                                reply={reply}
                                setReply={setReply}
                            />
                        </>
                    )
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

const ChatItem = ({ chat, selectedUser, setReply }) => {
    const { auth } = useAuth();
    const dispatch = useDispatch();

    const parseMixedTagsToText = (input) => {
        const tagPattern = /[[.*?\]]/g;
        let normalText = input;
        console.log(tagPattern)
        normalText = normalText.replace(tagPattern, (match) => {
            const tags = JSON.parse(match);
            return tags.map((tag) => tag.text || tag.value).join("");
        });
        return normalText;
    };

    // console.log(parseMixedTagsToText(`hello [[{"value":"100","text":"kenny","title":"Kenny McCormick","prefix":"@"}]]`))

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
                  download: true,
                  click: true,
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

    const handleDownload = (e) => {
        if (
            e.target.nodeName == "IMG" ||
            e.target.nodeName == "AUD" ||
            e.target.nodeName == "VID"
        )
            if (type != "text" && data.uri) {
                const link = document.createElement("a");
                link.href = data.uri;
                link.download = chat.content;
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            }
    };

    const handleReplyClick = () => {
        setReply(chat);
    };

    return (
        <div>
            <MessageBox
                id={chat.id}
                position={chat.from === auth.id ? "right" : "left"}
                type={type}
                // title={chat.content}
                text={chat.content}
                data={data}
                replyButton={true}
                removeButton={true}
                download={true}
                date={chat.created_at}
                status={chat.status == "read" ? "read" : "sent"} //  'waiting' | 'sent' | 'received' | 'read'
                dateString={moment(chat.created_at).fromNow()}
                onClick={handleDownload}
                onDownload={(e) => {
                    console.log("onDownload", e);
                }}
                onReplyClick={handleReplyClick}
                onReplyMessageClick={(e) => {
                    console.log("onReplyMessageClick", e);
                }}
                onRemoveMessageClick={handleClickRemove}
                reply={
                    chat.reply && {
                        photoURL:
                            "https://facebook.github.io/react/img/logo.svg",
                        title:
                            chat.reply.from === selectedUser.id
                                ? "あなた"
                                : selectedUser.name,
                        titleColor: "#8717ae",
                        message: chat.reply.content,
                    }
                }
            />
            {/* {type != "text" && data.uri && (
                <button onClick={() => handleDownload(data.uri)}>
                    Download Image
                </button>
            )} */}
        </div>
    );
};

const useStyles = makeStyles((theme) => ({
    container: {
        height: "100%",
        maxWidth: "1024px",
        marginLeft: "auto",
        marginRight: "auto",
    },
    chatWrapper: {
        height: "calc(100% - 44px)",
        maxHeight: "calc(100% - 44px)",
        overflowY: "scroll",
    },
}));
