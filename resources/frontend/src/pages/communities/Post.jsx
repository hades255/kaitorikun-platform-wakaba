import { useEffect, useState } from "react";
import clsx from "clsx";
import { formatDistanceToNow } from "date-fns";
import {
    Card,
    CardContent,
    Typography,
    Button,
    Box,
    TextField,
    IconButton,
} from "@mui/material";
import { Add as AddIcon } from "@mui/icons-material";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import EmojiPicker from "emoji-picker-react";
import api from "../../api";
import { useAuth } from "../../contexts/AuthContext";
import { getUserStatusColor } from "../../feature/action";

const Post = ({ post, users }) => {
    const auth = useAuth();
    const [showReplies, setShowReplies] = useState(false);
    const [showReplyInput, setShowReplyInput] = useState(false);
    const [reply, setReply] = useState("");
    const [showEmojiPicker, setShowEmojiPicker] = useState(false);
    const [reactions, setReactions] = useState([]);
    const timeAgo = formatDistanceToNow(new Date(post.updated_at), {
        addSuffix: true,
    });

    useEffect(() => {
        if (post.reactions && post.reactions.length > 0) {
            let res = {};
            post.reactions.forEach((item) => {
                if (res[item.reaction]) {
                    res[item.reaction] = {
                        mine:
                            res[item.reaction].mine ||
                            item.user_id == auth.auth?.id,
                        count: res[item.reaction].count + 1,
                    };
                } else {
                    res[item.reaction] = {
                        mine: item.user_id == auth.auth?.id,
                        count: 1,
                    };
                }
            });
            let res_a = [];
            for (let r in res) res_a.push({ reaction: r, ...res[r] });
            setReactions(res_a);
        }
    }, [post, auth]);

    const handleReply = () => {
        const saveFunc = async () => {
            try {
                // const response =
                await api.post("postreply", {
                    reply,
                    post_id: post.id,
                    channel_id: post.channel_id,
                });
                // dispatch(actionChannel.handleReplyPost(response.data));
                setReply("");
                setShowReplyInput(false);
            } catch (error) {
                console.log(error);
            }
        };
        saveFunc();
    };

    const handleNewEmojiClick = (emojiData) => {
        if (
            Array.isArray(post.reactions) &&
            post.reactions.find(
                (item) =>
                    item.user_id == auth.auth?.id &&
                    item.reaction == emojiData.emoji
            )
        ) {
            setShowEmojiPicker(false);
            return;
        }
        const saveFunc = async () => {
            try {
                // const response =
                await api.post("postreaction", {
                    reaction: emojiData.emoji,
                    post_id: post.id,
                    channel_id: post.channel_id,
                });
                // dispatch(actionChannel.handleAddREACTION(response.data));
            } catch (error) {
                console.log(error);
            } finally {
                setShowEmojiPicker(false);
            }
        };
        saveFunc();
    };

    const handleEmojiClick = (reaction) => {
        if (reaction.mine) {
            const saveFunc = async () => {
                try {
                    // const response =
                    await api.post("postreaction/toggle", {
                        reaction: reaction.reaction,
                        post_id: post.id,
                        channel_id: post.channel_id,
                    });
                    // dispatch(actionChannel.handleRemoveREACTION(response.data));
                } catch (error) {
                    console.log(error);
                }
            };
            saveFunc();
        } else {
            const saveFunc = async () => {
                try {
                    // const response =
                    await api.post("postreaction", {
                        reaction: reaction.reaction,
                        post_id: post.id,
                        channel_id: post.channel_id,
                    });
                    // dispatch(actionChannel.handleAddREACTION(response.data));
                } catch (error) {
                    console.log(error);
                }
            };
            saveFunc();
        }
    };

    return (
        <Card sx={{ mb: 2 }}>
            <CardContent>
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                    <Typography variant="h6">{post.title}</Typography>
                    <Typography variant="subtitle1">{timeAgo}</Typography>
                </Box>
                <Typography variant="subtitle1" color="text.secondary">
                    {post.subject}
                </Typography>
                <div dangerouslySetInnerHTML={{ __html: post.content }} />
                <div className="flex items-center">
                    <IconButton
                        onClick={() => setShowEmojiPicker(!showEmojiPicker)}
                    >
                        <AddIcon />
                    </IconButton>
                    {Array.isArray(reactions) &&
                        reactions.map((item) => (
                            <EmojiItem
                                key={item.reaction}
                                reaction={item}
                                users={users}
                                onClick={handleEmojiClick}
                            />
                        ))}
                    {showEmojiPicker && (
                        <Box sx={{ position: "absolute", zIndex: 1 }}>
                            <EmojiPicker onEmojiClick={handleNewEmojiClick} />
                        </Box>
                    )}
                </div>
                <Box>
                    <Button onClick={() => setShowReplyInput(!showReplyInput)}>
                        {/* Reply */}返信
                    </Button>
                    <Button onClick={() => setShowReplies(!showReplies)}>
                        {showReplies ? "会話を非表示" : "会話を表示"}
                    </Button>
                </Box>
                {showReplyInput && (
                    <Box sx={{ mt: 2 }}>
                        <TextField
                            fullWidth
                            multiline
                            rows={2}
                            value={reply}
                            onChange={(e) => setReply(e.target.value)}
                            sx={{ mb: 1 }}
                        />
                        <Button variant="contained" onClick={handleReply}>
                            {/* Send Reply */}返信を送信
                        </Button>
                    </Box>
                )}
                {showReplies && (
                    <div className="flex flex-col gap-2">
                        {Array.isArray(post.replies) &&
                            post.replies.map((item) => (
                                <ReplyItem
                                    key={item.id}
                                    reply={item}
                                    users={users}
                                />
                            ))}
                    </div>
                )}
            </CardContent>
        </Card>
    );
};

export default Post;

const ReplyItem = ({ reply, users }) => {
    const user =
        Array.isArray(users) && users.find(({ id }) => id == reply.user_id);
    const timeAgo = formatDistanceToNow(new Date(reply.updated_at), {
        addSuffix: true,
    });

    return (
        <div className="flex items-start justify-between px-3 py-2 rounded-md shadow-lg shadow-[#0008]">
            <div className="w-full flex items-center space-x-3">
                <div className="relative">
                    <AccountCircleOutlinedIcon className="text-gray-700 !w-8 !h-8" />
                    <div
                        className={clsx(
                            `w-3 h-3 rounded-full absolute -bottom-0.5 -right-0.5`,
                            getUserStatusColor("online")
                        )}
                    />
                </div>
                <div className="w-full flex flex-col">
                    <div className="flex justify-between items-center">
                        <p className="text-gray-700">
                            {user ? user.name : "Unknown User"}
                        </p>
                        <p className="text-gray-500 text-xs">{timeAgo}</p>
                    </div>
                    <p className="text-gray-600 text-sm truncate">
                        {reply.reply}
                    </p>
                </div>
            </div>
        </div>
    );
};

const EmojiItem = ({ reaction, onClick }) => {
    const handleClick = () => {
        onClick(reaction);
    };

    return (
        <>
            <span
                className={clsx(
                    "cursor-pointer mx-[1px] px-[1px] rounded border text-[#1976d2]",
                    {
                        "px-1 bg-[#0004]": reaction.mine,
                    }
                )}
                onClick={handleClick}
                title={reaction.count}
            >
                {reaction.reaction}
                {reaction.count > 1 && reaction.count}
            </span>
        </>
    );
};
