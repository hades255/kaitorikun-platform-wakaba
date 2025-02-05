import { useEffect } from "react";
import { selectorThemes, selectorUtility, utilityAction } from "./reduxStore";
import {
    Content,
    Header,
    Top,
    Menu,
    Sidebar,
    React,
    LoadingBar,
    useSelector,
    LoadingContent,
    getItem,
    useWindowSize,
    removeWindowClass,
    calculateWindowSize,
    useDispatch,
    addWindowClass,
} from "./components/index.jsx";
import Notifications from "./components/Notifications/index.jsx";
import "./index.css";
//Tes
const App = () => {
    const windowSize = useWindowSize();
    const screenSize = useSelector(selectorUtility.screenSize);
    const menuSidebarCollapsed = useSelector(
        selectorUtility.menuSidebarCollapsed
    );

    const dispatch = useDispatch();
    useEffect(() => {
        removeWindowClass("sidebar-closed");
        removeWindowClass("sidebar-collapse");
        removeWindowClass("sidebar-open");
        const size = calculateWindowSize(windowSize.width);
        if (screenSize !== size) {
            dispatch(utilityAction.screenSize(size));
        }
        if (menuSidebarCollapsed && screenSize === "lg") {
            addWindowClass("sidebar-collapse");
        } else if (menuSidebarCollapsed && screenSize === "xs") {
            addWindowClass("sidebar-open");
        } else if (!menuSidebarCollapsed && screenSize !== "lg") {
            addWindowClass("sidebar-closed");
            addWindowClass("sidebar-collapse");
        }
        // checkSidebarClass("sidebar-header");
    }, [windowSize, menuSidebarCollapsed, dispatch, screenSize]);

    const content = useSelector(selectorThemes.handleSetContent);
    const header = useSelector(selectorThemes.handleSetPageHeader);
    const top = useSelector(selectorThemes.handleSetPageHeader);
    const menu = useSelector(selectorThemes.handleSetPageHeader);
    const sidebar = useSelector(selectorThemes.handleSetPageSidebar);
    const footer = useSelector(selectorThemes.handleSetFooter);
    const progress = useSelector(selectorUtility.progress);
    const loading = useSelector(selectorUtility.loading);
    const isAuthenticated = getItem("userdata");
    const handleToggleMenuSidebar = () => {
        dispatch(utilityAction.toggleSidebarMenu(!menuSidebarCollapsed));
    };

    return (
        <div className="wrapper">
            <Notifications />
            {/* {isAuthenticated.length !== 0 ? ( */}
            <div>
                {top && <Top />}
                {menu && <Menu />}
                <div className="wrap">
                    {header && <Header />}
                    {sidebar && <Sidebar />}
                    {content && <Content />}
                </div>
                <LoadingBar color={"red"} progress={progress} />
                {loading.content && <LoadingContent />}
            </div>
            {/* ) : (
                <div>
                    {loading.content && <LoadingContent />}
                    {localStorage.clear()}
                    <Redirect to="/" />
                    {content && <Content />}
                </div>
            )} */}
            <div
                id="sidebar-overlay"
                role="presentation"
                onClick={handleToggleMenuSidebar}
            />
        </div>
    );
};

export default App;
