import { useState, useEffect } from 'react';
import {
    React,
    useDispatch,
    Button,
    postData,
    getData,
    ToastNotification,
    PanelContent,
    getItem,
} from "../../../components";
import PhoneInput from "../../../components/PhoneInput";
import DateInput from "../../../components/DateInput";
import TextInput from '../../../components/TextInput';
import { withRouter } from "react-router-dom";
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import CustomerTable from "./table";
const CustomerList = (props) => {
    const dispatch = useDispatch();
    const [customers, setCustomers] = useState([])
    const [shop, setShop] = useState()
    const [shops, setShops] = useState([])
    const [prefectures, setPrefectures] = useState([])
    const [cities, setCities] = useState([])
    const [filteredCities, setFilteredCities] = useState([])
    const [nameKana, setNameKana] = useState()
    const [phoneNumber, setPhoneNumber] = useState()
    const [address1, setAddress1] = useState()
    const [address2, setAddress2] = useState()
    const [birthday, setBirthday] = useState()

    useEffect(() => {
        if (getItem("userdata").length === 0) {
            props.history.push("/");
        }
    }, [dispatch]);

    useEffect(() => {
        // API Call
        const fetchData = async () => {
            let result = await getData("datas")
            if (result.status === 200) {
                let data = result.data;
                setPrefectures(data.prefectures);
                setCities(data.cities);
                setShops(data.shops);
            }
        };
        fetchData();
    }, []);

    useEffect(() => {
        let newCities = [];
        cities.forEach(element => {
            if (element.prefecture_id == address1) {
                newCities.push(element);
            }
        });
        setFilteredCities(newCities);
    }, [address1, cities]);

    const handleCustomerEdit = async (data) => {
        props.history.push("/customer/edit", { pathname: "/customer/edit", id: data.id });
    };

    const handleSearchClick = async (e) => {
        const formData = new FormData();
        console.log(shop);

        if (shop !== undefined) {
            formData.append("shop_id", shop);
        }
        if (nameKana !== undefined) {
            formData.append("name_kana", nameKana);
        }
        if (phoneNumber !== undefined) {
            formData.append("phone_number", phoneNumber);
        }
        if (address1 !== undefined) {
            formData.append("address1", address1);
        }
        if (address2 !== undefined) {
            formData.append("address2", address2);
        }
        if (birthday !== undefined) {
            formData.append("birthday", birthday);
        }
        let result = await postData("customer/list", formData)
        setCustomers([])
        if (result.status === 200) {
            let data = result.data;
            setCustomers(data.customers);
        }
    }

    const handleChangeAddress1 = (e) => {
        let selectedPrefectureId = e.target.value;
        setAddress1(selectedPrefectureId);
        let newCities = [];
        cities.forEach(element => {
            if (element.prefecture_id == selectedPrefectureId) {
                newCities.push(element);
            }
        });
        setFilteredCities(newCities);
    }

    const handleChangeAddress2 = (e) => {
        let selectedCityId = e.target.value;
        setAddress2(selectedCityId);
    }

    const handleRegisterClick = async (e) => {
        props.history.push("/customer/register");
    }

    return (
        <PanelContent title="">
            <div className="page-title">顧客一覧</div>
            <div className="search-container">
                <div className='screen-div3 search-container'>
                    <div className='screen-div2'>
                        <div>
                            <div className="input-label">店舗名</div>
                            <div className="input-value">
                                <Select
                                    onChange={(e) => setShop(e.target.value)}
                                    displayEmpty
                                    className="shop-select"
                                    size='small'
                                >
                                    <MenuItem disabled value="">
                                        <span className="text-gray-500">店舗名</span>
                                    </MenuItem>
                                    {shops.map(item => (
                                        <MenuItem key={item.id} value={item.id}>{item.name}</MenuItem>
                                    ))}
                                </Select>
                            </div>
                        </div>
                    </div>
                    <div className='screen-div2'>
                        <div>
                            <div className="input-label text-left">氏名(カナ)</div>
                            <div className="">
                                <TextInput
                                    type="text"
                                    className="mt-1 block w-full w-100-pro"
                                    onChange={(e) => setNameKana(e.target.value)}
                                    required
                                    placeholder="氏名(カナ)"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='screen-div3 search-container'>
                    <div className='screen-div2'>
                        <div>
                            <div className="input-label text-left">電話番号</div>
                            <div className="">
                                <PhoneInput
                                    id="phone"
                                    name="phone"
                                    className="w-100-pro"
                                    placeholder='電話番号'
                                    onChange={(e) => setPhoneNumber(e.target.value)}
                                />
                            </div>
                        </div>
                    </div>
                    <div className='screen-div2'>
                        <div className='flex-left'>
                            <div style={{ width: "50%" }}>
                                <div className="input-label">都道府県</div>
                                <div className="input-value">
                                    <Select
                                        onChange={handleChangeAddress1}
                                        className="shop-select"
                                        size='small'
                                    >
                                        <MenuItem disabled value="">
                                            <span className="text-gray-500">都道府県</span>
                                        </MenuItem>
                                        {prefectures.map((item, key) => (
                                            <MenuItem value={item.id} key={key}>{item.name}</MenuItem>
                                        ))}
                                    </Select>
                                </div>
                            </div>
                            <div style={{ width: "50%" }}>
                                <div className="input-label">市町村</div>
                                <div className="input-value">
                                    <Select
                                        onChange={handleChangeAddress2}
                                        className="shop-select"
                                        size='small'
                                    >
                                        {filteredCities.map((item, key) => (
                                            <MenuItem value={item.id} key={key}>{item.name}</MenuItem>
                                        ))}
                                    </Select>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='screen-div3 search-container'>
                    <div className='screen-div2'>
                        <div>
                            <div className="input-label text-left">生年月日</div>
                            <div className="">
                                <DateInput
                                    className="shop-select w-100-pro"
                                    onChange={(e) => setBirthday(e)}
                                />
                            </div>
                        </div>
                    </div>
                    <div className='screen-div2 flex-center'>
                        <div className='pt-30'>この条件で</div>
                        <div className='mt-35 flex-center'>
                            <Button
                                loading
                                textLoading="Waiting"
                                type="submit"
                                color="secondary"
                                title="検索"
                                className="w-100"
                                onClick={handleSearchClick}
                            />
                            <Button
                                loading
                                textLoading="Waiting"
                                type="submit"
                                color="primary"
                                title="新規登録"
                                onClick={handleRegisterClick}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <CustomerTable
                    dataSource={customers}
                    onHandleEdit={handleCustomerEdit}
                />
            </div>
        </PanelContent>
    );
};

export default withRouter(CustomerList);
