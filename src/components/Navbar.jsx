import { Menu, ShoppingCart } from '@carbon/icons-react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import NavbarLinks from './NavbarLinks';

const Navbar = () => {
    const [ isActive, setIsActive ] = useState(false);
    return (
        <>
        <nav className='ca-navbar xui-d-inline-flex xui-flex-ai-center xui-flex-jc-space-between xui-box-shadow xui-p-1 xui-lg-p-1-half'>
            <div className='brand'>
                <Link to={'/'}><img className='xui-img-100' src='https://res.cloudinary.com/xnyder/image/upload/v1721748502/ca/brand/CODALITY_12_xvdzw0.png' alt='logo' /></Link>
            </div>
            <div className='links xui-d-flex xui-flex-ai-center xui-flex-jc-flex-end xui-md-flex-jc-space-between'>
                <NavbarLinks />
                <div className='fixed xui-d-flex xui-flex-ai-center xui-grid-gap-1-half'>
                    <Link className='cart' to={'/'}>
                        <ShoppingCart size={24} />
                        <div className='cart-number xui-d-inline-flex xui-flex-ai-center xui-flex-jc-center'>2</div>
                    </Link>
                    <Link className='action-btn xui-d-none xui-md-d-inline-block' to={'/'}>Get Started</Link>
                    <button onClick={() => setIsActive(!isActive)} className='action-btn xui-cursor-pointer xui-d-inline-block xui-md-d-none' to={'/'}>
                        <Menu size={24} />
                    </button>
                </div>
            </div>
        </nav>
        <NavbarLinks sidebar={true} active={isActive} />
        </>
    );
};

export default Navbar;