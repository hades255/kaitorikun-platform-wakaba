import { useMemo, useState } from "react";
import { Box, TextField, Button, Typography, Paper } from "@mui/material";
import api from "../../api";
import { useCommunity } from "../../contexts/CommunityContext";
import { actionChannel, selectorChannel } from "../../reduxStore";
import { ToastNotification, useDispatch, useSelector } from "..";

const CreateChannel = () => {
    const { preSetCommunityId, setShowChannelEditor, preSetCommunityName } =
        useCommunity();
    const dispatch = useDispatch();
    const _coms = useSelector(selectorChannel.handleGetCommunities);
    const _pcoms = useSelector(selectorChannel.handleGetPublicCommunities);

    const coms = useMemo(() => {
        let res = {};
        _coms.forEach((item) => {
            if (!res[item.id]) res[item.id] = item.name;
        });
        _pcoms.forEach((item) => {
            if (!res[item.id]) res[item.id] = item.name;
        });
        let _res = [];
        for (let item in res) {
            _res.push({ id: item, name: res[item] });
        }
        return _res;
    }, [_coms, _pcoms]);

    const [comData, setComData] = useState({
        name: preSetCommunityName,
        description: "",
        community_id: preSetCommunityId || 1,
        icon: "",
        requireApproval: false,
        isPublic: true,
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        const saveChannel = async () => {
            try {
                const response = await api.post("channels", comData);
                ToastNotification(
                    "success",
                    "チャンネルが正常に作成されました"
                );
                dispatch(actionChannel.handleAddChannel(response.data.channel));
                setShowChannelEditor(false);
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
                新しいチャンネルを作成する
            </Typography>

            <form onSubmit={handleSubmit}>
                <div className="flex items-center gap-4 mb-2">
                    <span className="text-gray-800 w-24">コミュニティ</span>
                    <select
                        className="min-w-24 rounded border p-2 text-gray-800"
                        value={comData.community_id}
                        onChange={(e) =>
                            setComData({
                                ...comData,
                                community_id: e.target.value,
                            })
                        }
                        disabled={preSetCommunityId > 0}
                    >
                        {coms.map((item) => (
                            <option key={item.id} value={item.id}>
                                {item.name}
                            </option>
                        ))}
                    </select>
                </div>
                <TextField
                    fullWidth
                    label="チャンネル名"
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
                <Box display="flex" sx={{ gap: 2 }}>
                    <Button variant="contained" type="submit">
                        {/* Create community */}チャンネルを作成
                    </Button>
                    <Button
                        variant="outlined"
                        onClick={() => setShowChannelEditor(false)}
                    >
                        {/* Cancel */}キャンセル
                    </Button>
                </Box>
            </form>
        </Paper>
    );
};

export default CreateChannel;
