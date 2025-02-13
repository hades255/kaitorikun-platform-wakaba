import { useContext, useState, useEffect, useRef } from 'react';
import {
    React,
    Button,
    TableMaster,
    postData,
} from "../../../../components";
import TextInput from '../../../../components/TextInput';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { Table, Checkbox } from "antd";

let AddItemsDialog = (props) => {
    const [itemName, setItemName] = useState();
    const [filteredCategory2, setFilteredCategory2] = useState([])
    const [filteredCategory3, setFilteredCategory3] = useState([])
    const [filteredCategory4, setFilteredCategory4] = useState([])
    const [filteredCategory5, setFilteredCategory5] = useState([])
    const [filteredCategory6, setFilteredCategory6] = useState([])
    const [categoryId1, setCategoryId1] = useState()
    const [categoryId2, setCategoryId2] = useState()
    const [categoryId3, setCategoryId3] = useState()
    const [categoryId4, setCategoryId4] = useState()
    const [categoryId5, setCategoryId5] = useState()
    const [categoryId6, setCategoryId6] = useState()
    const [searchedItems, setSearchedItems] = useState([])

    const purchaseId = props.purchaseId;
    const category1 = props.categories1;
    const category2 = props.categories2;
    const category3 = props.categories3;
    const category4 = props.categories4
    const category5 = props.categories5;
    const category6 = props.categories6;

    const columns = [
        {
            title: "商品名",
            dataIndex: "name",
            key: "name",
        },
        {
            title: 'カテゴリー1',
            dataIndex: "category1",
            key: "category1",
        },
        {
            title: 'カテゴリー2',
            dataIndex: "category2",
            key: "category2",
        },
        {
            title: 'カテゴリー3',
            dataIndex: "category3",
            key: "category3",
        },
        {
            title: 'カテゴリー4',
            dataIndex: "category4",
            key: "category4",
        },
        {
            title: 'カテゴリー5',
            dataIndex: "category5",
            key: "category5",
        },
        {
            title: 'カテゴリー6',
            dataIndex: "category6",
            key: "category6",
        },
        {
            title: 'ランク',
            dataIndex: "flag",
            key: "flag",
        },
        {
            title: '付属品',
            dataIndex: "accessories",
            key: "accessories",
        },
        {
            title: '動作',
            dataIndex: "operation",
            key: "operation",
        },
        {
            title: '機械',
            dataIndex: "machine",
            key: "machine",
        },
        {
            title: 'サイズ',
            dataIndex: "size",
            key: "size",
        },
        {
            title: 'ヨレ',
            dataIndex: "twist",
            key: "twist",
        },
        {
            title: 'オーバーホール',
            dataIndex: "overhaul",
            key: "overhaul",
        },
    ];

    const handleChangeCategoryChange = (e) => {
        console.log(e.target.value);
        let selectedCategoryId = e.target.value;
        setCategoryId1(selectedCategoryId);
        setFilteredCategory2([]);
        setCategoryId2(0);
        let newCategory2 = [];
        category2.forEach(element => {
            if (element.parent_id == selectedCategoryId) {
                newCategory2.push(element);
            }
        });
        setFilteredCategory2(newCategory2);
        console.log(filteredCategory2);

        setFilteredCategory3([]);
        setFilteredCategory4([]);
        setFilteredCategory5([]);
        setFilteredCategory6([]);
        setCategoryId3(0);
        setCategoryId4(0);
        setCategoryId5(0);
        setCategoryId6(0);
    };

    const handleChangeSubCategory2Change = (e) => {
        let selectedCategoryId = e.target.value;
        setCategoryId2(selectedCategoryId);
        let cat2Obj = category2.find(item => item.id === selectedCategoryId);
        setFilteredCategory3([]);
        setCategoryId3(0);
        let newCategory3 = [];
        category3.forEach(element => {
            if (element.parent_id == cat2Obj.child_id) {
                newCategory3.push(element);
            }
        });
        setFilteredCategory3(newCategory3);
        setFilteredCategory4([]);
        setFilteredCategory5([]);
        setFilteredCategory6([]);
        setCategoryId4(0);
        setCategoryId5(0);
        setCategoryId6(0);
    };

    const handleChangeSubCategory3Change = (e) => {
        let selectedCategoryId = e.target.value;
        setCategoryId3(selectedCategoryId);
        let cat3Obj = category3.find(item => item.id === selectedCategoryId);
        setFilteredCategory4([]);
        setCategoryId4(0);
        let newCategory4 = [];
        category4.forEach(element => {
            if (element.parent_id == cat3Obj.child_id) {
                newCategory4.push(element);
            }
        });
        setFilteredCategory4(newCategory4);
        setFilteredCategory5([]);
        setFilteredCategory6([]);
        setCategoryId5(0);
        setCategoryId6(0);
    };

    const handleChangeSubCategory4Change = (e) => {
        let selectedCategoryId = e.target.value;
        setCategoryId4(selectedCategoryId);
        let cat4Obj = category2.find(item => item.id === selectedCategoryId);
        setFilteredCategory5([]);
        setCategoryId5(0);
        let newCategory5 = [];
        category5.forEach(element => {
            if (element.parent_id == cat4Obj.child_id) {
                newCategory5.push(element);
            }
        });
        setFilteredCategory5(newCategory5);
        setFilteredCategory6([]);
        setCategoryId6(0);
    };

    const handleChangeSubCategory5Change = (e) => {
        let selectedCategoryId = e.target.value;
        setCategoryId5(selectedCategoryId);
        let cat5Obj = category5.find(item => item.id === selectedCategoryId);
        let newCategory6 = [];
        category5.forEach(element => {
            if (element.parent_id == cat5Obj.child_id) {
                newCategory6.push(element);
            }
        });
        setFilteredCategory6(newCategory6);
    };

    const handleChangeSubCategory6Change = (e) => {
        let selectedCategoryId = e.target.value;
        setCategoryId6(selectedCategoryId);
    };

    const handleItemsSearchClick = async () => {
        // check validate
        if (itemName === undefined) {
            alert("商品名は必須です。");
            return;
        }
        if (categoryId1 === undefined) {
            alert("カテゴリー1は必須です。");
            return;
        }
        const formData = new FormData();
        formData.append("item_name", itemName);
        formData.append("category1", categoryId1);
        formData.append("category2", categoryId2 !== undefined ? categoryId2 : "0");
        formData.append("category3", categoryId3 !== undefined ? categoryId3 : "0");
        formData.append("category4", categoryId4 !== undefined ? categoryId4 : "0");
        formData.append("category5", categoryId5 !== undefined ? categoryId5 : "0");
        formData.append("category6", categoryId6 !== undefined ? categoryId6 : "0");
        let result = await postData("purchase/search/items", formData)
        if (result.status === 200) {
            let data = result.data;
            console.log(data);
            setSearchedItems(data.items);
        }
    }

    const handleAddItemsClick = async () => {
        // check validate
        const selectedItems = getSelectedItems()
        if (selectedItems.length <= 0) {
            alert("現在、選択されている商品はありません。");
            return;
        }
        const formData = new FormData();
        formData.append("purchase_id", purchaseId);
        selectedItems.forEach(item => formData.append("items[]", JSON.stringify(item)));
        let result = await postData("purchase/item/init-register", formData)
        if (result.status === 200) {
            let data = result.data;
            console.log(data);

            let list = []
            let ind = 0
            data.items.forEach(item => {
                item.selected = false
                item.name = selectedItems[ind].name
                item.item_no = item.id.toString().padStart(4, '0')
                item.images = 0
                item.image_files = []
                item.live_deadline_date = ""
                item.category1 = selectedItems[ind].category1
                item.category2 = selectedItems[ind].category2
                item.category3 = selectedItems[ind].category3
                item.category4 = selectedItems[ind].category4
                item.category5 = selectedItems[ind].category5
                item.category6 = selectedItems[ind].category6
                list.push(item)
                ind++;
            });
            console.log(list);
            props.onHandleAddItems(list);
        } else {
            alert(result.data.message);
        }
    };

    const getSelectedItems = () => {
        let list = Array()
        searchedItems.forEach(item => {
            if (item.selected == true) {
                list.push(item)
            }
        });
        console.log(list);
        
        return list;
    }

    const handleCloseClick = () => {
        props.onHandleAddItemDialogClose();
    };
    const rowSelection = {
        onChange: (selectedKeys, selectedRecords) => {
            console.log("🔹 選択されたキー:", selectedKeys);
            console.log("🔹 選択された行:", selectedRecords);
            setSearchedItems((prevData) =>
                prevData.map((row) => ({ ...row, selected: false }))
            );
            selectedKeys.forEach(id => {
                setSearchedItems((prevData) =>
                    prevData.map((row) => (row.id === id ? { ...row, selected: true } : row))
                );
            });
        }
    };

    const handleClick = (data) => {
        props.onHandleEdit(data);
    };
    return (
        <div className='add-items-container'>
            <label className='dialog-title'>商品追加</label>
            <div className='purchase-register-container'>
                <div className='screen-div2 purchase-register-container'>
                    <div className='screen-div2'>
                        <div className="mt-10">
                            <div className="input-label">商品名</div>
                            <div className="input-value">
                                <TextInput
                                    type="text"
                                    name="item_name"
                                    className="mt-1 block w-full w-100-pro"
                                    onChange={(e) => setItemName(e.target.value)}
                                    required
                                    placeholder="商品名"
                                />
                            </div>
                        </div>
                    </div>
                    <div className='screen-div2'>
                        <div className="mt-10">
                            <div className="input-label">カテゴリー1</div>
                            <div className="input-value">
                                <Select
                                    onChange={handleChangeCategoryChange}
                                    className="shop-select"
                                    size='small'
                                >
                                    {category1.map((item, key) => (
                                        <MenuItem value={item.id} key={key}>{item.name}</MenuItem>
                                    ))}
                                </Select>
                            </div>
                        </div>
                        <div className="mt-10">
                            <div className="input-label">カテゴリー2</div>
                            <div className="input-value">
                                <Select
                                    onChange={(e) => handleChangeSubCategory2Change(e)}
                                    className="shop-select"
                                    size='small'
                                >
                                    {filteredCategory2.map((item, key) => (
                                        <MenuItem value={item.id} key={key}>{item.name}</MenuItem>
                                    ))}
                                </Select>
                            </div>
                        </div>
                        <div className="mt-10">
                            <div className="input-label">カテゴリー3</div>
                            <div className="input-value">
                                <Select
                                    onChange={(e) => handleChangeSubCategory3Change(e)}
                                    className="shop-select"
                                    size='small'
                                >
                                    {filteredCategory3.map((item, key) => (
                                        <MenuItem value={item.id} key={key}>{item.name}</MenuItem>
                                    ))}
                                </Select>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='screen-div2 purchase-register-container'>
                    <div className='screen-div2'>
                        <div className="mt-10">
                            <div className="input-label">カテゴリー4</div>
                            <div className="input-value">
                                <Select
                                    onChange={(e) => handleChangeSubCategory4Change(e)}
                                    className="shop-select"
                                    size='small'
                                >
                                    {filteredCategory4.map((item, key) => (
                                        <MenuItem value={item.id} key={key}>{item.name}</MenuItem>
                                    ))}
                                </Select>
                            </div>
                        </div>
                        <div className="mt-10">
                            <div className="input-label">カテゴリー5</div>
                            <div className="input-value">
                                <Select
                                    onChange={(e) => handleChangeSubCategory5Change(e)}
                                    className="shop-select"
                                    size='small'
                                >
                                    {filteredCategory5.map((item, key) => (
                                        <MenuItem value={item.id} key={key}>{item.name}</MenuItem>
                                    ))}
                                </Select>
                            </div>
                        </div>
                        <div className="mt-10">
                            <div className="input-label">カテゴリー6</div>
                            <div className="input-value">
                                <Select
                                    onChange={(e) => handleChangeSubCategory6Change(e)}
                                    className="shop-select"
                                    size='small'
                                >
                                    {filteredCategory6.map((item, key) => (
                                        <MenuItem value={item.id} key={key}>{item.name}</MenuItem>
                                    ))}
                                </Select>
                            </div>
                        </div>
                    </div>
                    <div className='screen-div2 add-items-btns'>
                        <div className="mt-10">
                            <Button
                                loading
                                textLoading="Waiting"
                                type="submit"
                                color="outline-primary"
                                title="検索"
                                className="w-100-pro"
                                onClick={handleItemsSearchClick}
                            />
                        </div>
                        <div className="mt-10">
                            <Button
                                loading
                                textLoading="Waiting"
                                type="submit"
                                color="info"
                                title="商品追加"
                                className="w-100-pro"
                                onClick={handleAddItemsClick}
                            />
                        </div>
                        <div className="mt-10">
                            <Button
                                loading
                                textLoading="Waiting"
                                type="submit"
                                color="outline-secondary"
                                title="閉じる"
                                className="w-100-pro"
                                onClick={handleCloseClick}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <TableMaster
                disabledSearch="true"
                columns={columns}
                dataSource={searchedItems}
                scrollX={true}
                pageSize={15}
                rowSelection={rowSelection}
            />

        </div>
    );
};
export default AddItemsDialog;
