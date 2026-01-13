import './App.css';
import './AppMedia.css';
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Delivery from "./components/Delivery";
import Tariffs from "./components/Tariffs";
import Form from "./components/Form";
import Footer from "./components/Footer";
import CookieBanner from "./components/CookieBanner";
import { Popular } from "./components/Popular";
import Order from "./Pages/Order";
import QuizSection from "./components/QuizSection";
import QuizSection2 from "./components/QuizSection2";
import MiniForm from "./components/MiniForm";
import FullScreenFormWrapper from "./components/FullScreenFormWrapper";
import InfoSlider from "./components/InfoSlider";
import MapSection from "./components/MapSection";
import Reviews from "./components/Reviews";
// import FormWithImageTriggers from "./components/ImageTrigger";
// import ImageTrigger from "./components/ImageTrigger"; //

function App() {
    const [menuActive, setMenuActive] = useState(false);
    const [formClickedOpen, setFormClickedOpen] = useState(false);
    const [formAutoOpen, setFormAutoOpen] = useState(false);

    // Автоматическое открытие формы через 20 секунд
    useEffect(() => {
        const timer = setTimeout(() => {
            setFormAutoOpen(true);
        }, 40000);
        return () => clearTimeout(timer);
    }, []);

    const openForm = () => setFormClickedOpen(true);
    const closeForm = () => {
        setFormClickedOpen(false);
        setFormAutoOpen(false);
    };

    const isFormVisible = formClickedOpen || formAutoOpen;

    useEffect(() => {
        if (isFormVisible) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    }, [isFormVisible]);

    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route
                        path="/"
                        element={
                            <>
                                <Header onOpenForm={openForm} />
                                <Navbar menuActive={menuActive} setMenuActive={setMenuActive} />
                                <MiniForm />
                                <Reviews />
                                <QuizSection />
                                <Popular onOpenForm={openForm} />
                                <MiniForm />
                                <Tariffs onOpenForm={openForm} />
                                <QuizSection2 />
                                <InfoSlider />
                                <Delivery onOpenForm={openForm} />
                                <MapSection  />
                                <Main onOpenForm={openForm} />
                                <Form />
                                <Footer onOpenForm={openForm} />

                            </>
                        }
                    />
                    <Route path="/order" element={<Order />} />
                </Routes>
                <CookieBanner />
                {isFormVisible && <FullScreenFormWrapper onClose={closeForm} />}
            </Router>
        </div>
    );
}

export default App;
