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
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import AddIcon from '@mui/icons-material/Add';
import ImageIcon from '@mui/icons-material/Image';
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import DeleteIcon from "@mui/icons-material/DeleteOutline";
import { Dialog, DialogTitle, DialogContent } from "@mui/material";
import { pdfjs, Document, Page } from "react-pdf";
import ZipcodeInput from "../../../../components/ZipcodeInput";
import { actionTheme, utilityAction } from "../../../../reduxStore";
import { withRouter } from "react-router-dom";
import CameraCaptureDialog from "../../../../pages/purchase-manage/register/camera"
import moment from 'moment';
moment.locale("ja");

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

let FormStaffRegister = (props) => {
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
    const [openImagePreview, setOpenImagePreview] = useState(false)
    const [openCameraPreview, setOpenCameraPreview] = useState(false)
    const [openRegisterPreview, setOpenRegisterPreview] = useState(false)
    const [cameraCaptureType, setCameraCaptureType] = useState()
    const [openPdfPreview, setOpenPdfPreview] = useState(false)
    const [previewImage, setPreviewImage] = useState("")
    const [previewPdf, setPreviewPdf] = useState("")
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);
    const dispatch = useDispatch();

    const types = [
        { "id": 3, "name": "マネージャー" },
        { "id": 4, "name": "本部社員" },
        { "id": 5, "name": "店長" },
        { "id": 6, "name": "社員" },
        { "id": 7, "name": "アルバイト" },
    ]

    const identifications = [
        { "id": 1, "name": "マイナンバー" },
        { "id": 2, "name": "運転免許証" },
        { "id": 3, "name": "健康保険証" },
        { "id": 4, "name": "パスポート" },
    ]

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

    useEffect(() => {
        let newCities = [];
        cities.forEach(element => {
            if (element.prefecture_id == address1) {
                newCities.push(element);
            }
        });
        setFilteredCities(newCities);
    }, [address1, cities]);

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

    const handleDeleteFile = (e, index) => {
        if (index == 1) {
            console.log(identificationFile1);

            if (identificationFile1 === undefined) {
                ToastNotification("error", "本人確認書類ファイルをインポートしてください。");
                return;
            } else {
                if (window.confirm("このファイルを本当に削除してもよろしいですか？")) {
                    setIdentificationType1(undefined);
                    setIdentificationFile1(undefined);
                }
            }
        } else if (index == 2) {
            if (identificationFile2 === undefined) {
                ToastNotification("error", "本人確認書類ファイルをインポートしてください。");
                return;
            } else {
                if (window.confirm("このファイルを本当に削除してもよろしいですか？")) {
                    setIdentificationType2(undefined);
                    setIdentificationFile2(undefined);
                }
            }
        } else if (index == 3) {
            if (historyFile === undefined) {
                ToastNotification("error", "履歴書ファイルをインポートしてください。");
                return;
            } else {
                if (window.confirm("このファイルを本当に削除してもよろしいですか？")) {
                    setHistoryType(undefined);
                    setHistoryFile(undefined);
                }
            }
        } else if (index == 4) {
            if (workingHistoryFile === undefined) {
                ToastNotification("error", "職務経歴書ファイルをインポートしてください。");
                return;
            } else {
                if (window.confirm("このファイルを本当に削除してもよろしいですか？")) {
                    setWorkingHistoryType(undefined);
                    setWorkingHistoryFile(undefined);
                }
            }
        }
    }

    const handleFileChange = (e, index) => {
        const file = e.target.files[0]
        alert(file.name + "を取り込みました。")
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

    const handleIdentificationCameraDialogOpen1 = () => {
        setCameraCaptureType("identification1")
        setOpenCameraPreview(true)
    }

    const handleIdentificationCameraDialogOpen2 = () => {
        setCameraCaptureType("identification2")
        setOpenCameraPreview(true)
    }

    const handleHistoryCameraDialogOpen = () => {
        setCameraCaptureType("history")
        setOpenCameraPreview(true)
    }

    const handleWorkingHistoryCameraDialogOpen = () => {
        setCameraCaptureType("working_history")
        setOpenCameraPreview(true)
    }


    const handleCameraPreviewClose = () => {
        setOpenCameraPreview(false)
    }

    const handleCapturedImage = (type, image) => { // base64
        setOpenCameraPreview(false)
        const file = base64ToFile(image, moment().format('YYYYMMDDHHmmss'))
        if (type == "identification1") {
            setIdentificationType1(file.type);
            setIdentificationFile1(file);
        } else if (type == "identification2") {
            setIdentificationType2(file.type);
            setIdentificationFile2(file);
        } else if (type == "history") {
            setHistoryType(file.type);
            setHistoryFile(file);
        } else if (type == "working_history") {
            setWorkingHistoryType(file.type);
            setWorkingHistoryFile(file);
        }
    }

    const base64ToFile = (base64String, fileName) => {
        const arr = base64String.split(",");
        const mime = arr[0].match(/:(.*?);/)[1]; // Extract MIME type
        const bstr = atob(arr[1]); // Decode Base64
        let n = bstr.length;
        const u8arr = new Uint8Array(n);

        while (n--) {
            u8arr[n] = bstr.charCodeAt(n);
        }

        return new File([u8arr], fileName, { type: mime });
    };

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

    const handleRegisterPreviewClose = async () => {
        setOpenRegisterPreview(false)
        dispatch(utilityAction.setLoading("content"));
        if (window.confirm("この操作でスタッフが登録されます。本当に登録しますか？")) {
            try {
                const formData = new FormData();
                formData.append("staff_id", staffId);
                formData.append("email", email);
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
        } else {
            props.history.push("/");
        }
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

    const onDocumentLoadSuccess = ({ numPages }) => {
        setNumPages(numPages);
    };

    const handleZipCode = async (e) => {
        setZipCode(e);
    }

    const handleRegisterClick = async () => {
        // check validate
        // if (staffId === undefined) {
        //     ToastNotification("error", "スタッフIDは必須です。");
        //     return;
        // }
        // if (email === undefined) {
        //     ToastNotification("error", "メールアドレスは必須です。");
        //     return;
        // }
        // if (email !== undefined && !email.includes("@")) {
        //     ToastNotification("error", "メールアドレスの形式が無効です。");
        //     return;
        // }
        // if (password === undefined) {
        //     ToastNotification("error", "パスワードは必須です。");
        //     return;
        // } else if (!/^[a-zA-Z0-9]*$/.test(password) || password.length < 8) {
        //     ToastNotification("error", "半角英数字を含む8文字以上入力してください。");
        //     return;
        // }
        // if (shop === undefined) {
        //     ToastNotification("error", "店舗名は必須です。");
        //     return;
        // }
        // if (type === undefined) {
        //     ToastNotification("error", "種別は必須です。");
        //     return;
        // }
        // if (name === undefined) {
        //     ToastNotification("error", "名前は必須です。");
        //     return;
        // }
        // if (nameKana === undefined) {
        //     ToastNotification("error", "カタカナ名は必須です。");
        //     return;
        // }
        // if (phoneNumber === undefined) {
        //     ToastNotification("error", "電話番号は必須です。");
        //     return;
        // }
        // if (birthday === undefined) {
        //     ToastNotification("error", "生年月日は必須です。");
        //     return;
        // }
        // if (gender === undefined) {
        //     ToastNotification("error", "性別は必須です。");
        //     return;
        // }
        // if (zipCode === undefined) {
        //     ToastNotification("error", "郵便番号は必須です。");
        //     return;
        // }
        // if (address1 === undefined) {
        //     ToastNotification("error", "都道府県は必須です。");
        //     return;
        // }
        // if (address2 === undefined) {
        //     ToastNotification("error", "市町村は必須です。");
        //     return;
        // }
        // if (address3 === undefined) {
        //     ToastNotification("error", "住所詳細は必須です。");
        //     return;
        // }
        // let exist = false
        // if (identificationId1 !== undefined && identificationType1 !== undefined) {
        //     exist = true;
        // }
        // if (identificationId2 !== undefined && identificationType2 !== undefined) {
        //     exist = true;
        // }
        // if (!exist) {
        //     ToastNotification("error", "本人確認書類は必須です。");
        //     return;
        // }
        // if (historyType === undefined) {
        //     ToastNotification("error", "履歴書は必須です。");
        //     return;
        // }
        // if (guarantorId === undefined) {
        //     ToastNotification("error", "連帯保証人は必須です。");
        //     return;
        // }

        setOpenRegisterPreview(true)
    };

    const handleCancelClick = () => {
        props.history.push("/");
    };

    const handleSearchAddressClick = async () => {
        let zip = zipCode.replace("-", "")
        console.log(zip);
        if (zip && !zip.match(/^\d{7}$/)) {
            alert("郵便番号は7桁の数字を入力してください。");
            return;
        }
        setAddress1(0);
        setAddress2(0);
        setAddress3("");

        try {
            const response = await fetch(
                `https://zipcloud.ibsnet.co.jp/api/search?zipcode=${zip}`
            );
            const data = await response.json();

            if (data.status === 200 && data.results) {
                const result = data.results[0];
                const prefecture = prefectures.filter(item => item.name === result.address1)
                setAddress1(prefecture[0].id);
                const city = cities.filter(item => item.name === result.address2)
                setAddress2(city[0].id);
                setAddress3(result.address3)
            } else {
                alert("住所が見つかりませんでした。");
            }
        } catch (err) {
            console.log(err);
        }
    }
    return (
        <div>
            <div className='staff-register-container'>
                <div className='screen-div2'>
                    <div className="mt-5">
                        <div className="input-label">スタッフID<span className='require-label'>*</span></div>
                        <div className="input-value">
                            <TextInput
                                id="staff_id"
                                name="staff_id"
                                min="1"
                                max="20"
                                className="mt-1 block w-full w-100-pro"
                                placeholder='スタッフID'
                                isFocused={true}
                                onChange={(e) => setStaffId(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="mt-5">
                        <div className="input-label">名前<span className='require-label'>*</span></div>
                        <div className="input-value">
                            <TextInput
                                id="name"
                                type="text"
                                name="name"
                                className="mt-1 block w-full w-100-pro"
                                onChange={(e) => setName(e.target.value)}
                                required
                                placeholder="名前"
                            />
                        </div>
                    </div>
                    <div className="mt-5">
                        <div className="input-label">カタカナ名<span className='require-label'>*</span></div>
                        <div className="input-value">
                            <TextInput
                                id="name_kana"
                                type="text"
                                name="name_kana"
                                className="mt-1 block w-full w-100-pro"
                                onChange={(e) => setNameKana(e.target.value)}
                                required
                                placeholder="カタカナ名"
                            />
                        </div>
                    </div>
                    <div className="mt-5">
                        <div className="input-label">生年月日<span className='require-label'>*</span></div>
                        <div className="input-value">
                            <DateInput
                                className="shop-select w-100"
                                onChange={(e) => setBirthday(e)}
                            />
                        </div>
                    </div>
                    <div className="mt-5">
                        <div className="input-label">性別<span className='require-label'>*</span></div>
                        <div className="input-value">
                            <Select
                                onChange={(e) => setGender(e.target.value)}
                                className="shop-select"
                                size='small'
                            >
                                <MenuItem value={1}>男</MenuItem>
                                <MenuItem value={2}>女</MenuItem>
                            </Select>
                        </div>
                    </div>
                    <div className="mt-5">
                        <div className="input-label">郵便番号<span className='require-label'>*</span></div>
                        <div className="input-value flex-left">
                            <ZipcodeInput
                                className='w-100-pro'
                                onChange={(e) => handleZipCode(e)}
                            />
                            <Button
                                loading
                                textLoading="Waiting"
                                type="submit"
                                color="outline-secondary"
                                title="住所検索"
                                className="w-100"
                                onClick={handleSearchAddressClick}
                            />
                        </div>
                    </div>
                    <div className="mt-5">
                        <div className="input-label">都道府県<span className='require-label'>*</span></div>
                        <div className="input-value">
                            <Select
                                onChange={handleChangeAddress1}
                                className="shop-select w-100-pro"
                                size='small'
                                value={address1 ? address1 : 0}
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
                    <div className="mt-5">
                        <div className="input-label">市町村<span className='require-label'>*</span></div>
                        <div className="input-value">
                            <Select
                                onChange={handleChangeAddress2}
                                className="shop-select w-100-pro"
                                size='small'
                                value={address2 ? address2 : 0}
                            >
                                {filteredCities.map((item, key) => (
                                    <MenuItem value={item.id} key={key}>{item.name}</MenuItem>
                                ))}
                            </Select>
                        </div>
                    </div>
                    <div className="mt-5">
                        <div className="input-label">住所詳細<span className='require-label'>*</span></div>
                        <div className="input-value">
                            <TextInput
                                id="address3"
                                type="text"
                                name="address3"
                                className="mt-1 block w-full w-100-pro"
                                onChange={(e) => setAddress3(e.target.value)}
                                required
                                placeholder="住所詳細"
                                value={address3}
                            />
                        </div>
                    </div>
                </div>
                <div className='screen-div2'>
                    <div className="mt-5">
                        <div className="input-label">店舗名<span className='require-label'>*</span></div>
                        <div className="input-value">
                            <Select
                                onChange={(e) => setShop(e.target.value)}
                                displayEmpty
                                className="shop-select w-100-pro"
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
                    <div className="mt-5">
                        <div className="input-label">種別<span className='require-label'>*</span></div>
                        <div className="input-value">
                            <Select
                                onChange={(e) => setType(e.target.value)}
                                displayEmpty
                                className="shop-select w-100-pro"
                                size='small'
                            >
                                <MenuItem disabled value="">
                                    <span className="text-gray-500">種別</span>
                                </MenuItem>
                                {types.map(item => (
                                    <MenuItem key={item.id} value={item.id}>{item.name}</MenuItem>
                                ))}
                            </Select>
                        </div>
                    </div>
                    <div className="mt-5">
                        <div className="input-label">メールアドレス<span className='require-label'>*</span></div>
                        <div className="input-value">
                            <TextInput
                                id="email"
                                type="email"
                                name="email"
                                className="mt-1 block w-full w-100-pro"
                                autoComplete="email"
                                placeholder="メールアドレス"
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="mt-5">
                        <div className="input-label">電話番号<span className='require-label'>*</span></div>
                        <div className="input-value">
                            <PhoneInput
                                id="phone"
                                name="phone"
                                placeholder='電話番号'
                                className='w-100-pro'
                                onChange={(e) => setPhoneNumber(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="mt-5">
                        <div className="input-label">パスワード<span className='require-label'>*</span></div>
                        <div className="input-value">
                            <TextInput
                                id="password"
                                type="password"
                                name="password"
                                className="mt-1 block w-full w-100-pro"
                                autoComplete="new-password"
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                placeholder="半角英数字を含む8文字以上"
                            />
                        </div>
                    </div>
                    <div className="flex-left mt-20">
                        <div className="input-label">本人確認書類<span className='require-label'>*</span></div>
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
                                            {identifications.map(item => (
                                                <MenuItem key={item.id} value={item.id}>{item.name}</MenuItem>
                                            ))}
                                        </Select>
                                        <label htmlFor={`doc_1`} className='flex w-44 shrink-0 bg-sky-600 p-2 rounded flex gap-2 justify-center items-center text-white text-md cursor-pointer hover:opacity-75'>
                                            <input type="file" id={`doc_1`} className='hidden' onChange={(e) => handleFileChange(e, 1)} accept='.jpg,.jpeg,.png,.pdf' />
                                            <ImageIcon className='file-icon' />
                                        </label>
                                        <CameraAltIcon className='file-icon camera-icon' onClick={handleIdentificationCameraDialogOpen1} />
                                        <DeleteIcon className='file-icon camera-icon' onClick={(e) => handleDeleteFile(e, 1)} />
                                        <div className="flex-center image-show-btn" onClick={handleIdentificationPreview1}>画像と情報表示</div>
                                    </div>
                                    {isVisible && (
                                        <div className='flex-center'>
                                            <Select
                                                onChange={(e) => setIdentificationId2(e.target.value)}
                                                className="shop-select w-150"
                                                size='small'
                                            >
                                                {identifications.map(item => (
                                                    <MenuItem key={item.id} value={item.id}>{item.name}</MenuItem>
                                                ))}
                                            </Select>
                                            <label htmlFor={`doc_2`} className='flex w-44 shrink-0 bg-sky-600 p-2 rounded flex gap-2 justify-center items-center text-white text-md cursor-pointer hover:opacity-75'>
                                                <input type="file" id={`doc_2`} className='hidden' onChange={(e) => handleFileChange(e, 2)} accept='.jpg,.jpeg,.png,.pdf' />
                                                <ImageIcon className='file-icon' />
                                            </label>
                                            <CameraAltIcon className='file-icon camera-icon' onClick={handleIdentificationCameraDialogOpen2} />
                                            <DeleteIcon className='file-icon camera-icon' onClick={(e) => handleDeleteFile(e, 2)} />
                                            <div className="flex-center image-show-btn" onClick={handleIdentificationPreview2}>画像と情報表示</div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-5">
                        <div className="input-label">書類<span className='require-label'>*</span></div>
                        <div className="input-value">
                            <div className='flex-left'>
                                <div className='flex-center'>
                                    <label htmlFor={`doc_3`} className='flex w-44 shrink-0 bg-sky-600 p-2 rounded flex gap-2 justify-center items-center text-white text-md cursor-pointer hover:opacity-75'>
                                        <input type="file" id={`doc_3`} className='hidden' onChange={(e) => handleFileChange(e, 3)} accept='.jpg,.jpeg,.png,.pdf' />
                                        <ImageIcon className='file-icon' />
                                    </label>
                                    <CameraAltIcon className='file-icon camera-icon' onClick={handleHistoryCameraDialogOpen} />
                                    <DeleteIcon className='file-icon camera-icon' onClick={(e) => handleDeleteFile(e, 3)} />
                                    <div className="flex-center image-show-btn" onClick={handleHistoryPreview}>履歴書</div>
                                </div>
                                <div className='flex-center'>
                                    <label htmlFor={`doc_4`} className='flex w-44 shrink-0 bg-sky-600 p-2 rounded flex gap-2 justify-center items-center text-white text-md cursor-pointer hover:opacity-75'>
                                        <input type="file" id={`doc_4`} className='hidden' onChange={(e) => handleFileChange(e, 4)} accept='.jpg,.jpeg,.png,.pdf' />
                                        <ImageIcon className='file-icon' />
                                    </label>
                                    <CameraAltIcon className='file-icon camera-icon' onClick={handleWorkingHistoryCameraDialogOpen} />
                                    <DeleteIcon className='file-icon camera-icon' onClick={(e) => handleDeleteFile(e, 4)} />
                                    <div className="flex-center image-show-btn" onClick={handleWorkingHistoryPreview}>職務経歴書</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-5">
                        <div className="input-label">連帯保証人<span className='require-label'>*</span></div>
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
                                    <div className="flex-center image-show-btn" onClick={handleContractBtn}>誓約書画像</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='flex-center'
                style={{
                    marginTop: '20px',
                    gap: '100px'
                }}>
                <div
                    className="cancel-btn"
                    onClick={handleCancelClick}
                >キャンセル</div>
                <div
                    className="register-btn"
                    onClick={handleRegisterClick}
                >登録する</div>

            </div>
            <div>
                <Dialog
                    open={openImagePreview}
                    onClose={() => handleImagePreviewClose()}
                    className='image-preview'
                >
                    <div className=''>
                        <img src={previewImage} alt="preview" />
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
                        type={cameraCaptureType}
                        onHandleCameraDialogClose={handleCameraPreviewClose}
                        onHandleCapturedImage={handleCapturedImage}
                    />
                </Dialog>
            </div>
            <Dialog
                open={openPdfPreview}
                onClose={() => handlePdfPreviewClose()}
                fullWidth maxWidth="md">
                <DialogContent dividers>
                    {previewPdf && (
                        <div className='pdf-viewer-container'>
                            <Document file={previewPdf ? URL.createObjectURL(previewPdf) : null}
                                onLoadError={(error) => console.error("Error loading PDF:", error)}
                                onLoadSuccess={onDocumentLoadSuccess}>
                                <Page pageNumber={pageNumber} />
                            </Document>
                            <div className='pdf-viewer-content'>
                                <p>
                                    合計{numPages}ページ中 {pageNumber}ページ
                                </p>
                                <button disabled={pageNumber <= 1} onClick={() => setPageNumber(pageNumber - 1)}>
                                    以前
                                </button>
                                <button disabled={pageNumber >= numPages} onClick={() => setPageNumber(pageNumber + 1)}>
                                    次へ
                                </button>
                            </div>
                        </div>
                    )}
                </DialogContent>
            </Dialog>
            <div>
                <Dialog
                    open={openRegisterPreview}
                    className='register-preview'
                >
                    <div className='flex-center'>
                        <div className='screen-div2'>
                            <div className='flex-center'>
                                <label>スタッフID:</label>
                                <label>{staffId}</label>
                            </div>
                            <div className='flex-center'>
                                <label>名前:</label>
                                <label>{name}</label>
                            </div>
                            <div className='flex-center'>
                                <label>カタカナ名:</label>
                                <label>{nameKana}</label>
                            </div>
                            <div className='flex-center'>
                                <label>生年月日:</label>
                                <label>{birthday}</label>
                            </div>
                            <div className='flex-center'>
                                <label>郵便番号:</label>
                                <label>{zipCode}</label>
                            </div>
                            <div className='flex-center'>
                                <label>都道府県:</label>
                                <label>{prefectures[address1 - 1]?.name}</label>
                            </div>
                            <div className='flex-center'>
                                <label>市町村:</label>
                                <label>{cities[address2 - 1]?.name}</label>
                            </div>
                            <div className='flex-center'>
                                <label>住所詳細:</label>
                                <label>{address3}</label>
                            </div>
                        </div>
                        <div className='screen-div2'>
                            <div className='flex-center'>
                                <label>店舗名:</label>
                                <label>{shops[shop - 1]?.name}</label>
                            </div>
                            <div className='flex-center'>
                                <label>種別:</label>
                                <label>{types[type - 3]?.name}</label>
                            </div>
                            <div className='flex-center'>
                                <label>メールアドレス:</label>
                                <label>{email}</label>
                            </div>
                            <div className='flex-center'>
                                <label>性別:</label>
                                <label>{gender == 1 ? "男" : "女"}</label>
                            </div>
                            <div className='flex-center'>
                                <label>電話番号:</label>
                                <label>{phoneNumber}</label>
                            </div>
                            <div className='flex-center'>
                                <label>パスワード:</label>
                                <label>{password}</label>
                            </div>
                            <div className='flex-center'>
                                <label>本人確認書類1:</label>
                                <label>{identifications[identificationId1 - 1]?.name}</label>
                            </div>
                            {
                                isVisible &&
                                <div className='flex-center'>
                                    <label>本人確認書類2:</label>
                                    <label>{identifications[identificationId2 - 1]?.name}</label>
                                </div>
                            }
                            <div className='flex-center'>
                                <label>連帯保証人:</label>
                                <label>{guarantors[guarantorId - 1]?.name}</label>
                            </div>
                        </div>
                    </div>
                    <div className='flex-center mt-20'>
                        <div
                            className="register-btn"
                            onClick={handleRegisterPreviewClose}
                        >登録する</div>
                    </div>
                </Dialog>
            </div>
        </div>
    );
};
export default withRouter(FormStaffRegister);
