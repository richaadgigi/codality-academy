import React from 'react';
import FooterLink from './FooterLink';
import FooterHeading from './FooterHeading';

const Footer = () => {
    return (
        <footer className='xui-pos-relative xui-z-index-1'>
            <div className='xui-container xui-row xui-py-3 xui-lg-py-4 ca-bg-light-purple'>
                <div className='xui-col-12 xui-lg-col-4 xui-lg-pr-2'>
                    <img className='xui-img-150' src="https://res.cloudinary.com/xnyder/image/upload/v1721748502/ca/brand/CODALITY_12_xvdzw0.png" alt="logo brand" />
                    <p className='xui-line-height-2 xui-font-sz-90 xui-opacity-8 xui-mt-2'>Discover the latest webinars, programs, and community events before anyone else. Stay informed with industry news, articles, and exclusive reports - all conveniently delivered to your email inbox!</p>
                </div>
                <div className='xui-col-12 xui-lg-col-8 xui-lg-pl-2 xui-mt-4 xui-lg-mt-none'>
                    <div className='xui-row'>
                        <div className='xui-col-12 xui-lg-col-3 xui-lg-pr-1'>
                            <FooterHeading name={'Products'} />
                            <div className='xui-d-grid xui-grid-gap-1 xui-mt-1-half'>
                                <div>
                                    <FooterLink name={'Data Analysis'} path={'/'} />
                                </div>
                                <div>
                                    <FooterLink name={'Graphics Design'} path={'/'} />
                                </div>
                                <div>
                                    <FooterLink name={'Web Design'} path={'/'} />
                                </div>
                                <div>
                                    <FooterLink name={'UI/UX'} path={'/'} />
                                </div>
                            </div>
                        </div>
                        <div className='xui-col-12 xui-lg-col-3 xui-lg-pr-1 xui-mt-4 xui-lg-mt-none'>
                            <FooterHeading name={'Company'} />
                            <div className='xui-d-grid xui-grid-gap-1 xui-mt-1-half'>
                                <div>
                                    <FooterLink name={'About Us'} path={'/'} />
                                </div>
                                <div>
                                    <FooterLink name={'Refund Policy'} path={'/'} />
                                </div>
                                <div>
                                    <FooterLink name={'Terms & Conditions'} path={'/'} />
                                </div>
                                <div>
                                    <FooterLink name={'Privacy Policy'} path={'/'} />
                                </div>
                            </div>
                        </div>
                        <div className='xui-col-12 xui-lg-col-4 xui-lg-pr-1 xui-mt-4 xui-lg-mt-none'>
                            <FooterHeading name={'Reach Us'} />
                            <div className='xui-d-grid xui-grid-gap-1 xui-mt-1-half'>
                                <div>
                                    <FooterLink name={'Email: info@codalityacademy.com'} path={'/'} />
                                </div>
                                <div>
                                    <FooterLink name={'WhatsApp: +234 816 019 4615'} path={'/'} />
                                </div>
                                <div>
                                    <FooterLink name={'Phone call: +234 816 019 4615'} path={'/'} />
                                </div>
                                <div className='xui-d-flex'>
                                    <div className='xui-w-30 xui-h-30 xui-bdr-rad-circle ca-bg-purple xui-bg-sz-cover xui-bg-pos-center' style={{backgroundImage: 'url(https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Flag_of_Nigeria.svg/1280px-Flag_of_Nigeria.svg.png)'}}></div>
                                    <div style={{width: 'calc(100% - 30px)'}} className='xui-pl-half'>
                                        <span className='xui-text-inherit xui-text-dc-none xui-opacity-8 xui-font-sz-80'>Workstation Maryland Mall, Lagos</span>
                                    </div>
                                </div>
                                <div className='xui-d-flex'>
                                    <div className='xui-w-30 xui-h-30 xui-bdr-rad-circle ca-bg-purple xui-bg-sz-cover xui-bg-pos-center' style={{backgroundImage: 'url(https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Flag_of_the_United_Kingdom_%283-5%29.svg/2560px-Flag_of_the_United_Kingdom_%283-5%29.svg.png)'}}></div>
                                    <div style={{width: 'calc(100% - 30px)'}} className='xui-pl-half'>
                                        <span className='xui-text-inherit xui-text-dc-none xui-opacity-8 xui-font-sz-80'>85 Great Portland Street First Floor, London, W1W 7LT</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='xui-col-12 xui-lg-col-2 xui-mt-4 xui-lg-mt-none'>
                            <FooterHeading name={'Social'} />
                            <div className='xui-d-grid xui-grid-gap-1 xui-mt-1-half'>
                                <div>
                                    <FooterLink name={'Instagram'} path={'/'} />
                                </div>
                                <div>
                                    <FooterLink name={'Facebook'} path={'/'} />
                                </div>
                                <div>
                                    <FooterLink name={'LinkedIn'} path={'/'} />
                                </div>
                                <div>
                                    <FooterLink name={'Twitter'} path={'/'} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='xui-text-center ca-bg-dark-purple xui-container xui-py-1-half xui-text-white'>
                <span className='xui-font-sz-85'>&copy; 2024 Jupita Academy, All rights reserved</span>
            </div>
        </footer>
    );
};

export default Footer;