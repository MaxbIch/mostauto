// @ts-ignore
import footerlogo from "../img/headerLogo.png";
import ContactUs from "./ContactUs";


function Footer({ onOpenForm }: { onOpenForm: () => void }) {
    return (
        <footer id="footer" className="footer">
            <h4>КОНТАКТЫ</h4>
            <div className="footer-container">
                <div className="footer-left">
                    <div>Время работы: <br/>ПН - ПТ: 10:00 - 19:00</div>
					<div>E-mail:<br/><a href="mailto:info@mostauto.by"> info@mostauto.by</a></div>
                    <div className="footer-left-phone">Телефон:<br/><a href="tel:+375445344660"> +375 (44) 534 46 60</a><br/></div>
                    <div>ООО «БРИДЖАВТОБЕЛ»</div>
                    <div>УНП 491392022</div>
                    <div>Мы находимся: <br/> <a href="https://yandex.ru/maps/?rtext=~52.364466,31.026917" target="_blank">г.Гомель, 1-я Техническая улица, 16Ак1</a></div>
                </div>
                <div className="footer-right">
                    <a href="https://mostauto.by"><img className="footerLogo" src={footerlogo} alt=""/></a><br/>
                    <a href="">MOSTAUTO.by</a>
                    <div>Все права защищены</div>
					<div><a href="../Privacy.html">Политика конфиденциальности</a></div>
                    <div>Информация на сайте носит ознакомительный характер и не является публичной офертой</div>
                </div>
            </div>
			<ContactUs tittle={"КОНТАКТЫ"} onOpenForm={onOpenForm} />
        </footer>
    )
}

export default Footer;