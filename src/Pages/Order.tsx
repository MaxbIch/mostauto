import Form from "../components/Form";
import Footer from "../components/Footer";

// @ts-ignore
import navbarLogo from "../img/navbarLogo.svg"

function Order(){
    // @ts-ignore
    // @ts-ignore
    return(

        <div className="order-page">
            <div className="navbar">
                <div className="navbar-right">
                    <a href="https://mostauto.by/"><img className="logo-navbar" src={navbarLogo} alt=""/></a>
                </div>
            </div>

            <Form/>

            <Footer onOpenForm={function(): void {
                throw new Error("Function not implemented.");
            } }/>

        </div>
    )
}

export default Order;