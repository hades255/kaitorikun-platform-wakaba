import {
    ADD_REACTION,
    NEW_CHANNEL,
    NEW_POST,
    NEW_PUBLIC_CHANNEL,
    REMOVE_REACTION,
    REPLY_POST,
    SELECT_CHANNEL,
    SET_CHANNEL,
    SET_PUBLIC_CHANNEL,
} from "../actions/channel_action";

const initialState = {
    channels: [],
    publicChannels: [],
    channel: null,
    users: [],
    posts: [],
};
const channels = (state = initialState, actions) => {
    switch (actions.type) {
        case SET_CHANNEL:
            return {
                ...state,
                channels: actions.payload.data,
            };
        case SET_PUBLIC_CHANNEL:
            return {
                ...state,
                publicChannels: actions.payload.data,
            };
        case NEW_CHANNEL:
            return {
                ...state,
                channels: [...state.channels, actions.payload.data],
            };
        case NEW_PUBLIC_CHANNEL:
            return {
                ...state,
                publicChannels: [...state.publicChannels, actions.payload.data],
            };
        case SELECT_CHANNEL:
            return {
                ...state,
                channel: actions.payload.data.channel,
                users: actions.payload.data.users,
                posts: actions.payload.data.posts,
            };
        case NEW_POST:
            return {
                ...state,
                posts: [...state.posts, actions.payload.data],
            };
        case REPLY_POST:
            return {
                ...state,
                posts: state.posts.map((item) =>
                    item.id == actions.payload.data.post_id
                        ? {
                              ...item,
                              replies: [
                                  ...(item.replies ?? []),
                                  actions.payload.data,
                              ],
                          }
                        : item
                ),
            };
        case ADD_REACTION:
            return {
                ...state,
                posts: state.posts.map((item) =>
                    item.id == actions.payload.data.post_id
                        ? {
                              ...item,
                              reactions: [
                                  ...(item.reactions ?? []),
                                  actions.payload.data,
                              ],
                          }
                        : item
                ),
            };
        case REMOVE_REACTION:
            return {
                ...state,
                posts: state.posts.map((item) =>
                    item.id == actions.payload.data.post_id
                        ? {
                              ...item,
                              reactions: (item.reactions ?? []).filter(
                                  ({ id }) => id != actions.payload.data.id
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
