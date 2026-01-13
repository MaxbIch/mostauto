// @ts-ignore
import navbarLogo from "../img/navbarLogo.svg"
// @ts-ignore
import headerLogo from "../img/headerLogo.png";


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
                <div className={`header-burger header-burger-navbar ${menuActive ? "active" : ""}`} onClick={toggleMenu}>
                    <span></span>
                </div>

                <div className={`header-menu ${menuActive ? "active" : ""}`}>
                    <div className="header-list">
                        <a href="https://mostauto.by"><img className="headerLogo-open" src={headerLogo} alt="Logo"/></a>
                        <div className={`header-burger header-burger-open ${menuActive ? "active" : ""}`}
                             onClick={toggleMenu}>
                            <span></span>
                        </div>
                        <div className="header-list-item header-list-item-main" onClick={toggleMenu}><a
                            href="#header">Главная</a></div>
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
                            <a href="#form">Форма заявки</a></div>
                        <div className={`header-list-item ${menuActive ? "active" : ""}`}
                             onClick={toggleMenu}>
                            <hr/>
                            <a href="#footer">Контакты</a></div>
                    </div>
                </div>

                <div className="menu-menu" onClick={toggleMenu}>MENU</div>
            </div>


            <div className="navbar-right">
                <a href="#header"><img className="logo-navbar" src={navbarLogo} alt=""/></a>
                <a href="tel:+375445344660"> +375 (44) 534 46 60</a>
            </div>
        </div>
    )
}

export default Navbar;

