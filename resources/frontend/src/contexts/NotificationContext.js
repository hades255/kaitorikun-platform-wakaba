import React, {
    createContext,
    useCallback,
    useContext,
    useEffect,
    useState,
} from "react";

const NotificationContext = createContext();

export const useNotification = () => useContext(NotificationContext);

export const NotificationProvider = ({ children }) => {
    const [permission, setPermission] = useState(null);
    const [unreadTab, setUnreadTab] = useState({
        todo: false,
        com: false,
        chat: false,
        scom: [],
    });

    const requestNotificationPermission = useCallback(() => {
        if ("Notification" in window) {
            Notification.requestPermission().then((permission) => {
                setPermission(permission);
            });
        }
    }, []);

    const showNotification = (title, options) => {
        if (
            ("Notification" in window && permission === "default") ||
            !permission
        ) {
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
        if (key == "scom")
            setUnreadTab({ ...unreadTab, scom: [...unreadTab.scom, value] });
        else setUnreadTab({ ...unreadTab, [key]: value });
    };

    const clearScomUnreadTab = (key, value) => {
        setUnreadTab({
            ...unreadTab,
            scom: unreadTab.scom.filter((item) => item[key] != value),
        });
    };

    useEffect(() => {
        requestNotificationPermission();
    }, [requestNotificationPermission]);

    return (
        <NotificationContext.Provider
            value={{
                requestNotificationPermission,
                showNotification,
                unreadTab,
                updateUnreadTab,
                clearScomUnreadTab,
            }}
        >
            {children}
        </NotificationContext.Provider>
    );
};
