import { useContext, useState, useEffect, useRef } from 'react';
import {
    React,
    Button,
    TableMaster,
} from "../../../../components";
import { Table, Checkbox, Select } from "antd";

let PrintPurchaseVisitShop = (props) => {
    const category1 = props.categories1;
    const handleClick = (data) => {
        props.onHandleEdit(data);
    };
    return (
        <div>

        </div>
    );
};
export default PrintPurchaseVisitShop;
