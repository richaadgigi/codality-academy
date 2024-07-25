import { ArrowRight } from '@carbon/icons-react';
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
gsap.registerPlugin(ScrollTrigger);

const AboutDarkMode = () => {
    const aboutSection = useRef(null);
    const addDarkMode = () => aboutSection.current.classList.add('ca-dark-mode');
    const removeDarkMode = () => aboutSection.current.classList.remove('ca-dark-mode');
    useGSAP(() => {
        gsap.to(aboutSection.current, {
            scrollTrigger: {
                trigger: aboutSection.current,
                start: "top center",
                end: "bottom bottom",
                // scrub: true,
                markers: false,
                pin: false,
                onEnter: () => {
                    addDarkMode();
                },
                onEnterBack: () => {
                    addDarkMode();
                },
                onLeave: () => {
                    // removeDarkMode();
                },
                onLeaveBack: () => {
                    removeDarkMode();
                }
            }
        });
    });
    useEffect(() => {
        window.xuiLazyLoadings();
    }, []);
    return (
        <>
        <section className='ca-transition' ref={aboutSection}>
            <div className='xui-container xui-py-3 xui-lg-py-5'>
                <div className='xui-d-grid xui-grid-col-1 xui-lg-grid-col-2 xui-lg-grid-gap-4 xui-flex-ai-center'>
                    <div>
                        <h2 className='xui-font-sz-250 xui-md-font-sz-350 xui-lg-font-sz-350 xui-font-w-700'>Our journey</h2>
                        <p className='xui-font-sz-100 xui-lg-font-sz-110 xui-opacity-6  xui-line-height-2 xui-lg-line-height-2-half xui-mt-2'>Our journey began with a vision to bridge the gap between ambition and expertise. In a rapidly evolving tech landscape, we recognized the need for accessible and high-quality education. Thus, Jupita Academy was born, dedicated to providing cutting-edge tech courses that cater to diverse learning needs.</p>
                    </div>
                    <div className='xui-mt-2 xui-lg-mt-none'>
                        <img className='xui-img-600 xui-mx-auto' src="https://images.pexels.com/photos/3876409/pexels-photo-3876409.jpeg?auto=compress&cs=tinysrgb&w=400" alt="picture of someone learning online" xui-img-src={'https://images.pexels.com/photos/3876409/pexels-photo-3876409.jpeg?auto=compress&cs=tinysrgb&w=1200'} />
                    </div>
                </div>
            </div>
            <div className='xui-container xui-py-3 xui-lg-py-5'>
                <div className='xui-d-grid xui-grid-col-1 xui-lg-grid-col-2 xui-lg-grid-gap-4'>
                    <div>
                        <h2 className='xui-font-sz-250 xui-md-font-sz-350 xui-lg-font-sz-350 xui-font-w-700 xui-lg-mt-1'>What sets us apart</h2>
                    </div>
                    <div className='xui-mt-1 xui-lg-mt-none'>
                        <p className='xui-font-sz-100 xui-lg-font-sz-110 xui-opacity-6  xui-line-height-2 xui-lg-line-height-2-half'>What sets us apart is our commitment to excellence. Our team comprises industry experts, educators, and tech enthusiasts who are dedicated to crafting courses that blend theoretical knowledge with practical, real-world applications. We believe in learning by doing, and our hands-on approach ensures that our students not only grasp the concepts but also gain the confidence to apply them.</p>
                        <p className='xui-font-sz-100 xui-lg-font-sz-110 xui-opacity-6  xui-line-height-2 xui-lg-line-height-2-half xui-mt-2'>Whether you're a beginner looking to embark on a tech journey or a seasoned professional seeking to upskill, Jupita Academy offers a range of courses designed to meet you where you are. From data and product to design and engineering, our curriculum is curated to reflect the latest industry trends.</p>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
};

export default AboutDarkMode;