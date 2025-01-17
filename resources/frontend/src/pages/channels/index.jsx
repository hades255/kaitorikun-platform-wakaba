import React, { useState } from "react";
import { Box, Button, Typography, Dialog, TextField } from "@mui/material";
import api from "../../api";
import { actionChannel, selectorChannel } from "../../reduxStore";
import { PanelContent, useDispatch, useSelector } from "../../components";
import Post from "./Post";
import PostEditor from "./PostEditor";

const Channels = () => {
    const dispatch = useDispatch();

    const channel = useSelector(selectorChannel.handleGetChannel);
    const posts = useSelector(selectorChannel.handleGetPosts);
    const users = useSelector(selectorChannel.handleGetUsers);

    const [showPostEditor, setShowPostEditor] = useState(false);
    const [showInviteDialog, setShowInviteDialog] = useState(false);
    const [inviteEmail, setInviteEmail] = useState("");

    const handleCreatePost = (post) => {
        const createPostFunc = async () => {
            try {
                // const response =
                await api.post("posts", {
                    ...post,
                    channel_id: channel.id,
                });
                // dispatch(actionChannel.handleAddPostToChannel(response.data));
                setShowPostEditor(false);
            } catch (error) {
                console.log(error);
            }
        };
        createPostFunc();
    };

    const handleInvite = () => {
        // Handle invite logic
        setShowInviteDialog(false);
        setInviteEmail("");
    };

    return (
        <PanelContent headerContent title={channel ? channel.name : "チャンネル"}>
            {channel ? (
                <Box>
                    {!showPostEditor && (
                        <Box sx={{ mb: 2 }}>
                            <Button
                                variant="contained"
                                onClick={() => setShowPostEditor(true)}
                                sx={{ mr: 1 }}
                            >
                                {/* Start New Post */}新しい投稿を開始
                            </Button>
                            <Button
                                variant="outlined"
                                onClick={() => setShowInviteDialog(true)}
                            >
                                {/* Invite People */}人を招待
                            </Button>
                        </Box>
                    )}

                    {showPostEditor && (
                        <PostEditor
                            onPost={handleCreatePost}
                            onClose={() => setShowPostEditor(false)}
                        />
                    )}

                    {posts.map((post, index) => (
                        <Post key={index} post={post} users={users} />
                    ))}

                    <Dialog
                        open={showInviteDialog}
                        onClose={() => setShowInviteDialog(false)}
                    >
                        <Box sx={{ p: 2 }}>
                            <Typography variant="h6">
                                {/* Invite People */}人を招待
                            </Typography>
                            <TextField
                                fullWidth
                                // label="Email"
                                label="メール"
                                value={inviteEmail}
                                onChange={(e) => setInviteEmail(e.target.value)}
                                sx={{ my: 2 }}
                            />
                            <Button variant="contained" onClick={handleInvite}>
                                {/* Send Invite */}招待を送信
                            </Button>
                        </Box>
                    </Dialog>
                </Box>
            ) : (
                <Box>{/* Create new Channel */}新しいチャンネルを作成</Box>
            )}
        </PanelContent>
    );
};

export default Channels;
