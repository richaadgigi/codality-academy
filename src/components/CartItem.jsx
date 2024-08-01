import React from 'react';

const CartItem = () => {
    return (
        <>
        <div className='xui-d-flex'>
            <div className='xui-w-60 xui-h-60 ca-bg-light-purple xui-bdr-rad-1'></div>
            <div style={{width: 'calc(100% - 60px)'}} className='xui-pl-1 xui-pt-half'>
                <p className='xui-font-sz-110 xui-font-w-700'>Web Development</p>
                <span className='xui-opacity-6 xui-d-inline-block xui-mt-half xui-font-sz-90 xui-line-height-1-half xui-lg-w-fluid-70'>Welcome to Jupita Academy, where innovation meets education in the dynamic world of technology...</span>
                <h3 className='xui-font-w-700 xui-font-sz-90 xui-mt-1 xui-opacity-8'>NGN 100,000</h3>
            </div>
        </div>
        </>
    );
};

export default CartItem;