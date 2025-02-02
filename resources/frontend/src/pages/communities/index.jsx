import React, { useCallback, useEffect, useState } from "react";
import { Box, Button, Dialog, TextField, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import SchoolIcon from "@mui/icons-material/School";
import BusinessIcon from "@mui/icons-material/Business";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import NightlifeIcon from "@mui/icons-material/Nightlife";
import PaletteIcon from "@mui/icons-material/Palette";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import GrassIcon from "@mui/icons-material/Grass";
import HouseIcon from "@mui/icons-material/House";
import FamilyRestroomIcon from "@mui/icons-material/FamilyRestroom";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";
import api from "../../api";
import { actionChannel, selectorChannel } from "../../reduxStore";
import { useAuth } from "../../contexts/AuthContext";
import { useCommunity } from "../../contexts/CommunityContext";
import {
    PanelContent,
    ToastNotification,
    useDispatch,
    useSelector,
} from "../../components";
import CreateCommunity from "../../components/community/New";
import CreateChannel from "../../components/community/NewChannel";
import Post from "./Post";
import PostEditor from "./PostEditor";

const preNamedCommunities = [
    { title: "自分で作成", value: "", icon: null },
    { title: "学校", value: "学校", icon: <SchoolIcon /> },
    { title: "ビジネス", value: "ビジネス", icon: <BusinessIcon /> },
    { title: "スポーツ", value: "スポーツ", icon: <EmojiEventsIcon /> },
    { title: "専門職", value: "専門職", icon: <BusinessCenterIcon /> },
    {
        title: "ライフイベント",
        value: "ライフイベント",
        icon: <NightlifeIcon />,
    },
    { title: "芸術と文化", value: "芸術と文化", icon: <PaletteIcon /> },
    { title: "ゲーム", value: "ゲーム", icon: <SportsEsportsIcon /> },
    { title: "青少年団体", value: "青少年団体", icon: <GrassIcon /> },
    { title: "近所", value: "近所", icon: <HouseIcon /> },
    { title: "親", value: "親", icon: <FamilyRestroomIcon /> },
    {
        title: "ボランティア",
        value: "ボランティア",
        icon: <VolunteerActivismIcon />,
    },
];
// const preNamedCommunities = [
//     { title: "Create my own", value: "" },
//     { title: "School", value: "School" },
//     { title: "Business", value: "Business" },
//     { title: "Sports", value: "Sports" },
//     { title: "Professional", value: "Professional" },
//     { title: "Life events", value: "Life events" },
//     { title: "Arts and culture", value: "Arts and culture" },
//     { title: "Gaming", value: "Gaming" },
//     { title: "Youth organization", value: "Youth organization" },
//     { title: "Neighbourhood", value: "Neighbourhood" },
//     { title: "Parent", value: "Parent" },
//     { title: "Volunteering", value: "Volunteering" },
// ];

const Communities = () => {
    const dispatch = useDispatch();
    const channel = useSelector(selectorChannel.handleGetChannel);
    const communities = useSelector(selectorChannel.handleGetCommunities);
    const posts = useSelector(selectorChannel.handleGetPosts);
    const users = useSelector(selectorChannel.handleGetUsers);

    const { auth } = useAuth();
    const {
        showCommunityEditor,
        setShowCommunityEditor,
        showChannelEditor,
        setShowChannelEditor,
    } = useCommunity();

    const [showPostEditor, setShowPostEditor] = useState(false);
    const [showInviteDialog, setShowInviteDialog] = useState(false);
    const [inviteEmail, setInviteEmail] = useState("");

    const handleCreatePost = useCallback(
        (post) => {
            const createPostFunc = async () => {
                try {
                    const response = await api.post("posts", {
                        ...post,
                        channel_id: channel.id,
                        community_id: channel.community_id,
                    });
                    ToastNotification("success", "投稿が正常に作成されました");
                    dispatch(
                        actionChannel.handleAddPostToChannel(response.data)
                    );
                    dispatch(
                        actionChannel.handleSetMyCommunity(channel.community_id)
                    );
                    setShowPostEditor(false);
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
            createPostFunc();
        },
        [channel]
    );

    const handleSubmitInvitation = useCallback(
        (e) => {
            e.preventDefault();
            console.log(inviteEmail);
            const inviteFunc = async () => {
                try {
                    const response = await api.post("invitations", {
                        email: inviteEmail,
                        community_id: channel.id,
                    });
                    console.log(response);
                    ToastNotification("success", "招待が正常に送信されました");
                    setInviteEmail("");
                    setShowInviteDialog(false);
                } catch (error) {
                    console.log(error);
                    if (error.response?.status == 404)
                        ToastNotification(
                            "warning",
                            "登録ユーザーに招待を送信できます"
                        );
                }
            };
            inviteFunc();
        },
        [auth, channel, inviteEmail]
    );

    useEffect(() => setShowPostEditor(false), [channel]);

    return (
        <PanelContent
            headerContent
            title={channel ? channel.name : "コミュニティ"}
        >
            {channel ? (
                <div>
                    {!showPostEditor && (
                        <div className="mb-2">
                            <Button
                                variant="contained"
                                onClick={() => setShowPostEditor(true)}
                                sx={{ mr: 1 }}
                            >
                                {/* Start New Post */}新しい投稿を開始
                            </Button>
                            <Button
                                variant="outlined"
                                onClick={() => setShowInviteDialog(true)}
                            >
                                {/* Invite People */}人を招待
                            </Button>
                        </div>
                    )}

                    {showPostEditor && (
                        <PostEditor
                            onPost={handleCreatePost}
                            onClose={() => setShowPostEditor(false)}
                        />
                    )}

                    {Array.isArray(posts) &&
                        posts?.map((post) => (
                            <Post key={post.id} post={post} users={users} />
                        ))}

                    <Dialog
                        open={showInviteDialog}
                        onClose={() => setShowInviteDialog(false)}
                    >
                        <div className="p-2">
                            <form onSubmit={handleSubmitInvitation}>
                                <div className="text-lg">
                                    {/* Invite People */}人を招待
                                </div>
                                <TextField
                                    fullWidth
                                    // label="Email"
                                    label="メール"
                                    type="email"
                                    required
                                    value={inviteEmail}
                                    onChange={(e) =>
                                        setInviteEmail(e.target.value)
                                    }
                                    sx={{ my: 2 }}
                                />
                                <Button variant="contained" type="submit">
                                    {/* Send Invite */}招待を送信
                                </Button>
                            </form>
                        </div>
                    </Dialog>
                </div>
            ) : (
                <>
                    {communities && communities.length > 0 && (
                        <div>新しいコミュニティを作成</div>
                    )}
                    <Box
                        display="flex"
                        justifyContent="center"
                        width="100%"
                        paddingTop={5}
                        pb={3}
                    >
                        <Box display="flex" flexDirection="column" gap={2}>
                            <Typography className="text-xl">
                                コミュニティを構築する
                            </Typography>
                            <Typography variant="">
                                コミュニティイベントを計画し、ディスカッションに参加し、協力するための安全なスペースを作ります。
                            </Typography>
                            <Typography color="#4a55aa">
                                コミュニティについてもっと知る
                            </Typography>
                            <Box className="flex justify-center">
                                <Box
                                    display="flex"
                                    alignItems="center"
                                    justifyContent="center"
                                    gap={1}
                                    flexWrap="wrap"
                                    width="100%"
                                    sx={{ maxWidth: "768px" }}
                                >
                                    {preNamedCommunities?.map((item, index) => (
                                        <PreNamedItems
                                            key={index}
                                            community={item}
                                        />
                                    ))}
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </>
            )}
            {showCommunityEditor && (
                <Dialog
                    open={showCommunityEditor}
                    onClose={() => setShowCommunityEditor(false)}
                    maxWidth="md"
                >
                    <CreateCommunity />
                </Dialog>
            )}
            {showChannelEditor && (
                <Dialog
                    open={showChannelEditor}
                    onClose={() => setShowChannelEditor(false)}
                >
                    <CreateChannel />
                </Dialog>
            )}
        </PanelContent>
    );
};

export default Communities;

const PreNamedItems = ({ community }) => {
    const { setShowCommunityEditor, setPreSetCommunityName } = useCommunity();
    const classes = useStyles();

    const handleClick = () => {
        setPreSetCommunityName(community.value);
        setShowCommunityEditor(true);
    };

    return (
        <Box
            onClick={handleClick}
            className={`${classes.preNamesItem} ${
                community.value ? classes.active : classes.inactive
            }`}
        >
            {community.icon}
            {community.title}
        </Box>
    );
};

const useStyles = makeStyles((theme) => ({
    preNamesItem: {
        paddingLeft: "1rem",
        paddingRight: "1rem",
        paddingTop: "0.5rem",
        paddingBottom: "0.5rem",
        borderRadius: "999px",
        border: "2px solid #212229",
        color: "white",
        fontWeight: 600,
        cursor: "pointer",
        transition: "all 0.3s ease",
        display: "flex",
        alignItems: "center",
        gap: 4,
    },
    active: {
        backgroundColor: "#313239",
        "&:hover": {
            backgroundColor: "#212229",
        },
    },
    inactive: {
        backgroundColor: "#5a65ba",
        "&:hover": {
            backgroundColor: "#4a55aa",
        },
    },
}));
