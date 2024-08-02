import { ShoppingCartPlus } from '@carbon/icons-react';
import React from 'react';
import ProgramCard from '../components/ProgramCard';

const Programs = () => {
    return (
        <>
        <section className='xui-container xui-py-5 xui-lg-py-8 ca-bg-dark-purple xui-text-white xui-pos-relative'>
            <h1 className='xui-font-sz-250 xui-md-font-sz-350 xui-lg-font-sz-400 xui-mt-4 xui-lg-mt-4 xui-lg-w-fluid-70 xui-font-w-700'>Our Programs</h1>
            <p className='xui-font-sz-100 xui-lg-font-sz-110 xui-opacity-6 xui-w-fluid-80 xui-lg-w-fluid-70 xui-line-height-2 xui-lg-line-height-2-half'>Welcome to Jupita Academy, where innovation meets education in the dynamic world of technology. At Jupita Academy, we are passionate about empowering individuals with the skills and knowledge needed to thrive in the digital era.</p>
        </section>
        <section className='xui-container xui-py-3 xui-lg-py-4'>
            <div className='xui-d-grid xui-grid-col-1 xui-lg-grid-col-3 xui-grid-gap-2'>
                <ProgramCard />
                <ProgramCard bought={true} />
            </div>
        </section>
        </>
    );
};

export default Programs;