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
import InputLabel from '../../../../components/InputLabel';
import DataContext from '../../../../components/DataContext';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import AddIcon from '@mui/icons-material/Add';
import ImageIcon from '@mui/icons-material/Image';
import Checkbox from '@mui/material/Checkbox';
import { Dialog, DialogTitle, DialogContent } from "@mui/material";
import { pdfjs, Document, Page } from "react-pdf";
import { actionTheme, utilityAction } from "../../../../reduxStore";
import Tesseract from 'tesseract.js';
import TablePurchaseVisitShop from '../table';
import PrintPurchaseVisitShop from '../print';
import LeaveItemsDialog from '../leave-items';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import moment from 'moment';
moment.locale("ja");

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

let FormPurchaseRegister = (props) => {
    const [shop, setShop] = useState()
    const [type, setType] = useState()
    const [name, setName] = useState()
    const [nameKana, setNameKana] = useState()
    const [phoneNumber1, setPhoneNumber1] = useState()
    const [phoneNumber2, setPhoneNumber2] = useState()
    const [birthday, setBirthday] = useState()
    const [gender, setGender] = useState()
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
    const [checkPlanDate, setCheckPlanDate] = useState()
    const [hearingItem1Id, setHearingItem1Id] = useState()
    const [hearingItem1Value, setHearingItem1Value] = useState()
    const [hearingItem2Value, setHearingItem2Value] = useState()

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
    const [openPdfPreview, setOpenPdfPreview] = useState(false)
    const [previewImage, setPreviewImage] = useState("")
    const [previewPdf, setPreviewPdf] = useState("")
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);
    const dispatch = useDispatch();

    const [purchaseId, setPurchaseId] = useState(0)

    const [items, setItems] = useState([{
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
    const [leaveItemDeadline, setLeaveItemDeadline] = useState();
    const [leaveItemDate, setLeaveItemDate] = useState();
    const [openImageSlider, setOpenImageSlider] = useState(false)
    const [selectedItems, setSelectedItems] = useState([]);
    const [openLeaveItemDialog, setOpenLeaveItemDialog] = useState(false);

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
        const previewImage = await previewThumbnail(file)
        setPreviewImage(previewImage)
    }

    const handleImagePreviewClose = () => {
        setOpenImagePreview(false)
        setPreviewImage("")
    }

    const handleImageSliderClose = () => {
        setOpenImageSlider(false)
    }

    const handleLeaveItemsClose = () => {
        setOpenLeaveItemDialog(false)
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

    const handleLeaveItemsClick = () => {
        // check validate
        // if (leaveItemDeadline === undefined) {
        //     ToastNotification("error", "お預かり期限は必須です。");
        //     return;
        // }
        // if (name === undefined) {
        //     ToastNotification("error", "名前は必須です。");
        //     return;
        // }
        // if (phoneNumber1 === undefined && phoneNumber2 === undefined) {
        //     ToastNotification("error", "電話番号は必須です。");
        //     return;
        // }
        // if (!checkSelectedItems()) {
        //     ToastNotification("error", "現在、選択されている商品はありません。");
        //     return;
        // }
        setOpenLeaveItemDialog(true)
    }

    const handleDeleteItemsClick = () => {
        if (window.confirm("一括削除してもよろしいですか？")) {
        } else {
        }
    }

    const handleRegisterClick = async () => {
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
        if (hearingItem1Id === undefined || hearingItem2Value === undefined) {
            ToastNotification("error", "全体ヒアリングは必須です。");
            return;
        }
        if (hearingItem1Id > 2 || hearingItem1Value === undefined) {
            ToastNotification("error", "全体ヒアリングは必須です。");
            return;
        }
        if (items.length == 0) {
            ToastNotification("error", "商品は必須です。");
            return;
        }
        if (address2 === undefined) {
            ToastNotification("error", "市町村は必須です。");
            return;
        }

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
            formData.append("items", items);

            // let feedback = await multiPostData("Purchase/register", formData)
            // if (feedback.status === 200) {
            //     setTimeout(() => {
            //         window.history.back();
            //     }, 300);
            // }
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

    const checkSelectedItems = () => {
        let selected = false;
        setSelectedItems([])
        let list = []
        items.forEach(item => {
            if (item.selected == true) {
                selected = true
                list.push(item)
            }
        });
        setSelectedItems(list)
        return selected;
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
                    {leaveItemDate && (<label className='flex-right'>お預かり日時<div>{moment(leaveItemDate).format('YYYY/MM/DD(ddd) HH:mm')}</div></label>)}
                </div>
            </div>
            <div className='customer-register-container'>
                <div className='screen-div2'>
                    <div className='screen-div2'>
                    </div>
                    <div className='screen-div2'>
                    </div>
                </div>
                <div className='screen-div2'>
                    <div className='screen-div2'>
                    </div>
                    <div className='screen-div2'>
                    </div>
                </div>
            </div>
            <div className='flex-left'>
                <div className='flex-left'>
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
                        className="w-100"
                        onClick={handleLeaveItemsClick}
                    />
                </div>
                <Button
                    loading
                    textLoading="Waiting"
                    type="submit"
                    color="success"
                    title="全体撮影"
                    className="w-100"
                />
                <Button
                    loading
                    textLoading="Waiting"
                    type="submit"
                    color="info"
                    title="紙書類撮影"
                    className="w-100"
                />
                <Button
                    loading
                    textLoading="Waiting"
                    type="submit"
                    color="warning"
                    title="決済申請"
                    className="w-100"
                />
                <Button
                    loading
                    textLoading="Waiting"
                    type="submit"
                    color="outline-secondary"
                    title="全て決裁を許可"
                    className="w-100"
                />
                <Button
                    loading
                    textLoading="Waiting"
                    type="submit"
                    color="primary"
                    title="お客様提示画面"
                    className="w-100"
                    disabled={true}
                />
            </div>
            <div className='customer-register-container'>
                <div className='screen-div2 customer-register-container'>
                    <div className='screen-div2'>
                        <div className="mt-10">
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
                        <div className="mt-10">
                            <div className="input-label">来店経緯</div>
                            <div className="input-value">
                                <TextInput
                                    type="text"
                                    name="type"
                                    value={type}
                                    className="mt-1 block w-full w-100-pro"
                                    readOnly
                                />
                            </div>
                        </div>
                        <div className="mt-10">
                            <div className="input-label">名前</div>
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
                            <div className="input-label">カタカナ名</div>
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
                                <div className="input-label">生年月日</div>
                                <div className="input-value">
                                    <DateInput
                                        className="shop-select"
                                        onChange={(e) => setBirthday(e)}
                                    />
                                </div>
                            </div>
                            <div className="mt-10" style={{ width: '33%' }}>
                                <div className="input-label">性別</div>
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
                    </div>
                    <div className='screen-div2'>
                        <div className="mt-10">
                            <div className="input-label">電話番号(自宅)</div>
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
                            <div className="input-label">電話番号(携帯)</div>
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
                            <div className="input-label">職業</div>
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
                        <div className="mt-10">
                            <div className="input-label">査定完了予定日時</div>
                            <div className="input-value">
                                <DateTimeInput
                                    className="shop-select"
                                    onChange={(e) => setCheckPlanDate(e)}
                                />
                            </div>
                        </div>
                        <div className="mt-10">
                            <div className="input-label">本人確認書類</div>
                            <div className="input-value">
                                <div className='flex-left'>
                                    {/* <div>
                                        <div><AddIcon className='add-icon' onClick={handleAddIdentification} /></div>
                                    </div> */}
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
                </div>
                <div className='screen-div2 customer-register-container'>
                    <div className='screen-div2'>
                        <div className="mt-10">
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
                        <div className="mt-10">
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
                        <div className="mt-10">
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
                                />
                            </div>
                        </div>
                        <div className="mt-10">
                            <div className="input-label">特記事項</div>
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
                    <div className='screen-div2'>
                        <div className="mt-10">
                            <div className="input-label">全体ヒアリング</div>
                            <div className="hearing-container">
                                <div>
                                    <div className="input-label">来店経緯</div>
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
                                                readOnly={hearingItem1Id != 3}
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
                                                readOnly={hearingItem1Id != 6}
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
                                                readOnly={hearingItem1Id != 7}
                                            />
                                        </label>
                                    </div>
                                    <div className="mt-20">
                                        <div className="input-label">よく買取店に行かれるんですか？</div>
                                        <div className="input-value">
                                            <TextInput
                                                type="text"
                                                name="hearing_item2"
                                                className="mt-1 ml-10 block w-full w-100-pro"
                                                onChange={(e) => handleHearingItem2ValueChange(e.target.value)}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className='screen-div3'>
                </div>
                <div className='screen-div3'>
                </div> */}
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
            <div className='flex-left mt-10' style={{ position: 'relative' }}>
                <Button
                    loading
                    textLoading="Waiting"
                    type="submit"
                    color="danger"
                    title="一括削除"
                    className="w-100"
                    disabled={!(selectedItems.length > 0)}
                    onClick={handleDeleteItemsClick}
                />
                <Button
                    loading
                    textLoading="Waiting"
                    type="submit"
                    color="success"
                    title="切手査定シート"
                    className="w-100"
                    disabled={true}
                />
                <Button
                    loading
                    textLoading="Waiting"
                    type="submit"
                    color="info"
                    title="一括許可"
                    className="w-100"
                />
                <Button
                    loading
                    textLoading="Waiting"
                    type="submit"
                    color="warning"
                    title="一括ステータス変更"
                    className="w-100"
                />
                <Button
                    loading
                    textLoading="Waiting"
                    type="submit"
                    color="outline-secondary"
                    title="商品を追加"
                    className="w-100"
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
                />
            </DataContext.Provider>
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
            <Dialog
                open={openLeaveItemDialog}
                onClose={() => handleLeaveItemsClose()}
            >
                <LeaveItemsDialog />
            </Dialog>

            <Dialog
                open={openImageSlider}
                onClose={() => handleImageSliderClose()}
            >
                <div className=''>
                    <Swiper spaceBetween={0} slidesPerView={1} autoplay={{ delay: 300 }} loop={true} style={{ textAlign: 'center' }}>
                        <SwiperSlide><img src="https://picsum.photos/id/237/200/300" alt="1" /></SwiperSlide>
                        <SwiperSlide><img src="https://picsum.photos/seed/picsum/200/300" alt="2" /></SwiperSlide>
                        <SwiperSlide><img src="https://picsum.photos/200/300?grayscale" alt="3" /></SwiperSlide>
                        <SwiperSlide><img src="https://fastly.picsum.photos/id/193/200/300.jpg?hmac=b5ZG1TfdndbrnQ8UJbIu-ykB2PRWv0QpHwehH0pqMgE" alt="3" /></SwiperSlide>
                        <SwiperSlide><img src="https://fastly.picsum.photos/id/638/200/300.jpg?hmac=oYRYfxaIBKyb10YHb6-3AGadeAdyEWX91vrVrqdTnGE" alt="3" /></SwiperSlide>
                    </Swiper>
                </div>
            </Dialog>
        </div>
    );
};
export default FormPurchaseRegister;
// setOpenImageSlider(true)
// const number = 120;
// console.log(number.toString().padStart(6, '0'));
