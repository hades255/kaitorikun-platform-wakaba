import { useState, useEffect, useRef } from 'react';
import {
    React,
    Button,
    TableMaster,
    Row,
    Col,
} from "../../../../components";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

let TableCustomerVisitShop = (props) => {
    const [data, setData] = useState([
        { id: 1, name: "John Doe", age: 28, active: false, role: "User" },
        { id: 2, name: "Jane Doe", age: 22, active: true, role: "Admin" },
        { id: 3, name: "Sam Smith", age: 33, active: false, role: "User" },
        { id: 3, name: "Sam Smith", age: 33, active: false, role: "User" },
        { id: 3, name: "Sam Smith", age: 33, active: false, role: "User" },
        { id: 3, name: "Sam Smith", age: 33, active: false, role: "User" },
        { id: 3, name: "Sam Smith", age: 33, active: false, role: "User" },
        { id: 3, name: "Sam Smith", age: 33, active: false, role: "User" },
        { id: 3, name: "Sam Smith", age: 33, active: false, role: "User" },
        { id: 3, name: "Sam Smith", age: 33, active: false, role: "User" },
        { id: 3, name: "Sam Smith", age: 33, active: false, role: "User" },
        { id: 3, name: "Sam Smith", age: 33, active: false, role: "User" },
        { id: 3, name: "Sam Smith", age: 33, active: false, role: "User" },
        { id: 3, name: "Sam Smith", age: 33, active: false, role: "User" },
        { id: 3, name: "Sam Smith", age: 33, active: false, role: "User" },
        { id: 3, name: "Sam Smith", age: 33, active: false, role: "User" },
        { id: 3, name: "Sam Smith", age: 33, active: false, role: "User" },
        { id: 3, name: "Sam Smith", age: 33, active: false, role: "User" },
        { id: 3, name: "Sam Smith", age: 33, active: false, role: "User" },
        { id: 3, name: "Sam Smith", age: 33, active: false, role: "User" },
        { id: 3, name: "Sam Smith", age: 33, active: false, role: "User" },
        { id: 3, name: "Sam Smith", age: 33, active: false, role: "User" },
        { id: 3, name: "Sam Smith", age: 33, active: false, role: "User" },
        { id: 3, name: "Sam Smith", age: 33, active: false, role: "User" },
        { id: 3, name: "Sam Smith", age: 33, active: false, role: "User" },
        { id: 3, name: "Sam Smith", age: 33, active: false, role: "User" },
        { id: 3, name: "Sam Smith", age: 33, active: false, role: "User" },
        { id: 3, name: "Sam Smith", age: 33, active: false, role: "User" },
        { id: 3, name: "Sam Smith", age: 33, active: false, role: "User" },
        { id: 3, name: "Sam Smith", age: 33, active: false, role: "User" },
        { id: 3, name: "Sam Smith", age: 33, active: false, role: "User" },
        { id: 3, name: "Sam Smith", age: 33, active: false, role: "User" },
        { id: 3, name: "Sam Smith", age: 33, active: false, role: "User" },
        { id: 3, name: "Sam Smith", age: 33, active: false, role: "User" },
        { id: 3, name: "Sam Smith", age: 33, active: false, role: "User" },
    ]);
    const roles = ["User", "Admin", "Guest"];
    const [categoryColumnsVisibility, setCategoryColumnsVisibility] = useState({
        category_2: false,
        category_3: false,
        category_4: false,
        category_5: false,
        category_6: false,
    });
    const [companyColumnsVisibility, setCompanyColumnsVisibility] = useState({
        company_valuation: false,
    });
    const columns = [
        {
            title: "選択",
            dataIndex: "selected",
            key: "selected",
        },
        {
            title: "商品番号",
            dataIndex: "item_no",
            key: "item_no",
        },
        {
            title: (
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    カテゴリー1
                    <ArrowForwardIosIcon size="small" icon="fa-edit" onClick={() => toggleCategoryColumn} />
                </div>
            ),
            dataIndex: "category_1",
            key: "category_1",
        },
        {
            title: "カテゴリー2",
            dataIndex: "category_2",
            key: "category_2",
        },
        {
            title: "カテゴリー3",
            dataIndex: "category_3",
            key: "category_3",
        },
        {
            title: "カテゴリー4",
            dataIndex: "category_4",
            key: "category_4",
        },
        {
            title: "カテゴリー5",
            dataIndex: "category_5",
            key: "category_5",
        },
        {
            title: "カテゴリー6",
            dataIndex: "category_6",
            key: "category_6",
        },
        {
            title: "画像",
            dataIndex: "images",
            key: "images",
        },
        {
            title: "商品名",
            dataIndex: "item_name",
            key: "item_name",
        },
        {
            title: "個数",
            dataIndex: "item_num",
            key: "item_num",
        },
        {
            title: "申請の根拠",
            dataIndex: "application_basic",
            key: "application_basic",
        },
        {
            title: "利率",
            dataIndex: "rate",
            key: "rate",
        },
        {
            title: "最高査定額",
            dataIndex: "max_valuation",
            key: "max_valuation",
        },
        {
            title: (
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    業社
                    <ArrowForwardIosIcon size="small" icon="fa-edit" onClick={() => alert("Action on Active Header")} />
                </div>
            ),
            dataIndex: "company_num",
            key: "company_num",
        },
        {
            title: "業者の査定額",
            dataIndex: "company_valuation",
            key: "company_valuation",
        },
        {
            title: "上司の指示額",
            dataIndex: "boss_amount",
            key: "boss_amount",
        },
        {
            title: "申請額",
            dataIndex: "application_amount",
            key: "application_amount",
        },
        {
            title: "承諾",
            dataIndex: "agree",
            key: "agree",
        },
        {
            title: "買取金額",
            dataIndex: "purchase_price",
            key: "purchase_price",
        },
        {
            title: "結果",
            dataIndex: "result",
            key: "result",
        },
    ];

    const visibleColumns = []
    columns.forEach(col => {
        if (col.key == "category_2") {
            visibleColumns.push(col)
        };
    });
// columns.filter(
//     (col) => categoryColumnsVisibility[col.key]
// );
const toggleCategoryColumn = () => {
    setCategoryColumnsVisibility({
        category_2: true,
        category_3: true,
        category_4: true,
        category_5: true,
        category_6: true,
    });
    visibleColumns = columns.filter(
        (col) => categoryColumnsVisibility[col.key]
    );
};
const handleClick = (data) => {
    props.onHandleEdit(data);
};
return (
    <TableMaster
        rowKey="id"
        disabledSearch="true"
        columns={visibleColumns}
        dataSource={props.dataSource}
    />
);
};
export default TableCustomerVisitShop;
