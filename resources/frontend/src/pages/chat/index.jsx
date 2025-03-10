import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { MessageBox } from "react-chat-elements";
import "react-chat-elements/dist/main.css";
import emojiData from "@emoji-mart/data";
import Picker from "@emoji-mart/react";
import moment from "moment";
import "moment/locale/ja";
import clsx from "clsx";
import { Box, IconButton, Popover } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Add as AddIcon } from "@mui/icons-material";
import MoodIcon from "@mui/icons-material/Mood";
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
import { parseMixedTagsToText } from "../../components/helper/func";
import { EmojiItem } from "../communities/Post";

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
                dispatch(
                    actionChat.handleReadChats({
                        from: selectedUser.id,
                        to: auth.id,
                        type: selectedUser.type,
                    })
                );
                await api.patch("chats", {
                    from: selectedUser.id,
                    to: auth.id,
                    type: selectedUser.type,
                });
            } catch (error) {
                console.log(error);
            }
        },
        [dispatch, auth]
    );

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    if (
                        chats.find(
                            (item) =>
                                (selectedUser.type == "chat" &&
                                    item.from == selectedUser.id &&
                                    item.status === "unread") ||
                                (selectedUser.type == "group" &&
                                    item.group_id == selectedUser.id &&
                                    item.from != auth.id &&
                                    item.status === "unread")
                        )
                    ) {
                        const timer = setTimeout(() => {
                            handleReadChat(selectedUser);
                        }, 300);
                        return () => {
                            if (timer) clearTimeout(timer);
                        };
                    }
                }
            });
        });

        if (lastmessage.current) {
            observer.observe(lastmessage.current);
        }

        return () => {
            if (lastmessage.current) {
                observer.unobserve(lastmessage.current);
            }
        };
    }, [handleReadChat, chats, selectedUser, auth]);

    useEffect(() => {
        dispatch(actionChat.handleSetCurrentUser(null));
    }, [dispatch]);

    useEffect(() => {
        if (selectedUser && lastmessage.current) {
            lastmessage.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [selectedUser]);

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
                                <Box
                                    ref={lastmessage}
                                    className={classes.lastmessage}
                                ></Box>
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
    const currentUser = useSelector(selectorChat.handleGetCurrentUser);

    const position = chat.from === auth.id ? "right" : "left";
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

    const [showReactionButton, setShowReactionButton] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);
    const [emojis, setEmojis] = useState([]);
    const showEmojiPicker = Boolean(anchorEl);
    const hasEmoji = emojis && Array.isArray(emojis) && emojis.length > 0;

    useEffect(() => {
        if (Array.isArray(chat.reactions) && chat.reactions.length > 0) {
            let res = {};
            chat.reactions?.forEach((item) => {
                if (res[item.reaction]) {
                    res[item.reaction] = {
                        mine:
                            res[item.reaction].mine || item.user_id == auth?.id,
                        count: res[item.reaction].count + 1,
                        users: [...res[item.reaction].users, item.user_id],
                    };
                } else {
                    res[item.reaction] = {
                        mine: item.user_id == auth?.id,
                        count: 1,
                        users: [item.user_id],
                    };
                }
            });
            let res_a = [];
            for (let r in res) res_a.push({ reaction: r, ...res[r] });
            setEmojis(res_a);
        } else setEmojis([]);
    }, [chat, auth]);

    const handleNewEmojiClick = async (emojiData) => {
        try {
            const response = await api.post("chatreaction", {
                reaction: emojiData.id,
                chat_id: chat.id,
            });
            dispatch(actionChat.handleSetReaction(response.data));
        } catch (error) {
            console.log(error);
        } finally {
            setAnchorEl(false);
        }
    };

    const handleClickEmojiItem = (reaction) => {
        handleNewEmojiClick({ id: reaction.reaction });
    };

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

    const handleCloseEmojiOpen = useCallback(() => {
        setAnchorEl(null);
    }, []);

    return (
        <div
            onMouseEnter={() => setShowReactionButton(true)}
            onMouseLeave={() => setShowReactionButton(false)}
            style={{
                position: "relative",
                marginBottom: hasEmoji ? 20 : 0,
            }}
        >
            <MessageBox
                id={chat.id}
                position={position}
                notch={false}
                type={type}
                // title={chat.content}
                text={parseMixedTagsToText(chat.content)}
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
            {showEmojiPicker && (
                <div
                    style={{
                        position: "absolute",
                        bottom: "40px",
                        right: "10px",
                        zIndex: 2,
                        minWidth: 360,
                    }}
                >
                    <Popover
                        id={"open-emogi-popover" + chat.id}
                        anchorEl={anchorEl}
                        anchorOrigin={{
                            vertical: "bottom",
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
                </div>
            )}
            <div
                style={{
                    position: "absolute",
                    bottom: hasEmoji ? -20 : 0,
                    [position]: 20,
                    display: "flex",
                    alignItems: "center",
                    flexDirection:
                        chat.from === auth.id ? "row" : "row-reverse",
                }}
            >
                {hasEmoji && (
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                        }}
                    >
                        {emojis.map((item) => (
                            <EmojiItem
                                key={item.reaction}
                                reaction={item}
                                users={currentUser.users}
                                onClick={handleClickEmojiItem}
                            />
                        ))}
                    </div>
                )}
                <IconButton
                    color="primary"
                    onClick={(event) => setAnchorEl(event.currentTarget)}
                    sx={{
                        borderRadius: 20,
                        opacity: showReactionButton ? 1 : 0,
                        transition: "all ease-in-out 0.3s",
                    }}
                >
                    <MoodIcon />
                    <AddIcon />
                </IconButton>
            </div>
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
        height: "calc(100% - 66px)",
        maxHeight: "calc(100% - 66px)",
        overflowY: "scroll",
    },
    lastmessage: {
        padding: 16,
    },
}));
