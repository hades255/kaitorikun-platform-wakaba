import { OriginalSchannal } from ".";
import { PanelContent } from "../../components";
import HorizontalSeparator from "../../components/community/HorizontalSeparator";

const SchannelWithSeparatorBar = () => {
    return (
        <>
            <PanelContent>
                <HorizontalSeparator
                    TopComponent={OriginalSchannal}
                    BottomComponent={<></>}
                />
            </PanelContent>
        </>
    );
};

export default SchannelWithSeparatorBar;
