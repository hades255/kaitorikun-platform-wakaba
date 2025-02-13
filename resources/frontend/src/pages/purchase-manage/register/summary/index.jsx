import { useContext, useState, useEffect, useRef } from 'react';
import {
    React,
    TableMaster,
} from "../../../../components";

let SummaryItemsDialog = (props) => {
    const [items, setItems] = useState(props.items);
    const [summaryItems, setSummaryItems] = useState([]);
    const [summaryFlag, setSummaryFlag] = useState(false)
    const [total, setTotal] = useState()
    const [totalPrice, setTotalPrice] = useState()
    const category1 = props.categories1;

    useEffect(() => {
        setSummaryItems([]);
        let newItems = [];
        let totalAmount = 0
        let totalPrice = 0
        category1.forEach(category => {
            const selectedItems = items.filter(item => item.category1 === category.name)
            if (selectedItems.length > 0) {
                let itemAmount = 0
                let itemPrice = 0
                selectedItems.forEach(element => {
                    itemAmount += Number(element.amount)
                    itemPrice += Number(element.request_price)
                });
                totalAmount += itemAmount
                totalPrice += itemPrice
                newItems.push(
                    {
                        "amount": itemAmount,
                        "request_price": itemPrice,
                        "name": category.name + "A",
                        "category1": category.name,
                    },
                )
            }
        });
        setSummaryItems(newItems)
        setTotal(totalAmount)
        setTotalPrice(totalPrice)
    }, [items]);

    const columns = [
        {
            title: 'カテゴリー1',
            dataIndex: "category1",
            key: "category1",
            width: 100,
            onCell: () => ({
                style: { minWidth: 100, maxWidth: 100 },
            }),
        },
        {
            title: "商品名",
            dataIndex: "name",
            key: "name",
            width: 150,
            ellipsis: true,
            onCell: () => ({
                style: { minWidth: 150, maxWidth: 150 },
            }),
        },
        {
            title: "個数",
            dataIndex: "amount",
            key: "amount",
            width: 100,
        },
        {
            title: "申請額",
            dataIndex: "request_price",
            key: "request_price",
            width: 100,
            render: (cell, row) => {
                return (
                    <div>{cell ? cell.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") : ""}</div>
                );
            }
        },
    ];

    const handleSummaryItemsClick = async () => {
        setSummaryFlag(true)
    };

    const handleInitClick = () => {
        setSummaryFlag(false)
    };

    const handleCloseClick = () => {
        props.onHandleSummaryItemDialogClose();
    };

    const groupBy = (array, key) => {
        return array.reduce((result, item) => {
            const groupKey = item[key];
            if (!result[groupKey]) {
                result[groupKey] = [];
            }
            result[groupKey].push(item);
            return result;
        }, {});
    };

    const handleClick = (data) => {
        props.onHandleEdit(data);
    };
    return (
        <div className='add-items-container'>
            <label className='dialog-title'>カテゴリーまとめ</label>
            <TableMaster
                disabledSearch="true"
                columns={columns}
                dataSource={summaryFlag ? summaryItems : items}
                scrollX={{ x: "max-content" }}
                tableLayout="fixed"
                width={800}
                pageSize={50}
            />
            <div className='flex-right'>
                <label>買取点数 {total ? total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") : 0}点</label>
                <label>買取合計 {totalPrice ? totalPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") : 0}円</label>
            </div>
            <div className='flex-center'
                style={{
                    marginTop: '50px',
                    gap: '100px'
                }}>
                <div
                    className="cancel-btn"
                    onClick={handleCloseClick}
                >キャンセル</div>
                <div
                    className="init-btn"
                    onClick={handleInitClick}
                >初期化</div>
                <div
                    className="register-btn"
                    onClick={handleSummaryItemsClick}
                >纏める</div>
            </div>
        </div>
    );
};
export default SummaryItemsDialog;
