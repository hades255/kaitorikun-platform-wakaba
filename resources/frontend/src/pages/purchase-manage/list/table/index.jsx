import {
    React,
    Button,
    TableMaster,
    Row,
    Col,
} from "../../../../components";
const PurchaseTable = (props) => {
    const columns = [
        {
            title: "id",
            dataIndex: "id",
            key: "id",
        },
        {
            title: "店舗名",
            dataIndex: "shop_name",
            key: "shop_name",
        },
        {
            title: "来店経緯",
            dataIndex: "type",
            key: "type",
        },
        {
            title: "氏名",
            dataIndex: "name",
            key: "name",
        },
        {
            title: "カタカナ名",
            dataIndex: "name_kana",
            key: "name_kana",
        },
        {
            title: "生年月日",
            dataIndex: "birthday",
            key: "birthday",
        },
        {
            title: "年齢",
            dataIndex: "age",
            key: "age",
        },
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
        {
            title: "身分証",
            dataIndex: "identification1",
            key: "identification1",
        },
        {
            title: "身分証NO.",
            dataIndex: "identification_no1",
            key: "identification_no1",
        },
        {
            title: "職業",
            dataIndex: "business",
            key: "business",
        },
        {
            title: "来店回数",
            dataIndex: "shop_visit_num",
            key: "shop_visit_num",
        },
        {
            title: "最終来店日",
            dataIndex: "last_visit_date",
            key: "last_visit_date",
        },
        {
            title: "特記事項",
            className: "Purchase-note",
            dataIndex: "note",
            key: "note",
        },

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
            rowKey="id"
            disabledSearch="true"
            columns={columns}
            dataSource={props.dataSource}
        />
    );
};

export default PurchaseTable;
