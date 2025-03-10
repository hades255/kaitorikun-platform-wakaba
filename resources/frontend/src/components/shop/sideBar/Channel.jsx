import React, { useCallback, useEffect, useMemo, useState } from "react";
import {
    Box,
    Dialog,
    IconButton,
    InputBase,
    Menu,
    MenuItem,
    Typography,
} from "@mui/material";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import FilterListIcon from "@mui/icons-material/FilterList";
import { useCommunity } from "../../../contexts/CommunityContext";
import { actionChannel, selectorChannel } from "../../../reduxStore";
import { InvitationDialog } from "../../../pages/communities";
import { useDispatch, useSelector } from "../../../components";
import CreateCommunity from "../../community/New";
import CreateChannel from "../../community/NewChannel";
import CSidebarNavList from "./CSidebarNavList";

const ChannelSidebar = ({ page = true }) => {
    const dispatch = useDispatch();
    const communities = useSelector(selectorChannel.handleGetCommunities);
    const [search, setSearch] = useState("");

    const communityItems = useMemo(() => {
        if (communities && Array.isArray(communities)) {
            let res = [];
            communities.forEach((item) => {
                if (!page && !item.type) return;
                if (page && item.type) return;
                let children = [];
                let defaultCha = null;
                if (item.channels && Array.isArray(item.channels)) {
                    item.channels
                        .sort((a, b) =>
                            a.type > b.type ? 1 : a.type < b.type ? -1 : 0
                        )
                        .forEach((cha) => {
                            if (cha.type == 0 && cha.name == "defaultCha") {
                                defaultCha = {
                                    id: cha.id,
                                    path: "#",
                                    title: cha.name,
                                    description: cha.description,
                                    community_id: cha.community_id,
                                    user_id: cha.user_id,
                                    icon: null,
                                    mood: "cha",
                                    type: cha.type,
                                };
                                return;
                            }
                            children.push({
                                id: cha.id,
                                path: "#",
                                title: cha.name,
                                description: cha.description,
                                community_id: cha.community_id,
                                user_id: cha.user_id,
                                icon: null,
                                mood: "cha",
                                type: cha.type,
                            });
                        });
                }
                res.push({
                    id: item.id,
                    path: "#",
                    title: item.name,
                    description: item.description,
                    guideline: item.guideline,
                    user_id: item.user_id,
                    icon: item.icon,
                    mood: "com",
                    type: item.type,
                    children,
                    defaultCha,
                });
            });
            return res;
        } else return [];
    }, [communities, page]);

    useEffect(() => {
        return () => {
            dispatch(
                actionChannel.handleSelectChannel({
                    community: null,
                    channel: null,
                    posts: [],
                    users: [],
                })
            );
        };
    }, [dispatch]);

    return (
        <>
            <Box py={1}>
                <AddNewCommunityButton
                    page={page}
                    search={search}
                    setSearch={setSearch}
                />
            </Box>
            <ul
                className="nav nav-pills nav-sidebar flex-column"
                data-widget="treeview"
                role="menu"
                data-accordion="false"
            >
                {communityItems
                    .filter(
                        (item) => JSON.stringify(item).indexOf(search) != -1
                    )
                    .map((menu, i) => (
                        <CSidebarNavList
                            key={menu.mood + menu.id}
                            data={menu}
                            page={page}
                            path={page ? "communities" : "channels"}
                        />
                    ))}
            </ul>
        </>
    );
};

export const AddNewCommunityButton = ({ page = true, search, setSearch }) => {
    const {
        setShowCommunityEditor,
        setPreSetCommunityName,
        setPreSetCommunityId,
        setShowChannelEditor,
        showCommunityEditor,
        showChannelEditor,
        showInviteDialog,
        setShowInviteDialog,
    } = useCommunity();

    const [anchorEl, setAnchorEl] = useState(null);
    const [showFilter, setShowFilter] = useState(false);
    const open = Boolean(anchorEl);

    const handleNewCommunity = () => {
        setPreSetCommunityName("");
        setShowCommunityEditor(true);
        handleClose();
    };

    const handleNewChannel = () => {
        setPreSetCommunityId(0);
        setShowChannelEditor(true);
        handleClose();
    };

    const handleClick = (event) => {
        // setAnchorEl(event.currentTarget);
        handleNewCommunity();
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleClickOpenFitler = useCallback(() => setShowFilter(true), []);
    const handleClickCloseFitler = useCallback(() => {
        setShowFilter(false);
        setSearch("");
    }, []);

    const handleFilterChange = useCallback((e) => {
        setSearch(e.target.value);
    }, []);

    return (
        <>
            {showFilter ? (
                <Box
                    component="form"
                    sx={{
                        px: "2px",
                        display: "flex",
                        alignItems: "center",
                        borderBottom: "1px solid gray",
                    }}
                >
                    <InputBase
                        sx={{ ml: 1, flex: 1, color: "white" }}
                        placeholder="検索"
                        inputProps={{ "aria-label": "検索" }}
                        onChange={handleFilterChange}
                        value={search}
                    />
                    <IconButton onClick={handleClickCloseFitler}>
                        <CloseOutlinedIcon htmlColor="white" />
                    </IconButton>
                </Box>
            ) : (
                <Box
                    id="basic-button"
                    aria-controls={open ? "basic-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? "true" : undefined}
                    sx={{ color: "white" }}
                    display="flex"
                    justifyContent="space-between"
                    alignItems={"center"}
                    pl={page ? 0 : 2}
                >
                    <Typography>コミュニティ</Typography>
                    <Box display={"flex"} alignItems={"center"}>
                        <IconButton onClick={handleClickOpenFitler}>
                            <FilterListIcon htmlColor="white" />
                        </IconButton>
                        <IconButton onClick={handleClick}>
                            <i
                                className="far fa-plus nav-icon text-white"
                                style={{ minWidth: 24, width: 24 }}
                            />
                        </IconButton>
                    </Box>
                </Box>
            )}
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    "aria-labelledby": "basic-button",
                }}
            >
                {page && (
                    <MenuItem onClick={handleNewChannel}>
                        チャンネルを追加
                    </MenuItem>
                )}
                <MenuItem onClick={handleNewCommunity}>
                    コミュニティを追加
                </MenuItem>
                {/* <MenuItem onClick={handleClose}> */}
                {/* Join Community */}
                {/* コミュニティに参加 */}
                {/* </MenuItem> */}
            </Menu>
            {showCommunityEditor && (
                <Dialog
                    open={showCommunityEditor}
                    onClose={() => setShowCommunityEditor(false)}
                    maxWidth="md"
                    fullWidth={true}
                >
                    <CreateCommunity page={page} />
                </Dialog>
            )}
            {showChannelEditor && (
                <Dialog
                    open={showChannelEditor}
                    onClose={() => setShowChannelEditor(false)}
                    maxWidth={"md"}
                    fullWidth={true}
                >
                    <CreateChannel page={page} />
                </Dialog>
            )}
            {showInviteDialog && (
                <Dialog
                    open={showInviteDialog}
                    onClose={() => setShowInviteDialog(false)}
                >
                    <InvitationDialog onClose={setShowInviteDialog} />
                </Dialog>
            )}
        </>
    );
};

export default ChannelSidebar;
