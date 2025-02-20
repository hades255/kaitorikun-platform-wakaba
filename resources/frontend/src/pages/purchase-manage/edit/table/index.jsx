import { useContext, useState, useEffect, useRef } from 'react';
import {
    React,
    Button,
    TableMaster,
    Row,
    Col,
} from "../../../../components";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowRight";
import ArrowBackIosIcon from "@mui/icons-material/ArrowLeft";
import { Table, Checkbox, Select } from "antd";
import DataContext from '../../../../components/DataContext';

const { Option } = Select;

let TablePurchase = (props) => {
    const [categoryVisibility, setCategoryVisibility] = useState(false);
    const [companyVisibility, setCompanyVisibility] = useState(false);
    const category1 = props.categories1;
    const category2 = props.categories2;
    const category3 = props.categories3;
    const category4 = props.categories4
    const category5 = props.categories5;
    const category6 = props.categories6;
    const agrees = ["申請", "許可", "変更", "基準外", "不可", "預り"];
    const results = ["お預かり", "買取済", "出品中", "不正約", "クーリングオフ期間", "卸発送中", "入金確認済"];
    const { items, setItems } = useContext(DataContext);

    const [categoryColumnsVisibility, setCategoryColumnsVisibility] = useState({
        category2: false,
        category3: false,
        category4: false,
        category5: false,
        category6: false,
    });
    const [companyColumnsVisibility, setCompanyColumnsVisibility] = useState({
        corporation_check_price: false,
    });
    const toggleCategoryColumn = () => {
        setCategoryVisibility(!categoryVisibility)
        setCategoryColumnsVisibility({
            category2: !categoryVisibility,
            category3: !categoryVisibility,
            category4: !categoryVisibility,
            category5: !categoryVisibility,
            category6: !categoryVisibility,
        });
        visibleColumns = columns.filter(
            (col) => categoryColumnsVisibility[col.key] || companyColumnsVisibility[col.key] ||
                (categoryColumnsVisibility[col.key] == undefined && companyColumnsVisibility[col.key] == undefined)
        );
    };
    const toggleCompanyColumn = () => {
        setCompanyVisibility(!companyVisibility)
        setCompanyColumnsVisibility({
            corporation_check_price: !companyVisibility
        });
        visibleColumns = columns.filter(
            (col) => categoryColumnsVisibility[col.key] || companyColumnsVisibility[col.key] ||
                (categoryColumnsVisibility[col.key] == undefined && companyColumnsVisibility[col.key] == undefined)
        );
    };
    const handleItemImageClick = (id, value) => {
        props.onHandleItemImagesClick(id)
    };
    const handleItemNameClick = (id, value) => {
        props.onHandleItemNameClick(id)
    };
    const handleItemNumChange = (id, value) => {
        setItems((prevData) =>
            prevData.map((row) => (row.id === id ? { ...row, amount: value } : row))
        );
    };
    const handleRequestBasisChange = (id, value) => {
        setItems((prevData) =>
            prevData.map((row) => (row.id === id ? { ...row, request_basis: value } : row))
        );
    };
    const handleRequestPriceChange = (id, value) => {
        setItems((prevData) =>
            prevData.map((row) => (row.id === id ? { ...row, request_price: value, supervisor_instruction_price: value } : row))
        );
        let selectedItem = items.filter(item => item.id === id)[0]
        if (selectedItem.highest_check_price && Number(selectedItem.highest_check_price) > 0) {
            let rate = (Number(value) / Number(selectedItem.highest_check_price)) * 100
            setItems((prevData) =>
                prevData.map((row) => (row.id === id ? { ...row, rate: rate } : row))
            );
        }
    };
    const columns = [
        {
            title: "商品番号",
            dataIndex: "id",
            key: "id",
            render: (text, record) => (
                <div
                    className='purchase-table-cell'
                    style={{ width: 120 }}
                >
                    {text.toString().padStart(6, '0')}
                </div>
            ),
        },
        {
            title: (
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    カテゴリー1
                    {
                        categoryVisibility ?
                            <ArrowBackIosIcon size="small" style={{cursor: "pointer"}} onClick={toggleCategoryColumn} />
                            :
                            <ArrowForwardIosIcon size="small" style={{cursor: "pointer"}} onClick={toggleCategoryColumn} />
                    }
                </div>
            ),
            dataIndex: "category1",
            key: "category1",
            render: (text, record) => (
                <div>{category1[text - 1].name}</div>
            ),
        },
        {
            title: "カテゴリー2",
            dataIndex: "category2",
            key: "category2",
            render: (text, record) => (
                <div>{text ? category2[text - 1].name : ""}</div>
            ),
        },
        {
            title: "カテゴリー3",
            dataIndex: "category3",
            key: "category3",
            render: (text, record) => (
                <div>{text ? category3[text - 1].name : ""}</div>
            ),
        },
        {
            title: "カテゴリー4",
            dataIndex: "category4",
            key: "category4",
            render: (text, record) => (
                <div>{text ? category4[text - 1].name : ""}</div>
            ),
        },
        {
            title: "カテゴリー5",
            dataIndex: "category5",
            key: "category5",
            render: (text, record) => (
                <div>{text ? category5[text - 1].name : ""}</div>
            ),
        },
        {
            title: "カテゴリー6",
            dataIndex: "category6",
            key: "category6",
            render: (text, record) => (
                <div>{text ? category6[text - 1].name : ""}</div>
            ),
        },
        {
            title: "画像",
            dataIndex: "images",
            key: "images",
            render: (text, record) => (
                <div
                    onClick={(e) => handleItemImageClick(record.id, e.target.value)}
                    style={{ width: 50, cursor: 'pointer' }}
                >
                    {text}
                </div>
            ),
        },
        {
            title: "商品名",
            dataIndex: "name",
            key: "name",
            render: (text, record) => (
                <div>
                    {(record.hearing_value1 ||
                        record.hearing_value2 ||
                        record.hearing_value3 ||
                        record.hearing_value4
                    ) ? (
                        <div
                            onClick={(e) => handleItemNameClick(record.id, e.target.value)}
                            className='purchase-table-cell'
                            style={{ width: 200, color: '#0B57D0', cursor: 'pointer' }}
                        >
                            {text}
                        </div>
                    ) : (
                        <div
                            onClick={(e) => handleItemNameClick(record.id, e.target.value)}
                            className='purchase-table-cell'
                            style={{ width: 200, cursor: 'pointer' }}
                        >
                            {text}
                        </div>

                    )}
                </div>
            ),
        },
        {
            title: "個数",
            dataIndex: "amount",
            key: "amount",
            render: (text, record) => (
                <div>{text}</div>
            ),
        },
        {
            title: "申請の根拠",
            dataIndex: "request_basis",
            key: "request_basis",
            render: (text, record) => (
                <div>{text}</div>
            ),
        },
        {
            title: "利率",
            dataIndex: "rate",
            key: "rate",
            render: (text, record) => (
                <div>{text}</div>
            ),
        },
        {
            title: "最高査定額",
            dataIndex: "highest_check_price",
            key: "highest_check_price",
            render: (cell, row) => {
                return (
                    <div>{cell ? cell.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") : ""}</div>
                );
            }
        },
        {
            title: (
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: 80 }}>
                    業社
                    {
                        companyVisibility ?
                            <ArrowBackIosIcon size="small" style={{cursor: "pointer"}} onClick={toggleCompanyColumn} />
                            :
                            <ArrowForwardIosIcon size="small" style={{cursor: "pointer"}} onClick={toggleCompanyColumn} />
                    }
                </div>
            ),
            dataIndex: "corporations",
            key: "corporations",
        },
        {
            title: "業者の査定額",
            dataIndex: "corporation_check_price",
            key: "corporation_check_price",
            render: (cell, row) => {
                return (
                    <div>{cell ? cell.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") : ""}</div>
                );
            }
        },
        {
            title: "上司の指示額",
            dataIndex: "supervisor_instruction_price",
            key: "supervisor_instruction_price",
            render: (cell, row) => {
                return (
                    <div>{cell ? cell.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") : ""}</div>
                );
            }
        },
        {
            title: "申請額",
            dataIndex: "request_price",
            key: "request_price",
            render: (cell, row) => {
                return (
                    <div>{cell ? cell.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") : ""}</div>
                );
            }
        },
        {
            title: "承諾",
            dataIndex: "agree",
            key: "agree",
            render: (cell, row) => {
                return (
                    <div>{cell ? agrees[cell - 1] : ""}</div>
                );
            }
        },
        {
            title: "買取金額",
            dataIndex: "purchase_price",
            key: "purchase_price",
            render: (cell, row) => {
                return (
                    <div>{cell ? cell.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") : ""}</div>
                );
            }
        },
        {
            title: "結果",
            dataIndex: "result",
            key: "result",
            render: (cell, row) => {
                return (
                    <div>{cell ? results[cell - 1] : ""}</div>
                );
            }
        },
    ];
    const visibleColumns = columns.filter(
        (col) => categoryColumnsVisibility[col.key] || companyColumnsVisibility[col.key] ||
            (categoryColumnsVisibility[col.key] == undefined && companyColumnsVisibility[col.key] == undefined)
    );

    return (
        <TableMaster
            rowKey="id"
            disabledSearch="true"
            columns={visibleColumns}
            dataSource={items}
            scrollX={true}
            pageSize={10}
        />
    );
};
export default TablePurchase;
