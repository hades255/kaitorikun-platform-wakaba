import { useContext, useState, useEffect, useRef } from 'react';
import {
    React,
    Button,
    multiPostData,
    previewThumbnail,
    getData,
    postData,
    getItem,
    ToastNotification,
    useDispatch
} from "../../../../components";
import PhoneInput from "../../../../components/PhoneInput";
import DateInput from "../../../../components/DateInput";
import DateTimeInput from "../../../../components/DateTimeInput";
import TextInput from '../../../../components/TextInput';
import DataContext from '../../../../components/DataContext';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import AddIcon from '@mui/icons-material/Add';
import ImageIcon from '@mui/icons-material/Image';
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import { Dialog, DialogTitle, DialogContent, DialogActions } from "@mui/material";
import { pdfjs, Document, Page } from "react-pdf";
import { withRouter } from "react-router-dom";
import ZipcodeInput from "../../../../components/ZipcodeInput";
import { utilityAction } from "../../../../reduxStore";
import Tesseract from 'tesseract.js';
import TablePurchaseVisitShop from '../../../purchase-manage/register/table';
import LeaveItemsDialog from '../../../purchase-manage/register/leave-items';
import AddItemsDialog from '../../../purchase-manage/register/add-items';
import SummaryItemsDialog from '../../../purchase-manage/register/summary';
import CameraCaptureDialog from '../../../purchase-manage/register/camera';
import TableVisitShopHistory from '../../../customer-manage/edit/table';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import moment from 'moment';
moment.locale("ja");

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

let FormPurchaseCustomer = (props) => {
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
    const [documentType, setDocumentType] = useState()
    const [documentFile, setDocumentFile] = useState()
    const [note, setNote] = useState()
    const [checkPlanDate, setCheckPlanDate] = useState()
    const [hearingItem1, setHearingItem1] = useState()
    const [hearingItem2, setHearingItem2] = useState()
    const [hearingLine, setHearingLine] = useState()
    const [hearingGoogle, setHearingGoogle] = useState()
    const [hearingCoupon, setHearingCoupon] = useState()
    const [hearingGift, setHearingGift] = useState()
    const [requestPayment, setRequestPayment] = useState(false)
    const [wholePaymentAgree, setWholePaymentAgree] = useState(false)
    const [summaryFlag, setSummaryFlag] = useState(false)
    const [cameraCaptureType, setCameraCaptureType] = useState()
    const [historyPurchases, setHistoryPurchases] = useState([]);
    const [historyItems, setHistoryItems] = useState([]);

    const [shops, setShops] = useState([])
    const [prefectures, setPrefectures] = useState([])
    const [cities, setCities] = useState([])
    const [filteredCities, setFilteredCities] = useState([])
    const [categories1, setCategories1] = useState([])
    const [categories2, setCategories2] = useState([])
    const [categories3, setCategories3] = useState([])
    const [categories4, setCategories4] = useState([])
    const [categories5, setCategories5] = useState([])
    const [categories6, setCategories6] = useState([])
    const [openImagePreview, setOpenImagePreview] = useState(false)
    const [openCameraPreview, setOpenCameraPreview] = useState(false)
    const [openPdfPreview, setOpenPdfPreview] = useState(false)
    const [previewImage, setPreviewImage] = useState("")
    const [previewPdf, setPreviewPdf] = useState("")
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);
    const dispatch = useDispatch();

    const [purchaseId, setPurchaseId] = useState(0)

    const [items, setItems] = useState([]);
    const [openAddItemDialog, setOpenAddItemDialog] = useState(false);
    const [leaveItemDeadline, setLeaveItemDeadline] = useState();
    const [leaveItemDate, setLeaveItemDate] = useState();
    const [openImageSlider, setOpenImageSlider] = useState(false)
    const [selectedIndex, setSelectedIndex] = useState([]);
    const [selectedItems, setSelectedItems] = useState([]);
    const [openLeaveItemDialog, setOpenLeaveItemDialog] = useState(false);
    const [openHearingDialog, setOpenHearingDialog] = useState(false)
    const [openStatusDialog, setOpenStatusDialog] = useState(false)
    const [selectedItemHearingValue1, setSelectedItemHearingValue1] = useState()
    const [selectedItemHearingValue2, setSelectedItemHearingValue2] = useState()
    const [selectedItemHearingValue3, setSelectedItemHearingValue3] = useState()
    const [selectedItemHearingValue4, setSelectedItemHearingValue4] = useState()
    const [openSummaryItemDialog, setOpenSummaryItemDialog] = useState(false);
    const [selectedItemImages, setSelectedItemImages] = useState([]);

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
    const results = ["買取", "不正約", "預り", "返品"];
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
                setCategories1(data.categories1);
                setCategories2(data.categories2);
                setCategories3(data.categories3);
                setCategories4(data.categories4);
                setCategories5(data.categories5);
                setCategories6(data.categories6);
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

    const getPurchaseData = async () => {
        const formData = new FormData();
        formData.append("id", 1);
        let result = await postData("customer/list", formData)
        if (result.status === 200) {
            let data = result.data;
            console.log(data);
            const customerData = data.customer
            if (customerData.shop_id != 0) {
                setShop(customerData.shop_id)
            }
            if (customerData.address1 != 0) {
                setAddress1(customerData.address1);
            }
            if (customerData.address2 != 0) {
                setAddress2(customerData.address2);
            }
            if (customerData.address3) {
                setAddress3(customerData.address3)
            }
            if (customerData.identification_id1) {
                setIdentificationId1(customerData.identification_id1);
                setIdentificationType1(customerData.identification_type1);
                setIdentificationFile1(customerData.identification_path1);
            }

            if (customerData.birthday) {
                setBirthday(customerData.birthday)
            }
            if (customerData.document_path) {
                setDocumentFile(customerData.document_path)
            }
            if (customerData.gender) {
                setGender(customerData.gender)
            }
            if (customerData.identification_id1) {
                setIdentificationId1(customerData.identification_id1)
                setIdentificationType1(customerData.identification_type1)
                setIdentificationFile1(customerData.identification_path1)
            }
            if (customerData.identification_id2) {
                setIdentificationId2(customerData.identification_id2)
                setIdentificationType2(customerData.identification_type2)
                setIdentificationFile2(customerData.identification_path2)
                setIsVisible(true)
            }
            if (customerData.job != 0) {
                setJob(customerData.job)
            }
            if (customerData.name) {
                setName(customerData.name)
            }
            if (customerData.name_kana) {
                setNameKana(customerData.name_kana)
            }
            if (customerData.note) {
                setNote(customerData.note)
            }
            if (customerData.phone_number1) {
                setPhoneNumber1(customerData.phone_number1)
            }
            if (customerData.phone_number2) {
                setPhoneNumber2(customerData.phone_number2)
            }
            if (customerData.zipcode) {
                setZipCode(customerData.zipcode)
            }
            setType('顧客');
            switch (customerData.hearing_item1_id) {
                case 1:
                    setHearingItem1('以前も利用したことがある')
                    break;
                case 2:
                    setHearingItem1('店舗を見て')
                    break;
                case 3:
                    setHearingItem1('店舗以外の看板・広告を見て ' + customerData.hearing_item1_value + 'の場所で見ました')
                    break;
                case 4:
                    setHearingItem1('折込チラシを見て ' + hearingNews[customerData.hearing_item1_value])
                    break;
                case 5:
                    setHearingItem1('インターネットを見て ' + hearingInternet[customerData.hearing_item1_value])
                    break;
                case 6:
                    setHearingItem1('紹介されて ' + customerData.hearing_item1_value)
                    break;
                case 7:
                    setHearingItem1('その他 ' + customerData.hearing_item1_value)
                    break;

                default:
                    break;
            }
            setHearingItem2(customerData.hearing_item2_value)
            setHearingLine(customerData.hearing_line)
            setHearingGoogle(customerData.hearing_google)
            setHearingCoupon(customerData.hearing_coupon)
            setHearingGift(customerData.hearing_gift)

            setHistoryPurchases(data.purchases);
            setHistoryItems(data.items);
        }
    };

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
        console.log(index);
        const file = e.target.files[0]
        if (index == 1) {
            setIdentificationType1(file.type);
            setIdentificationFile1(file);
        } else if (index == 2) {
            setIdentificationType2(file.type);
            setIdentificationFile2(file);
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
        if (typeof file === "string") {
            setPreviewImage(file)
        } else {
            const previewImage = await previewThumbnail(file)
            setPreviewImage(previewImage)
        }
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

    const handleCapturedItemImageDialog = () => {
        setCameraCaptureType("item")
        setOpenImageSlider(false)
        setOpenCameraPreview(true)
    }

    const handleCameraPreviewClose = () => {
        setOpenCameraPreview(false)
    }

    const handleCapturedImage = (type, image) => { // base64
        setOpenCameraPreview(false)
        const file = base64ToFile(image, moment().format('YYYYMMDDHHmmss'))
        console.log(file.type);

        if (type == "passport1") {
            setIdentificationType1(file.type);
            setIdentificationFile1(file);
        } else if (type == "passport2") {
            setIdentificationType2(file.type);
            setIdentificationFile2(file);
        } else if (type == "item") {
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
        } else { // 紙書類
            setDocumentType(file.type);
            setDocumentFile(file);
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

    const handleHearingDialogClose = () => {
        setOpenHearingDialog(false)
    }

    const handleStatusDialogClose = () => {
        setOpenStatusDialog(false)
    }

    const handleAddItemsClose = () => {
        setOpenAddItemDialog(false)
    }

    const handleSummaryItemsClose = () => {
        setOpenSummaryItemDialog(false)
    }

    const handleSummaryItems = () => {
        setOpenSummaryItemDialog(false)
    }

    const handleLeaveItemsDialogClose = () => {
        setOpenLeaveItemDialog(false)
    }

    const handleLeaveItemsConfirm = () => {
        setItems(items.map(item =>
            selectedItems.includes(item)
                ? { ...item, agree: 6, leave_deadline_date: leaveItemDeadline }
                : item
        ));
        setOpenLeaveItemDialog(false)
        setLeaveItemDate(leaveItemDeadline)
    }

    const handleAddItems = (data) => {
        setItems(prevItems => [...prevItems, ...data]);
        setOpenAddItemDialog(false)
    }

    const handleImageSliderClose = () => {
        setOpenImageSlider(false)
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

    const handleAddItemsClick = () => {
        setOpenAddItemDialog(true)
    }

    const handleLeaveItemsClick = () => {
        // check validate
        if (leaveItemDeadline === undefined) {
            ToastNotification("error", "お預かり期限は必須です。");
            return;
        }
        if (name === undefined) {
            ToastNotification("error", "名前は必須です。");
            return;
        }
        if (phoneNumber1 === undefined && phoneNumber2 === undefined) {
            ToastNotification("error", "電話番号は必須です。");
            return;
        }
        const selectedItems = getSelectedItems()
        if (selectedItems.length <= 0) {
            alert("現在、選択されている商品はありません。");
            return;
        }
        setSelectedItems(selectedItems);
        setOpenLeaveItemDialog(true)
    }

    const handleWholeItemImageClick = () => {
        let images = []
        items.forEach(item => {
            if (item.image_files.length > 0) {
                item.image_files.forEach(image => { // base64
                    images.push(image)
                });
            }
        });
        setSelectedItemImages(images)
        setSelectedIndex(null)
        setOpenImageSlider(true)
    }

    const handleDocumentImageClick = () => {
        setCameraCaptureType("document")
        setOpenCameraPreview(true)
    }

    const handleRequestPaymentClick = () => {
        if (window.confirm("決済の申請を行ってもよろしいでしょうか？")) {
            setRequestPayment(true)
        } else {
        }
    }

    const handleWholePaymentAgreeClick = () => {
        if (window.confirm("決裁を全て許可してもよろしいでしょうか？")) {
            setWholePaymentAgree(true)
        } else {
        }
    }

    const handleCategorySummaryClick = () => {
        setOpenSummaryItemDialog(true)
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

    const handleAgreeItemsClick = () => {
        if (window.confirm("一括許可してもよろしいですか？")) {
            setItems(items.map(item => ({ ...item, agree: 2 })));
        } else {
        }
    }

    const handleStatusItemsClick = () => {
        if (window.confirm("一括でステータスを変更してもよろしいですか？")) {
            setOpenStatusDialog(true)
        } else {
        }
    }

    const handleStampSheetClick = () => {
        const selectedItems = items.filter(item => item.category1 === '切手')
        if (selectedItems.length <= 0) {
            alert("切手として選択されたカテゴリー1は存在しません。");
            return;
        }
        if (window.confirm("切手査定シートに遷移してもよろしいですか？")) {
        } else {
        }
    }

    const handleResultSelectChange = (value) => {
        setItems(items.map(item => ({ ...item, result: value })));
    };

    const handleToCustomerPageClick = async () => {
        // check validate
        if (name === undefined) {
            ToastNotification("error", "名前は必須です。");
            return;
        }
        if (phoneNumber1 === undefined && phoneNumber2 === undefined) {
            ToastNotification("error", "電話番号は必須です。");
            return;
        }
        if (checkPlanDate === undefined) {
            ToastNotification("error", "査定完了予定日時は必須です。");
            return;
        }
        if (items.length == 0) {
            ToastNotification("error", "商品は必須です。");
            return;
        }
        let requestPriceCheck = true
        for (let i = 0; i < items.length; i++) {
            const item = items[i];
            if (item.request_price > 0 && item.highest_check_price > 0) {
                requestPriceCheck = true
            } else {
                requestPriceCheck = false
                ToastNotification("error", "最高査定額と申請額は必須です。");
                return;
            }
        }
        if (!requestPriceCheck) {
            ToastNotification("error", "最高査定額と申請額は必須です。");
            return;
        }
        if (!requestPayment) {
            ToastNotification("error", "決済の申請は必須です。");
            return;
        }
        if (!wholePaymentAgree) {
            ToastNotification("error", "全て決済を許可は必須です。");
            return;
        }

        dispatch(utilityAction.setLoading("content"));
        try {
            const formData = new FormData();
            if (shop !== undefined) {
                formData.append("shop_id", shop);
            }
            if (type !== undefined) {
                formData.append("type", type);
            }
            formData.append("name", name);
            if (nameKana !== undefined) {
                formData.append("name_kana", nameKana);
            }
            if (phoneNumber1 !== undefined) {
                formData.append("phone_number1", phoneNumber1);
            }
            if (phoneNumber2 !== undefined) {
                formData.append("phone_number2", phoneNumber2);
            }
            if (birthday !== undefined) {
                formData.append("birthday", birthday);
            }
            if (gender !== undefined) {
                formData.append("gender", gender);
            }
            if (zipCode !== undefined) {
                formData.append("zipcode", zipCode);
            }
            if (job !== undefined) {
                formData.append("job", job);
            }
            if (address1 !== undefined) {
                formData.append("address1", address1);
            }
            if (address2 !== undefined) {
                formData.append("address2", address2);
            }
            if (address3 !== undefined) {
                formData.append("address3", address3);
            }
            if (identificationId1 !== undefined && identificationType1 !== undefined) {
                formData.append("identification_id1", identificationId1);
                formData.append("identification_type1", identificationType1);
                if (typeof identificationFile1 !== "string") {
                    formData.append("files[]", identificationFile1);
                }
            }
            if (identificationId2 !== undefined && identificationType2 !== undefined) {
                formData.append("identification_id2", identificationId2);
                formData.append("identification_type2", identificationType2);
                if (typeof identificationFile1 !== "string") {
                    formData.append("files[]", identificationFile2);
                }
            }
            if (note !== undefined) {
                formData.append("note", note);
            }

            formData.append("purchase_id", purchaseId);
            formData.append("payment_officer_id", getItem("userdata").id);
            formData.append("service_officer_id", getItem("userdata").id);
            formData.append("check_plan_date", checkPlanDate);
            if (documentType !== undefined) {
                formData.append("document_type", documentType);
                formData.append("files[]", documentFile);
            }
            formData.append("status", 2);
            setItems(items.map(item => ({ ...item, image_files: JSON.stringify(item.image_files) })));
            items.forEach(item => formData.append("items[]", JSON.stringify(item)));

            if (window.confirm("お客様提示画面に遷移してもよろしいですか？")) {
                let feedback = await multiPostData("purchase/update", formData)
                if (feedback.status === 200) {
                    props.history.push("/purchase/contract", { pathname: "/purchase/contract", id: purchaseId });
                }
            } else {
            }

            dispatch(utilityAction.stopLoading());
        } catch (error) {
            console.log(error)
            ToastNotification("error", error?.message);
            dispatch(utilityAction.stopLoading());
        }
    };

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

    const handleItemNameClick = (id) => {
        setSelectedIndex(id)
        let selectedItem = items.filter(item => item.id === id)
        setSelectedItemHearingValue1(selectedItem[0].hearing_value1 ? selectedItem[0].hearing_value1 : "")
        setSelectedItemHearingValue2(selectedItem[0].hearing_value2 ? selectedItem[0].hearing_value2 : "")
        setSelectedItemHearingValue3(selectedItem[0].hearing_value3 ? selectedItem[0].hearing_value3 : "")
        setSelectedItemHearingValue4(selectedItem[0].hearing_value4 ? selectedItem[0].hearing_value4 : "")
        setOpenHearingDialog(true)
    }

    const handleItemHearing1ValueChange = (e) => {
        console.log(e);
        setSelectedItemHearingValue1(e)
        setItems((prevData) =>
            prevData.map((row) => (row.id === selectedIndex ? { ...row, hearing_value1: e } : row))
        );
    };

    const handleItemHearing2ValueChange = (e) => {
        setSelectedItemHearingValue2(e)
        setItems((prevData) =>
            prevData.map((row) => (row.id === selectedIndex ? { ...row, hearing_value2: e } : row))
        );
    };

    const handleItemHearing3ValueChange = (e) => {
        setSelectedItemHearingValue3(e)
        setItems((prevData) =>
            prevData.map((row) => (row.id === selectedIndex ? { ...row, hearing_value3: e } : row))
        );
    };

    const handleItemHearing4ValueChange = (e) => {
        setSelectedItemHearingValue4(e)
        setItems((prevData) =>
            prevData.map((row) => (row.id === selectedIndex ? { ...row, hearing_value4: e } : row))
        );
    };

    const handleItemImagesClick = (id) => {
        setSelectedIndex(id)
        let selectedItem = items.filter(item => item.id === id)
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
    }

    const handleSelectPurchase = (id) => {
        props.history.push("/purchase/edit", { pathname: "/purchase/edit", id: id });
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
            <div style={{ position: 'relative' }}>
                <div className='flex-left' style={{ alignItems: 'baseline' }}>
                    <label className='flex-right'>No.<div>{purchaseId.toString().padStart(6, '0')}</div></label>
                    <div>
                        <label className='flex-right' style={{ marginBottom: '0px' }}>支払い担当<div>{getItem("userdata").name}</div></label>
                        <label className='flex-right'>接客担当<div>{getItem("userdata").name}</div></label>
                    </div>
                </div>
                <div className='customer-header-name'>
                    <label className='flex-right'>来店時間<div>{moment().format('YYYY/MM/DD(ddd) HH:mm')}</div></label>
                    {leaveItemDate && (<label className='flex-right'>お預かり日時<div>{moment(leaveItemDate).format('YYYY/MM/DD(ddd)')}</div></label>)}
                </div>
            </div>
            <div className='purchase-register-container'>
                <div className='screen-div3'>
                    <div className='flex-base'>
                        <Button
                            loading
                            textLoading="Waiting"
                            type="submit"
                            color="danger"
                            title="顧客読み込み"
                            onClick={getPurchaseData}
                        />
                        <div>期限</div>
                        <DateInput
                            className="shop-select"
                            onChange={(e) => setLeaveItemDeadline(e)}
                        />
                        <div>で</div>
                        <Button
                            loading
                            textLoading="Waiting"
                            type="submit"
                            color="secondary"
                            title="お預かり証発行"
                            onClick={handleLeaveItemsClick}
                        />
                    </div>
                </div>
                <div className='screen-div3' style={{ gap: '20px' }}>
                    <div className='flex-base'>
                        <Button
                            loading
                            textLoading="Waiting"
                            type="submit"
                            color="success"
                            title="全体撮影一覧"
                            onClick={handleWholeItemImageClick}
                        />
                        <Button
                            loading
                            textLoading="Waiting"
                            type="submit"
                            color="info"
                            title="紙書類撮影"
                            onClick={handleDocumentImageClick}
                        />
                        <Button
                            loading
                            textLoading="Waiting"
                            type="submit"
                            color="warning"
                            title="決済申請"
                            onClick={handleRequestPaymentClick}
                        />
                        <Button
                            loading
                            textLoading="Waiting"
                            type="submit"
                            color="outline-secondary"
                            title="全て決裁を許可"
                            onClick={handleWholePaymentAgreeClick}
                        />
                    </div>
                </div>
                <div className='screen-div3'>
                    <div className='flex-base'>
                        <Button
                            loading
                            textLoading="Waiting"
                            type="submit"
                            color="secondary"
                            title="カテゴリーまとめ"
                            onClick={handleCategorySummaryClick}
                        />
                        <Button
                            loading
                            textLoading="Waiting"
                            type="submit"
                            color="primary"
                            title="お客様提示画面"
                            onClick={handleToCustomerPageClick}
                        />
                    </div>
                </div>
            </div>
            <div className='purchase-register-container'>
                <div className='screen-div2 purchase-register-container'>
                    <div className='screen-div2'>
                        <div className="mt-5">
                            <div className="input-label">店舗名</div>
                            <div className="input-value">
                                <Select
                                    onChange={(e) => handleShopChange(e.target.value)}
                                    displayEmpty
                                    className="shop-select"
                                    value={shop ? shop : 0}
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
                        </div>
                        <div className="mt-5">
                            <div className="input-label">名前</div>
                            <div className="input-value">
                                <TextInput
                                    id="name"
                                    type="text"
                                    name="name"
                                    value={name ? name : ""}
                                    className="mt-1 block w-full w-100-pro"
                                    onChange={(e) => setName(e.target.value)}
                                    required
                                    placeholder="名前"
                                />
                            </div>
                        </div>
                        <div className="mt-5">
                            <div className="input-label">カタカナ名</div>
                            <div className="input-value">
                                <TextInput
                                    id="name_kana"
                                    type="text"
                                    name="name_kana"
                                    value={nameKana ? nameKana : ""}
                                    className="mt-1 block w-full w-100-pro"
                                    onChange={(e) => setNameKana(e.target.value)}
                                    required
                                    placeholder="カタカナ名"
                                />
                            </div>
                        </div>
                        <div className='flex-left'>
                            <div className="mt-5">
                                <div className="input-label">生年月日</div>
                                <div className="input-value">
                                    <DateInput
                                        value={birthday ? birthday : 0}
                                        className="shop-select"
                                        onChange={(e) => setBirthday(e)}
                                    />
                                </div>
                            </div>
                            <div className="mt-5" style={{ width: '33%' }}>
                                <div className="input-label">性別</div>
                                <div className="input-value">
                                    <Select
                                        value={gender ? gender : 0}
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
                    </div>
                    <div className='screen-div2'>
                        <div className="mt-5">
                            <div className="input-label">電話番号(自宅)</div>
                            <div className="input-value">
                                <PhoneInput
                                    id="phone"
                                    name="phone"
                                    value={phoneNumber1 ? phoneNumber1 : ""}
                                    className="mt-1 block w-full w-100-pro"
                                    placeholder='電話番号'
                                    onChange={(e) => setPhoneNumber1(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="mt-5">
                            <div className="input-label">電話番号(携帯)</div>
                            <div className="input-value">
                                <PhoneInput
                                    id="phone"
                                    name="phone"
                                    value={phoneNumber2 ? phoneNumber2 : ""}
                                    className="mt-1 block w-full w-100-pro"
                                    placeholder='電話番号'
                                    onChange={(e) => setPhoneNumber2(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="mt-5">
                            <div className="input-label">職業</div>
                            <div className="input-value">
                                <Select
                                    onChange={(e) => setJob(e.target.value)}
                                    displayEmpty
                                    value={job ? job : 0}
                                    className="shop-select"
                                    size='small'
                                >
                                    {jobList.map((item, key) => (
                                        <MenuItem value={key} key={key}>{item}</MenuItem>
                                    ))}
                                </Select>
                            </div>
                        </div>
                        <div className="mt-5">
                            <div className="input-label">査定完了予定日時</div>
                            <div className="input-value">
                                <DateTimeInput
                                    value={checkPlanDate ? checkPlanDate : 0}
                                    className="shop-select"
                                    onChange={(e) => setCheckPlanDate(e)}
                                />
                            </div>
                        </div>
                        <div className="mt-5">
                            <div className="input-label">本人確認書類</div>
                            <div className="input-value">
                                <div className='flex-left'>
                                    <div>
                                        <div><AddIcon className='add-icon' onClick={handleAddIdentification} /></div>
                                    </div>
                                    <div>
                                        <div className='flex-left'>
                                            <Select
                                                value={identificationId1 ? identificationId1 : 0}
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
                                            <CameraAltIcon className='file-icon camera-icon' onClick={handleCameraCaptureDialogOpen1} />
                                            <div className="flex-center image-show-btn" onClick={handleIdentificationPreview1}>画像と情報表示</div>
                                        </div>
                                        {isVisible && (
                                            <div className='flex-left'>
                                                <Select
                                                    value={identificationId2 ? identificationId2 : 0}
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
                                                <CameraAltIcon className='file-icon camera-icon' onClick={handleCameraCaptureDialogOpen2} />
                                                <div className="flex-center image-show-btn" onClick={handleIdentificationPreview2}>画像と情報表示</div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='screen-div2 purchase-register-container'>
                    <div className='screen-div2'>
                        <div className="mt-5">
                            <div className="input-label">郵便番号</div>
                            <div className="input-value flex-left">
                                <ZipcodeInput
                                    value={zipCode ? zipCode : ""}
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
                        <div className="mt-5">
                            <div className="input-label">都道府県</div>
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
                        <div className="mt-5">
                            <div className="input-label">市町村</div>
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
                        <div className="mt-5">
                            <div className="input-label">住所詳細</div>
                            <div className="input-value">
                                <TextInput
                                    id="address3"
                                    type="text"
                                    name="address3"
                                    className="mt-1 block w-full w-100-pro"
                                    onChange={(e) => setAddress3(e.target.value)}
                                    required
                                    placeholder="住所詳細"
                                    value={address3 ? address3 : ""}
                                />
                            </div>
                        </div>
                        <div className="mt-5">
                            <div className="input-label">特記事項</div>
                            <div className="input-value">
                                <textarea
                                    rows={10}
                                    variant="outlined"
                                    value={note ? note : ""}
                                    className='customer-business rounded w-full border-gray-300 hover:border-sky-600'
                                    onChange={(e) => setNote(e.target.value)}
                                />
                            </div>
                        </div>
                    </div>
                    <div className='screen-div2'>
                        <div className="mt-5">
                            <div className="input-label">過去の来店履歴</div>
                            <div className="hearing-container" style={{ height: '180px' }}>
                                <TableVisitShopHistory
                                    categories1={categories1}
                                    items={historyItems}
                                    purchases={historyPurchases}
                                    onHandleSelectPurchase={handleSelectPurchase}
                                />
                            </div>
                            <div className="input-label mt-10">全体ヒアリング</div>
                            <div className="hearing-container" style={{ height: '150px' }}>
                                <div>
                                    <div className="input-label">来店経緯</div>
                                    <div className='ml-10'>
                                        <label className='flex-left custom-radio-label'>
                                            {hearingItem1}
                                        </label>
                                    </div>
                                    <div className="mt-20">
                                        <div className="input-label">よく買取店に行かれるんですか？</div>
                                        <div className="input-value">
                                            <label className='flex-left custom-radio-label ml-10'>
                                                {hearingItem2}
                                            </label>
                                        </div>
                                    </div>
                                    {
                                        hearingLine &&
                                        <div className='mt-20 ml-10'>
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
                                        <div className='mt-20 ml-10'>
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
                                        hearingGift == 1 &&
                                        <div className="mt-20 ml-10">
                                            <div className="input-label">ノベルティーを何を渡したか？</div>
                                            <div className="input-value">
                                                <label className='flex-left custom-radio-label'>
                                                    {gifts[hearingGift]}
                                                </label>
                                            </div>
                                        </div>
                                    }
                                    {
                                        hearingCoupon &&
                                        <div className="mt-20 ml-10">
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
                        </div>
                    </div>
                </div>
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
            </div>
            <div className='flex-center mt-10' style={{ position: 'relative', gap: '30px' }}>
                <Button
                    loading
                    textLoading="Waiting"
                    type="submit"
                    color="danger"
                    title="一括削除"
                    onClick={handleDeleteItemsClick}
                />
                <Button
                    loading
                    textLoading="Waiting"
                    type="submit"
                    color="info"
                    title="一括許可"
                    onClick={handleAgreeItemsClick}
                />
                <Button
                    loading
                    textLoading="Waiting"
                    type="submit"
                    color="warning"
                    title="一括ステータス変更"
                    onClick={handleStatusItemsClick}
                />
                <Button
                    loading
                    textLoading="Waiting"
                    type="submit"
                    color="success"
                    title="切手査定シート"
                    onClick={handleStampSheetClick}
                />
                <Button
                    loading
                    textLoading="Waiting"
                    type="submit"
                    color="outline-secondary"
                    title="商品を追加"
                    onClick={handleAddItemsClick}
                />
            </div>
            <DataContext.Provider value={{ items, setItems }}>
                <TablePurchaseVisitShop
                    categories1={categories1}
                    categories2={categories2}
                    categories3={categories3}
                    categories4={categories4}
                    categories5={categories5}
                    categories6={categories6}
                    onHandleItemNameClick={handleItemNameClick}
                    onHandleItemImagesClick={handleItemImagesClick}
                />
            </DataContext.Provider>
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
                    open={openLeaveItemDialog}
                    disableEscapeKeyDown={true}
                    className='purchase-add-item'
                >
                    <LeaveItemsDialog
                        customer_name={name}
                        customer_shop={shopName}
                        customer_phone_number1={phoneNumber1}
                        customer_phone_number2={phoneNumber2}
                        leave_deadline={leaveItemDeadline}
                        items={selectedItems}
                        onHandleLeaveItemDialogClose={handleLeaveItemsDialogClose}
                        onHandleLeaveItemsConfirm={handleLeaveItemsConfirm}
                    />
                </Dialog>
            </div>
            <div>
                <Dialog
                    open={openAddItemDialog}
                    disableEscapeKeyDown={true}
                    className='purchase-add-item'
                >
                    <AddItemsDialog
                        categories1={categories1}
                        categories2={categories2}
                        categories3={categories3}
                        categories4={categories4}
                        categories5={categories5}
                        categories6={categories6}
                        purchaseId={purchaseId}
                        onHandleAddItemDialogClose={handleAddItemsClose}
                        onHandleAddItems={handleAddItems}
                    />
                </Dialog>
            </div>
            <Dialog
                open={openHearingDialog}
                onClose={() => handleHearingDialogClose()}
            >
                <div className='item-hearing-container'>
                    <div className="mt-5">
                        <div className="input-label">ヒアリング</div>
                        <div className="item-hearing-content">
                            <div>
                                <div className="mt-5">
                                    <div className="input-label">誰が買ったのか？</div>
                                    <div className="input-value">
                                        <TextInput
                                            type="text"
                                            name="hearing_value1"
                                            value={selectedItemHearingValue1}
                                            className="mt-1 ml-10 block w-full w-100-pro"
                                            onChange={(e) => handleItemHearing1ValueChange(e.target.value)}
                                        />
                                    </div>
                                </div>
                                <div className="mt-5">
                                    <div className="input-label">どこで買ったのか？正規店で買ったのか？</div>
                                    <div className="input-value">
                                        <TextInput
                                            type="text"
                                            name="hearing_value2"
                                            value={selectedItemHearingValue2}
                                            className="mt-1 ml-10 block w-full w-100-pro"
                                            onChange={(e) => handleItemHearing2ValueChange(e.target.value)}
                                        />
                                    </div>
                                </div>
                                <div className="mt-5">
                                    <div className="input-label">いつ頃買ったのか？</div>
                                    <div className="input-value">
                                        <TextInput
                                            type="text"
                                            name="hearing_value3"
                                            value={selectedItemHearingValue3}
                                            className="mt-1 ml-10 block w-full w-100-pro"
                                            onChange={(e) => handleItemHearing3ValueChange(e.target.value)}
                                        />
                                    </div>
                                </div>
                                <div className="mt-5">
                                    <div className="input-label">もう使わないのか？</div>
                                    <div className="input-value">
                                        <TextInput
                                            type="text"
                                            name="hearing_value4"
                                            value={selectedItemHearingValue4}
                                            className="mt-1 ml-10 block w-full w-100-pro"
                                            onChange={(e) => handleItemHearing4ValueChange(e.target.value)}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-5">
                        <Button
                            loading
                            textLoading="Waiting"
                            type="submit"
                            color="outline-secondary"
                            title="閉じる"
                            className="w-100-pro"
                            onClick={handleHearingDialogClose}
                        />
                    </div>
                </div>
            </Dialog>
            <Dialog
                open={openStatusDialog}
                onClose={() => handleStatusDialogClose()}
            >
                <div className='item-status-container'>
                    <label className='mt-20'>ステータスを設定してください。</label>
                    <div>
                        <Select
                            onChange={(e) => handleResultSelectChange(e.target.value)}
                            displayEmpty
                            className="shop-select"
                        >
                            {results.map((item, key) => (
                                <MenuItem key={key} value={key + 1}>{item}</MenuItem>
                            ))}
                        </Select>
                    </div>
                    <div className="mt-5">
                        <Button
                            loading
                            textLoading="Waiting"
                            type="submit"
                            color="outline-secondary"
                            title="閉じる"
                            className="w-100-pro"
                            onClick={handleStatusDialogClose}
                        />
                    </div>
                </div>
            </Dialog>
            <div>
                <Dialog
                    open={openSummaryItemDialog}
                    onClose={() => handleSummaryItemsClose()}
                    className='purchase-summary-item'
                >
                    <SummaryItemsDialog
                        categories1={categories1}
                        items={items}
                        onHandleSummaryItemDialogClose={handleSummaryItemsClose}
                        onHandleSummaryItems={handleSummaryItems}
                    />
                </Dialog>
            </div>
            <div>
                <Dialog
                    open={openImageSlider}
                    onClose={() => handleImageSliderClose()}
                    className='image-preview'
                >
                    <div className=''>
                        <Swiper spaceBetween={0} slidesPerView={1} autoplay={{ delay: 300 }} loop={true} style={{ textAlign: 'center', minHeight: '400px' }}>
                            {selectedItemImages.map((image_file, key) => (
                                <SwiperSlide key={key}><img src={image_file} alt="1" /></SwiperSlide>
                            ))}
                        </Swiper>
                        {
                            selectedIndex && (
                                <div className='flex-base mt-10' style={{ marginBottom: '10px' }}>
                                    <Button
                                        loading
                                        textLoading="Waiting"
                                        type="submit"
                                        color="primary"
                                        className="w-100"
                                        title="追加"
                                        onClick={handleCapturedItemImageDialog}
                                    />
                                </div>
                            )
                        }
                    </div>
                </Dialog>
            </div>
        </div>
    );
};
export default withRouter(FormPurchaseCustomer);
