import { useState, useEffect } from 'react';
import {
    React,
    useDispatch,
    Button,
    postData,
    ToastNotification,
    PanelContent,
    getItem,
} from "../../../components";
import PhoneInput from "../../../components/PhoneInput";
import DateInput from "../../../components/DateInput";
import TextInput from '../../../components/TextInput';
import { withRouter } from "react-router-dom";
import CustomerTable from "./table";
const CustomerList = (props) => {
    const dispatch = useDispatch();
    const [customers, setCustomers] = useState([])
    const [shop, setShop] = useState()
    const [nameKana, setNameKana] = useState()
    const [phoneNumber, setPhoneNumber] = useState()
    const [address, setAddress] = useState()
    const [birthday, setBirthday] = useState()

    useEffect(() => {
        if (getItem("userdata").length === 0) {
            props.history.push("/");
        }
    }, [dispatch]);

    const handleCustomerEdit = async (data) => {
        // props.history.push(`/customer/edit/${data.id}`);
        props.history.push("/customer/edit", { pathname: "/customer/edit", id: data.id });
    };

    const handleSearchClick = async (e) => {
        const formData = new FormData();
        formData.append("shop_name", shop !== undefined ? shop : "");
        formData.append("name_kana", nameKana !== undefined ? nameKana : "");
        formData.append("phone_number", phoneNumber !== undefined ? phoneNumber : "");
        formData.append("address", address !== undefined ? address : "");
        formData.append("birthday", birthday !== undefined ? birthday : "");
        let result = await postData("customer/list", formData)
        if (result.status === 200) {
            let data = result.data;
            setCustomers(data.customers);
        }
    }

    const handleRegisterClick = async (e) => {
        props.history.push("/customer/register");
    }

    return (
        <PanelContent title="">
            <div className="page-title">顧客一覧</div>
            <div className="search-container">
                <div className="mt-10">
                    <div className="input-label text-left">店舗名</div>
                    <div className="">
                        <TextInput
                            type="text"
                            className="mt-1 block w-full"
                            onChange={(e) => setShop(e.target.value)}
                            required
                            placeholder="店舗名"
                        />
                    </div>
                </div>
                <div className="mt-10">
                    <div className="input-label text-left">氏名(カナ)</div>
                    <div className="">
                        <TextInput
                            type="text"
                            className="mt-1 block w-full"
                            onChange={(e) => setNameKana(e.target.value)}
                            required
                            placeholder="氏名(カナ)"
                        />
                    </div>
                </div>
                <div className="mt-10">
                    <div className="input-label text-left">電話番号</div>
                    <div className="">
                        <PhoneInput
                            id="phone"
                            name="phone"
                            placeholder='電話番号'
                            onChange={(e) => setPhoneNumber(e.target.value)}
                        />
                    </div>
                </div>
                <div className="mt-10">
                    <div className="input-label text-left">住所</div>
                    <div className="">
                        <TextInput
                            type="text"
                            className="mt-1 block w-full"
                            onChange={(e) => setAddress(e.target.value)}
                            required
                            placeholder="住所"
                        />
                    </div>
                </div>
                <div className="mt-10">
                    <div className="input-label text-left">生年月日</div>
                    <div className="">
                        <DateInput
                            className="shop-select w-100"
                            onChange={(e) => setBirthday(e)}
                        />
                    </div>
                </div>
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
                        title="新規顧客登録"
                        className="w-100"
                        onClick={handleRegisterClick}
                    />
                </div>
            </div>
            <CustomerTable
                dataSource={customers}
                onHandleEdit={handleCustomerEdit}
            />
        </PanelContent>
    );
};

export default withRouter(CustomerList);
