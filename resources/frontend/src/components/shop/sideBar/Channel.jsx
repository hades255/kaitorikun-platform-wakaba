import React, { useCallback, useEffect, useMemo } from "react";
import axios from "axios";
import { List, ListItem, ListItemText, Typography } from "@mui/material";
import { Add as AddIcon } from "@mui/icons-material";
import { API_ROUTE } from "../../../config";
import { useAuth } from "../../../contexts/AuthContext";
import { actionChannel, selectorChannel } from "../../../reduxStore";
import { Link, useDispatch, useSelector } from "../../../components";

const ChannelSidebar = () => {
    const dispatch = useDispatch();
    const channels = useSelector(selectorChannel.handleGetChannels);
    const channel = useSelector(selectorChannel.handleGetChannel);

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

    const handleClick = useCallback(() => {
        dispatch(
            actionChannel.handleSelectChannel({
                channel: null,
                posts: [],
                users: [],
            })
        );
    }, [dispatch, channel]);

    return (
        <>
            <List>
                <Link to="/communities/new">
                    <ListItem onClick={handleClick}>
                        <AddIcon color="!white" />
                        <ListItemText primary="チャンネルを作成" />
                        {/* <ListItemText primary="Create Channel" /> */}
                    </ListItem>
                </Link>
                <Link to="/communities">
                    {channels.map((item, index) => (
                        <ChannelItem
                            key={index}
                            channel={item}
                            active={channel && channel.id == item.id}
                        />
                    ))}
                </Link>
            </List>
            <PublicChannels channel={channel} />
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
                bgcolor: active ? "#fff2" : "#0000",
                color: "white",
                cursor: "pointer",
            }}
        >
            <ListItemText primary={channel.name} />
        </ListItem>
    );
};

const PublicChannels = ({ channel }) => {
    const { auth } = useAuth();
    const _channels = useSelector(selectorChannel.handleGetPublicChannels);
    const channels = useMemo(
        () => _channels.filter(({ user_id }) => user_id !== auth.id),
        [auth, _channels]
    );

    return (
        channels.length > 0 && (
            <>
                <Typography variant="p" fontSize={12} color="white" pl={2}>
                    {/* Public Channels */}
                    公開チャンネル
                </Typography>
                <List>
                    <Link to="/communities">
                        {channels.map((item, index) => (
                            <ChannelItem
                                key={index}
                                channel={item}
                                active={channel && channel.id == item.id}
                            />
                        ))}
                    </Link>
                </List>
            </>
        )
    );
};

export default ChannelSidebar;
