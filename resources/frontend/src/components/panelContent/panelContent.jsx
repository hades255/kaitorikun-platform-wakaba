import { React } from "../../components";
import HeaderContent from "./headerContent";
import { Box } from "@mui/material";

const PanelContent = (props) => {
    return (
        <Box display="flex" flexDirection="column" height="100%" className="content-wrapper">
            {props.headerContent && (
                <HeaderContent
                    title={props.title}
                    menu={props.menu}
                    submenu={props.submenu}
                />
            )}
            <section style={{flexGrow: 1}} className="content">
                <Box height="100%" className="container-fluid" >{props.children}</Box>
            </section>
        </Box>
    );
};

export default PanelContent;
