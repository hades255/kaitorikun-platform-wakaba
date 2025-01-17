import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useAuth } from "../../contexts/AuthContext";
import { usePusher } from "../../contexts/PusherContext";
import { actionChannel } from "../../reduxStore";

const Notifications = () => {
    const dispatch = useDispatch();
    const { auth } = useAuth();
    const { subscribeToChannel, bindEvent, unbindEvent } = usePusher();

    useEffect(() => {
        const channel = subscribeToChannel("channel");

        const handleChannelCreated = (data) => {
            if (data && data.channel)
                dispatch(actionChannel.handleAddChannel(data.channel));
        };
        const handlePostCreated = (data) => {
            if (data && data.post)
                dispatch(actionChannel.handleAddPostToChannel(data.post));
        };
        const handleReplyToPost = (data) => {
            if (data && data.reply)
                dispatch(actionChannel.handleReplyPost(data.reply));
        };
        const handleAddReactionToPost = (data) => {
            if (data && data.reaction)
                dispatch(actionChannel.handleAddREACTION(data.reaction));
        };
        const handleRemoveReactFromPost = (data) => {
            if (data && data.reaction)
                dispatch(actionChannel.handleRemoveREACTION(data.reaction));
        };

        bindEvent("channel.created", handleChannelCreated);
        bindEvent("channel.post.created", handlePostCreated);
        bindEvent("channel.post.reply", handleReplyToPost);
        bindEvent("channel.post.reaction.created", handleAddReactionToPost);
        bindEvent("channel.post.reaction.deleted", handleRemoveReactFromPost);

        return () => {
            unbindEvent("channel.created");
            unbindEvent("channel.post.created");
            unbindEvent("channel.post.reply");
            unbindEvent("channel.post.reaction.created");
            unbindEvent("channel.post.reaction.deleted");
            if (channel) {
                channel.unsubscribe();
            }
        };
    }, [subscribeToChannel, bindEvent, unbindEvent]);

    return <></>;
};

export default Notifications;
