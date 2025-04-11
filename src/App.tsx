import './App.css';
import './AppMedia.css';
import {useState} from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Delivery from "./components/Delivery";
import Tariffs from "./components/Tariffs";
import Form from "./components/Form";
import Footer from "./components/Footer";
import CookieBanner from "./components/CookieBanner";
import {Popular} from "./components/Popular";
import Order from "./Pages/Order";

function App() {
    const [menuActive, setMenuActive] = useState<boolean>(false);

    return (
        <div className="App">
            <Router>

                <Routes>
                    <Route
                        path="/"
                        element={
                            <>
                                <Header menuActive={menuActive} setMenuActive={setMenuActive}/>
                                <Navbar menuActive={menuActive} setMenuActive={setMenuActive}/>
                                <Main/>
                                <Popular/>
                                <Delivery/>
                                <Tariffs/>
                                <Form/>
                                <Footer/>
                            </>
                        }
                    />

                    <Route
                        path="/order"
                        element={
                            <Order />
                        }
                    />
                </Routes>

                <CookieBanner/>
            </Router>
        </div>
    );
}

export default App;
