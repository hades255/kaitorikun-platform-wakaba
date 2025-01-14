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
import { selectorUtility, utilityAction } from "../../../reduxStore";

const Menu = () => {
    return (
        <div className="staff-menu-items">
            <Link to="#" className="menu-item">始業</Link>
            <Link to="#" className="menu-item">顧客一覧</Link>
            <Link to="#" className="menu-item">買取計算書</Link>
            <Link to="#" className="menu-item">商品一覧</Link>
            <Link to="#" className="menu-item">業者査定シート</Link>
            <Link to="#" className="menu-item">業者卸発送一覧</Link>
            <Link to="#" className="menu-item">月次収支報告書</Link>
            <Link to="#" className="menu-item">金庫入出金履歴</Link>
            <Link to="#" className="menu-item">終業</Link>
        </div>
    );
};

export default Menu;
