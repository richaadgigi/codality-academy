import { ArrowRight } from '@carbon/icons-react';
import React from 'react';
import { Link } from 'react-router-dom';

const JoinTheCommunity = () => {
    return (
        <>
        <section className='xui-container xui-py-3 xui-lg-py-5'>
            <div className='ca-bg-dark-purple xui-text-white xui-px-1 xui-py-3 xui-lg-py-4 xui-bdr-rad-2'>
                <div className='xui-text-center'>
                    <h2 className='xui-font-sz-200 xui-md-font-sz-350 xui-lg-font-sz-350 xui-font-w-700 xui-lg-w-fluid-80 xui-mx-auto'>Be a part of our community of over 1,000+ learners</h2>
                    <p className='xui-font-sz-100 xui-lg-font-sz-110 xui-opacity-8 xui- xui-mx-auto xui-lg-w-fluid-70 xui-line-height-2 xui-lg-line-height-2-half xui-mt-1'>A community for learning, building, and creating. A resource for professional growth. A network of like-minded individuals.</p>
                    <div className='xui-mt-2'>
                        <Link className='ca-btn xui-btn xui-btn-white ca-text-dark-purple xui-d-inline-flex xui-flex-ai-center xui-grid-gap-half xui-bdr-rad-2' to={'/'}>
                            <span className='ca-animated xui-font-sz-100'>Join the community</span>
                            <ArrowRight size={18.4} />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
};

export default JoinTheCommunity;