import React from 'react';

const HWDBox = (props) => {
    const { icon, heading, text } = props;
    return (
        <>
        <div className='xui-p-1 xui-lg-p-1-half ca-bg-light-purple xui-bdr-rad-2'>
            <div className='xui-d-inline-flex xui-flex-ai-center xui-flex-jc-center xui-w-60 xui-h-60 xui-bdr-rad-1 ca-bg-purple xui-text-white'>
                {icon}
            </div>
            <div className='xui-my-1-half'>
                <h3 className='xui-font-sz-150'>{heading}</h3>
                <p className='xui-mt-1 xui-opacity-6 xui-line-height-2 xui-font-sz-90'>{text}</p>
            </div>
        </div>
        </>
    );
};

export default HWDBox;