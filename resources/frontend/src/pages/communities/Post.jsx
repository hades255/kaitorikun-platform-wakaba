import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import EmojiPicker from "emoji-picker-react";
import { formatDistanceToNow } from "date-fns";
import {
    Card,
    CardContent,
    Typography,
    Button,
    Box,
    TextField,
    IconButton,
    Badge,
    Chip,
    Popover,
} from "@mui/material";
import { Add as AddIcon } from "@mui/icons-material";
import MoodIcon from "@mui/icons-material/Mood";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import { styled } from "@mui/material/styles";
import moment from "moment";
import "moment/locale/ja";
import api from "../../api";
import { getUserStatusColor } from "../../feature/action";
import { useAuth } from "../../contexts/AuthContext";
import { actionChannel } from "../../reduxStore";
import Creator from "../../components/community/Creator";

moment.locale("ja");

const Post = ({ post, users, channel }) => {
    const dispatch = useDispatch();
    const auth = useAuth();
    const pickerRef = useRef(null);
    const [showReplies, setShowReplies] = useState(false);
    const [showReplyInput, setShowReplyInput] = useState(false);
    const [reply, setReply] = useState("");
    const [showEmojiPicker, setShowEmojiPicker] = useState(false);
    const [reactions, setReactions] = useState([]);

    const handleClickOutside = (event) => {
        if (pickerRef.current && !pickerRef.current.contains(event.target)) {
            setShowEmojiPicker(false);
        }
    };

    useEffect(() => {
        if (showEmojiPicker) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [showEmojiPicker]);

    useEffect(() => {
        if (Array.isArray(post.reactions) && post.reactions.length > 0) {
            let res = {};
            post.reactions?.forEach((item) => {
                if (res[item.reaction]) {
                    res[item.reaction] = {
                        mine:
                            res[item.reaction].mine ||
                            item.user_id == auth.auth?.id,
                        count: res[item.reaction].count + 1,
                        users: [...res[item.reaction].users, item.user_id],
                    };
                } else {
                    res[item.reaction] = {
                        mine: item.user_id == auth.auth?.id,
                        count: 1,
                        users: [item.user_id],
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
                    schannel: post.schannel,
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
                    schannel: post.schannel,
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
                        schannel: post.schannel,
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
                        schannel: post.schannel,
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
                <Box display={"flex"} alignItems={"center"} gap={1}>
                    <Box
                        height={32}
                        width={8}
                        borderRadius={2}
                        bgcolor={"#4a55aa"}
                    ></Box>
                    <Creator creature={post} users={users} />
                    {channel?.user_id == post?.user_id && (
                        <Chip
                            variant="outlined"
                            color="secondary"
                            size="small"
                            label="所有者"
                            icon={<WorkspacePremiumIcon />}
                        />
                    )}
                    <Typography variant="subtitle1">
                        {moment(post.created_at).fromNow()}
                    </Typography>
                </Box>
                <Typography variant="h6">{post.title}</Typography>
                <Typography variant="subtitle1" color="text.secondary">
                    {post.subject}
                </Typography>
                <div dangerouslySetInnerHTML={{ __html: post.content }} />
                <Box display={"flex"} alignItems={"center"} gap={1}>
                    {Array.isArray(reactions) &&
                        reactions?.map((item) => (
                            <EmojiItem
                                key={item.reaction}
                                reaction={item}
                                users={users}
                                onClick={handleEmojiClick}
                            />
                        ))}
                    <IconButton
                        color="primary"
                        onClick={() => setShowEmojiPicker(!showEmojiPicker)}
                    >
                        <MoodIcon />
                        <AddIcon />
                    </IconButton>
                    {showEmojiPicker && (
                        <Box
                            sx={{ position: "absolute", zIndex: 1 }}
                            ref={pickerRef}
                        >
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
    return (
        <Box
            display="flex"
            flexDirection="column"
            width="100%"
            px={3}
            py={2}
            borderRadius={1}
            boxShadow={3}
        >
            <Box
                display="flex"
                justifyContent="space-between"
                spacing={3}
                gap={3}
            >
                <StyledBadge
                    overlap="circular"
                    anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                    variant="dot"
                >
                    <Creator creature={reply} users={users} />
                </StyledBadge>
                <Typography variant="caption" color="textSecondary">
                    {moment(reply.created_at).fromNow()}
                </Typography>
            </Box>
            <Typography variant="body2" color="textSecondary" noWrap>
                {reply.reply}
            </Typography>
        </Box>
    );
};

const EmojiItem = ({ reaction, onClick, users }) => {
    const [anchorEl, setAnchorEl] = useState(null);

    const handlePopoverOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handlePopoverClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);

    const handleClick = () => onClick(reaction);

    return (
        <div onMouseEnter={handlePopoverOpen} onMouseLeave={handlePopoverClose}>
            <Badge
                badgeContent={reaction.count > 1 ? reaction.count : 0}
                color="info"
                sx={{ cursor: "pointer" }}
            >
                <Chip
                    sx={{ fontSize: 24 }}
                    variant="outlined"
                    color="secondary"
                    label={reaction.reaction}
                    onClick={handleClick}
                ></Chip>
            </Badge>
            {Array.isArray(reaction.users) &&
                reaction.users.length > 0 &&
                open && (
                    <Popover
                        id="mouse-over-popover"
                        sx={{ pointerEvents: "none" }}
                        open={open}
                        anchorEl={anchorEl}
                        anchorOrigin={{
                            vertical: "bottom",
                            horizontal: "left",
                        }}
                        transformOrigin={{
                            vertical: "top",
                            horizontal: "left",
                        }}
                        onClose={handlePopoverClose}
                        disableRestoreFocus
                    >
                        <Box
                            p={2}
                            display={"flex"}
                            flexDirection={"column"}
                            gap={1}
                        >
                            {reaction.users.map((item, index) => (
                                <Creator
                                    key={index}
                                    users={users}
                                    creature={{ user_id: item }}
                                />
                            ))}
                        </Box>
                    </Popover>
                )}
        </div>
    );
};
