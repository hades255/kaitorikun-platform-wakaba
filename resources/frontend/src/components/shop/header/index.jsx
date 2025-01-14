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

const Header = () => {
    const dispatch = useDispatch();

    const logout = () => {
        dispatch(utilityAction.setLoading("content"));
        setTimeout(() => {
            dispatch(utilityAction.stopLoading());
            localStorage.clear();
            window.location.reload();
        }, 500);
    };

    const menuSidebarCollapsed = useSelector(
        selectorUtility.menuSidebarCollapsed
    );
    const handleToggleMenuSidebar = () => {
        dispatch(utilityAction.toggleSidebarMenu(!menuSidebarCollapsed));
        checkSidebarClass("sidebar-header");
    };
    const [menu, setMenu] = useState(false);
    const toggleMenu = () => {
        setMenu(!menu);
    };

    return (
        <nav className="main-header navbar navbar-expand navbar-white navbar-light header-h">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <span
                        className="nav-link nav-link-icon"
                        onClick={handleToggleMenuSidebar}
                        data-widget="pushmenu"
                        aria-label="Menu Hide Bar"
                        role="button"
                    >
                        <i className="fas fa-bars" />
                    </span>
                </li>
            </ul>
            <div className="three-count-container">
                <div className="count-item">
                    <div className="count-label">A</div>
                    <span className="count-value">99</span>
                </div>
                <div className="count-item">
                    <div className="count-label">B</div>
                    <span className="count-value">99</span>
                </div>
                <div className="count-item">
                    <div className="count-label">C</div>
                    <span className="count-value">99</span>
                </div>
                <div className="count-item">
                    <div className="count-label">D</div>
                    <span className="count-value">99</span>
                </div>
                <div className="count-item">
                    <div className="count-label">E</div>
                    <span className="count-value">99</span>
                </div>
                <div className="count-item">
                    <div className="count-label">F</div>
                    <span className="count-value">99</span>
                </div>
                <div className="count-item">
                    <div className="count-label">G</div>
                    <span className="count-value">99</span>
                </div>
                <div className="count-item">
                    <div className="count-label">H</div>
                    <span className="count-value">99</span>
                </div>
            </div>
        </nav>
    );
};

export default Header;
