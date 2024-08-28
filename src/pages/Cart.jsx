import React, { useContext, useEffect, useState } from 'react';
import CartItem from '../components/CartItem';
import { Link, useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import { usePaystackPayment } from "react-paystack";
import { API_URL, INTERNAL_KEY } from "../../globals.json";
import axios from 'axios';
import Error from '../components/alerts/Error';
import Success from '../components/alerts/Success';
import GeneralContext from '../components/GeneralContext';

const Cart = () => {
    const { user } = useContext(GeneralContext);
    const cartCookie = Cookies.get('cartItems', {path: '/'});
    const userCookie = Cookies.get('signedInUser');
    const [ cartItems, setCartItems ] = useState([]);
    const [ isDisabled, setIsDisabled ] = useState(false);
    const [ errMsg, setErrMsg ] = useState(null);
    const [ successMsg, setSuccessMsg ] = useState(null);
    const generateUniqueNumberWithDate = () => {
        const currentDate = new Date().toISOString().replace(/[-:.TZ]/g, ''); // Remove date delimiters for uniqueness
        const randomNum = Math.floor(Math.random() * 10000); // Generate random number between 0 and 9999
        const uniqueNum = `${currentDate}${randomNum}`;
        return uniqueNum;
    }
    const generatedReference = generateUniqueNumberWithDate();
    const cartAmount = Number(cartItems.reduce((sum, item) => sum + item.amount, 0));
    const paystackConfig = {
        publicKey: import.meta.env.VITE_PAYSTACK_PUBLIC_API_KEY_TEST,
    }
    const [ config, setConfig ] = useState(paystackConfig);
    const navigate = useNavigate();
    const cancelPayment = (ref, runFunc) => {
        axios({
            method: 'PUT',
            url: `${API_URL}/cancel/payments/via/reference`,
            headers: {
                "codality-access-key": INTERNAL_KEY,
                "codality-access-token": JSON.parse(userCookie).token
            },
            data: {
                "reference": ref
            }
        })
        .then((res) => {
            setIsDisabled(false);
            if(runFunc){
                payForOrder();
            }
        }, (err) => {
            setIsDisabled(false);
            setErrMsg(err.response.data.message);
            window.xuiAnimeStart('cartErrorAlert');
            setTimeout(() => {
                window.xuiAnimeEnd('cartErrorAlert');
            }, 3200);
        });
    }
    // you can call this function anything
    const onSuccess = (reference) => {
        // Implementation for whatever you want to do with reference and after success call.
        makePayment();
    };
    // you can call this function anything
    const onClose = () => {
        // implementation for  whatever you want to do when the Paystack dialog closed.
        cancelPayment(generatedReference);
    }
    const payForOrder = () => {
        setIsDisabled(true);
        axios({
            method: "POST",
            url: `${API_URL}/add/multiple/payments`,
            data: {
                "gateway": "PAYSTACK",
                "courses": cartItems.map(item => item.unique_id),
                "reference": generatedReference
            },
            headers: {
                "codality-access-token": JSON.parse(userCookie).token
            }
        })
        .then((res) => {
            setConfig({...config, "email": user.email, "amount": cartAmount * 100, "reference": generatedReference});
        })
        .catch((err) => {
            if(err.response.status === 400){
                
            } else {
                setIsDisabled(false);
                setErrMsg(err.response.data.message);
                window.xuiAnimeStart('cartErrorAlert');
                setTimeout(() => {
                    window.xuiAnimeEnd('cartErrorAlert');
                }, 3200);
            }
        });
    }
    const runProperChecks = () => {
        getPayments();
    }
    const getPayments = () => {
        setIsDisabled(true);
        axios({
            method: "GET",
            url: `${API_URL}/payments/via/payment_status?payment_status=Processing`,
            headers: {
                "codality-access-token": JSON.parse(userCookie).token
            }
        })
        .then((res) => {
            console.log(res.data.data.rows.length);
            
            if(res.data.data.rows.length > 0){
                cancelPayment(res.data.data.rows[0].reference, true);
            } else {
                payForOrder();
            }
        })
        .catch((err) => {
            setIsDisabled(false);
        });
    }
    const initializePayment = usePaystackPayment(config);
    const makePayment = () => {
        setIsDisabled(true);
        setSuccessMsg("Setting things up...");
        window.xuiAnimeStart('cartSuccessAlert');
        axios({
            method: "PUT",
            url: `${API_URL}/complete/payments`,
            data: {
                "reference": config.reference
            },
            headers: {
                "codality-access-key": INTERNAL_KEY,
                "codality-access-token": JSON.parse(userCookie).token
            }
        })
        .then((res) => {
            Cookies.remove('cartItems');
            setTimeout(() => {
                navigate('/my-dashboard');
                window.xuiAnimeEnd('cartSuccessAlert');
            }, 3200);
            
        }, (err) => {
            setIsDisabled(false);
            setErrMsg(err.response.data.message);
            window.xuiAnimeStart('cartErrorAlert');
            setTimeout(() => {
                window.xuiAnimeEnd('cartErrorAlert');
            }, 3200);
        });
    }
    useEffect(() => {
        if(cartCookie){
            setCartItems(JSON.parse(cartCookie));
        } else {
            setCartItems([]);
        }
    }, []);
    useEffect(() => {
        // Loading Paystack
        initializePayment(onSuccess, onClose);
    }, [config]);
    const removeObjectById = (arr, uniqueId) => {
        const newCartItems = arr.filter(obj => obj.unique_id !== uniqueId);
        setCartItems(newCartItems);
        Cookies.set('cartItems', JSON.stringify(newCartItems), {expires: 7});
    }
    return (
        <>
        <section className='xui-container xui-py-5 xui-lg-py-8 ca-bg-dark-purple xui-text-white xui-pos-relative'>
            <h1 className='xui-font-sz-250 xui-md-font-sz-350 xui-lg-font-sz-400 xui-mt-4 xui-lg-mt-4 xui-lg-w-fluid-70 xui-font-w-700'>Cart</h1>
            <p className='xui-font-sz-100 xui-lg-font-sz-110 xui-opacity-6 xui-w-fluid-80 xui-lg-w-fluid-70 xui-line-height-2 xui-lg-line-height-2-half'>Welcome to Jupita Academy, where innovation meets education in the dynamic world of technology. At Jupita Academy, we are passionate about empowering individuals with the skills and knowledge needed to thrive in the digital era.</p>
        </section>
        {cartItems && cartItems.length <= 0 && <section className='xui-container xui-py-3 xui-lg-py-4 xui-bg-white'>
            <div className='xui-text-center'>
                <img src="https://img.freepik.com/free-vector/empty-shopping-basket-concept-illustration_114360-17072.jpg?t=st=1722583882~exp=1722587482~hmac=3871dc4b4ac9ff2a311bc0af8f9bbcad9ed8e459973f7014da17fcb1f967315f&w=826" alt="empty cart" className="xui-mx-auto xui-img-200 xui-md-img-250" />
                <p className='xui-opacity-8 xui-mt-1'>Your cart is empty</p>
                <Link to={'/programs'} className='xui-btn ca-bg-purple xui-text-white xui-mt-2 xui-bdr-rad-2 xui-font-sz-90'>See our programs</Link>
            </div>
        </section>}
        {cartItems && cartItems.length > 0 && <section className='xui-container xui-py-3 xui-lg-py-4 xui-bg-white'>
            <div className='xui-row'>
                <div className='xui-col-12 xui-lg-col-7 xui-d-grid xui-grid-col-1 xui-grid-gap-3'>
                    {cartItems.map(item => (
                        <React.Fragment key={item.unique_id}>
                            <CartItem obj={item} onClick={() => removeObjectById(cartItems, item.unique_id)} />
                        </React.Fragment>
                    ))}
                </div>
                <div className='xui-col-12 xui-lg-col-5 xui-lg-pl-2 xui-mt-4 xui-lg-mt-none'>
                    <div className='xui-p-1 xui-lg-p-2 xui-bg-light xui-bdr-rad-2 ca-cart-summary'>
                        <h2 className='xui-font-sz-150'>Cart Summary</h2>
                        <p className='xui-font-sz-90 xui-opacity-7 xui-mt-1'>Here's your summary before payment.</p>
                        <hr className='xui-my-1' />
                        <div className='xui-mt-none xui-d-grid xui-grid-col-1 xui-grid-gap-1'>
                            <p className='xui-font-sz-85'><span className='xui-opacity-7'>Subtotal:</span> <span className='xui-opacity-8 xui-font-w-600'>NGN {Number(cartItems.reduce((sum, item) => sum + item.amount, 0)).toLocaleString()}</span></p>
                            <p className='xui-font-sz-85'><span className='xui-opacity-7'>Tax:</span> <span className='xui-opacity-8 xui-font-w-600'>NGN 0</span></p>
                        </div>
                        <div className='xui-my-2 xui-d-flex xui-flex-ai-center xui-grid-gap-1'>
                            <img className='xui-img-30' src="https://www.svgrepo.com/show/328127/visa.svg" alt="visa" />
                            <img className='xui-img-30' src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/1200px-Mastercard-logo.svg.png" alt="masterlogo" />
                            <img className='xui-img-40' src="https://nigerialogos.com/logos/verve/verve.svg" alt="masterlogo" />
                            <img className='xui-img-20' src="https://nigerialogos.com/logos/paystack/paystack.svg" alt="paystack" />
                        </div>
                        <button onClick={runProperChecks} className={'xui-btn-block ca-bg-purple xui-text-white xui-bdr-rad-2 xui-font-sz-90 xui-font-w-600 ' + (isDisabled && 'ca-btn-disabled')} disabled={isDisabled}>Pay NGN {Number(cartItems.reduce((sum, item) => sum + item.amount, 0)).toLocaleString()}</button>
                    </div>
                </div>
            </div>
        </section>}
        <Error name={'cartErrorAlert'} message={errMsg} />
        <Success name={'cartSuccessAlert'} message={successMsg} />
        </>
    );
};

export default Cart;