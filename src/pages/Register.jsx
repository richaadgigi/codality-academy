import React from 'react';
import { Link } from 'react-router-dom';
import PhoneInputWithCountrySelect from "react-phone-number-input/react-hook-form";
import { useForm } from 'react-hook-form';
import { isValidPhoneNumber } from 'react-phone-number-input';
import 'react-phone-number-input/style.css';

const Register = () => {
    const { register, handleSubmit, formState: { errors }, control } = useForm();
    return (
        <>
        <section className='ca-full-page ca-gradient-i xui-d-flex xui-flex-ai-center xui-flex-jc-center xui-p-1 xui-lg-p-2'>
            <div className='xui-max-w-800 xui-w-fluid-100'>
                <Link to={'/'}><img className='xui-img-150 xui-mx-auto' src="https://res.cloudinary.com/xnyder/image/upload/v1721748283/ca/brand/CODALITY_6_qildh4.png" alt="logo" /></Link>
                <div className='xui-bg-white xui-p-1 xui-lg-p-2 xui-bdr-rad-2 xui-mt-2'>
                    <h1 className='xui-font-sz-180 xui-lg-font-sz-200'>Create an account</h1>
                    <p className='xui-mt-1 xui-opacity-6 xui-lg-w-fluid-80 xui-line-height-1-half xui-font-sz-90'>Enter your email address and password to log in to your Jupita Academy Portal</p>
                    <hr className='xui-mt-1-half' />
                    <form className='xui-form ca-form' noValidate>
                        <div className='xui-form-box xui-d-grid xui-grid-col-1 xui-lg-grid-col-2 xui-grid-gap-2'>
                            <div>
                                <label htmlFor="firstname">Firstname</label>
                                <input type="text" name="firstname" id="firstname" />
                            </div>
                            <div>
                                <label htmlFor="lastname">Lastname</label>
                                <input type="text" name="lastname" id="lastname" />
                            </div>
                        </div>
                        <div className='xui-form-box xui-d-grid xui-grid-col-1 xui-lg-grid-col-2 xui-grid-gap-2'>
                            <div>
                                <label htmlFor="country">Country</label>
                                <input type="email" name="email" id="email" />
                            </div>
                            <div>
                                <label htmlFor="phone">Phone Number</label>
                                <PhoneInputWithCountrySelect
                                    className={'ca-custom-phone-input ' + (errors.phone && 'error')}
                                    name="phone"
                                    defaultValue={''}
                                    control={control}
                                    defaultCountry="NG"
                                    placeholder="Enter phone number"
                                    rules={{
                                        required: 'This field is requred',
                                        validate: value => {
                                            if (value && !isValidPhoneNumber(value)) {
                                                return 'Invalid phone number';
                                            }
                                        }
                                    }}
                                />
                            </div>
                        </div>
                        <div className='xui-form-box xui-d-grid xui-grid-col-1 xui-lg-grid-col-2 xui-grid-gap-2'>
                            <div>
                                <label htmlFor="gender">Gender</label>
                                <select name="gender" id="gender">
                                    <option value="">--Select a gender--</option>
                                </select>
                            </div>
                            <div>
                                <label htmlFor="dob">Date of Birth</label>
                                <input type="date" name="dob" id="dob" />
                            </div>
                        </div>
                        <div className='xui-form-box xui-d-grid xui-grid-col-1 xui-lg-grid-col-2 xui-grid-gap-2'>
                            <div>
                                <label htmlFor="email">Email Address</label>
                                <input type="email" name="email" id="email" />
                            </div>
                            <div>
                                <label htmlFor="password">Your Password</label>
                                <input type="password" name="password" id="password" />
                            </div>
                        </div>
                        <div className='xui-form-box xui-text-center'>
                            <button className='xui-btn xui-btn-block ca-bg-purple xui-text-white xui-bdr-rad-2'>Create account</button>
                            <span className='xui-font-sz-80 xui-d-inline-block xui-mt-1'>Already have an account? <Link className='xui-font-w-500 ca-text-purple' to={'/login'}>Login</Link></span>
                        </div>
                    </form>
                </div>
            </div>
        </section>
        </>
    );
};

export default Register;