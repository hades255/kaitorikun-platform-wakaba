import { memo, useCallback, useState } from "react";
import { Link } from "react-router-dom";
import clsx from "clsx";
import { makeStyles } from "@mui/styles";
import {
    Avatar,
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    IconButton,
    Menu,
    MenuItem,
} from "@mui/material";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { stringAvatar } from "../../helper/func";
import { useCommunity } from "../../../contexts/CommunityContext";
import { useNotification } from "../../../contexts/NotificationContext";
import "./CSidebarNavList.css";
import { ToastNotification } from "../../helper";
import api from "../../../api";
import { useDispatch } from "react-redux";
import { actionChannel } from "../../../reduxStore";
import { useAuth } from "../../../contexts/AuthContext";

const CSidebarNavList = (props) => {
    const dataId = props.data.id;
    const classes = useStyles();
    const { unreadTab, clearScomUnreadTab } = useNotification();
    const { setShowChannelEditor, setPreSetCommunityId } = useCommunity();

    const count = Array.isArray(unreadTab.scom)
        ? props.data.mood == "com"
            ? unreadTab.scom.filter(({ com }) => com == dataId).length
            : unreadTab.scom.filter(({ cha }) => cha == dataId).length
        : 0;

    const [isMenuExtended, setIsMenuExtended] = useState(false);

    const handleMainMenuAction = useCallback(() => {
        setIsMenuExtended(!isMenuExtended);
    }, [isMenuExtended]);

    const handleMainSubMenuAction = useCallback(() => {
        setShowChannelEditor(false);
        clearScomUnreadTab("cha", dataId);
    }, [setShowChannelEditor, clearScomUnreadTab, dataId]);

    const handleClickNew = useCallback(() => {
        setPreSetCommunityId(dataId);
        setShowChannelEditor(true);
    }, [setPreSetCommunityId, setShowChannelEditor, dataId]);

    return (
        <li
            className={clsx("nav-item", classes.navItem, {
                "menu-open": isMenuExtended,
            })}
        >
            {props.data.mood == "com" ? (
                <div
                    className={clsx(
                        "CSidebarNavListItem nav-link nav-link-font",
                        classes.menuItem
                    )}
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
                    <div className={"CSidebarNavListItem-setting"}>
                        <MoreButton data={props.data} />
                    </div>
                </div>
            ) : (
                <Link
                    to={`/${props.path}/${dataId}`}
                    className={clsx(
                        "CSidebarNavListItem nav-link nav-link-font",
                        classes.menuItem
                    )}
                    onClick={handleMainSubMenuAction}
                >
                    <i
                        className="far fa-circle nav-icon"
                        style={{ minWidth: 24, width: 24 }}
                    />
                    <p>{props.data.title}</p>
                    <div className={"CSidebarNavListItem-setting"}>
                        <MoreButton data={props.data} />
                    </div>
                </Link>
            )}
            {isMenuExtended && (
                <ul className="nav nav-treeview">
                    {props.data.mood == "com" &&
                        props.data.children &&
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

const MoreButton = ({ data }) => {
    const dispatch = useDispatch();
    const { auth } = useAuth();
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const [openDeleteModal, setOpenDeleteModal] = useState(false);

    const handleClick = useCallback((event) => {
        event.preventDefault();
        event.stopPropagation();
        setAnchorEl(event.currentTarget);
    }, []);

    const handleClose = useCallback((event) => {
        event.preventDefault();
        event.stopPropagation();
        setAnchorEl(null);
    }, []);

    const handleClickOpenDeleteModal = useCallback((event) => {
        event.preventDefault();
        event.stopPropagation();
        setOpenDeleteModal(true);
        setAnchorEl(null);
    }, []);

    const handleCloseDeleteModal = useCallback((event) => {
        event.preventDefault();
        event.stopPropagation();
        setOpenDeleteModal(false);
    }, []);

    const handleAcceptDeleteModal = useCallback(
        async (event) => {
            event.preventDefault();
            event.stopPropagation();
            try {
                if (data) {
                    const response = await api.delete(
                        `${data.mood == "com" ? "communities" : "channels"}/${
                            data.id
                        }`
                    );
                    dispatch(
                        data.mood == "com"
                            ? actionChannel.handleRemoveCommunity(response.data)
                            : actionChannel.handleRemoveChannel(response.data)
                    );
                    ToastNotification("success", "正常に削除されました");
                }
            } catch (error) {
                console.log(error);
                ToastNotification(
                    "warning",
                    "サーバーエラーです。後でもう一度お試しください"
                );
            } finally {
                setOpenDeleteModal(false);
            }
        },
        [dispatch, handleClose, data]
    );

    return (
        <>
            <IconButton onClick={handleClick}>
                <MoreHorizIcon color="white" />
            </IconButton>
            <Menu
                id="delete-channel-button"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    "aria-labelledby": "basic-button",
                }}
            >
                <MenuItem
                    disabled={
                        (auth ? auth.id != data.user_id : true) ||
                        (data.mood == "cha" && data.type == 0)
                    }
                    onClick={handleClickOpenDeleteModal}
                >
                    <DeleteOutlineIcon />
                    チャネルの削除
                </MenuItem>
            </Menu>
            <Dialog
                open={openDeleteModal}
                onClose={handleCloseDeleteModal}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    これを削除してもよろしいですか?
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        {data.title}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseDeleteModal}>反対</Button>
                    <Button onClick={handleAcceptDeleteModal} autoFocus>
                        賛成
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
};

export const useStyles = makeStyles((theme) => ({
    navItem: {
        position: "relative",
    },
    countBox: {
        position: "absolute",
        top: 10,
        right: 32,
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
