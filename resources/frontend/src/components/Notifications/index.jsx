import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import api from "../../api";
import myEcho from "../helper/Echo";
import { useAuth } from "../../contexts/AuthContext";
import { useNotification } from "../../contexts/NotificationContext";
import {
    actionChannel,
    actionSChannel,
    selectorChannel,
} from "../../reduxStore";
import { actionChat } from "../../reduxStore/actions/chat_action";

const Notifications = () => {
    const dispatch = useDispatch();
    const { auth } = useAuth();
    const { updateUnreadTab, showNotification } = useNotification();
    const coms = useSelector(selectorChannel.handleGetCommunities);

    const [comIds, setComIds] = useState([]);
    const [scomIds, setSComIds] = useState([]);

    useEffect(() => {
        setComIds(Array.isArray(coms) ? coms.map(({ id }) => id) : []);
        setSComIds(
            Array.isArray(coms)
                ? coms.filter(({ type }) => type).map(({ id }) => id)
                : []
        );
    }, [coms]);

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
                    if (data.name)
                        showNotification("新しいチャンネル", {
                            message: `${data.name} さんがチャンネルを作成しました.\n${data.channel.name}`,
                        });
                    dispatch(
                        actionChannel.handleAddUser({
                            id: data.channel.user_id,
                            name: data.name,
                        })
                    );
                    dispatch(actionChannel.handleAddChannel(data.channel));
                    if (scomIds?.includes(Number(data.channel.community_id)))
                        updateUnreadTab("scom", {
                            com: data.channel.community_id,
                            cha: data.channel.id,
                        });
                    else updateUnreadTab("com", true);
                }
            }
        };
        const handlePostCreated = (data) => {
            if (data && data.post && auth?.id != data.post.user_id) {
                if (
                    data.post.community_id == 0 ||
                    comIds?.includes(Number(data.post.community_id))
                ) {
                    if (data.name)
                        showNotification("新しい投稿", {
                            message: `${data.name} さんが投稿を作成しました.\n${data.post.title}`,
                        });
                    if (data.post.community_id == 0) {
                        dispatch(
                            actionSChannel.handleAddUser({
                                id: data.post.user_id,
                                name: data.name,
                            })
                        );
                        dispatch(actionSChannel.handleAddPost(data.post));
                    } else {
                        dispatch(
                            actionChannel.handleAddUser({
                                id: data.post.user_id,
                                name: data.name,
                            })
                        );
                        dispatch(
                            actionChannel.handleAddPostToChannel(data.post)
                        );
                        if (scomIds?.includes(Number(data.post.community_id)))
                            updateUnreadTab("scom", {
                                com: data.post.community_id,
                                cha: data.post.channel_id,
                            });
                        else updateUnreadTab("com", true);
                    }
                }
            }
        };
        const handleDeletePost = (data) => {
            if (data && data.post && auth?.id != data.post.user_id) {
                if (comIds?.includes(Number(data.post.community_id)))
                    dispatch(actionChannel.handleRemovePost(data.post.id));
                if (data.post.community_id == 0)
                    dispatch(actionSChannel.handlePostRemoved(data.post.id));
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
        const handleDeleteCommunity = (data) => {
            if (
                data &&
                data.community &&
                comIds?.includes(Number(data.community.id))
            ) {
                if (auth?.id != data.community.user_id) {
                    if (data.name)
                        showNotification("コミュニティを削除しました", {
                            message: `${data.name} がコミュニティを削除しました.\n${data.community.name}`,
                        });
                    dispatch(
                        actionChannel.handleRemoveCommunity(data.community)
                    );
                }
            }
        };
        const handleDeleteChannel = (data) => {
            if (
                data &&
                data.channel &&
                comIds?.includes(Number(data.channel.community_id))
            ) {
                if (auth?.id != data.channel.user_id) {
                    if (data.name)
                        showNotification("チャンネルを削除しました", {
                            message: `${data.name} がチャンネルを削除しました.\n${data.channel.name}`,
                        });
                    dispatch(actionChannel.handleRemoveChannel(data.channel));
                }
            }
        };

        // channel.listen(".channel.community.created", handleCommunityCreated);
        channel.listen(".channel.created", handleChannelCreated);
        channel.listen(".channel.post.created", handlePostCreated);
        channel.listen(".channel.post.deleted", handleDeletePost);
        channel.listen(".channel.chat.created", handleNewChat);
        channel.listen(".channel.community.removed", handleDeleteCommunity);
        channel.listen(".channel.removed", handleDeleteChannel);

        return () => {
            if (channel) {
                // channel.stopListening(".channel.community.created");
                channel.stopListening(".channel.created");
                channel.stopListening(".channel.post.created");
                channel.stopListening(".channel.post.deleted");
                channel.stopListening(".channel.chat.created");
                channel.stopListening(".channel.community.removed");
                channel.stopListening(".channel.removed");
            }
        };
    }, [dispatch, showNotification, updateUnreadTab, auth, comIds, scomIds]);

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
            const getMenusFunc = async () => {
                try {
                    const response = await api.get("schannels");
                    dispatch(actionSChannel.handleSetSChannels(response.data));
                } catch (error) {
                    console.log(error);
                }
            };
            getUsers();
            getMyChats();
            getMenusFunc();
            // getMineCommunities();
        }
    }, [dispatch, auth]);

    useEffect(() => {
        if (auth) {
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
            getJoinedCommunities();
        }
    }, [dispatch, auth]);

    return <></>;
};

export default Notifications;
