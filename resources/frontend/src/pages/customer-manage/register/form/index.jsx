import { useContext, useState, useEffect, useRef } from 'react';
import {
    React,
    Button,
    multiPostData,
    previewThumbnail,
    getData,
    getItem,
    ToastNotification,
    useDispatch
} from "../../../../components";
import PhoneInput from "../../../../components/PhoneInput";
import DateInput from "../../../../components/DateInput";
import DateTimeInput from "../../../../components/DateTimeInput";
import TextInput from '../../../../components/TextInput';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import AddIcon from '@mui/icons-material/Add';
import ImageIcon from '@mui/icons-material/Image';
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import DeleteIcon from "@mui/icons-material/DeleteOutline";
import { Dialog, DialogTitle, DialogContent, DialogActions } from "@mui/material";
import { pdfjs, Document, Page } from "react-pdf";
import { withRouter } from "react-router-dom";
import ZipcodeInput from "../../../../components/ZipcodeInput";
import { utilityAction } from "../../../../reduxStore";
import Tesseract from 'tesseract.js';
import CameraCaptureDialog from '../../../purchase-manage/register/camera';
import 'swiper/css';
import moment from 'moment';
moment.locale("ja");

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

let FormCustomerRegister = (props) => {
    const [shop, setShop] = useState()
    const [shopName, setShopName] = useState()
    const [type, setType] = useState()
    const [name, setName] = useState()
    const [nameKana, setNameKana] = useState()
    const [phoneNumber1, setPhoneNumber1] = useState()
    const [phoneNumber2, setPhoneNumber2] = useState()
    const [birthday, setBirthday] = useState()
    const [gender, setGender] = useState()
    const [zipCode, setZipCode] = useState()
    const [job, setJob] = useState()
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
    const [note, setNote] = useState()
    const [hearingItem1Id, setHearingItem1Id] = useState()
    const [hearingItem1Value, setHearingItem1Value] = useState()
    const [hearingItem2Value, setHearingItem2Value] = useState()
    const [hearingItem1, setHearingItem1] = useState()
    const [hearingLine, setHearingLine] = useState()
    const [hearingGoogle, setHearingGoogle] = useState()
    const [hearingCoupon, setHearingCoupon] = useState()
    const [hearingGift, setHearingGift] = useState()
    const [cameraCaptureType, setCameraCaptureType] = useState()

    const [shops, setShops] = useState([])
    const [prefectures, setPrefectures] = useState([])
    const [cities, setCities] = useState([])
    const [filteredCities, setFilteredCities] = useState([])
    const [openImagePreview, setOpenImagePreview] = useState(false)
    const [openCameraPreview, setOpenCameraPreview] = useState(false)
    const [openRegisterPreview, setOpenRegisterPreview] = useState(false)
    const [openPdfPreview, setOpenPdfPreview] = useState(false)
    const [previewImage, setPreviewImage] = useState("")
    const [previewPdf, setPreviewPdf] = useState("")
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);
    const dispatch = useDispatch();

    const identifications = [
        { "id": 1, "name": "マイナンバー" },
        { "id": 2, "name": "運転免許証" },
        { "id": 3, "name": "健康保険証" },
        { "id": 4, "name": "パスポート" },
    ]

    const hearingNews = [
        'さきがけ',
        '読売',
        '朝日',
        '日経',
        '産経',
        '毎日',
        '奈良',
        '店舗前',
        '顧客',
        'マイタウン奈良',
        'アナウンス',
        'きのかわトーク',
        'クレール',
        'フリーペーパー',
        'HP',
        '紹介',
        '看板',
        '地域新聞',
        '従業員',
        'その他',
    ];
    const hearingInternet = [
        'パソコンHP',
        'スマホHP',
        'GoogleMap',
        'SNS',
    ];
    const jobList = [
        '自営業',
        '自由業',
        '会社員',
        'バート･アールバイト',
        '主婦',
        '学生',
        '無職',
    ];
    const coupons = ["利用なし", "クーポン1", "クーポン2", "現金還元"];
    const gifts = ["なし", "テイッシュボックス", "その他"];

    //For OCR
    const videoRef = useRef(null);
    const canvasRef = useRef(null);
    const [imageSrc, setImageSrc] = useState(null);
    const [ocrResult, setOcrResult] = useState('');
    const [isProcessing, setIsProcessing] = useState(false);

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
        // API Call
        const initRegisterAPI = async () => {
            let result = await getData("purchase/init-register")
            if (result.status === 200) {
                let data = result.data;
                setPurchaseId(data.purchase.id);
            }
        };
        initRegisterAPI();
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


    // Start the camera when the component mounts
    useEffect(() => {
        // const startCamera = async () => {
        //     try {
        //         const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        //         if (videoRef.current) {
        //             videoRef.current.srcObject = stream;
        //         }
        //     } catch (error) {
        //         console.error("Error accessing camera: ", error);
        //     }
        // };

        // startCamera();

        // // Cleanup when the component unmounts
        // return () => {
        //     if (videoRef.current && videoRef.current.srcObject) {
        //         let tracks = videoRef.current.srcObject.getTracks();
        //         tracks.forEach((track) => track.stop());
        //     }
        // };
    }, []);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImageSrc(reader.result); // Display image preview
            };
            reader.readAsDataURL(file);
            processOCR(file); // Process OCR when file is selected
        }
    };

    const captureImage = () => {
        if (videoRef.current && canvasRef.current) {
            const canvas = canvasRef.current;
            const video = videoRef.current;
            canvas.width = video.videoWidth;
            canvas.height = video.videoHeight;

            // Draw the current video frame to the canvas
            const ctx = canvas.getContext('2d');
            ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

            // Get the data URL of the image
            const imageData = canvas.toDataURL('image/png');
            setImageSrc(imageData);

            // Perform OCR on the captured image
            performOcr(imageData);
        }
    };

    const processOCR = (imageFile) => {
        setIsProcessing(true);
        Tesseract.recognize(
            imageFile,
            'jpn', // Japanese language model
            {
                logger: (m) => console.log(m), // Progress logging
            }
        ).then(({ data: { text } }) => {
            setOcrResult(text); // Set OCR result to state
            setIsProcessing(false);
        }).catch((error) => {
            setOcrResult("Error during OCR processing");
            setIsProcessing(false);
        });
    };

    const performOcr = (imageData) => {
        setIsProcessing(true);
        Tesseract.recognize(
            imageData,
            'jpn', // Japanese language model
            {
                logger: (m) => console.log(m), // Logging progress
            }
        ).then(({ data: { text } }) => {
            setOcrResult(text);
            setIsProcessing(false);
        }).catch((error) => {
            setOcrResult("Error during OCR processing");
            setIsProcessing(false);
        });
    };

    const handleShopChange = (e) => {
        setShop(e)
        const shop = shops.filter(shop => shop.id === e)
        setShopName(shop[0].name)
    }

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

    const handleFileChange = (e, index) => {
        const file = e.target.files[0]
        alert(file.name + "を取り込みました。")
        if (index == 1) {
            setIdentificationType1(file.type);
            setIdentificationFile1(file);
        } else if (index == 2) {
            setIdentificationType2(file.type);
            setIdentificationFile2(file);
        }
    }

    const handleDeleteFile = (e, index) => {
        if (index == 1) {
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

    const handleImagePreview = async (file) => {
        setOpenImagePreview(true)
        const previewImage = await previewThumbnail(file)
        setPreviewImage(previewImage)
    }

    const handleImagePreviewClose = () => {
        setOpenImagePreview(false)
        setPreviewImage("")
    }

    const handleCameraCaptureDialogOpen1 = (type) => {
        setCameraCaptureType("passport1")
        setOpenCameraPreview(true)
    }

    const handleCameraCaptureDialogOpen2 = (type) => {
        setCameraCaptureType("passport2")
        setOpenCameraPreview(true)
    }

    const handleCameraPreviewClose = () => {
        setOpenCameraPreview(false)
    }

    const handleCapturedImage = (type, image) => { // base64
        setOpenCameraPreview(false)
        const file = base64ToFile(image, moment().format('YYYYMMDDHHmmss'))
        if (type == "passport1") {
            setIdentificationType1(file.type);
            setIdentificationFile1(file);
        } else if (type == "passport2") {
            setIdentificationType2(file.type);
            setIdentificationFile2(file);
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

    const handleSaveCustomerClick = async () => {
        // check validate
        if (shop === undefined) {
            ToastNotification("error", "店舗名は必須です。");
            return;
        }
        if (type === undefined) {
            ToastNotification("error", "種別は必須です。");
            return;
        }
        if (name === undefined) {
            ToastNotification("error", "名前は必須です。");
            return;
        }
        if (nameKana === undefined) {
            ToastNotification("error", "カタカナ名は必須です。");
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
        if (phoneNumber1 === undefined) {
            ToastNotification("error", "電話番号(自宅)は必須です。");
            return;
        }
        if (phoneNumber2 === undefined) {
            ToastNotification("error", "電話番号(携帯)は必須です。");
            return;
        }
        if (zipCode === undefined) {
            ToastNotification("error", "郵便番号は必須です。");
            return;
        }
        if (job === undefined) {
            ToastNotification("error", "職業は必須です。");
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
        if (note === undefined) {
            ToastNotification("error", "特記事項は必須です。");
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
        // if (hearingItem1Id === undefined || (hearingItem2Value === undefined || hearingItem2Value === "")) {
        //     ToastNotification("error", "全体ヒアリングは必須です。");
        //     return;
        // }
        // if (hearingItem1Id > 2 && (hearingItem1Value === undefined || hearingItem1Value === "")) {
        //     ToastNotification("error", "全体ヒアリングは必須です。");
        //     return;
        // }
        switch (hearingItem1Id) {
            case 1:
                setHearingItem1('以前も利用したことがある')
                break;
            case 2:
                setHearingItem1('店舗を見て')
                break;
            case 3:
                setHearingItem1('店舗以外の看板・広告を見て ' + hearingItem1Value + 'の場所で見ました')
                break;
            case 4:
                setHearingItem1('折込チラシを見て ' + hearingNews[hearingItem1Value])
                break;
            case 5:
                setHearingItem1('インターネットを見て ' + hearingInternet[hearingItem1Value])
                break;
            case 6:
                setHearingItem1('紹介されて ' + hearingItem1Value)
                break;
            case 7:
                setHearingItem1('その他 ' + hearingItem1Value)
                break;

            default:
                break;
        }

        setOpenRegisterPreview(true)
    };

    const handleRegisterPreviewClose = async () => {
        setOpenRegisterPreview(false)
        if (window.confirm("お客様の情報を本当に登録してもよろしいですか？")) {
            dispatch(utilityAction.setLoading("content"));
            try {
                const formData = new FormData();
                formData.append("shop_id", shop);
                formData.append("type", type);
                formData.append("name", name);
                formData.append("name_kana", nameKana);
                formData.append("phone_number1", phoneNumber1);
                formData.append("phone_number2", phoneNumber2);
                formData.append("birthday", birthday);
                formData.append("gender", gender);
                formData.append("zipcode", zipCode);
                formData.append("job", job);
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
                formData.append("note", note);
                formData.append("hearing_item1_id", hearingItem1Id);
                formData.append("hearing_item1_value", hearingItem1Value);
                formData.append("hearing_item2_value", hearingItem2Value);
                if (hearingLine !== undefined) {
                    formData.append("hearing_line", hearingLine);
                }
                if (hearingGoogle !== undefined) {
                    formData.append("hearing_google", hearingGoogle);
                }
                if (hearingCoupon !== undefined) {
                    formData.append("hearing_coupon", hearingCoupon);
                }
                if (hearingGift !== undefined) {
                    formData.append("hearing_gift", hearingGift);
                }

                let feedback = await multiPostData("customer/register", formData)
                if (feedback.status === 200) {
                    window.history.back();
                }
                dispatch(utilityAction.stopLoading());
            } catch (error) {
                console.log(error)
                ToastNotification("error", error?.message);
                dispatch(utilityAction.stopLoading());
            }
        } else {
        }
    }

    const handleCancelClick = () => {
        if (window.confirm("保存しますか？")) {
            handleRegisterClick();
        } else {
            window.history.back();
        }
    };

    const handleHearingItem1IdChange = (ind) => {
        setHearingItem1Id(ind)
        setHearingItem1Value('')
        switch (ind) {
            case 1:
                setType('顧客')
                break;
            case 2:
                setType('店舗前')
                break;
            case 3:
                setType('ポスティング')
                break;
            case 4:
                setType('折込')
                break;
            case 5:
                setType('ＨＰ')
                break;
            case 6:
                setType('紹介')
                break;
            case 7:
                setType('その他')
                break;

            default:
                break;
        }
    };

    const handleHearingItem1ValueChange = (e) => {
        setHearingItem1Value(e);
    };

    const handleHearingItem2ValueChange = (e) => {
        setHearingItem2Value(e);
    };

    const handleHearingItem1SelectValueChange = (e) => {
        setHearingItem1Value(e.target.value)
    }

    const handleHearingLineChange = (e) => {
        setHearingLine(e.target.checked ? 1 : 0)
    };

    const handleHearingGoogleChange = (e) => {
        setHearingGoogle(e.target.checked ? 1 : 0)
    };

    const handleHearingCouponChange = (e) => {
        setHearingCoupon(e.target.value)
    };

    const handleHearingGiftChange = (e) => {
        setHearingGift(e.target.value)
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
            <div className='customer-register-container'>
                <div className='screen-div3'>
                    <div className="mt-10">
                        <div className="input-label">店舗名<span className='require-label'>*</span></div>
                        <div className="input-value">
                            <Select
                                onChange={(e) => handleShopChange(e.target.value)}
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
                    {/* <div className="mt-10">
                        <div className="input-label">来店経緯</div>
                        <div className="input-value">
                            <TextInput
                                type="text"
                                name="type"
                                value={type}
                                className="mt-1 block w-full w-100-pro"
                                disabled
                            />
                        </div>
                    </div> */}
                    <div className="mt-10">
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
                    <div className="mt-10">
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
                    <div className='flex-left'>
                        <div className="mt-10">
                            <div className="input-label">生年月日<span className='require-label'>*</span></div>
                            <div className="input-value">
                                <DateInput
                                    className="shop-select"
                                    onChange={(e) => setBirthday(e)}
                                />
                            </div>
                        </div>
                        <div className="mt-10" style={{ width: '33%' }}>
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
                    </div>
                    <div className="mt-10">
                        <div className="input-label">電話番号(自宅)<span className='require-label'>*</span></div>
                        <div className="input-value">
                            <PhoneInput
                                id="phone"
                                name="phone"
                                className="mt-1 block w-full w-100-pro"
                                placeholder='電話番号'
                                onChange={(e) => setPhoneNumber1(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="mt-10">
                        <div className="input-label">電話番号(携帯)<span className='require-label'>*</span></div>
                        <div className="input-value">
                            <PhoneInput
                                id="phone"
                                name="phone"
                                className="mt-1 block w-full w-100-pro"
                                placeholder='電話番号'
                                onChange={(e) => setPhoneNumber2(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="mt-10">
                        <div className="input-label">職業<span className='require-label'>*</span></div>
                        <div className="input-value">
                            <Select
                                onChange={(e) => setJob(e.target.value)}
                                displayEmpty
                                className="shop-select"
                                size='small'
                            >
                                {jobList.map((item, key) => (
                                    <MenuItem value={key} key={key}>{item}</MenuItem>
                                ))}
                            </Select>
                        </div>
                    </div>
                </div>
                <div className='screen-div3'>
                    <div className="mt-10">
                        <div className="input-label">郵便番号<span className='require-label'>*</span></div>
                        <div className="input-value flex-left">
                            <ZipcodeInput
                                onChange={(e) => handleZipCode(e)}
                            />
                            <Button
                                loading
                                textLoading="Waiting"
                                type="submit"
                                color="outline-secondary"
                                title="住所検索"
                                onClick={handleSearchAddressClick}
                            />
                        </div>
                    </div>
                    <div className="mt-10">
                        <div className="input-label">都道府県<span className='require-label'>*</span></div>
                        <div className="input-value">
                            <Select
                                onChange={handleChangeAddress1}
                                className="shop-select"
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
                    <div className="mt-10">
                        <div className="input-label">市町村<span className='require-label'>*</span></div>
                        <div className="input-value">
                            <Select
                                onChange={handleChangeAddress2}
                                className="shop-select"
                                size='small'
                                value={address2 ? address2 : 0}
                            >
                                {filteredCities.map((item, key) => (
                                    <MenuItem value={item.id} key={key}>{item.name}</MenuItem>
                                ))}
                            </Select>
                        </div>
                    </div>
                    <div className="mt-10">
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
                    <div className="mt-10">
                        <div className="input-label">本人確認書類<span className='require-label'>*</span></div>
                        <div className="input-value">
                            <div className='flex-left'>
                                <div>
                                    <div><AddIcon className='add-icon' onClick={handleAddIdentification} /></div>
                                </div>
                                <div>
                                    <div className='flex-left'>
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
                                            <input type="file" id={`doc_1`} className='hidden' onChange={(e) => handleFileChange(e, 1)} accept='.jpg,.jpeg,.png,.pdf' />
                                            <ImageIcon className='file-icon' />
                                        </label>
                                        <CameraAltIcon className='file-icon camera-icon' onClick={handleCameraCaptureDialogOpen1} />
                                        <DeleteIcon className='file-icon camera-icon' onClick={(e) => handleDeleteFile(e, 1)} />
                                        <div className="flex-center image-show-btn" onClick={handleIdentificationPreview1}>画像と情報表示</div>
                                    </div>
                                    {isVisible && (
                                        <div className='flex-left'>
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
                                                <input type="file" id={`doc_2`} className='hidden' onChange={(e) => handleFileChange(e, 2)} accept='.jpg,.jpeg,.png,.pdf' />
                                                <ImageIcon className='file-icon' />
                                            </label>
                                            <CameraAltIcon className='file-icon camera-icon' onClick={handleCameraCaptureDialogOpen2} />
                                            <DeleteIcon className='file-icon camera-icon' onClick={(e) => handleDeleteFile(e, 2)} />
                                            <div className="flex-center image-show-btn" onClick={handleIdentificationPreview2}>画像と情報表示</div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-10">
                        <div className="input-label">特記事項<span className='require-label'>*</span></div>
                        <div className="input-value">
                            <textarea
                                rows={10}
                                variant="outlined"
                                className='customer-business rounded w-full border-gray-300 hover:border-sky-600'
                                onChange={(e) => setNote(e.target.value)}
                            />
                        </div>
                    </div>
                </div>
                <div className='screen-div3'>
                    <div className="mt-10">
                        <div className="input-label">全体ヒアリング<span className='require-label'>*</span></div>
                        <div className="hearing-container" style={{ height: '550px' }}>
                            <div>
                                <div className="input-label">来店経緯<span className='require-label'>*</span></div>
                                <div className='ml-10'>
                                    <label className='flex-left custom-radio-label'>
                                        <input
                                            type="radio"
                                            name="hearing_item1"
                                            onChange={() => handleHearingItem1IdChange(1)}
                                        />
                                        以前も利用したことがある
                                    </label>
                                </div>
                                <div className='ml-10'>
                                    <label className='flex-left custom-radio-label'>
                                        <input
                                            type="radio"
                                            name="hearing_item1"
                                            onChange={() => handleHearingItem1IdChange(2)}
                                        />
                                        店舗を見て
                                    </label>
                                </div>
                                <div className='ml-10'>
                                    <label className='flex-left custom-radio-label'>
                                        <input
                                            type="radio"
                                            name="hearing_item1"
                                            onChange={() => handleHearingItem1IdChange(3)}
                                        />
                                        店舗以外の看板・広告を見て
                                    </label>
                                    <div className='flex-left' style={{ marginLeft: '20px' }}>
                                        <label className='mt-1 custom-radio-label'>(</label>
                                        <TextInput
                                            type="text"
                                            name="hearing_item2"
                                            className="free-input w-100 block"
                                            onChange={(e) => handleHearingItem1ValueChange(e.target.value)}
                                            placeholder="場所"
                                            disabled={hearingItem1Id != 3}
                                        />
                                        <label className='mt-1 custom-radio-label'>)の場所で見ました</label>
                                    </div>
                                </div>
                                <div className='ml-10 mt-10'>
                                    <label className='flex-left custom-radio-label'>
                                        <input
                                            type="radio"
                                            name="hearing_item1"
                                            onChange={() => handleHearingItem1IdChange(4)}
                                        />
                                        折込チラシを見て
                                        {
                                            hearingItem1Id == 4 && (
                                                <Select
                                                    onChange={handleHearingItem1SelectValueChange}
                                                    className="hearing-select"
                                                    size='small'
                                                >
                                                    {hearingNews.map((item, key) => (
                                                        <MenuItem value={key} key={key}>{item}</MenuItem>
                                                    ))}
                                                </Select>
                                            )
                                        }
                                    </label>
                                </div>
                                <div className='ml-10'>
                                    <label className='flex-left custom-radio-label'>
                                        <input
                                            type="radio"
                                            name="hearing_item1"
                                            onChange={() => handleHearingItem1IdChange(5)}
                                        />
                                        インターネットを見て
                                        {
                                            hearingItem1Id == 5 && (
                                                <Select
                                                    onChange={handleHearingItem1SelectValueChange}
                                                    className="hearing-select"
                                                    size='small'
                                                >
                                                    {hearingInternet.map((item, key) => (
                                                        <MenuItem value={key} key={key}>{item}</MenuItem>
                                                    ))}
                                                </Select>
                                            )
                                        }
                                    </label>
                                </div>
                                <div className='ml-10'>
                                    <label className='flex-left custom-radio-label'>
                                        <input
                                            type="radio"
                                            name="hearing_item1"
                                            onChange={() => handleHearingItem1IdChange(6)}
                                        />
                                        紹介されて
                                        <label className='mt-1'>(</label>
                                        <TextInput
                                            type="text"
                                            name="hearing_item2"
                                            className="free-input w-100 block"
                                            onChange={(e) => handleHearingItem1ValueChange(e.target.value)}
                                            disabled={hearingItem1Id != 6}
                                        />
                                        <label className='mt-1'>)</label>
                                    </label>
                                </div>
                                <div className='ml-10'>
                                    <label className='flex-left custom-radio-label'>
                                        <input
                                            type="radio"
                                            name="hearing_item1"
                                            onChange={() => handleHearingItem1IdChange(7)}
                                        />
                                        その他
                                        <TextInput
                                            type="text"
                                            name="hearing_item2"
                                            className="free-input block"
                                            onChange={(e) => handleHearingItem1ValueChange(e.target.value)}
                                            disabled={hearingItem1Id != 7}
                                        />
                                    </label>
                                </div>
                                <div className="mt-10">
                                    <div className="input-label">よく買取店に行かれるんですか？<span className='require-label'>*</span></div>
                                    <div className="input-value">
                                        <TextInput
                                            type="text"
                                            name="hearing_item2"
                                            className="mt-1 ml-10 block w-full w-100-pro"
                                            onChange={(e) => handleHearingItem2ValueChange(e.target.value)}
                                        />
                                    </div>
                                </div>
                                <div className='mt-10 ml-10'>
                                    <label className='flex-left custom-radio-label'>
                                        <input
                                            type="checkbox"
                                            name="hearing_line"
                                            onChange={(e) => handleHearingLineChange(e)}
                                        />
                                        LINEお友達登録したか？
                                    </label>
                                </div>
                                <div className='mt-10 ml-10'>
                                    <label className='flex-left custom-radio-label'>
                                        <input
                                            type="checkbox"
                                            name="hearing_google"
                                            onChange={(e) => handleHearingGoogleChange(e)}
                                        />
                                        Googleロコミしたか？
                                    </label>
                                </div>
                                <div className="mt-10 ml-10">
                                    <div className="input-label">ノベルティーを何を渡したか？</div>
                                    <div className="input-value">
                                        <Select
                                            onChange={handleHearingGiftChange}
                                            className="hearing-select w-100-pro"
                                            size='small'
                                        >
                                            {gifts.map((item, key) => (
                                                <MenuItem value={key} key={key}>{item}</MenuItem>
                                            ))}
                                        </Select>
                                    </div>
                                </div>
                                <div className="mt-10 ml-10">
                                    <div className="input-label">クーポンのご利用はあったか？</div>
                                    <div className="input-value">
                                        <Select
                                            onChange={handleHearingCouponChange}
                                            className="hearing-select w-100-pro"
                                            size='small'
                                        >
                                            {coupons.map((item, key) => (
                                                <MenuItem value={key} key={key}>{item}</MenuItem>
                                            ))}
                                        </Select>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex-center'
                style={{
                    marginTop: '50px',
                    gap: '100px'
                }}>
                <div
                    className="cancel-btn"
                    onClick={handleCancelClick}
                >キャンセル</div>
                <div
                    className="register-btn"
                    onClick={handleSaveCustomerClick}
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
            <div className='hidden'>
                <div>
                    <video ref={videoRef} autoPlay playsInline style={{ width: '100%', height: 'auto' }} />
                </div>

                <button onClick={captureImage}>Capture Image</button>

                {/* Hidden Canvas to Draw Image */}
                <canvas ref={canvasRef} style={{ display: 'none' }} />

                {/* Display Captured Image */}
                {imageSrc && (
                    <div>
                        <h3>Captured Image:</h3>
                        <img src={imageSrc} alt="Captured" style={{ maxWidth: '100%' }} />
                    </div>
                )}

                {/* Display OCR Result */}
                {isProcessing ? (
                    <p>Processing...</p>
                ) : (
                    <div>
                        <h3>OCR Result:</h3>
                        <p>{ocrResult}</p>
                    </div>
                )}
            </div>
            <div className='hidden'>
                <h1>OCR from Image</h1>

                <input type="file" accept="image/*" onChange={handleImageChange} />

                {/* Display Image Preview */}
                {imageSrc && (
                    <div>
                        <h3>Image Preview:</h3>
                        <img src={imageSrc} alt="Selected" style={{ maxWidth: '100%' }} />
                    </div>
                )}

                {/* Display OCR Result */}
                {isProcessing ? (
                    <p>Processing...</p>
                ) : (
                    <div>
                        <h3>OCR Result:</h3>
                        <p>{ocrResult}</p>
                    </div>
                )}
            </div>
            <div>
                <Dialog
                    open={openRegisterPreview}
                    className='register-preview'
                >
                    <div className='flex-center'>
                        <div className='screen-div2'>
                            <div className='flex-center'>
                                <label>店舗名:</label>
                                <label>{shops[shop - 1]?.name}</label>
                            </div>
                            <div className='flex-center'>
                                <label>来店経緯:</label>
                                <label>{type}</label>
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
                                <label>電話番号(自宅):</label>
                                <label>{phoneNumber1}</label>
                            </div>
                            <div className='flex-center'>
                                <label>電話番号(携帯):</label>
                                <label>{phoneNumber2}</label>
                            </div>
                        </div>
                        <div className='screen-div2'>
                            <div className='flex-center'>
                                <label>職業:</label>
                                <label>{jobList[job]}</label>
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
                            <div className='flex-center'>
                                <label>性別:</label>
                                <label>{gender == 1 ? "男" : "女"}</label>
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
                        </div>
                    </div>
                    <div className="mt-10">
                        <div className="input-label">特記事項</div>
                        <div className="input-value">
                            <textarea
                                rows={10}
                                variant="outlined"
                                value={note ? note : ""}
                                className='customer-business rounded w-full border-gray-300 hover:border-sky-600'
                                disabled
                            />
                        </div>
                    </div>
                    <div className="input-label mt-10">全体ヒアリング</div>
                    <div className="hearing-container" style={{ height: '200px' }}>
                        <div>
                            <div className="input-label">来店経緯</div>
                            <div className='ml-10'>
                                <label className='flex-left custom-radio-label'>
                                    {hearingItem1}
                                </label>
                            </div>
                            <div className="mt-10">
                                <div className="input-label">よく買取店に行かれるんですか？</div>
                                <div className="input-value">
                                    <label className='flex-left custom-radio-label ml-10'>
                                        {hearingItem2Value}
                                    </label>
                                </div>
                            </div>
                            {
                                hearingLine &&
                                <div className='mt-10 ml-10'>
                                    <label className='flex-left custom-radio-label'>
                                        <input
                                            type="checkbox"
                                            name="hearing_line"
                                            checked={hearingLine}
                                            disabled
                                        />
                                        LINEお友達登録したか？
                                    </label>
                                </div>
                            }
                            {
                                hearingGoogle == 1 &&
                                <div className='mt-10 ml-10'>
                                    <label className='flex-left custom-radio-label'>
                                        <input
                                            type="checkbox"
                                            name="hearing_google"
                                            checked={hearingGoogle}
                                            disabled
                                        />
                                        Googleロコミしたか？
                                    </label>
                                </div>
                            }
                            {
                                hearingGift >= 0 &&
                                <div className="mt-10 ml-10">
                                    <div className="input-label">ノベルティーを何を渡したか？</div>
                                    <div className="input-value">
                                        <label className='flex-left custom-radio-label'>
                                            {gifts[hearingGift]}
                                        </label>
                                    </div>
                                </div>
                            }
                            {
                                hearingCoupon >= 0 &&
                                <div className="mt-10 ml-10">
                                    <div className="input-label">クーポンのご利用はあったか？</div>
                                    <div className="input-value">
                                        <label className='flex-left custom-radio-label'>
                                            {coupons[hearingCoupon]}
                                        </label>
                                    </div>
                                </div>
                            }
                        </div>
                    </div>
                    <div className='flex-center mt-10'>
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
export default withRouter(FormCustomerRegister);
