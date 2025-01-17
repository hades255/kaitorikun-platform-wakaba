import React, { useEffect, useState } from "react";
import { usePusher } from "../../contexts/PusherContext";

const Notifications = () => {
    const { subscribeToChannel, bindEvent, unbindEvent } = usePusher();

    useEffect(() => {
        const channel = subscribeToChannel("channel");
        console.log(channel);

        const handleChannelCreated = (data) => {
            console.log(data);
        };

        bindEvent("channel.created", handleChannelCreated);

        return () => {
            unbindEvent("channel.created");
            if (channel) {
                channel.unsubscribe(); // Clean up when component unmounts
            }
        };
    }, [subscribeToChannel, bindEvent, unbindEvent]);

    return <></>;
};

export default Notifications;
