import React, { useCallback, useEffect, useState } from "react";
import { Button, Dialog, TextField } from "@mui/material";
import api from "../../api";
import { selectorChannel } from "../../reduxStore";
import { useAuth } from "../../contexts/AuthContext";
import { PanelContent, ToastNotification, useSelector } from "../../components";
import Post from "./Post";
import PostEditor from "./PostEditor";

const Channels = () => {
    const channel = useSelector(selectorChannel.handleGetChannel);
    const channels = useSelector(selectorChannel.handleGetChannels);
    const posts = useSelector(selectorChannel.handleGetPosts);
    const users = useSelector(selectorChannel.handleGetUsers);

    const { auth } = useAuth();

    const [showPostEditor, setShowPostEditor] = useState(false);
    const [showInviteDialog, setShowInviteDialog] = useState(false);
    const [inviteEmail, setInviteEmail] = useState("");

    const handleCreatePost = useCallback(
        (post) => {
            const createPostFunc = async () => {
                try {
                    // const response =
                    await api.post("posts", {
                        ...post,
                        channel_id: channel.id,
                    });
                    // dispatch(actionChannel.handleAddPostToChannel(response.data));
                    setShowPostEditor(false);
                } catch (error) {
                    console.log(error);
                }
            };
            createPostFunc();
        },
        [channel]
    );

    const handleSubmitInvitation = useCallback(
        (e) => {
            e.preventDefault();
            console.log(inviteEmail);
            const inviteFunc = async () => {
                try {
                    const response = await api.post("invitations", {
                        email: inviteEmail,
                        community_id: channel.id,
                    });
                    console.log(response);
                    ToastNotification("success", "招待が正常に送信されました");
                    setInviteEmail("");
                    setShowInviteDialog(false);
                } catch (error) {
                    console.log(error);
                    if (error.response?.status == 404)
                        ToastNotification(
                            "warning",
                            "登録ユーザーに招待を送信できます"
                        );
                }
            };
            inviteFunc();
        },
        [auth, channel, inviteEmail]
    );

    useEffect(() => setShowPostEditor(false), [channel]);

    return (
        <PanelContent
            headerContent
            title={channel ? channel.name : "チャンネル"}
        >
            {channel ? (
                <div>
                    {!showPostEditor && (
                        <div className="mb-2">
                            <Button
                                variant="contained"
                                onClick={() => setShowPostEditor(true)}
                                sx={{ mr: 1 }}
                            >
                                {/* Start New Post */}新しい投稿を開始
                            </Button>
                            <Button
                                variant="outlined"
                                onClick={() => setShowInviteDialog(true)}
                            >
                                {/* Invite People */}人を招待
                            </Button>
                        </div>
                    )}

                    {showPostEditor && (
                        <PostEditor
                            onPost={handleCreatePost}
                            onClose={() => setShowPostEditor(false)}
                        />
                    )}

                    {posts.map((post) => (
                        <Post key={post.id} post={post} users={users} />
                    ))}

                    <Dialog
                        open={showInviteDialog}
                        onClose={() => setShowInviteDialog(false)}
                    >
                        <div className="p-2">
                            <form onSubmit={handleSubmitInvitation}>
                                <div className="text-lg">
                                    {/* Invite People */}人を招待
                                </div>
                                <TextField
                                    fullWidth
                                    // label="Email"
                                    label="メール"
                                    type="email"
                                    required
                                    value={inviteEmail}
                                    onChange={(e) =>
                                        setInviteEmail(e.target.value)
                                    }
                                    sx={{ my: 2 }}
                                />
                                <Button variant="contained" type="submit">
                                    {/* Send Invite */}招待を送信
                                </Button>
                            </form>
                        </div>
                    </Dialog>
                </div>
            ) : channels && channels.length > 0 ? (
                <div className="w-full flex justify-center pt-20 pb-12">
                    <div className="flex flex-col gap-4">
                        <div className="text-xl">
                            {/* Build your community */}コミュニティを構築する
                        </div>
                        <div className="">
                            {/* Plan community events, engage in discussions, and
                            create a sage space to collaborate. */}
                            コミュニティ
                            イベントを計画し、ディスカッションに参加し、コラボレーションのための賢明なスペースを作成します。
                        </div>
                        <div className="flex gap-2"></div>
                    </div>
                </div>
            ) : (
                <div>{/* Create new Channel */}新しいチャンネルを作成</div>
            )}
        </PanelContent>
    );
};

export default Channels;
