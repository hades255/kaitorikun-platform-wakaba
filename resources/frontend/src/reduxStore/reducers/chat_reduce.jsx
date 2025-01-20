import {
    ADD_USER,
    PIN_USER,
    RECEIVE_CHAT,
    SET_CHATS,
    SET_CURRENT_USER,
    SET_USER_STATUS,
    SET_USERS,
} from "../actions/chat_action";

const initialState = {
    chats: [],
    users: [
        { id: 1, name: "John Doe" },
        { id: 2, name: "Jane Smith" },
    ],
    current: null,
};
const chats = (state = initialState, actions) => {
    switch (actions.type) {
        case RECEIVE_CHAT:
            return { ...state, chats: [...state.chats, actions.payload.data] };
        case SET_CHATS:
            return { ...state, chats: actions.payload.data };
        case SET_USERS:
            return { ...state };
        case ADD_USER:
            return { ...state };
        case SET_USER_STATUS:
            return { ...state };
        case PIN_USER:
            return {
                ...state,
                users: state.users.map((item) => ({
                    ...item,
                    pinned:
                        item.id == actions.payload.data.userId
                            ? actions.payload.data.pinned
                            : item.pinned,
                })),
            };
        case SET_CURRENT_USER:
            return { ...state, current: actions.payload.data };
        default:
            return state;
    }
};

export default chats;
