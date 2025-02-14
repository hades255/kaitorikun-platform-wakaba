import { useState, useEffect } from 'react';
import {
    React,
    useDispatch,
    Button,
    postData,
    getData,
    ToastNotification,
    PanelContent,
    getItem,
} from "../../../components";
import { withRouter } from "react-router-dom";
import CustomerTable from "./table";
import FilterableTable from "./filterable-table"

const CustomerList = (props) => {
    const dispatch = useDispatch();
    const [customers, setCustomers] = useState([])

    useEffect(() => {
        if (getItem("userdata").length === 0) {
            props.history.push("/");
        }
    }, [dispatch]);

    useEffect(() => {
        // API Call
        const fetchData = async () => {
            const formData = new FormData();
            let result = await postData("customer/list", formData)
            setCustomers([])
            if (result.status === 200) {
                let data = result.data;
                setCustomers(data.customers);
            }
        };
        fetchData();
    }, []);

    const handleCustomerEdit = async (data) => {
        props.history.push("/customer/edit", { pathname: "/customer/edit", id: data.id });
    };

    return (
        <PanelContent title="">
            <div className="page-title">顧客一覧</div>

            <div>
                <CustomerTable
                    dataSource={customers}
                    onHandleEdit={handleCustomerEdit}
                />
            </div>
        </PanelContent>
    );
};

export default withRouter(CustomerList);
