import {
    ADD_REACTION,
    NEW_CHANNEL,
    NEW_POST,
    REMOVE_REACTION,
    REPLY_POST,
    SELECT_CHANNEL,
    SET_CHANNEL,
} from "../actions/channel_action";

const initialState = {
    channels: [],
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
        case NEW_CHANNEL:
            return {
                ...state,
                channels: [...state.channels, actions.payload.data],
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
                                  ({ id }) =>
                                      id != actions.payload.data.reaction_id
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

/**
 * 
 
        {
            id: 1,
            name: "Sports",
            description: "blah blah blah",
            icon: "",
            requireApproval: false,
            isPublic: true,
        },
        {
            id: 2,
            name: "Fruits",
            description: "blah blah blah",
            icon: "",
            requireApproval: false,
            isPublic: true,
        },
        {
            id: 3,
            name: "Weathers",
            description: "blah blah blah",
            icon: "",
            requireApproval: false,
            isPublic: true,
        },
 */
