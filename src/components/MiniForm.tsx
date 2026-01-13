// @ts-ignore
import arrow7 from '../img/Arrow7.svg'
import {useState, useEffect} from "react";

function Form() {
    const [phone, setPhone] = useState("");
    const [errors, setErrors] = useState<any>({});
    const [isFocused, setIsFocused] = useState(false);
    const [isSuccess, setIsSuccess] = useState<string | null>(null);
    const [isHiding, setIsHiding] = useState(false);

    const BOT_TOKEN = '7200185051:AAFWyEK-IJeXQLyWKZ_nqs20eX60iBktZZw';
    const CHAT_ID = '-1002277175421';

    const handleHide = () => {
        setIsHiding(true);
        setTimeout(() => {
            setIsSuccess(null);
            setIsHiding(false);
        }, 1500);
    };

    const formatPhone = (value: string) => {
        let numbers = value.replace(/\D/g, "");
        let formatted = "+375 (";
        if (numbers.length > 3) formatted += `${numbers.slice(3, 5)}`;
        if (numbers.length > 5) formatted += `) ${numbers.slice(5, 8)}`;
        if (numbers.length > 8) formatted += `-${numbers.slice(8, 10)}`;
        if (numbers.length > 10) formatted += `-${numbers.slice(10, 12)}`;
        return formatted;
    };

    const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPhone(formatPhone(e.target.value));
    };

    const validate = () => {
        let newErrors: any = {};
        if (!phone.match(/^\+375 \(\d{2}\) \d{3}-\d{2}-\d{2}$/)) {
            newErrors.phone = "Введите корректный номер телефона в формате +375(XX) XXX-XX-XX";
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async () => {
        if (!validate()) return;

        const message = `📞 Новая заявка:\nТелефон: ${phone}`;

        try {
            const res = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    chat_id: CHAT_ID,
                    text: message
                })
            });

            if (res.ok) {
                setIsSuccess("Заявка отправлена!");
                setPhone("");
            } else {
                setErrors({ api: "Не удалось отправить заявку. Попробуйте позже." });
            }
        } catch (e) {
            console.log(e);
            setErrors({ api: "Ошибка сети." });
        }
    };

    return (
        <>
            <div id="MiniForm" className="mini-form form container form-container">
                <div className="mini-row row">
                    <div className="form-description-tittle">
                        ЗАКАЖИ СВОЙ ПЕРВЫЙ ПОДБОР АВТО
                        <div className="form-description-tittle-desc">Это бесплатно и ни к чему не обязывает</div>
                    </div>
                    <div className="form-description-tittle-full">
                        Оставьте ваш номер телефона и<br /> мы свяжемся с вами в течение 15 минут
                    </div>
                    <div className="input-group">
                        <input
                            type="text"
                            placeholder={isFocused ? "+375(XX) XXX-XX-XX" : "Номер телефона"}
                            value={phone}
                            onChange={handlePhoneChange}
                            onFocus={() => {
                                setIsFocused(true);
                                if (phone === "") {
                                    setPhone("+375 (");
                                }
                            }}
                            onBlur={() => setIsFocused(false)}
                        />
                        {errors.phone && <span className="error">{errors.phone}</span>}
                        {errors.api && <span className="error">{errors.api}</span>}
                    </div>
                    <div className="mini-zak_pod zak_pod" onClick={handleSubmit}>
                        ЗАКАЗАТЬ ПОДБОР <img src={arrow7} alt=""/>
                    </div>

                    {isSuccess && (
                        <div
                            className={`alert ${isSuccess ? "success" : "unSend"} ${isHiding ? "fade-out" : "fade-in"}`}>
                            <div className="alert-tittle"><span>Спасибо!</span> Ваша<br/> заявка успешно<br/> принята
                            </div>
                            <div className="alert-description">
                                Мы свяжемся с вами ближайшее время для<br/> обсуждения всех деталей покупки авто
                            </div>
                            <div className="alert-button" onClick={handleHide}>
                                &#8592; Вернуться на главную
                            </div>
                        </div>
                    )}
                </div>
                <div className="mini-form-description form-description">
                    Я ознакомился с условиями <a href="../Privacy.html">политики конфиденциальности</a> и согласен
                    на обработку моих персональных данных
                </div>
            </div>
        </>
    );
}

export default Form;
