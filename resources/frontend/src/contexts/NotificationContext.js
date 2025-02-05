import React, { createContext, useContext, useState } from "react";

const NotificationContext = createContext();

export const useNotification = () => useContext(NotificationContext);

export const NotificationProvider = ({ children }) => {
    const [permission, setPermission] = useState(Notification.permission);
    const [unreadTab, setUnreadTab] = useState({ todo: false, com: false, chat: false });

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
            new Notification(title, {
                ...options,
                // icon: options.avatar,
                icon: "https://icons.veryicon.com/png/o/miscellaneous/two-color-icon-library/user-286.png",
                body: options.message,
            });
        }
    };

    const updateUnreadTab = (key, value) => {
        setUnreadTab({ ...unreadTab, [key]: value });
    };

    return (
        <NotificationContext.Provider
            value={{
                requestNotificationPermission,
                showNotification,
                unreadTab,
                updateUnreadTab,
            }}
        >
            {children}
        </NotificationContext.Provider>
    );
};
