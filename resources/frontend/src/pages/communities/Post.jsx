import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import EmojiPicker from "emoji-picker-react";
import { formatDistanceToNow } from "date-fns";
import clsx from "clsx";
import {
    Card,
    CardContent,
    Typography,
    Button,
    Box,
    TextField,
    IconButton,
    Avatar,
    Badge,
} from "@mui/material";
import { Add as AddIcon } from "@mui/icons-material";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { styled } from "@mui/material/styles";
import api from "../../api";
import { getUserStatusColor } from "../../feature/action";
import { useAuth } from "../../contexts/AuthContext";
import { actionChannel } from "../../reduxStore";

const Post = ({ post, users }) => {
    const dispatch = useDispatch();
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
            post.reactions?.forEach((item) => {
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
                const response = await api.post("postreply", {
                    reply,
                    post_id: post.id,
                    channel_id: post.channel_id,
                });
                dispatch(actionChannel.handleReplyPost(response.data));
                dispatch(actionChannel.handleSetMyCommunity(post.community_id));
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
                const response = await api.post("postreaction", {
                    reaction: emojiData.emoji,
                    post_id: post.id,
                    channel_id: post.channel_id,
                });
                dispatch(actionChannel.handleAddREACTION(response.data));
                dispatch(actionChannel.handleSetMyCommunity(post.community_id));
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
                <Box display={"flex"} alignItems={"center"}>
                    <IconButton
                        onClick={() => setShowEmojiPicker(!showEmojiPicker)}
                    >
                        <AddIcon />
                    </IconButton>
                    {Array.isArray(reactions) &&
                        reactions?.map((item) => (
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
                </Box>
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
                    <Box display="flex" flexDirection="column" gap={2}>
                        {Array.isArray(post.replies) &&
                            post.replies?.map((item) => (
                                <ReplyItem
                                    key={item.id}
                                    reply={item}
                                    users={users}
                                />
                            ))}
                    </Box>
                )}
            </CardContent>
        </Card>
    );
};

export default Post;

const StyledBadge = styled(Badge)(({ theme }) => ({
    "& .MuiBadge-badge": {
        backgroundColor: getUserStatusColor("online"),
        color: getUserStatusColor("online"),
        width: 12,
        height: 12,
        borderRadius: "50%",
        border: `2px solid ${theme.palette.background.paper}`,
    },
}));

const ReplyItem = ({ reply, users }) => {
    const user =
        Array.isArray(users) && users.find(({ id }) => id == reply.user_id);
    const timeAgo = formatDistanceToNow(new Date(reply.updated_at), {
        addSuffix: true,
    });

    return (
        <Box
            display="flex"
            alignItems="start"
            justifyContent="space-between"
            px={3}
            py={2}
            borderRadius={1}
            boxShadow={3}
        >
            <Box
                display="flex"
                alignItems="center"
                width="100%"
                spacing={3}
                gap={3}
            >
                <StyledBadge
                    overlap="circular"
                    anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                    variant="dot"
                >
                    <Avatar>
                        <AccountCircleOutlinedIcon />
                    </Avatar>
                </StyledBadge>
                <Box display="flex" flexDirection="column" width="100%">
                    <Box
                        display="flex"
                        justifyContent="space-between"
                        alignItems="center"
                    >
                        <Typography variant="body1" color="textPrimary">
                            {user ? user.name : "不明なユーザー"}
                        </Typography>
                        <Typography variant="caption" color="textSecondary">
                            {timeAgo}
                        </Typography>
                    </Box>
                    <Typography variant="body2" color="textSecondary" noWrap>
                        {reply.reply}
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
};

const EmojiItem = ({ reaction, onClick }) => {
    const handleClick = () => {
        onClick(reaction);
    };

    return (
        <Box
            component="span"
            sx={{
                cursor: "pointer",
                mx: "1px",
                px: reaction.mine ? "4px" : "1px",
                borderRadius: "4px",
                border: 1,
                borderColor: "divider",
                color: "#1976d2",
                backgroundColor: reaction.mine ? "#0004" : "transparent",
            }}
            className={clsx({
                "additional-class": reaction.mine, // Example for adding additional classes
            })}
            onClick={handleClick}
            title={reaction.count}
        >
            {reaction.reaction}
            {reaction.count > 1 && reaction.count}
        </Box>
    );
};
