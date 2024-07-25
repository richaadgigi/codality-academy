import React from 'react';
import { Link } from 'react-router-dom';

const NavbarLinks = (props) => {
    const { sidebar, active } = props;
    return (
        <div className={'main xui-d-flex ' + (sidebar ? ' sidebar xui-flex-dir-column xui-grid-gap-3 ' : ' xui-flex-ai-center xui-grid-gap-1-half ') + (active ? ' active ' : ' not-active ')}>
            <Link to={'/'}>Programs</Link>
            <Link to={'/about'}>About</Link>
        </div>
    );
};

export default NavbarLinks;