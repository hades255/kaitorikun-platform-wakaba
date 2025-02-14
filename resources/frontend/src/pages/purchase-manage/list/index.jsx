import { useState, useEffect } from 'react';
import {
    React,
    useDispatch,
    postData,
    PanelContent,
    getItem,
} from "../../../components";
import { withRouter } from "react-router-dom";
import PurchaseTable from "./table";
const PurchaseList = (props) => {
    const dispatch = useDispatch();
    const [purchases, setPurchases] = useState([])

    useEffect(() => {
        if (getItem("userdata").length === 0) {
            props.history.push("/");
        }
    }, [dispatch]);

    useEffect(() => {
        // API Call
        const fetchData = async () => {
            const formData = new FormData();
            let result = await postData("purchase/list", formData)
            setPurchases([])
            if (result.status === 200) {
                let data = result.data;
                setPurchases(data.purchases);
            }
        };
        fetchData();
    }, []);

    const handlePurchaseEdit = async (data) => {
        props.history.push("/purchase/edit", { pathname: "/purchase/edit", id: data.id });
    };

    return (
        <PanelContent title="">
            <div className="page-title">買取計算書一覧</div>
            <div>
                <PurchaseTable
                    purchases={purchases}
                    onHandleEdit={handlePurchaseEdit}
                />
            </div>
        </PanelContent>
    );
};

export default withRouter(PurchaseList);
