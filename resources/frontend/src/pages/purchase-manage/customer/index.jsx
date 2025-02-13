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
import FormPurchaseCustomer from "./form";

const PurchaseCustomer = (props) => {
    const dispatch = useDispatch();

    useEffect(() => {
        if (getItem("userdata").length === 0) {
            props.history.push("/");
        }
    }, [dispatch]);

    useEffect(() => {
    }, []); // Empty dependency array means it runs once when mounted

    const handleSubmit = async (data) => {
    };
    return (
        <PanelContent title="">
            <div className="page-title">顧客情報</div>
            <FormPurchaseCustomer
            />
        </PanelContent>
    );
};

export default withRouter(PurchaseCustomer);
