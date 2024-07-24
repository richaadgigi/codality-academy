import { ArrowRight } from '@carbon/icons-react';
import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
gsap.registerPlugin(ScrollTrigger);

const HomeHeader = () => {
    const headerSection = useRef(null);
    const shapeI = useRef(null);
    const shapeII = useRef(null);
    const shapeIII = useRef(null);
    const shapeIV = useRef(null);
    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: headerSection.current,
                start: "top top", // Start when the top of the trigger element reaches the top of the viewport
                end: "bottom center", // End when the bottom of the trigger element reaches the top of the viewport
                scrub: true,
                markers: false,
                pin: false
            }
        });

        tl.to(shapeI.current, {
            scale: 0.64,
        })
        .to(shapeII.current, {
            scale: 0.64,
            transform: "rotate(4deg)"
        }, "<")
        .to(shapeIII.current, {
            scale: 0.64,
        }, "<")
        .to(shapeIV.current, {
            scale: 0.64,
            transform: "rotate(4deg)"
        }, "<");
    });
    return (
        <section className='xui-container xui-py-5 xui-lg-py-8 xui-pos-relative ca-header-section' ref={headerSection}>
            <div ref={shapeI} className='ca-header-shape-i'></div>
            <div ref={shapeII} className='ca-header-shape-ii'></div>
            <div ref={shapeIII} className='ca-header-shape-iii'></div>
            <div ref={shapeIV} className='ca-header-shape-iv'></div>
            <div className='xui-text-center'>
                <h1 className='xui-font-sz-250 xui-md-font-sz-350 xui-lg-font-sz-500 xui-mx-auto xui-lg-w-fluid-70 xui-font-w-700'>Curate your own creative career</h1>
                <p className='xui-font-sz-100 xui-lg-font-sz-110 xui-opacity-6 xui- xui-mx-auto xui-w-fluid-80 xui-lg-w-fluid-50 xui-line-height-2 xui-lg-line-height-2-half'>Join SuperHi with 50,00050,000+ learners worldwide and gain technical skills through our practical courses</p>
                <div className='xui-d-flex xui-flex-ai-center xui-flex-jc-center xui-grid-gap-1 xui-lg-w-fluid-80 xui-mx-auto xui-mt-2'>
                    <Link className='ca-btn xui-btn ca-bg-purple xui-text-white xui-d-inline-flex xui-flex-ai-center xui-grid-gap-half xui-bdr-rad-2' to={'/'}>
                        <span className='ca-animated xui-font-sz-100'>See our catalog</span>
                        <ArrowRight size={20} />
                    </Link>
                    <Link className='ca-btn xui-btn xui-btn-black xui-d-inline-flex xui-flex-ai-center xui-grid-gap-half xui-bdr-rad-2' to={'/'}>
                        <span className='xui-font-sz-100'>Get started now!</span>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default HomeHeader;