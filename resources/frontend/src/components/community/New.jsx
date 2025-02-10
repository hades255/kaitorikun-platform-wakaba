import { useCallback, useState } from "react";
import {
    Box,
    TextField,
    Switch,
    FormControlLabel,
    Button,
    Typography,
    DialogTitle,
    DialogContent,
} from "@mui/material";
import api from "../../api";
import { useCommunity } from "../../contexts/CommunityContext";
import { actionChannel } from "../../reduxStore";
import { ToastNotification, useDispatch } from "..";
import CommunityGuideline from "./CommunityGuideline";
import CommunityIconUrl from "./CommunityIconUrl";

const CreateCommunity = ({ page = true }) => {
    const dispatch = useDispatch();

    const { preSetCommunityName, setShowCommunityEditor } = useCommunity();

    const [comData, setComData] = useState({
        name: preSetCommunityName,
        description: "",
        icon: "",
        guideline:
            "コミュニティのメンバーに対して親切で敬意を持って接してください。失礼な態度や残酷な態度はとらないでください。自分らしく参加し、違反する投稿はしないでください",
        requireApproval: false,
        isPublic: true,
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        const saveChannel = async () => {
            try {
                const response = await api.post("communities", {
                    ...comData,
                    type: page ? false : true,
                });
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

    const handleClose = useCallback(
        () => setShowCommunityEditor(false),
        [setShowCommunityEditor]
    );

    return (
        <>
            <DialogTitle fontWeight={700}>コミュニティの作成</DialogTitle>
            <DialogContent>
                <form onSubmit={handleSubmit}>
                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: 2,
                            mb: 2,
                        }}
                    >
                        <CommunityIconUrl
                            comData={comData}
                            setComData={setComData}
                        />
                        <TextField
                            fullWidth
                            variant="standard"
                            label="コミュニティ名"
                            value={comData.name}
                            onChange={(e) =>
                                setComData({
                                    ...comData,
                                    name: e.target.value,
                                })
                            }
                            placeholder="コミュニティに名前を付けます"
                            required
                        />
                    </Box>
                    <TextField
                        fullWidth
                        multiline
                        rows={4}
                        variant="filled"
                        label="説明 (任意)"
                        value={comData.description}
                        onChange={(e) =>
                            setComData({
                                ...comData,
                                description: e.target.value,
                            })
                        }
                        placeholder="コミュニティに関する簡単な説明を記述して、ユーザーがコミュニティの内容を知るようにします。"
                        sx={{ mb: 2 }}
                    />
                    <CommunityGuideline
                        comData={comData}
                        setComData={setComData}
                    />
                    {/* <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: 2,
                            mb: 2,
                        }}
                    >
                        <Box sx={{ width: "100%" }}>
                            <Typography variant="subtitle1" fontWeight={600}>
                                参加するには承認が必要です
                            </Typography>
                            <Typography variant="subtitle2">
                                コミュニティのオーナーは、参加する前に新しいメンバーを承認する必要があります。
                            </Typography>
                        </Box>
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
                            sx={{ mb: 1 }}
                        />
                    </Box>
                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: 2,
                            mb: 2,
                        }}
                    >
                        <Box sx={{ width: "100%" }}>
                            <Typography variant="subtitle1" fontWeight={600}>
                                公開
                            </Typography>
                            <Typography variant="subtitle2">
                                オンにすると、このコミュニティが検索に表示され、おすすめに表示される場合があります。
                                <span>詳細</span>
                            </Typography>
                        </Box>
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
                            sx={{ mb: 2 }}
                        />
                    </Box> */}
                    <Box display="flex" justifyContent="end" sx={{ gap: 2 }}>
                        <Button variant="outlined" onClick={handleClose}>
                            キャンセル
                        </Button>
                        <Button variant="contained" type="submit">
                            コミュニティを作成
                        </Button>
                    </Box>
                </form>
            </DialogContent>
        </>
    );
};

export default CreateCommunity;
