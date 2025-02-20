import {
    React,
    useDispatch,
    setItem,
    useEffect,
    postData,
    ToastNotification,
    getItem,
} from "../../components";
import { actionTheme, utilityAction } from "../../reduxStore";
import { withRouter } from "react-router-dom";
import FormLogin from "./form";
import { useAuth } from "../../contexts/AuthContext";

const Login = (props) => {
    const dispatch = useDispatch();
    const auth = useAuth();

    useEffect(() => {
        if (getItem("userdata").length === 0) {
            props.history.push("/");
        } else {
            props.history.push("/todo");
        }
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

    const handleSubmit = async (data) => {
        dispatch(utilityAction.setLoading("content"));
        if (!/^[a-zA-Z0-9]*$/.test(data.password)) {
            ToastNotification("error", "半角英数字のみ入力してください");
            return;
        }

        try {
            let feedback = await postData("login", {
                email: data.email,
                password: data.password,
            });
            if (feedback.status === 200) {
                setItem("userdata", feedback.data.result);
                auth.setAuth(feedback.data.result);
                console.log(getItem("userdata"));

                setTimeout(() => {
                    props.history.push("/todo");
                    window.location.reload();
                }, 300);
            }
            // dispatch(utilityAction.stopLoading());
        } catch (error) {
            console.log(error);
            ToastNotification("error", error?.message);
            dispatch(utilityAction.stopLoading());
        }
    };

    return (
        <div className="login-box container" style={{ marginTop: "10%" }}>
            <div className="card card-outline card-primary">
                <div className="card-header login-logo">
                    業務システム買取くん
                </div>
                <div className="card-body">
                    <p className="login-box-msg">ログイン</p>
                    <FormLogin onSubmit={(data) => handleSubmit(data)} />
                </div>
            </div>
        </div>
    );
};

export default withRouter(Login);
