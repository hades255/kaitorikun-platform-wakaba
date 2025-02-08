import { useCallback, useRef, useState } from "react";
import {
    Box,
    TextField,
    Button,
    Checkbox,
    FormControlLabel,
    IconButton,
    Typography,
    ButtonGroup,
} from "@mui/material";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import EditIcon from "@mui/icons-material/Edit";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import axios from "axios";
import { API_ROUTE } from "../../config";

export default function PostEditor({ onPost, onClose, initPost }) {
    const fileInput = useRef(null);
    const [sending, setSending] = useState(false);
    const [title, setTitle] = useState(initPost ? initPost.title : "");
    const [subject, setSubject] = useState(initPost ? initPost.subject : "");
    const [content, setContent] = useState(initPost ? initPost.content : "");
    const [attachment, setAttachment] = useState(
        initPost && initPost.attachment ? JSON.parse(initPost.attachment) : null
    );
    const [notifyEmail, setNotifyEmail] = useState(
        initPost && initPost.notifyEmail == 1 ? true : false
    );

    const handleFileSelect = useCallback(
        (event) => {
            const files = Array.from(event.target.files);
            if (files.length == 0) return;
            setSending(true);
            const formData = new FormData();
            files.forEach((file) => {
                formData.append("files[]", file);
            });
            const sendFilesFunc = async () => {
                try {
                    const response = await axios.post(
                        `${API_ROUTE}upload`,
                        formData,
                        {
                            headers: {
                                "Content-Type": "multipart/form-data",
                            },
                        }
                    );
                    const uploadedFiles = response.data.files;
                    if (uploadedFiles && uploadedFiles.length == 1) {
                        setAttachment(uploadedFiles[0]);
                    }
                } catch (error) {
                    console.log(error);
                } finally {
                    setSending(false);
                }
            };
            sendFilesFunc();
        },
        [setSending]
    );

    const handleClickFileInput = useCallback(() => {
        if (fileInput && fileInput.current) {
            fileInput.current.click();
        }
    }, []);

    const handlePost = (e) => {
        e.preventDefault();
        onPost(
            {
                title,
                subject,
                content,
                notifyEmail,
                attachment: attachment ? JSON.stringify(attachment) : null,
            },
            initPost && initPost.id
        );
    };

    const handleRemoveFile = useCallback(() => {
        setAttachment(null);
    }, []);

    return (
        <Box sx={{ p: 4, maxWidth: 600, mx: "auto" }}>
            <form onSubmit={handlePost}>
                <TextField
                    fullWidth
                    label="タイトル"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                    sx={{ mb: 2 }}
                />
                <TextField
                    fullWidth
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
                <Box display={"flex"} alignItems={"baseline"} gap={2}>
                    <IconButton onClick={handleClickFileInput}>
                        <AttachFileIcon />
                        <input
                            type="file"
                            style={{ display: "none" }}
                            accept="image/*,video/*"
                            ref={fileInput}
                            disabled={sending}
                            onChange={handleFileSelect}
                        />
                    </IconButton>
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={notifyEmail}
                                onChange={(e) =>
                                    setNotifyEmail(e.target.checked)
                                }
                            />
                        }
                        // label="Also notify via email"
                        label="メールでも通知"
                    />
                </Box>
                {attachment && (
                    <Box
                        display={"flex"}
                        justifyContent={"space-between"}
                        alignItems={"center"}
                        bgcolor={"#f8bbd0"}
                        borderRadius={1}
                        gap={2}
                        px={2}
                        py={1}
                    >
                        <Typography variant="body1" color="#4a148c">
                            {attachment.content}
                        </Typography>
                        <ButtonGroup variant="text">
                            <IconButton onClick={handleClickFileInput}>
                                <EditIcon />
                            </IconButton>
                            <IconButton onClick={handleRemoveFile}>
                                <DeleteOutlineIcon />
                            </IconButton>
                        </ButtonGroup>
                    </Box>
                )}
                <Box sx={{ mt: 2 }}>
                    <Button variant="contained" type="submit" sx={{ mr: 1 }}>
                        投稿
                    </Button>
                    <Button variant="outlined" onClick={onClose}>
                        閉じる
                    </Button>
                </Box>
            </form>
        </Box>
    );
}
