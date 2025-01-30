import { useState, useEffect, useRef } from 'react';
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

const { Option } = Select;

let TablePurchaseVisitShop = (props) => {
    const [categoryVisibility, setCategoryVisibility] = useState(false);
    const [companyVisibility, setCompanyVisibility] = useState(false);
    const category1 = ["User", "Admin", "Guest"];
    const category2 = ["User", "Admin", "Guest"];
    const category3 = ["User", "Admin", "Guest"];
    const category4 = ["User", "Admin", "Guest"];
    const category5 = ["User", "Admin", "Guest"];
    const category6 = ["User", "Admin", "Guest"];
    const agrees = ["申請", "許可", "変更", "基準外", "不可", "預り"];
    const results = ["買取", "不正約", "預り", "返品"];
    const [data, setData] = useState([{
        'id': 1,
        'selected': false,
        'item_no': 1,
        'category_1': 1,
        'category_2': 2,
        'category_3': 1,
        'category_4': 2,
        'category_5': 3,
        'category_6': 2,
        'images': 2,
        'item_name': '商品名商品名商品名商品名商品名',
        'item_num': 10,
        'application_basic': '申請の根拠申請の根拠申請の根拠',
        'rate': 1000,
        'max_valuation': 1000000,
        'company_num': 5,
        'company_valuation': 30000,
        'boss_amount': 5000000,
        'application_amount': 1000,
        'agree': 1,
        'purchase_price': 10000,
        'result': 1
    },
    {
        'id': 2,
        'selected': false,
        'item_no': 1,
        'category_1': 1,
        'category_2': 2,
        'category_3': 1,
        'category_4': 2,
        'category_5': 3,
        'category_6': 2,
        'images': 2,
        'item_name': '商品名商品名商品名商品名商品名',
        'item_num': 10,
        'application_basic': '申請の根拠申請の根拠申請の根拠',
        'rate': 1000,
        'max_valuation': 1000000,
        'company_num': 5,
        'company_valuation': 30000,
        'boss_amount': 5000000,
        'application_amount': 1000,
        'agree': 1,
        'purchase_price': 10000,
        'result': 1
    },
    {
        'id': 3,
        'selected': false,
        'item_no': 1,
        'category_1': 1,
        'category_2': 2,
        'category_3': 1,
        'category_4': 2,
        'category_5': 3,
        'category_6': 2,
        'images': 2,
        'item_name': '商品名商品名商品名商品名商品名',
        'item_num': 10,
        'application_basic': '申請の根拠申請の根拠申請の根拠',
        'rate': 1000,
        'max_valuation': 1000000,
        'company_num': 5,
        'company_valuation': 30000,
        'boss_amount': 5000000,
        'application_amount': 1000,
        'agree': 1,
        'purchase_price': 10000,
        'result': 1
    },
    {
        'id': 4,
        'selected': false,
        'item_no': 1,
        'category_1': 1,
        'category_2': 2,
        'category_3': 1,
        'category_4': 2,
        'category_5': 3,
        'category_6': 2,
        'images': 2,
        'item_name': '商品名商品名商品名商品名商品名',
        'item_num': 10,
        'application_basic': '申請の根拠申請の根拠申請の根拠',
        'rate': 1000,
        'max_valuation': 1000000,
        'company_num': 5,
        'company_valuation': 30000,
        'boss_amount': 5000000,
        'application_amount': 1000,
        'agree': 1,
        'purchase_price': 10000,
        'result': 1
    },
    {
        'id': 5,
        'selected': false,
        'item_no': 1,
        'category_1': 1,
        'category_2': 2,
        'category_3': 1,
        'category_4': 2,
        'category_5': 3,
        'category_6': 2,
        'images': 2,
        'item_name': '商品名商品名商品名商品名商品名',
        'item_num': 10,
        'application_basic': '申請の根拠申請の根拠申請の根拠',
        'rate': 1000,
        'max_valuation': 1000000,
        'company_num': 5,
        'company_valuation': 30000,
        'boss_amount': 5000000,
        'application_amount': 1000,
        'agree': 1,
        'purchase_price': 10000,
        'result': 1
    },
    {
        'id': 6,
        'selected': false,
        'item_no': 1,
        'category_1': 1,
        'category_2': 2,
        'category_3': 1,
        'category_4': 2,
        'category_5': 3,
        'category_6': 2,
        'images': 2,
        'item_name': '商品名商品名商品名商品名商品名',
        'item_num': 10,
        'application_basic': '申請の根拠申請の根拠申請の根拠',
        'rate': 1000,
        'max_valuation': 1000000,
        'company_num': 5,
        'company_valuation': 30000,
        'boss_amount': 5000000,
        'application_amount': 1000,
        'agree': 1,
        'purchase_price': 10000,
        'result': 1
    },
    {
        'id': 7,
        'selected': false,
        'item_no': 1,
        'category_1': 1,
        'category_2': 2,
        'category_3': 1,
        'category_4': 2,
        'category_5': 3,
        'category_6': 2,
        'images': 2,
        'item_name': '商品名商品名商品名商品名商品名',
        'item_num': 10,
        'application_basic': '申請の根拠申請の根拠申請の根拠',
        'rate': 1000,
        'max_valuation': 1000000,
        'company_num': 5,
        'company_valuation': 30000,
        'boss_amount': 5000000,
        'application_amount': 1000,
        'agree': 1,
        'purchase_price': 10000,
        'result': 1
    },
    {
        'id': 8,
        'selected': false,
        'item_no': 1,
        'category_1': 1,
        'category_2': 2,
        'category_3': 1,
        'category_4': 2,
        'category_5': 3,
        'category_6': 2,
        'images': 2,
        'item_name': '商品名商品名商品名商品名商品名',
        'item_num': 10,
        'application_basic': '申請の根拠申請の根拠申請の根拠',
        'rate': 1000,
        'max_valuation': 1000000,
        'company_num': 5,
        'company_valuation': 30000,
        'boss_amount': 5000000,
        'application_amount': 1000,
        'agree': 1,
        'purchase_price': 10000,
        'result': 1
    },
    {
        'id': 9,
        'selected': false,
        'item_no': 1,
        'category_1': 1,
        'category_2': 2,
        'category_3': 1,
        'category_4': 2,
        'category_5': 3,
        'category_6': 2,
        'images': 2,
        'item_name': '商品名商品名商品名商品名商品名',
        'item_num': 10,
        'application_basic': '申請の根拠申請の根拠申請の根拠',
        'rate': 1000,
        'max_valuation': 1000000,
        'company_num': 5,
        'company_valuation': 30000,
        'boss_amount': 5000000,
        'application_amount': 1000,
        'agree': 1,
        'purchase_price': 10000,
        'result': 1
    },
    {
        'id': 10,
        'selected': false,
        'item_no': 1,
        'category_1': 1,
        'category_2': 2,
        'category_3': 1,
        'category_4': 2,
        'category_5': 3,
        'category_6': 2,
        'images': 2,
        'item_name': '商品名商品名商品名商品名商品名',
        'item_num': 10,
        'application_basic': '申請の根拠申請の根拠申請の根拠',
        'rate': 1000,
        'max_valuation': 1000000,
        'company_num': 5,
        'company_valuation': 30000,
        'boss_amount': 5000000,
        'application_amount': 1000,
        'agree': 1,
        'purchase_price': 10000,
        'result': 1
    },
    {
        'id': 11,
        'selected': false,
        'item_no': 1,
        'category_1': 1,
        'category_2': 2,
        'category_3': 1,
        'category_4': 2,
        'category_5': 3,
        'category_6': 2,
        'images': 2,
        'item_name': '商品名商品名商品名商品名商品名',
        'item_num': 10,
        'application_basic': '申請の根拠申請の根拠申請の根拠',
        'rate': 1000,
        'max_valuation': 1000000,
        'company_num': 5,
        'company_valuation': 30000,
        'boss_amount': 5000000,
        'application_amount': 1000,
        'agree': 1,
        'purchase_price': 10000,
        'result': 1
    },
    {
        'id': 12,
        'selected': false,
        'item_no': 1,
        'category_1': 1,
        'category_2': 2,
        'category_3': 1,
        'category_4': 2,
        'category_5': 3,
        'category_6': 2,
        'images': 2,
        'item_name': '商品名商品名商品名商品名商品名',
        'item_num': 10,
        'application_basic': '申請の根拠申請の根拠申請の根拠',
        'rate': 1000,
        'max_valuation': 1000000,
        'company_num': 5,
        'company_valuation': 30000,
        'boss_amount': 5000000,
        'application_amount': 1000,
        'agree': 1,
        'purchase_price': 10000,
        'result': 1
    },
    {
        'id': 13,
        'selected': false,
        'item_no': 1,
        'category_1': 1,
        'category_2': 2,
        'category_3': 1,
        'category_4': 2,
        'category_5': 3,
        'category_6': 2,
        'images': 2,
        'item_name': '商品名商品名商品名商品名商品名',
        'item_num': 10,
        'application_basic': '申請の根拠申請の根拠申請の根拠',
        'rate': 1000,
        'max_valuation': 1000000,
        'company_num': 5,
        'company_valuation': 30000,
        'boss_amount': 5000000,
        'application_amount': 1000,
        'agree': 1,
        'purchase_price': 10000,
        'result': 1
    },
    {
        'id': 14,
        'selected': false,
        'item_no': 1,
        'category_1': 1,
        'category_2': 2,
        'category_3': 1,
        'category_4': 2,
        'category_5': 3,
        'category_6': 2,
        'images': 2,
        'item_name': '商品名商品名商品名商品名商品名',
        'item_num': 10,
        'application_basic': '申請の根拠申請の根拠申請の根拠',
        'rate': 1000,
        'max_valuation': 1000000,
        'company_num': 5,
        'company_valuation': 30000,
        'boss_amount': 5000000,
        'application_amount': 1000,
        'agree': 1,
        'purchase_price': 10000,
        'result': 1
    },
    {
        'id': 15,
        'selected': false,
        'item_no': 1,
        'category_1': 1,
        'category_2': 2,
        'category_3': 1,
        'category_4': 2,
        'category_5': 3,
        'category_6': 2,
        'images': 2,
        'item_name': '商品名商品名商品名商品名商品名',
        'item_num': 10,
        'application_basic': '申請の根拠申請の根拠申請の根拠',
        'rate': 1000,
        'max_valuation': 1000000,
        'company_num': 5,
        'company_valuation': 30000,
        'boss_amount': 5000000,
        'application_amount': 1000,
        'agree': 1,
        'purchase_price': 10000,
        'result': 1
    },
    {
        'id': 16,
        'selected': false,
        'item_no': 1,
        'category_1': 1,
        'category_2': 2,
        'category_3': 1,
        'category_4': 2,
        'category_5': 3,
        'category_6': 2,
        'images': 2,
        'item_name': '商品名商品名商品名商品名商品名',
        'item_num': 10,
        'application_basic': '申請の根拠申請の根拠申請の根拠',
        'rate': 1000,
        'max_valuation': 1000000,
        'company_num': 5,
        'company_valuation': 30000,
        'boss_amount': 5000000,
        'application_amount': 1000,
        'agree': 1,
        'purchase_price': 10000,
        'result': 1
    },
    {
        'id': 17,
        'selected': false,
        'item_no': 1,
        'category_1': 1,
        'category_2': 2,
        'category_3': 1,
        'category_4': 2,
        'category_5': 3,
        'category_6': 2,
        'images': 2,
        'item_name': '商品名商品名商品名商品名商品名',
        'item_num': 10,
        'application_basic': '申請の根拠申請の根拠申請の根拠',
        'rate': 1000,
        'max_valuation': 1000000,
        'company_num': 5,
        'company_valuation': 30000,
        'boss_amount': 5000000,
        'application_amount': 1000,
        'agree': 1,
        'purchase_price': 10000,
        'result': 1
    },
    {
        'id': 18,
        'selected': false,
        'item_no': 1,
        'category_1': 1,
        'category_2': 2,
        'category_3': 1,
        'category_4': 2,
        'category_5': 3,
        'category_6': 2,
        'images': 2,
        'item_name': '商品名商品名商品名商品名商品名',
        'item_num': 10,
        'application_basic': '申請の根拠申請の根拠申請の根拠',
        'rate': 1000,
        'max_valuation': 1000000,
        'company_num': 5,
        'company_valuation': 30000,
        'boss_amount': 5000000,
        'application_amount': 1000,
        'agree': 1,
        'purchase_price': 10000,
        'result': 1
    },
    {
        'id': 19,
        'selected': false,
        'item_no': 1,
        'category_1': 1,
        'category_2': 2,
        'category_3': 1,
        'category_4': 2,
        'category_5': 3,
        'category_6': 2,
        'images': 2,
        'item_name': '商品名商品名商品名商品名商品名',
        'item_num': 10,
        'application_basic': '申請の根拠申請の根拠申請の根拠',
        'rate': 1000,
        'max_valuation': 1000000,
        'company_num': 5,
        'company_valuation': 30000,
        'boss_amount': 5000000,
        'application_amount': 1000,
        'agree': 1,
        'purchase_price': 10000,
        'result': 1
    },
    {
        'id': 20,
        'selected': false,
        'item_no': 1,
        'category_1': 1,
        'category_2': 2,
        'category_3': 1,
        'category_4': 2,
        'category_5': 3,
        'category_6': 2,
        'images': 2,
        'item_name': '商品名商品名商品名商品名商品名',
        'item_num': 10,
        'application_basic': '申請の根拠申請の根拠申請の根拠',
        'rate': 1000,
        'max_valuation': 1000000,
        'company_num': 5,
        'company_valuation': 30000,
        'boss_amount': 5000000,
        'application_amount': 1000,
        'agree': 1,
        'purchase_price': 10000,
        'result': 1
    }]);
    const [categoryColumnsVisibility, setCategoryColumnsVisibility] = useState({
        category_2: false,
        category_3: false,
        category_4: false,
        category_5: false,
        category_6: false,
    });
    const [companyColumnsVisibility, setCompanyColumnsVisibility] = useState({
        company_valuation: false,
    });
    const toggleCategoryColumn = () => {
        setCategoryVisibility(!categoryVisibility)
        setCategoryColumnsVisibility({
            category_2: !categoryVisibility,
            category_3: !categoryVisibility,
            category_4: !categoryVisibility,
            category_5: !categoryVisibility,
            category_6: !categoryVisibility,
        });
        visibleColumns = columns.filter(
            (col) => categoryColumnsVisibility[col.key] || companyColumnsVisibility[col.key] ||
                (categoryColumnsVisibility[col.key] == undefined && companyColumnsVisibility[col.key] == undefined)
        );
    };
    const toggleCompanyColumn = () => {
        setCompanyVisibility(!companyVisibility)
        setCompanyColumnsVisibility({
            company_valuation: !companyVisibility
        });
        visibleColumns = columns.filter(
            (col) => categoryColumnsVisibility[col.key] || companyColumnsVisibility[col.key] ||
                (categoryColumnsVisibility[col.key] == undefined && companyColumnsVisibility[col.key] == undefined)
        );
    };
    const handleCheckboxChange = (id) => {
        setData((prevData) =>
            prevData.map((row) =>
                row.id === id ? { ...row, selected: !row.selected } : row
            )
        );
    };
    const handleCategorySelectChange1 = (id, value) => {
        setData((prevData) =>
            prevData.map((row) => (row.id === id ? { ...row, category_1: value } : row))
        );
    };
    const handleCategorySelectChange2 = (id, value) => {
        setData((prevData) =>
            prevData.map((row) => (row.id === id ? { ...row, category_2: value } : row))
        );
    };
    const handleCategorySelectChange3 = (id, value) => {
        setData((prevData) =>
            prevData.map((row) => (row.id === id ? { ...row, category_3: value } : row))
        );
    };
    const handleCategorySelectChange4 = (id, value) => {
        setData((prevData) =>
            prevData.map((row) => (row.id === id ? { ...row, category_4: value } : row))
        );
    };
    const handleCategorySelectChange5 = (id, value) => {
        setData((prevData) =>
            prevData.map((row) => (row.id === id ? { ...row, category_5: value } : row))
        );
    };
    const handleCategorySelectChange6 = (id, value) => {
        setData((prevData) =>
            prevData.map((row) => (row.id === id ? { ...row, category_6: value } : row))
        );
    };
    const handleAgreeSelectChange = (id, value) => {
        setData((prevData) =>
            prevData.map((row) => (row.id === id ? { ...row, agree: value } : row))
        );
    };
    const handleResultSelectChange = (id, value) => {
        setData((prevData) =>
            prevData.map((row) => (row.id === id ? { ...row, result: value } : row))
        );
    };
    const columns = [
        {
            title: "選択",
            dataIndex: "selected",
            key: "selected",
            render: (text, record) => (
                <Checkbox
                    checked={record.selected}
                    onChange={() => handleCheckboxChange(record.id)}
                >
                </Checkbox>
            ),
        },
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
                            <ArrowBackIosIcon size="small" onClick={toggleCategoryColumn} />
                            :
                            <ArrowForwardIosIcon size="small" onClick={toggleCategoryColumn} />
                    }
                </div>
            ),
            dataIndex: "category_1",
            key: "category_1",
            render: (text, record) => (
                <Select
                    value={record.category_1}
                    onChange={(value) => handleCategorySelectChange1(record.id, value)}
                    style={{ width: 120 }}
                >
                    {category1.map((category, i) => (
                        <Option key={i} value={i + 1}>
                            {category}
                        </Option>
                    ))}
                </Select>
            ),
        },
        {
            title: "カテゴリー2",
            dataIndex: "category_2",
            key: "category_2",
            render: (text, record) => (
                <Select
                    value={record.category_2}
                    onChange={(value) => handleCategorySelectChange2(record.id, value)}
                    style={{ width: 120 }}
                >
                    {category2.map((category, i) => (
                        <Option key={i} value={i + 1}>
                            {category}
                        </Option>
                    ))}
                </Select>
            ),
        },
        {
            title: "カテゴリー3",
            dataIndex: "category_3",
            key: "category_3",
            render: (text, record) => (
                <Select
                    value={record.category_3}
                    onChange={(value) => handleCategorySelectChange3(record.id, value)}
                    style={{ width: 120 }}
                >
                    {category3.map((category, i) => (
                        <Option key={i} value={i + 1}>
                            {category}
                        </Option>
                    ))}
                </Select>
            ),
        },
        {
            title: "カテゴリー4",
            dataIndex: "category_4",
            key: "category_4",
            render: (text, record) => (
                <Select
                    value={record.category_4}
                    onChange={(value) => handleCategorySelectChange4(record.id, value)}
                    style={{ width: 120 }}
                >
                    {category4.map((category, i) => (
                        <Option key={i} value={i + 1}>
                            {category}
                        </Option>
                    ))}
                </Select>
            ),
        },
        {
            title: "カテゴリー5",
            dataIndex: "category_5",
            key: "category_5",
            render: (text, record) => (
                <Select
                    value={record.category_5}
                    onChange={(value) => handleCategorySelectChange5(record.id, value)}
                    style={{ width: 120 }}
                >
                    {category5.map((category, i) => (
                        <Option key={i} value={i + 1}>
                            {category}
                        </Option>
                    ))}
                </Select>
            ),
        },
        {
            title: "カテゴリー6",
            dataIndex: "category_6",
            key: "category_6",
            render: (text, record) => (
                <Select
                    value={record.category_6}
                    onChange={(value) => handleCategorySelectChange6(record.id, value)}
                    style={{ width: 120 }}
                >
                    {category6.map((category, i) => (
                        <Option key={i} value={i + 1}>
                            {category}
                        </Option>
                    ))}
                </Select>
            ),
        },
        {
            title: "画像",
            dataIndex: "images",
            key: "images",
        },
        {
            title: "商品名",
            dataIndex: "item_name",
            key: "item_name",
        },
        {
            title: "個数",
            dataIndex: "item_num",
            key: "item_num",
        },
        {
            title: "申請の根拠",
            dataIndex: "application_basic",
            key: "application_basic",
        },
        {
            title: "利率",
            dataIndex: "rate",
            key: "rate",
        },
        {
            title: "最高査定額",
            dataIndex: "max_valuation",
            key: "max_valuation",
        },
        {
            title: (
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    業社
                    {
                        companyVisibility ?
                            <ArrowBackIosIcon size="small" onClick={toggleCompanyColumn} />
                            :
                            <ArrowForwardIosIcon size="small" onClick={toggleCompanyColumn} />
                    }
                </div>
            ),
            dataIndex: "company_num",
            key: "company_num",
        },
        {
            title: "業者の査定額",
            dataIndex: "company_valuation",
            key: "company_valuation",
        },
        {
            title: "上司の指示額",
            dataIndex: "boss_amount",
            key: "boss_amount",
        },
        {
            title: "申請額",
            dataIndex: "application_amount",
            key: "application_amount",
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
    return (
        <TableMaster
            rowKey="id"
            disabledSearch="true"
            columns={visibleColumns}
            dataSource={data}
        />
    );
};
export default TablePurchaseVisitShop;
