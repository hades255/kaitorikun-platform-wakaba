import { useState } from "react";
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
import EmojiPicker from "emoji-picker-react";
import { useDispatch } from "../../components";
import { actionChannel } from "../../reduxStore";

const Post = ({ post }) => {
    const dispatch = useDispatch();
    const [showReplies, setShowReplies] = useState(false);
    const [showReplyInput, setShowReplyInput] = useState(false);
    const [reply, setReply] = useState("");
    const [showEmojiPicker, setShowEmojiPicker] = useState(false);

    const handleReply = () => {
        const newReply = {
            content: reply,
            timestamp: new Date(),
        };
        dispatch(
            actionChannel.handleReplyPost({ post: post.id, reply: newReply })
        );
        setReply("");
        setShowReplyInput(false);
    };

    const handleNewEmojiClick = (emojiData) => {
        dispatch(
            actionChannel.handleAddREACTION({
                post: post.id,
                reaction: { user: 1, emoji: emojiData.emoji },
            })
        );
        setShowEmojiPicker(false);
    };

    const handleEmojiClick = (emojiData) => {
        dispatch(
            actionChannel.handleRemoveREACTION({
                post: post.id,
                user: 1,
                reaction: emojiData,
            })
        );
        setShowEmojiPicker(false);
    };

    return (
        <Card sx={{ mb: 2 }}>
            <CardContent>
                <Typography variant="h6">{post.title}</Typography>
                <Typography variant="subtitle1" color="text.secondary">
                    {post.subject}
                </Typography>
                <div dangerouslySetInnerHTML={{ __html: post.content }} />

                <Box sx={{ mt: 2 }}>
                    <IconButton
                        onClick={() => setShowEmojiPicker(!showEmojiPicker)}
                    >
                        <AddIcon />
                    </IconButton>
                    {post.reactions.map((emoji, index) => (
                        <span key={index}>{emoji.emoji}</span>
                    ))}
                    {showEmojiPicker && (
                        <Box sx={{ position: "absolute", zIndex: 1 }}>
                            <EmojiPicker onEmojiClick={handleNewEmojiClick} />
                        </Box>
                    )}
                </Box>

                <Box sx={{ mt: 2 }}>
                    <Button onClick={() => setShowReplyInput(!showReplyInput)}>
                        Reply
                    </Button>
                    <Button onClick={() => setShowReplies(!showReplies)}>
                        View Conversation
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
                            Send Reply
                        </Button>
                    </Box>
                )}

                {showReplies &&
                    post.replies.map((reply, index) => (
                        <Card key={index} sx={{ mt: 1, ml: 2 }}>
                            <CardContent>
                                <Typography>{reply.content}</Typography>
                            </CardContent>
                        </Card>
                    ))}
            </CardContent>
        </Card>
    );
};

export default Post;
