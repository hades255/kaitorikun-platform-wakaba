import { Card, ModalGlobal, PanelContent, React, useDispatch, useSelector } from "../../../components";
import DataTabel from "./tabel";
import FormDataUser from "./form"
import { selectorUtility } from "../../../reduxStore";
import { submit } from "./redux";
const DemoTabel = () => {
    const modal = useSelector(selectorUtility.getModal)
    const dispatch = useDispatch()

    let data = [
        {
            id: 1,
            username: "samsularifin05",
            first_name: "Samsul",
            last_name: "Arifin",
        },
        {
            id: 2,
            username: "andra02",
            first_name: "Andra",
            last_name: "Sudrajat",
        },
    ];
    return (
        <PanelContent
            title="Master DemoTabel"
            menu="Data Master"
            submenu="DemoTabel"
            headerContent
        >
            <Card title="Data DemoTabel">
                <DataTabel
                    dataSource={data}
                />
            </Card>
            <ModalGlobal title={`${modal.isEdit ? "Edit" : "Create"} User Data`}>
                <FormDataUser onSubmit={(data) => dispatch(submit(data))} />
            </ModalGlobal>
        </PanelContent>
    );
};

export default DemoTabel;
