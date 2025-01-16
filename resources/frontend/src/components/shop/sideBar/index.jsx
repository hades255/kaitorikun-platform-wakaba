import { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import { Link, Route, React, getItem, useDispatch } from "../../../components";
import menu1 from "./menu1";
import menu2 from "./menu2";
import menu3 from "./menu3";
import menu4 from "./menu4";
import menu5 from "./menu5";
import menu6 from "./menu6";
import SidebarNavList from "./SidebarNavList";
import ChatSidebar from "./Chat";
import ChannelSidebar from "./Channel";
import { actionChannel } from "../../../reduxStore";
import api from "../../../api";

const tabs = [
    {
        title: "仕事",
        url: "/todo",
    },
    {
        title: "新着",
        url: "/channels",
    },
    {
        title: "チャット",
        url: "/chat",
    },
];

const Sidebar = (props) => {
    const dispatch = useDispatch();
    const [roleMenu, setRoleMenu] = useState(menu1);

    useEffect(() => {
        const fetchChannels = async () => {
            try {
                const response = await api.get(`channels/getMine`);
                dispatch(
                    actionChannel.handleSetChannel(response.data.channels)
                );
            } catch (err) {
                console.log(err);
            }
        };
        fetchChannels();
    }, [dispatch]);

    useEffect(() => {
        let userData = getItem("userdata");
        if (userData.role <= 2) {
            let newMenu = [];
            menu1.forEach((element) => {
                if (element.title != "退会") {
                    newMenu.push(element);
                }
            });
            setRoleMenu(newMenu);
        } else {
            let newMenu = [];
            menu1.forEach((element) => {
                if (element.title != "スタッフ登録") {
                    newMenu.push(element);
                }
            });
            setRoleMenu(newMenu);
        }
    }, []);

    return (
        <aside className="main-sidebar main-sidebar-top sidebar-dark-primary elevation-4">
            <div id="sidebar_tab" className="sidebar-header pt-3">
                <div className="tabs">
                    {tabs.map((item) => (
                        <Link
                            key={item.url}
                            to={item.url}
                            className={
                                props.history.location.pathname.includes(
                                    item.url
                                )
                                    ? "active"
                                    : ""
                            }
                        >
                            {item.title}
                        </Link>
                    ))}
                </div>
            </div>
            <div className="sidebar">
                {props.history.location.pathname === "/todo" && (
                    <nav className="mt-2">
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
                            {menu4.map((menu, i) => (
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
                            {menu5.map((menu, i) => (
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
                            {menu6.map((menu, i) => (
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
                    </nav>
                )}
                {props.history.location.pathname.includes("/channels") && (
                    <ChannelSidebar />
                )}
                {props.history.location.pathname === "/chat" && <ChatSidebar />}
            </div>
        </aside>
    );
};

export default withRouter(Sidebar);
