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
} from "../../components";
import { withRouter } from "react-router-dom";
import { Dialog, DialogTitle, DialogContent, DialogActions } from "@mui/material";
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import ItemsTable from "./items";

const ItemsList = (props) => {
    const dispatch = useDispatch();
    const [listType, setListType] = useState("items")
    const [categories1, setCategories1] = useState([])
    const [category1, setCategory1] = useState()
    const [openCategoryDialog, setOpenCategoryDialog] = useState(false)

    useEffect(() => {
        // API Call
        const fetchData = async () => {
            let result = await getData("datas")
            if (result.status === 200) {
                let data = result.data;
                setCategories1(data.categories1);
            }
        };
        fetchData();
    }, []);

    const handleItemsListClick = () => {
        setListType("items")
    };

    const handleCheckListClick = () => {
        setListType("check")
        setOpenCategoryDialog(true)
    };

    const handleYahooAuctionClick = () => {
        setListType("yahoo")
    };

    const handleCategoryDialogClose = () => {
        setOpenCategoryDialog(false)
    }

    const handleCategorySelectChange = (value) => {
        setCategory1(value)
        console.log(value);
        
    };

    return (
        <PanelContent title="">
            <div className="page-title">在庫一覧</div>
            <div className='flex-center'>
                <div className='screen-div3'></div>
                <div className='screen-div3 flex-center'>
                    <Button
                        loading
                        textLoading="Waiting"
                        type="submit"
                        color="success"
                        title="在庫一覧"
                        onClick={handleItemsListClick}
                    />
                    <Button
                        loading
                        textLoading="Waiting"
                        type="submit"
                        color="info"
                        title="業者査定シート"
                        onClick={handleCheckListClick}
                    />
                    <Button
                        loading
                        textLoading="Waiting"
                        type="submit"
                        color="warning"
                        title="ヤフオク"
                        onClick={handleYahooAuctionClick}
                    />
                </div>
                <div className='screen-div3'></div>
            </div>
            {
                listType == "items" &&
                <div>
                    <ItemsTable/>
                </div>
            }
            <Dialog
                open={openCategoryDialog}
                onClose={() => handleCategoryDialogClose()}
            >
                <div className='item-status-container'>
                    <label className='mt-20'>カテゴリー1を設定してください。</label>
                    <div>
                        <Select
                            onChange={(e) => handleCategorySelectChange(e.target.value)}
                            displayEmpty
                            className="shop-select"
                            value={category1}
                        >
                            {categories1.map((item, key) => (
                                <MenuItem key={item.id} value={item.id}>{item.name}</MenuItem>
                            ))}
                        </Select>
                    </div>
                    <div className="mt-5">
                        <Button
                            loading
                            textLoading="Waiting"
                            type="submit"
                            color="outline-secondary"
                            title="閉じる"
                            className="w-100-pro"
                            onClick={handleCategoryDialogClose}
                        />
                    </div>
                </div>
            </Dialog>
        </PanelContent>
    );
};

export default withRouter(ItemsList);
