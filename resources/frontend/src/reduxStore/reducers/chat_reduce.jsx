import {
    ADD_USER,
    DELETE_CHATS,
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
    const data = actions.payload?.data;
    switch (actions.type) {
        case RECEIVE_CHAT:
            let recentlyChat = [];
            if (!state.recently?.includes(data.from))
                recentlyChat.push(data.from);
            if (!state.recently?.includes(data.to)) recentlyChat.push(data.to);
            return {
                ...state,
                chats: [...state.chats, data],
                recently: [...state.recently, ...recentlyChat],
            };
        case SET_CHATS:
            let recently = [];
            // data.forEach((item) => {
            //     if (item.type == "chat") {
            //         if (!recently?.includes(item.from))
            //             recently.push(item.from);
            //         if (!recently?.includes(item.to)) recently.push(item.to);
            //     }
            // });
            return { ...state, chats: data, recently };
        case READ_CHATS:
            return {
                ...state,
                chats: state.chats?.map((item) => ({
                    ...item,
                    status:
                        (data.type == "chat" && item.from == data.id) ||
                        (data.type === "group" && item.group_id == data.id)
                            ? "read"
                            : item.status,
                })),
            };
        case SET_USERS:
            return { ...state, users: data };
        case DELETE_CHATS:
            return {
                ...state,
                chats: state.chats?.filter((item) => item.id !== data),
            };
        case ADD_USER:
            return { ...state, users: [data, ...state.users] };
        case SET_USER_STATUS:
            return { ...state };
        case PIN_USER:
            if (data.pinned) {
                const pinned = [...state.pinned, data.userId];
                localStorage.setItem(
                    "pinned_chat_user",
                    JSON.stringify(pinned)
                );
                return { ...state, pinned };
            } else {
                const pinned = state.pinned?.filter(
                    (item) => item != data.userId
                );
                localStorage.setItem(
                    "pinned_chat_user",
                    JSON.stringify(pinned)
                );
                return { ...state, pinned };
            }
        case SET_CURRENT_USER:
            return { ...state, current: data };
        default:
            return state;
    }
};

export default chats;
