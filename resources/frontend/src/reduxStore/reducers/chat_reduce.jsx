import {
    ADD_USER,
    PIN_USER,
    READ_CHATS,
    RECEIVE_CHAT,
    SET_CHATS,
    SET_CURRENT_USER,
    SET_USER_STATUS,
    SET_USERS,
} from "../actions/chat_action";

const pinned = localStorage.getItem("pinned_chat_user") || "[]";

const initialState = {
    chats: [],
    users: [],
    pinned: JSON.parse(pinned),
    recently: [],
    current: null,
};
const chats = (state = initialState, actions) => {
    switch (actions.type) {
        case RECEIVE_CHAT:
            let recentlyChat = [];
            if (!state.recently?.includes(actions.payload.data.from))
                recentlyChat.push(actions.payload.data.from);
            if (!state.recently?.includes(actions.payload.data.to))
                recentlyChat.push(actions.payload.data.to);
            return {
                ...state,
                chats: [...state.chats, actions.payload.data],
                recently: [...state.recently, ...recentlyChat],
            };
        case SET_CHATS:
            let recently = [];
            actions.payload.data.forEach((item) => {
                if (!recently?.includes(item.from)) recently.push(item.from);
                if (!recently?.includes(item.to)) recently.push(item.to);
            });
            return { ...state, chats: actions.payload.data, recently };
        case READ_CHATS:
            return {
                ...state,
                chats: state.chats?.map((item) => ({
                    ...item,
                    status:
                        item.from == actions.payload.data
                            ? "read"
                            : item.status,
                })),
            };
        case SET_USERS:
            return { ...state, users: actions.payload.data };
        case ADD_USER:
            return { ...state };
        case SET_USER_STATUS:
            return { ...state };
        case PIN_USER:
            if (actions.payload.data.pinned) {
                localStorage.setItem(
                    "pinned_chat_user",
                    JSON.stringify([
                        ...state.pinned,
                        actions.payload.data.userId,
                    ])
                );
            } else {
                localStorage.setItem(
                    "pinned_chat_user",
                    JSON.stringify(
                        state.pinned?.filter(
                            (item) => item != actions.payload.data.userId
                        )
                    )
                );
            }
            return {
                ...state,
                pinned: actions.payload.data.pinned
                    ? [...state.pinned, actions.payload.data.userId]
                    : state.pinned?.filter(
                          (item) => item != actions.payload.data.userId
                      ),
            };
        case SET_CURRENT_USER:
            return { ...state, current: actions.payload.data };
        default:
            return state;
    }
};

export default chats;
