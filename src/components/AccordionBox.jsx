import { Add, Subtract } from '@carbon/icons-react';
import React from 'react';

const AccordionBox = (props) => {
    const { heading, text } = props;
    return (
        <div className='xui-accordion-box'>
            <div className='xui-accordion-header'>
                <h3 className='xui-accordion-header-text xui-font-w-500'>{heading}</h3>
                <div className='xui-accordion-header-icon'>
                    <div className='xui-accordion-header-icon-open'>
                        <Add size={20} />
                    </div>
                    <div className='xui-accordion-header-icon-close'>
                        <Subtract size={20} />
                    </div>
                </div>
            </div>
            <div className='xui-accordion-content'>
                <span className='xui-line-height-2 xui-font-sz-100 xui-opacity-8'>{text}</span>
            </div>
        </div>
    );
};

export default AccordionBox;