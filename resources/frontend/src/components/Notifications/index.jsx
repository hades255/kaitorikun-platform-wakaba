import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import api from "../../api";
import myEcho from "../helper/Echo";
import { useAuth } from "../../contexts/AuthContext";
import { useCommunity } from "../../contexts/CommunityContext";
import { useNotification } from "../../contexts/NotificationContext";
import { actionChannel, selectorChannel } from "../../reduxStore";
import { actionChat } from "../../reduxStore/actions/chat_action";

const Notifications = () => {
    const dispatch = useDispatch();
    const { auth } = useAuth();
    const { updateUnreadTab, showNotification } = useNotification();
    const { handleAddSChannels } = useCommunity();
    const coms = useSelector(selectorChannel.handleGetCommunities);
    // const pubcoms = useSelector(selectorChannel.handleGetPublicCommunities);

    const [comIds, setComIds] = useState([]);

    useEffect(() => {
        setComIds(Array.isArray(coms) ? coms.map(({ id }) => id) : []);
    }, [coms]);

    // useEffect(() => {
    //     setComIds([
    //         ...(coms && coms.length > 0 ? coms.map(({ id }) => id) : []),
    //         ...(pubcoms && pubcoms.length > 0
    //             ? pubcoms.map(({ id }) => id)
    //             : []),
    //     ]);
    // }, [coms, pubcoms]);

    useEffect(() => {
        myEcho();
    }, []);

    useEffect(() => {
        const channel = window.Echo.channel("channel");

        const handleChannelCreated = (data) => {
            if (
                data &&
                data.channel &&
                comIds?.includes(Number(data.channel.community_id))
            ) {
                if (auth?.id != data.channel.user_id) {
                    updateUnreadTab("com", true);
                    dispatch(actionChannel.handleAddChannel(data.channel));
                    if (data.name)
                        showNotification("新しいチャンネル", {
                            message: `${data.name} さんがチャンネルを作成しました.\n${data.channel.name}`,
                        });
                }
            }
        };
        const handlePostCreated = (data) => {
            if (data && data.post && auth?.id != data.post.user_id) {
                if (comIds?.includes(Number(data.post.community_id))) {
                    if (data.name)
                        showNotification("新しい投稿", {
                            message: `${data.name} さんが投稿を作成しました.\n${data.post.title}`,
                        });
                    dispatch(actionChannel.handleAddPostToChannel(data.post));
                    updateUnreadTab("com", true);
                } else if (data.schannel) {
                    if (data.name)
                        showNotification("新しい投稿", {
                            message: `${data.name} さんが投稿を作成しました.\n${data.post.title}`,
                        });
                    updateUnreadTab("todo", true);
                    dispatch(actionChannel.handleAddPostToChannel(data.post));
                    handleAddSChannels(data.schannel);
                }
            }
        };
        const handleDeletePost = (data) => {
            if (
                data &&
                data.post &&
                auth?.id != data.post.user_id &&
                (comIds?.includes(Number(data.post.community_id)) ||
                    data.schannel)
            ) {
                dispatch(actionChannel.handleRemovePost(data.post.id));
            }
        };
        const handleNewChat = (data) => {
            if (
                auth &&
                data &&
                data.chat &&
                data.chat.to == auth?.id &&
                data.chat.from != auth?.id
            ) {
                dispatch(actionChat.handleReceiveChat(data.chat));
                updateUnreadTab("chat", true);
                if (data.name)
                    showNotification("新しいメッセージ", {
                        message: `${data.name} さんが新しいメッセージを送信しました.`,
                    });
            }
        };

        // channel.listen(".channel.community.created", handleCommunityCreated);
        channel.listen(".channel.created", handleChannelCreated);
        channel.listen(".channel.post.created", handlePostCreated);
        channel.listen(".channel.post.deleted", handleDeletePost);
        channel.listen(".channel.chat.created", handleNewChat);

        return () => {
            if (channel) {
                // channel.stopListening(".channel.community.created");
                channel.stopListening(".channel.created");
                channel.stopListening(".channel.post.created");
                channel.stopListening(".channel.post.deleted");
                channel.stopListening(".channel.chat.created");
            }
        };
    }, [
        dispatch,
        handleAddSChannels,
        showNotification,
        updateUnreadTab,
        auth,
        comIds,
    ]);

    useEffect(() => {
        if (auth) {
            //  todo    get notifications
            // const getUnreadNotifications = async () => {
            //     try {
            //     } catch (error) {
            //         console.log(error);
            //     }
            // };
            //  get all users
            const getUsers = async () => {
                try {
                    const response = await api.get("users");
                    dispatch(actionChat.handleSetUsers(response.data));
                } catch (error) {
                    console.log(error);
                }
            };
            //  get all chats
            const getMyChats = async () => {
                try {
                    const response = await api.get("chats");
                    dispatch(actionChat.handleSetChats(response.data));
                } catch (error) {
                    console.log(error);
                }
            };
            // const getMineCommunities = async () => {
            //     try {
            //         const response = await api.get(`communities/mine`);
            //         dispatch(
            //             actionChannel.handleSetCommunity(
            //                 response.data.communities
            //             )
            //         );
            //     } catch (error) {
            //         console.log(error);
            //     }
            // };
            const getJoinedCommunities = async () => {
                try {
                    const response = await api.get(`communities/joined`);
                    dispatch(
                        actionChannel.handleSetCommunity(
                            response.data.communities
                        )
                    );
                } catch (error) {
                    console.log(error);
                }
            };
            // const fetchPublicCommunities = async () => {
            //     try {
            //         const response = await api.get(
            //             `${API_ROUTE}communities/public`
            //         );
            //         dispatch(
            //             actionChannel.handleSetPublicCommunity(
            //                 response.data.communities
            //             )
            //         );
            //     } catch (err) {
            //         console.log(err);
            //     }
            // };
            // fetchPublicCommunities();
            getUsers();
            getMyChats();
            // getMineCommunities();
            getJoinedCommunities();
        }
    }, [dispatch, auth]);

    return <></>;
};

export default Notifications;
