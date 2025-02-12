//Mendaftarkan reducer / Menggabungkan
import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

import themes from "./thme_reducer";
import utility from "./utility_reduce";
import channels from "./channel_reduce";
import schannels from "./schannel_reduce";
import chats from "./chat_reduce";

export default combineReducers({
    themes: themes,
    utility: utility,
    channels: channels,
    schannels: schannels,
    chats: chats,
    form: formReducer,
});
