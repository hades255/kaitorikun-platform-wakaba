import { useMemo, useState } from "react";
import { Box, TextField, Button, Typography, Paper } from "@mui/material";
import api from "../../api";
import { useCommunity } from "../../contexts/CommunityContext";
import { actionChannel, selectorChannel } from "../../reduxStore";
import { ToastNotification, useDispatch, useSelector } from "..";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
    formContainer: {
        display: "flex",
        flexDirection: "column",
    },
    formGroup: {
        display: "flex",
        alignItems: "center",
        gap: "16px",
        marginBottom: "16px",
    },
    label: {
        color: "#1f2937",
        minWidth: "96px",
    },
    select: {
        minWidth: "96px",
        borderRadius: "4px",
        padding: "4px",
        color: "#1f2937",
    },
    buttonContainer: {
        display: "flex",
        gap: "8px",
    },
}));

const CreateChannel = () => {
    const classes = useStyles();
    const { preSetCommunityId, setShowChannelEditor, preSetCommunityName } =
        useCommunity();
    const dispatch = useDispatch();
    const _coms = useSelector(selectorChannel.handleGetCommunities);
    const _pcoms = useSelector(selectorChannel.handleGetPublicCommunities);

    const coms = useMemo(() => {
        let res = {};
        _coms?.forEach((item) => {
            if (!res[item.id]) res[item.id] = item.name;
        });
        _pcoms?.forEach((item) => {
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
                dispatch(
                    actionChannel.handleSetMyCommunity(comData.community_id)
                );
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
                チャネルの作成
            </Typography>

            <form onSubmit={handleSubmit} className={classes.formContainer}>
                <div className={classes.formGroup}>
                    <span className={classes.label}>
                        チャネルをチームに追加する*
                    </span>
                    <select
                        value={comData.community_id}
                        onChange={(e) =>
                            setComData({
                                ...comData,
                                community_id: e.target.value,
                            })
                        }
                        disabled={preSetCommunityId > 0}
                        className={classes.select}
                    >
                        {coms?.map((item) => (
                            <option key={item.id} value={item.id}>
                                {item.name}
                            </option>
                        ))}
                    </select>
                </div>
                <TextField
                    fullWidth
                    label="チャネル名"
                    placeholder="文字、数字、スペースを使用できます"
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
                    placeholder="他のユーザーが、適切なチャネルを見つけられるように説明を入力します"
                    value={comData.description}
                    onChange={(e) =>
                        setComData({
                            ...comData,
                            description: e.target.value,
                        })
                    }
                    sx={{ mb: 2 }}
                />
                <Box display="flex" justifyContent={"end"} sx={{ gap: 2 }}>
                    <Button
                        variant="outlined"
                        onClick={() => setShowChannelEditor(false)}
                    >
                        キャンセル
                    </Button>
                    <Button variant="contained" type="submit">
                        作成
                    </Button>
                </Box>
            </form>
        </Paper>
    );
};

export default CreateChannel;
