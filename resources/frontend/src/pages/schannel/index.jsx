import React, { useCallback, useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import {
    Box,
    Button,
    Card,
    CardContent,
    Divider,
    Typography,
} from "@mui/material";
import PostAddIcon from "@mui/icons-material/PostAdd";
import api from "../../api";
import { actionSChannel, selectorSChannel } from "../../reduxStore";
import {
    PanelContent,
    ToastNotification,
    useDispatch,
    useSelector,
} from "../../components";
import Post from "../communities/Post";
import PostEditor from "../communities/PostEditor";

const OriginalSchannal = withRouter(({ match }) => {
    const dispatch = useDispatch();

    const schannelId = match.params.id;

    const channel = useSelector(selectorSChannel.handleGetSChannel);
    const posts = useSelector(selectorSChannel.handleGetSChannelPosts);
    const users = useSelector(selectorSChannel.handleGetSChannelUsers);
    const [showPostEditor, setShowPostEditor] = useState(false);
    const [post, setPost] = useState(null);

    const getChannel = useCallback(
        async (param) => {
            try {
                dispatch(
                    actionSChannel.handleSeleteSChannels({
                        channel: null,
                        posts: [],
                        users: [],
                    })
                );
                const response = await api.get(`schannels/${param}`);
                dispatch(
                    actionSChannel.handleSeleteSChannels({
                        channel: response.data.channel,
                        posts: response.data.posts,
                        users: response.data.users,
                    })
                );
            } catch (error) {
                console.log(error);
            }
        },
        [dispatch]
    );

    const handleCreatePost = useCallback(
        (post, init) => {
            const createPostFunc = async (post) => {
                try {
                    const response = await api.post("posts", {
                        ...post,
                        channel_id: schannelId,
                        community_id: 0,
                    });
                    dispatch(actionSChannel.handleAddPost(response.data));
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
                    dispatch(actionSChannel.handlePostEdited(response.data));
                    ToastNotification("success", "投稿の更新に成功しました");
                    setShowPostEditor(false);
                } catch (error) {
                    console.log(error);
                    ToastNotification(
                        "warning",
                        error.response?.status == 401
                            ? "まずはログインしてください"
                            : "サーバーエラーです。しばらくしてからもう一度お試しください"
                    );
                }
            };
            if (init) updatePostFunc(post, init);
            else createPostFunc(post);
        },
        [schannelId]
    );

    useEffect(() => {
        getChannel(schannelId);
        setPost(null);
        setShowPostEditor(false);
    }, [getChannel, schannelId]);

    const handleClickNewPost = useCallback(() => {
        setPost(null);
        setShowPostEditor(true);
    }, []);

    const handleClickEditPost = useCallback((param) => {
        setPost(param);
        setShowPostEditor(true);
    }, []);

    return (
        channel && (
            <>
                <Typography variant="h4">{channel.name}</Typography>
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
                                    channel={channel}
                                    users={users}
                                    handleOpenEdit={handleClickEditPost}
                                />
                            ))}
                    </Box>
                </Box>
            </>
        )
    );
});

const SChannel = () => {
    return (
        <>
            <PanelContent>
                <OriginalSchannal />
            </PanelContent>
        </>
    );
};

export default SChannel;
export { OriginalSchannal };
