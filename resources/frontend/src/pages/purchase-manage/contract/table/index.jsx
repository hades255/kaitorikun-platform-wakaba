import { useContext, useState, useEffect, useRef } from 'react';
import {
    React,
    TableMaster,
} from "../../../../components";

let TablePurchaseContract = (props) => {
    const [summaryItems, setSummaryItems] = useState([]);
    const [total, setTotal] = useState()
    const [totalPrice, setTotalPrice] = useState()
    const [coupon, setCoupon] = useState(0)

    useEffect(() => {
        setSummaryItems([]);
        let newItems = [];
        let totalAmount = 0
        let totalPrice = 0
        if (props.categories1) {
            props.categories1.forEach(category => {
                const selectedItems = props.items.filter(item => item.category1 === category.id)
                if (selectedItems.length > 0) {
                    let itemAmount = 0
                    let itemPrice = 0
                    selectedItems.forEach(element => {
                        itemAmount += Number(element.amount)
                        itemPrice += Number(element.purchase_price)
                    });
                    totalAmount += itemAmount
                    totalPrice += itemPrice
                    newItems.push(
                        {
                            "amount": itemAmount,
                            "purchase_price": itemPrice,
                            "name": category.name + "A",
                            "category1": category.name,
                        },
                    )
                }
            });
            if (props.coupon == 1) {
                setCoupon(3000)
            } else if (props.coupon == 2) {
                setCoupon(5000)
            } else if (props.coupon == 3) {
                setCoupon(10000)
            }
            setSummaryItems(newItems)
            setTotal(totalAmount)
            setTotalPrice(totalPrice - coupon)
            props.onHandleCalcPrice(totalPrice - coupon)
        }
    }, [props.items, props.categories1, props.coupon]);

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
            {/* <TableMaster
                disabledSearch="true"
                columns={columns}
                dataSource={summaryItems}
                scrollX={{ x: "max-content" }}
                tableLayout="fixed"
                pageSize={50}
            /> */}
            <div style={{ textAlign: "center", display: "flex", justifyContent: "center", marginTop: '20px' }}>
                <table border="1">
                    <thead>
                        <tr style={{backgroundColor: '#e6e6e6'}}>
                            <th style={{ width: "200px", padding: "10px" }}>カテゴリー1</th>
                            <th style={{ width: "600px", padding: "10px" }}>商品名</th>
                            <th style={{ width: "100px", padding: "10px" }}>個数</th>
                            <th style={{ width: "100px", padding: "10px" }}>買取金額</th>
                        </tr>
                    </thead>
                    <tbody>
                        {summaryItems.map((item) => (
                            <tr key={item.id}>
                                <td style={{ textAlign: "center" }}>{item.category1}</td>
                                <td style={{ textAlign: "center" }}>{item.name}</td>
                                <td style={{ textAlign: "center" }}>{item.amount}</td>
                                <td style={{ textAlign: "center" }}>{item.purchase_price ? item.purchase_price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") : ""}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div style={{ textAlign: "center", display: "flex", justifyContent: "right", gap: '10px', marginTop: '10px' }}>
                <label>買取点数 {total ? total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") : 0}点</label>
                {coupon > 0 && <label>{coupon ? coupon.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") : 0}円のクーポンを利用</label>}
                <label>買取合計 {totalPrice ? totalPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") : 0}円</label>
            </div>
        </div>
    );
};
export default TablePurchaseContract;
