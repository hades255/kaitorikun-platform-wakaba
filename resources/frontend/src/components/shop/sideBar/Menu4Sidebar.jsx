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
            return channels
                .sort((a, b) => {
                    if (a.type > b.type) return 1;
                    if (a.type < b.type) return -1;
                    return 0;
                })
                .map((item) => ({
                    id: item.id,
                    path: "#",
                    title: item.name,
                    user_id: item.user_id,
                    icon: item.icon,
                    type: item.type,
                }));
        } else return [];
    }, [channels]);

    return (
        <>
            <ul
                className="nav nav-pills nav-sidebar flex-column"
                data-widget="treeview"
                role="menu"
                data-accordion="false"
            >
                {menuItems.map((menu) => (
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
                to={`/schannels/${menu.id}`}
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
