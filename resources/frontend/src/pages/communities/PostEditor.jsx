import { useState } from "react";
import {
    Box,
    TextField,
    Button,
    Checkbox,
    FormControlLabel,
} from "@mui/material";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

export default function PostEditor({ onPost, onClose, initPost }) {
    const [title, setTitle] = useState(initPost ? initPost.title : "");
    const [subject, setSubject] = useState(initPost ? initPost.subject : "");
    const [content, setContent] = useState(initPost ? initPost.content : "");
    const [notifyEmail, setNotifyEmail] = useState(
        initPost && initPost.notifyEmail == 1 ? true : false
    );

    const handlePost = (e) => {
        e.preventDefault();
        onPost(
            {
                title,
                subject,
                content,
                notifyEmail,
            },
            initPost && initPost.id
        );
    };

    return (
        <Box sx={{ p: 4, maxWidth: 600, mx: "auto" }}>
            <form onSubmit={handlePost}>
                <TextField
                    fullWidth
                    // label="Title"
                    label="タイトル"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                    sx={{ mb: 2 }}
                />
                <TextField
                    fullWidth
                    // label="Subject"
                    label="件名"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    sx={{ mb: 2 }}
                />
                <ReactQuill
                    value={content}
                    onChange={(e) => {
                        setContent(e);
                    }}
                    style={{ height: "200px", marginBottom: "50px" }}
                />
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={notifyEmail}
                            onChange={(e) => setNotifyEmail(e.target.checked)}
                        />
                    }
                    // label="Also notify via email"
                    label="メールでも通知"
                />
                <Box sx={{ mt: 2 }}>
                    <Button variant="contained" type="submit" sx={{ mr: 1 }}>
                        {/* Post */}投稿
                    </Button>
                    <Button variant="outlined" onClick={onClose}>
                        {/* Close */}閉じる
                    </Button>
                </Box>
            </form>
        </Box>
    );
}
