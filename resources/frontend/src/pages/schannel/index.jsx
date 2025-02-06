import React, { useCallback, useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import {
    Box,
    Button,
    Card,
    CardContent,
    Divider,
    Paper,
    ThemeProvider,
    Typography,
    createTheme,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import PostAddIcon from "@mui/icons-material/PostAdd";
import api from "../../api";
import { actionChannel, selectorChannel } from "../../reduxStore";
import Post from "../communities/Post";
import PostEditor from "../communities/PostEditor";
import menu4 from "../../components/shop/sideBar/menu4";
import menu5 from "../../components/shop/sideBar/menu5";
import menu6 from "../../components/shop/sideBar/menu6";
import {
    getItem,
    PanelContent,
    ToastNotification,
    useDispatch,
    useSelector,
} from "../../components";
import { useAuth } from "../../contexts/AuthContext";

const theme = createTheme();
const menus = [...menu4, ...menu5, ...menu6];

const SChannel = ({ match, history }) => {
    const dispatch = useDispatch();
    const classes = useStyles();
    const { auth } = useAuth();

    const schannelId = match.params.id;
    const menu = menus.find((item) => item.id == schannelId);
    const title = menu?.title || "カレンダー";

    const posts = useSelector(selectorChannel.handleGetPosts);
    const users = useSelector(selectorChannel.handleGetUsers);
    const [showPostEditor, setShowPostEditor] = useState(false);
    const [post, setPost] = useState(null);

    const handleGetSChannel = useCallback(
        async ({ id }) => {
            try {
                const response = await api.get("schannels/" + id);
                dispatch(
                    actionChannel.handleSelectChannel({
                        community: null,
                        channel: null,
                        posts: response.data.posts,
                        users: response.data.users,
                    })
                );
                dispatch(actionChannel.handleAddUser(auth));
            } catch (error) {
                console.log(error);
            }
        },
        [dispatch, auth]
    );

    const handleCreatePost = useCallback(
        (post, init) => {
            const createPostFunc = async (post) => {
                try {
                    const response = await api.post("posts", {
                        ...post,
                        channel_id: 0,
                        community_id: 0,
                        schannel: schannelId,
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
        [schannelId]
    );

    useEffect(() => {
        if (!menu || !menu.id) {
            if (getItem("userdata").length === 0) {
                history.push("/");
            } else {
                history.push("/todo");
            }
            return;
        }
        handleGetSChannel(menu);
        setPost(null);
        setShowPostEditor(false);
    }, [handleGetSChannel, menu, history]);

    const handleClickNewPost = useCallback(() => {
        setPost(null);
        setShowPostEditor(true);
    }, []);

    const handleClickEditPost = useCallback((param) => {
        setPost(param);
        setShowPostEditor(true);
    }, []);

    return (
        <ThemeProvider theme={theme}>
            <PanelContent>
                <Typography variant="h4">{title}</Typography>
                <Divider sx={{ my: 1 }} />
                <Box display={"flex"} justifyContent={"center"}>
                    <Box width={"100%"} maxWidth={960}>
                        <Card sx={{ mb: 2 }}>
                            <CardContent>
                                {showPostEditor ? (
                                    <PostEditor
                                        onPost={handleCreatePost}
                                        onClose={() => setShowPostEditor(false)}
                                        initPost={post}
                                    />
                                ) : (
                                    <Box display={"flex"} alignItems={"center"}>
                                        <Button
                                            variant="contained"
                                            onClick={handleClickNewPost}
                                            sx={{ mr: 1 }}
                                        >
                                            <PostAddIcon /> 新しい投稿を開始
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
                                    channel={menu}
                                    users={users}
                                    handleOpenEdit={handleClickEditPost}
                                />
                            ))}
                    </Box>
                </Box>
            </PanelContent>
        </ThemeProvider>
    );
};

export default withRouter(SChannel);

const useStyles = makeStyles({});
