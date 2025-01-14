import { useState, useEffect } from 'react';
import {
    React,
    Button,
    multiPostData,
    previewThumbnail,
    getData,
    ToastNotification,
    useDispatch
} from "../../../../components";
import PhoneInput from "../../../../components/PhoneInput";
import DateInput from "../../../../components/DateInput";
import TextInput from '../../../../components/TextInput';
import InputLabel from '../../../../components/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import AddIcon from '@mui/icons-material/Add';
import ImageIcon from '@mui/icons-material/Image';
import Checkbox from '@mui/material/Checkbox';
import { Dialog, DialogTitle, DialogContent } from "@mui/material";
import { pdfjs, Document, Page } from "react-pdf";
import ZipcodeInput from "../../../../components/ZipcodeInput";
import { actionTheme, utilityAction } from "../../../../reduxStore";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

let FormStaffRegister = (props) => {
    const terms = "テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト テキストテキストテキストテキストテキストテキストテキストテキストテキスト テキストテキストテキストテキスト テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト テキストテキストテキスト"
    const [staffId, setStaffId] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [shop, setShop] = useState()
    const [type, setType] = useState()
    const [name, setName] = useState()
    const [nameKana, setNameKana] = useState()
    const [phoneNumber, setPhoneNumber] = useState()
    const [birthday, setBirthday] = useState()
    const [gender, setGender] = useState()
    const [zipCode, setZipCode] = useState()
    const [address1, setAddress1] = useState()
    const [address2, setAddress2] = useState()
    const [address3, setAddress3] = useState()
    const [identificationId1, setIdentificationId1] = useState()
    const [identificationType1, setIdentificationType1] = useState()
    const [identificationFile1, setIdentificationFile1] = useState()
    const [isVisible, setIsVisible] = useState(false);
    const [identificationId2, setIdentificationId2] = useState()
    const [identificationType2, setIdentificationType2] = useState()
    const [identificationFile2, setIdentificationFile2] = useState()
    const [historyType, setHistoryType] = useState()
    const [historyFile, setHistoryFile] = useState()
    const [workingHistoryType, setWorkingHistoryType] = useState()
    const [workingHistoryFile, setWorkingHistoryFile] = useState()
    const [contractType, setContractType] = useState()
    const [contractFile, setContractFile] = useState()
    const [guarantorId, setGuarantorId] = useState()

    const [shops, setShops] = useState([])
    const [prefectures, setPrefectures] = useState([])
    const [cities, setCities] = useState([])
    const [filteredCities, setFilteredCities] = useState([])
    const [guarantors, setGuarantors] = useState([])
    const [termAgree, setTermAgree] = useState(false)
    const [docList, setDocList] = useState([])
    const [openImagePreview, setOpenImagePreview] = useState(false)
    const [openPdfPreview, setOpenPdfPreview] = useState(false)
    const [previewImage, setPreviewImage] = useState("")
    const [previewPdf, setPreviewPdf] = useState("")
    const dispatch = useDispatch();

    useEffect(() => {
        // API Call
        const fetchData = async () => {
            let result = await getData("datas")
            if (result.status === 200) {
                let data = result.data;
                setPrefectures(data.prefectures);
                setCities(data.cities);
                setShops(data.shops);
                setGuarantors(data.guarantors);
            }
        };

        fetchData(); // Execute API call
    }, []); // Empty dependency array means it runs once when mounted

    // useEffect(() => {
    //     setDocList((Array.isArray(verifyDocList) ? verifyDocList : []).map((item) => {
    //         return {
    //             id: item.id,
    //             title: item.vrfd_title,
    //             file: "",
    //             mime: "",
    //             setted: false
    //         }
    //     }));
    // }, [])

    // useEffect(() => {
    //     if (data.address1) {
    //         const munis = municiplist.filter(f => f.mcp_pfl_id == data.address1)
    //         setcities(munis)
    //     }
    // }, [data.address1])

    const handleChangeAddress1 = (e) => {
        console.log(e.target.value);
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
        console.log(e.target.value);

    }

    const handleAddIdentification = () => {
        setIsVisible(true);
        console.log(isVisible);

    }

    const handleShowIdentification = () => {
    }

    const handleFileChange = (e, index) => {
        console.log(index);
        const file = e.target.files[0]
        if (index == 1) {
            setIdentificationType1(file.type);
            setIdentificationFile1(file);
        } else if (index == 2) {
            setIdentificationType2(file.type);
            setIdentificationFile2(file);
        } else if (index == 3) {
            setHistoryType(file.type);
            setHistoryFile(file);
        } else if (index == 4) {
            setWorkingHistoryType(file.type);
            setWorkingHistoryFile(file);
        }
    }

    const handleIdentificationPreview1 = () => {
        if (identificationFile1 === undefined) {
            ToastNotification("error", "本人確認書類ファイルをインポートしてください。");
            return;
        }
        if (identificationType1.includes("image")) {
            handleImagePreview(identificationFile1);
        } else if (identificationType1.includes("pdf")) {
            handlePdfPreview(identificationFile1);
        }
    }

    const handleIdentificationPreview2 = () => {
        if (identificationFile2 === undefined) {
            ToastNotification("error", "本人確認書類ファイルをインポートしてください。");
            return;
        }
        if (identificationType2.includes("image")) {
            handleImagePreview(identificationFile2);
        } else if (identificationType2.includes("pdf")) {
            handlePdfPreview(identificationFile2);
        }
    }

    const handleHistoryPreview = () => {
        if (historyFile === undefined) {
            ToastNotification("error", "履歴書ファイルをインポートしてください。");
            return;
        }
        if (historyType.includes("image")) {
            handleImagePreview(historyFile);
        } else if (historyType.includes("pdf")) {
            handlePdfPreview(historyFile);
        }
    }

    const handleWorkingHistoryPreview = () => {
        if (workingHistoryFile === undefined) {
            ToastNotification("error", "職務経歴書ファイルをインポートしてください。");
            return;
        }
        if (workingHistoryType.includes("image")) {
            handleImagePreview(workingHistoryFile);
        } else if (workingHistoryType.includes("pdf")) {
            handlePdfPreview(workingHistoryFile);
        }
    }

    const handleContractBtn = () => {
    }

    const handleImagePreview = async (file) => {
        setOpenImagePreview(true)
        const previewImage = await previewThumbnail(file)
        setPreviewImage(previewImage)
    }

    const handleImagePreviewClose = () => {
        setOpenImagePreview(false)
        setPreviewImage("")
    }

    const handlePdfPreview = async (file) => {
        setOpenPdfPreview(true)
        const previewPdf = await file
        console.log(URL.createObjectURL(previewPdf));
        
        setPreviewPdf(previewPdf)
    }

    const handlePdfPreviewClose = () => {
        setOpenPdfPreview(false)
        setPreviewPdf("")
    }

    const handleRemoveDoc = (index) => {
        const cloneDocList = [...docList]
        cloneDocList[index]['file'] = ""
        setDocList(cloneDocList)
    }

    const handleZipCode = async (e) => {
        setZipCode(e);
    }

    const handleRegisterClick = async () => {
        // check validate
        if (staffId === undefined) {
            ToastNotification("error", "スタッフIDは必須です。");
            return;
        }
        // if (email === undefined) {
        //     ToastNotification("error", "メールアドレスは必須です。");
        //     return;
        // }
        if (email !== undefined && !email.includes("@")) {
            ToastNotification("error", "メールアドレスの形式が無効です。");
            return;
        }
        if (password === undefined) {
            ToastNotification("error", "パスワードは必須です。");
            return;
        } else if (password.length < 8) {
            ToastNotification("error", "パスワードは8文字以上入力してください。");
            return;
        }
        if (shop === undefined) {
            ToastNotification("error", "店舗名は必須です。");
            return;
        }
        if (type === undefined) {
            ToastNotification("error", "種別は必須です。");
            return;
        }
        if (name === undefined) {
            ToastNotification("error", "お名前は必須です。");
            return;
        }
        if (nameKana === undefined) {
            ToastNotification("error", "カタカナ名は必須です。");
            return;
        }
        if (phoneNumber === undefined) {
            ToastNotification("error", "お電話番号は必須です。");
            return;
        }
        if (birthday === undefined) {
            ToastNotification("error", "生年月日は必須です。");
            return;
        }
        if (gender === undefined) {
            ToastNotification("error", "性別は必須です。");
            return;
        }
        if (zipCode === undefined) {
            ToastNotification("error", "郵便番号は必須です。");
            return;
        }
        if (address1 === undefined) {
            ToastNotification("error", "都道府県は必須です。");
            return;
        }
        if (address2 === undefined) {
            ToastNotification("error", "市町村は必須です。");
            return;
        }
        if (address3 === undefined) {
            ToastNotification("error", "住所詳細は必須です。");
            return;
        }
        let exist = false
        if (identificationId1 !== undefined && identificationType1 !== undefined) {
            exist = true;
        }
        if (identificationId2 !== undefined && identificationType2 !== undefined) {
            exist = true;
        }
        if (!exist) {
            ToastNotification("error", "本人確認書類は必須です。");
            return;
        }
        if (historyType === undefined) {
            ToastNotification("error", "履歴書は必須です。");
            return;
        }
        if (guarantorId === undefined) {
            ToastNotification("error", "連帯保証人は必須です。");
            return;
        }

        if (!termAgree) {
            ToastNotification("error", "スタッフ規約に同意してください。");
            return;
        }

        dispatch(utilityAction.setLoading("content"));
        try {
            const formData = new FormData();
            formData.append("staff_id", staffId);
            if (email !== undefined) {
                formData.append("email", email);
            }
            formData.append("password", password);
            formData.append("shop_id", shop);
            formData.append("user_type", type);
            formData.append("name", name);
            formData.append("name_kana", nameKana);
            formData.append("phone_number", phoneNumber);
            formData.append("birthday", birthday);
            formData.append("gender", gender);
            formData.append("zipcode", zipCode);
            formData.append("address1", address1);
            formData.append("address2", address2);
            formData.append("address3", address3);
            if (identificationId1 !== undefined && identificationType1 !== undefined) {
                formData.append("identification_id1", identificationId1);
                formData.append("identification_type1", identificationType1);
                formData.append("files[]", identificationFile1);
            }
            if (identificationId2 !== undefined && identificationType2 !== undefined) {
                formData.append("identification_id2", identificationId2);
                formData.append("identification_type2", identificationType2);
                formData.append("files[]", identificationFile2);
            }
            if (historyType !== undefined) {
                formData.append("history_type", historyType);
                formData.append("files[]", historyFile);
            }
            if (workingHistoryType !== undefined) {
                formData.append("working_history_type", workingHistoryType);
                formData.append("files[]", workingHistoryFile);
            }
            if (contractType !== undefined) {
                formData.append("contract_type", contractType);
                formData.append("files[]", contractFile);
            }
            formData.append("guarantor_id", guarantorId);
            console.log(formData);

            let feedback = await multiPostData("staff/register", formData)
            if (feedback.status === 200) {
                setTimeout(() => {
                    window.history.back();
                }, 300);
            }
            dispatch(utilityAction.stopLoading());
        } catch (error) {
            console.log(error)
            ToastNotification("error", error?.message);
            dispatch(utilityAction.stopLoading());
        }
    };

    const handleCancelClick = () => {
        window.history.back();
    };

    return (
        <div>
            <div className="row">
                <div className="col-lg-4 mt-10 col-lg-4 mt-10">
                    <div className="flex-center min-w-400">
                        <div className="input-label">スタッフID</div>
                        <div className="input-value">
                            <TextInput
                                id="staff_id"
                                name="staff_id"
                                min="1"
                                max="20"
                                className="mt-1 block w-full"
                                placeholder='スタッフID'
                                isFocused={true}
                                onChange={(e) => setStaffId(e.target.value)}
                            />
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 mt-10 col-lg-4 mt-10">
                    <div className="flex-center min-w-400">
                        <div className="input-label">メールアドレス</div>
                        <div className="input-value">
                            <TextInput
                                id="email"
                                type="email"
                                name="email"
                                className="mt-1 block w-full"
                                autoComplete="email"
                                placeholder="メールアドレス"
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 mt-10 col-lg-4 mt-10">
                    <div className="flex-center min-w-400">
                        <div className="input-label">パスワード</div>
                        <div className="input-value">
                            <TextInput
                                id="password"
                                type="password"
                                name="password"
                                className="mt-1 block w-full"
                                autoComplete="new-password"
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                placeholder="パスワードは8文字以上"
                            />
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 mt-10 col-lg-4 mt-10">
                    <div className="flex-center min-w-400">
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
                <div className="col-lg-4 mt-10 col-lg-4 mt-10">
                    <div className="flex-center min-w-400">
                        <div className="input-label">種別</div>
                        <div className="input-value">
                            <Select
                                onChange={(e) => setType(e.target.value)}
                                displayEmpty
                                className="shop-select"
                                size='small'
                            >
                                <MenuItem disabled value="">
                                    <span className="text-gray-500">種別</span>
                                </MenuItem>
                                <MenuItem value={1}>オーナー</MenuItem>
                                <MenuItem value={2}>マネージャー</MenuItem>
                                <MenuItem value={3}>店長</MenuItem>
                                <MenuItem value={4}>社員</MenuItem>
                                <MenuItem value={5}>アルバイト</MenuItem>
                            </Select>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 mt-10 col-lg-4 mt-10">
                    <div className="flex-center min-w-400">
                        <div className="input-label"></div>
                        <div className="input-value">
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 mt-10 col-lg-4 mt-10">
                    <div className="flex-center min-w-400">
                        <div className="input-label">お名前</div>
                        <div className="input-value">
                            <TextInput
                                id="name"
                                type="text"
                                name="name"
                                className="mt-1 block w-full"
                                onChange={(e) => setName(e.target.value)}
                                required
                                placeholder="お名前"
                            />
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 mt-10 col-lg-4 mt-10">
                    <div className="flex-center min-w-400">
                        <div className="input-label">カタカナ名</div>
                        <div className="input-value">
                            <TextInput
                                id="name_kana"
                                type="text"
                                name="name_kana"
                                className="mt-1 block w-full"
                                onChange={(e) => setNameKana(e.target.value)}
                                required
                                placeholder="カタカナ名"
                            />
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 mt-10 col-lg-4 mt-10">
                    <div className="flex-center min-w-400">
                        <div className="input-label">お電話番号</div>
                        <div className="input-value">
                            <PhoneInput
                                id="phone"
                                name="phone"
                                placeholder='お電話番号'
                                onChange={(e) => setPhoneNumber(e.target.value)}
                            />
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 mt-10 col-lg-4 mt-10">
                    <div className="flex-center min-w-400">
                        <div className="input-label">生年月日</div>
                        <div className="input-value">
                            <DateInput
                                className="shop-select w-100"
                                onChange={(e) => setBirthday(e)}
                            />
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 mt-10 col-lg-4 mt-10">
                    <div className="flex-center min-w-400">
                        <div className="input-label">性別</div>
                        <div className="input-value">
                            <Select
                                onChange={(e) => setGender(e.target.value)}
                                className="shop-select w-100"
                                size='small'
                            >
                                <MenuItem value={1}>男</MenuItem>
                                <MenuItem value={2}>女</MenuItem>
                            </Select>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 mt-10 col-lg-4 mt-10">
                    <div className="flex-center min-w-400">
                        <div className="input-label">郵便番号</div>
                        <div className="input-value">
                            <ZipcodeInput
                                onChange={(e) => handleZipCode(e)}
                            />
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 mt-10 col-lg-4 mt-10">
                    <div className="flex-center min-w-400">
                        <div className="input-label">都道府県</div>
                        <div className="input-value">
                            <Select
                                onChange={handleChangeAddress1}
                                className="shop-select w-150"
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
                </div>
                <div className="col-lg-4 mt-10 col-lg-4 mt-10">
                    <div className="flex-center min-w-400">
                        <div className="input-label">市町村</div>
                        <div className="input-value">
                            <Select
                                onChange={handleChangeAddress2}
                                className="shop-select w-150"
                                size='small'
                            >
                                {filteredCities.map((item, key) => (
                                    <MenuItem value={item.id} key={key}>{item.name}</MenuItem>
                                ))}
                            </Select>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 mt-10 col-lg-4 mt-10">
                    <div className="flex-center min-w-400">
                        <div className="input-label">住所詳細</div>
                        <div className="input-value">
                            <TextInput
                                id="address3"
                                type="text"
                                name="address3"
                                className="mt-1 block w-full"
                                onChange={(e) => setAddress3(e.target.value)}
                                required
                                placeholder="住所詳細"
                            />
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 mt-10 col-lg-4 mt-10">
                    <div className="flex-base min-w-400">
                        <div className="input-label">本人確認書類</div>
                        <div className="input-value">
                            <div className='flex-left'>
                                <div>
                                    <div><AddIcon className='add-icon' onClick={handleAddIdentification} /></div>
                                </div>
                                <div>
                                    <div className='flex-center'>
                                        <Select
                                            onChange={(e) => setIdentificationId1(e.target.value)}
                                            className="shop-select w-150"
                                            size='small'
                                        >
                                            <MenuItem value={1}>マイナンバー</MenuItem>
                                            <MenuItem value={2}>運転免許証</MenuItem>
                                            <MenuItem value={3}>健康保険証</MenuItem>
                                            <MenuItem value={4}>パスポート</MenuItem>
                                        </Select>
                                        <label htmlFor={`doc_1`} className='flex w-44 shrink-0 bg-sky-600 p-2 rounded flex gap-2 justify-center items-center text-white text-md cursor-pointer hover:opacity-75'>
                                            <input type="file" id={`doc_1`} className='hidden' onChange={(e) => handleFileChange(e, 1)} accept='image/*, .pdf' />
                                            <ImageIcon className='file-icon' />
                                        </label>
                                        <div className="flex-center image-show-btn" onClick={handleIdentificationPreview1}>画像と情報表示</div>
                                    </div>
                                    {isVisible && (
                                        <div className='flex-center'>
                                            <Select
                                                onChange={(e) => setIdentificationId2(e.target.value)}
                                                className="shop-select w-150"
                                                size='small'
                                            >
                                                <MenuItem value={1}>マイナンバー</MenuItem>
                                                <MenuItem value={2}>運転免許証</MenuItem>
                                                <MenuItem value={3}>健康保険証</MenuItem>
                                                <MenuItem value={4}>パスポート</MenuItem>
                                            </Select>
                                            <label htmlFor={`doc_2`} className='flex w-44 shrink-0 bg-sky-600 p-2 rounded flex gap-2 justify-center items-center text-white text-md cursor-pointer hover:opacity-75'>
                                                <input type="file" id={`doc_2`} className='hidden' onChange={(e) => handleFileChange(e, 2)} accept='image/*, .pdf' />
                                                <ImageIcon className='file-icon' />
                                            </label>
                                            <div className="flex-center image-show-btn" onClick={handleIdentificationPreview2}>画像と情報表示</div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 mt-10 col-lg-4 mt-10">
                    <div className="flex-center min-w-400">
                        <div className="input-label">書類</div>
                        <div className="input-value">
                            <div className='flex-left'>
                                <div className='flex-center'>
                                    <label htmlFor={`doc_3`} className='flex w-44 shrink-0 bg-sky-600 p-2 rounded flex gap-2 justify-center items-center text-white text-md cursor-pointer hover:opacity-75'>
                                        <input type="file" id={`doc_3`} className='hidden' onChange={(e) => handleFileChange(e, 3)} accept='image/*, .pdf' />
                                        <ImageIcon className='file-icon' />
                                    </label>
                                    <div className="flex-center image-show-btn" onClick={handleHistoryPreview}>履歴書</div>
                                </div>
                                <div className='flex-center'>
                                    <label htmlFor={`doc_4`} className='flex w-44 shrink-0 bg-sky-600 p-2 rounded flex gap-2 justify-center items-center text-white text-md cursor-pointer hover:opacity-75'>
                                        <input type="file" id={`doc_4`} className='hidden' onChange={(e) => handleFileChange(e, 4)} accept='image/*, .pdf' />
                                        <ImageIcon className='file-icon' />
                                    </label>
                                    <div className="flex-center image-show-btn" onClick={handleWorkingHistoryPreview}>職務経歴書</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 mt-10 col-lg-4 mt-20">
                    <div className="flex-center min-w-400">
                        <div className="input-label">連帯保証人</div>
                        <div className="input-value">
                            <div className='flex-left'>
                                <div className='flex-center'>
                                    <Select
                                        onChange={(e) => setGuarantorId(e.target.value)}
                                        className="shop-select w-150"
                                        size='small'
                                    >
                                        <MenuItem disabled value="">
                                            <span className="text-gray-500">連帯保証人</span>
                                        </MenuItem>
                                        {guarantors.map((item, key) => (
                                            <MenuItem value={item.id} key={key}>{item.name}</MenuItem>
                                        ))}
                                    </Select>
                                    <div className="flex-center image-show-btn" onClick={handleContractBtn}>契約書画像</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='staff-policy-title'>
                <div className="input-label mt-10 ">スタッフ規約</div>
                <textarea
                    value={terms}
                    rows={10}
                    variant="outlined"
                    className='staff-policy rounded w-full border-gray-300 hover:border-sky-600'
                    readOnly
                />
                <div className="flex justify-center items-center">
                    <Checkbox
                        id="termAgree"
                        checked={termAgree}
                        inputProps={{ 'aria-label': 'controlled' }}
                        onChange={(e) => setTermAgree(e.target.checked)}
                    />
                    <InputLabel htmlFor="termAgree" value="規約に同意して、" />
                </div>
            </div>

            <div className='flex-center'>
                <Button
                    loading
                    textLoading="Waiting"
                    type="submit"
                    color="primary"
                    title="登録する"
                    className="w-100"
                    onClick={handleRegisterClick}
                />
                <Button
                    loading
                    textLoading="Waiting"
                    type="submit"
                    color="secondary"
                    title="キャンセル"
                    className="w-100"
                    onClick={handleCancelClick}
                />

            </div>
            <Dialog
                open={openImagePreview}
                onClose={() => handleImagePreviewClose()}
            >
                <div className=''>
                    <img src={previewImage} alt="preview" />
                </div>
            </Dialog>
            <Dialog
                open={openPdfPreview}
                onClose={() => handlePdfPreviewClose()}
                fullWidth maxWidth="md">
                <DialogContent dividers>
                    {previewPdf && (
                        <Document file={previewPdf ? URL.createObjectURL(previewPdf) : null}
                        onLoadError={(error) => console.error("Error loading PDF:", error)}>
                            <Page pageNumber={1} />
                        </Document>
                    )}
                </DialogContent>
            </Dialog>
        </div>
    );
};
export default FormStaffRegister;
