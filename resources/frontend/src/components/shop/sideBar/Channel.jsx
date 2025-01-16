import React, { useCallback, useEffect } from "react";
import { List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import { Add as AddIcon } from "@mui/icons-material";
import { Link, useDispatch, useSelector } from "../../../components";
import { actionChannel, selectorChannel } from "../../../reduxStore";

const ChannelSidebar = () => {
    const dispatch = useDispatch();
    const channels = useSelector(selectorChannel.handleGetChannels);
    const channel = useSelector(selectorChannel.handleGetChannel);

    useEffect(() => {
        return () => {
            dispatch(actionChannel.handleSelectChannel(null));
        };
    }, [dispatch]);

    const handleClick = useCallback(() => {
        dispatch(actionChannel.handleSelectChannel(null));
    }, [dispatch, channel]);

    return (
        <>
            <List>
                <Link to="/channels/new">
                    <ListItem onClick={handleClick}>
                        <ListItemIcon>
                            <AddIcon />
                        </ListItemIcon>
                        <ListItemText primary="Create Channel" />
                    </ListItem>
                </Link>
                <Link to="/channels">
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
    );
};

const ChannelItem = ({ channel, active }) => {
    const dispatch = useDispatch();

    const handleClickChannel = useCallback(() => {
        dispatch(actionChannel.handleSelectChannel(channel.id));
    }, [dispatch, channel]);

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

export default ChannelSidebar;
