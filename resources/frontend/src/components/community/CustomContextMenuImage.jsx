import React, { useState } from "react";
import { Box, Paper } from "@mui/material";
import { PUBLIC_HOST } from "../../config";
// import { CopyToClipboard } from "react-copy-to-clipboard";

const CustomContextMenu = ({ data, children }) => {
    const imageUrl = `${PUBLIC_HOST}/storage/${data.other.path}`;

    const [contextMenu, setContextMenu] = useState(null);
    const [urlCopied, setUrlCopied] = useState(false);

    const handleContextMenu = (event) => {
        event.preventDefault();
        setContextMenu({
            mouseX: event.clientX - 2,
            mouseY: event.clientY - 4,
        });
    };

    const handleClose = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setContextMenu(null);
    };

    const handleOpenInNewWindow = (e) => {
        window.open(imageUrl, "_blank");
        handleClose(e);
    };

    const handleCopyImage = (e) => {
        // Custom logic to copy the image to the clipboard
        // Note: This requires additional setup, e.g., using the clipboard API
        alert("画像がコピーされました"); // "Image copied" message
        handleClose(e);
    };

    const handleDownload = (e) => {
        const link = document.createElement("a");
        link.href = imageUrl;
        link.download = "image.jpg";
        link.click();
        handleClose(e);
    };

    return (
        <Box onContextMenu={handleContextMenu} sx={{ cursor: "context-menu" }}>
            {children}
            {contextMenu && (
                <Paper
                    sx={{
                        position: "absolute",
                        top: contextMenu.mouseY,
                        left: contextMenu.mouseX,
                        backgroundColor: "white",
                        boxShadow: "0 2px 10px rgba(0,0,0,0.2)",
                        zIndex: 1000,
                        p: 1,
                    }}
                    onClick={handleClose}
                >
                    <Box
                        sx={{
                            p: 1,
                            cursor: "pointer",
                            "&:hover": { bgcolor: "lightgray" },
                        }}
                        onClick={handleOpenInNewWindow}
                    >
                        新しいウィンドウで開く
                    </Box>
                    {/* <Box onClick={handleCopyImage}>画像をコピー</Box> */}
                    <Box
                        sx={{
                            p: 1,
                            cursor: "pointer",
                            "&:hover": { bgcolor: "lightgray" },
                        }}
                        onClick={handleDownload}
                    >
                        ダウンロード
                    </Box>
                    {/* <CopyToClipboard
                        text={imageUrl}
                        onCopy={() => setUrlCopied(true)}
                    >
                        <Box>URLをコピー</Box>
                    </CopyToClipboard> */}
                </Paper>
            )}

            {urlCopied && <Box>URLがコピーされました</Box>}
        </Box>
    );
};

export default CustomContextMenu;
