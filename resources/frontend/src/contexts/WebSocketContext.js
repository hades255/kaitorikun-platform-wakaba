import React, { createContext, useContext, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { SOCKET_ROUTE } from "../config";

export const WebSocketContext = createContext(null);

export const WebSocketProvider = ({ children }) => {
    const dispatch = useDispatch();
    const [socket, setSocket] = useState({ readyState: null });

    useEffect(() => {
        const ws = new WebSocket(`ws://${SOCKET_ROUTE}chat`);

        ws.onopen = () => {
            console.log("WebSocket connection established.");
            setSocket(ws);
        };

        ws.onmessage = (event) => {
            console.log(event);
        };

        ws.onclose = () => {
            console.log("WebSocket connection closed.");
        };

        return () => {
            ws.close();
        };
    }, [dispatch]);

    return (
        <WebSocketContext.Provider value={{ socket }}>
            {children}
        </WebSocketContext.Provider>
    );
};

export const useWebSocket = () => useContext(WebSocketContext);
