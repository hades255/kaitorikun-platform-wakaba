const handleGetChats = (state) => state.chats.chats;
const handleGetUsers = (state) => state.chats.users;
const handleGetCurrentUser = (state) => state.chats.current;
const handleGetPinned = (state) => state.chats.pinned;
const handleGetRecently = (state) => state.chats.recently;

const selectorChat = {
    handleGetChats,
    handleGetUsers,
    handleGetCurrentUser,
    handleGetPinned,
    handleGetRecently,
};

export { selectorChat };
