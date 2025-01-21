import React, {
    useCallback,
    useEffect,
    useMemo,
    useRef,
    useState,
} from "react";
import axios from "axios";
import clsx from "clsx";
import { List, ListItem, ListItemText, Typography } from "@mui/material";
import { Add as AddIcon } from "@mui/icons-material";
import { API_ROUTE } from "../../../config";
import { useAuth } from "../../../contexts/AuthContext";
import { useCommunity } from "../../../contexts/CommunityContext";
import { actionChannel, selectorChannel } from "../../../reduxStore";
import { Link, useDispatch, useSelector } from "../../../components";

const ChannelSidebar = () => {
    const dispatch = useDispatch();
    const communities = useSelector(selectorChannel.handleGetCommunities);
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
                <AddNewButton />
                {/* <Link to="/communities/new">
                    <ListItem onClick={handleClick}>
                        <AddIcon color="!white" />
                        <ListItemText primary="チャンネルを作成" />
                    </ListItem>
                </Link> */}
                <Link to="/communities">
                    {communities.map((item, index) => (
                        <CommunityItem key={index} com={item} />
                    ))}
                </Link>
            </List>
            <PublicChannels channel={channel} />
        </>
    );
};

const CommunityItem = ({ com, active }) => {
    const [show, setShow] = useState(false);

    const handleClick = () => {
        setShow(!show);
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
                <span className="border w-5 min-w-5 h-5 p-0 flex justify-center items-center rounded mr-2">
                    {show ? "-" : "+"}
                </span>
                <ListItemText primary={com.name} />
            </ListItem>
            {show &&
                com.channels?.map((item) => (
                    <ChannelItem key={item.id} channel={item} />
                ))}
        </>
    );
};

const ChannelItem = ({ channel }) => {
    const dispatch = useDispatch();
    const selectedChannel = useSelector(selectorChannel.handleGetChannel);
    const active = channel?.id == selectedChannel?.id;

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

const AddNewButton = () => {
    const { setShowCommunityEditor, setPreSetCommunityName } = useCommunity();

    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

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

    return (
        <>
            <div className="px-4 py-2 flex justify-end">
                <div
                    className="relative inline-block text-left"
                    ref={dropdownRef}
                >
                    <div>
                        <button
                            onClick={toggleDropdown}
                            className="text-gray-200 border !border-gray-500 bg-gray-700 rounded flex justify-center items-center"
                        >
                            <AddIcon color="!white" />
                        </button>
                    </div>
                    <div
                        className={clsx(
                            `origin-top-right absolute right-0 mt-2 w-44 rounded-md shadow-lg bg-gray-600 ring-1 ring-black ring-opacity-5 transition-transform transform z-50`,
                            {
                                "scale-100 opacity-100 visible": isOpen,
                                "scale-95 opacity-0 invisible": !isOpen,
                            }
                        )}
                        style={{ transitionDuration: "150ms" }}
                    >
                        <div className="py-1">
                            <div
                                onClick={handleNewCommunity}
                                className="block px-4 py-2 text-sm text-white hover:bg-gray-400 cursor-pointer"
                            >
                                {/* Add Community */}コミュニティを追加
                            </div>
                            <a
                                href="#"
                                className="block px-4 py-2 text-sm text-white hover:bg-gray-400"
                            >
                                {/* Add Channel */}チャンネルを追加
                            </a>
                            <a
                                href="#"
                                className="block px-4 py-2 text-sm text-white hover:bg-gray-400"
                            >
                                {/* Join Community */}コミュニティに参加
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ChannelSidebar;
