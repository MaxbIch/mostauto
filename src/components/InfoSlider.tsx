import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// @ts-ignore
import navbarLogo from "../img/navbarLogo.svg"
// @ts-ignore
import slide2 from "../img/slide2.jpg"
// @ts-ignore
import slide3 from "../img/slide3.png"

const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 7000,
    arrows: true,
    pauseOnHover: false,

};

function InfoSlider() {
    return (
        <div>
            <Slider {...settings}>
                <div className="background-container background-container-info-slider">
                    <img src={slide2} alt="Background" className="background-image"/>
                    <div className="slider-tittle">АВТОМОБИЛИ ИЗ</div>
                    <div className="slider-country">США</div>
                    <div className="header-slider-content">
                        <div className="header-slider-content-item">
                            <div className="header-slider-content-item-flex"><span className="point point1"></span>честная
                                выгода до <b>30%</b> на популярные модели и до <b>40%</b> на премиум
                            </div>
                            <div className="header-slider-content-item-flex ff"></div>
                        </div>
                        <div className="header-slider-content-item">
                            <div className="header-slider-content-item-flex"><span className="point point1"></span>доставка
                                от 70 дней
                            </div>
                            <div className="header-slider-content-item-flex"><span className="point point1"></span>
                                обязательная проверка по базам данных и истории ДТП
                            </div>
                        </div>
                        <div className="header-slider-content-item">
                            <div className="header-slider-content-item-flex"><span className="point point1"></span>
                                богатая комплектация
                            </div>
                            <div className="header-slider-content-item-flex"><span className="point point1"></span>
                                лучшее решение для <br/>бензиновых автомобилей
                            </div>
                        </div>
                        <div className="button-cont">
                            <div className="header-slider-content-button"><a href="#form">ПОДОБРАТЬ</a></div>
                            <a href="#header"><img className="logo-button" src={navbarLogo} alt=""/></a>
                        </div>
                    </div>
                </div>

                <div className="background-container background-container-info-slider">
                    <img src={slide3} alt="Background" className="background-image background-image2"/>
                    <div className="slider-tittle slider-tittle3">АВТОМОБИЛИ ИЗ</div>
                    <div className="slider-country slider-country3">КОРЕИ</div>
                    <div className="header-slider-content">

                        <div className="header-slider-content-item">
                            <div className="header-slider-content-item-flex"><span className="point point1"></span>честная
                                выгода до <b>15%</b> на популярные модели и до <b>30%</b> на премиум
                            </div>
                            <div className="header-slider-content-item-flex"><span className="point point1"></span>доставка
                                от 3-4 недель
                            </div>
                        </div>
                        <div className="header-slider-content-item">
                            <div className="header-slider-content-item-flex"><span className="point point1"></span>отличное
                                техническое состояние и в 95% случаев без повреждений
                            </div>
                            <div className="header-slider-content-item-flex"><span className="point point1"></span>большой
                                выбор уникальных моделей
                            </div>
                        </div>
                        <div className="header-slider-content-item">
                            <div className="header-slider-content-item-flex"><span className="point point1"></span>лучшее
                                решение для<br/> дизельных автомобилей
                            </div>
                            <div className="header-slider-content-item-flex"><span className="point point1"></span>честные
                                показания счётчика пробега
                            </div>
                        </div>
                        <div className="button-cont">
                            <div className="header-slider-content-button"><a href="#form">ПОДОБРАТЬ</a></div>
                            <a href="#header"><img className="logo-button" src={navbarLogo} alt=""/></a>
                        </div>
                    </div>
                </div>

            </Slider>

            <div style={{display: 'none'}}>
                <img src={slide2} alt="Preload 2"/>
                <img src={slide3} alt="Preload 3"/>
            </div>
        </div>
    )
}

export default InfoSlider;