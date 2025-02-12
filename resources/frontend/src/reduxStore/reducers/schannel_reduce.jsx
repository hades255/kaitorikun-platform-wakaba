import {
    SELETE_SCHANNEL_POST_CREATED,
    SELETE_SCHANNEL_POST_EDITED,
    SELETE_SCHANNELs,
    SET_SCHANNELs,
    SCHANNEL_REPLY_POST,
    SCHANNEL_ADD_REACTION,
    SCHANNEL_REMOVE_REACTION,
    SCHANNEL_REMOVE_POST,
    SCHANNEL_ADD_USER,
} from "../actions/schannel_action";

const initialState = {
    channels: [],
    channel: null,
    users: [],
    posts: [],
    unreadPosts: [],
};

const schannels = (state = initialState, actions) => {
    const data = actions.payload?.data;
    switch (actions.type) {
        case SET_SCHANNELs:
            return { ...state, channels: data };
        case SELETE_SCHANNELs:
            return {
                ...state,
                channel: data.channel,
                users: data.users,
                posts: data.posts,
                unreadPosts: state.unreadPosts.filter(
                    ({ channel_id }) => channel_id != data.channel?.id
                ),
            };
        case SELETE_SCHANNEL_POST_CREATED:
            if (state.channel && state.channel.id == data.channel_id)
                return { ...state, posts: [data, ...state.posts] };
            else return { ...state, unreadPosts: [...state.unreadPosts, data] };

        case SELETE_SCHANNEL_POST_EDITED:
            return {
                ...state,
                posts:
                    state.channel && state.channel.id == data.channel_id
                        ? state.posts.map((item) =>
                              item.id == data.id ? { ...item, ...data } : item
                          )
                        : state.posts,
            };
        case SCHANNEL_REPLY_POST:
            return {
                ...state,
                posts: state.posts.map((item) =>
                    item.id == data.post_id
                        ? {
                              ...item,
                              replies: [data, ...(item.replies ?? [])],
                          }
                        : item
                ),
            };
        case SCHANNEL_ADD_REACTION:
            return {
                ...state,
                posts: state.posts.map((item) =>
                    item.id == data.post_id
                        ? {
                              ...item,
                              reactions: [...(item.reactions ?? []), data],
                          }
                        : item
                ),
            };
        case SCHANNEL_REMOVE_REACTION:
            return {
                ...state,
                posts: state.posts.map((item) =>
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
        case SCHANNEL_REMOVE_POST:
            return {
                ...state,
                posts: state.posts.filter(({ id }) => id != data),
                unreadPosts: state.unreadPosts.filter(({ id }) => id != data),
            };
        case SCHANNEL_ADD_USER:
            return {
                ...state, //  fix something must be fixed
                users: state.users.find(({ id }) => id == data.id)
                    ? state.users.map((item) =>
                          item.id == data.id ? { ...item, ...data } : item
                      )
                    : [...state.users, data],
            };
        default:
            return state;
    }
};

export default schannels;
