import { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import clsx from "clsx";
import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useNotification } from "../../../contexts/NotificationContext";
import { Link, Route, React, getItem, useDispatch } from "../../../components";
import menu1 from "./menu1";
import menu2 from "./menu2";
import menu3 from "./menu3";
import ChatSidebar from "./Chat";
import ChannelSidebar, { AddNewCommunityButton } from "./Channel";
import SidebarNavList from "./SidebarNavList";
import CSidebarNavList from "./CSidebarNavList";

const tabs = [
    {
        title: "仕事",
        url: "/todo",
    },
    {
        title: "新着",
        url: "/communities",
    },
    {
        title: "チャット",
        url: "/chat",
    },
    {
        title: "カレンダー",
        url: "/calendar",
    },
];

const Sidebar = (props) => {
    const dispatch = useDispatch();
    const [roleMenu, setRoleMenu] = useState(menu1);
    const classes = useStyles();

    useEffect(() => {
        let userData = getItem("userdata");
        if (userData.role <= 2) {
            let newMenu = [];
            menu1?.forEach((element) => {
                if (element.title != "退会") {
                    newMenu.push(element);
                }
            });
            setRoleMenu(newMenu);
        } else {
            let newMenu = [];
            menu1?.forEach((element) => {
                if (element.title != "スタッフ登録") {
                    newMenu.push(element);
                }
            });
            setRoleMenu(newMenu);
        }
    }, []);

    return (
        <aside
            className={clsx(
                "main-sidebar main-sidebar-top sidebar-dark-primary elevation-4",
                classes.leftSideBar
            )}
        >
            <div id="sidebar_tab" className="sidebar-header pt-3">
                <div className="tabs">
                    {tabs.map((item) => (
                        <TabItem key={item.title} tab={item} props={props} />
                    ))}
                </div>
            </div>
            <div className="sidebar">
                {props.history.location.pathname.includes("/communities") ? (
                    <nav className={clsx("mt-2")}>
                        <ChannelSidebar />
                    </nav>
                ) : props.history.location.pathname === "/chat" ? (
                    <ChatSidebar />
                ) : props.history.location.pathname === "/calendar" ? (
                    <></>
                ) : (
                    <nav className={clsx("mt-2")}>
                        <ul
                            className="nav nav-pills nav-sidebar flex-column"
                            data-widget="treeview"
                            role="menu"
                            data-accordion="false"
                        >
                            {roleMenu.map((menu, i) => (
                                <Route
                                    path={menu.path}
                                    exact={menu.exact}
                                    key={i}
                                    children={({ match }) => (
                                        <SidebarNavList data={menu} key={i} />
                                    )}
                                />
                            ))}
                        </ul>
                        <ul
                            className="nav nav-pills nav-sidebar flex-column"
                            data-widget="treeview"
                            role="menu"
                            data-accordion="false"
                        >
                            {menu2.map((menu, i) => (
                                <Route
                                    path={menu.path}
                                    exact={menu.exact}
                                    key={i}
                                    children={({ match }) => (
                                        <SidebarNavList data={menu} key={i} />
                                    )}
                                />
                            ))}
                        </ul>
                        <ul
                            className="nav nav-pills nav-sidebar flex-column side-menu-separate"
                            data-widget="treeview"
                            role="menu"
                            data-accordion="false"
                        >
                            {menu3.map((menu, i) => (
                                <Route
                                    path={menu.path}
                                    exact={menu.exact}
                                    key={i}
                                    children={({ match }) => (
                                        <SidebarNavList data={menu} key={i} />
                                    )}
                                />
                            ))}
                        </ul>
                        <ul
                            className="nav nav-pills nav-sidebar flex-column"
                            data-widget="treeview"
                            role="menu"
                            data-accordion="false"
                        >
                            <li className="nav-item">
                                <div
                                    className="nav-link nav-link-font"
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        gap: 4,
                                        cursor: "pointer",
                                    }}
                                >
                                    <AddNewCommunityButton page={false} />
                                    <p>生駒OOOOOOOO店</p>
                                </div>
                            </li>
                        </ul>
                        <ChannelSidebar page={false} />
                    </nav>
                )}
            </div>
        </aside>
    );
};

export default withRouter(Sidebar);

const TabItem = ({ tab, props }) => {
    const { unreadTab, updateUnreadTab } = useNotification();

    const handleClick = () => {
        if (
            !props.history.location.pathname.includes("/communities") &&
            !props.history.location.pathname.includes("/chat")
        )
            return;
        updateUnreadTab(
            [
                props.history.location.pathname.includes("/communities")
                    ? "com"
                    : props.history.location.pathname.includes("/chat")
                    ? "chat"
                    : "todo",
            ],
            false
        );
    };

    return (
        <Link
            onClick={handleClick}
            to={tab.url}
            className={clsx({
                active:
                    props.history.location.pathname.includes(tab.url) ||
                    (tab.url == "/todo" &&
                        !props.history.location.pathname.includes(
                            "/communities"
                        ) &&
                        !props.history.location.pathname.includes("/chat") &&
                        !props.history.location.pathname.includes("/calendar")),
            })}
            style={{
                position: "relative",
            }}
        >
            {tab.title}
            {/* <div className="absolute top-1 right-1 w-4 min-w-4 h-4 rounded-full bg-red-600 text-white text-xs flex justify-center items-center">
                0
            </div> */}
            {((!props.history.location.pathname.includes("/communities") &&
                tab.url == "/communities" &&
                unreadTab?.com) ||
                (!props.history.location.pathname.includes("/chat") &&
                    tab.url == "/chat" &&
                    unreadTab?.chat)) && (
                <Box
                    sx={{
                        position: "absolute",
                        top: 4,
                        right: 4,
                        width: 16,
                        minWidth: 16,
                        height: 16,
                        borderRadius: 16,
                        bgcolor: "#F00C",
                    }}
                ></Box>
            )}
        </Link>
    );
};

const useStyles = makeStyles((theme) => ({
    leftSideBar: {
        maxHeight: "calc(100vh - 120px) !important",
        display: "flex",
        flexDirection: "column",
    },
}));
