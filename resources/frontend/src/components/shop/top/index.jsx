import { useState } from "react";
import {
    Link,
    getItem,
    React,
    openTab,
    useDispatch,
    checkSidebarClass,
    useSelector,
} from "../../../components";
import { selectorUtility, utilityAction } from "../../../reduxStore";
import Clock from "../../ui/clock";
import Scrap from "../../ui/scrap";
import SearchBar from "../../ui/searchbar";
import IconButton from "@mui/material/IconButton";
import RefreshIcon from '@mui/icons-material/Refresh';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import Button from "@mui/material/Button";

const Top = () => {
    const dispatch = useDispatch();

    const logout = () => {
        dispatch(utilityAction.setLoading("content"));
        setTimeout(() => {
            dispatch(utilityAction.stopLoading());
            localStorage.clear();
            window.location.reload();
        }, 500);
    };
    return (
        <div className="staff-top-items">
            <div className="left">
                <div className="title">
                    買取くん
                </div>
                <div className="clock">
                    <Clock />
                </div>
                <div className="print">
                    <Button variant="outlined" color="black">印刷</Button>
                </div>
                <div className="arrows flex items-center">
                    <IconButton aria-label="refresh">
                        <RefreshIcon />
                    </IconButton>
                    <IconButton aria-label="backward">
                        <ArrowBackIosNewIcon />
                    </IconButton>
                    <IconButton aria-label="forward">
                        <ArrowForwardIosIcon />
                    </IconButton>
                </div>
                <div className="cost-field">
                    <Scrap />
                </div>
                <div>
                    <SearchBar />
                </div>
            </div>
            <div className="right">
                <div className="user-name">
                    {getItem("userdata").name}
                </div>
                <button
                    type="button"
                    className="dropdown-item logout-btn"
                    onClick={() => logout()}
                >
                    <i className="nav-icon fas fa-arrow-right-from-bracket"></i>{" "}
                    ログアウト
                </button>
            </div>
        </div>
    );
};

export default Top;
