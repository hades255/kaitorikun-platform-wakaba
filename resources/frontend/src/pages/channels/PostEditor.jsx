import { useState } from "react";
import {
    Box,
    TextField,
    Button,
    Checkbox,
    FormControlLabel,
    TextareaAutosize,
} from "@mui/material";
// import ReactQuill from "react-quill";
// import "react-quill/dist/quill.snow.css";

export default function PostEditor({ onPost, onClose }) {
    const [title, setTitle] = useState("");
    const [subject, setSubject] = useState("");
    const [content, setContent] = useState("");
    const [notifyEmail, setNotifyEmail] = useState(false);

    const handlePost = () => {
        onPost({
            title,
            subject,
            content,
            notifyEmail,
            timestamp: new Date(),
            reactions: [],
            replies: [],
        });
    };

    return (
        <Box sx={{ mb: 2, p: 4, maxWidth: 600, mx: "auto" }}>
            <TextField
                fullWidth
                label="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                sx={{ mb: 2 }}
            />
            <TextField
                fullWidth
                label="Subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                sx={{ mb: 2 }}
            />
            <TextareaAutosize
                label="Subject"
                value={content}
                onChange={setContent}
                style={{ width: "100%", height: "200px", marginBottom: "50px" }}
                sx={{ mb: 2 }}
            />
            {/* <ReactQuill
                value={content}
                onChange={setContent}
                style={{ height: "200px", marginBottom: "50px" }}
            /> */}
            <FormControlLabel
                control={
                    <Checkbox
                        checked={notifyEmail}
                        onChange={(e) => setNotifyEmail(e.target.checked)}
                    />
                }
                label="Also notify via email"
            />
            <Box sx={{ mt: 2 }}>
                <Button variant="contained" onClick={handlePost} sx={{ mr: 1 }}>
                    Post
                </Button>
                <Button variant="outlined" onClick={onClose}>
                    Close
                </Button>
            </Box>
        </Box>
    );
}
