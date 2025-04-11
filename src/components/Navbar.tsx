// @ts-ignore
import Arrow2 from "../img/Arrow2.png"
// @ts-ignore
import navbarLogo from "../img/navbarLogo.png"
// @ts-ignore
import telegram from "../img/telegram.png"
// @ts-ignore
import telegramActive from "../img/telegram-active.png"


function Navbar({menuActive, setMenuActive}) {

    const toggleMenu = () => {
        setMenuActive(!menuActive);

        if (menuActive) {
            document.body.classList.remove("lock"); // Убираем класс при закрытии
        } else {
            document.body.classList.add("lock"); // Добавляем класс при открытии
        }
    }

    return (
        <div className={`navbar ${menuActive ? "active" : ""}`}>
            <div className="navbar-left">
                <div className={`header-burger ${menuActive ? "active" : ""}`} onClick={toggleMenu}>
                    <span></span>
                </div>
                MENU
            </div>
            <div className="navbar-right">

                <a href="#header"><img className="logo-navbar" src={navbarLogo} alt=""/></a>
                <div className="telegram-block">
                    <img className="telegram-navbar" src={telegram} alt=""/>
                    <a href="https://t.me/manager_mostauto" target="_blank" rel="noreferrer"><img className="telegram-navbar telegram-navbar-active" src={telegramActive} alt=""/></a>
                </div>
                <div className="navbar-tittle">ПОДОБРАТЬ АВТО<img src={Arrow2} alt=""/></div>
                <div className="navbar-contact-us">
                    <div className="number"><b><a href="tel:+375445344660">+375 (44) 534 46 60</a></b></div>
                </div>
            </div>
        </div>
    )
}

export default Navbar;

