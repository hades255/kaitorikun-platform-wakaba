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
import api from "../../api";
import { useCommunity } from "../../contexts/CommunityContext";
import { actionChannel } from "../../reduxStore";
import { ToastNotification, useDispatch } from "..";

const CreateCommunity = () => {
    const dispatch = useDispatch();

    const { preSetCommunityName, setShowCommunityEditor } = useCommunity();

    const [comData, setComData] = useState({
        name: preSetCommunityName,
        description: "",
        icon: "",
        requireApproval: false,
        isPublic: true,
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        const saveChannel = async () => {
            try {
                const response = await api.post("communities", comData);
                ToastNotification(
                    "success",
                    "コミュニティが正常に作成されました"
                );
                dispatch(
                    actionChannel.handleAddCommunity({
                        ...response.data.community,
                        channels: [response.data.channel],
                    })
                );
                setShowCommunityEditor(false);
                // setTimeout(() => {
                //     dispatch(
                //         actionChannel.handleSelectChannel({
                //             channel: response.data.channel,
                //             posts: [],
                //             users: [response.data.user],
                //         })
                //     );
                // }, 300);
            } catch (error) {
                console.log(error);
                ToastNotification(
                    "warning",
                    error.response?.status == 401
                        ? "まずはログインしてください"
                        : "サーバーエラー"
                );
            }
        };
        saveChannel();
    };

    return (
        <Paper sx={{ p: 4, maxWidth: 600, mx: "auto" }}>
            <Typography variant="h5" sx={{ mb: 3 }}>
                {/* Create New community */}新しいコミュニティを作る
            </Typography>

            <form onSubmit={handleSubmit}>
                <TextField
                    fullWidth
                    label="コミュニティ名"
                    // label="community Name"
                    value={comData.name}
                    onChange={(e) =>
                        setComData({
                            ...comData,
                            name: e.target.value,
                        })
                    }
                    required
                    sx={{ mb: 2 }}
                />
                <TextField
                    fullWidth
                    // label="community Icon URL"
                    label="コミュニティアイコン URL"
                    value={comData.icon}
                    onChange={(e) =>
                        setComData({
                            ...comData,
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
                    value={comData.description}
                    onChange={(e) =>
                        setComData({
                            ...comData,
                            description: e.target.value,
                        })
                    }
                    sx={{ mb: 2 }}
                />
                <FormControlLabel
                    control={
                        <Switch
                            checked={comData.requireApproval}
                            onChange={(e) =>
                                setComData({
                                    ...comData,
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
                            checked={comData.isPublic}
                            onChange={(e) =>
                                setComData({
                                    ...comData,
                                    isPublic: e.target.checked,
                                })
                            }
                        />
                    }
                    label="公開コミュニティ"
                    // label="Public community"
                    sx={{ mb: 2 }}
                />
                <Box display="flex" sx={{ gap: 2 }}>
                    <Button variant="contained" type="submit">
                        {/* Create community */}コミュニティを作成
                    </Button>
                    <Button
                        variant="outlined"
                        onClick={() => setShowCommunityEditor(false)}
                    >
                        {/* Cancel */}キャンセル
                    </Button>
                </Box>
            </form>
        </Paper>
    );
};

export default CreateCommunity;
