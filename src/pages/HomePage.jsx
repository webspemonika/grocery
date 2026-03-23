import React from 'react';
import HeroSection from '../sections/HeroSection';
import CustomerBenefits from '../sections/CustomerBenefits';
import ProductCategoriesSection from '../sections/ProductCategoriesSection';
import SpecialProductSection from '../sections/SpecialProductSection';
import BannarProductSection from '../sections/BannarProductSection';
import TrandingProductSection from '../sections/TrandingProductSection';
import PreloaderPopup from '../sections/PreloaderPopup';
import QuickView from '../sections/QuickView';
import BrandingBannarSection from '../sections/BrandingBannarSection';
import TopCategoriesProduct from '../sections/TopCategoriesProduct';

const HomePage = () => {
    return (
    <>
    {/* <QuickView/> */}
    <PreloaderPopup/>
    <HeroSection/>
    <CustomerBenefits/>
    <ProductCategoriesSection/>
    <SpecialProductSection/>
    <BannarProductSection/>
    <TrandingProductSection/>
    <BrandingBannarSection/>
    <TopCategoriesProduct/>
    </>
    );
};

export default HomePage;