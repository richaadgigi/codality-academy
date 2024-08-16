import { ShoppingCartPlus } from '@carbon/icons-react';
import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import Error from './alerts/Error';

const ProgramCard = (props) => {
    const { obj, bought } = props;
    const [ errMsg, setErrMsg ] = useState(null);
    const isUniqueIdExists = (array, uniqueId) => {
        return array.some(obj => obj.unique_id === uniqueId);
    }
    const addToCart = (obj) => {
        const cartCookie = Cookies.get('cartItems', {path: '/'});
        let cartItems = [];
        if(cartCookie){
            cartItems = JSON.parse(cartCookie);
        }
        if(!isUniqueIdExists(cartItems, obj.unique_id)){
            cartItems.push(obj);
            Cookies.set('cartItems', JSON.stringify(cartItems), {expires: 7});
        } else {
            setErrMsg("Already added to cart!");
            setTimeout(() => {
                setErrMsg(null);
            }, 2800);
        }
    }
    useEffect(() => {
        window.xuiLazyLoadings();
    }, []);
    return (
        <>
        <div className='xui-bg-white xui-bdr-rad-2 xui-p-1'>
            <div className='xui-h-200 xui-overflow-hidden xui-bdr-rad-1'>
                <img className='xui-w-fluid-100 xui-h-fluid-100' src={'https://res.cloudinary.com/xnyder/image/upload/v1722939746/ca/brand/codality-empty-image_zfe3km.png'} alt="course image" xui-img-src={obj.file ? obj.file : 'https://res.cloudinary.com/xnyder/image/upload/v1722939746/ca/brand/codality-empty-image_zfe3km.png'} />
            </div>
            <div className='xui-mt-1-half'>
                <h4 className='xui-font-sz-120 xui-font-w-600'>{obj.title}</h4>
                <p className='xui-font-sz-85 xui-opacity-6 xui-line-height-1-half xui-mt-half'>{obj.content}</p>
                <hr className='xui-my-1' />
                {bought ? <div className='xui-badge xui-badge-success xui-font-sz-70 xui-bdr-rad-2 xui-font-w-700'><span>Completed</span></div> : <div className='xui-d-flex xui-flex-ai-center xui-flex-jc-space-between'>
                    <span className='xui-font-sz-110 xui-font-w-bolder xui-opacity-8'>₦{Number(obj.amount).toLocaleString()}</span>
                    <div className='xui-cursor-pointer xui-w-40 xui-h-40 xui-d-flex xui-flex-ai-center xui-flex-jc-center xui-bdr-rad-circle xui-bg-light' onClick={() => addToCart(obj)}>
                        <ShoppingCartPlus size={18} />
                    </div>
                </div>}
            </div>
        </div>
        <Error name={`${obj.unique_id}`} message={errMsg} />
        </>
    );
};

export default ProgramCard;