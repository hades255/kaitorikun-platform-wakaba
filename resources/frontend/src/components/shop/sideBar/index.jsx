import { useState, useEffect } from 'react';
import { Link, Route, React, getItem } from "../../../components";
import menu1 from "./menu1";
import menu2 from "./menu2";
import menu3 from "./menu3";
import menu4 from "./menu4";
import menu5 from "./menu5";
import menu6 from "./menu6";
import SidebarNavList from "./SidebarNavList";

const Sidebar = () => {
    const [roleMenu, setRoleMenu] = useState(menu1)
    useEffect(() => {
        let userData = getItem("userdata")
        if (userData.role <= 2) {
            let newMenu = [];
            menu1.forEach(element => {
                if (element.title != "退会") {
                    newMenu.push(element);
                }
            });
            setRoleMenu(newMenu);
        } else {
            let newMenu = [];
            menu1.forEach(element => {
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
                    <Link to="#" className="active">仕事</Link>
                    <Link to="#">新着</Link>
                    <Link to="#">チャット</Link>
                </div>
            </div>
            <div className="sidebar">
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
            </div>
        </aside>
    );
};

export default Sidebar;
