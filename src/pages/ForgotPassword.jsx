import React from 'react';
import { Link } from 'react-router-dom';

const ForgotPassword = () => {
    return (
        <>
        <section className='ca-full-page ca-gradient-i xui-d-flex xui-flex-ai-center xui-flex-jc-center xui-p-1 xui-lg-p-2'>
            <div className='xui-max-w-500 xui-w-fluid-100'>
                <Link to={'/'}><img className='xui-img-150 xui-mx-auto' src="https://res.cloudinary.com/xnyder/image/upload/v1721748283/ca/brand/CODALITY_6_qildh4.png" alt="logo" /></Link>
                <div className='xui-bg-white xui-p-1 xui-lg-p-2 xui-bdr-rad-2 xui-mt-2'>
                    <h1 className='xui-font-sz-180 xui-lg-font-sz-200'>Forgot your password?</h1>
                    <p className='xui-mt-1 xui-opacity-6 xui-lg-w-fluid-80 xui-line-height-1-half xui-font-sz-90'>Enter your email address and password to log in to your Jupita Academy Portal</p>
                    <hr className='xui-mt-1-half' />
                    <form className='xui-form' noValidate>
                        <div className='xui-form-box'>
                            <label htmlFor="email">Email Address</label>
                            <input type="email" name="email" id="email" />
                        </div>
                        <div className='xui-form-box xui-text-center'>
                            <button className='xui-btn xui-btn-block ca-bg-purple xui-text-white xui-bdr-rad-2'>Forgot password</button>
                            <span className='xui-font-sz-80 xui-d-inline-block xui-mt-1'><Link className='xui-font-w-500 ca-text-purple' to={'/login'}>Back to login</Link></span>
                        </div>
                    </form>
                </div>
            </div>
        </section>
        </>
    );
};

export default ForgotPassword;