const handleGetSChannels = (state) => state.schannels.channels;
const handleGetSChannel = (state) => state.schannels.channel;
const handleGetSChannelUsers = (state) => state.schannels.users;
const handleGetSChannelPosts = (state) => state.schannels.posts;

const selectorSChannel = {
    handleGetSChannels,
    handleGetSChannel,
    handleGetSChannelUsers,
    handleGetSChannelPosts,
};

export { selectorSChannel };
