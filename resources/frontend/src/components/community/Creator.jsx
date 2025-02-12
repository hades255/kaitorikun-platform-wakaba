import { Avatar, Box, Typography } from "@mui/material";
import { stringAvatar } from "../helper/func";

const Creator = ({ creature, users }) => {
    const user =
        Array.isArray(users) &&
        users.find((item) => item.id == creature.user_id);

    return (
        user && (
            <Box display={"flex"} alignItems={"center"} gap={1}>
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
                <Typography>{user?.name}</Typography>
            </Box>
        )
    );
};

export default Creator;
