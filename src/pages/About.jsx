import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import AboutDarkMode from '../components/AboutDarkMode';
import HWDBox from '../components/HWDBox';
import JoinTheCommunity from '../components/JoinTheCommunity';
gsap.registerPlugin(ScrollTrigger);

const About = () => {
    const imageContainer = useRef(null);
    useGSAP(() => {
        gsap.to(imageContainer.current, {
            padding: 0,
            scrollTrigger: {
                trigger: imageContainer.current,
                start: "top center",
                end: "top top",
                scrub: true,
                markers: false,
                pin: false
            }
        });
    });
    useEffect(() => {
        window.xuiLazyLoadings();
    }, []);
    return (
        <>
        <section className='xui-container xui-py-5 xui-lg-py-8 xui-pos-relative ca-header-section'>
            <div className='xui-text-center'>
                <h1 className='xui-font-sz-250 xui-md-font-sz-350 xui-lg-font-sz-500 xui-mt-4 xui-lg-mt-none xui-mx-auto xui-lg-w-fluid-70 xui-font-w-700'>Innovation meets education</h1>
                <p className='xui-font-sz-100 xui-lg-font-sz-110 xui-opacity-6 xui- xui-mx-auto xui-w-fluid-80 xui-lg-w-fluid-70 xui-line-height-2 xui-lg-line-height-2-half'>Welcome to Jupita Academy, where innovation meets education in the dynamic world of technology. At Jupita Academy, we are passionate about empowering individuals with the skills and knowledge needed to thrive in the digital era.</p>
            </div>
        </section>
        <section className='xui-px-none xui-lg-px-2 xui-h-400 xui-lg-h-600 xui-bg-light' ref={imageContainer}>
            <img src="https://images.pexels.com/photos/4144096/pexels-photo-4144096.jpeg?auto=compress&cs=tinysrgb&w=400" xui-img-src={'https://images.pexels.com/photos/4144096/pexels-photo-4144096.jpeg?auto=compress&cs=tinysrgb&w=1600'} alt="a boy learning online" className='xui-w-fluid-100 xui-h-fluid-100' />
        </section>
        <AboutDarkMode />
        <section className='xui-container xui-py-3 xui-lg-py-5'>
            <div className='xui-text-center'>
                <h2 className='xui-font-sz-250 xui-md-font-sz-350 xui-lg-font-sz-350 xui-font-w-700 xui-lg-w-fluid-80 xui-mx-auto'>How we do it</h2>
                <p className='xui-font-sz-100 xui-lg-font-sz-105 xui-opacity-6 xui- xui-mx-auto xui-lg-w-fluid-60 xui-line-height-2 xui-lg-line-height-2'>At our school, we believe that education should be more than just memorizing facts and figures. It should be a transformative experience that prepares you for success in the tech industry.</p>
            </div>
            <div className='xui-d-grid xui-grid-col-1 xui-lg-grid-col-2 xui-grid-gap-1-half xui-lg-grid-gap-2 xui-mt-2'>
                <HWDBox />
                <HWDBox />
                <HWDBox />
                <HWDBox />
            </div>
        </section>
        <JoinTheCommunity />
        </>
    );
};

export default About;