import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Index from './pages/Index';
import "./assets/stylings/main.css"
import NotFound from './pages/NotFound';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import About from './pages/About';

const App = () => {
    return (
        <>
        <BrowserRouter>
            <Navbar />
            <ScrollToTop />
            <Routes>
                <Route index path='/' element={<Index />} />
                <Route path='/about' element={<About />} />
                <Route path='*' element={<NotFound />} />
            </Routes>
            <Footer />
        </BrowserRouter>
        </>
    );
};

export default App;