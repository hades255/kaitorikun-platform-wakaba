import { useCallback, useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";
import {
    Card,
    CardContent,
    Typography,
    Button,
    Box,
    TextField,
    IconButton,
    Badge,
    Chip,
    Popover,
    ButtonGroup,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogContentText,
    DialogActions,
} from "@mui/material";
import { Add as AddIcon } from "@mui/icons-material";
import MoodIcon from "@mui/icons-material/Mood";
import EditIcon from "@mui/icons-material/Edit";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import { styled } from "@mui/material/styles";
import moment from "moment";
import "moment/locale/ja";
import "./Post.css";
import api from "../../api";
import { getUserStatusColor } from "../../feature/action";
import { useAuth } from "../../contexts/AuthContext";
import { actionChannel } from "../../reduxStore";
import Creator from "../../components/community/Creator";
import { ToastNotification } from "../../components";

moment.locale("ja");

const Post = ({ post, users, channel, handleOpenEdit }) => {
    const dispatch = useDispatch();
    const { auth } = useAuth();
    const contentRef = useRef(null);
    const postId = post?.id;
    const creatorId = post?.user_id;
    const authId = auth?.id;
    const [reply, setReply] = useState("");
    const [showReplies, setShowReplies] = useState(false);
    const [showReplyInput, setShowReplyInput] = useState(false);
    const [reactions, setReactions] = useState([]);
    const [openDeleteModal, setOpenDeleteModal] = useState(false);
    const [showFull, setShowFull] = useState(false);
    const [showFullButton, setShowFullButton] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClickEmojiOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleCloseEmojiOpen = () => {
        setAnchorEl(null);
    };

    const showEmojiPicker = Boolean(anchorEl);

    const handleClickHideContent = useCallback(() => {
        setShowFull(!showFull);
    }, [showFull]);

    const handleReply = () => {
        const saveFunc = async () => {
            try {
                const response = await api.post("postreply", {
                    reply,
                    post_id: post.id,
                });
                dispatch(actionChannel.handleReplyPost(response.data));
                // dispatch(actionChannel.handleSetMyCommunity(post.community_id));
                setReply("");
                setShowReplyInput(false);
            } catch (error) {
                console.log(error);
            }
        };
        saveFunc();
    };

    const handleNewEmojiClick = (emojiData) => {
        if (
            Array.isArray(post.reactions) &&
            post.reactions.find(
                (item) =>
                    item.user_id == auth?.id &&
                    item.reaction == emojiData.native
            )
        ) {
            handleCloseEmojiOpen();
            return;
        }
        const saveFunc = async () => {
            try {
                const response = await api.post("postreaction", {
                    reaction: emojiData.native,
                    post_id: post.id,
                });
                dispatch(actionChannel.handleAddREACTION(response.data));
                // dispatch(actionChannel.handleSetMyCommunity(post.community_id));
            } catch (error) {
                console.log(error);
            } finally {
                handleCloseEmojiOpen();
            }
        };
        saveFunc();
    };

    const handleEmojiClick = (reaction) => {
        if (reaction.mine) {
            const saveFunc = async () => {
                try {
                    const response = await api.post("postreaction/toggle", {
                        reaction: reaction.reaction,
                        post_id: post.id,
                    });
                    dispatch(actionChannel.handleRemoveREACTION(response.data));
                } catch (error) {
                    console.log(error);
                }
            };
            saveFunc();
        } else {
            const saveFunc = async () => {
                try {
                    const response = await api.post("postreaction", {
                        reaction: reaction.reaction,
                        post_id: post.id,
                    });
                    dispatch(actionChannel.handleAddREACTION(response.data));
                } catch (error) {
                    console.log(error);
                }
            };
            saveFunc();
        }
    };

    const handleClickOpenDeleteModal = useCallback(() => {
        setOpenDeleteModal(true);
    }, []);

    const handleCloseDeleteModal = useCallback(() => {
        setOpenDeleteModal(false);
    }, []);

    const handleAcceptDeleteModal = useCallback(async () => {
        try {
            const postId = post.id;
            await api.delete("posts/" + postId);
            ToastNotification("success", "投稿が正常に削除されました");
            dispatch(actionChannel.handleRemovePost(postId));
        } catch (error) {
            console.log(error);
            ToastNotification(
                "warning",
                "サーバーエラーです。しばらくしてからもう一度お試しください"
            );
        } finally {
            setOpenDeleteModal(false);
        }
    }, [dispatch, postId]);

    const handleClickEditPost = useCallback(() => {
        handleOpenEdit(post);
    }, [handleOpenEdit, post]);

    useEffect(() => {
        const channel = window.Echo.channel("channel");
        const handleReplyToPost = (data) => {
            if (
                data &&
                data.reply &&
                data.reply.post_id == postId &&
                authId != data.reply.user_id
            ) {
                dispatch(
                    actionChannel.handleAddUser({
                        id: data.reply.user_id,
                        name: data.name,
                    })
                );
                dispatch(actionChannel.handleReplyPost(data.reply));
            }
        };
        const handleAddReactionToPost = (data) => {
            if (
                data &&
                data.reaction &&
                data.reaction.post_id == postId &&
                authId != data.reaction.user_id
            ) {
                dispatch(
                    actionChannel.handleAddUser({
                        id: data.reaction.user_id,
                        name: data.name,
                    })
                );
                dispatch(actionChannel.handleAddREACTION(data.reaction));
            }
        };
        const handleRemoveReactFromPost = (data) => {
            if (
                data &&
                data.reaction &&
                data.reaction.post_id == postId &&
                authId != data.reaction.user_id
            ) {
                dispatch(actionChannel.handleRemoveREACTION(data.reaction));
            }
        };
        const handlePostEdited = (data) => {
            if (
                data &&
                data.post &&
                data.post.id == postId &&
                authId != data.post.user_id
            ) {
                dispatch(actionChannel.handlePostEdited(data.post));
            }
        };

        channel.listen(".channel.post.reply", handleReplyToPost);
        channel.listen(
            ".channel.post.reaction.created",
            handleAddReactionToPost
        );
        channel.listen(
            ".channel.post.reaction.deleted",
            handleRemoveReactFromPost
        );
        channel.listen(".channel.post.edited", handlePostEdited);
        return () => {
            if (channel) {
                channel.stopListening(".channel.post.reply");
                channel.stopListening(".channel.post.reaction.created");
                channel.stopListening(".channel.post.reaction.deleted");
                channel.stopListening(".channel.post.edited");
            }
        };
    }, [dispatch, authId, postId]);

    useEffect(() => {
        if (Array.isArray(post.reactions) && post.reactions.length > 0) {
            let res = {};
            post.reactions?.forEach((item) => {
                if (res[item.reaction]) {
                    res[item.reaction] = {
                        mine:
                            res[item.reaction].mine || item.user_id == auth?.id,
                        count: res[item.reaction].count + 1,
                        users: [...res[item.reaction].users, item.user_id],
                    };
                } else {
                    res[item.reaction] = {
                        mine: item.user_id == auth?.id,
                        count: 1,
                        users: [item.user_id],
                    };
                }
            });
            let res_a = [];
            for (let r in res) res_a.push({ reaction: r, ...res[r] });
            setReactions(res_a);
        } else setReactions([]);
    }, [post, auth]);

    useEffect(() => {
        if (contentRef && contentRef.current) {
            if (contentRef.current.offsetHeight > 100) setShowFullButton(true);
        }
    }, [contentRef]);

    return (
        <>
            <Card sx={{ mb: 2, bgcolor: "#f4f6f9" }}>
                <CardContent>
                    <Box
                        display={"flex"}
                        alignItems={"center"}
                        justifyContent={"space-between"}
                        gap={4}
                    >
                        <Box display={"flex"} alignItems={"center"} gap={1}>
                            <Box
                                height={32}
                                width={8}
                                borderRadius={2}
                                bgcolor={"#4a55aa"}
                            ></Box>
                            <Creator creature={post} users={users} />
                            {channel?.user_id == post?.user_id && (
                                <Chip
                                    variant="outlined"
                                    color="secondary"
                                    size="small"
                                    label="所有者"
                                    icon={<WorkspacePremiumIcon />}
                                />
                            )}
                            <Typography
                                variant="subtitle1"
                                fontSize={14}
                                color="text.secondary"
                            >
                                {moment(post.created_at).fromNow()}
                            </Typography>
                        </Box>
                        {creatorId == authId && (
                            <ButtonGroup
                                variant="text"
                                aria-label="post options"
                            >
                                <IconButton
                                    color="primary"
                                    onClick={handleClickEditPost}
                                >
                                    <EditIcon />
                                </IconButton>
                                <IconButton
                                    color="primary"
                                    onClick={handleClickOpenDeleteModal}
                                >
                                    <DeleteOutlineIcon />
                                </IconButton>
                            </ButtonGroup>
                        )}
                    </Box>
                    <Typography variant="h6">{post.title}</Typography>
                    <Typography variant="subtitle1" color="text.secondary">
                        {post.subject}
                    </Typography>
                    <Box
                        height={showFull ? "100%" : 100}
                        overflow={"hidden"}
                        position={"relative"}
                    >
                        <div
                            ref={contentRef}
                            dangerouslySetInnerHTML={{ __html: post.content }}
                        />
                        {showFullButton && (
                            <Button
                                size="small"
                                variant="text"
                                sx={{
                                    position: "absolute",
                                    right: 0,
                                    bottom: 0,
                                }}
                                onClick={handleClickHideContent}
                            >
                                {showFull ? "非表示" : "もっと見る"}
                            </Button>
                        )}
                    </Box>
                    <Box display={"flex"} alignItems={"center"} gap={1}>
                        {Array.isArray(reactions) &&
                            reactions?.map((item) => (
                                <EmojiItem
                                    key={item.reaction}
                                    reaction={item}
                                    users={users}
                                    onClick={handleEmojiClick}
                                />
                            ))}
                        <IconButton
                            color="primary"
                            onClick={handleClickEmojiOpen}
                        >
                            <MoodIcon />
                            <AddIcon />
                        </IconButton>
                    </Box>
                    <Popover
                        id={"open-emogi-popover" + post.id}
                        anchorEl={anchorEl}
                        anchorOrigin={{
                            vertical: "bottom",
                            horizontal: "left",
                        }}
                        open={showEmojiPicker}
                        onClose={handleCloseEmojiOpen}
                    >
                        <Picker
                            locale="ja"
                            theme="light"
                            previewPosition="none"
                            skinTonePosition="search"
                            emojiButtonSize={44}
                            emojiSize={28}
                            emojiButtonRadius={"6px"}
                            emojiButtonColors={[
                                "rgba(155,223,88,.7)",
                                "rgba(149,211,254,.7)",
                                "rgba(247,233,34,.7)",
                                "rgba(238,166,252,.7)",
                                "rgba(255,213,143,.7)",
                                "rgba(211,209,255,.7)",
                            ]}
                            icons={"solid"}
                            data={data}
                            onEmojiSelect={handleNewEmojiClick}
                        />
                    </Popover>
                    <Box>
                        <Button
                            onClick={() => setShowReplyInput(!showReplyInput)}
                        >
                            {/* Reply */}返信
                        </Button>
                        <Button onClick={() => setShowReplies(!showReplies)}>
                            {showReplies ? "会話を非表示" : "会話を表示"}{" "}
                            {post.replies &&
                                Array.isArray(post.replies) &&
                                post.replies.length > 0 &&
                                `(${post.replies.length} 返信)`}
                        </Button>
                    </Box>
                    {showReplyInput && (
                        <Box sx={{ mt: 2 }}>
                            <TextField
                                fullWidth
                                multiline
                                rows={2}
                                value={reply}
                                onChange={(e) => setReply(e.target.value)}
                                sx={{ mb: 1 }}
                            />
                            <Button variant="contained" onClick={handleReply}>
                                {/* Send Reply */}返信を送信
                            </Button>
                        </Box>
                    )}
                    {showReplies && (
                        <Box display="flex" flexDirection="column" gap={2}>
                            {Array.isArray(post.replies) &&
                                post.replies?.map((item) => (
                                    <ReplyItem
                                        key={item.id}
                                        reply={item}
                                        users={users}
                                    />
                                ))}
                        </Box>
                    )}
                </CardContent>
            </Card>
            <Dialog
                open={openDeleteModal}
                onClose={handleCloseDeleteModal}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    本当にこの投稿を削除しますか?
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        {post.title}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseDeleteModal}>反対</Button>
                    <Button onClick={handleAcceptDeleteModal} autoFocus>
                        賛成
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
};

export default Post;

const StyledBadge = styled(Badge)(({ theme }) => ({
    "& .MuiBadge-badge": {
        backgroundColor: getUserStatusColor("online"),
        color: getUserStatusColor("online"),
        width: 12,
        height: 12,
        borderRadius: "50%",
        border: `2px solid ${theme.palette.background.paper}`,
    },
}));

const ReplyItem = ({ reply, users }) => {
    return (
        <Box
            display="flex"
            flexDirection="column"
            width="100%"
            px={3}
            py={2}
            borderRadius={1}
            boxShadow={3}
        >
            <Box
                display="flex"
                justifyContent="space-between"
                spacing={3}
                gap={3}
            >
                <StyledBadge
                    overlap="circular"
                    anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                    variant="dot"
                >
                    <Creator creature={reply} users={users} />
                </StyledBadge>
                <Typography variant="caption" color="textSecondary">
                    {moment(reply.created_at).fromNow()}
                </Typography>
            </Box>
            <Typography variant="body2" color="textSecondary" noWrap>
                {reply.reply}
            </Typography>
        </Box>
    );
};

const EmojiItem = ({ reaction, onClick, users }) => {
    const [anchorEl, setAnchorEl] = useState(null);

    const handlePopoverOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handlePopoverClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);

    const handleClick = () => onClick(reaction);

    return (
        <div onMouseEnter={handlePopoverOpen} onMouseLeave={handlePopoverClose}>
            <Badge
                badgeContent={reaction.count > 1 ? reaction.count : 0}
                color="info"
                sx={{ cursor: "pointer" }}
            >
                <Chip
                    sx={{ fontSize: 24 }}
                    variant="outlined"
                    color="secondary"
                    label={reaction.reaction}
                    onClick={handleClick}
                ></Chip>
            </Badge>
            {Array.isArray(reaction.users) &&
                reaction.users.length > 0 &&
                open && (
                    <Popover
                        id="mouse-over-popover"
                        sx={{ pointerEvents: "none" }}
                        open={open}
                        anchorEl={anchorEl}
                        anchorOrigin={{
                            vertical: "bottom",
                            horizontal: "left",
                        }}
                        transformOrigin={{
                            vertical: "top",
                            horizontal: "left",
                        }}
                        onClose={handlePopoverClose}
                        disableRestoreFocus
                    >
                        <Box
                            p={2}
                            display={"flex"}
                            flexDirection={"column"}
                            gap={1}
                        >
                            {reaction.users.map((item, index) => (
                                <Creator
                                    key={index}
                                    users={users}
                                    creature={{ user_id: item }}
                                />
                            ))}
                        </Box>
                    </Popover>
                )}
        </div>
    );
};
