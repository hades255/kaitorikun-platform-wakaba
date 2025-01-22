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
import { withRouter } from "react-router-dom";
import FormCustomerRegister from "./form";

const CustomerRegister = (props) => {
    const dispatch = useDispatch();

    useEffect(() => {
        if (getItem("userdata").length === 0) {
            props.history.push("/");
        }
    }, [dispatch]);

    const handleSubmit = async (data) => {
    };
    return (
        <PanelContent title="">
            <div className="page-title">顧客情報</div>
            <FormCustomerRegister onSubmit={(data) => handleSubmit(data)} />
        </PanelContent>
    );
};

export default withRouter(CustomerRegister);
