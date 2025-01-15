import React, { useState } from "react";
import {
    Box,
    Button,
    Card,
    CardContent,
    Typography,
    Dialog,
    TextField,
} from "@mui/material";
import { PanelContent } from "../../components";
import PostEditor from "./PostEditor";

const Channels = () => {
    const [posts, setPosts] = useState([]);
    const [showPostEditor, setShowPostEditor] = useState(false);
    const [showInviteDialog, setShowInviteDialog] = useState(false);
    const [inviteEmail, setInviteEmail] = useState("");

    const channels = [];
    const handleCreatePost = (post) => {
        socket.emit("new-post", post);
        setPosts([...posts, post]);
        setShowPostEditor(false);
    };

    const handleInvite = () => {
        // Handle invite logic
        setShowInviteDialog(false);
        setInviteEmail("");
    };

    return (
        <PanelContent headerContent title="Channels">
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
                    <Post key={index} post={post} socket={socket} />
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
        </PanelContent>
    );
};

export default Channels;
