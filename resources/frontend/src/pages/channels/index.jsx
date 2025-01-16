import React, { useMemo, useState } from "react";
import {
    Box,
    Button,
    Card,
    CardContent,
    Typography,
    Dialog,
    TextField,
} from "@mui/material";
import { PanelContent, useDispatch, useSelector } from "../../components";
import PostEditor from "./PostEditor";
import { actionChannel, selectorChannel } from "../../reduxStore";
import Post from "./Post";

const Channels = () => {
    const dispatch = useDispatch();

    const channel = useSelector(selectorChannel.handleGetChannel);
    const _posts = useSelector(selectorChannel.handleGetPosts);
    const posts = useMemo(
        () => _posts.filter((item) => item.channel == channel?.id),
        [channel, _posts]
    );
    const [showPostEditor, setShowPostEditor] = useState(false);
    const [showInviteDialog, setShowInviteDialog] = useState(false);
    const [inviteEmail, setInviteEmail] = useState("");

    const handleCreatePost = (post) => {
        const id = Date.now();
        dispatch(
            actionChannel.handleAddPostToChannel({
                ...post,
                id,
                channel: channel.id,
            })
        );
        setShowPostEditor(false);
    };

    const handleInvite = () => {
        // Handle invite logic
        setShowInviteDialog(false);
        setInviteEmail("");
    };

    return (
        <PanelContent headerContent title={channel ? channel.name : "Channels"}>
            {channel ? (
                <Box>
                    {!showPostEditor && (
                        <Box sx={{ mb: 2 }}>
                            <Button
                                variant="contained"
                                onClick={() => setShowPostEditor(true)}
                                sx={{ mr: 1 }}
                            >
                                Start New Post
                            </Button>
                            <Button
                                variant="outlined"
                                onClick={() => setShowInviteDialog(true)}
                            >
                                Invite People
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
                        <Post key={index} post={post} />
                    ))}

                    <Dialog
                        open={showInviteDialog}
                        onClose={() => setShowInviteDialog(false)}
                    >
                        <Box sx={{ p: 2 }}>
                            <Typography variant="h6">Invite People</Typography>
                            <TextField
                                fullWidth
                                label="Email"
                                value={inviteEmail}
                                onChange={(e) => setInviteEmail(e.target.value)}
                                sx={{ my: 2 }}
                            />
                            <Button variant="contained" onClick={handleInvite}>
                                Send Invite
                            </Button>
                        </Box>
                    </Dialog>
                </Box>
            ) : (
                <Box>Create new Channel</Box>
            )}
        </PanelContent>
    );
};

export default Channels;
