import React, {
    useCallback,
    useEffect,
    useMemo,
    useRef,
    useState,
} from "react";
import axios from "axios";
import clsx from "clsx";
import { Box, IconButton, List, ListItem, ListItemText, Typography } from "@mui/material";
import { Add as AddIcon } from "@mui/icons-material";
import { Remove as RemoveIcon } from "@mui/icons-material";
import { Button, Menu, MenuItem } from "@mui/material";
import { API_ROUTE } from "../../../config";
import { useAuth } from "../../../contexts/AuthContext";
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
                {Array.isArray(communities) &&
                    communities.map((item, index) => (
                        <CommunityItem key={index} com={item} />
                    ))}
            </List>
            <PublicCommunities />
        </>
    );
};

const CommunityItem = ({ com }) => {
    const dispatch = useDispatch();
    const channel = useSelector(selectorChannel.handleGetChannel);
    const { setShowChannelEditor, setPreSetCommunityId } = useCommunity();
    const [show, setShow] = useState(false);

    const handleClick = () => {
        setShow(!show);
    };

    const handleClickNew = useCallback(() => {
        dispatch(
            actionChannel.handleSelectChannel({
                channel: null,
                posts: [],
                users: [],
            })
        );
        setPreSetCommunityId(com.id);
        setShowChannelEditor(true);
    }, [dispatch, setShowChannelEditor, setPreSetCommunityId, com, channel]);

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
                <Box border="ActiveBorder" display="flex" alignItems="center" justifyContent="center" p={2} className="border w-4 min-w-4 h-4 p-0 flex justify-center items-center rounded mr-2 text-xs">
                    {!show ? <AddIcon color="!white" /> : <RemoveIcon color="!white" />}
                </Box>
                <ListItemText primary={com.name} />
            </ListItem>
            {show && (
                <>
                    {Array.isArray(com.channels) &&
                        com.channels.map((item) => (
                            <ChannelItem
                                key={item.id}
                                channel={item}
                                active={item.id == channel?.id}
                            />
                        ))}
                    <ListItem
                        onClick={handleClickNew}
                        sx={{ color: "white", cursor: "pointer", pl: 2 }}
                    >
                        <AddIcon color="!white" />
                        <ListItemText primary="チャンネルを作成" />
                    </ListItem>
                </>
            )}
        </>
    );
};

const ChannelItem = ({ channel, active }) => {
    const dispatch = useDispatch();

    const handleClickChannel = () => {
        const fetchPosts = async () => {
            try {
                const response = await axios.get(
                    `${API_ROUTE}channels/${channel.id}`
                );
                dispatch(
                    actionChannel.handleSelectChannel({
                        channel,
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
        <ListItem
            onClick={handleClickChannel}
            sx={{
                pl: 6,
                bgcolor: active ? "#fff2" : "#0000",
                color: "white",
                cursor: "pointer",
            }}
        >
            <ListItemText primary={channel.name} />
        </ListItem>
    );
};

const PublicCommunities = () => {
    const { auth } = useAuth();
    const _communities = useSelector(
        selectorChannel.handleGetPublicCommunities
    );
    const communities = useMemo(
        () =>
            Array.isArray(_communities)
                ? _communities.filter(({ user_id }) => user_id != auth?.id)
                : [],
        [auth, _communities]
    );

    return (
        Array.isArray(communities) &&
        communities.length > 0 && (
            <>
                <Typography variant="p" fontSize={12} color="white" pl={2}>
                    {/* Public communities */}
                    公開チャンネル
                </Typography>
                <List>
                    {/* <Link to="/communities"> */}
                    {communities.map((item) => (
                        <CommunityItem key={item.id} com={item} />
                    ))}
                    {/* </Link> */}
                </List>
            </>
        )
    );
};

const AddNewButton = () => {
    const {
        setShowCommunityEditor,
        setPreSetCommunityName,
        setPreSetCommunityId,
        setShowChannelEditor,
    } = useCommunity();

    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    const handleClickOutside = (event) => {
        if (
            dropdownRef.current &&
            !dropdownRef.current.contains(event.target)
        ) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        if (isOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isOpen]);

    const handleNewCommunity = () => {
        setPreSetCommunityName("");
        setShowCommunityEditor(true);
        setIsOpen(false);
    };

    const handleNewChannel = () => {
        setPreSetCommunityId(0);
        setShowChannelEditor(true);
        setIsOpen(false);
    };

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
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
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                sx={{color: "white"}}
            >
                <AddIcon color="!white" />
            </IconButton>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                'aria-labelledby': 'basic-button',
                }}
            >
                <MenuItem onClick={handleNewCommunity}>{/* Add Community */}コミュニティを追加</MenuItem>
                <MenuItem onClick={handleNewChannel}>{/* Add Channel */}チャンネルを追加</MenuItem>
                <MenuItem onClick={handleClose}>{/* Join Community */}コミュニティに参加</MenuItem>
            </Menu>
        </Box>
    );
};

export default ChannelSidebar;
