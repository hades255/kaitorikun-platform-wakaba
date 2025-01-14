import {
    React,
    useDispatch,
    setItem,
    useEffect,
    postData,
    ToastNotification,
    PanelContent,
    getItem,
} from "../../../components";
import { actionTheme, utilityAction } from "../../../reduxStore";
import { withRouter } from "react-router-dom";
import FormStaffExit from "./form";

const StaffExit = (props) => {
    const dispatch = useDispatch();

    useEffect(() => {
        if (getItem("userdata").length === 0) {
            props.history.push("/");
        }
    }, [dispatch]);

    const handleSubmit = async (data) => {
        dispatch(utilityAction.setLoading("content"));
        try {
            let feedback = await postData("staff/register", {
                email: data.email,
                password: data.password,
            })
            if (feedback.status === 200) {
                setItem("userdata", feedback.data.result);

                setTimeout(() => {
                    props.history.push("/todo");
                    window.location.reload();
                }, 300);
            }
            dispatch(utilityAction.stopLoading());
        } catch (error) {
            console.log(error)
            ToastNotification("info", error?.message);
            dispatch(utilityAction.stopLoading());
        }
    };
    return (
        <PanelContent title="">
            <div className="page-title">新規スタッフ登録 <br />(本登録入力フォーム)</div>
            <FormStaffExit onSubmit={(data) => handleSubmit(data)} />
        </PanelContent>
    );
};

export default withRouter(StaffExit);
