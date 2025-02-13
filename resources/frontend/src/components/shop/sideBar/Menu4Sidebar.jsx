import { useMemo } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import clsx from "clsx";
import { selectorSChannel } from "../../../reduxStore";
import { useStyles } from "./CSidebarNavList";

const Menu4Sidebar = () => {
    const channels = useSelector(selectorSChannel.handleGetSChannels);

    const menuItems = useMemo(() => {
        if (channels && Array.isArray(channels)) {
            return channels.map((item) => ({
                id: item.id,
                path: "#",
                title: item.name,
                user_id: item.user_id,
                icon: item.icon,
                type: item.type,
            }));
        } else return [];
    }, [channels]);

    const menu4Items = useMemo(() => {
        if (menuItems && Array.isArray(menuItems)) {
            return menuItems.filter(({ type }) => type == 4);
        } else return [];
    }, [menuItems]);

    const menu5Items = useMemo(() => {
        if (menuItems && Array.isArray(menuItems)) {
            return menuItems.filter(({ type }) => type == 5);
        } else return [];
    }, [menuItems]);

    const menu6Items = useMemo(() => {
        if (menuItems && Array.isArray(menuItems)) {
            return menuItems.filter(({ type }) => type == 6);
        } else return [];
    }, [menuItems]);

    return (
        <>
            <ul
                className="nav nav-pills nav-sidebar flex-column"
                data-widget="treeview"
                role="menu"
                data-accordion="false"
            >
                {menu4Items.map((menu) => (
                    <MenuItem menu={menu} key={menu.id} />
                ))}
            </ul>
            <ul
                className="nav nav-pills nav-sidebar flex-column side-menu-separate"
                data-widget="treeview"
                role="menu"
                data-accordion="false"
            >
                {menu5Items.map((menu) => (
                    <MenuItem menu={menu} key={menu.id} />
                ))}
            </ul>
            <ul
                className="nav nav-pills nav-sidebar flex-column side-menu-separate"
                data-widget="treeview"
                role="menu"
                data-accordion="false"
            >
                {menu6Items.map((menu) => (
                    <MenuItem menu={menu} key={menu.id} />
                ))}
            </ul>
        </>
    );
};

export default Menu4Sidebar;

const MenuItem = ({ menu }) => {
    const classes = useStyles();
    const unreads = useSelector(selectorSChannel.handleGetUnreadPosts);

    const count =
        unreads && Array.isArray(unreads)
            ? unreads.filter(({ channel_id }) => channel_id == menu.id).length
            : 0;

    const handleMainMenuAction = () => {};

    return (
        <li className={clsx("nav-item", classes.navItem)}>
            <Link
                to={`/${menu.type > 5 ? "s" : ""}schannels/${menu.id}`}
                className={clsx(
                    "CSidebarNavListItem nav-link nav-link-font",
                    classes.menuItem
                )}
                onClick={handleMainMenuAction}
            >
                <i
                    className="far fa-circle nav-icon"
                    style={{ minWidth: 24, width: 24 }}
                />
                <p>{menu.title}</p>
            </Link>
            {count > 0 && <div className={classes.countBox}>{count}</div>}
        </li>
    );
};
