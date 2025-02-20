import { useCallback, useMemo, useState } from "react";
import {
    Box,
    TextField,
    Button,
    Typography,
    Paper,
    Avatar,
    IconButton,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import api from "../../api";
import { useAuth } from "../../contexts/AuthContext";
import { useCommunity } from "../../contexts/CommunityContext";
import { actionChannel, selectorChannel } from "../../reduxStore";
import { ToastNotification, useDispatch, useSelector } from "..";
import { CloseOutlined } from "@mui/icons-material";

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

export const preChannelItems = [
    { title: "一日の報告", color: "lightgray", icon: "far fa-circle nav-icon" },
    { title: "決裁", color: "lightgray", icon: "far fa-circle nav-icon" },
    { title: "入出金", color: "lightgray", icon: "far fa-circle nav-icon" },
    { title: "業者卸報告", color: "lightgray", icon: "far fa-circle nav-icon" },
    { title: "出張買取", color: "lightgray", icon: "far fa-circle nav-icon" },
    { title: "廃棄処分", color: "lightgray", icon: "far fa-circle nav-icon" },
    { title: "発注依頼", color: "lightgray", icon: "far fa-circle nav-icon" },
    { title: "立替金", color: "lightgray", icon: "far fa-circle nav-icon" },
    { title: "業者来訪", color: "lightgray", icon: "far fa-circle nav-icon" },
];

const CreateChannel = ({ page }) => {
    const { auth } = useAuth();
    const classes = useStyles();
    const { preSetCommunityId, setShowChannelEditor } = useCommunity();
    const dispatch = useDispatch();
    const coms = useSelector(selectorChannel.handleGetCommunities);
    const [hidePre, sethidePre] = useState(page);
    const [editName, setEditName] = useState(true);

    const [comData, setComData] = useState({
        name: "",
        description: "",
        community_id: preSetCommunityId || undefined,
        icon: "",
        requireApproval: false,
        isPublic: true,
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        const saveChannel = async () => {
            try {
                const response = await api.post("channels", {
                    ...comData,
                    type: editName,
                });
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

    const handleClickShowPre = useCallback(() => sethidePre(false), []);
    const handleClose = useCallback(
        () => setShowChannelEditor(false),
        [setShowChannelEditor]
    );
    const handleClickPreItem = useCallback(
        (param) => {
            setComData({ ...comData, name: param });
            sethidePre(true);
            if (param) setEditName(false);
            else setEditName(true);
        },
        [comData]
    );

    return (
        <Paper sx={{ p: 4, maxWidth: "100%", position: "relative" }}>
            <IconButton
                onClick={handleClose}
                sx={{
                    position: "absolute",
                    top: 16,
                    right: 16,
                }}
            >
                <CloseOutlined />
            </IconButton>
            <Typography variant="h5" sx={{ mb: 3 }}>
                チャネルの作成
            </Typography>

            {!hidePre && (
                <Box
                    sx={{ maxHeight: 400, overflowY: "scroll" }}
                    className="non-scrollbar"
                >
                    <Box display={"flex"} flexWrap={"wrap"}>
                        <PreChannelItem
                            title={"自分で作る"}
                            color={"lightgray"}
                            icon={"far fa-plus nav-icon"}
                            value={""}
                            onClick={handleClickPreItem}
                        />
                    </Box>
                    <Typography my={1}>テンプレートから始める</Typography>
                    <Box display={"flex"} flexWrap={"wrap"}>
                        {preChannelItems.map((item, index) => (
                            <PreChannelItem
                                key={index}
                                {...item}
                                value={item.title}
                                onClick={handleClickPreItem}
                            />
                        ))}
                    </Box>
                </Box>
            )}

            {hidePre && (
                <form onSubmit={handleSubmit} className={classes.formContainer}>
                    <div className={classes.formGroup}>
                        {!page && (
                            <Button onClick={handleClickShowPre}>戻る</Button>
                        )}
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
                            required
                        >
                            {coms &&
                                Array.isArray(coms) &&
                                auth &&
                                coms
                                    .filter((item) => item.user_id == auth.id)
                                    .map((item) => (
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
                        disabled={!editName}
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
            )}
        </Paper>
    );
};

export default CreateChannel;

const PreChannelItem = ({ title, icon, color, value, onClick }) => {
    const { preSetCommunityId } = useCommunity();
    const coms = useSelector(selectorChannel.handleGetCommunities);

    const disabled = useMemo(() => {
        const com = coms.find(({ id }) => id == preSetCommunityId);
        return com && com.channels
            ? com.channels.map(({ name }) => name).includes(title)
            : false;
    }, [coms, preSetCommunityId, title]);

    const handleClick = useCallback(() => {
        if (!disabled) onClick(value);
    }, [onClick, disabled, value]);

    return (
        <Box pr={2} py={1} width={"50%"}>
            <Box
                onClick={handleClick}
                display={"flex"}
                alignItems={"center"}
                gap={1}
                p={2}
                borderRadius={2}
                border={disabled ? "none" : "1px solid lightgrey"}
                boxShadow={disabled ? "none" : "2px 3px 4px #0004"}
                sx={{ cursor: disabled ? "default" : "pointer" }}
                bgcolor={disabled ? "#0001" : "white"}
            >
                <Avatar
                    sx={{ bgcolor: color, width: 48, height: 48 }}
                    variant="rounded"
                >
                    <i className={icon}></i>
                </Avatar>
                <Box>{title}</Box>
            </Box>
        </Box>
    );
};
