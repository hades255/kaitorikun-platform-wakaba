import React, { useRef, useEffect, useState } from "react";
import {
    Button,
} from "../../../../components";

let CameraCaptureDialog = (props) => {
    const [type, setType] = useState(props.type);
    const videoRef = useRef(null);
    const canvasRef = useRef(null);
    const [capturedImage, setCapturedImage] = useState(null);

    useEffect(() => {
        const startCamera = async () => {
            try {
                const stream = await navigator.mediaDevices.getUserMedia({ video: true });
                if (videoRef.current) {
                    videoRef.current.srcObject = stream;
                }
            } catch (error) {
                console.error("Error accessing camera:", error);
            }
        };
        startCamera();
    }, []);


    const captureImage = () => {
        const canvas = canvasRef.current;
        const video = videoRef.current;
        if (canvas && video) {
            const context = canvas.getContext("2d");
            canvas.width = video.videoWidth;
            canvas.height = video.videoHeight;
            context.drawImage(video, 0, 0, canvas.width, canvas.height);
            setCapturedImage(canvas.toDataURL("image/png")); // Convert to base64
        }
    };

    const handleCancelClick = () => {
        props.onHandleCameraDialogClose();
    };

    const handleSaveImageClick = () => {
        props.onHandleCapturedImage(type, capturedImage);
    };
    return (
        <div>
            {!capturedImage && <video ref={videoRef} autoPlay playsInline style={{ width: "100%" }} />}
            {capturedImage && <img src={capturedImage} alt="Captured" style={{ width: "100%" }} />}
            <div className="flex-base mt-10">
                {
                    !capturedImage &&
                    <Button
                        loading
                        textLoading="Waiting"
                        type="submit"
                        color="primary"
                        title="キャプチャー"
                        onClick={captureImage}
                    />
                }
                <Button
                    loading
                    textLoading="Waiting"
                    type="submit"
                    color="secondary"
                    title="キャンセル"
                    onClick={handleCancelClick}
                />
                {
                    capturedImage &&
                    <Button
                        loading
                        textLoading="Waiting"
                        type="submit"
                        color="info"
                        title="保存"
                        className="w-100"
                        onClick={handleSaveImageClick}
                    />
                }
            </div>
            <div className="mt-10"></div>
            <canvas ref={canvasRef} style={{ display: "none" }} />
        </div>);
};
export default CameraCaptureDialog;
