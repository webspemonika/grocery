import React from 'react';
import { Link } from 'react-router';

const HeroSection = () => {
    // array of object start-----------
    const bannars = [
        {
            id: 1,
            bannerImage: '/bg-images/main-banner-01.jpg',
            brandingText: "hot deals",
            heading: "big sale vegetables",
            discount: "sale up to 45% off"

        },
        {
            id: 1,
            bannerImage: '/bg-images/main-banner-02.jpg',
            brandingText: "fast deals",
            heading: "very tasty fried chicken",
            discount: "free delivery 10 km"

        },
        {
            id: 1,
            bannerImage: '/bg-images/main-banner-03.jpg',
            brandingText: "weekly offers",
            heading: "chooco chip mix cookie",
            discount: "sale up to 35% off"

        },

    ]
    // array of object end

    // jsx-----
    return (
        <section className="pt-5 md:py-8">
            <div className="container mx-auto ">
                {/* entire layout start */}
                <div className="mobile-padding grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-2 lg:gap-5 ">
                    {/* each layout */}
                    {bannars.map((bannar) => {
                        return (
                            <div style={{ backgroundImage: `url(${bannar.bannerImage})` }}
                                className={` bg-no-repeat bg-cover bg-center p-5 lg:py-16.5 md:p-5 lg:px-10 rounded-[10px]  cursor-pointer`} >
                                <div className=" w-[60%] md:w-[75%] lg:w-[55%]  ">
                                    {/* 1.branding text */}
                                    <p className="text-[11px] lg:text-[13px] text-black font-semibold font-inter uppercase p-1 md:py-1 md:px-1 lg:px-4 lg:py-1 bg-[#fbc00d] inline-block rounded-[3px]  "> {bannar.brandingText}  </p>
                                    {/* 2.heading */}
                                    <h2 className="text-[22px] lg:text-[34px] text-white font-semibold font-inter capitalize leading-[110%] my-5 md:my-3 lg:my-7  "> {bannar.heading} </h2>
                                    {/* 3.discount */}
                                    <h6 className="text-[14px] lg:text-xl text-white font-normal font-inter capitalize  mb-5 "> {bannar.discount} </h6>
                                    {/* 4. btn */}
                                    <Link
                                        to={"shop"}
                                        className='py-2 px-3 lg:py-4 lg:px-8  rounded-full bg-white text-[10px] lg:text-[14px] text-black font-normal font-inter leading-[120%] uppercase hover:underline  inline-block '
                                    >
                                        get it now
                                    </Link>
                                    {/* ---------- */}
                                </div>

                            </div>
                        )
                    })}
                </div>
                {/* entire layout end */}
            </div>
        </section>
    );
};

export default HeroSection;