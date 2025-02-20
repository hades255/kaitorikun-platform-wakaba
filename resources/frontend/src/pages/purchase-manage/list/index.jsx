import { useState, useEffect } from 'react';
import {
    React,
    useDispatch,
    postData,
    PanelContent,
    getItem,
} from "../../../components";
import { withRouter } from "react-router-dom";
import { Dialog, DialogTitle, DialogContent } from "@mui/material";
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

    const [openCustomerDialog, setOpenCustomerDialog] = useState(false)
    const handlePurchaseRegister = () => {
        setOpenCustomerDialog(true);
    }

    const handleCustomerDialogClose = () => {
        setOpenCustomerDialog(false);
    };

    const handleNewCustomerClick = () => {
        setOpenCustomerDialog(false);
        props.history.push("/purchase/register");
    };

    const handleCustomerClick = () => {
        setOpenCustomerDialog(false);
        props.history.push("/purchase/customer");
    };

    return (
        <PanelContent title="">
            <div className="page-title">買取計算書一覧</div>
            <div>
                <PurchaseTable
                    purchases={purchases}
                    onHandleEdit={handlePurchaseEdit}
                    onHandlePurchaseRegister={handlePurchaseRegister}
                />
            </div>
            <Dialog
                open={openCustomerDialog}
                onClose={() => handleCustomerDialogClose()}
            >
                <div className='flex-center'
                    style={{
                        padding: '50px',
                        gap: '100px'
                    }}>
                    <div
                        className="cancel-btn"
                        onClick={handleNewCustomerClick}
                    >新規</div>
                    <div
                        className="register-btn"
                        onClick={handleCustomerClick}
                    >顧客（2回目以降）</div>
                </div>
            </Dialog>
        </PanelContent>
    );
};

export default withRouter(PurchaseList);
