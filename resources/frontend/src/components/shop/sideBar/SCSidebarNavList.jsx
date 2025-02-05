import { memo, useEffect, useMemo, useState } from "react";
import { Link, Route } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import { useCommunity } from "../../../contexts/CommunityContext";
import clsx from "clsx";

const SCSidebarNavList = (props) => {
    const classes = useStyles();
    const { schannels, handleClearSChannels } = useCommunity();
    const icon = props.data.icon && <i className={props.data.icon} />;
    const titlesub = props.data.title && (
        <p>
            {props.data.title} <i className="right fas fa-angle-left" />
        </p>
    );
    const title = props.data.title && <p>{props.data.title}</p>;

    const count = useMemo(
        () => schannels[props.data.id] || 0,
        [schannels, props]
    );
    console.log(schannels, count);

    const [isMenuExtended, setIsMenuExtended] = useState(false);
    const [isExpandable, setIsExpandable] = useState(false);

    const handleMainMenuAction = () => {
        if (isExpandable) {
            toggleMenu();
            return;
        }
    };

    const toggleMenu = () => {
        setIsMenuExtended(!isMenuExtended);
    };

    const handleClick = () => {
        if (schannels[props.data.id] && schannels[props.data.id] > 0)
            handleClearSChannels(props.data.id);
    };

    useEffect(() => {
        setIsExpandable(
            Boolean(
                props && props.data.children && props.data.children.length > 0
            )
        );
    }, [props]);

    return (
        <Route
            path={`/schannel/${props.data.id}`}
            exact={props.data.exact}
            children={({ match }) => (
                <>
                    {props.data.navheader && (
                        <li className="nav-header">{props.data.title}</li>
                    )}
                    <li
                        className={clsx("nav-item", classes.navItem, {
                            "menu-open": isMenuExtended,
                        })}
                        onClick={handleClick}
                    >
                        {props.data.children ? (
                            <Link
                                to={`/schannel/${props.data.id}`}
                                className="nav-link nav-link-font"
                                onClick={handleMainMenuAction}
                                style={{ cursor: "pointer" }}
                            >
                                {icon} {titlesub}
                            </Link>
                        ) : props.data.navheader !== true ? (
                            <Link
                                to={`/schannel/${props.data.id}`}
                                className="nav-link nav-link-font"
                                onClick={handleMainMenuAction}
                                style={{ cursor: "pointer" }}
                            >
                                {props.submenu === "active" ? (
                                    <i className="far fa-circle nav-icon" />
                                ) : null}
                                {icon} {title}
                            </Link>
                        ) : null}

                        {props.data.children && (
                            <ul className="nav nav-treeview">
                                {props.data.children &&
                                    props.data.children.map((submenu, i) => (
                                        <SCSidebarNavList
                                            data={submenu}
                                            key={i}
                                            submenu="active"
                                        />
                                    ))}
                            </ul>
                        )}
                        {count > 0 && (
                            <div className={classes.countBox}>{count}</div>
                        )}
                    </li>
                </>
            )}
        />
    );
};

export default memo(SCSidebarNavList);

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
        backgroundColor: "red",
        fontSize: 12,
        color: "white",
    },
}));
