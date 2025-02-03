import { Avatar, Box, Typography } from "@mui/material";

const Creator = ({ creature, users }) => {
    const user =
        Array.isArray(users) &&
        users.find((item) => item.id == creature.user_id);

    return (
        <Box display={"flex"} alignItems={"center"} gap={1}>
            <Avatar
                alt={user?.name}
                src={user?.icon || "avatar"}
                sx={{
                    color: "black",
                    width: 36,
                    height: 36,
                }}
            />
            <Typography>{user?.name}</Typography>
        </Box>
    );
};

export default Creator;
