import { memo, useCallback, useState } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import clsx from "clsx";
import { Avatar } from "@mui/material";
import { stringAvatar } from "../../helper/func";
import { useCommunity } from "../../../contexts/CommunityContext";

const CSidebarNavList = (props) => {
    const classes = useStyles();
    const { setShowChannelEditor, setPreSetCommunityId } = useCommunity();

    const count = 0;

    const [isMenuExtended, setIsMenuExtended] = useState(false);

    const handleMainMenuAction = useCallback(() => {
        setIsMenuExtended(!isMenuExtended);
    }, [isMenuExtended]);

    const handleMainSubMenuAction = useCallback(() => {
        setShowChannelEditor(false);
    }, [setShowChannelEditor]);

    const handleClickNew = useCallback(() => {
        setPreSetCommunityId(props.data.id);
        setShowChannelEditor(true);
    }, [setPreSetCommunityId, setShowChannelEditor, props]);

    return (
        <li
            className={clsx("nav-item", classes.navItem, {
                "menu-open": isMenuExtended,
            })}
        >
            {props.data.children ? (
                <div
                    className={clsx("nav-link nav-link-font", classes.menuItem)}
                    onClick={handleMainMenuAction}
                >
                    <Avatar
                        variant="rounded"
                        {...stringAvatar({
                            name: props.data.title,
                            src: props.data.icon,
                            sx: {
                                color: "black",
                                width: props.page ? 28 : 24,
                                height: props.page ? 28 : 24,
                            },
                        })}
                    />
                    <p>
                        {props.data.title}
                        <i className="right fas fa-angle-left" />
                    </p>
                </div>
            ) : (
                <Link
                    to={`/${props.path}/${props.data.id}`}
                    className={clsx("nav-link nav-link-font", classes.menuItem)}
                    onClick={handleMainSubMenuAction}
                >
                    <i
                        className="far fa-circle nav-icon"
                        style={{ minWidth: 24, width: 24 }}
                    />
                    <p>{props.data.title}</p>
                </Link>
            )}
            {isMenuExtended && (
                <ul className="nav nav-treeview">
                    {props.data.children &&
                        props.data.children.map((submenu, i) => (
                            <CSidebarNavList
                                data={submenu}
                                page={props.page}
                                path={props.page ? "communities" : "channels"}
                                key={i}
                                submenu="active"
                            />
                        ))}
                    <div
                        className={clsx(
                            "nav-link nav-link-font",
                            classes.menuItem
                        )}
                        onClick={handleClickNew}
                    >
                        <i
                            className="far fa-plus nav-icon"
                            style={{ minWidth: 24, width: 24 }}
                        />
                        <p>チャンネルを作成</p>
                    </div>
                </ul>
            )}
            {count > 0 && <div className={classes.countBox}>{count}</div>}
        </li>
    );
};

export default memo(CSidebarNavList);

const useStyles = makeStyles((theme) => ({
    navItem: {
        position: "relative",
    },
    countBox: {
        position: "absolute",
        top: 8,
        right: 8,
        width: 16,
        minWidth: 16,
        height: 16,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 16,
        backgroundColor: "#FFA",
        fontSize: 12,
        color: "#333",
    },
    menuItem: {
        display: "flex",
        alignItems: "center",
        gap: 4,
        cursor: "pointer",
    },
}));
