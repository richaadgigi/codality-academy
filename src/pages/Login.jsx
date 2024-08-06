import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import Error from '../components/alerts/Error';
import axios from 'axios';
import Cookies from 'js-cookie';

const Login = () => {
    const { register, handleSubmit, formState: {errors} } = useForm();
    const [ buttonTxt, setButtonTxt ] = useState('Sign in');
    const [ isDisabled, setIsDisabled ] = useState(false);
    const navigate = useNavigate();
    const [ errMsg, setErrMsg ] = useState(null);
    const validatePassword = (value) => {
        const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        return regex.test(value) || 'Invalid password (must be 8 characters or more and contain one or more uppercase, lowercase, number and special character)';
    };
    const submitForm = (fields) => {
        setIsDisabled(true);
        setButtonTxt('Please wait...');
        axios({
            method: "POST",
            url: `${import.meta.env.VITE_API_URL}/auth/signin/email`,
            data: {...fields}
        })
        .then((response) => {
            setButtonTxt('Almost there...');
            Cookies.set('signedInUser', JSON.stringify(response.data.data), {expires: 7});
            setTimeout(() => {
                setButtonTxt('Redirecting...');
                setTimeout(() => {
                    navigate('/my-dashboard');
                }, 2000);
            }, 2400);
        })
        .catch((error) => {
            setIsDisabled(false);
            setButtonTxt('Sign in');
            setErrMsg(error.response.status === 422 ? error.response.data.data[0].msg : error.response.data.message);
            setTimeout(() => {
                setErrMsg(null);
            }, 4000);
        });
    }
    return (
        <>
        <section className='ca-full-page ca-gradient-i xui-d-flex xui-flex-ai-center xui-flex-jc-center xui-p-1 xui-lg-p-2'>
            <div className='xui-max-w-500 xui-w-fluid-100'>
                <Link to={'/'}><img className='xui-img-150 xui-mx-auto' src="https://res.cloudinary.com/xnyder/image/upload/v1721748283/ca/brand/CODALITY_6_qildh4.png" alt="logo" /></Link>
                <div className='xui-bg-white xui-p-1 xui-lg-p-2 xui-bdr-rad-2 xui-mt-2'>
                    <h1 className='xui-font-sz-180 xui-lg-font-sz-200'>Sign into your account</h1>
                    <p className='xui-mt-1 xui-opacity-6 xui-lg-w-fluid-80 xui-line-height-1-half xui-font-sz-90'>Enter your email address and password to log in to your Codality Academy portal.</p>
                    <hr className='xui-mt-1-half' />
                    <form onSubmit={handleSubmit(submitForm)} className='xui-form' noValidate>
                        <div className='xui-form-box'>
                            <label htmlFor="email">Email Address</label>
                            <input {...register('email', {
                                required: 'Email address is required',
                                pattern: {
                                    value: /^\S+@\S+$/i,
                                    message: 'Email address is not correct'
                                }
                            })} type="email" name="email" id="email" />
                            {errors.email && <span className='xui-form-error-msg xui-font-sz-80'>{errors.email.message}</span>}
                        </div>
                        <div className='xui-form-box'>
                            <label htmlFor="password">Your Password</label>
                            <input {...register('password', {
                                required: 'Password is required',
                                minLength: {
                                    value: 8,
                                    message: 'Password must be a minimum of 8 characters'
                                },
                                maxLength: {
                                    value: 20,
                                    message: 'Password cannot exceed 20 characters'
                                },
                                validate: validatePassword
                            })} type="password" name="password" id="password" />
                            {errors.password && <span className='xui-form-error-msg xui-font-sz-80'>{errors.password.message}</span>}
                        </div>
                        <p className='xui-font-sz-80'>Forgot your password? <Link className='xui-font-w-500 ca-text-purple' to={'/forgot-password'}>Reset now</Link></p>
                        <div className='xui-form-box xui-text-center'>
                            <button className={'xui-btn xui-btn-block xui-text-white xui-bdr-rad-2 ca-bg-purple ' + (isDisabled && 'ca-btn-disabled')} disabled={isDisabled}>{buttonTxt}</button>
                            <span className='xui-font-sz-85 xui-d-inline-block xui-mt-1'>Don't have an account? <Link className='xui-font-w-500 ca-text-purple' to={'/register'}>Sign up</Link></span>
                        </div>
                    </form>
                </div>
            </div>
        </section>
        <Error message={errMsg} />
        </>
    );
};

export default Login;