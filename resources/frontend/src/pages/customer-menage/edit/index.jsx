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
import FormCustomerEdit from "./form";

const CustomerEdit = (props) => {
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
            <FormCustomerEdit
                customerId={props.location.state.id}
            />
        </PanelContent>
    );
};

export default withRouter(CustomerEdit);
