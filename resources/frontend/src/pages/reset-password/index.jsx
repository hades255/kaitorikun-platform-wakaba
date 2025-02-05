import {
    useDispatch,
    setItem,
    useEffect,
    postData,
    ToastNotification,
    getItem,
} from "../../components";
import { actionTheme, utilityAction } from "../../reduxStore";
import FormResetPassword from "./form";
import { withRouter } from "react-router-dom";
import React from 'react';

const ResetPassword = (props) => {
    const dispatch = useDispatch();

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

    let search = window.location.search
    const handleSubmit = async (data) => {
        if (data.newPassword !== data.confirmPassword) {
            ToastNotification("error", "パスワードが一致しません。");
            return;
        }
        try {
            let feedback = await postData("password/reset", {
                token: search.split("=")[1],
                password: data.newPassword,
            })
            if (feedback.status === 200) {
                if (window.confirm("パスワードの設定が完了しました。ログインをお願いします。")) {
                    props.history.push("/");
                }
            }
        } catch (error) {
            ToastNotification("error", "処理中にエラーが発生しました。");
        }
    };
    return (
        <div className="login-box container" style={{ marginTop: "10%" }}>
            <div className="card card-outline card-primary">
                <div className="card-header text-center">
                    <img
                        src="img/logo.png"
                        width={"200px"}
                        alt="logo"
                    />
                </div>
                <div className="card-body">
                    <FormResetPassword onSubmit={(data) => handleSubmit(data)} />
                </div>
            </div>
        </div>
    );
};

export default withRouter(ResetPassword);
