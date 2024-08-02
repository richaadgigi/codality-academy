import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
gsap.registerPlugin(ScrollTrigger);

const WhyChooseUs = () => {
    const whyChouseUsSection = useRef(null);
    const setUpForWork = useRef(null);
    const qualification = useRef(null);
    const target = useRef(null);
    const certification = useRef(null);
    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: whyChouseUsSection.current,
                start: "bottom bottom", // Start when the top of the trigger element reaches the top of the viewport
                end: "bottom+=50% bottom-=30%", // Extend the end point to make the scroll last longer
                scrub: 2, // Increase scrub value to smooth out the scroll
                markers: false,
                pin: true
            }
        });
    
        tl.to(setUpForWork.current, {
            filter: "blur(4px)",
            scale: 0.92,
            duration: 4 // Increase duration to make this animation last longer
        })
        .to(qualification.current, {
            bottom: "0",
            duration: 4 // Increase duration to make this animation last longer
        }, "<") // "<" makes this animation start at the same time as the previous one
        .to(target.current, {
            bottom: "0",
            duration: 4 // Increase duration to make this animation last longer
        })
        .to(qualification.current, {
            filter: "blur(4px)",
            scale: 0.92,
            duration: 4 // Increase duration to make this animation last longer
        }, "<")
        .to(certification.current, {
            bottom: "0",
            duration: 4 // Increase duration to make this animation last longer
        })
        .to(target.current, {
            filter: "blur(4px)",
            scale: 0.92,
            duration: 4 // Increase duration to make this animation last longer
        }, "<"); // This animation also starts at the same time as the previous one
    });
    return (
        <>
        <section ref={whyChouseUsSection} className='xui-container xui-py-3 xui-lg-py-4 xui-pos-relative xui-overflow-hidden'>
            <div className='xui-text-center'>
                <h2 className='xui-font-sz-250 xui-md-font-sz-350 xui-lg-font-sz-350 xui-font-w-700 xui-lg-w-fluid-80 xui-mx-auto'>Learn from the best, work with the best</h2>
                <p className='xui-font-sz-100 xui-lg-font-sz-105 xui-opacity-6 xui- xui-mx-auto xui-lg-w-fluid-80 xui-line-height-2 xui-lg-line-height-2'>From the moment our Jupita Academy was founded, we have helped our students find exceptional solutions for learning and creating memorable learning path. Our expertise grows with each year and our accumulated experience empowers us to deliver exception learning curve.</p>
            </div>
            <div className='xui-pos-relative'>
                <div className='xui-mt-2 xui-d-grid xui-grid-col-1 xui-lg-grid-col-2 xui-bdr-rad-2 ca-gradient-i xui-text-white xui-flex-ai-center xui-overflow-hidden' ref={setUpForWork}>
                    <div className='xui-bg-pos-center xui-bg-sz-cover xui-h-fluid-100' style={{backgroundImage: 'url(https://images.pexels.com/photos/2528118/pexels-photo-2528118.jpeg?auto=compress&cs=tinysrgb&w=800)'}}></div>
                    <div className='xui-px-1 xui-lg-px-3 xui-py-2 xui-lg-py-6 xui-min-h-500 xui-h-fluid-100'>
                        <span className='xui-d-inline-block xui-font-sz-95 xui-font-w-500'>Readiness</span>
                        <h1 className='xui-font-sz-200 xui-lg-font-sz-300 xui-lg-line-height-4 xui-lg-w-fluid-85'>Are you set up for work?</h1>
                        <p className='xui-mt-1 xui-opacity-8 xui-lg-font-sz-105 xui-line-height-2 xui-lg-w-fluid-70'>We aim at providing world-class learning resources to support young Individuals in their careers.</p>
                    </div>
                </div>
                <div className='ca-why-us-section xui-mt-2 xui-d-grid xui-grid-col-1 xui-lg-grid-col-2 xui-bdr-rad-2 ca-bg-pink xui-text-white xui-flex-ai-center xui-overflow-hidden' ref={qualification}>
                    <div className='xui-bg-pos-center xui-bg-sz-cover xui-h-fluid-100' style={{backgroundImage: 'url(https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800)'}}></div>
                    <div className='xui-px-1 xui-lg-px-3 xui-py-2 xui-lg-py-6 xui-min-h-500 xui-h-fluid-100'>
                        <span className='xui-d-inline-block xui-font-sz-95 xui-font-w-500'>Status</span>
                        <h1 className='xui-font-sz-200 xui-lg-font-sz-300 xui-lg-line-height-4 xui-lg-w-fluid-85'>Who is qualified?</h1>
                        <p className='xui-mt-1 xui-opacity-8 xui-lg-font-sz-105 xui-line-height-2 xui-lg-w-fluid-70'>Anyone starting a career in technology and passionate.</p>
                    </div>
                </div>
                <div className='ca-why-us-section xui-mt-2 xui-d-grid xui-grid-col-1 xui-lg-grid-col-2 xui-bdr-rad-2 ca-bg-blue xui-text-white xui-flex-ai-center xui-overflow-hidden' ref={target}>
                    <div className='xui-bg-pos-center xui-bg-sz-cover xui-h-fluid-100' style={{backgroundImage: 'url(https://images.pexels.com/photos/695266/pexels-photo-695266.jpeg?auto=compress&cs=tinysrgb&w=800)'}}></div>
                    <div className='xui-px-1 xui-lg-px-3 xui-py-2 xui-lg-py-6 xui-min-h-500 xui-h-fluid-100'>
                        <span className='xui-d-inline-block xui-font-sz-95 xui-font-w-500'>Future</span>
                        <h1 className='xui-font-sz-200 xui-lg-font-sz-300 xui-lg-line-height-4 xui-lg-w-fluid-85'>Our target!</h1>
                        <p className='xui-mt-1 xui-opacity-8 xui-lg-font-sz-105 xui-line-height-2 xui-lg-w-fluid-70'>Support at least 1000 people each year.</p>
                    </div>
                </div>
                <div className='ca-why-us-section xui-mt-2 xui-d-grid xui-grid-col-1 xui-lg-grid-col-2 xui-bdr-rad-2 ca-bg-dark-purple xui-text-white xui-flex-ai-center xui-overflow-hidden' ref={certification}>
                    <div className='xui-bg-pos-center xui-bg-sz-cover xui-h-fluid-100' style={{backgroundImage: 'url(https://images.pexels.com/photos/1139320/pexels-photo-1139320.jpeg?auto=compress&cs=tinysrgb&w=800)'}}></div>
                    <div className='xui-px-1 xui-lg-px-3 xui-py-2 xui-lg-py-6 xui-min-h-500 xui-h-fluid-100'>
                        <span className='xui-d-inline-block xui-font-sz-95 xui-font-w-500'>Certification</span>
                        <h1 className='xui-font-sz-200 xui-lg-font-sz-300 xui-lg-line-height-4 xui-lg-w-fluid-85'>Recognised Certification</h1>
                        <p className='xui-mt-1 xui-opacity-8 xui-lg-font-sz-105 xui-line-height-2 xui-lg-w-fluid-70'>Get a world recognised certification at the end of each program.</p>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
};

export default WhyChooseUs;