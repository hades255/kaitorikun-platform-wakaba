import React from "react";
import { List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import { Add as AddIcon } from "@mui/icons-material";
import { Link } from "../../../components";

const ChannelSidebar = () => {
    return (
        <>
            <List>
                <Link to="/channels/new">
                    <ListItem>
                        <ListItemIcon>
                            <AddIcon />
                        </ListItemIcon>
                        <ListItemText primary="Create Channel" />
                    </ListItem>
                </Link>
            </List>
        </>
    );
};

export default ChannelSidebar;
