import { Avatar, Box, Typography } from "@mui/material";
import { stringAvatar } from "../helper/func";

const Creator = ({ creature, users, init = "削除されたユーザー" }) => {
    const user =
        Array.isArray(users) &&
        users.find((item) => item.id == creature.user_id);

    return (
        user && (
            <Box display={"flex"} alignItems={"center"} gap={1}>
                <Avatar
                    {...stringAvatar({
                        name: user ? user.name : init,
                        src: user ? user.icon : init,
                        sx: {
                            color: "black",
                            width: 36,
                            height: 36,
                        },
                    })}
                />
                <Typography>{user ? user.name : init}</Typography>
            </Box>
        )
    );
};

export default Creator;
