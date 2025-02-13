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
import FormPurchaseContract from "./form";

const PurchaseContract = (props) => {
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
            <div className="page-title">買取明細書</div>
            <FormPurchaseContract
                purchaseId={props.location.state.id}
                onSubmit={(data) => handleSubmit(data)}
            />
        </PanelContent>
    );
};

export default withRouter(PurchaseContract);
