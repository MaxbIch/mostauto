// @ts-ignore
import mark from "../img/mark.svg"
// @ts-ignore
import cross from "../img/cross.svg"
import ContactUs from "./ContactUs";

function Tariffs ({ onOpenForm }: { onOpenForm: () => void }) {
    return (
        <div id="Tariffs" className="container">
        <h3 className="tariffs-container-tittle">ТАРИФЫ</h3>
        <div className="tariffs-content row">
			<div className="tariffs-1">
				<h3>ТОЛЬКО ДОСТАВКА</h3>
				<span></span>
				<div>
					<div className="include"><img src={mark} alt=""/>Базовая консультация менеджера без организации
						подбора автомобиля
					</div>
					<div className="no-include"><img src={cross} alt=""/>Проверка истории автомобиля, предварительная
						оценка повреждений,
						предоставление отчёта CarFax
					</div>
					<div className="include"><img src={mark} alt=""/> Подача заявки на участии в аукционе по присланному
						номеру лота и
						ставке по нему
					</div>
					<div className="include"><img src={mark} alt=""/>Участие в аукционе</div>
					<div className="no-include"><img src={cross} alt=""/>Поиск нового автомобиля в случае проигрыша в
						аукционе. Повторяем
						этот процесс столько раз сколько потребуется до победы!
					</div>
					<div className="include"><img src={mark} alt=""/>Оформление всех необходимых документов и
						организация доставки в
						Беларусь
					</div>
					<div className="include"><img src={mark} alt=""/>Приёмка автомобиля в Беларуси</div>
					<div className="no-include"><img src={cross} alt=""/>Сопровождение по подбору запчастей для вашего
						автомобиля из
						внешних рынков
					</div>
					<div className="no-include"><img src={cross} alt=""/>Сопровождение в восстановлении автомобиля
						согласно предпочтениям
						клиента
					</div>
				</div>
                <div className="tariffs-price-all">
                    <h2 className="tariffs-price">390 BYN</h2>
                    <div className="tariffs-price-button">УЗНАТЬ ПОДРОБНЕЕ</div>
                    <div className="tariffs-price-contact"><a href="#form">СВЯЗАТЬСЯ</a></div>
                </div>

            </div>
            <div className="tariffs-2">
                <h3>СТАНДАРТ</h3>
				<span></span>
				<div>
					<div className="include"><img src={mark} alt=""/> Первичная консультация и подбор автомобиля по
						требованиям клиента
					</div>
					<div className="include"><img src={mark} alt=""/> Проверка истории автомобиля, предварительная
						оценка повреждений, предоставление отчёта
						CarFax
					</div>
					<div className="include"><img src={mark} alt=""/> Участие в аукционе</div>
					<div className="include"><img src={mark} alt=""/> Поиск нового автомобиля в случае проигрыша в
						аукционе. Повторяем этот процесс столько
						раз сколько потребуется до победы!
					</div>
					<div className="include"><img src={mark} alt=""/> Оформление всех необходимых документов и
						организация доставки в Беларусь
					</div>
					<div className="include"><img src={mark} alt=""/> Приёмка автомобиля в Беларуси</div>
					<div className="no-include"><img className="delivery-cross" src={cross} alt=""/> Сопровождение по
						подбору запчастей для вашего автомобиля из внешних рынков
					</div>
					<div className="no-include"><img src={cross} alt=""/> Сопровождение в восстановлении автомобиля
						согласно предпочтениям клиента
					</div>
					<div className="no-include fake"><img src={cross} alt=""/> Сопровождение в восстановлении автомобиля
						согласно предпочтениям клиента
					</div>
				</div>
                <div className="tariffs-price-all">
                    <h2 className="tariffs-price">690 BYN</h2>
                    <div className="tariffs-price-button">УЗНАТЬ ПОДРОБНЕЕ</div>
                    <div className="tariffs-price-contact"><a href="#form">СВЯЗАТЬСЯ</a></div>
                </div>

            </div>
            <div className="tariffs-3">
            <h3>ПРЕМИУМ</h3>
                <span></span>
                <div>
                    <div className="include"><img src={mark} alt=""/> Первичная консультация и подбор автомобиля по
                        требованиям клиента
                    </div>
                    <div className="include"><img src={mark} alt=""/> Проверка истории автомобиля, предварительная
                        оценка повреждений, предоставление отчёта CarFax
                    </div>
                    <div className="include"><img src={mark} alt=""/> Участие в аукционе</div>
                    <div className="include"><img src={mark} alt=""/> Поиск нового автомобиля в случае проигрыша в
                        аукционе. Повторяем этот процесс столько раз сколько потребуется до победы!
                    </div>
                    <div className="include"><img src={mark} alt=""/> Оформление всех необходимых документов и
                        организация доставки в Беларусь
                    </div>
                    <div className="include"><img src={mark} alt=""/> Приёмка автомобиля в Беларуси</div>
                    <div className="include"><img src={mark} alt=""/> Сопровождение по подбору запчастей для вашего
                        автомобиля из внешних рынков
                    </div>
                    <div className="include"><img src={mark} alt=""/> Сопровождение в восстановлении автомобиля согласно
                        предпочтениям клиента
                    </div>
                    <div className="include fake"><img src={mark} alt=""/> Сопровождение в восстановлении автомобиля
                        согласно предпочтениям клиента
                    </div>

                </div>
                <div className="tariffs-price-all">
                    <h2 className="tariffs-price">1690 BYN</h2>
                    <div className="tariffs-price-button">УЗНАТЬ ПОДРОБНЕЕ</div>
                    <div className="tariffs-price-contact"><a href="#form">СВЯЗАТЬСЯ</a></div>
                </div>
            </div>
        </div>
            <ContactUs tittle={"ТАРИФЫ"} onOpenForm={onOpenForm} />
        </div>
    )
}

export default Tariffs;