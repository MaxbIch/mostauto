// @ts-ignore
import arrow7 from '../img/Arrow7.svg'
import {useState, useRef, useEffect} from "react";


function Form() {
    const [phone, setPhone] = useState("");
    const [name, setName] = useState("");
    const [time, setTime] = useState("");
    const [errors, setErrors] = useState<any>({});
    const [isFocused, setIsFocused] = useState(false);

    const [isSuccess, setIsSuccess] = useState<string | null>(null);
    const [isHiding, setIsHiding] = useState(false);

    const handleHide = () => {
    setIsHiding(true);
    setTimeout(() => {
        setIsSuccess(null);
        setIsHiding(false);
    }, 1500);
};


    const formatPhone = (value) => {
        let numbers = value.replace(/\D/g, "");
        let formatted = "+375 (";
        if (numbers.length > 3) formatted += `${numbers.slice(3, 5)}`;
        if (numbers.length > 5) formatted += `) ${numbers.slice(5, 8)}`;
        if (numbers.length > 8) formatted += `-${numbers.slice(8, 10)}`;
        if (numbers.length > 10) formatted += `-${numbers.slice(10, 12)}`;
        return formatted;
    };

    const handlePhoneChange = (e) => {
        setPhone(formatPhone(e.target.value));
    };

    const validate = () => {
        let newErrors: any = {};
        if (!phone.match(/^\+375 \(\d{2}\) \d{3}-\d{2}-\d{2}$/)) {
            newErrors.phone = "Введите корректный номер телефона в формате +375(XX) XXX-XX-XX";
        }
        if (name.trim().length < 2) {
            newErrors.name = "Имя должно содержать минимум 2 символа";
        } else if (/[0-9]/.test(name)) {
            newErrors.name = "Имя не должно содержать цифры";
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    useEffect(() => {
        if (isSuccess) {
        }
    }, [isSuccess]);

    const handleSubmit = async () => {
        if (!validate()) return;

        const url = `https://mostauto.by/mostauto-api/public/api/application`;
        try {
            await fetch(url, {
                method: "POST",
                body: JSON.stringify({
                    name: name,
                    phone: phone,
                    preferredTime: time,

                }),
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                },
            })
                .then(res => res.json())
                .then(data => {
                    setIsSuccess(JSON.stringify(data.message));

                    setPhone("");
                    setName("");
                    setTime("");
                })
        } catch (e) {
            console.log(e)
        }
    };

    const timeSlots = Array.from({length: 10}, (_, i) => {
        const hour = 10 + i;
        return `${hour}:00`;
    });

    return (
        <>
            <h5 id="form" className="form_tittle">Оставляте заявку сейчас и получите <b>бесплатную
                консультацию</b> специалиста и
                бонус-подбор согласно
                вашему запросу!</h5>
            <div className="form container form-container">
                <div className="row">
                    <div className="form-description-tittle">ЗАЯВКА НА <b>БЕСПЛАТНЫЙ</b> ПОДБОР АВТОМОБИЛЯ <hr/>
                        <div className="form-description">Я ознакомился с условиями <a href="../Privacy.html">политики
                            конфиденциальности</a> и согласен на обработку моих персональных данных
                        </div>
                    </div>
                    <div className="input-group">
                        <input type="text" placeholder={isFocused ? "+375(XX) XXX-XX-XX" : "Номер телефона"}
                               value={phone} onChange={handlePhoneChange} onFocus={() => {setIsFocused(true);
                        if (phone === "") {setPhone("+375 (");}}} onBlur={() => setIsFocused(false)}/>
                        {errors.phone && <span className="error">{errors.phone}</span>}
                        <input type="text" placeholder="Ваше имя" value={name}
                               onChange={(e) => setName(e.target.value)}/>
                        {errors.name && <span className="error">{errors.name}</span>}
                        <select value={time} onChange={(e) => setTime(e.target.value)}>
                            <option value="">Удобное время для связи</option>
                            {timeSlots.map((slot, index) => (
                                <option key={index} value={slot}>{slot}</option>
                            ))}
                        </select>
                    </div>
                    <div className="zak_pod" onClick={handleSubmit}>
                        ЗАКАЗАТЬ <br/> ПОДБОР <img src={arrow7} alt=""/>
                    </div>

                    {isSuccess && (
                        <div
                            className={`alert ${isSuccess ? "success" : "unSend"} ${isHiding ? "fade-out" : "fade-in"}`}>
                            <div className="alert-tittle"><span>Спасибо!</span> Ваша<br/> заявка успешно<br/> принята
                            </div>
                            <div className="alert-description">Мы свяжемся с вами ближайшее время для<br/> обсуждения
                                всех деталей покупки авто
                            </div>
                            <div className="alert-button" onClick={handleHide}>
                                &#8592; Вернуться на главную
                            </div>
                        </div>
                    )}

                </div>
            </div>
        </>
    )
}

export default Form;