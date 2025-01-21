import {
    ADD_REACTION,
    NEW_CHANNEL,
    NEW_COMMUNITY,
    NEW_POST,
    NEW_PUBLIC_CHANNEL,
    NEW_PUBLIC_COMMUNITY,
    REMOVE_REACTION,
    REPLY_POST,
    SELECT_CHANNEL,
    SET_CHANNEL,
    SET_COMMUNITY,
    SET_PUBLIC_CHANNEL,
    SET_PUBLIC_COMMUNITY,
} from "../actions/channel_action";

const initialState = {
    communities: [],
    publicCommunities: [],
    channels: [],
    publicChannels: [],
    channel: null,
    users: [],
    posts: [],
};
const channels = (state = initialState, actions) => {
    const data = actions.payload?.data;
    switch (actions.type) {
        case SET_COMMUNITY:
            return {
                ...state,
                communities: data,
            };
        case SET_PUBLIC_COMMUNITY:
            return {
                ...state,
                publicCommunities: data,
            };
        case NEW_COMMUNITY:
            return {
                ...state,
                communities: [...state.communities, data],
            };
        case NEW_PUBLIC_COMMUNITY:
            return {
                ...state,
                publicCommunities: [...state.publicCommunities, data],
            };
        case SET_CHANNEL:
            return {
                ...state,
                channels: data,
            };
        case SET_PUBLIC_CHANNEL:
            return {
                ...state,
                publicChannels: data,
            };
        case NEW_CHANNEL:
            return {
                ...state,
                // channels: [...state.channels, data],
                communities: state.communities?.map((item) => ({
                    ...item,
                    channels:
                        item.id == data.community_id
                            ? [...item.channels, data]
                            : item.channels,
                })),
                publicCommunities: state.publicCommunities?.map((item) => ({
                    ...item,
                    channels:
                        item.id == data.community_id
                            ? [...item.channels, data]
                            : item.channels,
                })),
            };
        case NEW_PUBLIC_CHANNEL:
            return {
                ...state,
                publicChannels: [...state.publicChannels, data],
            };
        case SELECT_CHANNEL:
            return {
                ...state,
                channel: data.channel,
                users: data.users,
                posts: data.posts,
            };
        case NEW_POST:
            return {
                ...state,
                posts: [...state.posts, data],
            };
        case REPLY_POST:
            return {
                ...state,
                posts: state.posts?.map((item) =>
                    item.id == data.post_id
                        ? {
                              ...item,
                              replies: [...(item.replies ?? []), data],
                          }
                        : item
                ),
            };
        case ADD_REACTION:
            return {
                ...state,
                posts: state.posts?.map((item) =>
                    item.id == data.post_id
                        ? {
                              ...item,
                              reactions: [...(item.reactions ?? []), data],
                          }
                        : item
                ),
            };
        case REMOVE_REACTION:
            return {
                ...state,
                posts: state.posts?.map((item) =>
                    item.id == data.post_id
                        ? {
                              ...item,
                              reactions: (item.reactions ?? [])?.filter(
                                  ({ id }) => id != data.id
                              ),
                          }
                        : item
                ),
            };
        default:
            return state;
    }
};

export default channels;
