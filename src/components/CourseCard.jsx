import { ArrowRight } from '@carbon/icons-react';
import React from 'react';
import { Link } from 'react-router-dom';

const CourseCard = (props) => {
    const { title, desc } = props;
    return (
        <div className='ca-course-card xui-text-white xui-bdr-rad-1 xui-px-1-half xui-py-1-half'>
            <h3 className='xui-font-9 xui-lg-font-sz-250'>{title}</h3>
            <p className='xui-mt-1 xui-font-sz-100 xui-line-height-2 xui-opacity-8 xui-lg-w-fluid-85'>{desc}</p>
            <Link className='ca-btn xui-btn xui-btn-black xui-d-inline-flex xui-flex-ai-center xui-grid-gap-half xui-bdr-rad-2 xui-mt-8' to={'/programs'}>
                <span className='ca-animated xui-font-sz-100'>See our catalog</span>
                <ArrowRight size={24} />
            </Link>
        </div>
    );
};

export default CourseCard;