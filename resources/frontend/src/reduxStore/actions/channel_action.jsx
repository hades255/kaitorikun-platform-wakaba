export const SET_CHANNEL = "@CHANNELS/SET_CHANNEL";
export const NEW_CHANNEL = "@CHANNELS/NEW_CHANNEL";
export const UPDATE_CHANNEL = "@CHANNELS/UPDATE_CHANNEL";
export const SELECT_CHANNEL = "@CHANNELS/SELECT_CHANNEL";
export const REMOVE_CHANNEL = "@CHANNEL/REMOVE_CHANNEL";
export const NEW_POST = "@CHANNELS/NEW_POST";
export const REPLY_POST = "@CHANNELS/REPLY_POST";
export const ADD_REACTION = "@CHANNELS/ADD_REACTION";
export const REMOVE_REACTION = "@CHANNELS/REMOVE_REACTION";
export const SET_COMMUNITY = "@CHANNELS/SET_COMMUNITY";
export const SET_PUBLIC_COMMUNITY = "@CHANNELS/SET_PUBLIC_COMMUNITY";
export const NEW_COMMUNITY = "@CHANNELS/NEW_COMMUNITY";
export const UPDATE_COMMUNITY = "@CHANNELS/UPDATE_COMMUNITY";
export const LEAVE_COMMUNITY = "@CHANNELS/LEAVE_COMMUNITY";
export const REMOVE_COMMUNITY = "@CHANNEL/REMOVE_COMMUNITY";
export const REMOVE_POST = "@CHANNELS/REMOVE_POST";
export const EDIT_POST = "@CHANNELS/EDIT_POST";
export const ADD_USER = "@CHANNELS/ADD_USER";
export const REMOVE_USER = "@CHANNELS/REMOVE_USER";

export const handler = (data, action) => (dispatch) => {
    dispatch({
        type: action,
        payload: {
            data: data,
        },
    });
};

const handleSetChannel = (data) => handler(data, SET_CHANNEL);
const handleAddChannel = (data) => handler(data, NEW_CHANNEL);
const handleUpdateChannel = (data) => handler(data, UPDATE_CHANNEL);
const handleSelectChannel = (data) => handler(data, SELECT_CHANNEL);
const handleRemoveChannel = (data) => handler(data, REMOVE_CHANNEL);
const handleAddPostToChannel = (data) => handler(data, NEW_POST);
const handleReplyPost = (data) => handler(data, REPLY_POST);
const handleAddREACTION = (data) => handler(data, ADD_REACTION);
const handleRemoveREACTION = (data) => handler(data, REMOVE_REACTION);

const handleSetCommunity = (data) => handler(data, SET_COMMUNITY);
const handleSetPublicCommunity = (data) => handler(data, SET_PUBLIC_COMMUNITY);
const handleAddCommunity = (data) => handler(data, NEW_COMMUNITY);
const handleUpdateCommunity = (data) => handler(data, UPDATE_COMMUNITY);
const handleRemoveCommunity = (data) => handler(data, REMOVE_COMMUNITY);
const handleLeaveCommunity = (data) => handler(data, LEAVE_COMMUNITY);

const handleRemovePost = (data) => handler(data, REMOVE_POST);
const handlePostEdited = (data) => handler(data, EDIT_POST);
const handleAddUser = (data) => handler(data, ADD_USER);
const handleRemoveUser = (data) => handler(data, REMOVE_USER);

const actionChannel = {
    handleSetChannel,
    handleAddChannel,
    handleUpdateChannel,
    handleSelectChannel,
    handleAddPostToChannel,
    handleReplyPost,
    handleAddREACTION,
    handleRemoveREACTION,
    handleSetCommunity,
    handleSetPublicCommunity,
    handleAddCommunity,
    handleUpdateCommunity,
    handleLeaveCommunity,
    handleRemovePost,
    handlePostEdited,
    handleAddUser,
    handleRemoveUser,
    handleRemoveChannel,
    handleRemoveCommunity,
};
export { actionChannel };
