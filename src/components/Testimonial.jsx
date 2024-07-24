import React, { useEffect } from 'react';
import TestimonialCard from './TestimonialCard';

const Testimonial = () => {
    useEffect(() => {
        const swiperEl = document.querySelector('swiper-container');
        // swiper parameters
        const swiperParams = {
            slidesPerView: 3.2,
            // loop: true,
            autoplay: {
                delay: 2500,
                disableOnInteraction: false,
            },
            spaceBetween: 20,
            slidesOffsetBefore: 40, // Adjust this value for the desired offset before the first slide
            slidesOffsetAfter: 40,  // Adjust this value for the desired offset after the last slide
            breakpoints: {
                320: {
                    slidesPerView: 1.2,
                    slidesOffsetBefore: 8,
                    slidesOffsetAfter: 8,
                    spaceBetween: 12
                },
                1024: {
                    slidesPerView: 'auto',
                },
            },
            on: {
                init() {
                    // ...
                },
            },
        };

        // now we need to assign all parameters to Swiper element
        Object.assign(swiperEl, swiperParams);

        // and now initialize it
        swiperEl.initialize();
    }, []);
    return (
        <>
        <section className='xui-px-none xui-lg-py-1'>
            <div className='ca-bg-purple xui-text-white xui-bdr-rad-2 xui-mt-2 xui-px-1 xui-lg-px-none xui-py-2 xui-lg-py-4'>
                <h2 className='xui-font-sz-250 xui-md-font-sz-350 xui-lg-font-sz-400 xui-font-w-700 xui-lg-w-fluid-70 xui-lg-px-4'>Discover what our students feel about us</h2>
                <div className='xui-mt-2'>
                    <swiper-container init={'false'}>
                        <swiper-slide>
                            <TestimonialCard />
                        </swiper-slide>
                        <swiper-slide>
                            <TestimonialCard />
                        </swiper-slide>
                        <swiper-slide>
                            <TestimonialCard />
                        </swiper-slide>
                        <swiper-slide>
                            <TestimonialCard />
                        </swiper-slide>
                        <swiper-slide>
                            <TestimonialCard />
                        </swiper-slide>
                    </swiper-container>
                </div>
            </div>
        </section>
        </>
    );
};

export default Testimonial;