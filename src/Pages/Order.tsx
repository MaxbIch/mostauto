import Form from "../components/Form";
import Footer from "../components/Footer";
// @ts-ignore
import Arrow2 from "../img/Arrow2.png"
// @ts-ignore
import navbarLogo from "../img/navbarLogo.png"

function Order(){
    return(

        <div className="order-page">
            <div className="navbar">
                <div className="navbar-right">
                    <a href="https://mostauto.by/"><img className="logo-navbar" src={navbarLogo} alt=""/></a>
                    <a href="https://mostauto.by/"><div className="navbar-tittle">ПЕРЕЙТИ НА САЙТ<img src={Arrow2} alt=""/></div></a>
                </div>
            </div>

            <Form/>

            <Footer/>

        </div>
    )
}

export default Order;