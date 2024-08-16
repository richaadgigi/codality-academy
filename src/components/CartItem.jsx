import { Close } from '@carbon/icons-react';
import React, { useEffect } from 'react';
import Cookies from 'js-cookie';

const CartItem = (props) => {
    const { obj, onClick } = props;
    const cartCookie = Cookies.get('cartItems', {path: '/'});
    let cartItems = [];
    if(cartCookie){
        cartItems = JSON.parse(cartCookie);
    }
    const truncateString = (str, maxLength) => {
        // Check if the string length is less than or equal to the maxLength
        if (str.length <= maxLength) {
          return str;
        }
        
        // Truncate the string to the specified length
        let truncatedStr = str.slice(0, maxLength);
        
        // Add ellipsis to the end of the truncated string
        return truncatedStr + '...';
    }
    useEffect(() => {
        window.xuiLazyLoadings();
    }, []);
    return (
        <>
        <div className='ca-cart-item xui-d-flex xui-pos-relative'>
            <div className='xui-w-60 xui-h-60 ca-bg-light-purple xui-bdr-rad-1 xui-overflow-hidden'>
                <img className='xui-w-fluid-100 xui-h-fluid-100' src={'https://res.cloudinary.com/xnyder/image/upload/v1722939746/ca/brand/codality-empty-image_zfe3km.png'} alt="course image" xui-img-src={obj.file ? obj.file : 'https://res.cloudinary.com/xnyder/image/upload/v1722939746/ca/brand/codality-empty-image_zfe3km.png'} />
            </div>
            <div style={{width: 'calc(100% - 60px)'}} className='xui-pl-1 xui-pt-half'>
                <p className='xui-font-sz-110 xui-font-w-700'>{obj.title}</p>
                <span className='xui-opacity-6 xui-d-inline-block xui-mt-half xui-font-sz-90 xui-line-height-1-half xui-lg-w-fluid-70'>{truncateString(obj.content, 40)}</span>
                <h3 className='xui-font-w-700 xui-font-sz-90 xui-mt-1 xui-opacity-8'>NGN {Number(obj.amount).toLocaleString()}</h3>
            </div>
            <div onClick={onClick} className='ca-cart-remove xui-d-inline-flex xui-flex-ai-center xui-flex-jc-center xui-bg-light xui-cursor-pointer'>
                <Close />
            </div>
        </div>
        </>
    );
};

export default CartItem;