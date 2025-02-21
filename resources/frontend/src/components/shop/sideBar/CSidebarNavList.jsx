import { memo, useCallback, useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import clsx from "clsx";
import {
    Avatar,
    Box,
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    IconButton,
    Menu,
    MenuItem,
    Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import LinkOutlinedIcon from "@mui/icons-material/LinkOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import GroupAddOutlinedIcon from "@mui/icons-material/GroupAddOutlined";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import GroupRemoveOutlinedIcon from "@mui/icons-material/GroupRemoveOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import KeyboardArrowRightOutlinedIcon from "@mui/icons-material/KeyboardArrowRightOutlined";
import { ToastNotification } from "../../helper";
import { stringAvatar } from "../../helper/func";
import api from "../../../api";
import { useAuth } from "../../../contexts/AuthContext";
import { useCommunity } from "../../../contexts/CommunityContext";
import { useNotification } from "../../../contexts/NotificationContext";
import { actionChannel, selectorChannel } from "../../../reduxStore";
import { InvitationDialog } from "../../../pages/communities";
import "./CSidebarNavList.css";

const CSidebarNavList = ({ data, page, path }) => {
    const dataId = data.id;
    const classes = useStyles();
    const channel = useSelector(selectorChannel.handleGetChannel);
    const community = useSelector(selectorChannel.handleGetCommunity);

    const { auth } = useAuth();
    const { unreadTab, clearScomUnreadTab } = useNotification();
    const { setShowChannelEditor, setPreSetCommunityId } = useCommunity();

    const count = useMemo(
        () =>
            Array.isArray(unreadTab.scom)
                ? data.mood == "com"
                    ? unreadTab.scom.filter(({ com }) => com == dataId).length
                    : unreadTab.scom.filter(({ cha }) => cha == dataId).length
                : 0,
        [data, unreadTab]
    );
    const channelSelected = useMemo(
        () =>
            channel && community && data.mood == "cha" && data.id == channel.id,
        [channel, community, data]
    );

    const [isMenuExtended, setIsMenuExtended] = useState(false);

    useEffect(() => {
        if (
            channel &&
            community &&
            data.mood == "com" &&
            data.id == community.id
        )
            setIsMenuExtended(true);
    }, [channel, community, data]);

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
            {data.mood == "com" ? (
                <div
                    className={clsx(
                        { [classes.comMenuOpen]: isMenuExtended },
                        "CSidebarNavListItem nav-link nav-link-font",
                        classes.menuItem
                    )}
                    onClick={handleMainMenuAction}
                >
                    <Avatar
                        variant="rounded"
                        {...stringAvatar({
                            name: data.title,
                            src: data.icon,
                            sx: {
                                color: "black",
                                width: page ? 28 : 24,
                                height: page ? 28 : 24,
                            },
                        })}
                    />
                    <p>
                        {data.title}
                        <i className="right fas fa-angle-left extend-angle-left-icon" />
                    </p>
                    <MoreButton data={data} />
                </div>
            ) : (
                <Link
                    to={`/${path}/${dataId}`}
                    className={clsx(
                        "CSidebarNavListItem nav-link nav-link-font",
                        classes.menuItem
                    )}
                    onClick={handleMainSubMenuAction}
                >
                    {channelSelected ? (
                        <i
                            className="far fa-circle-dot nav-icon"
                            style={{ minWidth: 24, width: 24 }}
                        />
                    ) : (
                        <i
                            className="far fa-circle nav-icon"
                            style={{ minWidth: 24, width: 24 }}
                        />
                    )}
                    <p>{data.title}</p>
                    {auth?.id == data?.user_id && <MoreButton data={data} />}
                </Link>
            )}
            {isMenuExtended && (
                <ul className="nav nav-treeview">
                    {data.mood == "com" &&
                        data.children &&
                        data.children.map((submenu, i) => (
                            <CSidebarNavList
                                data={submenu}
                                page={page}
                                path={page ? "communities" : "channels"}
                                key={i}
                                submenu="active"
                            />
                        ))}
                    {auth && auth.id == data.user_id && (
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
                    )}
                </ul>
            )}
            {count > 0 && <div className={classes.countBox}>{count}</div>}
        </li>
    );
};

export default memo(CSidebarNavList);

const MoreButton = ({ data }) => {
    const { auth } = useAuth();
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const stopPropagation = useCallback((e) => e.stopPropagation(), []);

    const handleClick = useCallback((event) => {
        event.preventDefault();
        setAnchorEl(event.currentTarget);
    }, []);

    const handleClose = useCallback(() => {
        setAnchorEl(null);
    }, []);

    return (
        <div
            onClick={stopPropagation}
            className={"CSidebarNavListItem-setting"}
            style={
                open
                    ? {
                          visibility: "visible",
                      }
                    : {}
            }
        >
            <IconButton onClick={handleClick}>
                <MoreHorizIcon htmlColor="white" />
            </IconButton>
            <Menu
                id={"delete-channel-button" + data.mood + data.id}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    "aria-labelledby": "basic-button",
                }}
            >
                {data.mood == "com" && (
                    <ConfigNotification data={data} onClose={handleClose} />
                )}
                {false && data.mood == "com" && (
                    <MenuItem>
                        <Box width={32}>
                            <LinkOutlinedIcon />
                        </Box>
                        <Typography>参加リンクの共有</Typography>
                    </MenuItem>
                )}
                {data.mood == "com" && auth?.id == data?.user_id && (
                    <ConfirmCommunityAdd data={data} onClose={handleClose} />
                )}
                {data.mood == "com" && (
                    <CommunityUsers data={data} onClose={handleClose} />
                )}
                {false && auth?.id == data?.user_id && (
                    <MenuItem>
                        <Box width={32}>
                            <EditOutlinedIcon />
                        </Box>
                        <Typography>
                            {data.mood == "com"
                                ? "コミュニティの編集"
                                : "チャネルの編集"}
                        </Typography>
                    </MenuItem>
                )}
                {data.mood == "com" && auth?.id != data?.user_id && (
                    <ConfirmCommunityOut data={data} onClose={handleClose} />
                )}
                {auth?.id == data?.user_id && (
                    <ConfirmDeleteDialog data={data} onClose={handleClose} />
                )}
            </Menu>
        </div>
    );
};

const CommunityUsers = ({ data, onClose }) => {
    const dispatch = useDispatch();
    const [open, setOpen] = useState(false);

    const handleOpen = useCallback(() => {
        setOpen(true);
    }, []);

    const handleClose = useCallback(() => {
        setOpen(false);
        onClose();
    }, [onClose]);

    return (
        <>
            <MenuItem onClick={handleOpen}>
                <Box width={32}>
                    <GroupsOutlinedIcon />
                </Box>
                <Typography>メンバーを表示</Typography>
            </MenuItem>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                maxWidth={"md"}
                fullWidth={true}
            >
                <DialogTitle id="alert-dialog-title">メンバー</DialogTitle>
                <DialogContent sx={{ minHeight: "60vh" }}>
                    <CommunityUsersBundle
                        title={"所有者"}
                        initOpen
                        users={[
                            { id: 1, name: "XXX", role: 0 },
                            { id: 2, name: "YYY", role: 0 },
                            { id: 3, name: "ZZZ", role: 0 },
                            { id: 4, name: "DDD", role: 0 },
                            { id: 5, name: "FFF", role: 0 },
                            { id: 6, name: "GGG", role: 0 },
                        ]}
                    />
                    <CommunityUsersBundle
                        title={"メンバー"}
                        users={[
                            { id: 1, name: "XXX", role: 1 },
                            { id: 2, name: "YYY", role: 0 },
                            { id: 3, name: "ZZZ", role: 0 },
                            { id: 4, name: "DDD", role: 0 },
                            { id: 5, name: "FFF", role: 0 },
                            { id: 6, name: "GGG", role: 0 },
                        ]}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>キャンセル</Button>
                </DialogActions>
            </Dialog>
        </>
    );
};

const CommunityUsersBundle = ({ title, users, initOpen = false }) => {
    const [open, setOpen] = useState(initOpen);

    const handleClick = useCallback(() => setOpen(!open), [open]);

    return (
        <Box my={4}>
            <Box
                display={"flex"}
                alignItems={"center"}
                gap={2}
                sx={{ cursor: "pointer" }}
                onClick={handleClick}
            >
                {open ? (
                    <KeyboardArrowDownOutlinedIcon />
                ) : (
                    <KeyboardArrowRightOutlinedIcon />
                )}
                <Typography>
                    {title} ({users.length})
                </Typography>
            </Box>
            <Box
                sx={{
                    maxHeight: open ? "25vh" : 0,
                    overflowY: "scroll",
                    transition: "all ease 0.3s",
                }}
                className="non-scrollbar"
            >
                <CommunityUserItemsHeader />
                {users.map((user) => (
                    <CommunityUserItem key={user.id} user={user} />
                ))}
            </Box>
        </Box>
    );
};

const CommunityUserItemsHeader = () => {
    return (
        <Box display={"flex"} alignItems={"center"} px={2} py={1}>
            <Box display={"flex"} alignItems={"center"} width={"60%"}>
                名前
            </Box>
            <Box display={"flex"} alignItems={"center"}>
                役割
            </Box>
        </Box>
    );
};

const CommunityUserItem = ({ user }) => {
    return (
        <Box
            mb={1}
            p={1}
            display={"flex"}
            alignItems={"center"}
            borderBottom={"1px solid lightgray"}
        >
            <Box display={"flex"} alignItems={"center"} width={"60%"} gap={2}>
                <Avatar
                    {...stringAvatar({
                        name: user.name,
                        src: user.icon,
                        sx: {
                            color: "black",
                            width: 36,
                            height: 36,
                        },
                    })}
                />
                {user.name}
            </Box>
            <Box display={"flex"} alignItems={"center"}>
                {user.role == 0 ? "所有者" : "メンバー"}
            </Box>
        </Box>
    );
};

const ConfigNotification = ({ data, onClose }) => {
    //  todo    X
    const [open, setOpen] = useState(false);

    const handleOpen = useCallback(() => {
        setOpen(true);
    }, []);

    const handleClose = useCallback(() => {
        setOpen(false);
        onClose();
    }, [onClose]);

    const handleAccept = useCallback(() => {}, []);

    return (
        <>
            <MenuItem onClick={handleOpen}>
                <Box width={32}>
                    <NotificationsNoneOutlinedIcon />
                </Box>
                <Typography>通知</Typography>
            </MenuItem>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="notification-dialog-title"
                aria-describedby="notification-dialog-description"
                maxWidth={"sm"}
                fullWidth={true}
            >
                <DialogTitle id="notification-dialog-title">
                    コミュニティ通知
                </DialogTitle>
                <DialogContent>
                    <NotificationSettingItem
                        active={true}
                        title1={"すべてのアクティビティ"}
                        title2={"投稿、返信、メンション"}
                    />
                    <NotificationSettingItem
                        active={false}
                        title1={"新しい投稿のみ"}
                        title2={"新しい投稿、メンション、個人の返信"}
                    />
                    <NotificationSettingItem
                        active={false}
                        title1={"オフ"}
                        title2={"個人の返信とメンション"}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} variant="outlined">
                        キャンセル
                    </Button>
                    <Button
                        onClick={handleAccept}
                        variant="contained"
                        autoFocus
                    >
                        保存
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
};

const NotificationSettingItem = ({ active, title1, title2 }) => {
    return (
        <Box
            display={"flex"}
            alignItems={"center"}
            borderRadius={2}
            border={active ? "1px solid gray" : "1px solid lightgray"}
            gap={4}
            pl={4}
            py={2}
            m={1}
            bgcolor={active ? "#0002" : "transparent"}
            sx={{
                cursor: "pointer",
                transition: "all ease 0.2s",
                "&:hover": { bgcolor: "#0001" },
            }}
        >
            {active ? (
                <RadioButtonCheckedIcon color="primary" />
            ) : (
                <CircleOutlinedIcon color="primary" />
            )}
            <Box>
                <Typography variant="subtitle1" color="primary">
                    {title1}
                </Typography>
                <Typography variant="subtitle2">{title2}</Typography>
            </Box>
        </Box>
    );
};

const ConfirmCommunityAdd = ({ data, onClose }) => {
    const [open, setOpen] = useState(false);

    const handleOpen = useCallback(() => {
        setOpen(true);
    }, []);

    const handleClose = useCallback(() => {
        setOpen(false);
        onClose();
    }, [onClose]);

    return (
        <>
            <MenuItem onClick={handleOpen}>
                <Box width={32}>
                    <GroupAddOutlinedIcon />
                </Box>
                <Typography>メンバーを招待</Typography>
            </MenuItem>
            <Dialog open={open} onClose={handleClose}>
                <InvitationDialog
                    onClose={handleClose}
                    data={{ id: data.id, name: data.title }}
                />
            </Dialog>
        </>
    );
};

const ConfirmCommunityOut = ({ data, onClose }) => {
    //  todo    X
    const [open, setOpen] = useState(false);

    const handleOpen = useCallback(() => {
        setOpen(true);
    }, []);

    const handleClose = useCallback(() => {
        setOpen(false);
        onClose();
    }, [onClose]);

    const handleAccept = useCallback(() => {}, []);

    return (
        <>
            <MenuItem onClick={handleOpen}>
                <Box width={32}>
                    <GroupRemoveOutlinedIcon />
                </Box>
                <Typography>
                    {data.mood == "com"
                        ? "コミュニティの編集"
                        : "チャネルの編集"}
                </Typography>
            </MenuItem>
            <ConfirmDialog
                open={open}
                onClose={handleClose}
                onOk={handleAccept}
                closeTitle={"キャンセル"}
                okTitle={"退出"}
                title={"このコミュニティから脱退しますか?"}
                innerTitle={
                    "コミュニティまたはそのコンテンツにアクセスできなくなります。"
                }
            />
        </>
    );
};

const ConfirmDeleteDialog = ({ data, onClose }) => {
    const dispatch = useDispatch();
    const [openDeleteModal, setOpenDeleteModal] = useState(false);

    const handleClickOpenDeleteModal = useCallback(() => {
        setOpenDeleteModal(true);
    }, []);

    const handleCloseDeleteModal = useCallback(() => {
        setOpenDeleteModal(false);
        onClose();
    }, [onClose]);

    const handleAcceptDeleteModal = useCallback(async () => {
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
            onClose();
        }
    }, [dispatch, onClose, data]);

    return (
        <>
            <MenuItem onClick={handleClickOpenDeleteModal}>
                <Box width={32}>
                    <DeleteOutlineIcon />
                </Box>
                <Typography>
                    {data.mood == "com"
                        ? "コミュニティの削除"
                        : "チャネルの削除"}
                </Typography>
            </MenuItem>
            <ConfirmDialog
                open={openDeleteModal}
                onClose={handleCloseDeleteModal}
                onOk={handleAcceptDeleteModal}
                closeTitle={"キャンセル"}
                okTitle={data.mood == "com" ? "完全に削除する" : "削除"}
                title={
                    data.mood == "com"
                        ? `"${data.title}" コミュニティを削除しますか?`
                        : `チャネルを削除しますか?`
                }
                innerTitle={
                    data.mood == "com"
                        ? "コミュニティまたはそのコンテンツにアクセスできなくなります。"
                        : `"${data.title}" を削除しますか?これにより、このチャネル内のすべての投稿、ファイル、その他のコンテンツが完全に削除されます。`
                }
            />
        </>
    );
};

export const ConfirmDialog = ({
    open = false,
    onClose = null,
    onOk = null,
    title = "",
    innerTitle = "",
    closeTitle = "反対",
    okTitle = "賛成",
}) => {
    const stopPropagation = useCallback((e) => e.stopPropagation(), []);

    return (
        <Dialog
            open={open}
            onClose={onClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            onClick={stopPropagation}
        >
            {title && (
                <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
            )}
            {innerTitle && (
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        {innerTitle}
                    </DialogContentText>
                </DialogContent>
            )}
            <DialogActions>
                {onClose && (
                    <Button onClick={onClose} variant="outlined">
                        {closeTitle}
                    </Button>
                )}
                {onOk && (
                    <Button onClick={onOk} autoFocus variant="contained">
                        {okTitle}
                    </Button>
                )}
            </DialogActions>
        </Dialog>
    );
};

const useStyles = makeStyles((theme) => ({
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
    comMenuOpen: {
        backgroundColor: "transparent !important",
        borderBottom: "1px solid grey",
        "&:hover": {
            backgroundColor: "#FFF1 !important",
        },
    },
}));
