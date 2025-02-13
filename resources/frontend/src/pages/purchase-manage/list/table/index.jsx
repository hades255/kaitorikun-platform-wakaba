import {
    React,
    Button,
    TableMaster,
    Row,
    Col,
} from "../../../../components";
import moment from 'moment';
moment.locale("ja");

const PurchaseTable = (props) => {
    const columns = [
        {
            title: "id",
            dataIndex: "purchase_id",
            key: "purchase_id",
            render: (cell, row) => {
                return (
                    <div
                        className="customer-name"
                    >{cell.toString().padStart(6, '0')}</div>
                );
            },
        },
        {
            title: "来店日",
            dataIndex: "visit_date",
            key: "visit_date",
            render: (cell, row) => {
                return (
                    <div
                        className="customer-name"
                    >{moment(cell).format('YYYY/MM/DD')}</div>
                );
            },
        },
        {
            title: "買取状態",
            dataIndex: "status",
            key: "status",
            render: (cell, row) => {
                return (
                    <div
                        className="customer-name"
                    >{cell}</div>
                );
            },
        },
        {
            title: "買い取った日付",
            dataIndex: "purchases_date",
            key: "purchases_date",
            render: (cell, row) => {
                return (
                    <div
                        className="customer-name"
                    >{moment(cell).format('YYYY/MM/DD HH:ss')}</div>
                );
            },
        },
        {
            title: "買取金額",
            dataIndex: "purchase_price",
            key: "purchase_price",
            render: (cell, row) => {
                return (
                    <div>{cell ? cell.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") : ""}</div>
                );
            },
        },
        {
            title: "買取査定金額",
            dataIndex: "purchase_estimate_price",
            key: "purchase_estimate_price",
            render: (cell, row) => {
                return (
                    <div
                        className="customer-name"
                    >{cell ? cell.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") : ""}</div>
                );
            },
        },
        {
            title: "店舗名",
            dataIndex: "shop_name",
            key: "shop_name",
        },
        {
            title: "氏名",
            dataIndex: "name",
            key: "name",
            render: (cell, row) => {
                return (
                    <div
                        className="customer-name"
                        onClick={() => handleClick(row)}
                    >{cell}</div>
                );
            },
        },
        {
            title: "カタカナ名",
            dataIndex: "name_kana",
            key: "name_kana",
            render: (cell, row) => {
                return (
                    <div
                        className="customer-name"
                        onClick={() => handleClick(row)}
                    >{cell}</div>
                );
            },
        },
        {
            title: "生年月日",
            dataIndex: "birthday",
            key: "birthday",
        },
        // {
        //     title: "年齢",
        //     dataIndex: "age",
        //     key: "age",
        // },
        {
            title: "電話番号(自宅)",
            dataIndex: "phone_number1",
            key: "phone_number1",
        },
        {
            title: "電話番号(携帯)",
            dataIndex: "phone_number2",
            key: "phone_number2",
        },
        {
            title: "都道府県",
            dataIndex: "address1",
            key: "address1",
        },
        {
            title: "市町村",
            dataIndex: "address2",
            key: "address2",
        },
        {
            title: "住所詳細",
            dataIndex: "address3",
            key: "address3",
        },
        // {
        //     title: "身分証",
        //     dataIndex: "identification1",
        //     key: "identification1",
        // },
        // {
        //     title: "職業",
        //     dataIndex: "job",
        //     key: "job",
        // },
        {
            title: "",
            dataIndex: "action",
            key: "action",
            align: "center",
            hidden: false,
            render: (cell, row) => {
                return (
                    <Row className={`text-center`}>
                        <Col size="12" className="mr-3 text-center">
                            <Button
                                type="button"
                                onClick={() => handleClick(row)}
                                color="info"
                                icon="fa-edit"
                            />
                        </Col>
                    </Row>
                );
            },
        },
    ];
    const handleClick = (data) => {
        props.onHandleEdit(data);
    };
    return (
        <TableMaster
            disabledSearch="true"
            columns={columns}
            dataSource={props.purchases}
            scrollX={{ x: "max-content" }}
            tableLayout="fixed"
            width={1300}
            pageSize={15}
        />
    );
};

export default PurchaseTable;
