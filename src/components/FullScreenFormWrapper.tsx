import { useState, useEffect } from "react";
import MiniForm from "./MiniForm";

interface FullScreenFormWrapperProps {
    onClose: () => void;
}

function FullScreenFormWrapper({ onClose }: FullScreenFormWrapperProps) {
    const [isClosing, setIsClosing] = useState(false);

    const handleOverlayClick = (event: React.MouseEvent<HTMLDivElement>) => {
        if (event.target === event.currentTarget) {
            startClosing();
        }
    };

    const handleCloseButton = () => {
        startClosing();
    };

    const startClosing = () => {
        setIsClosing(true);
    };

    useEffect(() => {
        document.body.style.overflow = "hidden";

        return () => {
            document.body.style.overflow = "";
        };
    }, []);

    useEffect(() => {
        if (isClosing) {
            const timer = setTimeout(() => {
                onClose();
            }, 300); // Длительность анимации

            return () => clearTimeout(timer);
        }
    }, [isClosing, onClose]);

    return (
        <div
            className={`fullscreen-form-overlay ${isClosing ? "closing" : ""}`}
            onClick={handleOverlayClick}
        >
            <div className="fullscreen-form-content">
                <button className="close-button" onClick={handleCloseButton}>
                    &#10005;
                </button>
                <div className="fullscreen-form-overlay-title">ДАВАЙТЕ ПОДБЕРЕМ ДЛЯ ВАС АВТО.<br />ЭТО АБСОЛЮТНО БЕСПЛАТНО!</div>
                <MiniForm />
            </div>
        </div>
    );
}

export default FullScreenFormWrapper;
