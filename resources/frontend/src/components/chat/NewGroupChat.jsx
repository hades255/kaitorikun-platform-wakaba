import { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { Box, IconButton, TextField, Typography } from "@mui/material";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";
import TagInput from "./TagInput";
import api from "../../api";
import { actionChat } from "../../reduxStore/actions/chat_action";

const NewGroupChat = () => {
    const dispatch = useDispatch();
    const [showGroupname, setShowGroupname] = useState(false);
    const [users, setUsers] = useState([]);
    const [groupname, setGroupname] = useState("");

    const handleClickToggleGroupname = useCallback(() => {
        setShowGroupname(!showGroupname);
    }, [showGroupname]);

    const handleGroupNameChange = useCallback((e) => {
        setGroupname(e.target.value);
    }, []);

    const handleSubmit = useCallback(
        async (e) => {
            try {
                e.preventDefault();
                const response = await api.post("chatgroups", {
                    name: groupname,
                    users,
                });
                const group = {
                    ...response.data,
                    users,
                    type: "group",
                };
                dispatch(actionChat.handleAddUsers(group));
                dispatch(actionChat.handleSetCurrentUser(group));
            } catch (error) {
                console.log(error);
            }
        },
        [dispatch, users, groupname]
    );

    return (
        <>
            <form method="post" onSubmit={handleSubmit}>
                <Box>
                    {showGroupname && (
                        <Box
                            display={"flex"}
                            alignItems={"center"}
                            justifyContent={"stretch"}
                            gap={2}
                        >
                            <Typography noWrap minWidth={100}>
                                グループ名:
                            </Typography>
                            <TextField
                                variant="standard"
                                size="small"
                                fullWidth
                                value={groupname}
                                onChange={handleGroupNameChange}
                                required
                            />
                            <IconButton size="small" type="submit">
                                <CheckCircleOutlineOutlinedIcon />
                            </IconButton>
                        </Box>
                    )}
                    <Box
                        display={"flex"}
                        alignItems={"center"}
                        justifyContent={"stretch"}
                        gap={2}
                        borderBottom={"1px solid black"}
                    >
                        <Typography noWrap minWidth={80}>
                            新規作成:
                        </Typography>
                        <TagInput setValues={setUsers} />
                        <Box
                            display={"flex"}
                            alignItems={"center"}
                            gap={1}
                            flexWrap={"nowrap"}
                            onClick={handleClickToggleGroupname}
                            sx={{ cursor: "pointer" }}
                        >
                            {!showGroupname && <GroupsOutlinedIcon />}
                            <Typography noWrap>
                                {showGroupname
                                    ? "グループ名を折りたたむ"
                                    : "グループ名を追加"}
                            </Typography>
                        </Box>
                    </Box>
                </Box>
            </form>
        </>
    );
};

export default NewGroupChat;
