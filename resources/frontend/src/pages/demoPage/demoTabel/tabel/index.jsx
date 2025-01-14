import {
    React,
    Button,
    TableMaster,
    Row,
    Col,
    useDispatch,
} from "../../../../components";
import { utilityAction } from "../../../../reduxStore";
import { handleEdit } from "../redux";
const DataTabel = () => {
    const dispatch = useDispatch();
    const columns = [
        {
            title: "Username",
            dataIndex: "username",
            key: "username",
        },
        {
            title: "First Name",
            dataIndex: "first_name",
            key: "first_name",
        },
        {
            title: "Last Name",
            dataIndex: "last_name",
            key: "last_name",
        },

        {
            title: "Action",
            dataIndex: "action",
            key: "action",
            align: "center",
            hidden: true,
            render: (cell, row) => {
                return (
                    <Row className={`text-center`}>
                        <Col size="12" className="mr-3 text-center">
                            <Button
                                type="button"
                                color="danger"
                                icon="fa-trash"
                            />{" "}
                            &nbsp;
                            <Button
                                type="button"
                                onClick={() => dispatch(handleEdit(row))}
                                color="info"
                                icon="fa-edit"
                            />
                        </Col>
                    </Row>
                );
            },
        },
    ];

    return (
        <TableMaster
            addButtonTitle={"Add Data"}
            rowKey="id"
            onAddButtonClick={() =>
                dispatch(
                    utilityAction.modalShow({
                        isModalShow: true,
                        isEdit: false,
                        data: [],
                    })
                )
            }
            columns={columns}
        />
    );
};

export default DataTabel;
