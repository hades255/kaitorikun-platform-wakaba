import React, { useCallback, useEffect, useState } from "react";
import clsx from "clsx";
import { Button, Dialog, TextField } from "@mui/material";
import api from "../../api";
import { actionChannel, selectorChannel } from "../../reduxStore";
import { useAuth } from "../../contexts/AuthContext";
import { useCommunity } from "../../contexts/CommunityContext";
import {
    PanelContent,
    ToastNotification,
    useDispatch,
    useSelector,
} from "../../components";
import CreateCommunity from "../../components/community/New";
import Post from "./Post";
import PostEditor from "./PostEditor";
import CreateChannel from "../../components/community/NewChannel";

const preNamedCommunities = [
    { title: "自分で作成", value: "" },
    { title: "学校", value: "学校" },
    { title: "ビジネス", value: "ビジネス" },
    { title: "スポーツ", value: "スポーツ" },
    { title: "専門職", value: "専門職" },
    { title: "ライフイベント", value: "ライフイベント" },
    { title: "芸術と文化", value: "芸術と文化" },
    { title: "ゲーム", value: "ゲーム" },
    { title: "青少年団体", value: "青少年団体" },
    { title: "近所", value: "近所" },
    { title: "親", value: "親" },
    { title: "ボランティア", value: "ボランティア" },
];
// const preNamedCommunities = [
//     { title: "Create my own", value: "" },
//     { title: "School", value: "School" },
//     { title: "Business", value: "Business" },
//     { title: "Sports", value: "Sports" },
//     { title: "Professional", value: "Professional" },
//     { title: "Life events", value: "Life events" },
//     { title: "Arts and culture", value: "Arts and culture" },
//     { title: "Gaming", value: "Gaming" },
//     { title: "Youth organization", value: "Youth organization" },
//     { title: "Neighbourhood", value: "Neighbourhood" },
//     { title: "Parent", value: "Parent" },
//     { title: "Volunteering", value: "Volunteering" },
// ];

const Communities = () => {
    const dispatch = useDispatch();
    const channel = useSelector(selectorChannel.handleGetChannel);
    const communities = useSelector(selectorChannel.handleGetCommunities);
    const posts = useSelector(selectorChannel.handleGetPosts);
    const users = useSelector(selectorChannel.handleGetUsers);

    const { auth } = useAuth();
    const {
        showCommunityEditor,
        setShowCommunityEditor,
        showChannelEditor,
        setShowChannelEditor,
    } = useCommunity();

    const [showPostEditor, setShowPostEditor] = useState(false);
    const [showInviteDialog, setShowInviteDialog] = useState(false);
    const [inviteEmail, setInviteEmail] = useState("");

    const handleCreatePost = useCallback(
        (post) => {
            const createPostFunc = async () => {
                try {
                    const response = await api.post("posts", {
                        ...post,
                        channel_id: channel.id,
                        community_id: channel.community_id,
                    });
                    dispatch(
                        actionChannel.handleAddPostToChannel(response.data)
                    );
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

                    {typeof posts === Array &&
                        posts.map((post) => (
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
            ) : communities && communities.length > 0 ? (
                <div>{/* Create new Channel */}新しいチャンネルを作成</div>
            ) : (
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
                        <div className="flex justify-center">
                            <div className="w-full max-w-[768px] flex gap-2 justify-center items-center flex-wrap">
                                {preNamedCommunities.map((item, index) => (
                                    <PreNamedItems
                                        key={index}
                                        community={item}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            )}
            {showCommunityEditor && (
                <Dialog
                    open={showCommunityEditor}
                    onClose={() => setShowCommunityEditor(false)}
                >
                    <CreateCommunity />
                </Dialog>
            )}
            {showChannelEditor && (
                <Dialog
                    open={showChannelEditor}
                    onClose={() => setShowChannelEditor(false)}
                >
                    <CreateChannel />
                </Dialog>
            )}
        </PanelContent>
    );
};

export default Communities;

const PreNamedItems = ({ community }) => {
    const { setShowCommunityEditor, setPreSetCommunityName } = useCommunity();

    const handleClick = () => {
        setPreSetCommunityName(community.value);
        setShowCommunityEditor(true);
    };

    return (
        <div
            onClick={handleClick}
            className={clsx(
                "px-4 py-1 rounded-full border text-white font-semibold cursor-pointer transition-all",
                {
                    "bg-[#313239] hover:bg-[#212229]": community.value,
                    "bg-[#5a65ba] hover:bg-[#4a55aa]": !community.value,
                }
            )}
        >
            {community.title}
        </div>
    );
};
