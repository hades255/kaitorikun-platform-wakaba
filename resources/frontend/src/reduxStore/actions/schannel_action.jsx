import { handler } from "./channel_action";

export const SET_SCHANNELs = "@SCHANNEL/SET";
export const SELETE_SCHANNELs = "@SCHANNEL/SELETE";
export const SELETE_SCHANNEL_POST_CREATED = "@SCHANNEL/POST_CREATED";
export const SELETE_SCHANNEL_POST_EDITED = "@SCHANNEL/POST_EDITED";
export const SCHANNEL_REPLY_POST = "@SCHANNELS/REPLY_POST";
export const SCHANNEL_ADD_REACTION = "@SCHANNELS/ADD_REACTION";
export const SCHANNEL_REMOVE_REACTION = "@SCHANNELS/REMOVE_REACTION";
export const SCHANNEL_REMOVE_POST = "@SCHANNELS/REMOVE_POST";
export const SCHANNEL_ADD_USER = "@SCHANNELS/ADD_USER";

const handleSetSChannels = (data) => handler(data, SET_SCHANNELs);
const handleSeleteSChannels = (data) => handler(data, SELETE_SCHANNELs);
const handleAddPost = (data) => handler(data, SELETE_SCHANNEL_POST_CREATED);
const handlePostEdited = (data) => handler(data, SELETE_SCHANNEL_POST_EDITED);
const handlePostReplied = (data) => handler(data, SCHANNEL_REPLY_POST);
const handlePostAddReaction = (data) => handler(data, SCHANNEL_ADD_REACTION);
const handlePostRemoveReaction = (data) =>
    handler(data, SCHANNEL_REMOVE_REACTION);
const handlePostRemoved = (data) => handler(data, SCHANNEL_REMOVE_POST);
const handleAddUser = (data) => handler(data, SCHANNEL_ADD_USER);

const actionSChannel = {
    handleSetSChannels,
    handleSeleteSChannels,
    handleAddPost,
    handlePostEdited,
    handlePostReplied,
    handlePostAddReaction,
    handlePostRemoveReaction,
    handlePostRemoved,
    handleAddUser,
};

export { actionSChannel };
