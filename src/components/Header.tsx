import {useState, useEffect, useRef} from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// @ts-ignore
import headerLogo from "../img/headerLogo.png";
// @ts-ignore
import slide1 from "../img/header-back.png"
// @ts-ignore
import slide2 from "../img/slide2.png"
// @ts-ignore
import slide3 from "../img/slide3.png"
// @ts-ignore
import navbarLogo from "../img/navbarLogo.png";


function Header({menuActive, setMenuActive}) {

    const [activeIndex, setActiveIndex] = useState(0)

    let sliderRef: any = useRef(null);

    useEffect(() => {
        if (menuActive) {
            sliderRef.slickPause();
        } else {
            sliderRef.slickPlay();
        }
    }, [menuActive]);

    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 7000,
        arrows: true,
        pauseOnHover: false,
        beforeChange: (_, next) => setActiveIndex(next),
    };

    const toggleMenu = () => {
        setMenuActive(!menuActive);

        console.log("123")

        if (menuActive) {
            document.body.classList.remove("lock");
        } else {
            document.body.classList.add("lock");
        }
    }

    return (

        <header id="header">
            {activeIndex === 0 && (
                <div className="slider-content">
                    <a href="https://mostauto.by"><img className={`headerLogo ${menuActive ? "active" : ""}`} src={headerLogo} alt="Logo"/></a>
                    <div className="header-tittle">АВТОМОБИЛИ ИЗ<br />ЕВРОПЫ И США</div>
                    <div className={`headerMenu ${menuActive ? "active" : ""}`}>
                        <div className={`header-burger header-burger-close ${menuActive ? "active" : ""}`}
                             onClick={toggleMenu}>
                            <span></span>
                        </div>

                        <div className={`header-menu ${menuActive ? "active" : ""}`}>
                            <div className="header-list">
                                <a href="https://mostauto.by"><img className="headerLogo-open" src={headerLogo}
                                                                   alt="Logo"/></a>
                                <div className={`header-burger header-burger-open ${menuActive ? "active" : ""}`}
                                     onClick={toggleMenu}>
                                    <span></span>
                                </div>
                                <div className="header-list-item header-list-item-main"><a href="#">Главная</a></div>
                                <hr className="header-list-item-main-hr"/>
                                <div className={`header-list-item ${menuActive ? "active" : ""}`}
                                     onClick={toggleMenu}>
                                    <hr/>
                                    <a href="#Popular">Популярные авто</a></div>
                                <div className={`header-list-item ${menuActive ? "active" : ""}`}
                                     onClick={toggleMenu}>
                                    <hr/>
                                    <a href="#Delivery">Подбор и доставка</a></div>
                                <div className={`header-list-item ${menuActive ? "active" : ""}`}
                                     onClick={toggleMenu}>
                                    <hr/>
                                    <a href="#Tariffs">Тарифы</a></div>
                                <div className={`header-list-item ${menuActive ? "active" : ""}`}
                                     onClick={toggleMenu}>
                                    <hr/>
                                    <a href="#footer">Контакты</a></div>
                            </div>
                        </div>

                        <div className={`menu-menu ${menuActive ? "active" : ""}`}>
                            <div>MENU</div>
                        </div>
                    </div>
                </div>
            )}
            {(activeIndex === 1 || activeIndex === 2) && (
                <div>
                    <div className={`header-burger header-burger-close sec-slide ${menuActive ? "active" : ""}`}
                         onClick={toggleMenu}>
                        <span></span>
                    </div>

                    <div className={`header-menu ${menuActive ? "active" : ""}`}>
                        <div className="header-list">
                            <a href="https://mostauto.by"><img className="headerLogo-open" src={headerLogo} alt="Logo"/></a>
                            <div className={`header-burger header-burger-open ${menuActive ? "active" : ""}`}
                                 onClick={toggleMenu}>
                                <span></span>
                            </div>
                            <div className="header-list-item header-list-item-main"><a href="#">Главная</a></div>
                            <hr className="header-list-item-main-hr"/>
                            <div className={`header-list-item ${menuActive ? "active" : ""}`}
                                 onClick={toggleMenu}>
                                <hr/>
                                <a href="#Popular">Популярные авто</a></div>
                            <div className={`header-list-item ${menuActive ? "active" : ""}`}
                                 onClick={toggleMenu}>
                                <hr/>
                                <a href="#Delivery">Подбор и доставка</a></div>
                            <div className={`header-list-item ${menuActive ? "active" : ""}`}
                                 onClick={toggleMenu}>
                                <hr/>
                                <a href="#Tariffs">Тарифы</a></div>
                            <div className={`header-list-item ${menuActive ? "active" : ""}`}
                                 onClick={toggleMenu}>
                                <hr/>
                                <a href="#footer">Контакты</a></div>
                        </div>
                    </div>
                </div>

            )
            }

            <Slider
                // @ts-ignore
            ref={slider => (sliderRef = slider)} {...settings}
            >
                <div className="background-container">
                    <img src={slide1} alt="Background" className="background-image"/>
                </div>

                <div className="background-container">
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
                            <div className="header-slider-content-item-flex"><span className="point point1"></span>богатая
                                комплектация
                            </div>
                            <div className="header-slider-content-item-flex"><span className="point point1"></span>обязательная
                                проверка по базам данных и истории ДТП
                            </div>
                        </div>
                        <div className="header-slider-content-item">
                            <div className="header-slider-content-item-flex"><span className="point point1"></span>доставка
                                от 70 дней
                            </div>
                            <div className="header-slider-content-item-flex"><span className="point point1"></span>лучшее
                                решение для бензиновых автомобилей
                            </div>
                        </div>
                        <div className="button-cont">
                            <div className="header-slider-content-button"><a href="#form">ПОДОБРАТЬ</a></div>
                            <a href="#header"><img className="logo-button" src={navbarLogo} alt=""/></a>
                        </div>
                    </div>
                </div>

                <div className="background-container">
                    <img src={slide3} alt="Background" className="background-image background-image2"/>
                    <div className="slider-tittle slider-tittle3">АВТОМОБИЛИ ИЗ</div>
                    <div className="slider-country slider-country3">ЕВРОПЫ</div>
                    <div className="header-slider-content">

                        <div className="header-slider-content-item">
                            <div className="header-slider-content-item-flex"><span className="point point1"></span>честная
                                выгода до <b>15%</b> на популярные модели и до <b>30%</b> на премиум
                            </div>
                            <div className="header-slider-content-item-flex"><span className="point point1"></span>доставка
                                от 2 недель
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
                                решение для дизельных автомобилей
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

        </header>
    );
}

export default Header;
