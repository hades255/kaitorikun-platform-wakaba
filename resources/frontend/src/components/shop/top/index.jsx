import { useState } from "react";
import { withRouter } from "react-router-dom";
import { getItem, React, useDispatch } from "../../../components";
import { utilityAction } from "../../../reduxStore";
import Clock from "../../ui/clock";
import Scrap from "../../ui/scrap";
import SearchBar from "../../ui/searchbar";
import IconButton from "@mui/material/IconButton";
import RefreshIcon from "@mui/icons-material/Refresh";
import SearchIcon from '@mui/icons-material/Search';
import OutlinedInput from "@mui/material/OutlinedInput"
import InputAdornment from "@mui/material/InputAdornment"
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import Button from "@mui/material/Button";

const Top = (props) => {
    const [showSearchBar, setShowSearchBar] = useState(false)
    const dispatch = useDispatch();

    const logout = () => {
        dispatch(utilityAction.setLoading("content"));
        setTimeout(() => {
            dispatch(utilityAction.stopLoading());
            localStorage.clear();
            props.history.location.pathname = "/";
        }, 500);
    };

    const handleSearch = () => {
        setShowSearchBar(true)
    }

    const handleSearchClick = () => {
        setShowSearchBar(false)
    }

    return (
        <div className="staff-top-items">
            <div className="left">
                <div className="title">買取くん</div>
                <div className="clock">
                    <Clock />
                </div>
                <div className="print">
                    <Button variant="outlined" color="black">
                        印刷
                    </Button>
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
                {
                    !showSearchBar &&
                    <div>
                        <IconButton color="primary" onClick={handleSearch}>
                            <SearchIcon />
                        </IconButton>
                    </div>
                }
                {
                    showSearchBar &&
                    <div style={{ position: 'absolute', left: '0', backgroundColor: 'white', width: '100%', zIndex: '10' }}>
                        <React.Fragment>
                            <OutlinedInput
                                id="search-bar"
                                type="text"
                                size="small"
                                placeholder="検索"
                                className="filter-field"
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="search-bar"
                                            edge="end"
                                            onClick={handleSearchClick}
                                        >
                                            <SearchIcon />
                                        </IconButton>
                                    </InputAdornment>
                                }
                            />
                        </React.Fragment>
                    </div>
                }
            </div>
            <div className="right">
                <div className="user-name">{getItem("userdata").name}</div>
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

export default withRouter(Top);
