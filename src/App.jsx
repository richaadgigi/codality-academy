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
import Verify from './pages/Verify';
import MyDashboard from './pages/MyDashboard';
import Protected from './components/Protected';

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
                <Route path='/login' element={<Protected redirect={true}><Login /></Protected>} />
                <Route path='/register' element={<Register />} />
                <Route path='/verify' element={<Verify />} />
                <Route path='/forgot-password' element={<ForgotPassword />} />
                <Route path='/cart' element={<Protected><Cart /></Protected>} />
                <Route path='/my-dashboard' element={<Protected><MyDashboard /></Protected>} />
                <Route path='*' element={<NotFound />} />
            </Routes>
            <Footer />
        </BrowserRouter>
        </>
    );
};

export default App;