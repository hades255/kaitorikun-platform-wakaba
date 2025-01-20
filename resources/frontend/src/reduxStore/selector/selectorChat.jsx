const handleGetChats = (state) => state.chats.chats;
const handleGetUsers = (state) => state.chats.users;
const handleGetCurrentUser = (state) => state.chats.current;

const selectorChat = {
    handleGetChats,
    handleGetUsers,
    handleGetCurrentUser,
};

export { selectorChat };
