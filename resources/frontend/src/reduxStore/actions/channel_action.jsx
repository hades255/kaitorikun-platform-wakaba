export const SET_CHANNEL = "SET_CHANNEL";
export const SET_PUBLIC_CHANNEL = "SET_PUBLIC_CHANNEL";
export const NEW_CHANNEL = "NEW_CHANNEL";
export const NEW_PUBLIC_CHANNEL = "NEW_PUBLIC_CHANNEL";
export const SELECT_CHANNEL = "SELECT_CHANNEL";
export const NEW_POST = "NEW_POST";
export const REPLY_POST = "REPLY_POST";
export const ADD_REACTION = "ADD_REACTION";
export const REMOVE_REACTION = "REMOVE_REACTION";

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
};
export { actionChannel };
