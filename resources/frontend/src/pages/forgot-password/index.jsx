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
import FormForgotPassword from "./form";

const ForgotPassword = (props) => {
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

    const handleSubmit = async (data) => {
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
                    <FormForgotPassword onSubmit={(data) => handleSubmit(data)} />
                </div>
            </div>
        </div>
    );
};

export default withRouter(ForgotPassword);
