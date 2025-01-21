import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import api from "../../api";
import { API_ROUTE } from "../../config";
import { useAuth } from "../../contexts/AuthContext";
import { usePusher } from "../../contexts/PusherContext";
import { useNotification } from "../../contexts/NotificationContext";
import { actionChannel } from "../../reduxStore";
import { actionChat } from "../../reduxStore/actions/chat_action";

const Notifications = () => {
    const dispatch = useDispatch();
    const { auth } = useAuth();
    const { showNotification } = useNotification();
    const { subscribeToChannel, bindEvent, unbindEvent } = usePusher();

    useEffect(() => {
        const channel = subscribeToChannel("channel");

        const handleChannelCreated = (data) => {
            if (data && data.channel) {
                dispatch(actionChannel.handleAddPublicChannel(data.channel));
                if (data.name)
                    showNotification("新しいチャンネル", {
                        message: `${data.name} さんがチャンネルを作成しました.\n${data.channel.name}`,
                    });
            }
        };
        const handlePostCreated = (data) => {
            if (data && data.post) {
                dispatch(actionChannel.handleAddPostToChannel(data.post));
                if (data.name)
                    showNotification("新しい投稿", {
                        message: `${data.name} さんが投稿を作成しました.\n${data.post.title}`,
                    });
            }
        };
        const handleReplyToPost = (data) => {
            if (data && data.reply) {
                dispatch(actionChannel.handleReplyPost(data.reply));
            }
        };
        const handleAddReactionToPost = (data) => {
            if (data && data.reaction) {
                dispatch(actionChannel.handleAddREACTION(data.reaction));
            }
        };
        const handleRemoveReactFromPost = (data) => {
            if (data && data.reaction) {
                dispatch(actionChannel.handleRemoveREACTION(data.reaction));
            }
        };

        const handleNewChat = (data) => {
            if (
                auth &&
                data &&
                data.chat &&
                (data.chat.from == auth.id || data.chat.to == auth.id)
            )
                dispatch(actionChat.handleReceiveChat(data.chat));
            if (data.name)
                showNotification("新しいメッセージ", {
                    message: `${data.name} さんが新しいメッセージを送信しました.`,
                });
        };

        bindEvent("channel.created", handleChannelCreated);
        bindEvent("channel.post.created", handlePostCreated);
        bindEvent("channel.post.reply", handleReplyToPost);
        bindEvent("channel.post.reaction.created", handleAddReactionToPost);
        bindEvent("channel.post.reaction.deleted", handleRemoveReactFromPost);

        bindEvent("channel.chat.created", handleNewChat);

        return () => {
            unbindEvent("channel.created");
            unbindEvent("channel.post.created");
            unbindEvent("channel.post.reply");
            unbindEvent("channel.post.reaction.created");
            unbindEvent("channel.post.reaction.deleted");

            unbindEvent("channel.chat.created");
            if (channel) {
                channel.unsubscribe();
            }
        };
    }, [
        dispatch,
        showNotification,
        subscribeToChannel,
        bindEvent,
        unbindEvent,
        auth,
    ]);

    useEffect(() => {
        if (auth) {
            //  todo    get notifications
            const getUnreadNotifications = async () => {
                try {
                } catch (error) {
                    console.log(error);
                }
            };
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
            const getMineCommunities = async () => {
                try {
                    const response = await api.get(`communities/mine`);
                    dispatch(
                        actionChannel.handleSetChannel(
                            response.data.communities
                        )
                    );
                } catch (error) {
                    console.log(error);
                }
            };
            getUsers();
            getMyChats();
            getMineCommunities();
        }
    }, [dispatch, auth]);

    useEffect(() => {
        const fetchPublicCommunities = async () => {
            try {
                const response = await axios.get(
                    `${API_ROUTE}communities/public`
                );
                dispatch(
                    actionChannel.handleSetPublicChannel(
                        response.data.communities
                    )
                );
            } catch (err) {
                console.log(err);
            }
        };
        fetchPublicCommunities();
    }, [dispatch]);

    return <></>;
};

export default Notifications;
