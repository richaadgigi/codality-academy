import { ShoppingCart } from '@carbon/icons-react';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';

const CartIcon = () => {
    const [ cartNo, setCartNo ] = useState(0);
    useEffect(() => {
        // Function to update the cart number
        const updateCartNo = () => {
            const cartCookie = Cookies.get('cartItems');
            if (cartCookie) {
                setCartNo(JSON.parse(cartCookie).length);
            } else {
                setCartNo(0); // Reset to 0 if the cookie is not present
            }
        };

        // Update cart number initially
        updateCartNo();

        // Set up interval to poll the cookie
        const interval = setInterval(() => {
            updateCartNo();
        }, 1000); // Adjust the interval time as needed

        // Clean up the interval on component unmount
        return () => clearInterval(interval);
    }, []);
    return (
        <Link className='cart' to={'/cart'}>
            <ShoppingCart size={24} />
            <div className='cart-number xui-d-inline-flex xui-flex-ai-center xui-flex-jc-center'>{cartNo}</div>
        </Link>
    );
};

export default CartIcon;