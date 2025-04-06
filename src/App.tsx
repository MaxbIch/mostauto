import './App.css';
import './AppMedia.css';
import Header from "./components/Header";
import {useState} from "react";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Delivery from "./components/Delivery";
import Tariffs from "./components/Tariffs";
import Form from "./components/Form";
import Footer from "./components/Footer";
import CookieBanner from "./components/CookieBanner";
import {Popular} from "./components/Popular";

function App() {
    const [menuActive, setMenuActive] = useState<boolean>(false);

    return (
        <div className="App">
            <Header menuActive={menuActive} setMenuActive={setMenuActive}/>

            <Navbar menuActive={menuActive} setMenuActive={setMenuActive}/>

            <Main/>

            <Popular/>

            <Delivery/>

            <Tariffs/>

            <Form/>

            <Footer/>

            <CookieBanner/>
        </div>
    );
}

export default App;
