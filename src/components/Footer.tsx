// @ts-ignore
import footerlogo from "../img/headerLogo.png";
import ContactUs from "./ContactUs";


function Footer() {
    return (
        <footer id="footer" className="footer">
            <h4>КОНТАКТЫ</h4>
            <div className="footer-container">
                <div className="footer-left">
                    <div>Время работы: <br/>ПН - ПТ: 10:00 - 19:00</div>
					<div>E-mail:<br/><a href="mailto:mostauto@gmail.com"> mostauto@gmail.com</a></div>
					<div className="footer-left-phone">Телефон:<br/><a href="tel:+375299576775">+375 (29) 957-67-75</a><br/><a href="tel:+375448576896"> +375 (44) 857-86-68</a><br/></div>
                </div>
                <div className="footer-right">
                    <img className="footerLogo" src={footerlogo} alt=""/><br/>
                    <a href="">MOSTAUTO.by</a>
                    <div>Все права защищены</div>
					<div><a href="../../public/Privacy.html">Политика конфиденциальности</a></div>
                    <div>Информация на сайте носит ознакомительный характер и не является публичной офертой</div>
                </div>
            </div>
			<ContactUs tittle={"КОНТАКТЫ"}/>
        </footer>
    )
}

export default Footer;