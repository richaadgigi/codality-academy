import React from 'react';

const FooterHeading = (props) => {
    const { name } = props;
    return (
        <h3 className='xui-font-w-500 xui-font-sz-115'>{name}</h3>
    );
};

export default FooterHeading;