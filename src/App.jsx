import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Index from './pages/Index';
import "./assets/stylings/main.css"

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Index />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;