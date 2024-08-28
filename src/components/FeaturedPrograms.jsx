import React, { useEffect, useState } from 'react';
import CourseCard from './CourseCard';
import axios from 'axios';
import { API_URL } from "../../globals.json";

const FeaturedPrograms = () => {
    const [ programmes, setProgrammes ] = useState();
    const getAllPrograms = () => {
        axios({
            method: "GET",
            url: `${API_URL}/public/courses`
        })
        .then((response) => {
            setProgrammes(response.data.data.rows);
        })
        .catch((error) => {
            console.log(error);
        })
        .finally(() => {
            setHideSkeletal(true);
        });
    }
    useEffect(() => {
        getAllPrograms();
    }, []);
    return (
        <>
        <section className='xui-py-3 xui-lg-py-4'>
            <div className='xui-container xui-d-flex xui-flex-jc-space-between'>
                <h2 className='xui-font-sz-250 xui-md-font-sz-350 xui-lg-font-sz-350 xui-font-w-700 xui-lg-w-fluid-70'>Get introduced to <span className='ca-text-purple'>introductory courses</span></h2>
            </div>
            <div className='xui-px-1 xui-lg-px-1'>
                <div className='ca-bg-light-purple xui-bdr-rad-2 xui-d-grid xui-grid-col-1 xui-lg-grid-col-3 xui-mt-2 xui-lg-py-3 xui-lg-px-3'>
                    {programmes && programmes.slice(0, 3).map((programme, index) => (
                        <React.Fragment key={index}>
                            <CourseCard title={programme.title} desc={programme.content} />
                        </React.Fragment>
                    ))}
                    
                </div>
            </div>
        </section>
        </>
    );
};

export default FeaturedPrograms;