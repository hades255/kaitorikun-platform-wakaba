import { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import clsx from "clsx";
import { Link, Route, React, getItem, useDispatch } from "../../../components";
import menu1 from "./menu1";
import menu2 from "./menu2";
import menu3 from "./menu3";
import menu4 from "./menu4";
import menu5 from "./menu5";
import menu6 from "./menu6";
import ChatSidebar from "./Chat";
import ChannelSidebar from "./Channel";
import SidebarNavList from "./SidebarNavList";

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
];

const Sidebar = (props) => {
    const dispatch = useDispatch();
    const [roleMenu, setRoleMenu] = useState(menu1);

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
        <aside className="main-sidebar main-sidebar-top sidebar-dark-primary elevation-4">
            <div id="sidebar_tab" className="sidebar-header pt-3">
                <div className="tabs">
                    {tabs.map((item) => (
                        <TabItem key={item.title} tab={item} props={props} />
                    ))}
                </div>
            </div>
            <div className="sidebar">
                {props.history.location.pathname.includes("/communities") ? (
                    <ChannelSidebar />
                ) : props.history.location.pathname === "/chat" ? (
                    <ChatSidebar />
                ) : (
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
            </div>
        </aside>
    );
};

export default withRouter(Sidebar);

const TabItem = ({ tab, props }) => {
    return (
        <Link
            to={tab.url}
            className={clsx("relative", {
                active:
                    props.history.location.pathname.includes(tab.url) ||
                    (tab.url == "/todo" &&
                        !props.history.location.pathname.includes(
                            "/communities"
                        ) &&
                        !props.history.location.pathname.includes("/chat")),
            })}
        >
            {tab.title}
            {/* <div className="absolute top-1 right-1 w-4 min-w-4 h-4 rounded-full bg-red-600 text-white text-xs flex justify-center items-center">
                0
            </div> */}
        </Link>
    );
};
