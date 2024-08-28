import React, { useContext, useEffect } from 'react';
import GeneralContext from './GeneralContext';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import axios from 'axios';
import { API_URL } from "../../globals.json";
import Loading from './Loading';

const Protected = (props) => {
    const { children, redirect } = props;
    const { user, setUser } = useContext(GeneralContext);
    const userCookie = Cookies.get('signedInUser');
    const navigate = useNavigate();
    const isObjectEmpty = (obj) => {
        for (const key in obj) {
            if (obj.hasOwnProperty(key) && obj[key] !== null && obj[key] !== undefined && obj[key] !== '') {
                return false;
            }
        }
        return true;
    }
    useEffect(() => {
        if (userCookie) {
            axios({
                method: "GET",
                url: `${API_URL}/profile`,
                headers: {
                    "codality-access-token": JSON.parse(userCookie).token
                }
            })
            .then((res) => {
                const updatedUser = { ...user, ...res.data.data, "isLoggedIn": true };
                setUser(updatedUser);
                if (redirect) {
                    navigate('/my-dashboard');
                }
            }, (err) => {
                setUser({ ...user, "isLoggedIn": false });
                navigate('/login');
            });
        } else {
            setUser({ ...user, "isLoggedIn": false });
            navigate('/login');
        }
    }, [redirect]);
    return (
        <>
        {isObjectEmpty(user) ? <><Loading /></> : children}
        </>
    );
};

export default Protected;