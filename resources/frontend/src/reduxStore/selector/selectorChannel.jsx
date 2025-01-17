const handleGetChannels = (state) => state.channels.channels;
const handleGetPublicChannels = (state) => state.channels.publicChannels;
const handleGetChannel = (state) => state.channels.channel;
const handleGetUsers = (state) => state.channels.users;
const handleGetPosts = (state) => state.channels.posts;

const selectorChannel = {
    handleGetChannels,
    handleGetPublicChannels,
    handleGetChannel,
    handleGetUsers,
    handleGetPosts,
};

export { selectorChannel };
