import { handler } from "./channel_action";

export const RECEIVE_CHAT = "RECEIVE_CHAT";
export const SET_CHATS = "SET_CHATS";
export const READ_CHATS = "READ_CHATS";
export const SET_USERS = "SET_USERS";
export const ADD_USER = "ADD_USER";
export const SET_USER_STATUS = "SER_USER_STATUS";
export const PIN_USER = "PIN_USER";
export const SET_CURRENT_USER = "SET_CURRENT_USER";

const handleReceiveChat = (data) => handler(data, RECEIVE_CHAT);
const handleSetChats = (data) => handler(data, SET_CHATS);
const handleReadChats = (data) => handler(data, READ_CHATS);
const handleSetUsers = (data) => handler(data, SET_USERS);
const handleAddUsers = (data) => handler(data, ADD_USER);
const handleSetUserStatus = (data) => handler(data, SET_USER_STATUS);
const handlePinUser = (data) => handler(data, PIN_USER);
const handleSetCurrentUser = (data) => handler(data, SET_CURRENT_USER);

const actionChat = {
    handleReceiveChat,
    handleSetChats,
    handleReadChats,
    handleSetUsers,
    handleAddUsers,
    handleSetUserStatus,
    handlePinUser,
    handleSetCurrentUser,
};

export { actionChat };
