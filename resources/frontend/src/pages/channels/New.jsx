import { useState } from "react";
import {
    Box,
    TextField,
    Switch,
    FormControlLabel,
    Button,
    Typography,
    Paper,
} from "@mui/material";
import { PanelContent } from "../../components";

const CreateChannel = () => {
    const [channelData, setChannelData] = useState({
        name: "",
        description: "",
        icon: "",
        requireApproval: false,
        isPublic: true,
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle channel creation logic here
        // navigate("/");
    };

    return (
        <PanelContent headerContent title="Create new Channel">
            <Paper sx={{ p: 4, maxWidth: 600, mx: "auto" }}>
                <Typography variant="h5" sx={{ mb: 3 }}>
                    Create New Channel
                </Typography>

                <form onSubmit={handleSubmit}>
                    <TextField
                        fullWidth
                        label="Channel Name"
                        value={channelData.name}
                        onChange={(e) =>
                            setChannelData({
                                ...channelData,
                                name: e.target.value,
                            })
                        }
                        sx={{ mb: 2 }}
                    />

                    <TextField
                        fullWidth
                        label="Channel Icon URL"
                        value={channelData.icon}
                        onChange={(e) =>
                            setChannelData({
                                ...channelData,
                                icon: e.target.value,
                            })
                        }
                        sx={{ mb: 2 }}
                    />

                    <TextField
                        fullWidth
                        multiline
                        rows={4}
                        label="Description"
                        value={channelData.description}
                        onChange={(e) =>
                            setChannelData({
                                ...channelData,
                                description: e.target.value,
                            })
                        }
                        sx={{ mb: 2 }}
                    />

                    <FormControlLabel
                        control={
                            <Switch
                                checked={channelData.requireApproval}
                                onChange={(e) =>
                                    setChannelData({
                                        ...channelData,
                                        requireApproval: e.target.checked,
                                    })
                                }
                            />
                        }
                        label="Require approval to join"
                        sx={{ mb: 1 }}
                    />

                    <FormControlLabel
                        control={
                            <Switch
                                checked={channelData.isPublic}
                                onChange={(e) =>
                                    setChannelData({
                                        ...channelData,
                                        isPublic: e.target.checked,
                                    })
                                }
                            />
                        }
                        label="Public channel"
                        sx={{ mb: 2 }}
                    />

                    <Box sx={{ display: "flex", gap: 2 }}>
                        <Button variant="contained" type="submit">
                            Create Channel
                        </Button>
                        <Button variant="outlined" onClick={() => {}}>
                            Cancel
                        </Button>
                    </Box>
                </form>
            </Paper>
        </PanelContent>
    );
};

export default CreateChannel;
