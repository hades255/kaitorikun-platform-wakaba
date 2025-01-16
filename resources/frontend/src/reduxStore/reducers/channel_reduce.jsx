import {
    ADD_REACTION,
    NEW_CHANNEL,
    NEW_POST,
    REMOVE_REACTION,
    REPLY_POST,
    SELECT_CHANNEL,
} from "../actions/channel_action";

const initialState = {
    channels: [
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
    ],
    channel: null,
    users: [],
    posts: [],
};
const channels = (state = initialState, actions) => {
    switch (actions.type) {
        case NEW_CHANNEL:
            return {
                ...state,
                channels: [...state.channels, actions.payload.data],
            };
        case SELECT_CHANNEL:
            return {
                ...state,
                channel: state.channels.find(
                    ({ id }) => id == actions.payload.data
                ),
                // users: [],   //  todo    get these from database when click channel
                // posts: [],
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
                    item.id == actions.payload.data.post
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
        case ADD_REACTION:
            return {
                ...state,
                posts: state.posts.map((item) =>
                    item.id == actions.payload.data.post
                        ? {
                              ...item,
                              reactions: [
                                  ...item.reactions,
                                  actions.payload.data.reaction,
                              ],
                          }
                        : item
                ),
            };
        case REMOVE_REACTION:
            return {
                ...state,
                posts: state.posts.map((item) =>
                    item.id == actions.payload.data.post
                        ? {
                              ...item,
                              reactions: item.reactions.filter(
                                  (reaction) =>
                                      reaction.user ==
                                          actions.payload.data.user &&
                                      reaction.emoji !=
                                          actions.payload.data.reaction
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
