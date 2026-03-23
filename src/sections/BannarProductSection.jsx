import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css"

const BannarProductSection = () => {
    const bannarProducts = [
        {
            id: 1,
            image: "/images/banner/juice.jpg",
            title: "Natural Food 3 Pack",
            benefits: "Flat 15% OFF"
        },
        {
            id: 2,
            image: "/images/banner/milk-power.jpg",
            title: "New Arrival Milk Powder",
            benefits: "Buy 2 Get 1 FREE"
        },
        {
            id: 3,
            image: "/images/banner/simba.jpg",
            title: "Activity Book For Kids",
            benefits: "$39.00 $59.00"
        },
        {
            id: 4,
            image: "/images/banner/malata.jpg",
            title: "Stylish Baby Dresses",
            benefits: "Up to 35% OFF"
        },
    ]
    return (
        <section id="bannar-product" className="py-5 lg:py-10 ">
            <div className="container mx-auto">
                {/* entire layout start----------------- */}
                <div className="px-4 lg:px-0">
                    <Swiper
                        slidesPerView={4}
                        spaceBetween={30}
                        breakpoints={{

                            // Mobile (320px and up)
                            320: { slidesPerView: 1.5, spaceBetween: 10, },
                            // Small Mobile (480px and up)
                            480: { slidesPerView: 2, spaceBetween: 10, },
                            // Tablet Portrait (640px and up)
                            640: { slidesPerView: 2, spaceBetween: 10, },
                            // Tablet Landscape (768px and up)
                            768: { slidesPerView: 3, spaceBetween: 10, },
                            // Desktop (1024px and up)
                            1024: { slidesPerView: 3, spaceBetween: 30, },
                            // Large Desktop (1280px and up)
                            1280: { slidesPerView: 4, spaceBetween: 30, },

                        }}
                    >
                        {bannarProducts.map((product) => (
                            <SwiperSlide>
                                <div className="px-1.25 pt-1.25 pb-6.5 rounded-[10px] shadow-[1.5px_2.598px_7px_0px_rgba(0,0,0,0.15)] dark:bg-[#0E0E0E] ">
                                    {/* 1.image */}
                                    <div className="overflow-hidden  rounded-[10px]">
                                        <img src={product.image} alt={product.title} className="w-full h-auto object-cover hover:scale-110 cursor-pointer transition-all duration-500" />
                                    </div>
                                    {/* content */}
                                    <div className=" mt-2.5 divide-y divide-[#666666]/10 dark:divide-white/10 inline-flex flex-col items-center w-full ">
                                        {/* 2.1title */}
                                        <h3 className="text-sm lg:text-[22px] text-black dark:text-white font-medium lg:font-semibold font-inter leading-[150%] capitalize pb-2.5  "> {product.title} </h3>
                                        {/* 2.2benefits */}
                                        <p className="pt-2.5 text-xs lg:text-sm text-[#666] dark:text-white font-normal font-inter uppercase leading-[150%] "> {product.benefits} </p>
                                    </div>
                                    {/* end---------- */}
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
                {/* entire layout end */}
            </div>
        </section>
    );
};

export default BannarProductSection;