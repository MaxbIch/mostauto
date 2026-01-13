import React, { useState, useRef, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const TG_BOT_TOKEN = '7200185051:AAFWyEK-IJeXQLyWKZ_nqs20eX60iBktZZw';
const CHAT_ID = '-1002277175421';

const quizTitles = [
    'Автомобиль какой марки/модели/года вы планируете приобрести?',
    'На какой бюджет в USD вы рассчитываете: ориентировачный и максимальный?',
    'Какой способ связи для вас предпочтительней?',
    'Как мы можем к вам обращаться?',
    'Укажите ваш номер телефона:',
];

const quizLabels = [
    'Чтобы получить лучшее предложение на рынке и сэкономить свое время, опишите ваш запрос как можно детальнее',
    'Мы занимаемся как пригоном автомобилей из США и Европы, так и их восстановлением. Подробнее с тарифами можно ознакомиться ниже на сайте',
    '',
    '',
    'Я ознакомился с условиями <a href="../Privacy.html">политики конфиденциальности</a> и согласен на обработку моих персональных данных',
];

const quizOptions = [
    [],
    [],
    ['Позвоните мне', 'Напишите мне в Telegram', 'Напишите мне в Viber', 'Напишите мне в WhatsApp'],
    [],
    [],
];

const phoneRegExp = /^\+375\s\(\d{2}\)\s\d{3}-\d{2}-\d{2}$/;

const ProgressBar = ({ step, total }: { step: number; total: number }) => {
    const percent = ((step - 1) / total) * 100;
    return (
        <div className="progress-wrapper">
            <div className="progress-bar" style={{ width: `${percent}%` }}></div>
        </div>
    );
};

interface QuizItemProps {
    title: string;
    label: string;
    answer: string;
    onChange: (val: string) => void;
    onNext: () => void;
    onBack: () => void;
    error: string | null;
    options: string[];
    onOptionSelect: (option: string) => void;
    isPhoneInput: boolean;
    step: number;
    total: number;
}

const QuizItem = ({
    title,
    label,
    answer,
    onChange,
    onNext,
    onBack,
    error,
    options,
    onOptionSelect,
    isPhoneInput,
    step,
    total,
}: QuizItemProps) => {
    const inputRef = useRef<HTMLInputElement>(null);

    const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let value = e.target.value.replace(/\D/g, '');

        if (value.startsWith('375')) value = value.slice(3);

        let result = '+375 (';

        if (value.length >= 2) {
            result += value.slice(0, 2) + ') ';
        } else {
            result += value;
        }

        if (value.length > 2) {
            result += value.slice(2, 5);
        }
        if (value.length > 5) {
            result += '-' + value.slice(5, 7);
        }
        if (value.length > 7) {
            result += '-' + value.slice(7, 9);
        }

        onChange(result);
    };

    const handleFocus = () => {
        if (isPhoneInput && !answer) {
            onChange('+375 (');
        }
    };

    return (
        <div className="quiz-card">
            <ProgressBar step={step} total={total} />
            <h3>{title}</h3>
            {label && (
                step === 5 ? (
                    <label className="quiz-label">
                        Я ознакомился с условиями{' '}
                        <a href="../Privacy.html" target="_blank" style={{ textDecoration: 'underline', color: 'red' }}>
                            политики конфиденциальности
                        </a>{' '}
                        и согласен на обработку моих персональных данных
                    </label>
                ) : (
                    <label className="quiz-label">{label}</label>
                )
            )}

            {options.length > 0 ? (
                <div className="quiz-options">
                    {options.map((option, index) => (
                        <button key={index} className="quiz-option-button" onClick={() => onOptionSelect(option)}>
                            {option}
                        </button>
                    ))}
                </div>
            ) : (
                <input
                    className={`quiz-input ${error ? 'quiz-error' : ''}`}
                    type="text"
                    value={answer}
                    ref={inputRef}
                    onFocus={handleFocus}
                    onChange={isPhoneInput ? handlePhoneChange : (e) => onChange(e.target.value)}
                    placeholder="Ваш ответ"
                />
            )}

            {error && <div className="quiz-error-text">{error}</div>}

            <div className="quiz-navigation">
                <button onClick={onBack} disabled={step === 1}>
                    Назад
                </button>
                {options.length === 0 && (
                    <button onClick={onNext}>
                        {step === total ? 'Отправить' : 'Далее'}
                    </button>
                )}
            </div>
        </div>
    );
};

const QuizSection = () => {
    const [quizNumber, setQuizNumber] = useState(1);
    const [answers, setAnswers] = useState<string[]>(Array(quizTitles.length).fill(''));
    const [errors, setErrors] = useState<(string | null)[]>(Array(quizTitles.length).fill(null));
    const [isSuccess, setIsSuccess] = useState<string | null>(null);
    const [isHiding, setIsHiding] = useState(false);
    const [showErrorMessage, setShowErrorMessage] = useState(false);

    const handleAnswerChange = (value: string) => {
        const updatedAnswers = [...answers];
        updatedAnswers[quizNumber - 1] = value;
        setAnswers(updatedAnswers);

        const updatedErrors = [...errors];
        updatedErrors[quizNumber - 1] = null;
        setErrors(updatedErrors);
    };

    const handleOptionSelect = (option: string) => {
        handleAnswerChange(option);
        setQuizNumber((prev) => prev + 1);
    };

    const handleHide = () => {
        setIsHiding(true);
        setTimeout(() => {
            setIsSuccess(null);
            setIsHiding(false);
        }, 1500);
    };

    const handleQuizSubmit = async () => {
        if (answers.some((a) => !a.trim())) return;

        const [car, budget, contactMethod, name, phone] = answers;

        const message = `
Новый запрос:
Машина: ${car}
Бюджет: ${budget}$
Контактный метод: ${contactMethod}
Имя: ${name}
Телефон: ${phone}
        `;

        const url = `https://api.telegram.org/bot${TG_BOT_TOKEN}/sendMessage`;

        try {
            const response = await fetch(url, {
                method: 'POST',
                body: JSON.stringify({
                    chat_id: CHAT_ID,
                    text: message,
                    parse_mode: 'HTML',
                }),
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            const data = await response.json();
            console.log('Сообщение отправлено:', data);

            if (data.ok) {
                setIsSuccess("Заявка отправлена!");
                setAnswers(Array(quizTitles.length).fill(''));
                setQuizNumber(1);
            } else {
                setShowErrorMessage(true);
            }
        } catch (e) {
            console.log('Ошибка при отправке:', e);
            setShowErrorMessage(true);
        }
    };

    const handleNext = () => {
        const currentAnswer = answers[quizNumber - 1].trim();
        const updatedErrors = [...errors];

        if (!currentAnswer) {
            updatedErrors[quizNumber - 1] = 'Поле не может быть пустым';
            setErrors(updatedErrors);
            return;
        }

        if (quizNumber === 5 && !phoneRegExp.test(currentAnswer)) {
            updatedErrors[quizNumber - 1] = 'Формат должен быть +375 (XX) XXX-XX-XX';
            setErrors(updatedErrors);
            return;
        }

        if (quizNumber < quizTitles.length) {
            setQuizNumber((prev) => prev + 1);
        } else {
            handleQuizSubmit();
        }
    };

    const handleBack = () => {
        if (quizNumber > 1) {
            setQuizNumber((prev) => prev - 1);
        }
    };

    return (
        <div id="quiz" className="quiz-section">
            <h2>Привезем любой авто в беларусь <br />в обход санкций с выгодой до 40%</h2>
            <div className="quiz-section-desc">
                Ответьте вопросы и наш менеджер свяжется с вами с уже<br />сформированным по вашему запросу предложением
            </div>

            {/* УСПЕШНАЯ ПЛАШКА */}
            {isSuccess && (
                <div className={`alert ${isSuccess ? "success" : "unSend"} ${isHiding ? "fade-out" : "fade-in"}`}>
                    <div className="alert-tittle">
                        <span>Спасибо!</span> Ваша<br /> заявка успешно<br /> принята
                    </div>
                    <div className="alert-description">
                        Мы свяжемся с вами ближайшее время для<br /> обсуждения всех деталей покупки авто
                    </div>
                    <div className="alert-button" onClick={handleHide}>
                        &#8592; Вернуться на главную
                    </div>
                </div>
            )}

            {/* ОШИБКА */}
            {showErrorMessage && (
                <div className="errorrr-message">
                    <h2>❌ Ошибка</h2>
                    <p>Что-то пошло не так.<br />Попробуйте отправить форму ещё раз.</p>
                    <button onClick={() => setShowErrorMessage(false)} className="close-button">
                        Закрыть
                    </button>
                </div>
            )}

            {/* КВИЗ */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={quizNumber <= quizTitles.length ? `quiz-${quizNumber}` : 'done'}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.4 }}
                >
                    {quizNumber <= quizTitles.length ? (
                        <QuizItem
                            title={quizTitles[quizNumber - 1]}
                            label={quizLabels[quizNumber - 1]}
                            answer={answers[quizNumber - 1]}
                            onChange={handleAnswerChange}
                            onNext={handleNext}
                            onBack={handleBack}
                            error={errors[quizNumber - 1]}
                            options={quizOptions[quizNumber - 1]}
                            onOptionSelect={handleOptionSelect}
                            isPhoneInput={quizNumber === 5}
                            step={quizNumber}
                            total={quizTitles.length}
                        />
                    ) : (
                        <div className="quiz-finish">✅ Все квизы пройдены! Спасибо!</div>
                    )}
                </motion.div>
            </AnimatePresence>
        </div>
    );
};

export default QuizSection;
