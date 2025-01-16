const handleGetChannels = (state) => state.channels.channels;
const handleGetChannel = (state) => state.channels.channel;
const handleGetUsers = (state) => state.channels.users;
const handleGetPosts = (state) => state.channels.posts;

const selectorChannel = {
    handleGetChannels,
    handleGetChannel,
    handleGetUsers,
    handleGetPosts,
};

export { selectorChannel };
