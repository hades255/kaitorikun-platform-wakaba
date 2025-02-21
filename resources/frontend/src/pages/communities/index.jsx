import React, { useCallback, useEffect, useMemo, useState } from "react";
import { withRouter } from "react-router-dom";
import {
    Avatar,
    Box,
    Button,
    ButtonGroup,
    Card,
    CardContent,
    Chip,
    Dialog,
    TextField,
    Typography,
} from "@mui/material";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import PostAddIcon from "@mui/icons-material/PostAdd";
import api from "../../api";
import { actionChannel, selectorChannel } from "../../reduxStore";
import {
    PanelContent,
    ToastNotification,
    useDispatch,
    useSelector,
} from "../../components";
import Creator from "../../components/community/Creator";
import { stringAvatar } from "../../components/helper/func";
import Post from "./Post";
import PostEditor from "./PostEditor";
import HorizontalSeparator from "../../components/community/HorizontalSeparator";
import { UserItem } from "../../components/chat/TagInput";
import { useAuth } from "../../contexts/AuthContext";

const sepItems = [
    { type: "posts", title: "投稿" },
    // { type: "files", title: "ファイル" },
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

    const [showPostEditor, setShowPostEditor] = useState(false);
    const [showInviteDialog, setShowInviteDialog] = useState(false);

    const divider = useMemo(
        () => community?.type == 1 && channel?.type == 0,

        [community, channel]
    );

    const getChannel = useCallback(
        (param) => {
            const fetchPosts = async () => {
                try {
                    const response = await api.get(`channels/${param}`);
                    const channel = response.data.channel;
                    const community = channel.community;
                    const users = community.users;
                    dispatch(
                        actionChannel.handleSelectChannel({
                            posts: response.data.posts,
                            community,
                            channel,
                            users,
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
        return () => {
            dispatch(
                actionChannel.handleSelectChannel({
                    posts: [],
                    community: null,
                    channel: null,
                    users: [],
                })
            );
        };
    }, [getChannel, dispatch, channelId]);

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
            <HorizontalSeparator BottomComponent={<></>} divider={divider}>
                <>
                    <ComHeader
                        community={community}
                        channel={channel}
                        handleClickSepCom={handleClickSepCom}
                        sepCom={comSepType}
                        setShowInviteDialog={setShowInviteDialog}
                    />
                    <Box display={"flex"} justifyContent={"center"}>
                        <Box
                            width={"100%"}
                            maxWidth={1024}
                            position={"relative"}
                        >
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
                                                        onClick={
                                                            handleClickNewPost
                                                        }
                                                        sx={{ mr: 1 }}
                                                    >
                                                        <PostAddIcon />{" "}
                                                        新しい投稿を開始
                                                    </Button>
                                                </Box>
                                            )}
                                        </CardContent>
                                    </Card>
                                    {Array.isArray(posts) &&
                                        posts
                                            ?.filter(
                                                ({ channel_id }) =>
                                                    channel_id == channelId
                                            )
                                            .map((post) => (
                                                <Post
                                                    key={post.id}
                                                    post={post}
                                                    channel={channel}
                                                    users={users}
                                                    handleOpenEdit={
                                                        handleClickEditPost
                                                    }
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
                            <Invitation
                                onClose={setShowInviteDialog}
                                community={community}
                                channel={channel}
                            />
                        </Dialog>
                    )}
                </>
            </HorizontalSeparator>
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
    const { auth } = useAuth();
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
                        {/* <ButtonGroup
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
                        </ButtonGroup> */}
                    </Box>
                    <Box>
                        <ButtonGroup
                            size="small"
                            variant="text"
                            aria-label="mainContent settings"
                        >
                            {community?.user_id == auth?.id && (
                                <Button onClick={handleClickInvite}>
                                    <GroupAddIcon />
                                </Button>
                            )}
                            {/* <Button>
                                <LinkIcon />
                            </Button>
                            <Button>
                                <SettingsIcon />
                            </Button> */}
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

const Invitation = ({ community, channel, onClose }) => {
    const [inviteEmail, setInviteEmail] = useState("");
    const [selected, setSelected] = useState([]);
    const [timer, setTimer] = useState(null);
    const [users, setUsers] = useState([]);

    const dropdownUsers = useMemo(
        () =>
            users
                ? users.filter(
                      (user) =>
                          !selected?.find(({ id }) => id == user.id) &&
                          !community?.users?.find(({ id }) => id == user.id)
                  )
                : [],
        [users, selected, community]
    );

    const handleSubmitInvitation = useCallback(async () => {
        try {
            await api.post("invitations", {
                users: selected,
                community_id: community.id,
                channel_id: channel.id,
            });
            ToastNotification("success", "招待が正常に送信されました");
            setInviteEmail("");
            onClose(false);
        } catch (error) {
            console.log(error);
            if (error.response?.status == 404)
                ToastNotification(
                    "warning",
                    "登録ユーザーに招待を送信できます"
                );
        }
    }, [community, channel, onClose, selected]);

    const getUsers = useCallback(
        async (input) => {
            try {
                const response = await api(
                    `invitations/users/search?search=${input}&channel_id=${channel.id}`
                );
                setUsers(response.data);
            } catch (error) {
                console.log(error);
            }
        },
        [channel]
    );

    const handleInputChange = useCallback(
        (e) => {
            setInviteEmail(e.target.value);
            if (timer) clearTimeout(timer);
            if (e.target.value.length > 2)
                setTimer(setTimeout(() => getUsers(e.target.value), 500));
            else setUsers([]);
        },
        [timer, getUsers]
    );

    const handleClickInviteUserItem = useCallback(
        (user) => {
            setSelected([...selected, user]);
        },
        [selected]
    );

    return (
        <Box p={4}>
            <Typography variant="body1">
                {/* Invite People */}メンバーを「コミュニティ ガイド」に招待
            </Typography>
            <Typography variant="subtitle2">
                このコミュニティに追加する個人の名前、メール
                アドレスを入力します。
            </Typography>
            <Box minHeight={200} my={2}>
                {selected.length > 0 && (
                    <Box
                        display={"flex"}
                        alignItems={"center"}
                        flexWrap={"wrap"}
                        gap={1}
                        mb={2}
                    >
                        {selected.map((user) => (
                            <Chip
                                key={user.id}
                                id={user.id}
                                label={user.name}
                                variant="outlined"
                                color="info"
                                onDelete={() =>
                                    setSelected(
                                        selected.filter(
                                            ({ id }) => id != user.id
                                        )
                                    )
                                }
                                avatar={<Avatar>{user.name[0]}</Avatar>}
                            />
                        ))}
                    </Box>
                )}
                <TextField
                    fullWidth
                    label="名前、メールを検索"
                    type="email"
                    placeholder="名前、メールを入力"
                    required
                    value={inviteEmail}
                    onChange={handleInputChange}
                />
                {dropdownUsers.length > 0 && (
                    <Box
                        display={"flex"}
                        flexDirection={"column"}
                        maxHeight={400}
                        borderRadius={2}
                        border={"1px solid lightgray"}
                        boxShadow={"2px 3px 4px #0004"}
                        sx={{ overflowY: "scroll", cursor: "pointer" }}
                        className="non-scrollbar"
                    >
                        {dropdownUsers.map((user) => (
                            <UserItem
                                key={user.id}
                                user={user}
                                onClick={handleClickInviteUserItem}
                            />
                        ))}
                    </Box>
                )}
            </Box>
            <Button
                variant="contained"
                disabled={selected.length == 0}
                onClick={handleSubmitInvitation}
            >
                {/* Send Invite */}招待を送信
            </Button>
        </Box>
    );
};
