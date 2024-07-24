import React from 'react';
import { Link } from 'react-router-dom';

const FooterLink = (props) => {
    const { name, path } = props;
    return (
        <Link className='xui-text-inherit xui-text-dc-none xui-opacity-8 xui-font-sz-80' to={path}>{name}</Link>
    );
};

export default FooterLink;