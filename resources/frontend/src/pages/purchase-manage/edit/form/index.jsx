import { useContext, useState, useEffect, useRef } from 'react';
import {
    React,
    Button,
    multiPostData,
    getData,
    postData,
    getItem,
    ToastNotification,
    useDispatch
} from "../../../../components";
import TextInput from '../../../../components/TextInput';
import DataContext from '../../../../components/DataContext';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { Dialog, DialogTitle, DialogContent, DialogActions } from "@mui/material";
import { pdfjs, Document, Page } from "react-pdf";
import { withRouter } from "react-router-dom";
import TablePurchase from '../table';
import TableVisitShopHistory from '../../../customer-manage/edit/table'
import SummaryItemsDialog from '../../register/summary';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import moment from 'moment';
moment.locale("ja");

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

let PurchaseEdit = (props) => {
    const [shop, setShop] = useState()
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
    const [documentFile, setDocumentFile] = useState()
    const [note, setNote] = useState()
    const [checkPlanDate, setCheckPlanDate] = useState()
    const [visitDate, setVisitDate] = useState()
    const [paymentOffer, setPaymentOffer] = useState()
    const [serviceOffer, setServiceOffer] = useState()
    const [hearingItem1, setHearingItem1] = useState()
    const [hearingItem2, setHearingItem2] = useState()
    const [hearingLine, setHearingLine] = useState()
    const [hearingGoogle, setHearingGoogle] = useState()
    const [hearingCoupon, setHearingCoupon] = useState()
    const [hearingGift, setHearingGift] = useState()
    const [historyPurchases, setHistoryPurchases] = useState([]);
    const [historyItems, setHistoryItems] = useState([]);

    const [shops, setShops] = useState([])
    const [prefectures, setPrefectures] = useState([])
    const [cities, setCities] = useState([])
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

    const [purchaseId, setPurchaseId] = useState(0)

    const [items, setItems] = useState([]);
    const [leaveItemDate, setLeaveItemDate] = useState();
    const [openImageSlider, setOpenImageSlider] = useState(false)
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
        '',
        '自営業',
        '自由業',
        '会社員',
        'バート･アールバイト',
        '主婦',
        '学生',
        '無職',
    ];
    const identificationList = [
        '',
        'マイナンバー',
        '運転免許証',
        '会社員',
        '健康保険証',
        'パスポート',
    ];
    const results = ["買取", "不正約", "預り", "返品"];
    const coupons = ["利用なし", "クーポン1", "クーポン2", "現金還元"];
    const gifts = ["なし", "テイッシュボックス", "その他"];

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
                getPurchaseData();
            }
        };
        fetchData();
    }, []);

    const getPurchaseData = async () => {
        const formData = new FormData();
        formData.append("purchase_id", props.purchaseId);
        let result = await postData("purchase/index", formData)
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

            const purchaseData = data.purchase;
            setPurchaseId(purchaseData.id)
            setCheckPlanDate(purchaseData.check_plan_date)
            setVisitDate(purchaseData.created_at)
            setPaymentOffer(purchaseData.payment_officer_name)
            setServiceOffer(purchaseData.service_officer_name)

            const itemsData = data.items
            itemsData.forEach(item => {
                item.image_files = JSON.parse(item.image_files)
                item.purchase_price = item.request_price
            });
            setItems(itemsData);

            setHistoryItems(data.history_items)
            setHistoryPurchases(data.history_purchases)
        }
    };

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
        setPreviewImage(file)
    }

    const handleImagePreviewClose = () => {
        setOpenImagePreview(false)
        setPreviewImage("")
    }

    const handleHearingDialogClose = () => {
        setOpenHearingDialog(false)
    }

    const handleStatusDialogClose = () => {
        setOpenStatusDialog(false)
    }

    const handleSummaryItemsClose = () => {
        setOpenSummaryItemDialog(false)
    }

    const handleSummaryItems = () => {
        setOpenSummaryItemDialog(false)
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

    const handleResultSelectChange = (value) => {
        setItems(items.map(item => ({ ...item, result: value })));
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
        if (images.length > 0) {
            setSelectedItemImages(images)
            setOpenImageSlider(true)
        }
    }

    const handleSelectPurchase = (id) => {
        props.history.push("/purchase/edit", { pathname: "/purchase/edit", id: id });
    }

    return (
        <div>
            <div style={{ position: 'relative' }}>
                <div className='flex-left' style={{ alignItems: 'baseline' }}>
                    <label className='flex-right'>No.<div>{purchaseId.toString().padStart(6, '0')}</div></label>
                    <div>
                        <label className='flex-right' style={{ marginBottom: '0px' }}>支払い担当<div>{paymentOffer}</div></label>
                        <label className='flex-right'>接客担当<div>{serviceOffer}</div></label>
                    </div>
                </div>
                <div className='customer-header-name'>
                    <label className='flex-right'>来店時間<div>{visitDate ? moment(visitDate).format('YYYY/MM/DD(ddd) HH:mm') : ""}</div></label>
                    {leaveItemDate && (<label className='flex-right'>お預かり日時<div>{moment(leaveItemDate).format('YYYY/MM/DD(ddd)')}</div></label>)}
                </div>
            </div>
            <div className='purchase-register-container'>
                <div className='screen-div2 purchase-register-container'>
                    <div className='screen-div3'>
                        <div className="mt-5">
                            <div className="input-label">店舗名</div>
                            <div className="input-value">
                                <TextInput
                                    type="text"
                                    name="type"
                                    value={shop ? shops[shop].name : ""}
                                    className="mt-1 block w-full w-100-pro"
                                    disabled
                                />
                            </div>
                        </div>
                        <div className="mt-5">
                            <div className="input-label">来店経緯</div>
                            <div className="input-value">
                                <TextInput
                                    type="text"
                                    name="type"
                                    value="顧客"
                                    className="mt-1 block w-full w-100-pro"
                                    disabled
                                />
                            </div>
                        </div>
                        <div className="mt-5">
                            <div className="input-label">名前</div>
                            <div className="input-value">
                                <TextInput
                                    type="text"
                                    className="mt-1 block w-full w-100-pro"
                                    value={name ? name : ""}
                                    disabled
                                />
                            </div>
                        </div>
                        <div className="mt-5">
                            <div className="input-label">カタカナ名</div>
                            <div className="input-value">
                                <TextInput
                                    type="text"
                                    className="mt-1 block w-full w-100-pro"
                                    value={nameKana ? nameKana : ""}
                                    disabled
                                />
                            </div>
                        </div>
                        <div className='flex-left'>
                            <div className="mt-5" style={{ width: '67%' }}>
                                <div className="input-label">生年月日</div>
                                <div className="input-value">
                                    <TextInput
                                        type="text"
                                        className="mt-1 block w-full w-100-pro"
                                        value={birthday ? birthday : ""}
                                        disabled
                                    />
                                </div>
                            </div>
                            <div className="mt-5" style={{ width: '33%' }}>
                                <div className="input-label">性別</div>
                                <div className="input-value">
                                    <TextInput
                                        type="text"
                                        className="mt-1 block w-full w-100-pro"
                                        value={gender ? (gender == 1 ? '男' : '女') : ''}
                                        disabled
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='screen-div3'>
                        <div className="mt-5">
                            <div className="input-label">電話番号(自宅)</div>
                            <div className="input-value">
                                <TextInput
                                    type="text"
                                    className="mt-1 block w-full w-100-pro"
                                    value={phoneNumber1 ? phoneNumber1 : ""}
                                    disabled
                                />
                            </div>
                        </div>
                        <div className="mt-5">
                            <div className="input-label">電話番号(携帯)</div>
                            <div className="input-value">
                                <TextInput
                                    type="text"
                                    className="mt-1 block w-full w-100-pro"
                                    value={phoneNumber2 ? phoneNumber2 : ""}
                                    disabled
                                />
                            </div>
                        </div>
                        <div className="mt-5">
                            <div className="input-label">職業</div>
                            <div className="input-value">
                                <TextInput
                                    type="text"
                                    className="mt-1 block w-full w-100-pro"
                                    value={job ? jobList[job] : ""}
                                    disabled
                                />
                            </div>
                        </div>
                        <div className="mt-5">
                            <div className="input-label">査定完了予定日時</div>
                            <div className="input-value">
                                <TextInput
                                    type="text"
                                    className="mt-1 block w-full w-100-pro"
                                    value={checkPlanDate ? checkPlanDate : ""}
                                    disabled
                                />
                            </div>
                        </div>
                        <div className="mt-5">
                            <div className="input-label">本人確認書類</div>
                            <div className="input-value">
                                <div className='flex-left' style={{ height: '35px' }}>
                                    {/* <div>
                                        <div><AddIcon className='add-icon' onClick={handleAddIdentification} /></div>
                                    </div> */}
                                    <div>
                                        <div className='flex-center'>
                                            <TextInput
                                                type="text"
                                                className="mt-1 block w-full w-100-pro"
                                                value={identificationId1 ? identificationList[identificationId1] : ""}
                                                disabled
                                            />
                                            <div className="flex-center image-show-btn" onClick={handleIdentificationPreview1}>画像と情報表示</div>
                                        </div>
                                        {isVisible && (
                                            <div className='flex-center'>
                                                <TextInput
                                                    type="text"
                                                    className="mt-1 block w-full w-100-pro"
                                                    value={identificationId2 ? identificationList[identificationId2] : ""}
                                                    disabled
                                                />
                                                <div className="flex-center image-show-btn" onClick={handleIdentificationPreview2}>画像と情報表示</div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='screen-div3'>
                        <div className="mt-5">
                            <div className="input-label">郵便番号</div>
                            <div className="input-value">
                                <TextInput
                                    type="text"
                                    className="mt-1 block w-full w-100-pro"
                                    value={zipCode ? zipCode : ""}
                                    disabled
                                />
                            </div>
                        </div>
                        <div className="mt-5">
                            <div className="input-label">都道府県</div>
                            <div className="input-value">
                                <TextInput
                                    type="text"
                                    className="mt-1 block w-full w-100-pro"
                                    value={address1 ? prefectures[address1].name : ""}
                                    disabled
                                />
                            </div>
                        </div>
                        <div className="mt-5">
                            <div className="input-label">市町村</div>
                            <div className="input-value">
                                <TextInput
                                    type="text"
                                    className="mt-1 block w-full w-100-pro"
                                    value={address2 ? cities[address2].name : ""}
                                    disabled
                                />
                            </div>
                        </div>
                        <div className="mt-5">
                            <div className="input-label">住所詳細</div>
                            <div className="input-value">
                                <TextInput
                                    type="text"
                                    className="mt-1 block w-full w-100-pro"
                                    value={address3 ? address3 : ""}
                                    disabled
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
                                    disabled
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='screen-div2 purchase-register-container'>
                    <div className='w-100-pro'>
                        <div className="mt-20">
                            <div className="input-label">過去の来店履歴</div>
                            <div className="hearing-container" style={{ height: '150px' }}>
                                <TableVisitShopHistory
                                    categories1={categories1}
                                    items={historyItems}
                                    purchases={historyPurchases}
                                    onHandleSelectPurchase={handleSelectPurchase}
                                />
                            </div>
                            <div className="input-label mt-20">全体ヒアリング</div>
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
            </div>
            <div className='mt-20'></div>
            <DataContext.Provider value={{ items, setItems }}>
                <TablePurchase
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
                                            disabled
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
                                            disabled
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
                                            disabled
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
                                            disabled
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
                    </div>
                </Dialog>
            </div>
        </div>
    );
};
export default withRouter(PurchaseEdit);
