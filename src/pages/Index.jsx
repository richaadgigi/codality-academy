import { ArrowRight } from '@carbon/icons-react';
import React from 'react';
import { Link } from 'react-router-dom';
import CourseCard from '../components/CourseCard';
import Testimonial from '../components/Testimonial';
import AccordionBox from '../components/AccordionBox';
import Footer from '../components/Footer';
import WhyChooseUs from '../components/WhyChooseUs';
import HomeHeader from '../components/HomeHeader';
import Navbar from '../components/Navbar';

const Index = () => {
    return (
        <>
        <Navbar />
        <HomeHeader />
        <section className='xui-bg-white xui-py-2 ca-partners-holder slider'>
            <div className="slide-track">
                <div className="slide"><img className='xui-img-60 xui-lg-img-150' src="https://nigerialogos.com/logos/fieldinsight/fieldinsight.svg" alt="Image 1" /></div>
                <div className="slide"><img className='xui-img-60 xui-lg-img-150' src="https://nigerialogos.com/logos/farmsby/farmsby.svg" alt="Image 2" /></div>
                <div className="slide"><img className='xui-img-60 xui-lg-img-150' src="https://nigerialogos.com/logos/nairabet/nairabet.svg" alt="Image 3" /></div>
                <div className="slide"><img className='xui-img-60 xui-lg-img-150' src="https://nigerialogos.com/logos/ren_money/ren_money.svg" alt="Image 4" /></div>
                <div className="slide"><img className='xui-img-60 xui-lg-img-150' src="https://nigerialogos.com/logos/talentql/talentql.svg" alt="Image 5" /></div>
                {/* Repeat the images for the seamless loop effect */}
                <div className="slide"><img className='xui-img-60 xui-lg-img-150' src="https://nigerialogos.com/logos/fieldinsight/fieldinsight.svg" alt="Image 1" /></div>
                <div className="slide"><img className='xui-img-60 xui-lg-img-150' src="https://nigerialogos.com/logos/farmsby/farmsby.svg" alt="Image 2" /></div>
                <div className="slide"><img className='xui-img-60 xui-lg-img-150' src="https://nigerialogos.com/logos/nairabet/nairabet.svg" alt="Image 3" /></div>
                <div className="slide"><img className='xui-img-60 xui-lg-img-150' src="https://nigerialogos.com/logos/ren_money/ren_money.svg" alt="Image 4" /></div>
                <div className="slide"><img className='xui-img-60 xui-lg-img-150' src="https://nigerialogos.com/logos/talentql/talentql.svg" alt="Image 5" /></div>
            </div>
        </section>
        <section className='xui-container xui-py-3 xui-lg-py-6'>
            <div className='xui-d-grid xui-grid-col-1 xui-lg-grid-col-2 xui-lg-grid-gap-4'>
                <div>
                    <h2 className='xui-font-sz-250 xui-md-font-sz-350 xui-lg-font-sz-350 xui-font-w-700'>We can reimburse you if something’s not right.</h2>
                    <p className='xui-font-sz-100 xui-lg-font-sz-110 xui-opacity-6  xui-line-height-2 xui-lg-line-height-2-half xui-mt-2'>Join SuperHi with 50,00050,000+ learners worldwide and gain technical skills through our practical courses</p>
                    <Link className='ca-btn xui-btn ca-bg-blue xui-text-white xui-d-inline-flex xui-flex-ai-center xui-grid-gap-half xui-bdr-rad-2 xui-mt-2' to={'/'}>
                        <span className='ca-animated xui-font-sz-100'>See our catalog</span>
                        <ArrowRight size={20} />
                    </Link>
                </div>
            </div>
        </section>
        <section className='xui-py-3 xui-lg-py-4'>
            <div className='xui-container xui-d-flex xui-flex-jc-space-between'>
                <h2 className='xui-font-sz-250 xui-md-font-sz-350 xui-lg-font-sz-350 xui-font-w-700 xui-lg-w-fluid-70'>Get introduced to <span className='ca-text-purple'>introductory courses</span></h2>
            </div>
            <div className='xui-px-1 xui-lg-px-1'>
                <div className='ca-bg-light-purple xui-bdr-rad-2 xui-d-grid xui-grid-col-1 xui-lg-grid-col-3 xui-mt-2 xui-lg-py-3 xui-lg-px-3'>
                    <CourseCard />
                    <CourseCard />
                    <CourseCard />
                </div>
            </div>
        </section>
        <WhyChooseUs />
        <Testimonial />
        <section className='xui-container xui-py-3 xui-lg-py-4'>
            <div className='xui-row xui-pos-relative'>
                <div className='xui-col-12 xui-lg-col-3 xui-lg-pr-2'>
                    <h2 className='xui-font-sz-250 xui-md-font-sz-350 xui-lg-font-sz-350 xui-font-w-700 ca-text-purple xui-py-2' style={{position: 'sticky', top: 0}}>Frequently Asked Questions</h2>
                </div>
                <div className='xui-col-12 xui-lg-col-8 xui-lg-pl-2'>
                    <div className='xui-accordion xui-mt-2'>
                        <AccordionBox heading={'Hello Mamacita'} text={'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi, qui quo obcaecati magnam unde neque a eveniet quod aut expedita eaque, porro nisi, nihil cum assumenda sunt placeat eos tenetur?'} />
                        <AccordionBox heading={'Hello Mamacita'} text={'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi, qui quo obcaecati magnam unde neque a eveniet quod aut expedita eaque, porro nisi, nihil cum assumenda sunt placeat eos tenetur?'} />
                        <AccordionBox heading={'Hello Mamacita'} text={'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi, qui quo obcaecati magnam unde neque a eveniet quod aut expedita eaque, porro nisi, nihil cum assumenda sunt placeat eos tenetur?'} />
                        <AccordionBox heading={'Hello Mamacita'} text={'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi, qui quo obcaecati magnam unde neque a eveniet quod aut expedita eaque, porro nisi, nihil cum assumenda sunt placeat eos tenetur?'} />
                        <AccordionBox heading={'Hello Mamacita'} text={'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi, qui quo obcaecati magnam unde neque a eveniet quod aut expedita eaque, porro nisi, nihil cum assumenda sunt placeat eos tenetur?'} />
                        <AccordionBox heading={'Hello Mamacita'} text={'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi, qui quo obcaecati magnam unde neque a eveniet quod aut expedita eaque, porro nisi, nihil cum assumenda sunt placeat eos tenetur?'} />
                        <AccordionBox heading={'Hello Mamacita'} text={'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi, qui quo obcaecati magnam unde neque a eveniet quod aut expedita eaque, porro nisi, nihil cum assumenda sunt placeat eos tenetur?'} />
                        <AccordionBox heading={'Hello Mamacita'} text={'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi, qui quo obcaecati magnam unde neque a eveniet quod aut expedita eaque, porro nisi, nihil cum assumenda sunt placeat eos tenetur?'} />
                        <AccordionBox heading={'Hello Mamacita'} text={'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi, qui quo obcaecati magnam unde neque a eveniet quod aut expedita eaque, porro nisi, nihil cum assumenda sunt placeat eos tenetur?'} />
                    </div>
                </div>
            </div>
        </section>
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
        <Footer />
        </>
    );
};

export default Index;