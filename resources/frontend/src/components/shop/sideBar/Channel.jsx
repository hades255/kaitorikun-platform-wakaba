import React, { useEffect, useMemo } from "react";
import { Box, Dialog, Menu, MenuItem } from "@mui/material";
import { useCommunity } from "../../../contexts/CommunityContext";
import { actionChannel, selectorChannel } from "../../../reduxStore";
import { useDispatch, useSelector } from "../../../components";
import CreateCommunity from "../../community/New";
import CreateChannel from "../../community/NewChannel";
import CSidebarNavList from "./CSidebarNavList";

const ChannelSidebar = ({ page = true }) => {
    const dispatch = useDispatch();
    const communities = useSelector(selectorChannel.handleGetCommunities);

    const communityItems = useMemo(() => {
        if (communities && Array.isArray(communities)) {
            let res = [];
            communities.forEach((item) => {
                if (!page && !item.type) return;
                if (page && item.type) return;
                let children = [];
                if (item.channels && Array.isArray(item.channels)) {
                    item.channels.forEach((cha) => {
                        children.push({
                            id: cha.id,
                            path: "#",
                            title: cha.name,
                            icon: null,
                            type: "cha",
                        });
                    });
                }
                res.push({
                    id: item.id,
                    path: "#",
                    title: item.name,
                    icon: item.icon,
                    type: "com",
                    children,
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
            {page && (
                <Box sx={{ px: 1, py: 1 }}>
                    <AddNewCommunityButton />
                </Box>
            )}
            <ul
                className="nav nav-pills nav-sidebar flex-column"
                data-widget="treeview"
                role="menu"
                data-accordion="false"
            >
                {communityItems.map((menu, i) => (
                    <CSidebarNavList
                        data={menu}
                        page={page}
                        path={page ? "communities" : "channels"}
                        key={menu.id}
                    />
                ))}
            </ul>
        </>
    );
};

export const AddNewCommunityButton = ({ page = true }) => {
    const {
        setShowCommunityEditor,
        setPreSetCommunityName,
        setPreSetCommunityId,
        setShowChannelEditor,
        showCommunityEditor,
        showChannelEditor,
    } = useCommunity();

    const [anchorEl, setAnchorEl] = React.useState(null);
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
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            <Box display="flex" justifyContent="flex-end">
                <div
                    id="basic-button"
                    aria-controls={open ? "basic-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? "true" : undefined}
                    onClick={handleClick}
                    sx={{ color: "white" }}
                >
                    <i
                        className="far fa-plus nav-icon text-white"
                        style={{ minWidth: 24, width: 24 }}
                    />
                </div>
                <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                        "aria-labelledby": "basic-button",
                    }}
                >
                    <MenuItem onClick={handleNewChannel}>
                        {/* Add Channel */}チャンネルを追加
                    </MenuItem>
                    <MenuItem onClick={handleNewCommunity}>
                        {/* Add Community */}コミュニティを追加
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                        {/* Join Community */}コミュニティに参加
                    </MenuItem>
                </Menu>
            </Box>
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
                >
                    <CreateChannel />
                </Dialog>
            )}
        </>
    );
};

export default ChannelSidebar;
