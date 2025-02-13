import { useState } from "react";
import {
    Link,
    getItem,
    React,
    openTab,
    useDispatch,
    checkSidebarClass,
    useSelector,
} from "../..";
import { Dialog, DialogTitle, DialogContent } from "@mui/material";
import { withRouter } from 'react-router-dom';

const Menu = (props) => {
    const [openCustomerDialog, setOpenCustomerDialog] = useState(false)

    const handleVisitShopClick = () => {
        setOpenCustomerDialog(true);
    };

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
        <div className="staff-menu-items">
            <Link to="#" className="menu-item">始業</Link>
            <Link to="/customer/list" className="menu-item">顧客一覧</Link>
            <div
                className="menu-item"
                onClick={handleVisitShopClick}
            >
                来店
            </div>
            <Link to="/purchase/list" className="menu-item">買取計算書一覧</Link>
            <Link to="#" className="menu-item">商品一覧</Link>
            <Link to="#" className="menu-item">業者査定シート</Link>
            <Link to="#" className="menu-item">業者卸発送一覧</Link>
            <Link to="#" className="menu-item">月次収支報告書</Link>
            <Link to="#" className="menu-item">金庫入出金履歴</Link>
            <Link to="#" className="menu-item">終業</Link>
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
        </div>
    );
};

export default withRouter(Menu);
