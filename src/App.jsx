import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Index from './pages/Index';
import "./assets/stylings/main.css"
import NotFound from './pages/NotFound';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import About from './pages/About';
import Programs from './pages/Programs';
import Login from './pages/Login';
import Register from './pages/Register';
import ForgotPassword from './pages/ForgotPassword';
import Cart from './pages/Cart';

const App = () => {
    return (
        <>
        <BrowserRouter>
            <Navbar />
            <ScrollToTop />
            <Routes>
                <Route path='/' element={<Index />} index />
                <Route path='/about' element={<About />} />
                <Route path='/programs' element={<Programs />} />
                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<Register />} />
                <Route path='/forgot-password' element={<ForgotPassword />} />
                <Route path='/cart' element={<Cart />} />
                <Route path='*' element={<NotFound />} />
            </Routes>
            <Footer />
        </BrowserRouter>
        </>
    );
};

export default App;