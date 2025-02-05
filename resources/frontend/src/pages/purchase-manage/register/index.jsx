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
import FormPurchaseRegister from "./form";

const PurchaseRegister = (props) => {
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
            <div className="page-title">買取計算書</div>
            <FormPurchaseRegister onSubmit={(data) => handleSubmit(data)} />
        </PanelContent>
    );
};

export default withRouter(PurchaseRegister);
