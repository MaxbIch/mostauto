import { useState } from "react";
import ContactUs from "./ContactUs";

function Delivery () {

	const [activeTab, setActiveTab] = useState("EU"); // По умолчанию Европа

	const handleTabChange = (tab) => {
		if (activeTab !== tab) {
		  setActiveTab(tab);
		}
	};


    return (
        <div id="Delivery" className="del-container">

            <div className="delivery-container-tittle"><h5 className={activeTab === "EU" ? "active" : ""}
                                                           onClick={() => handleTabChange("EU")}>ЕВРОПА</h5>
                <span>|</span>
                <h5 className={activeTab === "USA" ? "active" : ""} onClick={() => handleTabChange("USA")}>США</h5>
            </div>

            <div className="background">
                <div>ЭТАПЫ</div>
                <div><b>ДОСТАВКИ</b></div>
                <div>АВТО</div>
            </div>

            <div className="desktop">
                {activeTab === "EU" && (
                    <div key="eu" className="fade-in">

                        <div className="steps-wrapper">
                            <div className="steps-top">

                                <div className="step step6">
                                    <div className="step-main">
                                        Передача автомобиля<br/> заказчику и помощь в<br/> восстановлении
                                    </div>
                                    <div className="step-main-number">6</div>
                                    <div className="del-point"></div>
                                    <div className="step-line"></div>
                                    <div className="step-line-text">7-30 дней</div>
                                    <div className="step-line"></div>
                                    <div className="del-point-end"></div>
                                </div>

                                <div className="between-line">
                                    <div className="between-line-vert"></div>
                                </div>

                                <div className="step step1">
                                    <div className="del-point-end"></div>
                                    <div className="step-line"></div>
                                    <div className="step-line-text">1 день</div>
                                    <div className="step-line"></div>
                                    <div className="del-point"></div>
                                    <div className="step-main-number">1</div>
                                    <div className="step-main">
                                        Оформление заявки,<br/> консультация и<br/> предварительный<br/> подбор
                                        автомобиля<br/> менеджером MOSTAUTO
                                    </div>
                                </div>
                            </div>
                            <div className="steps-middle">

                                <div className="step step5">
                                    <div className="step-main">
                                        Приёмка автомобиля в<br/> Беларуси и таможенное<br/> оформление
                                    </div>
                                    <div className="step-main-number">5</div>
                                    <div className="del-point"></div>
                                    <div className="step-line"></div>
                                    <div className="step-line-text">1-2 дня</div>
                                    <div className="step-line step-line-centre"></div>
                                </div>


                                <div className="step step2">
                                    <div className="step-line step-line-centre"></div>
                                    <div className="step-line-text">5-10 дней</div>
                                    <div className="step-line"></div>
                                    <div className="del-point"></div>
                                    <div className="step-main-number">2</div>
                                    <div className="step-main">
                                        Заключение договора,<br/> подбор автомобиля по<br/> заданным требованиям<br/> и
                                        согласование к торгам
                                    </div>
                                </div>
                            </div>
                            <div className="steps-bottom">

                                <div className="step step4">
                                    <div className="step-main">
                                        Доставка автомобиля в<br/> порт, загрузка в контейнер<br/> и
                                        отслеживание до<br/> прибытия в Беларусь
                                    </div>
                                    <div className="step-main-number">4</div>
                                    <div className="del-point"></div>
                                    <div className="step-line"></div>
                                    <div className="step-line-text">2-2,5 мес.</div>
                                    <div className="step-line"></div>
                                    <div className="del-point-end"></div>
                                </div>

                                <div className="between-line">
                                    <div className="between-line-vert-bottom"></div>
                                </div>

                                <div className="step step3">
                                    <div className="del-point-end"></div>
                                    <div className="step-line"></div>
                                    <div className="step-line-text">1-3 дня</div>
                                    <div className="step-line"></div>
                                    <div className="del-point"></div>
                                    <div className="step-main-number">3</div>
                                    <div className="step-main">
                                        Победа в торгах и<br/> оформление документов<br/> для оплаты и
                                        доставки<br/> подобранного автомобиля<br/> или поиск нового
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {activeTab === "USA" && (

                    <div key="usa" className="fade-in">
                        <div className="steps-wrapper">
                            <div className="steps-top">

                                <div className="step step6">
                                    <div className="step-main">
                                        Передача автомобиля<br/> заказчику и помощь в<br/> восстановлении
                                    </div>
                                    <div className="step-main-number">6</div>
                                    <div className="del-point"></div>
                                    <div className="step-line"></div>
                                    <div className="step-line-text">7-30 дней</div>
                                    <div className="step-line"></div>
                                    <div className="del-point-end"></div>
                                </div>

                                <div className="between-line">
                                    <div className="between-line-vert"></div>
                                </div>

                                <div className="step step1">
                                    <div className="del-point-end"></div>
                                    <div className="step-line"></div>
                                    <div className="step-line-text">1 день</div>
                                    <div className="step-line"></div>
                                    <div className="del-point"></div>
                                    <div className="step-main-number">1</div>
                                    <div className="step-main">
                                        Оформление заявки,<br/> консультация и<br/> предварительный<br/> подбор
                                        автомобиля<br/> менеджером MOSTAUTO
                                    </div>
                                </div>
                            </div>
                            <div className="steps-middle">

                                <div className="step step5">
                                    <div className="step-main">
                                        Приёмка автомобиля в<br/> Беларуси и таможенное<br/> оформление
                                    </div>
                                    <div className="step-main-number">5</div>
                                    <div className="del-point"></div>
                                    <div className="step-line"></div>
                                    <div className="step-line-text">1-2 дня</div>
                                    <div className="step-line step-line-centre"></div>
                                </div>


                                <div className="step step2">
                                    <div className="step-line step-line-centre"></div>
                                    <div className="step-line-text">5-10 дней</div>
                                    <div className="step-line"></div>
                                    <div className="del-point"></div>
                                    <div className="step-main-number">2</div>
                                    <div className="step-main">
                                        Заключение договора,<br/> подбор автомобиля по<br/> заданным требованиям<br/> и
                                        согласование к торгам
                                    </div>
                                </div>
                            </div>
                            <div className="steps-bottom">

                                <div className="step step4">
                                    <div className="step-main">
                                        Доставка автомобиля в<br/> порт, загрузка в контейнер<br/> и
                                        отслеживание до<br/> прибытия в Беларусь
                                    </div>
                                    <div className="step-main-number">4</div>
                                    <div className="del-point"></div>
                                    <div className="step-line"></div>
                                    <div className="step-line-text">2-2,5 мес.</div>
                                    <div className="step-line"></div>
                                    <div className="del-point-end"></div>
                                </div>

                                <div className="between-line">
                                    <div className="between-line-vert-bottom"></div>
                                </div>

                                <div className="step step3">
                                    <div className="del-point-end"></div>
                                    <div className="step-line"></div>
                                    <div className="step-line-text">1-3 дня</div>
                                    <div className="step-line"></div>
                                    <div className="del-point"></div>
                                    <div className="step-main-number">3</div>
                                    <div className="step-main">
                                        Победа в торгах и<br/> оформление документов<br/> для оплаты и
                                        доставки<br/> подобранного автомобиля<br/> или поиск нового
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                )}
            </div>


            <div className="mobile">
                {activeTab === "EU" && (
                    <div key="eu" className="fade-in">

                        <div className="steps-wrapper steps-wrapper-mobile">

                            <div className="step step2 step2-mobile">
                                <div className="step-main-number">2</div>
                                <div className="step-main step-main-mobile">
                                    Заключение договора,<br/> подбор автомобиля по<br/> заданным требованиям<br/> и
                                    согласование к торгам
                                </div>
                            </div>

                            <div className="steps-top steps-top-mobile">

                                <div className="step step1">
                                    <div className="step-main-number">1</div>
                                    <div className="step-main step-main-mobile">
                                        Оформление заявки,<br/> консультация и<br/> предварительный<br/> подбор
                                        автомобиля<br/> менеджером MOSTAUTO
                                    </div>
                                </div>

                                <div className="step step3">
                                    <div className="step-main-number">3</div>
                                    <div className="step-main step-main-mobile">
                                        Победа в торгах и<br/> оформление документов<br/> для оплаты и
                                        доставки<br/> подобранного автомобиля<br/> или поиск нового
                                    </div>
                                </div>
                            </div>

                            <div className="del-time-top">
                                <div className="step-line"></div>
                                <div className="step-line-text">5-10 дней</div>
                                <div className="step-line"></div>
                                <div className="del-point-end"></div>
                            </div>

                            <div className="del-time-bottom">
                                <div className="del-point-end"></div>
                                <div className="step-line"></div>
                                <div className="step-line-text">1-2 дня</div>
                                <div className="step-line"></div>
                            </div>

                            <div className="del-time-left">
                                <div className="del-point-end"></div>
                                <div className="step-line"></div>
                                <div className="step-line-text">7-30 дней</div>
                                <div className="step-line"></div>
                                <div className="step-line"></div>
                                <div className="step-line-text">1 день</div>
                                <div className="del-point"></div>
                            </div>

                            <div className="del-time-line"></div>

                            <div className="del-time-right">
                                <div className="del-point-end"></div>
                                <div className="step-line"></div>
                                <div className="step-line-text">2-2,5 мес</div>
                                <div className="step-line"></div>
                                <div className="step-line"></div>
                                <div className="step-line-text">1-3 дня</div>
                                <div className="del-point"></div>
                            </div>

                            <div className="steps-middle steps-middle-mobile">

                                <div className="step step6">
                                    <div className="step-main-number">6</div>
                                    <div className="step-main step-main-mobile">
                                        Передача автомобиля<br/> заказчику и помощь в<br/> восстановлении
                                    </div>
                                </div>

                                <div className="step step4">
                                    <div className="step-main-number">4</div>
                                    <div className="step-main step-main-mobile">
                                        Доставка автомобиля в<br/> порт, загрузка в контейнер<br/> и
                                        отслеживание до<br/> прибытия в Беларусь
                                    </div>
                                </div>
                            </div>

                            <div className="step step5 step5-mobile">
                                <div className="step-main-number">5</div>
                                <div className="step-main step-main-mobile">
                                    Приёмка автомобиля в<br/> Беларуси и таможенное<br/> оформление
                                </div>
                                <div className="step-line step-line-centre"></div>
                            </div>

                        </div>
                    </div>
                )}

                {activeTab === "USA" && (

                    <div key="usa" className="fade-in">

                        <div className="steps-wrapper steps-wrapper-mobile">

                            <div className="step step2 step2-mobile">
                                <div className="step-main-number">2</div>
                                <div className="step-main step-main-mobile">
                                    Заключение договора,<br/> подбор автомобиля по<br/> заданным требованиям<br/> и
                                    согласование к торгам
                                </div>
                            </div>

                            <div className="steps-top steps-top-mobile">

                                <div className="step step1">
                                    <div className="step-main-number">1</div>
                                    <div className="step-main step-main-mobile">
                                        Оформление заявки,<br/> консультация и<br/> предварительный<br/> подбор
                                        автомобиля<br/> менеджером MOSTAUTO
                                    </div>
                                </div>

                                <div className="step step3">
                                    <div className="step-main-number">3</div>
                                    <div className="step-main step-main-mobile">
                                        Победа в торгах и<br/> оформление документов<br/> для оплаты и
                                        доставки<br/> подобранного автомобиля<br/> или поиск нового
                                    </div>
                                </div>
                            </div>

                            <div className="del-time-top">
                                <div className="step-line"></div>
                                <div className="step-line-text">5-10 дней</div>
                                <div className="step-line"></div>
                                <div className="del-point-end"></div>
                            </div>

                            <div className="del-time-bottom">
                                <div className="del-point-end"></div>
                                <div className="step-line"></div>
                                <div className="step-line-text">1-2 дня</div>
                                <div className="step-line"></div>
                            </div>

                            <div className="del-time-left">
                                <div className="del-point-end"></div>
                                <div className="step-line"></div>
                                <div className="step-line-text">7-30 дней</div>
                                <div className="step-line"></div>
                                <div className="step-line"></div>
                                <div className="step-line-text">1 день</div>
                                <div className="del-point"></div>
                            </div>

                            <div className="del-time-line"></div>

                            <div className="del-time-right">
                                <div className="del-point-end"></div>
                                <div className="step-line"></div>
                                <div className="step-line-text">2-2,5 мес</div>
                                <div className="step-line"></div>
                                <div className="step-line"></div>
                                <div className="step-line-text">1-3 дня</div>
                                <div className="del-point"></div>
                            </div>

                            <div className="steps-middle steps-middle-mobile">

                                <div className="step step6">
                                    <div className="step-main-number">6</div>
                                    <div className="step-main step-main-mobile">
                                        Передача автомобиля<br/> заказчику и помощь в<br/> восстановлении
                                    </div>
                                </div>

                                <div className="step step4">
                                    <div className="step-main-number">4</div>
                                    <div className="step-main step-main-mobile">
                                        Доставка автомобиля в<br/> порт, загрузка в контейнер<br/> и
                                        отслеживание до<br/> прибытия в Беларусь
                                    </div>
                                </div>
                            </div>

                            <div className="step step5 step5-mobile">
                                <div className="step-main-number">5</div>
                                <div className="step-main step-main-mobile">
                                    Приёмка автомобиля в<br/> Беларуси и таможенное<br/> оформление
                                </div>
                                <div className="step-line step-line-centre"></div>
                            </div>

                        </div>
                    </div>

                )}
            </div>


            <div className="del-info">
                Указанные сроки являются предварительными и могут корректироваться в зависимости от сложности запроса,
                местоположения автомобиля и др.
            </div>
            <ContactUs tittle={"ПОДБОР И ДОСТАВКА"} type={"black"}/>
        </div>
    );
}


export default Delivery;