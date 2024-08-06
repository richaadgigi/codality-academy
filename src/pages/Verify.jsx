import React from 'react';
import { Link } from 'react-router-dom';

const Verify = () => {
    const obscureEmail = (email) => {
        // Split the email into local and domain parts
        const [localPart, domainPart] = email.split('@');
    
        // Obscure the middle part of the local and domain parts
        const obscuredLocal = `${localPart[0]}...${localPart[localPart.length - 1]}`;
        const domainName = domainPart.split('.')[0];
        const domainExtension = domainPart.split('.')[1];
        const obscuredDomain = `${domainName[0]}...${domainName[domainName.length - 1]}.${domainExtension[0]}...${domainExtension[domainExtension.length - 1]}`;
    
        // Combine and return the obscured email
        return `${obscuredLocal}@${obscuredDomain}`;
    };
    return (
        <>
        <section className='ca-full-page ca-gradient-i xui-d-flex xui-flex-ai-center xui-flex-jc-center xui-p-1 xui-lg-p-2'>
            <div className='xui-max-w-500 xui-w-fluid-100'>
                <Link to={'/'}><img className='xui-img-150 xui-mx-auto' src="https://res.cloudinary.com/xnyder/image/upload/v1721748283/ca/brand/CODALITY_6_qildh4.png" alt="logo" /></Link>
                <div className='xui-bg-white xui-p-1 xui-lg-p-2 xui-bdr-rad-2 xui-mt-2'>
                    <h1 className='xui-font-sz-180 xui-lg-font-sz-200'>Almost there, champ!</h1>
                    <p className='xui-mt-1 xui-opacity-6 xui-lg-w-fluid-80 xui-line-height-1-half xui-font-sz-90'>{'Richard'}, we need you to verify you're the owner of the email address - <span className='xui-font-w-600'>{obscureEmail('gigirichardofficial@gmail.com')}</span></p>
                    <hr className='xui-mt-1-half' />
                    <p className='xui-mt-1 xui-opacity-6 xui-lg-w-fluid-85 xui-line-height-1-half xui-font-sz-90'>Go over to your mailbox and click on the link to verify your account.</p>
                    <Link to={'/login'} className='xui-btn xui-btn-block ca-bg-purple xui-text-white xui-bdr-rad-2 xui-mt-2'>Go back</Link>
                </div>
            </div>
        </section>
        </>
    );
};

export default Verify;