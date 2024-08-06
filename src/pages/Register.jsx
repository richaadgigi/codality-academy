import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import PhoneInputWithCountrySelect from "react-phone-number-input/react-hook-form";
import { useForm } from 'react-hook-form';
import { isValidPhoneNumber } from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import axios from 'axios';
import Error from '../components/alerts/Error';
import Cookies from 'js-cookie';

const Register = () => {
    const [ buttonTxt, setButtonTxt ] = useState('Create account');
    const [ isDisabled, setIsDisabled ] = useState(false);
    const navigate = useNavigate();
    const [ errMsg, setErrMsg ] = useState(null);
    const { register, handleSubmit, formState: { errors }, control } = useForm();
    const validateAge = (value) => {
        const today = new Date();
        const birthDate = new Date(value);
        const minAgeDate = new Date(today.getFullYear() - 10, today.getMonth(), today.getDate());
        return birthDate <= minAgeDate || 'You must be at least 10 years old';
    };
    const validatePassword = (value) => {
        const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        return regex.test(value) || 'Invalid password (must be 8 characters or more and contain one or more uppercase, lowercase, number and special character)';
    };
    const submitForm = (fields) => {
        setIsDisabled(true);
        setButtonTxt('Please wait...');
        axios({
            method: "POST",
            url: `${import.meta.env.VITE_API_URL}/auth/signup`,
            data: {...fields, method: "Email", confirmPassword: fields.password}
        })
        .then((response) => {
            setButtonTxt('Setting things up...');
            Cookies.set('createdUser', JSON.stringify(fields), {expires: 7})
            setTimeout(() => {
                setButtonTxt('Redirecting...');
                setTimeout(() => {
                    navigate('/verify');
                }, 2000);
            }, 2400);
        })
        .catch((error) => {
            setIsDisabled(false);
            setButtonTxt('Create account');
            setErrMsg(error.response.status === 422 ? error.response.data.data[0].msg : error.response.data.message);
            setTimeout(() => {
                setErrMsg(null);
            }, 4000);
        });
    }
    return (
        <>
        <section className='ca-full-page ca-gradient-i xui-d-flex xui-flex-ai-center xui-flex-jc-center xui-p-1 xui-lg-p-2'>
            <div className='xui-max-w-800 xui-w-fluid-100'>
                <Link to={'/'}><img className='xui-img-150 xui-mx-auto' src="https://res.cloudinary.com/xnyder/image/upload/v1721748283/ca/brand/CODALITY_6_qildh4.png" alt="logo" /></Link>
                <div className='xui-bg-white xui-p-1 xui-lg-p-2 xui-bdr-rad-2 xui-mt-2'>
                    <h1 className='xui-font-sz-180 xui-lg-font-sz-200'>Create an account</h1>
                    <p className='xui-mt-1 xui-opacity-6 xui-lg-w-fluid-80 xui-line-height-1-half xui-font-sz-90'>Enter your email address and password to log in to your Jupita Academy Portal</p>
                    <hr className='xui-mt-1-half' />
                    <form className='xui-form ca-form' onSubmit={handleSubmit(submitForm)} noValidate>
                        <div className='xui-form-box xui-d-grid xui-grid-col-1 xui-lg-grid-col-2 xui-grid-gap-2'>
                            <div>
                                <label htmlFor="firstname">Firstname</label>
                                <input {...register('firstname', {
                                    required: 'Firstname is required',
                                    minLength: {
                                        value: 2,
                                        message: 'Firstname must be a minimum of 2 characters'
                                    },
                                    maxLength: {
                                        value: 25,
                                        message: 'Firstname cannot exceed 25 characters'
                                    }
                                })} type="text" name="firstname" id="firstname" required />
                                {errors.firstname && <span className='xui-form-error-msg xui-font-sz-80'>{errors.firstname.message}</span>}
                            </div>
                            <div>
                                <label htmlFor="lastname">Lastname</label>
                                <input {...register('lastname', {
                                    required: 'Lastname is required',
                                    minLength: {
                                        value: 2,
                                        message: 'Lastname must be a minimum of 3 characters'
                                    },
                                    maxLength: {
                                        value: 25,
                                        message: 'Lastname cannot exceed 25 characters'
                                    }
                                })} type="text" name="lastname" id="lastname" required />
                                {errors.lastname && <span className='xui-form-error-msg xui-font-sz-80'>{errors.lastname.message}</span>}
                            </div>
                        </div>
                        <div className='xui-form-box xui-d-grid xui-grid-col-1 xui-lg-grid-col-2 xui-grid-gap-2'>
                            <div>
                                <label htmlFor="country">Country</label>
                                <select {...register('country', {
                                    required: 'Select your country'
                                })} name="country" id="country" defaultValue={''}>
                                    <option value="" disabled>--Select a country--</option>
                                    <option value="afghan">Afghan</option>
                                    <option value="albanian">Albanian</option>
                                    <option value="algerian">Algerian</option>
                                    <option value="american">American</option>
                                    <option value="andorran">Andorran</option>
                                    <option value="angolan">Angolan</option>
                                    <option value="antiguans">Antiguans</option>
                                    <option value="argentinean">Argentinean</option>
                                    <option value="armenian">Armenian</option>
                                    <option value="australian">Australian</option>
                                    <option value="austrian">Austrian</option>
                                    <option value="azerbaijani">Azerbaijani</option>
                                    <option value="bahamian">Bahamian</option>
                                    <option value="bahraini">Bahraini</option>
                                    <option value="bangladeshi">Bangladeshi</option>
                                    <option value="barbadian">Barbadian</option>
                                    <option value="barbudans">Barbudans</option>
                                    <option value="batswana">Batswana</option>
                                    <option value="belarusian">Belarusian</option>
                                    <option value="belgian">Belgian</option>
                                    <option value="belizean">Belizean</option>
                                    <option value="beninese">Beninese</option>
                                    <option value="bhutanese">Bhutanese</option>
                                    <option value="bolivian">Bolivian</option>
                                    <option value="bosnian">Bosnian</option>
                                    <option value="brazilian">Brazilian</option>
                                    <option value="british">British</option>
                                    <option value="bruneian">Bruneian</option>
                                    <option value="bulgarian">Bulgarian</option>
                                    <option value="burkinabe">Burkinabe</option>
                                    <option value="burmese">Burmese</option>
                                    <option value="burundian">Burundian</option>
                                    <option value="cambodian">Cambodian</option>
                                    <option value="cameroonian">Cameroonian</option>
                                    <option value="canadian">Canadian</option>
                                    <option value="cape verdean">Cape Verdean</option>
                                    <option value="central african">Central African</option>
                                    <option value="chadian">Chadian</option>
                                    <option value="chilean">Chilean</option>
                                    <option value="chinese">Chinese</option>
                                    <option value="colombian">Colombian</option>
                                    <option value="comoran">Comoran</option>
                                    <option value="congolese">Congolese</option>
                                    <option value="costa rican">Costa Rican</option>
                                    <option value="croatian">Croatian</option>
                                    <option value="cuban">Cuban</option>
                                    <option value="cypriot">Cypriot</option>
                                    <option value="czech">Czech</option>
                                    <option value="danish">Danish</option>
                                    <option value="djibouti">Djibouti</option>
                                    <option value="dominican">Dominican</option>
                                    <option value="dutch">Dutch</option>
                                    <option value="east timorese">East Timorese</option>
                                    <option value="ecuadorean">Ecuadorean</option>
                                    <option value="egyptian">Egyptian</option>
                                    <option value="emirian">Emirian</option>
                                    <option value="equatorial guinean">Equatorial Guinean</option>
                                    <option value="eritrean">Eritrean</option>
                                    <option value="estonian">Estonian</option>
                                    <option value="ethiopian">Ethiopian</option>
                                    <option value="fijian">Fijian</option>
                                    <option value="filipino">Filipino</option>
                                    <option value="finnish">Finnish</option>
                                    <option value="french">French</option>
                                    <option value="gabonese">Gabonese</option>
                                    <option value="gambian">Gambian</option>
                                    <option value="georgian">Georgian</option>
                                    <option value="german">German</option>
                                    <option value="ghanaian">Ghanaian</option>
                                    <option value="greek">Greek</option>
                                    <option value="grenadian">Grenadian</option>
                                    <option value="guatemalan">Guatemalan</option>
                                    <option value="guinea-bissauan">Guinea-Bissauan</option>
                                    <option value="guinean">Guinean</option>
                                    <option value="guyanese">Guyanese</option>
                                    <option value="haitian">Haitian</option>
                                    <option value="herzegovinian">Herzegovinian</option>
                                    <option value="honduran">Honduran</option>
                                    <option value="hungarian">Hungarian</option>
                                    <option value="icelander">Icelander</option>
                                    <option value="indian">Indian</option>
                                    <option value="indonesian">Indonesian</option>
                                    <option value="iranian">Iranian</option>
                                    <option value="iraqi">Iraqi</option>
                                    <option value="irish">Irish</option>
                                    <option value="israeli">Israeli</option>
                                    <option value="italian">Italian</option>
                                    <option value="ivorian">Ivorian</option>
                                    <option value="jamaican">Jamaican</option>
                                    <option value="japanese">Japanese</option>
                                    <option value="jordanian">Jordanian</option>
                                    <option value="kazakhstani">Kazakhstani</option>
                                    <option value="kenyan">Kenyan</option>
                                    <option value="kittian and nevisian">Kittian and Nevisian</option>
                                    <option value="kuwaiti">Kuwaiti</option>
                                    <option value="kyrgyz">Kyrgyz</option>
                                    <option value="laotian">Laotian</option>
                                    <option value="latvian">Latvian</option>
                                    <option value="lebanese">Lebanese</option>
                                    <option value="liberian">Liberian</option>
                                    <option value="libyan">Libyan</option>
                                    <option value="liechtensteiner">Liechtensteiner</option>
                                    <option value="lithuanian">Lithuanian</option>
                                    <option value="luxembourger">Luxembourger</option>
                                    <option value="macedonian">Macedonian</option>
                                    <option value="malagasy">Malagasy</option>
                                    <option value="malawian">Malawian</option>
                                    <option value="malaysian">Malaysian</option>
                                    <option value="maldivan">Maldivan</option>
                                    <option value="malian">Malian</option>
                                    <option value="maltese">Maltese</option>
                                    <option value="marshallese">Marshallese</option>
                                    <option value="mauritanian">Mauritanian</option>
                                    <option value="mauritian">Mauritian</option>
                                    <option value="mexican">Mexican</option>
                                    <option value="micronesian">Micronesian</option>
                                    <option value="moldovan">Moldovan</option>
                                    <option value="monacan">Monacan</option>
                                    <option value="mongolian">Mongolian</option>
                                    <option value="moroccan">Moroccan</option>
                                    <option value="mosotho">Mosotho</option>
                                    <option value="motswana">Motswana</option>
                                    <option value="mozambican">Mozambican</option>
                                    <option value="namibian">Namibian</option>
                                    <option value="nauruan">Nauruan</option>
                                    <option value="nepalese">Nepalese</option>
                                    <option value="new zealander">New Zealander</option>
                                    <option value="ni-vanuatu">Ni-Vanuatu</option>
                                    <option value="nicaraguan">Nicaraguan</option>
                                    <option value="nigerien">Nigerien</option>
                                    <option value="nigerian">Nigerian</option>
                                    <option value="north korean">North Korean</option>
                                    <option value="northern irish">Northern Irish</option>
                                    <option value="norwegian">Norwegian</option>
                                    <option value="omani">Omani</option>
                                    <option value="pakistani">Pakistani</option>
                                    <option value="palauan">Palauan</option>
                                    <option value="panamanian">Panamanian</option>
                                    <option value="papua new guinean">Papua New Guinean</option>
                                    <option value="paraguayan">Paraguayan</option>
                                    <option value="peruvian">Peruvian</option>
                                    <option value="polish">Polish</option>
                                    <option value="portuguese">Portuguese</option>
                                    <option value="qatari">Qatari</option>
                                    <option value="romanian">Romanian</option>
                                    <option value="russian">Russian</option>
                                    <option value="rwandan">Rwandan</option>
                                    <option value="saint lucian">Saint Lucian</option>
                                    <option value="salvadoran">Salvadoran</option>
                                    <option value="samoan">Samoan</option>
                                    <option value="san marinese">San Marinese</option>
                                    <option value="sao tomean">Sao Tomean</option>
                                    <option value="saudi">Saudi</option>
                                    <option value="scottish">Scottish</option>
                                    <option value="senegalese">Senegalese</option>
                                    <option value="serbian">Serbian</option>
                                    <option value="seychellois">Seychellois</option>
                                    <option value="sierra leonean">Sierra Leonean</option>
                                    <option value="singaporean">Singaporean</option>
                                    <option value="slovakian">Slovakian</option>
                                    <option value="slovenian">Slovenian</option>
                                    <option value="solomon islander">Solomon Islander</option>
                                    <option value="somali">Somali</option>
                                    <option value="south african">South African</option>
                                    <option value="south korean">South Korean</option>
                                    <option value="spanish">Spanish</option>
                                    <option value="sri lankan">Sri Lankan</option>
                                    <option value="sudanese">Sudanese</option>
                                    <option value="surinamer">Surinamer</option>
                                    <option value="swazi">Swazi</option>
                                    <option value="swedish">Swedish</option>
                                    <option value="swiss">Swiss</option>
                                    <option value="syrian">Syrian</option>
                                    <option value="taiwanese">Taiwanese</option>
                                    <option value="tajik">Tajik</option>
                                    <option value="tanzanian">Tanzanian</option>
                                    <option value="thai">Thai</option>
                                    <option value="togolese">Togolese</option>
                                    <option value="tongan">Tongan</option>
                                    <option value="trinidadian or tobagonian">Trinidadian or Tobagonian</option>
                                    <option value="tunisian">Tunisian</option>
                                    <option value="turkish">Turkish</option>
                                    <option value="tuvaluan">Tuvaluan</option>
                                    <option value="ugandan">Ugandan</option>
                                    <option value="ukrainian">Ukrainian</option>
                                    <option value="uruguayan">Uruguayan</option>
                                    <option value="uzbekistani">Uzbekistani</option>
                                    <option value="venezuelan">Venezuelan</option>
                                    <option value="vietnamese">Vietnamese</option>
                                    <option value="welsh">Welsh</option>
                                    <option value="yemenite">Yemenite</option>
                                    <option value="zambian">Zambian</option>
                                    <option value="zimbabwean">Zimbabwean</option>
                                </select>
                                {errors.country && <span className='xui-form-error-msg xui-font-sz-80'>{errors.country.message}</span>}
                            </div>
                            <div>
                                <label htmlFor="phone_number">Phone Number</label>
                                <PhoneInputWithCountrySelect
                                    className={'ca-custom-phone-input ' + (errors.phone_number && 'error')}
                                    name="phone_number"
                                    defaultValue={''}
                                    control={control}
                                    defaultCountry="NG"
                                    placeholder="Enter phone number"
                                    rules={{
                                        required: 'Phone number is required',
                                        validate: value => {
                                            if (value && !isValidPhoneNumber(value)) {
                                                return 'Invalid phone number';
                                            }
                                        }
                                    }}
                                />
                                {errors.phone_number && <span className='xui-form-error-msg xui-font-sz-80'>{errors.phone_number.message}</span>}
                            </div>
                        </div>
                        <div className='xui-form-box xui-d-grid xui-grid-col-1 xui-lg-grid-col-2 xui-grid-gap-2'>
                            <div>
                                <label htmlFor="gender">Gender</label>
                                <select {...register('gender', {
                                    required: 'Select your gender'
                                })} name="gender" id="gender" defaultValue={''}>
                                    <option value="">--Select a gender--</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                </select>
                                {errors.gender && <span className='xui-form-error-msg xui-font-sz-80'>{errors.gender.message}</span>}
                            </div>
                            <div>
                                <label htmlFor="date_of_birth">Date of Birth</label>
                                <input {...register('date_of_birth', {
                                    required: 'Date of birth is required',
                                    validate: validateAge
                                })} type="date" name="date_of_birth" id="date_of_birth" required />
                                {errors.date_of_birth && <span className='xui-form-error-msg xui-font-sz-80'>{errors.date_of_birth.message}</span>}
                            </div>
                        </div>
                        <div className='xui-form-box xui-d-grid xui-grid-col-1 xui-lg-grid-col-2 xui-grid-gap-2'>
                            <div>
                                <label htmlFor="email">Email Address</label>
                                <input {...register('email', {
                                    required: 'Email address is required',
                                    pattern: {
                                        value: /^\S+@\S+$/i,
                                        message: 'Email address is not correct'
                                    }
                                })} type="email" name="email" id="email" required />
                                {errors.email && <span className='xui-form-error-msg xui-font-sz-80'>{errors.email.message}</span>}
                            </div>
                            <div>
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
                                })} type="password" name="password" id="password" required />
                                {errors.password && <span className='xui-form-error-msg xui-font-sz-80'>{errors.password.message}</span>}
                            </div>
                        </div>
                        <div className='xui-form-box xui-text-center'>
                            <button className={'xui-btn xui-btn-block xui-text-white xui-bdr-rad-2 ca-bg-purple ' + (isDisabled && 'ca-btn-disabled')} disabled={isDisabled}>{buttonTxt}</button>
                            <span className='xui-font-sz-85 xui-d-inline-block xui-mt-1'>Already have an account? <Link className='xui-font-w-500 ca-text-purple' to={'/login'}>Login</Link></span>
                        </div>
                    </form>
                </div>
            </div>
        </section>
        <Error message={errMsg} />
        </>
    );
};

export default Register;