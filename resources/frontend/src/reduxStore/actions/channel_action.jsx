export const SET_CHANNEL = "@CHANNELS/SET_CHANNEL";
export const SET_PUBLIC_CHANNEL = "@CHANNELS/SET_PUBLIC_CHANNEL";
export const NEW_CHANNEL = "@CHANNELS/NEW_CHANNEL";
export const NEW_PUBLIC_CHANNEL = "@CHANNELS/NEW_PUBLIC_CHANNEL";
export const SELECT_CHANNEL = "@CHANNELS/SELECT_CHANNEL";
export const NEW_POST = "@CHANNELS/NEW_POST";
export const REPLY_POST = "@CHANNELS/REPLY_POST";
export const ADD_REACTION = "@CHANNELS/ADD_REACTION";
export const REMOVE_REACTION = "@CHANNELS/REMOVE_REACTION";
export const SET_COMMUNITY = "@CHANNELS/SET_COMMUNITY";
export const SET_PUBLIC_COMMUNITY = "@CHANNELS/SET_PUBLIC_COMMUNITY";
export const NEW_COMMUNITY = "@CHANNELS/NEW_COMMUNITY";
export const NEW_PUBLIC_COMMUNITY = "@CHANNELS/NEW_PUBLIC_COMMUNITY";
export const SET_COMMUNITY_AS_MINE = "@CHANNELS/SET_COMMUNITY_AS_MINE";
export const REMOVE_POST = "@CHANNELS/REMOVE_POST";

export const handler = (data, action) => (dispatch) => {
    dispatch({
        type: action,
        payload: {
            data: data,
        },
    });
};

const handleSetChannel = (data) => handler(data, SET_CHANNEL);
const handleSetPublicChannel = (data) => handler(data, SET_PUBLIC_CHANNEL);
const handleAddChannel = (data) => handler(data, NEW_CHANNEL);
const handleAddPublicChannel = (data) => handler(data, NEW_PUBLIC_CHANNEL);
const handleSelectChannel = (data) => handler(data, SELECT_CHANNEL);
const handleAddPostToChannel = (data) => handler(data, NEW_POST);
const handleReplyPost = (data) => handler(data, REPLY_POST);
const handleAddREACTION = (data) => handler(data, ADD_REACTION);
const handleRemoveREACTION = (data) => handler(data, REMOVE_REACTION);

const handleSetCommunity = (data) => handler(data, SET_COMMUNITY);
const handleSetPublicCommunity = (data) => handler(data, SET_PUBLIC_COMMUNITY);
const handleAddCommunity = (data) => handler(data, NEW_COMMUNITY);
const handleAddPublicCommunity = (data) => handler(data, NEW_PUBLIC_COMMUNITY);

const handleSetMyCommunity = (data) => handler(data, SET_COMMUNITY_AS_MINE);
const handleRemovePost = (data) => handler(data, REMOVE_POST);

const actionChannel = {
    handleSetChannel,
    handleSetPublicChannel,
    handleAddChannel,
    handleAddPublicChannel,
    handleSelectChannel,
    handleAddPostToChannel,
    handleReplyPost,
    handleAddREACTION,
    handleRemoveREACTION,
    handleSetCommunity,
    handleSetPublicCommunity,
    handleAddCommunity,
    handleAddPublicCommunity,
    handleSetMyCommunity,
    handleRemovePost,
};
export { actionChannel };
