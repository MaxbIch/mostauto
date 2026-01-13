import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const TG_BOT_TOKEN = '7200185051:AAFWyEK-IJeXQLyWKZ_nqs20eX60iBktZZw';
const CHAT_ID = '-1002277175421';

interface QuizStep {
  question: string;
  options: string[];
}

const steps: QuizStep[] = [
  {
    question: 'В каком состоянии планируете приобрести авто?',
    options: [
      'Новый автомобиль',
      'Б/у, но в идеальном состоянии',
      'С повреждениями для максимальной выгоды',
    ],
  },
  {
    question: 'Какая марка/модель авто вас интересует?',
    options: [
      'BMW',
      'Volkswagen',
      'Ford',
      'Toyota',
      'Mercedes',
      'Другое',
    ],
  },
  {
    question: 'Ориентировочный бюджет в $?',
    options: [
      '$10 000 – $15 000',
      '$15 000 – $20 000',
      '$20 000 – $30 000',
      '$30 000 – $40 000',
      '$40 000 – $50 000',
      'Более $50 000',
    ],
  },
];

const stepVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 80 : -80,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction > 0 ? -80 : 80,
    opacity: 0,
  }),
};

const QuizSection2: React.FC = () => {
  const [step, setStep] = useState(0);
  const [direction, setDirection] = useState(1);
  const [answers, setAnswers] = useState<string[]>([]);
  const [customBudget, setCustomBudget] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('+375 ');
  const [isSuccess, setIsSuccess] = useState(false);
  const [isHiding, setIsHiding] = useState(false);
  const [error, setError] = useState(false);

  const progressPercent = Math.round((step / (steps.length + 1)) * 100);

  if (isSuccess) {
    return (
      <section className="quiz2-section">
        <div className={`alert success ${isHiding ? 'fade-out' : 'fade-in'}`}>
          <div className="alert-tittle">
            <span>Спасибо!</span> Ваша<br /> заявка успешно<br /> принята
          </div>

          <div className="alert-description">
            Мы свяжемся с вами ближайшее время<br />
            для обсуждения всех деталей
          </div>

          <div
            className="alert-button"
            onClick={() => {
              setIsHiding(true);
              setTimeout(() => {
                setIsSuccess(false);
                setIsHiding(false);
                setStep(0);
                setAnswers([]);
                setCustomBudget('');
                setName('');
                setPhone('+375 ');
              }, 1500);
            }}
          >
            ← Вернуться на главную
          </div>
        </div>
      </section>
    );
  }

  const handleOptionClick = (option: string) => {
    const updated = [...answers];

    if (step === 1 && option === 'Другое') {
      updated[step] = '';
      setAnswers(updated);
      return;
    }

    updated[step] = option;
    setAnswers(updated);

    setDirection(1);
    setTimeout(() => setStep((prev) => prev + 1), 150);
  };

  const goNext = () => {
    if (step === 1 && answers[1] === '') {
      if (!customBudget.trim()) return;
      const updated = [...answers];
      updated[step] = customBudget;
      setAnswers(updated);
      setCustomBudget('');
    }
    setDirection(1);
    setStep(step + 1);
  };

  const goBack = () => {
    if (step > 0) {
      setDirection(-1);
      setStep(step - 1);
    }
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, '');
    if (value.startsWith('375')) value = value.slice(3);

    let result = '+375';
    if (value.length > 0) result += ' ' + value.slice(0, 2);
    if (value.length > 2) result += ' ' + value.slice(2, 5);
    if (value.length > 5) result += ' ' + value.slice(5, 7);
    if (value.length > 7) result += ' ' + value.slice(7, 9);

    setPhone(result);
  };

  const sendToTelegram = async () => {
    const message = `
🆕 Новый квиз
Состояние авто: ${answers[0]}
Марка: ${answers[1]}
Бюджет: ${answers[2]}
Имя: ${name}
Телефон: ${phone}
    `;

    try {
      const res = await fetch(
        `https://api.telegram.org/bot${TG_BOT_TOKEN}/sendMessage`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            chat_id: CHAT_ID,
            text: message,
          }),
        }
      );

      const data: { ok: boolean } = await res.json();
      if (data.ok) {
        setIsSuccess(true);
        setError(false);
      } else {
        setError(true);
      }
    } catch {
      setError(true);
    }
  };

  return (
      <section className="quiz2-section">
          <div className="quiz2-card-tittle">Бесплатный подбор авто из США с<br/> выгодой до 40% для белорусов</div>
          <div className="quiz2-card-description">Оставьте ваш номер телефона ниже и менеджер свяжется с вами в течение 15 минут. Подбор абсолютно бесплатный и ни к чему вас не обязывает!</div>
          <div className="quiz2-card">
              <div className="quiz2-progress">
                  Шаг {step + 1} / 4
                  <div className="quiz2-progress-bar">
                      <motion.div
                          className="quiz2-progress-fill"
                          initial={{width: 0}}
                          animate={{width: `${progressPercent}%`}}
                          transition={{duration: 0.4}}
                      />
                  </div>
              </div>

              <AnimatePresence mode="wait" custom={direction}>
                  <motion.div
                      key={step}
                      custom={direction}
                      variants={stepVariants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      transition={{duration: 0.35, ease: 'easeOut'}}
                  >
                      {step < steps.length && (
                          <>
                              <h3 className="quiz2-question">{steps[step].question}</h3>

                              <div className="quiz2-options">
                                  {steps[step].options.map((option) => (
                                      <button
                                          key={option}
                                          className={`quiz2-option ${
                                              answers[step] === option ? 'quiz2-option-active' : ''
                                          }`}
                                          onClick={() => handleOptionClick(option)}
                                      >
                                          {option}
                                      </button>
                                  ))}
                              </div>

                              {step === 1 && answers[1] === '' && (
                                  <input
                                      className="quiz2-input"
                                      placeholder="Введите ваш бюджет"
                                      value={customBudget}
                                      onChange={(e) => setCustomBudget(e.target.value)}
                                      style={{marginTop: 16}}
                                  />
                              )}

                              <div className="quiz2-navigation">
                                  <button
                                      className="quiz2-back"
                                      onClick={goBack}
                                      disabled={step === 0}
                                  >
                                      Назад
                                  </button>

                                  <button
                                      className="quiz2-next"
                                      onClick={goNext}
                                      disabled={
                                          step !== 1
                                              ? !answers[step]
                                              : answers[1] === '' && !customBudget.trim()
                                      }
                                  >
                                      Далее
                                  </button>
                              </div>
                          </>
                      )}

                      {step === steps.length && (
                          <>
                              <h3 className="quiz2-question">
                                  Как мы можем к вам обращаться?
                              </h3>

                              <input
                                  className="quiz2-input"
                                  placeholder="Ваше имя"
                                  value={name}
                                  onChange={(e) => setName(e.target.value)}
                              />

                              <input
                                  className="quiz2-input"
                                  placeholder="+375 XX XXX XX XX"
                                  value={phone}
                                  onChange={handlePhoneChange}
                                  style={{marginTop: 12}}
                              />

                              <div className="quiz2-navigation">
                                  <button className="quiz2-back" onClick={goBack}>
                                      Назад
                                  </button>

                                  <button
                                      className="quiz2-submit"
                                      onClick={sendToTelegram}
                                      disabled={!name.trim() || phone.length < 17}
                                  >
                                      Отправить
                                  </button>
                              </div>
                          </>
                      )}
                  </motion.div>
              </AnimatePresence>

              {error && (
                  <div className="quiz2-error">
                      ❌ Ошибка отправки. Попробуйте ещё раз.
                  </div>
              )}
          </div>
      </section>
  );
};

export default QuizSection2;
