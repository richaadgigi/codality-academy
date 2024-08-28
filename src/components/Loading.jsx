import React from 'react';
import HomeHeader from './HomeHeader';

const Loading = () => {
    return (
        <>
        <HomeHeader notfound={true} loading={true} />
        </>
    );
};

export default Loading;