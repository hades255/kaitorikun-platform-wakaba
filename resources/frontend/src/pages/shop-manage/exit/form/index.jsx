import { useState, useEffect } from 'react';
import {
    React,
    Button,
    multiPostData,
    postData,
    getItem,
    ToastNotification,
    useDispatch
} from "../../../../components";
import TextInput from '../../../../components/TextInput';
import { Dialog, DialogTitle, DialogContent } from "@mui/material";
import { pdfjs, Document, Page } from "react-pdf";
import { actionTheme, utilityAction } from "../../../../reduxStore";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

let FormStaffExit = (props) => {
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
    const [identificationType1, setIdentificationType1] = useState()
    const [identificationFile1, setIdentificationFile1] = useState()
    const [isVisible, setIsVisible] = useState(false);
    const [identificationType2, setIdentificationType2] = useState()
    const [identificationFile2, setIdentificationFile2] = useState()
    const [historyType, setHistoryType] = useState()
    const [historyFile, setHistoryFile] = useState()
    const [workingHistoryType, setWorkingHistoryType] = useState()
    const [workingHistoryFile, setWorkingHistoryFile] = useState()
    const [contractType, setContractType] = useState()
    const [contractFile, setContractFile] = useState()
    const [guarantorId, setGuarantorId] = useState()
    const [openImagePreview, setOpenImagePreview] = useState(false)
    const [openPdfPreview, setOpenPdfPreview] = useState(false)
    const [previewImage, setPreviewImage] = useState("")
    const [previewPdf, setPreviewPdf] = useState("")
    const dispatch = useDispatch();

    useEffect(() => {
        // API Call
        const fetchData = async () => {
            let userData = getItem("userdata");
            let result = await postData("staff/info", {
                user_id: userData.id
            })
            if (result.status === 200) {
                let data = result.data;
                let staff = data.staff;
                setStaffId(staff.staff_id);
                setEmail(staff.email);
                setShop(data.shops[staff.shop_id - 1].name);
                switch (staff.user_type) {
                    case 1:
                        setType("オーナー");
                        break;
                    case 2:
                        setType("マネージャー");
                        break;
                    case 3:
                        setType("店長");
                        break;
                    case 4:
                        setType("社員");
                        break;
                    case 5:
                        setType("アルバイト");
                        break;

                    default:
                        break;
                }
                setName(staff.name);
                setNameKana(staff.name_kana);
                setPhoneNumber(staff.phone_number);
                setBirthday(staff.birthday);
                switch (staff.gender) {
                    case 1:
                        setGender("男");
                        break;
                    case 2:
                        setGender("女");
                        break;

                    default:
                        break;
                }
                setZipCode(staff.zipcode);
                setAddress1(data.prefectures[staff.address1 - 1].name);
                setAddress2(data.cities[staff.address2 - 1].name);
                setAddress3(staff.address3);
                setIdentificationType1(staff.identification_type1);
                setIdentificationFile1(staff.identification_path1);
                if (staff.identification_id2) {
                    setIsVisible(true);
                }
                setIdentificationType2(staff.identification_type2);
                setIdentificationFile2(staff.identification_path2);
                setHistoryType(staff.history_type);
                setHistoryFile(staff.history_path);
                setWorkingHistoryType(staff.working_history_type);
                setWorkingHistoryFile(staff.working_history_path);
                setContractType(staff.contract_type);
                setContractFile(staff.contract_path);
                if (staff.guarantor_id) {
                    setGuarantorId(data.guarantors[staff.guarantor_id - 1].name);
                } else {
                    setGuarantorId("");
                }
            }
        };

        fetchData(); // Execute API call
    }, []); // Empty dependency array means it runs once when mounted

    const handleIdentificationPreview1 = () => {
        if (!identificationFile1) {
            ToastNotification("error", "入力されたデータが見つかりません。");
            return;
        }
        if (identificationType1.includes("image")) {
            handleImagePreview(identificationFile1);
        } else if (identificationType1.includes("pdf")) {
            handlePdfPreview(identificationFile1);
        }
    }

    const handleIdentificationPreview2 = () => {
        if (!identificationFile2) {
            ToastNotification("error", "入力されたデータが見つかりません。");
            return;
        }
        console.log(identificationType1);
        if (identificationType2.includes("image")) {
            handleImagePreview(identificationFile2);
        } else if (identificationType2.includes("pdf")) {
            handlePdfPreview(identificationFile2);
        }
    }

    const handleHistoryPreview = () => {
        if (!historyFile) {
            ToastNotification("error", "入力されたデータが見つかりません。");
            return;
        }
        if (historyType.includes("image")) {
            handleImagePreview(historyFile);
        } else if (historyType.includes("pdf")) {
            handlePdfPreview(historyFile);
        }
    }

    const handleWorkingHistoryPreview = () => {
        if (!workingHistoryFile) {
            ToastNotification("error", "入力されたデータが見つかりません。");
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

    const handleImagePreview = (file) => {
        setOpenImagePreview(true)
        setPreviewImage(file)
    }

    const handleImagePreviewClose = () => {
        setOpenImagePreview(false)
        setPreviewImage("")
    }

    const handlePdfPreview = (file) => {
        setOpenPdfPreview(true)
        setPreviewPdf(file)
    }

    const handlePdfPreviewClose = () => {
        setOpenPdfPreview(false)
        setPreviewPdf("")
    }

    const handleRegisterClick = async () => {
        dispatch(utilityAction.setLoading("content"));
        if (window.confirm("この操作でスタッフが削除されます。本当に削除しますか？")) {
            try {
                let userData = getItem("userdata");
                let feedback = await multiPostData("staff/exit", {
                    user_id: userData.id
                })
                if (feedback.status === 200) {
                    logout();
                }
                dispatch(utilityAction.stopLoading());
            } catch (error) {
                console.log(error)
                ToastNotification("error", error?.message);
                dispatch(utilityAction.stopLoading());
            }
        } else {
            removeItem("userdata");
            props.history.push("/");
        }
    };

    const handleCancelClick = () => {
        window.history.back();
    };

    const onDocumentLoadSuccess = () => {
        console.log("success!!");
        
    };

    const logout = () => {
        dispatch(utilityAction.setLoading("content"));
        setTimeout(() => {
            dispatch(utilityAction.stopLoading());
            localStorage.clear();
            window.location.reload();
        }, 500);
    };

    return (
        <div>
            <div className="row">
                <div className="col-lg-4 mt-10 col-lg-4 mt-10">
                    <div className="flex-center min-w-400">
                        <div className="input-label">スタッフID</div>
                        <div className="input-value">
                            <TextInput
                                value={staffId}
                                className="mt-1 block w-full"
                                readOnly
                            />
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 mt-10 col-lg-4 mt-10">
                    <div className="flex-center min-w-400">
                        <div className="input-label">メールアドレス</div>
                        <div className="input-value">
                            <TextInput
                                value={email}
                                className="mt-1 block w-full"
                                readOnly
                            />
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 mt-10 col-lg-4 mt-10">
                    <div className="flex-center min-w-400">
                        <div className="input-label">パスワード</div>
                        <div className="input-value">
                            <TextInput
                                value={""}
                                className="mt-1 block w-full"
                                readOnly
                            />
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 mt-10 col-lg-4 mt-10">
                    <div className="flex-center min-w-400">
                        <div className="input-label">店舗名</div>
                        <div className="input-value">
                            <TextInput
                                value={shop}
                                className="mt-1 block w-full"
                                readOnly
                            />
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 mt-10 col-lg-4 mt-10">
                    <div className="flex-center min-w-400">
                        <div className="input-label">種別</div>
                        <div className="input-value">
                            <TextInput
                                value={type}
                                className="mt-1 block w-full"
                                readOnly
                            />
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
                                value={name}
                                className="mt-1 block w-full"
                                readOnly
                            />
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 mt-10 col-lg-4 mt-10">
                    <div className="flex-center min-w-400">
                        <div className="input-label">カタカナ名</div>
                        <div className="input-value">
                            <TextInput
                                value={nameKana}
                                className="mt-1 block w-full"
                                readOnly
                            />
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 mt-10 col-lg-4 mt-10">
                    <div className="flex-center min-w-400">
                        <div className="input-label">お電話番号</div>
                        <div className="input-value">
                            <TextInput
                                value={phoneNumber}
                                className="mt-1 block w-full"
                                readOnly
                            />
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 mt-10 col-lg-4 mt-10">
                    <div className="flex-center min-w-400">
                        <div className="input-label">生年月日</div>
                        <div className="input-value">
                            <TextInput
                                value={birthday}
                                className="mt-1 block w-full"
                                readOnly
                            />
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 mt-10 col-lg-4 mt-10">
                    <div className="flex-center min-w-400">
                        <div className="input-label">性別</div>
                        <div className="input-value">
                            <TextInput
                                value={gender}
                                className="mt-1 block w-full"
                                readOnly
                            />
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 mt-10 col-lg-4 mt-10">
                    <div className="flex-center min-w-400">
                        <div className="input-label">郵便番号</div>
                        <div className="input-value">
                            <TextInput
                                value={zipCode}
                                className="mt-1 block w-full"
                                readOnly
                            />
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 mt-10 col-lg-4 mt-10">
                    <div className="flex-center min-w-400">
                        <div className="input-label">都道府県</div>
                        <div className="input-value">
                            <TextInput
                                value={address1}
                                className="mt-1 block w-full"
                                readOnly
                            />
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 mt-10 col-lg-4 mt-10">
                    <div className="flex-center min-w-400">
                        <div className="input-label">市町村</div>
                        <div className="input-value">
                            <TextInput
                                value={address2}
                                className="mt-1 block w-full"
                                readOnly
                            />
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 mt-10 col-lg-4 mt-10">
                    <div className="flex-center min-w-400">
                        <div className="input-label">住所詳細</div>
                        <div className="input-value">
                            <TextInput
                                value={address3}
                                className="mt-1 block w-full"
                                readOnly
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
                                    <div className='flex-center'>
                                        <div className="flex-center image-show-btn" onClick={handleIdentificationPreview1}>画像と情報表示</div>
                                    </div>
                                    {isVisible && (
                                        <div className='flex-center mt-10'>
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
                                    <div className="flex-center image-show-btn" onClick={handleHistoryPreview}>履歴書</div>
                                </div>
                                <div className='flex-center'>
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
                                    <TextInput
                                        value={guarantorId}
                                        className="mt-1 block w-full"
                                        readOnly
                                    />
                                    <div className="flex-center image-show-btn" onClick={handleContractBtn}>契約書画像</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='flex-center mt-20'>
                <Button
                    loading
                    textLoading="Waiting"
                    type="submit"
                    color="danger"
                    title="退会する"
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
                fullWidth>
                <DialogContent dividers>
                    {previewPdf && (
                        <Document file={"http://127.0.0.1:8000/storage/uploads/qZobcdDe8mC3ucXFhR8sHwMQnX5ZAi8Jn9K7OnlJ.pdf"}
                            onLoadSuccess={onDocumentLoadSuccess}
                            onLoadError={(error) => console.error("Error loading document:", error)}>
                        </Document>
                    )}
                </DialogContent>
            </Dialog>
        </div>
    );
};
export default FormStaffExit;
