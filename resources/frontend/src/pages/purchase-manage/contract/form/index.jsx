import { useContext, useState, useEffect, useRef } from 'react';
import {
    React,
    Button,
    multiPostData,
    previewThumbnail,
    getData,
    getItem,
    postData,
    ToastNotification,
    useDispatch
} from "../../../../components";
import PhoneInput from "../../../../components/PhoneInput";
import DateInput from "../../../../components/DateInput";
import DateTimeInput from "../../../../components/DateTimeInput";
import TextInput from '../../../../components/TextInput';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import ImageIcon from '@mui/icons-material/Image';
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import { Dialog, DialogTitle, DialogContent, DialogActions } from "@mui/material";
import { pdfjs, Document, Page } from "react-pdf";
import { withRouter } from "react-router-dom";
import ZipcodeInput from "../../../../components/ZipcodeInput";
import { utilityAction } from "../../../../reduxStore";
import Tesseract from 'tesseract.js';
import TablePurchaseContract from '../table';
import CameraCaptureDialog from '../../register/camera';
import 'swiper/css';
import moment from 'moment';
moment.locale("ja");
import SignatureCanvas from "react-signature-canvas";
import { set } from 'lodash';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

let FormPurchaseContract = (props) => {
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
    const [coupon, setCoupon] = useState()
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
    const [signFile, setSignFile] = useState()
    const [cameraCaptureType, setCameraCaptureType] = useState()
    const [openSignDialog, setOpenSignDialog] = useState(false)

    const [shops, setShops] = useState([])
    const [prefectures, setPrefectures] = useState([])
    const [cities, setCities] = useState([])
    const [filteredCities, setFilteredCities] = useState([])
    const [categories1, setCategories1] = useState([])
    const [openImagePreview, setOpenImagePreview] = useState(false)
    const [openCameraPreview, setOpenCameraPreview] = useState(false)
    const [openPdfPreview, setOpenPdfPreview] = useState(false)
    const [previewImage, setPreviewImage] = useState("")
    const [previewPdf, setPreviewPdf] = useState("")
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);
    const dispatch = useDispatch();
    const signCanvas = useRef(null);
    const [purchaseId, setPurchaseId] = useState(0);
    const [customerId, setCustomerId] = useState();
    const [noInvoice, setNoInvoice] = useState();
    const [agreeTerms, setAgreeTerms] = useState();
    const [purchasePrice, setPurchasePrice] = useState(0);

    const [items, setItems] = useState([]);

    const jobList = [
        '',
        '自営業',
        '自由業',
        '会社員',
        'バート･アールバイト',
        '主婦',
        '学生',
        '無職',
    ];
    const terms = "OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO |OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO"
    const identificationList = [
        '',
        'マイナンバー',
        '運転免許証',
        '会社員',
        '健康保険証',
        'パスポート',
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
                getPurchaseData();
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

    const getPurchaseData = async () => {
        const formData = new FormData();
        formData.append("purchase_id", props.purchaseId);
        // formData.append("purchase_id", 1);
        let result = await postData("purchase/index", formData)
        if (result.status === 200) {
            let data = result.data;
            console.log(data);
            const customerData = data.customer
            setCustomerId(customerData.id)
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
            if (data.customer.identification_id1) {
                setIdentificationId1(data.customer.identification_id1);
                setIdentificationType1(data.customer.identification_type1);
                setIdentificationFile1(data.customer.identification_path1);
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

            const purchaseData = data.purchase;
            setPurchaseId(purchaseData.id)
            if (purchaseData.coupon) {
                setCoupon(purchaseData.coupon)
            }

            const itemsData = data.items
            itemsData.forEach(item => {
                item.image_files = JSON.parse(item.image_files)
                item.purchase_price = item.request_price
            });
            setItems(itemsData);
        }
    };

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
        const previewImage = await previewThumbnail(file)
        setPreviewImage(previewImage)
    }

    const handleImagePreviewClose = () => {
        setOpenImagePreview(false)
        setPreviewImage("")
    }

    const handleCameraCaptureDialogOpen = (type) => {
        setCameraCaptureType("passport")
        setOpenCameraPreview(true)
    }

    const handleCameraPreviewClose = () => {
        setOpenCameraPreview(false)
    }

    const handleCapturedImage = (type, image) => { // base64
        setOpenCameraPreview(false)
        const file = base64ToFile(image, moment().format('YYYYMMDDHHmmss'))
        console.log(file.type);

        if (type == "passport") {
            setIdentificationType1(file.type);
            setIdentificationFile1(file);
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

    const handleNoInvoice = (e) => {
        setNoInvoice(e.target.checked ? 1 : 0)
    };

    const handleAgreeTerms = (e) => {
        setAgreeTerms(e.target.checked ? 1 : 0)
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

    const handleSignClick = () => {
        setOpenSignDialog(true)
    };

    const handleSignDialogClose = () => {
        setOpenSignDialog(false)
    }

    const handleSignClear = () => signCanvas.current.clear();

    const handleCalcPrice = (price) => {
        console.log(price);

        setPurchasePrice(price)
    }

    const handleContractCloseClick = async () => {
        setOpenSignDialog(false)
        const dataURL = signCanvas.current.toDataURL(); // Get signature as image
        const file = base64ToFile(dataURL, moment().format('YYYYMMDDHHmmss'))
        setSignFile(file);
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
        if (phoneNumber1 === undefined) {
            ToastNotification("error", "電話番号(自宅)は必須です。");
            return;
        }
        if (phoneNumber2 === undefined) {
            ToastNotification("error", "電話番号(携帯)は必須です。");
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
        if (job === undefined) {
            ToastNotification("error", "職業は必須です。");
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
        if (noInvoice === undefined) {
            ToastNotification("error", "適格請求書事業者のチェックは必須です。");
            return;
        }
        if (agreeTerms === undefined) {
            ToastNotification("error", "利用規約のチェックは必須です。");
            return;
        }
        if (signFile === undefined) {
            ToastNotification("error", "お客様サインは必須です。");
            return;
        }
        if (window.confirm("本当に買取を了承してもよろしいですか？")) {
            dispatch(utilityAction.setLoading("content"));
            try {
                const formData = new FormData();
                formData.append("customer_id", customerId);
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

                formData.append("purchase_id", purchaseId);
                formData.append("service_officer_id", getItem("userdata").id);
                formData.append("purchase_date", moment().format('YYYY-MM-DD HH:ss'));
                formData.append("files[]", signFile);
                formData.append("purchase_price", purchasePrice);
                formData.append("status", 3);

                items.forEach(item => formData.append("items[]", JSON.stringify(item)));

                let feedback = await multiPostData("purchase/contract", formData)
                if (feedback.status === 200) {
                    props.history.push("/")
                }
                dispatch(utilityAction.stopLoading());
            } catch (error) {
                console.log(error)
                ToastNotification("error", error?.message);
                dispatch(utilityAction.stopLoading());
            }
        } else {
        }
    };

    const handleToStampPageClick = () => {
        const selectedItems = items.filter(item => item.category1 === '切手')
        if (selectedItems.length <= 0) {
            alert("切手として選択されたカテゴリー1は存在しません。");
            return;
        }
        if (window.confirm("切手査定シートに遷移してもよろしいですか？")) {
        } else {
        }
    }

    const printRef = useRef();
    const [isPrint, setIsPrint] = useState(false)
    const printStyle = {
        display: isPrint ? "block" : "none"
    };
    const handlePrintPageClick = () => {
        const printContent = printRef.current.innerHTML;
        const newWindow = window.open("", "_blank");
        newWindow.document.write(`
      <html>
        <body>${printContent}</body>
      </html>
    `);
        newWindow.document.close();
        newWindow.focus();
        newWindow.print();
        setTimeout(() => {
            newWindow.close();
        }, 1000);

        setIsPrint(false)
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
            <div style={{ display: 'block' }}>
                <div style={{ position: 'relative' }}>
                    <div className='flex-left' style={{ alignItems: 'baseline' }}>
                        <label className='flex-right'>No.<div>{purchaseId.toString().padStart(6, '0')}</div></label>
                        <div>
                            <label className='flex-right'>接客担当<div>{getItem("userdata").name}</div></label>
                        </div>
                    </div>
                    <div className='customer-header-name'>
                        <label className='flex-right'>来店時間<div>{moment().format('YYYY/MM/DD(ddd) HH:mm')}</div></label>
                    </div>
                    <div className='flex-center' style={{ position: 'absolute', top: '-20px', left: '0', right: '0' }}>
                        <Button
                            loading
                            textLoading="Waiting"
                            type="submit"
                            color="info"
                            className="w-200 no-print"
                            title="切手明細書"
                            onClick={handleToStampPageClick}
                        />
                        <Button
                            loading
                            textLoading="Waiting"
                            type="submit"
                            color="primary"
                            className="w-200 no-print"
                            title="印刷"
                            onClick={handlePrintPageClick}
                        />
                    </div>
                </div>
                <div className='purchase-register-container'>
                    <div className='screen-div2 purchase-register-container'>
                        <div className='screen-div2'>
                            <div>
                                <div className="input-label">店舗名</div>
                                <div className="input-value">
                                    <Select
                                        onChange={(e) => handleShopChange(e.target.value)}
                                        displayEmpty
                                        className="shop-select"
                                        size='small'
                                        value={shop ? shop : 0}
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
                        </div>
                        <div className='screen-div2'>
                            <div className='flex-left'>
                                <div className="mt-5" style={{ width: '100%' }}>
                                    <div className="input-label">生年月日</div>
                                    <div className="input-value">
                                        <DateInput
                                            className="shop-select"
                                            value={birthday ? birthday : 0}
                                            onChange={(e) => setBirthday(e)}
                                        />
                                    </div>
                                </div>
                                <div className="mt-5" style={{ width: '80px' }}>
                                    <div className="input-label">性別</div>
                                    <div className="input-value">
                                        <Select
                                            onChange={(e) => setGender(e.target.value)}
                                            className="shop-select"
                                            value={gender ? gender : 0}
                                            size='small'
                                        >
                                            <MenuItem value={1}>男</MenuItem>
                                            <MenuItem value={2}>女</MenuItem>
                                        </Select>
                                    </div>
                                </div>
                            </div>
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
                                        className="shop-select"
                                        value={job ? job : 0}
                                        size='small'
                                    >
                                        {jobList.map((item, key) => (
                                            <MenuItem value={key} key={key}>{item}</MenuItem>
                                        ))}
                                    </Select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='screen-div2 purchase-register-container'>
                        <div className='screen-div2'>
                            <div>
                                <div className="input-label">郵便番号</div>
                                <div className="input-value flex-left">
                                    <ZipcodeInput
                                        className='w-200'
                                        value={zipCode ? zipCode : ""}
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
                        </div>
                        <div className='screen-div2'>
                            <div>
                                <div className="input-label">本人確認書類</div>
                                <div className="input-value">
                                    <div className='flex-left' style={{ height: '35px' }}>
                                        {/* <div>
                                        <div><AddIcon className='add-icon' onClick={handleAddIdentification} /></div>
                                    </div> */}
                                        <div>
                                            <div className='flex-center'>
                                                <Select
                                                    onChange={(e) => setIdentificationId1(e.target.value)}
                                                    className="shop-select w-150"
                                                    value={identificationId1 ? identificationId1 : 0}
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
                                                <CameraAltIcon className='file-icon camera-icon' onClick={handleCameraCaptureDialogOpen} />
                                                <div className="flex-center image-show-btn" onClick={handleIdentificationPreview1}>画像と情報表示</div>
                                            </div>
                                            {isVisible && (
                                                <div className='flex-center'>
                                                    <Select
                                                        onChange={(e) => setIdentificationId2(e.target.value)}
                                                        className="shop-select w-150"
                                                        value={identificationId2 ? identificationId2 : 0}
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
                <TablePurchaseContract
                    categories1={categories1}
                    items={items}
                    coupon={coupon}
                    onHandleCalcPrice={handleCalcPrice}
                />
                <div className='flex-center'>
                    <div style={{ maxWidth: '800px' }}>
                        <div>・売却後は、商品に対して一切に返却を申し立てを行いません。</div>
                        <div>・売却商品は全て本物です。売却後貴社基準外商品と判明した場合は、即座に返金いたします。</div>
                        <div>・個人情報の取扱について、了承いたしました。</div>
                        <div>・私は反社会性力ではないことを表明し、確約いたします。</div>
                        <div className='mt-10'>
                            <label className='flex-left custom-radio-label'>
                                <input
                                    type="checkbox"
                                    name="hearing_line"
                                    onChange={(e) => handleNoInvoice(e)}
                                />
                                私は適格請求書事業者ではありません。
                            </label>
                        </div>
                        <div className='mt-10'>
                            <textarea
                                rows={10}
                                variant="outlined"
                                value={terms}
                                className='customer-business rounded w-full border-gray-300 hover:border-sky-600'
                            />
                        </div>
                        <div className='mt-10'>
                            <label className='flex-left custom-radio-label'>
                                <input
                                    type="checkbox"
                                    name="hearing_line"
                                    onChange={(e) => handleAgreeTerms(e)}
                                />
                                規約を熟読して了承しました。
                            </label>
                        </div>
                    </div>
                </div>
                <div className='flex-center mt-10'>
                    <label>上記の全てを了承した上で、売却に同意してサインいたします。</label>
                </div>
                <div className='flex-center mt-10'>
                    <Button
                        loading
                        textLoading="Waiting"
                        type="submit"
                        color="secondary"
                        className="w-200"
                        title="お客様サイン"
                        onClick={handleSignClick}
                    />
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
                        open={openSignDialog}
                        className='image-preview'
                        onClose={() => handleSignDialogClose()}
                    >
                        <div style={{height: '500px', padding: '10px'}}>
                            <div className='flex-center' style={{height: '440px'}}>
                                <SignatureCanvas
                                    ref={signCanvas}
                                    penColor="black"
                                    canvasProps={{ className: "sign-board" }}
                                />
                            </div>
                            <div className="flex-center mt-5">
                                <Button
                                    loading
                                    textLoading="Waiting"
                                    type="submit"
                                    color="outline-secondary"
                                    title="キャンセル"
                                    className="w-200"
                                    onClick={handleSignDialogClose}
                                />
                                <Button
                                    loading
                                    textLoading="Waiting"
                                    type="submit"
                                    color="secondary"
                                    className="w-200"
                                    title="クリア"
                                    onClick={handleSignClear}
                                />
                                <Button
                                    loading
                                    textLoading="Waiting"
                                    type="submit"
                                    color="warning"
                                    className="w-200"
                                    title="買取了承"
                                    onClick={handleContractCloseClick}
                                />
                            </div>
                        </div>
                    </Dialog>
                </div>

            </div>

            <div ref={printRef} style={printStyle}>
                <h2 style={{ textAlign: 'center' }}>買取明細書</h2>
                <div style={{ display: 'flex', justifyContent: 'left', alignItems: 'center', gap: '10px' }}>
                    <label style={{ display: 'flex', justifyContent: 'right', alignItems: 'center', gap: '10px' }}>No.<div>{purchaseId.toString().padStart(6, '0')}</div></label>
                    <div>
                        <label style={{ display: 'flex', justifyContent: 'right', alignItems: 'center', gap: '10px' }}>接客担当<div>{getItem("userdata").name}</div></label>
                    </div>
                </div>
                <div style={{ position: 'absolute', top: '-35px', right: '20px' }}>
                    <label style={{ display: 'flex', justifyContent: 'right', alignItems: 'center', gap: '10px' }}>来店時間<div>{moment().format('YYYY/MM/DD(ddd) HH:mm')}</div></label>
                </div>
                <div style={{ display: 'flex', justifyContent: 'flex-start', gap: '30px', padding: '10px' }}>
                    <div style={{ display: 'flex', justifyContent: 'flex-start', gap: '30px', width: '50%' }}>
                        <div style={{ width: '50%' }}>
                            <div>
                                <div style={{ fontSize: '15px' }}>店舗名</div>
                                <div style={{ fontSize: '15px' }}>
                                    <div style={{ width: '100%', height: '30px', padding: '5px', border: 'solid 1px #B9B9B9', borderRadius: '5px' }}>
                                        {shop ? shops[shop].name : ""}
                                    </div>
                                </div>
                            </div>
                            <div style={{ marginTop: '5px' }}>
                                <div style={{ fontSize: '15px' }}>来店経緯</div>
                                <div style={{ fontSize: '15px' }}>
                                    <div style={{ width: '100%', height: '30px', padding: '5px', border: 'solid 1px #B9B9B9', borderRadius: '5px' }}>
                                        {type ? type : ""}
                                    </div>
                                </div>
                            </div>
                            <div style={{ marginTop: '5px' }}>
                                <div style={{ fontSize: '15px' }}>名前</div>
                                <div style={{ fontSize: '15px' }}>
                                    <div style={{ width: '100%', height: '30px', padding: '5px', border: 'solid 1px #B9B9B9', borderRadius: '5px' }}>
                                        {name ? name : ""}
                                    </div>
                                </div>
                            </div>
                            <div style={{ marginTop: '5px' }}>
                                <div style={{ fontSize: '15px' }}>カタカナ名</div>
                                <div style={{ fontSize: '15px' }}>
                                    <div style={{ width: '100%', height: '30px', padding: '5px', border: 'solid 1px #B9B9B9', borderRadius: '5px' }}>
                                        {nameKana ? nameKana : ""}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div style={{ width: '50%' }}>
                            <div style={{ display: 'flex', justifyContent: 'left', alignItems: 'center', gap: '10px' }}>
                                <div style={{ marginTop: '5px', width: '60%' }}>
                                    <div style={{ fontSize: '15px' }}>生年月日</div>
                                    <div style={{ fontSize: '15px' }}>
                                        <div style={{ width: '100%', height: '30px', padding: '5px', border: 'solid 1px #B9B9B9', borderRadius: '5px' }}>
                                            {birthday ? birthday : ""}
                                        </div>
                                    </div>
                                </div>
                                <div style={{ marginTop: '5px', width: '40%' }}>
                                    <div style={{ fontSize: '15px' }}>性別</div>
                                    <div style={{ fontSize: '15px' }}>
                                        <div style={{ width: '100%', height: '30px', padding: '5px', border: 'solid 1px #B9B9B9', borderRadius: '5px' }}>
                                            {gender ? (gender == 1 ? "男" : "女") : ""}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div style={{ marginTop: '5px' }}>
                                <div style={{ fontSize: '15px' }}>電話番号(自宅)</div>
                                <div style={{ fontSize: '15px' }}>
                                    <div style={{ width: '100%', height: '30px', padding: '5px', border: 'solid 1px #B9B9B9', borderRadius: '5px' }}>
                                        {phoneNumber1 ? phoneNumber1 : ""}
                                    </div>
                                </div>
                            </div>
                            <div style={{ marginTop: '5px' }}>
                                <div style={{ fontSize: '15px' }}>電話番号(携帯)</div>
                                <div style={{ fontSize: '15px' }}>
                                    <div style={{ width: '100%', height: '30px', padding: '5px', border: 'solid 1px #B9B9B9', borderRadius: '5px' }}>
                                        {phoneNumber2 ? phoneNumber2 : ""}
                                    </div>
                                </div>
                            </div>
                            <div style={{ marginTop: '5px' }}>
                                <div style={{ fontSize: '15px' }}>職業</div>
                                <div style={{ fontSize: '15px' }}>
                                    <div style={{ width: '100%', height: '30px', padding: '5px', border: 'solid 1px #B9B9B9', borderRadius: '5px' }}>
                                        {job ? jobList[job] : ""}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'flex-start', gap: '30px', width: '50%' }}>
                        <div style={{ width: '50%' }}>
                            <div>
                                <div style={{ fontSize: '15px' }}>郵便番号</div>
                                <div style={{ display: 'flex', justifyContent: 'left', alignItems: 'center', gap: '10px' }}>
                                    <div style={{ width: '100%', height: '30px', padding: '5px', border: 'solid 1px #B9B9B9', borderRadius: '5px' }}>
                                        {zipCode ? zipCode : ""}
                                    </div>
                                </div>
                            </div>
                            <div style={{ marginTop: '5px' }}>
                                <div style={{ fontSize: '15px' }}>都道府県</div>
                                <div style={{ fontSize: '15px' }}>
                                    <div style={{ width: '100%', height: '30px', padding: '5px', border: 'solid 1px #B9B9B9', borderRadius: '5px' }}>
                                        {(address1 && prefectures) ? prefectures[address1].name : ""}
                                    </div>
                                </div>
                            </div>
                            <div style={{ marginTop: '5px' }}>
                                <div style={{ fontSize: '15px' }}>市町村</div>
                                <div style={{ fontSize: '15px' }}>
                                    <div style={{ width: '100%', height: '30px', padding: '5px', border: 'solid 1px #B9B9B9', borderRadius: '5px' }}>
                                        {(address2 && cities) ? cities[address2].name : ""}
                                    </div>
                                </div>
                            </div>
                            <div style={{ marginTop: '5px' }}>
                                <div style={{ fontSize: '15px' }}>住所詳細</div>
                                <div style={{ fontSize: '15px' }}>
                                    <div style={{ width: '100%', height: '30px', padding: '5px', border: 'solid 1px #B9B9B9', borderRadius: '5px' }}>
                                        {address3 ? address3 : ""}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div style={{ width: '50%' }}>
                            <div>
                                <div style={{ fontSize: '15px' }}>本人確認書類</div>
                                <div style={{ fontSize: '15px' }}>
                                    <div style={{ width: '100%', height: '30px', padding: '5px', border: 'solid 1px #B9B9B9', borderRadius: '5px' }}>
                                        {identificationId1 ? identificationList[identificationId1] : ""}
                                    </div>
                                </div>
                            </div>
                            <div style={{ marginTop: '5px' }}>
                                <div style={{ fontSize: '15px' }}>特記事項</div>
                                <div style={{ fontSize: '15px' }}>
                                    <div style={{ width: '100%', height: '150px', padding: '5px', border: 'solid 1px #B9B9B9', borderRadius: '5px' }}>
                                        {note ? note : ""}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <TablePurchaseContract
                    categories1={categories1}
                    items={items}
                    onHandleCalcPrice={handleCalcPrice}
                />
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px' }}>
                    <div style={{ maxWidth: '800px' }}>
                        <div>・売却後は、商品に対して一切に返却を申し立てを行いません。</div>
                        <div>・売却商品は全て本物です。売却後貴社基準外商品と判明した場合は、即座に返金いたします。</div>
                        <div>・個人情報の取扱について、了承いたしました。</div>
                        <div>・私は反社会性力ではないことを表明し、確約いたします。</div>
                        <div style={{ marginTop: '10px' }}>
                            <label style={{ display: 'flex', justifyContent: 'left', alignItems: 'center', gap: '10px' }}>
                                <input
                                    type="checkbox"
                                    name="hearing_line"
                                    onChange={(e) => handleNoInvoice(e)}
                                />
                                私は適格請求書事業者ではありません。
                            </label>
                        </div>
                        <div style={{ marginTop: '10px' }}>
                            <textarea
                                rows={10}
                                variant="outlined"
                                value={terms}
                                style={{ width: '100%' }}
                            />
                        </div>
                        <div style={{ marginTop: '10px' }}>
                            <label style={{ display: 'flex', justifyContent: 'left', alignItems: 'center', gap: '10px' }}>
                                <input
                                    type="checkbox"
                                    name="hearing_line"
                                    onChange={(e) => handleAgreeTerms(e)}
                                />
                                規約を熟読して了承しました。
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default withRouter(FormPurchaseContract);
