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
import FormPurchaseEdit from "./form";

const PurchaseEdit = (props) => {
    const dispatch = useDispatch();

    useEffect(() => {
        if (getItem("userdata").length === 0) {
            props.history.push("/");
        }
    }, [dispatch]);

    useEffect(() => {
    }, []); // Empty dependency array means it runs once when mounted

    return (
        <PanelContent title="">
            <div className="page-title">買取明細書</div>
            <FormPurchaseEdit
                purchaseId={props.location.state.id}
            />
        </PanelContent>
    );
};

export default withRouter(PurchaseEdit);
