import { React } from "../../components";
import HeaderContent from "./headerContent";

const PanelContent = (props) => {
    return (
        <div className="content-wrapper h-full flex flex-col">
            {props.headerContent && (
                <HeaderContent
                    title={props.title}
                    menu={props.menu}
                    submenu={props.submenu}
                />
            )}
            <section className="content grow">
                <div className="container-fluid h-full">{props.children}</div>
            </section>
        </div>
    );
};

export default PanelContent;
