import React, { useCallback, useEffect, useState } from "react";
import {
    Box,
    IconButton,
    List,
    ListItem,
    ListItemText,
    Typography,
    Menu,
    MenuItem,
    Divider,
    ListItemAvatar,
    Avatar,
} from "@mui/material";
import { Add as AddIcon } from "@mui/icons-material";
import { format } from "date-fns";
import { API_ROUTE } from "../../../config";
import api from "../../../api";
import { useCommunity } from "../../../contexts/CommunityContext";
import { actionChannel, selectorChannel } from "../../../reduxStore";
import { useDispatch, useSelector } from "../../../components";

const ChannelSidebar = () => {
    const dispatch = useDispatch();
    const communities = useSelector(selectorChannel.handleGetCommunities);

    useEffect(() => {
        return () => {
            dispatch(
                actionChannel.handleSelectChannel({
                    community: null,
                    channel: null,
                    posts: [],
                    users: [],
                })
            );
        };
    }, [dispatch]);

    return (
        <>
            <List>
                <AddNewButton />
                {Array.isArray(communities) && (
                    <>
                        {communities.map((item, index) => (
                            <CommunityItem key={index} com={item} />
                        ))}
                    </>
                )}
            </List>
            {/* <PublicCommunities /> */}
        </>
    );
};

const CommunityItem = ({ com }) => {
    const dispatch = useDispatch();
    const channel = useSelector(selectorChannel.handleGetChannel);
    const { setShowChannelEditor, setPreSetCommunityId } = useCommunity();
    const [show, setShow] = useState(false);

    const handleClick = () => {
        if (!show) {
            const generalCom = com.channels.find((item) => item.type == 0);
            if (generalCom) {
                handleClickChannel(generalCom);
            }
        }
        setShow(!show);
    };

    const handleClickNew = useCallback(() => {
        setPreSetCommunityId(com.id);
        setShowChannelEditor(true);
    }, [dispatch, setShowChannelEditor, setPreSetCommunityId, com, channel]);

    const handleClickChannel = (param) => {
        const fetchPosts = async () => {
            try {
                const response = await api.get(
                    `${API_ROUTE}channels/${param.id}`
                );
                dispatch(
                    actionChannel.handleSelectChannel({
                        community: com,
                        channel: param,
                        posts: response.data.posts,
                        users: response.data.users,
                    })
                );
            } catch (error) {
                console.log(error);
            }
        };
        fetchPosts();
    };

    return (
        <>
            <ListItem
                onClick={handleClick}
                sx={{
                    bgcolor: "#0000",
                    color: "white",
                    cursor: "pointer",
                }}
            >
                <ListItemAvatar>
                    <Avatar
                        sx={{ color: "black", width: 48, height: 48 }}
                        alt={com.name}
                        src={com.icon}
                        variant="rounded"
                    />
                </ListItemAvatar>
                <ListItemText
                    primary={com.name}
                    secondary={
                        <Typography
                            component="span"
                            variant="subtitle2"
                            sx={{ color: "white", display: "inline" }}
                        >
                            {format(com.created_at, "yyyy/MM/dd")}
                        </Typography>
                    }
                />
            </ListItem>
            {show && (
                <List>
                    {Array.isArray(com.channels) &&
                        com.channels.map((item) => (
                            <ChannelItem
                                key={item.id}
                                channel={item}
                                active={item.id == channel?.id}
                                handleClickChannel={handleClickChannel}
                            />
                        ))}
                    <ListItem
                        onClick={handleClickNew}
                        sx={{ color: "white", cursor: "pointer", pl: 4 }}
                    >
                        <AddIcon color="!white" />
                        <ListItemText primary="チャンネルを作成" />
                    </ListItem>
                </List>
            )}
            <Divider sx={{ borderColor: "#AAF4" }} />
        </>
    );
};

const ChannelItem = ({ channel, active, handleClickChannel }) => {
    const handleClick = () => {
        handleClickChannel(channel);
    };

    return (
        <ListItem
            onClick={handleClick}
            sx={{
                pl: 4,
                py: 0,
                bgcolor: active ? "#0004" : "#0000",
                cursor: "pointer",
            }}
        >
            <ListItemAvatar>
                <Avatar variant="rounded" sx={{ color: "black" }}>
                    {channel.name[0]}
                </Avatar>
            </ListItemAvatar>
            <ListItemText
                sx={{ color: "white" }}
                primary={channel.name}
                secondary={
                    <Typography
                        component="span"
                        variant="subtitle2"
                        sx={{ color: "white", display: "inline" }}
                    >
                        {format(channel.created_at, "yyyy/MM/dd")}
                    </Typography>
                }
            />
        </ListItem>
    );
};

// const PublicCommunities = () => {
//     const { auth } = useAuth();
//     const communities = useSelector(selectorChannel.handleGetPublicCommunities);

//     return (
//         Array.isArray(communities) &&
//         communities.length > 0 && (
//             <List>
//                 <Typography variant="p" fontSize={12} color="white" pl={2}>
//                     公開チャンネル
//                 </Typography>
//                 <List>
//                     {communities.map((item) => (
//                         <CommunityItem key={item.id} com={item} />
//                     ))}
//                 </List>
//             </List>
//         )
//     );
// };

const AddNewButton = () => {
    const {
        setShowCommunityEditor,
        setPreSetCommunityName,
        setPreSetCommunityId,
        setShowChannelEditor,
    } = useCommunity();

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleNewCommunity = () => {
        setPreSetCommunityName("");
        setShowCommunityEditor(true);
        handleClose();
    };

    const handleNewChannel = () => {
        setPreSetCommunityId(0);
        setShowChannelEditor(true);
        handleClose();
    };

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <Box display="flex" justifyContent="flex-end" paddingX={2} paddingY={1}>
            <IconButton
                id="basic-button"
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
                sx={{ color: "white" }}
            >
                <AddIcon color="!white" />
            </IconButton>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    "aria-labelledby": "basic-button",
                }}
            >
                <MenuItem onClick={handleNewCommunity}>
                    {/* Add Community */}コミュニティを追加
                </MenuItem>
                <MenuItem onClick={handleNewChannel}>
                    {/* Add Channel */}チャンネルを追加
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    {/* Join Community */}コミュニティに参加
                </MenuItem>
            </Menu>
        </Box>
    );
};

export default ChannelSidebar;
