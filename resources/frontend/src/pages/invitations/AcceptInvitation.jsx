import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";
import {
    Button,
    Typography,
    CircularProgress,
    Alert,
    Box,
} from "@mui/material";
import { actionChannel, actionTheme } from "../../reduxStore";
import { useQuery } from "../../components/helper";
import { useAuth } from "../../contexts/AuthContext";
import api from "../../api";

const AcceptInvitation = ({ history, location }) => {
    const query = useQuery(location);
    const invitationId = query.get("token");
    const { auth } = useAuth();

    const dispatch = useDispatch();

    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");

    useEffect(() => {
        dispatch(actionTheme.handleSetPageSidebar(false));
        dispatch(actionTheme.handleSetFooter(false));
        dispatch(actionTheme.handleSetPageHeader(false));
        return () => {
            dispatch(actionTheme.handleSetPageHeader(true));
            dispatch(actionTheme.handleSetPageSidebar(true));
            dispatch(actionTheme.handleSetFooter(true));
            dispatch(actionTheme.handleSetPageHeader(true));
        };
    }, [dispatch]);

    useEffect(() => {
        setLoading(true);
        if (!invitationId) {
            setMessage("招待 URL エラー");
            return;
        }
        const viewedFunc = async () => {
            try {
                await axios.post(`/api/invitations/${invitationId}/view`);
            } catch (error) {
                console.log(error);
                setMessage(
                    error.response.data.message ||
                        "サーバーに接続できませんでした."
                );
            } finally {
                setLoading(false);
            }
        };
        viewedFunc();
    }, [invitationId]);

    const handleAccept = async () => {
        setLoading(true);
        setMessage("");
        try {
            const response = await axios.post(
                `/api/invitations/${invitationId}/accept`
            );
            setMessage(response.data.message);
            if (auth) {
                const getJoinedCommunities = async () => {
                    try {
                        const response = await api.get(`communities/joined`);
                        dispatch(
                            actionChannel.handleSetCommunity(
                                response.data.communities
                            )
                        );
                    } catch (error) {
                        console.log(error);
                    }
                };
                getJoinedCommunities();
            }
            setTimeout(() => {
                history.push("/communities");
            }, 2000);
        } catch (error) {
            console.log(error);
            setMessage(
                error.response.data.message || "招待を承諾できませんでした."
            );
        } finally {
            setLoading(false);
        }
    };

    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "center",
                py: 10,
            }}
        >
            <Box sx={{ width: "70%", maxWidth: 600 }}>
                {message && <Alert severity="info">{message}</Alert>}
                <Typography variant="h4" py={4}>
                    招待を受け入れる
                </Typography>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={handleAccept}
                    disabled={loading}
                >
                    {loading ? (
                        <CircularProgress size={24} />
                    ) : (
                        "招待を受け入れる"
                    )}
                </Button>
            </Box>
        </Box>
    );
};

export default withRouter(AcceptInvitation);
