import React, { useCallback, useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import {
    Avatar,
    Box,
    Button,
    ButtonGroup,
    Card,
    CardContent,
    Dialog,
    TextField,
    Typography,
} from "@mui/material";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import LinkIcon from "@mui/icons-material/Link";
import PostAddIcon from "@mui/icons-material/PostAdd";
import SettingsIcon from "@mui/icons-material/Settings";
import api from "../../api";
import { useAuth } from "../../contexts/AuthContext";
import { actionChannel, selectorChannel } from "../../reduxStore";
import {
    PanelContent,
    ToastNotification,
    useDispatch,
    useSelector,
} from "../../components";
import Creator from "../../components/community/Creator";
import Post from "./Post";
import PostEditor from "./PostEditor";
import { stringAvatar } from "../../components/helper/func";

const sepItems = [
    { type: "posts", title: "投稿" },
    { type: "files", title: "ファイル" },
    // { type: "photos", title: "写真" },
];

const Communities = ({ match }) => {
    const channelId = match.params.id;

    const dispatch = useDispatch();
    const channel = useSelector(selectorChannel.handleGetChannel);
    const community = useSelector(selectorChannel.handleGetCommunity);
    const posts = useSelector(selectorChannel.handleGetPosts);
    const users = useSelector(selectorChannel.handleGetUsers);
    const [comSepType, setComSepType] = useState("posts");
    const [post, setPost] = useState(null);

    const { auth } = useAuth();

    const [showPostEditor, setShowPostEditor] = useState(false);
    const [showInviteDialog, setShowInviteDialog] = useState(false);
    const [inviteEmail, setInviteEmail] = useState("");

    const getChannel = useCallback(
        (param) => {
            const fetchPosts = async () => {
                try {
                    const response = await api.get(`channels/${param}`);
                    dispatch(
                        actionChannel.handleSelectChannel({
                            community: response.data.community,
                            channel: response.data.channel,
                            posts: response.data.posts,
                            users: response.data.users,
                        })
                    );
                } catch (error) {
                    console.log(error);
                }
            };
            fetchPosts();
        },
        [dispatch]
    );

    useEffect(() => {
        if (channelId) getChannel(channelId);
    }, [getChannel, channelId, history]);

    const handleCreatePost = useCallback(
        (post, init) => {
            const createPostFunc = async (post) => {
                try {
                    const response = await api.post("posts", {
                        ...post,
                        channel_id: channel.id,
                        community_id: channel.community_id,
                    });
                    dispatch(
                        actionChannel.handleAddPostToChannel(response.data)
                    );
                    ToastNotification("success", "投稿が正常に作成されました");
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
            const updatePostFunc = async (post, init) => {
                try {
                    const response = await api.put("posts/" + init, post);
                    dispatch(actionChannel.handlePostEdited(response.data));
                    ToastNotification("success", "投稿の更新に成功しました");
                    setShowPostEditor(false);
                } catch (error) {
                    console.log(error);
                    ToastNotification(
                        "warning",
                        "サーバーエラーです。しばらくしてからもう一度お試しください"
                    );
                }
            };
            if (init) updatePostFunc(post, init);
            else createPostFunc(post);
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

    const handleClickSepCom = useCallback((type) => setComSepType(type), []);

    useEffect(() => {
        setShowPostEditor(false);
        setPost(null);
    }, [channel]);

    const handleClickNewPost = useCallback(() => {
        setPost(null);
        setShowPostEditor(true);
    }, []);

    const handleClickEditPost = useCallback((param) => {
        setPost(param);
        setShowPostEditor(true);
    }, []);

    return (
        <PanelContent>
            <ComHeader
                community={community}
                channel={channel}
                handleClickSepCom={handleClickSepCom}
                sepCom={comSepType}
                setShowInviteDialog={setShowInviteDialog}
            />
            <Box display={"flex"} justifyContent={"center"}>
                <Box width={"100%"} maxWidth={1024} position={"relative"}>
                    {channel && (
                        <>
                            <Card
                                sx={{
                                    mb: 2,
                                    bgcolor: "#f4f6f9",
                                    position:
                                        showPostEditor && post
                                            ? "sticky"
                                            : "static",
                                    zIndex: 1,
                                    top: 0,
                                }}
                            >
                                <CardContent>
                                    <Box mb={2}>
                                        <Creator
                                            creature={channel}
                                            users={users}
                                        />
                                    </Box>
                                    {showPostEditor ? (
                                        <PostEditor
                                            onPost={handleCreatePost}
                                            onClose={() =>
                                                setShowPostEditor(false)
                                            }
                                            initPost={post}
                                        />
                                    ) : (
                                        <Box
                                            display={"flex"}
                                            alignItems={"center"}
                                        >
                                            <Button
                                                variant="contained"
                                                onClick={handleClickNewPost}
                                                sx={{ mr: 1 }}
                                            >
                                                <PostAddIcon /> 新しい投稿を開始
                                            </Button>
                                            <Button
                                                variant="outlined"
                                                onClick={() =>
                                                    setShowInviteDialog(true)
                                                }
                                            >
                                                人を招待
                                            </Button>
                                        </Box>
                                    )}
                                </CardContent>
                            </Card>
                            {Array.isArray(posts) &&
                                posts?.map((post) => (
                                    <Post
                                        key={post.id}
                                        post={post}
                                        channel={channel}
                                        users={users}
                                        handleOpenEdit={handleClickEditPost}
                                    />
                                ))}
                        </>
                    )}
                </Box>
            </Box>
            {showInviteDialog && (
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
                                onChange={(e) => setInviteEmail(e.target.value)}
                                sx={{ my: 2 }}
                            />
                            <Button variant="contained" type="submit">
                                {/* Send Invite */}招待を送信
                            </Button>
                        </form>
                    </div>
                </Dialog>
            )}
        </PanelContent>
    );
};

export default withRouter(Communities);

const ComHeader = ({
    community,
    channel,
    handleClickSepCom,
    sepCom,
    setShowInviteDialog,
}) => {
    const mainContent = channel
        ? channel.type == 0
            ? community
            : channel
        : null;

    const handleClickInvite = useCallback(() => {
        setShowInviteDialog(true);
    }, [setShowInviteDialog]);

    return (
        <>
            {mainContent && (
                <Box
                    width={"100%"}
                    display={"flex"}
                    alignItems={"center"}
                    justifyContent={"space-between"}
                    borderBottom={"1px solid gray"}
                    gap={4}
                    p={1}
                >
                    <Box display={"flex"} alignItems={"center"} gap={2}>
                        <Avatar
                            {...stringAvatar({
                                name: mainContent.name,
                                src: mainContent.icon,
                                sx: {
                                    color: "black",
                                    width: 32,
                                    height: 32,
                                },
                            })}
                            variant="rounded"
                        />
                        <Typography variant="h5" color="black">
                            {mainContent.name}
                        </Typography>
                        <ButtonGroup
                            size="small"
                            variant="text"
                            aria-label="sep mainContent settings"
                        >
                            {sepItems.map((item) => (
                                <SepItems
                                    key={item.type}
                                    type={item.type}
                                    active={sepCom == item.type}
                                    onClick={handleClickSepCom}
                                >
                                    {item.title}
                                </SepItems>
                            ))}
                        </ButtonGroup>
                    </Box>
                    <Box>
                        <ButtonGroup
                            size="small"
                            variant="text"
                            aria-label="mainContent settings"
                        >
                            <Button onClick={handleClickInvite}>
                                <GroupAddIcon />
                            </Button>
                            <Button>
                                <LinkIcon />
                            </Button>
                            <Button>
                                <SettingsIcon />
                            </Button>
                        </ButtonGroup>
                    </Box>
                </Box>
            )}
        </>
    );
};

const SepItems = ({ children, type, onClick, active }) => {
    const handleClick = () => {
        onClick(type);
    };

    return (
        <Button onClick={handleClick} variant={active ? "outlined" : "text"}>
            {children}
        </Button>
    );
};
