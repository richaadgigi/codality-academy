import React from 'react';

const TestimonialCard = () => {
    return (
        <div className='ca-testimonial-card xui-bdr-rad-1'>
            <div className='xui-d-flex xui-flex-ai-center xui-flex-jc-space-between'>
                <div className='xui-d-inline-flex xui-flex-ai-center xui-grid-gap-half'>
                    <div className='profile xui-bdr-rad-circle xui-bg-light-blue xui-bg-pos-center xui-bg-sz-cover' style={{backgroundImage: 'url(https://images.pexels.com/photos/17692060/pexels-photo-17692060/free-photo-of-close-up-of-kitten.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load)'}}></div>
                    <span className='xui-font-sz-90 xui-font-w-500'>Shawn Mendes</span>
                </div>
                <span className='year xui-opacity-6 xui-font-sz-75'>Feb 2024</span>
            </div>
            <div className='testimony-box xui-mt-1 xui-bdr-rad-1'>
                <p className='xui-font-sz-90 xui-opacity-6 xui-line-height-1-half'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae voluptatem officiis eum velit laudantium nemo atque a.</p>
            </div>
        </div>
    );
};

export default TestimonialCard;