import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// import function to register Swiper custom elements
import { register } from 'swiper/element/bundle';
import { GeneralProvider } from './components/GeneralContext.jsx';
// register Swiper custom elements
register();

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <GeneralProvider>
            <App />
        </GeneralProvider>
    </React.StrictMode>,
)
