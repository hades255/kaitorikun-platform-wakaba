import React, { createContext, useContext, useState } from "react";

const NotificationContext = createContext();

export const useNotification = () => useContext(NotificationContext);

export const NotificationProvider = ({ children }) => {
    const [permission, setPermission] = useState(Notification.permission);

    const requestNotificationPermission = () => {
        if ("Notification" in window) {
            Notification.requestPermission().then((permission) => {
                setPermission(permission);
            });
        }
    };

    const showNotification = (title, options) => {
        if ("Notification" in window && permission === "default") {
            requestNotificationPermission();
        }
        if ("Notification" in window && permission === "granted") {
            new Notification(title, options);
        }
    };

    return (
        <NotificationContext.Provider
            value={{ requestNotificationPermission, showNotification }}
        >
            {children}
        </NotificationContext.Provider>
    );
};
