import React, {
    useCallback,
    useEffect,
    useMemo,
    useRef,
    useState,
} from "react";
import { Avatar, Box, TextField, Typography } from "@mui/material";
import Tagify from "@yaireo/tagify";
import "@yaireo/tagify/dist/tagify.css";
import "./TagInput.css";
import api from "../../api";

const TagInput = ({ setValues }) => {
    const tagifyRef = useRef();
    const [tags, setTags] = useState([]);
    const [users, setUsers] = useState([]);
    const [tagify, setTagify] = useState(null);
    const [showDropdown, setShowDropdown] = useState(false);
    const whitelist = useMemo(
        () =>
            users.filter(
                ({ email }) => !tags.map((item) => item.email).includes(email)
            ),
        [users, tags]
    );

    const tagifySettings = {
        whitelist: [],
        maxTags: 5,
        addTagOnBlur: false,
        templates: {},
    };

    useEffect(() => setValues(tags), [setValues, tags]);

    useEffect(() => {
        setShowDropdown(whitelist && whitelist.length > 0);
    }, [whitelist]);

    useEffect(() => {
        const tagify = new Tagify(tagifyRef.current, tagifySettings);
        setTagify(tagify);
    }, []);

    useEffect(() => {
        if (!tagify) return;
        tagify.on("add", (e) => {
            setTags(
                tagify.value.map(({ value }) =>
                    users.find(({ email }) => email == value)
                )
            );
        });
    }, [tagify, users]);

    useEffect(() => {
        if (!tagify) return;
        tagify.on("remove", (e) => {
            setTags(
                tagify.value.map(({ value }) =>
                    users.find(({ email }) => email == value)
                )
            );
        });
    }, [tagify, users]);

    useEffect(() => {
        if (!tagify) return;
        let timer;
        tagify.on("input", (e) => {
            const text = e.detail.value;
            if (timer) clearTimeout(timer);
            if (text.length > 2)
                timer = setTimeout(async () => {
                    const res = await getUsers(text);
                }, 500);
            else {
                setUsers([]);
            }
        });

        return () => tagify.destroy();
    }, [getUsers, tagify]);

    const getUsers = useCallback(async (input) => {
        try {
            const response = await api(`users/search?search=${input}`);
            setUsers(response.data);
            return response.data;
        } catch (error) {
            console.log(error);
        }
    }, []);

    const handleClickUser = useCallback(
        (user) => tagify.addTags(user.email),
        [tagify]
    );

    const handleMouseLeave = useCallback(() => {
        const timer = setTimeout(() => setShowDropdown(false), 500);
        return () => {
            if (timer) clearTimeout(timer);
        };
    }, []);

    const handleMouseEnter = useCallback(() => {
        setShowDropdown(whitelist && whitelist.length > 0);
    }, [whitelist]);

    return (
        <Box
            width={"100%"}
            position={"relative"}
            onMouseLeave={handleMouseLeave}
            onMouseEnter={handleMouseEnter}
            mb={"-1px"}
        >
            <TextField
                inputRef={tagifyRef}
                placeholder="名前、メールを入力"
                variant="standard"
                size="small"
                fullWidth
                className="new-groupcaht-input"
            />
            {showDropdown && (
                <Box
                    position={"absolute"}
                    width={"100%"}
                    top={"100%"}
                    left={0}
                    border={"1px solid lightgray"}
                    borderRadius={2}
                    boxShadow={"2px 3px 4px #0004"}
                    maxHeight={400}
                    sx={{ overflowY: "scroll", cursor: "pointer" }}
                    className="non-scrollbar"
                >
                    {whitelist.map((user) => (
                        <UserItem
                            user={user}
                            key={user.id}
                            onClick={handleClickUser}
                        />
                    ))}
                </Box>
            )}
        </Box>
    );
};

export default TagInput;

export const UserItem = ({ user, onClick }) => {
    const handleClick = () => {
        onClick(user);
    };

    return (
        <Box
            onClick={handleClick}
            display={"flex"}
            alignItems={"center"}
            gap={2}
            sx={{
                cursor: "pointer",
                "&:hover": {
                    bgcolor: "#0001",
                },
            }}
            px={2}
            py={1}
        >
            <Avatar alt="Remy Sharp">{user.name[0]}</Avatar>
            <Box>
                <Typography variant="subtitle1">{user.name}</Typography>
                <Typography variant="subtitle2">{user.email}</Typography>
            </Box>
        </Box>
    );
};
