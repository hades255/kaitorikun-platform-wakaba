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
import Post from "../communities/Post";
import PostEditor from "../communities/PostEditor";
import { getItem, PanelContent, ToastNotification } from "../../components";
import menu4 from "../../components/shop/sideBar/menu4";
import menu5 from "../../components/shop/sideBar/menu5";
import menu6 from "../../components/shop/sideBar/menu6";

const theme = createTheme();
const menus = [...menu4, ...menu5, ...menu6];

const SChannel = ({ match, history }) => {
    const classes = useStyles();

    const schannelId = match.params.id;
    const menu = menus.find((item) => item.id == schannelId);
    const title = menu?.title || "カレンダー";

    const [posts, setPosts] = useState([]);
    const [users, setUsers] = useState([]);
    const [showPostEditor, setShowPostEditor] = useState(false);

    const handleGetSChannel = useCallback(async ({ id }) => {
        try {
            const response = await api.get("schannels/" + id);
            if (response.data.posts) setPosts(response.data.posts);
            if (response.data.users) setUsers(response.data.users);
        } catch (error) {
            console.log(error);
        }
    }, []);

    const handleCreatePost = useCallback(
        (post) => {
            const createPostFunc = async () => {
                try {
                    const response = await api.post("posts", {
                        ...post,
                        community_id: 0,
                        schannel: schannelId,
                    });
                    setPosts((prev) => [...prev, response.data]);
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
            createPostFunc();
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
    }, [handleGetSChannel, menu, history]);

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
                                    />
                                ) : (
                                    <Box display={"flex"} alignItems={"center"}>
                                        <Button
                                            variant="contained"
                                            onClick={() =>
                                                setShowPostEditor(true)
                                            }
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
