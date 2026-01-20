import React from 'react';
import MainHeader from '../components/header/MainHeader';
import { Outlet } from 'react-router';
import Newsletter from '../components/footer/Newsletter';
import Footer from '../components/footer/Footer';
import TopHeader from '../components/header/TopHeader';

const FrontendLayout = () => {
    return (
        <>
            {/* 1.header... */}
            <TopHeader />
            <MainHeader />
            {/* 2.outlet */}
            <Outlet />
            {/* 3.footer... */}
            <Newsletter />
            <Footer />
        </>
    );
};

export default FrontendLayout;