import React, { useEffect, useState, useMemo } from 'react';
import { Table, Modal, Checkbox, Button, List } from 'antd';
import { Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import DateInput from "../../../../components/DateInput";
import {
    TableMaster,
    Row,
    Col,
} from "../../../../components";
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import moment from 'moment';
moment.locale("ja");
import { EditOutlined } from '@ant-design/icons';

const FilterableTable = (props) => {
    const data = [
        { id: 1, no: '001', shop_name: 'Store A', カテゴリーNo: 'C1', 氏名: 'John Doe', カタカナ名: 'ジョン・ドウ', 電話番号: '090-1234-5678', 生年月日: '1990-01-01', 住所: 'Tokyo', 職業: 'Engineer', 本人確認書類: 'Passport', 特記事項: 'N/A' },
        { id: 2, no: '002', shop_name: 'Store B', カテゴリーNo: 'C2', 氏名: 'Jane Smith', カタカナ名: 'ジェーン・スミス', 電話番号: '090-2345-6789', 生年月日: '1985-02-15', 住所: 'Osaka', 職業: 'Teacher', 本人確認書類: 'ID', 特記事項: 'Urgent' },
    ];

    const [filters, setFilters] = useState({
        no: [],
        shop_name: [],
        カテゴリーNo: [],
        氏名: [],
        カタカナ名: [],
        電話番号: [],
        生年月日: [],
        住所: [],
        職業: [],
        本人確認書類: [],
        特記事項: [],
    });

    const [visible, setVisible] = useState(false);
    const [currentColumn, setCurrentColumn] = useState();
    const [currentColumnName, setCurrentColumnName] = useState();
    const [dateFilterType, setDateFilterType] = useState(null);
    const [selectedYear, setSelectedYear] = useState(0);
    const [selectedMonth, setSelectedMonth] = useState(0);
    const [selectedDay, setSelectedDay] = useState(0);
    const [selectedStartDate, setSelectedStartDate] = useState(null);
    const [selectedEndDate, setSelectedEndDate] = useState(null);
    const [dateFilters, setDateFilters] = useState({});
    const [open, setOpen] = useState(false);

    const currentYear = new Date().getFullYear()
    const years = Array.from({ length: 101 }, (_, i) => currentYear - i)
    const months = Array.from({ length: 12 }, (_, i) => i + 1)
    const dates = Array.from({ length: new Date(selectedYear, selectedMonth, 0).getDate() || 31 }, (_, i) => i + 1)

    useEffect(() => {
        handleClearAllFilters();
    }, []);

    const showFilterModal = (column) => {
        setCurrentColumnName(column.name);
        setCurrentColumn(column.dataIndex);
        if (column.dataIndex == '生年月日') {
            setOpen(true);
        } else {
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
        let items = []
        data.filter((item) => {
            // Apply filters for each column
            for (const column of Object.keys(filters)) {
                if (column == currentColumn) {
                    items.push(item[currentColumn])
                }
            }
        });
        setFilters((prev) => ({
            ...prev,
            [currentColumn]: items // Mark 'All' as selected
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
            let items = []
            data.filter((item) => {
                // Apply filters for each column
                for (const column of Object.keys(filters)) {
                    if (column == _column) {
                        items.push(item[_column])
                    }
                }
            });
            setFilters((prev) => ({
                ...prev,
                [_column]: items // Mark 'All' as selected
            }));
        }
        setDateFilterType(null)
        setDateFilters({});
        setSelectedStartDate(null);
        setSelectedEndDate(null);
    };

    const columns = [
        { name: '買取計算書No', title: <Button type="link">買取計算書No</Button>, dataIndex: 'no' },
        { name: '店舗名', title: <Button type="link">店舗名</Button>, dataIndex: 'shop_name' },
        { name: 'カテゴリーNo', title: <Button type="link">カテゴリーNo</Button>, dataIndex: 'カテゴリーNo' },
        { name: '氏名', title: <Button type="link">氏名</Button>, dataIndex: '氏名' },
        { name: 'カタカナ名', title: <Button type="link">カタカナ名</Button>, dataIndex: 'カタカナ名' },
        { name: '電話番号', title: <Button type="link">電話番号</Button>, dataIndex: '電話番号' },
        { name: '生年月日', title: <Button type="link">生年月日</Button>, dataIndex: '生年月日' },
        { name: '住所', title: <Button type="link">住所</Button>, dataIndex: '住所' },
        { name: '職業', title: <Button type="link">職業</Button>, dataIndex: '職業' },
        { name: '本人確認書類', title: <Button type="link">本人確認書類</Button>, dataIndex: '本人確認書類', width: 100 },
        { name: '特記事項', title: <Button type="link">特記事項</Button>, dataIndex: '特記事項', className: "customer-note" },
        {
            name: "",
            title: "",
            dataIndex: "action",
            align: "center",
            render: (cell, row) => {
                return (
                    <Row className={`text-center`}>
                        <Col size="12" className="mr-3 text-center">
                            <Button
                                type="button"
                                onClick={() => handleClick(row)}
                                color="info"
                                icon={<EditOutlined />}
                            />
                        </Col>
                    </Row>
                );
            }
        },
    ];

    const handleClick = (data) => {
        props.onHandleEdit(data);
    };

    const filteredData = useMemo(() => {
        return data.filter((item) => {
            return Object.keys(filters).every((key) => {
                console.log(key);
                for (const column of Object.keys(filters)) {
                    if (filters[column].length && !filters[column].includes(item[column])) {
                        return false;
                    }
                }
                const filterValue = filters[key];
                if (key === '生年月日' && filterValue) {
                    const date = moment(item[key]);
                    switch (dateFilterType) {
                        case '年':
                            return date.format('YYYY') == years[selectedYear];
                        case '月':
                            return date.format('MM') == months[selectedMonth];
                        case '日':
                            return date.format('DD') == dates[selectedDay];
                        case '期間':
                            return (
                                (selectedStartDate && selectedEndDate) && date.isBetween(moment(selectedStartDate), moment(selectedEndDate))
                            );
                        default:
                            return true;
                    }
                }
                return true;
            });
        });
    }, [filters, data, dateFilterType, selectedStartDate, selectedEndDate]);

    return (
        <div>
            <Button onClick={handleClearAllFilters}>フィルター全解除</Button>
            <TableMaster
                columns={columns.map((col) => ({
                    ...col,
                    onHeaderCell: () => ({
                        onClick: () => showFilterModal(col),
                    }),
                }))}
                dataSource={filteredData}
                rowKey="id"
                disabledSearch="true"
                tableLayout="fixed"
                width={1024}
                pageSize={15}
            />

            {/* Filter Modal */}
            {currentColumn == "生年月日" ? (
                <Dialog open={open} onClose={handleCloseDateFilterDialog}>
                    <DialogTitle>生年月日 フィルタ</DialogTitle>
                    <DialogContent>
                        <Button onClick={handleDateDeselectAll}>全選択解除</Button>
                        <div>
                            <Checkbox
                                value="年"
                                checked={dateFilterType === '年'}
                                onChange={() => setDateFilterType('年')}
                            >
                                年
                            </Checkbox>
                            <Checkbox
                                value="月"
                                checked={dateFilterType === '月'}
                                onChange={() => setDateFilterType('月')}
                            >
                                月
                            </Checkbox>
                            <Checkbox
                                value="日"
                                checked={dateFilterType === '日'}
                                onChange={() => setDateFilterType('日')}
                            >
                                日
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
                                    <div>
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
                                    <div>
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
                    <DialogTitle>{currentColumnName} フィルタ</DialogTitle>
                    <DialogContent>
                        <Button onClick={handleSelectAll}>全選択</Button>
                        <Button onClick={handleDeselectAll}>全選択解除</Button>
                        <List
                            style={{ maxHeight: 200, overflowY: 'scroll' }}
                            dataSource={Array.from(new Set(data.map((item) => item[currentColumn])))}
                            renderItem={(item) => (
                                <List.Item>
                                    <Checkbox
                                        checked={filters[currentColumn]?.includes(item)}
                                        onChange={() => handleCheckboxChange(item)}
                                    >
                                        {item}
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
        </div>
    );
};

export default FilterableTable;
