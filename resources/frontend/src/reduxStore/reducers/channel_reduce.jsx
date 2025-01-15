import {
    ADD_EMOJI,
    NEW_CHANNEL,
    NEW_POST,
    REMOVE_EMOJI,
    REPLY_POST,
    SELECT_CHANNEL,
} from "../actions/channel_action";

const initialState = {
    channels: [],
    channel: {
        id: 0,
        name: "",
        description: "",
        icon: "",
        requireApproval: false,
        isPublic: true,
    },
    users: [],
    posts: [],
};
const channels = (state = initialState, actions) => {
    switch (actions.type) {
        case NEW_CHANNEL:
            return {
                ...state,
                channels: [...channels, actions.payload.data],
            };
        case SELECT_CHANNEL:
            return {
                ...state,
                channel: channels.find(({ id }) => id == actions.payload.data),
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
                    item.id == actions.payload.data.id
                        ? {
                              ...item,
                              replies: [
                                  ...item.replies,
                                  actions.payload.data.reply,
                              ],
                          }
                        : item
                ),
            };
        case ADD_EMOJI:
            return {
                ...state,
                posts: state.posts.map((item) =>
                    item.id == actions.payload.data.id
                        ? {
                              ...item,
                              emojis: [
                                  ...item.emojis,
                                  actions.payload.data.emoji,
                              ],
                          }
                        : item
                ),
            };
        case REMOVE_EMOJI:
            return {
                ...state,
                posts: state.posts.map((item) =>
                    item.id == actions.payload.data.id
                        ? {
                              ...item,
                              emojis: item.emojis.filter(
                                  (emoji) => emoji != actions.payload.data.emoji
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
