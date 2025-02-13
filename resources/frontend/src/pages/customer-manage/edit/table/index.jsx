import { useContext, useState, useEffect, useRef } from 'react';
import {
    React,
    TableMaster,
} from "../../../../components";
import moment from 'moment';
moment.locale("ja");

let TableVisitShopHistory = (props) => {
    const [summaryItems, setSummaryItems] = useState([]);
    const [totalVisitNum, setTotalVisitNum] = useState()

    useEffect(() => {
        setSummaryItems([]);
        let newItems = [];
        if (props.categories1) {
            props.purchases.forEach((purchase, index) => {
                props.categories1.forEach(category => {
                    const selectedItems = props.items[index].filter(item => item.category1 === category.id)
                    if (selectedItems.length > 0) {
                        let itemPrice = 0
                        selectedItems.forEach(element => {
                            itemPrice += Number(element.request_price)
                        });
                        newItems.push(
                            {
                                "purchase_id": purchase.id,
                                "visit_date": moment(purchase.created_at).format('YYYY/MM/DD'),
                                "status": "買取",
                                "purchase_price": itemPrice,
                                "name": category.name + "A",
                                "category1": category.name,
                            },
                        )
                    }
                });
            });
            setSummaryItems(newItems)
            setTotalVisitNum(props.purchases.length)
        }
    }, [props.items, props.purchases, props.categories1]);

    const handleVisitDateClick = (record) => {
        props.onHandleSelectPurchase(record.purchase_id)
    }
    const columns = [
        {
            title: '来店日',
            dataIndex: "visit_date",
            key: "visit_date",
            width: 100,
            render: (cell, row) => {
                return (
                    <div
                        className="customer-name"
                        onClick={() => handleVisitDateClick(row)}
                    >{cell}</div>
                );
            },
        },
        {
            title: "適用",
            dataIndex: "status",
            key: "status",
            width: 50,
            ellipsis: true,
            onCell: () => ({
                style: { minWidth: 50, maxWidth: 50 },
            }),
        },
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
            title: "買取金額",
            dataIndex: "purchase_price",
            key: "purchase_price",
            width: 100,
            render: (cell, row) => {
                return (
                    <div>{cell ? cell.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") : ""}</div>
                );
            }
        },
    ];

    return (
        <div>
            <div className='flex-left' style={{marginBottom: '-30px'}}>
                <label>来店回数 {totalVisitNum}</label>
            </div>
            <TableMaster
                disabledSearch="true"
                columns={columns}
                dataSource={summaryItems}
                scrollX={{ x: "max-content" }}
                width={300}
                tableLayout="fixed"
                pageSize={5}
            />
        </div>
    );
};
export default TableVisitShopHistory;
