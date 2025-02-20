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

let TablePurchaseVisitShop = (props) => {
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
    const handleCheckboxChange = (id) => {
        setItems((prevData) =>
            prevData.map((row) =>
                row.id === id ? { ...row, selected: !row.selected } : row
            )
        );
    };
    const handleCategorySelectChange1 = (id, value) => {
        setItems((prevData) =>
            prevData.map((row) => (row.id === id ? { ...row, category_1: value } : row))
        );
    };
    const handleCategorySelectChange2 = (id, value) => {
        setItems((prevData) =>
            prevData.map((row) => (row.id === id ? { ...row, category_2: value } : row))
        );
    };
    const handleCategorySelectChange3 = (id, value) => {
        setItems((prevData) =>
            prevData.map((row) => (row.id === id ? { ...row, category_3: value } : row))
        );
    };
    const handleCategorySelectChange4 = (id, value) => {
        setItems((prevData) =>
            prevData.map((row) => (row.id === id ? { ...row, category_4: value } : row))
        );
    };
    const handleCategorySelectChange5 = (id, value) => {
        setItems((prevData) =>
            prevData.map((row) => (row.id === id ? { ...row, category_5: value } : row))
        );
    };
    const handleCategorySelectChange6 = (id, value) => {
        setItems((prevData) =>
            prevData.map((row) => (row.id === id ? { ...row, category_6: value } : row))
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
    const handleHighestCheckPriceChange = (id, value) => {
        setItems((prevData) =>
            prevData.map((row) => (row.id === id ? { ...row, highest_check_price: value } : row))
        );
        let selectedItem = items.filter(item => item.id === id)[0]
        if (selectedItem.request_price && Number(selectedItem.request_price) > 0) {
            let rate = (Number(selectedItem.request_price) / Number(value)) * 100
            console.log(rate);
            setItems((prevData) =>
                prevData.map((row) => (row.id === id ? { ...row, rate: rate } : row))
            );
        }
    };
    const handleAgreeSelectChange = (id, value) => {
        setItems((prevData) =>
            prevData.map((row) => (row.id === id ? { ...row, agree: value } : row))
        );
    };
    const handleResultSelectChange = (id, value) => {
        setItems((prevData) =>
            prevData.map((row) => (row.id === id ? { ...row, result: value } : row))
        );
    };
    const columns = [
        {
            title: "商品番号",
            dataIndex: "item_no",
            key: "item_no",
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
            // render: (text, record) => (
            //     <Select
            //         value={record.category_1}
            //         onChange={(value) => handleCategorySelectChange1(record.id, value)}
            //         style={{ width: 120 }}
            //     >
            //         {category1.map((category, i) => (
            //             <Option key={i} value={i + 1}>
            //                 {category.name}
            //             </Option>
            //         ))}
            //     </Select>
            // ),
            render: (text, record) => (
                <div
                    className='purchase-table-cell'
                    style={{ width: 120 }}
                >
                    {text}
                </div>
            ),
        },
        {
            title: "カテゴリー2",
            dataIndex: "category2",
            key: "category2",
            render: (text, record) => (
                <div
                    className='purchase-table-cell'
                    style={{ width: 120 }}
                >
                    {text}
                </div>
            ),
        },
        {
            title: "カテゴリー3",
            dataIndex: "category3",
            key: "category3",
            render: (text, record) => (
                <div
                    className='purchase-table-cell'
                    style={{ width: 120 }}
                >
                    {text}
                </div>
            ),
        },
        {
            title: "カテゴリー4",
            dataIndex: "category4",
            key: "category4",
            render: (text, record) => (
                <div
                    className='purchase-table-cell'
                    style={{ width: 120 }}
                >
                    {text}
                </div>
            ),
        },
        {
            title: "カテゴリー5",
            dataIndex: "category5",
            key: "category5",
            render: (text, record) => (
                <div
                    className='purchase-table-cell'
                    style={{ width: 120 }}
                >
                    {text}
                </div>
            ),
        },
        {
            title: "カテゴリー6",
            dataIndex: "category6",
            key: "category6",
            render: (text, record) => (
                <div
                    className='purchase-table-cell'
                    style={{ width: 120 }}
                >
                    {text}
                </div>
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
                <input
                    type='number'
                    value={record.amount}
                    onChange={(e) => handleItemNumChange(record.id, e.target.value)}
                    style={{ width: 50 }}
                />
            ),
        },
        {
            title: "申請の根拠",
            dataIndex: "request_basis",
            key: "request_basis",
            render: (text, record) => (
                <input
                    value={record.request_basis}
                    onChange={(e) => handleRequestBasisChange(record.id, e.target.value)}
                    style={{ width: 150 }}
                />
            ),
        },
        {
            title: "利率",
            dataIndex: "rate",
            key: "rate",
            render: (text, record) => (
                <div
                    className='purchase-table-cell'
                    style={{ width: 80 }}
                >
                    {text}
                </div>
            ),
        },
        {
            title: "最高査定額",
            dataIndex: "highest_check_price",
            key: "highest_check_price",
            render: (text, record) => (
                <input
                    type='number'
                    value={record.highest_check_price}
                    onChange={(e) => handleHighestCheckPriceChange(record.id, e.target.value)}
                    style={{ width: 100 }}
                />
            ),
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
            render: (text, record) => (
                <input
                    type='number'
                    value={record.request_price}
                    onChange={(e) => handleRequestPriceChange(record.id, e.target.value)}
                    style={{ width: 100 }}
                />
            ),
        },
        {
            title: "承諾",
            dataIndex: "agree",
            key: "agree",
            render: (text, record) => (
                <Select
                    value={record.agree}
                    onChange={(value) => handleAgreeSelectChange(record.id, value)}
                    style={{ width: 120 }}
                >
                    {agrees.map((agree, i) => (
                        <Option key={i} value={i + 1}>
                            {agree}
                        </Option>
                    ))}
                </Select>
            ),
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
            render: (text, record) => (
                <Select
                    value={record.result}
                    onChange={(value) => handleResultSelectChange(record.id, value)}
                    style={{ width: 120 }}
                >
                    {results.map((result, i) => (
                        <Option key={i} value={i + 1}>
                            {result}
                        </Option>
                    ))}
                </Select>
            ),
        },
    ];
    const visibleColumns = columns.filter(
        (col) => categoryColumnsVisibility[col.key] || companyColumnsVisibility[col.key] ||
            (categoryColumnsVisibility[col.key] == undefined && companyColumnsVisibility[col.key] == undefined)
    );
    const handleClick = (data) => {
        props.onHandleEdit(data);
    };
    const rowSelection = {
        onChange: (selectedKeys, selectedRecords) => {
            console.log("🔹 選択されたキー:", selectedKeys);
            console.log("🔹 選択された行:", selectedRecords);
            setItems((prevData) =>
                prevData.map((row) => ({ ...row, selected: false }))
            );
            selectedKeys.forEach(id => {
                setItems((prevData) =>
                    prevData.map((row) => (row.id === id ? { ...row, selected: true } : row))
                );
            });
            console.log(items);

        }
    };
    return (
        <TableMaster
            rowKey="id"
            disabledSearch="true"
            columns={visibleColumns}
            dataSource={items}
            scrollX={true}
            pageSize={5}
            rowSelection={rowSelection}
        />
    );
};
export default TablePurchaseVisitShop;
