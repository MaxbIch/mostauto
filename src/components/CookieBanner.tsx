import {useState, useEffect} from "react";

const CookieBanner = () => {
    const [isAccepted, setIsAccepted] = useState(false);

    useEffect(() => {
        const cookiesAccepted = localStorage.getItem("cookiesAccepted");
        if (cookiesAccepted) {
            setIsAccepted(true);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem("cookiesAccepted", "true");
        setIsAccepted(true);
    };

    if (isAccepted) return null;

    return (
        <div className="cookie-banner">
            <div>
                Мы используем cookies для улучшения работы сайта. Продолжая использовать
                сайт, вы соглашаетесь с{" "}
                <a href="../Privacy.html" className="cookie-link">
                    политикой конфиденциальности
                </a>
                .
            </div>
            <div className="button-block">
                <button onClick={handleAccept} className="cookie-btn">
                    Принять
                </button>
                <button onClick={handleAccept} className="cookie-btn">
                    Отклонить
                </button>
            </div>
        </div>
    );
};

export default CookieBanner;
