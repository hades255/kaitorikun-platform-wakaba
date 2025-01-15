export const NEW_CHANNEL = "NEW_CHANNEL";
export const SELECT_CHANNEL = "SELECT_CHANNEL";
export const NEW_POST = "NEW_POST";
export const REPLY_POST = "REPLY_POST";
export const ADD_EMOJI = "ADD_EMOJI";
export const REMOVE_EMOJI = "REMOVE_EMOJI";

const handler = (data, action) => (dispatch) => {
    dispatch({
        type: action,
        payload: {
            data: data,
        },
    });
};

const handleAddChannel = (data) => handler(data, NEW_CHANNEL);
const handleSelectChannel = (data) => handler(data, SELECT_CHANNEL);
const handleAddPostToChannel = (data) => handler(data, NEW_POST);
const handleReplyPost = (data) => handler(data, REPLY_POST);
const handleAddEmoji = (data) => handler(data, ADD_EMOJI);
const handleRemoveEmoji = (data) => handler(data, REMOVE_EMOJI);

const actionChannel = {
    handleAddChannel,
    handleSelectChannel,
    handleAddPostToChannel,
    handleReplyPost,
    handleAddEmoji,
    handleRemoveEmoji,
};
export { actionChannel };
