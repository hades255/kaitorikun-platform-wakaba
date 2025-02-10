import {
    ADD_REACTION,
    ADD_USER,
    EDIT_POST,
    NEW_CHANNEL,
    NEW_COMMUNITY,
    NEW_POST,
    REMOVE_CHANNEL,
    REMOVE_COMMUNITY,
    REMOVE_POST,
    REMOVE_REACTION,
    REPLY_POST,
    SELECT_CHANNEL,
    SET_CHANNEL,
    SET_COMMUNITY,
} from "../actions/channel_action";

const initialState = {
    communities: [],
    channels: [],
    community: null,
    channel: null,
    users: [],
    posts: [],
};
const channels = (state = initialState, actions) => {
    const data = actions.payload?.data;
    switch (actions.type) {
        case ADD_USER:
            return {
                ...state,
                users: state.users.find((user) => user.id == data.id)
                    ? state.users
                    : [...state.users, data],
            };
        case SET_COMMUNITY:
            return {
                ...state,
                communities: data,
            };
        case NEW_COMMUNITY:
            return {
                ...state,
                communities: [...state.communities, data],
            };
        case REMOVE_COMMUNITY:
            return {
                ...state,
                communities: state.communities.filter(
                    ({ id }) => id != data.id
                ),
            };
        case SET_CHANNEL:
            return {
                ...state,
                channels: data,
            };
        case NEW_CHANNEL:
            return {
                ...state,
                communities: state.communities?.map((item) => ({
                    ...item,
                    channels:
                        item.id == data.community_id
                            ? [...item.channels, data]
                            : item.channels,
                })),
            };
        case SELECT_CHANNEL:
            return {
                ...state,
                community: data.community,
                channel: data.channel,
                users: data.users,
                posts: data.posts,
            };
        case REMOVE_CHANNEL:
            return {
                ...state,
                communities: state.communities?.map((item) => ({
                    ...item,
                    channels:
                        item.id == data.community_id
                            ? item.channels.filter((cha) => cha.id != data.id)
                            : item.channels,
                })),
            };
        case NEW_POST:
            return {
                ...state,
                posts: [data, ...state.posts],
            };
        case REMOVE_POST:
            return {
                ...state,
                posts: state.posts.filter(({ id }) => id != data),
            };
        case EDIT_POST:
            return {
                ...state,
                posts: state.posts.map((item) =>
                    item.id == data.id ? { ...item, ...data } : item
                ),
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
                              reactions: (item.reactions ?? []).filter(
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
