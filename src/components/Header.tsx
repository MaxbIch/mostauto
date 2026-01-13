// @ts-ignore
import slide1 from "../img/header-back.png";
// @ts-ignore
import headerLogo from "../img/headerLogo.png";

function Header({ onOpenForm }: { onOpenForm: () => void }) {
    return (
        <header id="header">
            <img src={slide1} alt="Background" className="background-image"/>
            <a href="https://mostauto.by">
                <img className="headerLogo" src={headerLogo} alt="Logo"/>
            </a>

            <div className="header-slider-content-main header-slider-content">

                <div className="slider-content">
                    <div className="header-tittle">
                        ПОДБОР И ДОСТАВКА
                        <br/>
                        АВТОМОБИЛЕЙ
                        <br/>
                        ИЗ США, КОРЕИИ, КИТАЯ
                    </div>
                    <div className="headerMenu">
                        <div className="headerMenu-title" onClick={onOpenForm}>
                            БЕСПЛАТНАЯ КОНСУЛЬТАЦИЯ
                        </div>
                    </div>
                </div>

                <div className="header-slider-content-item">
                    <div className="header-slider-content-item-flex">
                        <span className="point point1"></span>
                        честная выгода до <b>30%</b> на популярные модели и до <b>40%</b> на премиум
                    </div>
                </div>
                <div className="header-slider-content-item">
                    <div className="header-slider-content-item-flex">
                        <span className="point point1"></span>богатая комплектация
                    </div>
                    <div className="header-slider-content-item-flex">
                        <span className="point point1"></span>обязательная проверка по базам данных и истории ДТП
                    </div>
                </div>
                <div className="header-slider-content-item">
                    <div className="header-slider-content-item-flex">
                        <span className="point point1"></span>доставка от 70 дней из США, и от 30 дней из Кореи и Китая
                    </div>
                    <div className="header-slider-content-item-flex">
                        <span className="point point1"></span>Восстановление под ключ
                    </div>
                </div>
                <div className="button-cont">
                    <div className="header-slider-content-button">
                        <a href="#quiz">ПОДОБРАТЬ АВТОМОБИЛЬ</a>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;



