// src/PusherContext.js

import React, { createContext, useContext, useEffect, useState } from "react";
import Pusher from "pusher-js";
import { PUSHER_APP_CLUSTER, PUSHER_APP_KEY } from "../config";

const PusherContext = createContext();

export const PusherProvider = ({ children }) => {
    const [pusher, setPusher] = useState(null);
    const [channel, setChannel] = useState(null);

    useEffect(() => {
        // Initialize Pusher
        const pusherInstance = new Pusher(PUSHER_APP_KEY, {
            cluster: PUSHER_APP_CLUSTER,
            encrypted: true,
        });

        setPusher(pusherInstance);

        return () => {
            pusherInstance.disconnect(); // Clean up on unmount
        };
    }, []);

    const subscribeToChannel = (channelName) => {
        if (pusher) {
            const newChannel = pusher.subscribe(channelName);
            setChannel(newChannel);
            return newChannel;
        }
    };

    const bindEvent = (eventName, callback) => {
        if (channel) {
            channel.bind(eventName, callback);
        }
    };

    const unbindEvent = (eventName) => {
        if (channel) {
            channel.unbind(eventName);
        }
    };

    return (
        <PusherContext.Provider
            value={{ subscribeToChannel, bindEvent, unbindEvent }}
        >
            {children}
        </PusherContext.Provider>
    );
};

export const usePusher = () => {
    return useContext(PusherContext);
};
