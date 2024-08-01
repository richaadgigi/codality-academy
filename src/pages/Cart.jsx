import React from 'react';
import CartItem from '../components/CartItem';

const Cart = () => {
    return (
        <>
        <section className='xui-container xui-py-5 xui-lg-py-8 ca-bg-dark-purple xui-text-white xui-pos-relative'>
            <h1 className='xui-font-sz-250 xui-md-font-sz-350 xui-lg-font-sz-400 xui-mt-4 xui-lg-mt-4 xui-lg-w-fluid-70 xui-font-w-700'>Cart</h1>
            <p className='xui-font-sz-100 xui-lg-font-sz-110 xui-opacity-6 xui-w-fluid-80 xui-lg-w-fluid-70 xui-line-height-2 xui-lg-line-height-2-half'>Welcome to Jupita Academy, where innovation meets education in the dynamic world of technology. At Jupita Academy, we are passionate about empowering individuals with the skills and knowledge needed to thrive in the digital era.</p>
        </section>
        <section className='xui-container xui-py-3 xui-lg-py-4 xui-bg-white'>
            <div className='xui-row'>
                <div className='xui-col-12 xui-lg-col-7 xui-d-grid xui-grid-col-1 xui-grid-gap-4'>
                    <CartItem />
                    <CartItem />
                    <CartItem />
                    <CartItem />
                    <CartItem />
                </div>
                <div className='xui-col-12 xui-lg-col-5 xui-lg-pl-2 xui-mt-4 xui-lg-mt-none'>
                    <div className='xui-p-1 xui-lg-p-2 xui-bg-light xui-bdr-rad-2 ca-cart-summary'>
                        <h2 className='xui-font-sz-150'>Cart Summary</h2>
                        <p className='xui-font-sz-90 xui-opacity-7 xui-mt-1'>Here's your summary before payment.</p>
                        <hr className='xui-my-1' />
                        <div className='xui-mt-none xui-d-grid xui-grid-col-1 xui-grid-gap-1'>
                            <p className='xui-font-sz-85'><span className='xui-opacity-7'>Subtotal:</span> <span className='xui-opacity-8 xui-font-w-600'>NGN 15,450</span></p>
                            <p className='xui-font-sz-85'><span className='xui-opacity-7'>Tax:</span> <span className='xui-opacity-8 xui-font-w-600'>NGN 705</span></p>
                        </div>
                        <div className='xui-my-2 xui-d-flex xui-flex-ai-center xui-grid-gap-1'>
                            <img className='xui-img-30' src="https://www.svgrepo.com/show/328127/visa.svg" alt="visa" />
                            <img className='xui-img-30' src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/1200px-Mastercard-logo.svg.png" alt="masterlogo" />
                            <img className='xui-img-20' src="https://static-00.iconduck.com/assets.00/paystack-icon-512x504-w7v8l6as.png" alt="paystack" />
                        </div>
                        <button className='xui-btn-block ca-bg-purple xui-text-white xui-bdr-rad-2 xui-font-sz-90 xui-font-w-600'>Pay NGN 120,000</button>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
};

export default Cart;