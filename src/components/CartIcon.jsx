import { ShoppingCart } from '@carbon/icons-react';
import React from 'react';
import { Link } from 'react-router-dom';

const CartIcon = () => {
    return (
        <Link className='cart' to={'/'}>
            <ShoppingCart size={24} />
            <div className='cart-number xui-d-inline-flex xui-flex-ai-center xui-flex-jc-center'>0</div>
        </Link>
    );
};

export default CartIcon;