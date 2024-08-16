import React from 'react';

const ProgramCardSkeleton = () => {
    return (
        <div className='xui-bg-white xui-bdr-rad-2 xui-p-1'>
            <div className='xui-h-200 xui-overflow-hidden xui-bdr-rad-1 xui--skeleton'>
                <img className='xui-w-fluid-100 xui-h-fluid-100' src="https://images.pexels.com/photos/95916/pexels-photo-95916.jpeg?auto=compress&cs=tinysrgb&w=400" alt="course image" xui-img-src={'https://images.pexels.com/photos/95916/pexels-photo-95916.jpeg?auto=compress&cs=tinysrgb&w=600'} />
            </div>
            <div className='xui-mt-1-half'>
                <span className='xui-font-sz-120 xui-font-w-600 xui--skeleton'>Graphics Design</span>
                <p className='xui-font-sz-85 xui-opacity-6 xui-line-height-1-half xui-mt-half xui--skeleton'>Welcome to Jupita Academy, where innovation meets education in the dynamic world of technology...</p>
                <hr className='xui-my-1' />
                <div className='xui-d-flex xui-flex-ai-center xui-flex-jc-space-between'>
                    <span className='xui-font-sz-120 xui-font-w-bolder ca-text-dark-purple xui--skeleton'>₦100,000</span>
                    <div className='xui-cursor-pointer xui-w-40 xui-h-40 xui-d-flex xui-flex-ai-center xui-flex-jc-center xui-bdr-rad-circle xui-bg-light xui--skeleton'></div>
                </div>
            </div>
        </div>
    );
};

export default ProgramCardSkeleton;