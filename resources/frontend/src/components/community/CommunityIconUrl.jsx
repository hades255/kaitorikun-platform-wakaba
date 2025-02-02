import React from "react";
import { Box, IconButton } from "@mui/material";
import AddBoxIcon from "@mui/icons-material/AddBox";
import EditIcon from "@mui/icons-material/Edit";

const CommunityIconUrl = ({ comData, setComData }) => {
    const handleIconClick = () => {
        const fileInput = document.createElement("input");
        fileInput.type = "file";
        fileInput.accept = "image/*";
        fileInput.onchange = (e) => {   //  todo    fix
            const file = e.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = (event) => {
                    setComData({ ...comData, icon: event.target.result });
                };
                reader.readAsDataURL(file);
            }
        };
        fileInput.click();
    };

    return (
        <Box
            width={80}
            minWidth={80}
            maxWidth={80}
            height={80}
            display="flex"
            alignItems="center"
            justifyContent="center"
            border="1px solid #ccc"
            borderRadius="4px"
            overflow="hidden"
            position="relative"
        >
            {comData.icon ? (
                <>
                    <img
                        src={comData.icon}
                        alt="Community Icon"
                        style={{ width: "100%", height: "100%" }}
                    />
                    <IconButton
                        onClick={handleIconClick}
                        sx={{
                            position: "absolute",
                            bottom: 0,
                            right: 0,
                            backgroundColor: "rgba(255, 255, 255, 0.7)",
                        }}
                    >
                        <EditIcon />
                    </IconButton>
                </>
            ) : (
                <IconButton onClick={handleIconClick}>
                    <AddBoxIcon fontSize="large" />
                </IconButton>
            )}
        </Box>
    );
};

export default CommunityIconUrl;
