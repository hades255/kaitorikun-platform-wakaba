import React, { useEffect, useState, useMemo } from 'react';
import { Table, Checkbox, Button, List } from 'antd';
import { Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import DateInput from "../../../components/DateInput";
import {
    TableMaster,
    getData,
    postData,
    getItem,
    Row,
    Col,
} from "../../../components";
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import ArrowForwardIosIcon from "@mui/icons-material/ArrowRight";
import ArrowBackIosIcon from "@mui/icons-material/ArrowLeft";
import CameraCaptureDialog from '../../purchase-manage/register/camera';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import moment from 'moment';
moment.locale("ja");

const ItemsTable = (props) => {
    const [shops, setShops] = useState()
    const [shop, setShop] = useState()
    const [shopName, setShopName] = useState()
    const [items, setItems] = useState([])
    const [filters, setFilters] = useState({
        id: [],
        purchase_id: [],
        result: [],
        purchase_date: [],
        officer_name: [],
        shop_name: [],
        name: [],
        name_kana: [],
        phone_number: [],
        address: [],
        type: [],
        category1: [],
        category2: [],
        category3: [],
        category4: [],
        category5: [],
        category6: [],
        item_name: [],
        amount: [],
        gold_seeds: [],
        g_face_value: [],
        purchase_price: [],
        highest_check_price: [],
        sales_forecast: [],
        sales_price: [],
        tentative_appraisal_date: [],
        tentative_appraisal_price: [],
        actual_appraisal_date: [],
        actual_appraisal_price: [],
        postage: [],
        profit_forecast: [],
        profit_price: [],
        wholesale_destination: [],
        payment_date: [],
        wholesale_date: [],
        note1: [],
        note2: [],
    });

    const [visible, setVisible] = useState(false);
    const [itemData, setItemData] = useState([]);
    const [currentColumn, setCurrentColumn] = useState();
    const [currentColumnName, setCurrentColumnName] = useState();
    const [currentDateColumnName, setCurrentDateColumnName] = useState();
    const [dateFilterType, setDateFilterType] = useState(null);
    const [selectedYear, setSelectedYear] = useState(0);
    const [selectedMonth, setSelectedMonth] = useState(moment().format('MM') - 1);
    const [selectedDay, setSelectedDay] = useState(moment().format('DD') - 1);
    const [selectedStartDate, setSelectedStartDate] = useState(null);
    const [selectedEndDate, setSelectedEndDate] = useState(null);
    const [selectedIndex, setSelectedIndex] = useState([]);
    const [selectedItemImages, setSelectedItemImages] = useState([]);
    const [selectedItemImage, setSelectedItemImage] = useState();
    const [openImageSlider, setOpenImageSlider] = useState(false)
    const [openCameraPreview, setOpenCameraPreview] = useState(false)
    const [dateFilters, setDateFilters] = useState({});
    const [open, setOpen] = useState(false);
    const [initFilterFlag, setInitFilterFlag] = useState(false);
    const [categoryVisibility, setCategoryVisibility] = useState(false);
    const [categoryColumnsVisibility, setCategoryColumnsVisibility] = useState({
        category2: false,
        category3: false,
        category4: false,
        category5: false,
        category6: false,
    });
    const [customerVisibility, setCustomerVisibility] = useState(false);
    const [customerColumnsVisibility, setCustomerColumnsVisibility] = useState({
        name_kana: false,
        phone_number: false,
        address: false,
        type: false,
    });
    const [appraisalVisibility, setAppraisalVisibility] = useState(false);
    const [appraisalColumnsVisibility, setAppraisalColumnsVisibility] = useState({
        tentative_appraisal_date: false,
        tentative_appraisal_price: false,
        actual_appraisal_date: false,
        actual_appraisal_price: false,
    });
    const [noteVisibility, setNoteVisibility] = useState(false);
    const [noteColumnsVisibility, setNoteColumnsVisibility] = useState({
        note2: false,
    });

    const [results, setResults] = useState(["お預かり", "買取済", "出品中", "不正約", "クーリングオフ期間", "卸発送中", "入金確認済"]);

    const currentYear = new Date().getFullYear()
    const years = Array.from({ length: 101 }, (_, i) => currentYear - i)
    const months = Array.from({ length: 12 }, (_, i) => i + 1)
    const dates = Array.from({ length: new Date(selectedYear, selectedMonth, 0).getDate() || 31 }, (_, i) => i + 1)

    useEffect(() => {
        // API Call
        const fetchData = async () => {
            let result = await getData("datas")
            if (result.status === 200) {
                let data = result.data;
                setShops(data.shops);
            }
        };
        fetchData();
    }, []);

    useEffect(() => {
        getItemsList(undefined);
        if (getItem("userdata").role > 4) {
            setResults(["お預かり", "買取済", "出品中", "不正約", "クーリングオフ期間", "卸発送中"]);
        }
    }, []);

    useEffect(() => {
        // if (items.length > 0 && !initFilterFlag) {
        //     console.log("ddd");

        handleClearAllFilters();
        //     setInitFilterFlag(true)
        // }
    }, [items]);

    const getItemsList = async (shop_id) => {
        setItems([])
        const formData = new FormData();
        if (shop_id !== undefined) {
            console.log(shop_id);

            formData.append("shop_id", shop_id);
        }
        formData.append("user_id", getItem("userdata").id);

        let result = await postData("items/list", formData)
        if (result.status === 200) {
            let data = result.data;
            console.log(data);
            const itemsData = data.items
            itemsData.forEach(item => {
                item.image_files = JSON.parse(item.image_files)
            });
            setItems(itemsData);
            if (data.shop_id !== "") {
                setShopName(shops[data.shop_id - 1].name)
            }
        }
    };

    const showFilterModal = (i) => {
        const column = columns[i]
        setCurrentColumnName(column.name);
        setCurrentColumn(column.dataIndex);
        const c_col = column.dataIndex
        if (column.dataIndex == 'purchase_date'
            || column.dataIndex == 'tentative_appraisal_date'
            || column.dataIndex == 'actual_appraisal_date'
            || column.dataIndex == 'payment_date'
            || column.dataIndex == 'wholesale_date') {
            setOpen(true);
        } else {
            let filterItems = []
            items?.filter((item) => {
                for (const column of Object.keys(filters)) {
                    if (column == c_col) {
                        if ((item[c_col] && item[c_col] !== '') && !filterItems.includes(item[c_col])) {
                            filterItems.push(item[c_col])
                        }
                    }
                }
            });
            setItemData(filterItems)
            setVisible(true);
        }
    };

    const handleOk = () => {
        setVisible(false);
        // Filter data based on selected filters
    };

    const handleCancel = () => {
        setVisible(false);
    };

    const handleDateDeselectAll = () => {
        setDateFilterType(null)
    };

    const handleCloseDateFilterDialog = () => {
        setOpen(false);
    };

    const handleApplyFilters = () => {
        setOpen(false);
    };
    const handleSelectAll = () => {
        let filterItems = []
        items?.filter((item) => {
            // Apply filters for each column
            for (const column of Object.keys(filters)) {
                if (column == currentColumn) {
                    filterItems.push(item[currentColumn])
                }
            }
        });
        setFilters((prev) => ({
            ...prev,
            [currentColumn]: filterItems // Mark 'All' as selected
        }));
    };

    const handleDeselectAll = () => {
        setFilters((prev) => ({
            ...prev,
            [currentColumn]: [] // Clear all selections
        }));
    };

    const handleCheckboxChange = (value) => {
        setFilters((prev) => ({
            ...prev,
            [currentColumn]: prev[currentColumn].includes(value)
                ? prev[currentColumn].filter((v) => v !== value)
                : [...prev[currentColumn], value]
        }));
    };

    const handleClearAllFilters = () => {
        for (const _column of Object.keys(filters)) {
            let filterItems = []
            items?.filter((item) => {
                // Apply filters for each column
                for (const column of Object.keys(filters)) {
                    if (column == _column) {
                        // if (item[_column]) {
                        filterItems.push(item[_column])
                        // }
                    }
                }
            });
            setFilters((prev) => ({
                ...prev,
                [_column]: filterItems // Mark 'All' as selected
            }));
        }
        setDateFilterType(null)
        setDateFilters({});
        setSelectedStartDate(null);
        setSelectedEndDate(null);
    };

    const handleCustomerRegisterClick = () => {
        props.onHandleCustomerRegister();
    }

    const handleStatusSelectChange = (id, value) => {
        setItems((prevData) =>
            prevData.map((row) => (row.id === id ? { ...row, result: value } : row))
        );
    };

    const handleCapturedItemImageDialog = () => {
        console.log('ddd');
        setOpenImageSlider(false)
        setOpenCameraPreview(true)
    }

    const handleCameraPreviewClose = () => {
        setOpenCameraPreview(false)
    }

    const handleImageSliderClose = () => {
        setOpenImageSlider(false)
    }

    const handleCapturedImage = (type, image) => { // base64
        setOpenCameraPreview(false)
        setItems(prevData =>
            prevData.map((obj) =>
                obj.id === selectedIndex ? { ...obj, image_files: [...obj.image_files, obj.image_files.push(image)] } : obj
            )
        );
        setItems(items.map(item =>
            item.id === selectedIndex
                ? { ...item, images: item.images + 1 }
                : item
        ));
    }

    const setCurrentImage = (id) => {
        console.log(Number.isNaN(id));
        if (Number.isNaN(id)) {

            setSelectedItemImage(0)
        } else {
            setSelectedItemImage(id);
        }
    }

    useEffect(() => {
        if (selectedIndex !== undefined) {
            let selectedItem = items?.filter(item => item.id === selectedIndex)
            setSelectedItemImages([])
            let images = []
            selectedItem?.forEach(item => {
                if (item.image_files.length > 0) {
                    item.image_files?.forEach(image => { // base64
                        images.push(image)
                    });
                }
            });

            setSelectedItemImages(images)
        }
    }, [items]);
    const handleDeleteItemImage = () => {
        if (selectedItemImages.length > 0) {
            if (window.confirm("本当に削除してもよろしいでしょうか？")) {
                setItems(items.map(item =>
                    item.id === selectedIndex
                        ? { ...item, images: item.images - 1 }
                        : item
                ));
                setItems((prevGroups) =>
                    prevGroups.map((group) =>
                        group.id === selectedIndex
                            ? { ...group, image_files: group.image_files.filter((_, i) => i !== selectedItemImage) }
                            : group
                    )
                );
            }
        }
    }

    const handleFileChange = (e) => {
        const file = e.target.files[0]
        alert(file.name + "を取り込みました。")
        if (file) {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => {
                handleCapturedImage(1, reader.result)
            };
            reader.onerror = (error) => {
                console.error("Error converting file to base64:", error);
            };
        }
    }

    const columns = [
        { name: '商品番号', title: <Button type="link" onClick={() => showFilterModal(0)}>商品番号</Button>, dataIndex: 'id', width: 50 },
        { name: 'わかばNo', title: <Button type="link" onClick={() => showFilterModal(1)}>わかばNo</Button>, dataIndex: 'purchase_id', width: 50 },
        {
            name: 'ステータス', title: <Button type="link" onClick={() => showFilterModal(2)}>ステータス</Button>, dataIndex: 'result',
            render: (text, record) => (
                <Select
                    onChange={(e) => handleStatusSelectChange(record.id, e.target.value)}
                    displayEmpty
                    className="shop-select"
                    style={{
                        width: "120px",
                        backgroundColor: record.result == 2 ? "purple" : (record.result == 4 ? "green" : (record.result == 5 ? "orange" : (record.result == 6 ? "blue" : "white"))),
                        color: (record.result == 2 || record.result == 4 || record.result == 5 || record.result == 6) ? "white" : "black"
                    }}
                    size='small'
                    value={record.result}
                >
                    <MenuItem disabled value="">
                        <span className="text-gray-500">ステータス</span>
                    </MenuItem>
                    {results?.map((result, i) => (
                        <MenuItem key={i} value={i}>{result}</MenuItem>
                    ))}
                </Select>
            ),
        },
        {
            name: '買取日', title: <Button type="link" onClick={() => showFilterModal(3)}>買取日</Button>,
            render: (text, record) => (
                <div
                    style={{ width: 100 }}
                >{moment(text).format('YYYY-MM-DD')}</div>
            ),
            dataIndex: 'purchase_date'
        },
        { name: '買取担当', title: <Button type="link" onClick={() => showFilterModal(4)}>買取担当</Button>, dataIndex: 'officer_name' },
        { name: '販売店名', title: <Button type="link" onClick={() => showFilterModal(5)}>販売店名</Button>, dataIndex: 'shop_name' },
        {
            name: '名前',
            title: (
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <Button type="link" onClick={() => showFilterModal(6)}>名前</Button>
                    {
                        customerVisibility ?
                            <ArrowBackIosIcon size="small" style={{ cursor: "pointer" }} onClick={() => toggleCustomerColumn()} />
                            :
                            <ArrowForwardIosIcon size="small" style={{ cursor: "pointer" }} onClick={() => toggleCustomerColumn()} />
                    }
                </div>

            ),
            dataIndex: 'name'
        },
        { name: 'カタカナ名', title: <Button type="link" onClick={() => showFilterModal(7)}>カタカナ名</Button>, dataIndex: 'name_kana', key: 'name_kana' },
        { name: '電話番号', title: <Button type="link" onClick={() => showFilterModal(8)}>電話番号</Button>, dataIndex: 'phone_number', key: 'phone_number' },
        { name: '住所', title: <Button type="link" onClick={() => showFilterModal(9)}>住所</Button>, dataIndex: 'phone_number', key: 'phone_number' },
        { name: '来店経緯', title: <Button type="link" onClick={() => showFilterModal(10)}>来店経緯</Button>, dataIndex: 'type', key: 'type' },
        {
            name: 'カテゴリー1',
            title: (
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <Button type="link" onClick={() => showFilterModal(11)}>カテゴリー1</Button>
                    {
                        categoryVisibility ?
                            <ArrowBackIosIcon size="small" style={{ cursor: "pointer" }} onClick={() => toggleCategoryColumn()} />
                            :
                            <ArrowForwardIosIcon size="small" style={{ cursor: "pointer" }} onClick={() => toggleCategoryColumn()} />
                    }
                </div>

            ),
            dataIndex: 'category1', width: 100
        },
        { name: 'カテゴリー2', title: <Button type="link" onClick={() => showFilterModal(12)}>カテゴリー2</Button>, dataIndex: 'category2', key: 'category2', width: 100 },
        { name: 'カテゴリー3', title: <Button type="link" onClick={() => showFilterModal(13)}>カテゴリー3</Button>, dataIndex: 'category3', key: 'category3', width: 100 },
        { name: 'カテゴリー4', title: <Button type="link" onClick={() => showFilterModal(14)}>カテゴリー4</Button>, dataIndex: 'category4', key: 'category4', width: 100 },
        { name: 'カテゴリー5', title: <Button type="link" onClick={() => showFilterModal(15)}>カテゴリー5</Button>, dataIndex: 'category5', key: 'category5', width: 100 },
        { name: 'カテゴリー6', title: <Button type="link" onClick={() => showFilterModal(16)}>カテゴリー6</Button>, dataIndex: 'category6', key: 'category6', width: 100 },

        {
            name: '商品名', title: <Button type="link" onClick={() => showFilterModal(17)}>商品名</Button>,
            render: (cell, row) => {
                return (
                    <div>
                        <Button
                            type="link"
                            onClick={() => handleItemNameClick(row)}
                        >{cell}</Button>
                    </div>
                );
            },
            dataIndex: 'item_name', key: 'item_name', className: "customer-note"
        },
        { name: '個数', title: <Button type="link" onClick={() => showFilterModal(18)}>個数</Button>, dataIndex: 'amount', key: 'amount', width: 50 },
        {
            name: '金種', title: <Button type="link" onClick={() => showFilterModal(19)}>金種</Button>,
            // render: (text, record) => (
            //     <input
            //         type='number'
            //         value={record.gold_seeds}
            //         onChange={(e) => handleGoldSeedsChange(record.id, e.target.value)}
            //         style={{ width: 100 }}
            //     />
            // ),
            dataIndex: 'gold_seeds', key: 'gold_seeds', width: 50
        },
        {
            name: 'g額面', title: <Button type="link" onClick={() => showFilterModal(20)}>g額面</Button>,
            // render: (text, record) => (
            //     <input
            //         type='number'
            //         value={record.g_face_value}
            //         onChange={(e) => handleGFaceValueChange(record.id, e.target.value)}
            //         style={{ width: 100 }}
            //     />
            // ),
            dataIndex: 'g_face_value', key: 'g_face_value', width: 50
        },
        {
            name: '売上予想', title: <Button type="link" onClick={() => showFilterModal(21)}>売上予想</Button>,
            // render: (text, record) => (
            //     <input
            //         type='number'
            //         value={record.sales_forecast}
            //         onChange={(e) => handleSalesForecastChange(record.id, e.target.value)}
            //         style={{ width: 100 }}
            //     />
            // ),
            dataIndex: 'sales_forecast', key: 'sales_forecast', width: 50
        },
        {
            name: '売上額', title: <Button type="link" onClick={() => showFilterModal(22)}>売上額</Button>,
            // render: (text, record) => (
            //     <input
            //         type='number'
            //         value={record.sales_price}
            //         onChange={(e) => handleSalesPriceChange(record.id, e.target.value)}
            //         style={{ width: 100 }}
            //     />
            // ),
            dataIndex: 'sales_price', key: 'sales_price', width: 50
        },
        { name: '買取額', title: <Button type="link" onClick={() => showFilterModal(23)}>買取額</Button>, dataIndex: 'purchase_price', key: 'purchase_price', width: 50 },
        {
            name: '最高査定額',
            title: (
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <Button type="link" onClick={() => showFilterModal(24)}>最高査定額</Button>
                    {
                        appraisalVisibility ?
                            <ArrowBackIosIcon size="small" style={{ cursor: "pointer" }} onClick={() => toggleAppraisalColumn()} />
                            :
                            <ArrowForwardIosIcon size="small" style={{ cursor: "pointer" }} onClick={() => toggleAppraisalColumn()} />
                    }
                </div>

            ),
            dataIndex: 'highest_check_price', key: 'highest_check_price', width: 50
        },
        { name: '仮査定日', title: <Button type="link" onClick={() => showFilterModal(25)}>仮査定日</Button>, dataIndex: 'tentative_appraisal_date', key: 'tentative_appraisal_date', width: 50 },
        { name: '仮査定額', title: <Button type="link" onClick={() => showFilterModal(26)}>仮査定額</Button>, dataIndex: 'tentative_appraisal_price', key: 'tentative_appraisal_price', width: 50 },
        { name: '本査定日', title: <Button type="link" onClick={() => showFilterModal(27)}>本査定日</Button>, dataIndex: 'actual_appraisal_date', key: 'actual_appraisal_date', width: 50 },
        { name: '本査定額', title: <Button type="link" onClick={() => showFilterModal(28)}>本査定額</Button>, dataIndex: 'actual_appraisal_price', key: 'actual_appraisal_price', width: 50 },
        { name: '送料', title: <Button type="link" onClick={() => showFilterModal(29)}>送料</Button>, dataIndex: 'postage', key: 'postage', width: 50 },
        { name: '粗利予想', title: <Button type="link" onClick={() => showFilterModal(30)}>粗利予想</Button>, dataIndex: 'profit_forecast', key: 'profit_forecast', width: 50 },
        { name: '粗利額', title: <Button type="link" onClick={() => showFilterModal(31)}>粗利額</Button>, dataIndex: 'profit_price', key: 'profit_price', width: 50 },
        { name: '卸し先', title: <Button type="link" onClick={() => showFilterModal(32)}>卸し先</Button>, dataIndex: 'wholesale_destination', key: 'wholesale_destination', width: 50 },
        { name: '入金日', title: <Button type="link" onClick={() => showFilterModal(33)}>入金日</Button>, dataIndex: 'payment_date', key: 'payment_date', width: 50 },
        { name: '卸日', title: <Button type="link" onClick={() => showFilterModal(34)}>卸日</Button>, dataIndex: 'wholesale_date', key: 'wholesale_date', width: 50 },
        {
            name: '備考1',
            title: (
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <Button type="link" onClick={() => showFilterModal(35)}>備考1</Button>
                    {
                        noteVisibility ?
                            <ArrowBackIosIcon size="small" style={{ cursor: "pointer" }} onClick={() => toggleNoteColumn()} />
                            :
                            <ArrowForwardIosIcon size="small" style={{ cursor: "pointer" }} onClick={() => toggleNoteColumn()} />
                    }
                </div>

            ),
            dataIndex: 'note1', key: 'note1', width: 50
        },
        { name: '備考2', title: <Button type="link" onClick={() => showFilterModal(36)}>備考2</Button>, dataIndex: 'note2', key: 'note2', width: 50 },
    ];

    const handleGoldSeedsChange = (id, value) => {
        setItems((prevData) =>
            prevData.map((row) => (row.id === id ? { ...row, gold_seeds: value } : row))
        );
    };

    const visibleColumns = columns?.filter(
        (col) => categoryColumnsVisibility[col.key] || customerColumnsVisibility[col.key] || appraisalColumnsVisibility[col.key] || noteColumnsVisibility[col.key] ||
            (categoryColumnsVisibility[col.key] == undefined && customerColumnsVisibility[col.key] == undefined && appraisalColumnsVisibility[col.key] == undefined && noteColumnsVisibility[col.key] == undefined)
    );
    const toggleCategoryColumn = () => {
        setCategoryVisibility(!categoryVisibility)
        setCategoryColumnsVisibility({
            category2: !categoryVisibility,
            category3: !categoryVisibility,
            category4: !categoryVisibility,
            category5: !categoryVisibility,
            category6: !categoryVisibility,
        });
        visibleColumns = columns?.filter(
            (col) => categoryColumnsVisibility[col.key] || customerColumnsVisibility[col.key] || appraisalColumnsVisibility[col.key] || noteColumnsVisibility[col.key] ||
                (categoryColumnsVisibility[col.key] == undefined && customerColumnsVisibility[col.key] == undefined && appraisalColumnsVisibility[col.key] == undefined && noteColumnsVisibility[col.key] == undefined)
        );
    };
    const toggleCustomerColumn = () => {
        setCustomerVisibility(!customerVisibility)
        setCustomerColumnsVisibility({
            name_kana: !customerVisibility,
            phone_number: !customerVisibility,
            address: !customerVisibility,
            type: !customerVisibility,
        });
        visibleColumns = columns?.filter(
            (col) => categoryColumnsVisibility[col.key] || customerColumnsVisibility[col.key] || appraisalColumnsVisibility[col.key] || noteColumnsVisibility[col.key] ||
                (categoryColumnsVisibility[col.key] == undefined && customerColumnsVisibility[col.key] == undefined && appraisalColumnsVisibility[col.key] == undefined && noteColumnsVisibility[col.key] == undefined)
        );
    };
    const toggleAppraisalColumn = () => {
        setAppraisalVisibility(!appraisalVisibility)
        setAppraisalColumnsVisibility({
            tentative_appraisal_date: !appraisalVisibility,
            tentative_appraisal_price: !appraisalVisibility,
            actual_appraisal_date: !appraisalVisibility,
            actual_appraisal_price: !appraisalVisibility,
        });
        visibleColumns = columns?.filter(
            (col) => categoryColumnsVisibility[col.key] || customerColumnsVisibility[col.key] || appraisalColumnsVisibility[col.key] || noteColumnsVisibility[col.key] ||
                (categoryColumnsVisibility[col.key] == undefined && customerColumnsVisibility[col.key] == undefined && appraisalColumnsVisibility[col.key] == undefined && noteColumnsVisibility[col.key] == undefined)
        );
    };
    const toggleNoteColumn = () => {
        setNoteVisibility(!noteVisibility)
        setNoteColumnsVisibility({
            note2: !noteVisibility,
        });
        visibleColumns = columns?.filter(
            (col) => categoryColumnsVisibility[col.key] || customerColumnsVisibility[col.key] || appraisalColumnsVisibility[col.key] || noteColumnsVisibility[col.key] ||
                (categoryColumnsVisibility[col.key] == undefined && customerColumnsVisibility[col.key] == undefined && appraisalColumnsVisibility[col.key] == undefined && noteColumnsVisibility[col.key] == undefined)
        );
    };

    const handleClick = (data) => {
        props.onHandleEdit(data);
    };

    const handleItemNameClick = (row) => {
        setSelectedIndex(row.id)
        let selectedItem = items.filter(item => item.id === row.id)
        let images = []
        selectedItem.forEach(item => {
            if (item.image_files.length > 0) {
                item.image_files.forEach(image => { // base64
                    images.push(image)
                });
            }
        });
        setSelectedItemImages(images)
        setOpenImageSlider(true)
    };

    const handleShopChange = (value) => {
        setShop(value)
        getItemsList(value);
    }

    const handleDeleteItemsClick = () => {
        const selectedItems = getSelectedItems()
        if (selectedItems.length <= 0) {
            alert("現在、選択されている商品はありません。");
            return;
        }
        if (window.confirm("一括削除してもよろしいですか？")) {
            setItems(items.filter(item => !selectedItems.includes(item)));
        } else {
        }
    }

    const getSelectedItems = () => {
        let list = Array()
        items.forEach(item => {
            if (item.selected == true) {
                list.push(item)
            }
        });
        console.log(list);

        return list;
    }

    const rowSelection = {
        onChange: (selectedKeys, selectedRecords) => {
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

    const filteredData = useMemo(() => {
        return items?.filter((item) => {
            return Object.keys(filters).every((key) => {
                for (const column of Object.keys(filters)) {
                    if (filters[column].length && !filters[column].includes(item[column])) {
                        return false;
                    }
                }
                const filterValue = filters[key];

                if ((key == 'purchase_date'
                    || key == 'tentative_appraisal_date'
                    || key == 'actual_appraisal_date'
                    || key == 'payment_date'
                    || key == 'wholesale_date') && filterValue) {
                    if (item[key]) {
                        const date = moment(item[key]);
                        switch (dateFilterType) {
                            case '年':
                                return date.format('YYYY') == years[selectedYear];
                            case '月':
                                return date.format('YYYY-MM') == moment(years[selectedYear] + '-' + months[selectedMonth], 'YYYY-MM').format('YYYY-MM');
                            case '日':
                                setSelectedYear(0)
                                setSelectedMonth(moment().format('MM') - 1)
                                setSelectedDay(moment().format('DD') - 1)
                                return (
                                    date.isBefore(moment(), "day")
                                );
                            case '期間':
                                return (
                                    (selectedStartDate && selectedEndDate) && date.isBetween(moment(selectedStartDate), moment(selectedEndDate))
                                );
                            default:
                                return true;
                        }
                    } else {
                        return true;
                    }
                }
                return true;
            });
        });
    }, [filters, items, dateFilterType, selectedYear, selectedMonth, selectedDay, selectedStartDate, selectedEndDate]);

    return (
        <div>
            <div className='flex-left'>
                <Button
                    type="button"
                    onClick={handleClearAllFilters}
                    style={{ backgroundColor: "#5A6268", color: 'white' }}
                >フィルター全解除</Button>
                <div className="input-label">店舗名</div>
                {
                    getItem("userdata").role <= 4 &&
                    <div className="input-value">
                        <Select
                            onChange={(e) => handleShopChange(e.target.value)}
                            displayEmpty
                            className="shop-select"
                            style={{ width: "100px" }}
                            size='small'
                            value={shop}
                        >
                            <MenuItem disabled value="">
                                <span className="text-gray-500">店舗名</span>
                            </MenuItem>
                            {shops?.map(item => (
                                <MenuItem key={item.id} value={item.id}>{item.name}</MenuItem>
                            ))}
                        </Select>
                    </div>
                }
                {
                    getItem("userdata").role > 4 &&
                    <div className="input-label">{shopName}</div>
                }
                <Button
                    type="submit"
                    onClick={() => handleDeleteItemsClick()}
                    style={{ backgroundColor: "#C82333", color: 'white', marginTop: '3px' }}
                >一括削除</Button>
            </div>
            <TableMaster
                columns={visibleColumns}
                dataSource={filteredData}
                rowKey="id"
                disabledSearch="true"
                tableLayout="fixed"
                rowSelection={rowSelection}
                width={1024}
                pageSize={15}
            />

            {/* Filter Modal */}
            {(currentColumn == 'purchase_date'
                || currentColumn == 'tentative_appraisal_date'
                || currentColumn == 'actual_appraisal_date'
                || currentColumn == 'payment_date'
                || currentColumn == 'wholesale_date') ? (
                <Dialog open={open} onClose={handleCloseDateFilterDialog}>
                    <DialogTitle>{currentColumnName} フィルター</DialogTitle>
                    <DialogContent>
                        <Button onClick={handleDateDeselectAll}>全選択解除</Button>
                        <div>
                            <Checkbox
                                value="年"
                                checked={dateFilterType === '年'}
                                onChange={() => setDateFilterType('年')}
                            >
                                年指定
                            </Checkbox>
                            <Checkbox
                                value="月"
                                checked={dateFilterType === '月'}
                                onChange={() => setDateFilterType('月')}
                            >
                                月指定
                            </Checkbox>
                            <Checkbox
                                value="日"
                                checked={dateFilterType === '日'}
                                onChange={() => setDateFilterType('日')}
                            >
                                今日まで
                            </Checkbox>
                            <Checkbox
                                value="期間"
                                checked={dateFilterType === '期間'}
                                onChange={() => setDateFilterType('期間')}
                            >
                                日付期間
                            </Checkbox>
                        </div>

                        <div>
                            {
                                dateFilterType === '年' && (
                                    <div>
                                        <Select
                                            onChange={(e) => setSelectedYear(e.target.value)}
                                            displayEmpty
                                            className="shop-select"
                                            size='small'
                                            value={selectedYear}
                                        >
                                            {years.map((item, key) => (
                                                <MenuItem value={key} key={key}>{item}</MenuItem>
                                            ))}
                                        </Select>
                                    </div>
                                )
                            }
                            {
                                dateFilterType === '月' && (
                                    <div className='flex-center'>
                                        <Select
                                            onChange={(e) => setSelectedYear(e.target.value)}
                                            displayEmpty
                                            className="shop-select"
                                            size='small'
                                            value={selectedYear}
                                        >
                                            {years.map((item, key) => (
                                                <MenuItem value={key} key={key}>{item}</MenuItem>
                                            ))}
                                        </Select>
                                        <Select
                                            onChange={(e) => setSelectedMonth(e.target.value)}
                                            displayEmpty
                                            className="shop-select"
                                            value={selectedMonth}
                                            size='small'
                                        >
                                            {months.map((item, key) => (
                                                <MenuItem value={key} key={key}>{item}</MenuItem>
                                            ))}
                                        </Select>
                                    </div>
                                )
                            }
                            {
                                dateFilterType === '日' && (
                                    <div className='flex-center'>
                                        <Select
                                            onChange={(e) => setSelectedYear(e.target.value)}
                                            displayEmpty
                                            className="shop-select"
                                            size='small'
                                            value={selectedYear}
                                        >
                                            {years.map((item, key) => (
                                                <MenuItem value={key} key={key}>{item}</MenuItem>
                                            ))}
                                        </Select>
                                        <Select
                                            onChange={(e) => setSelectedMonth(e.target.value)}
                                            displayEmpty
                                            className="shop-select"
                                            value={selectedMonth}
                                            size='small'
                                        >
                                            {months.map((item, key) => (
                                                <MenuItem value={key} key={key}>{item}</MenuItem>
                                            ))}
                                        </Select>
                                        <Select
                                            onChange={(e) => setSelectedDay(e.target.value)}
                                            displayEmpty
                                            className="shop-select"
                                            value={selectedDay}
                                            size='small'
                                        >
                                            {dates.map((item, key) => (
                                                <MenuItem value={key} key={key}>{item}</MenuItem>
                                            ))}
                                        </Select>
                                    </div>
                                )
                            }
                            {
                                dateFilterType === '期間' && (
                                    <div>
                                        <DateInput
                                            className="shop-select"
                                            onChange={(e) => setSelectedStartDate(e)}
                                        />
                                        <DateInput
                                            className="shop-select"
                                            onChange={(e) => setSelectedEndDate(e)}
                                        />
                                    </div>
                                )
                            }
                        </div>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleCloseDateFilterDialog} color="primary">
                            キャンセル
                        </Button>
                        <Button onClick={handleApplyFilters} color="primary">
                            適用
                        </Button>
                    </DialogActions>
                </Dialog>
            ) : (
                <Dialog open={visible} onClose={handleCancel}>
                    <DialogTitle>{currentColumnName} フィルター</DialogTitle>
                    <DialogContent>
                        <Button onClick={handleSelectAll}>全選択</Button>
                        <Button onClick={handleDeselectAll}>全選択解除</Button>
                        <List
                            style={{ maxHeight: 200, overflowY: 'scroll' }}
                            dataSource={itemData}
                            renderItem={(item) => (
                                <List.Item>
                                    <Checkbox
                                        checked={filters[currentColumn]?.includes(item)}
                                        onChange={() => handleCheckboxChange(item)}
                                    >
                                        {currentColumn == "result" ? results[item] : item}
                                    </Checkbox>
                                </List.Item>
                            )}
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleCancel}>キャンセル</Button>
                        <Button onClick={handleOk}>適用</Button>
                    </DialogActions>
                </Dialog>
            )}
            <div>
                <Dialog
                    open={openImageSlider}
                    onClose={() => handleImageSliderClose()}
                    className='image-preview'
                >
                    <div style={{ position: 'relative' }}>
                        <Swiper onSlideChange={(swiper) => setCurrentImage(swiper.realIndex)} spaceBetween={0} slidesPerView={1} autoplay={{ delay: 300 }} loop={true} style={{ textAlign: 'center', minHeight: '400px' }}>
                            {selectedItemImages.map((image_file, key) => (
                                <SwiperSlide key={key}><img src={image_file} alt="1" /></SwiperSlide>
                            ))}
                        </Swiper>
                        <div className='flex-base' style={{ paddingBottom: '5px', backgroundColor: 'white', position: 'absolute', top: '0', width: '100%', zIndex: '10' }}>
                            <label htmlFor={`doc_2`} className='flex w-44 shrink-0 bg-sky-600 p-2 rounded flex gap-2 justify-center items-center text-white text-md cursor-pointer hover:opacity-75'>
                                <input type="file" id={`doc_2`} className='hidden' onChange={(e) => handleFileChange(e)} accept='.jpg,.jpeg,.png' />
                                <div className='add_img_btn flex-center'>追加</div>
                            </label>
                            <Button
                                type="button"
                                color="primary"
                                style={{ backgroundColor: "#C82333", color: 'white', width: "100px" }}
                                onClick={() => handleDeleteItemImage()}
                            >削除</Button>
                        </div>
                    </div>
                </Dialog>
            </div>
            <div>
                <Dialog
                    open={openCameraPreview}
                    disableEscapeKeyDown={true}
                    className='image-preview'
                >
                    <CameraCaptureDialog
                        type={"item"}
                        onHandleCameraDialogClose={handleCameraPreviewClose}
                        onHandleCapturedImage={handleCapturedImage}
                    />
                </Dialog>
            </div>
        </div>
    );
};

export default ItemsTable;
