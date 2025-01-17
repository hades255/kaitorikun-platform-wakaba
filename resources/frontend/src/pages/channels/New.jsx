import { useState } from "react";
import { withRouter } from "react-router-dom";
import {
    Box,
    TextField,
    Switch,
    FormControlLabel,
    Button,
    Typography,
    Paper,
} from "@mui/material";
import api from "../../api";
import { actionChannel } from "../../reduxStore";
import { PanelContent, useDispatch } from "../../components";

const CreateChannel = (props) => {
    const dispatch = useDispatch();
    const [channelData, setChannelData] = useState({
        name: "",
        description: "",
        icon: "",
        requireApproval: false,
        isPublic: true,
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        const saveChannel = async () => {
            try {
                const response = await api.post("channels", channelData);
                dispatch(actionChannel.handleAddChannel(response.data.channel));
                setTimeout(() => {
                    dispatch(
                        actionChannel.handleSelectChannel({
                            channel: response.data.channel,
                            posts: [],
                            users: [response.data.user],
                        })
                    );
                    props.history.push("/channels");
                }, 300);
            } catch (error) {
                console.log(error);
            }
        };
        saveChannel();
    };

    return (
        <PanelContent headerContent title="新しいチャンネルを作成">
            <Paper sx={{ p: 4, maxWidth: 600, mx: "auto" }}>
                <Typography variant="h5" sx={{ mb: 3 }}>
                    {/* Create New Channel */}新しいチャンネルを作成
                </Typography>

                <form onSubmit={handleSubmit}>
                    <TextField
                        fullWidth
                        label="チャンネル名"
                        // label="Channel Name"
                        value={channelData.name}
                        onChange={(e) =>
                            setChannelData({
                                ...channelData,
                                name: e.target.value,
                            })
                        }
                        required
                        sx={{ mb: 2 }}
                    />
                    <TextField
                        fullWidth
                        // label="Channel Icon URL"
                        label="チャンネルアイコン URL"
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
                        label="説明"
                        // label="Description"
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
                        label="参加するには承認が必要"
                        // label="Require approval to join"
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
                        label="公開チャンネル"
                        // label="Public channel"
                        sx={{ mb: 2 }}
                    />
                    <Box sx={{ display: "flex", gap: 2 }}>
                        <Button variant="contained" type="submit">
                            {/* Create Channel */}チャンネルを作成
                        </Button>
                        <Button variant="outlined" onClick={() => {}}>
                            {/* Cancel */}キャンセル
                        </Button>
                    </Box>
                </form>
            </Paper>
        </PanelContent>
    );
};

export default withRouter(CreateChannel);
