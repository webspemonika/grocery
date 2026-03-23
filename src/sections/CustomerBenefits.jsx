import React from 'react';
import { BiSupport } from 'react-icons/bi';
import { GoGift } from 'react-icons/go';
import { HiOutlineTruck } from 'react-icons/hi';
//1. swiper/react
import { Swiper, SwiperSlide } from 'swiper/react';
// 2.Import Swiper/css style
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/scrollbar';
// 3. 
import { FreeMode, Mousewheel, Scrollbar } from 'swiper/modules';
const CustomerBenefits = () => {


    const benefits = [
        {
            id: 1,
            icon: <HiOutlineTruck />,
            title: "easy to buy & return",
            description: 'single click to buy & return',
        },
        {
            id: 2,
            icon: <BiSupport />,
            title: "24/7 support available",
            description: '24 hours support a day',
        },
        {
            id: 3,
            icon: <GoGift />,
            title: "gift voucher",
            description: 'refer & support a gift',
        },
        {
            id: 4,
            icon: <HiOutlineTruck />,
            title: "affordable price",
            description: 'get factory price',
        },
        {
            id: 5,
            icon: <HiOutlineTruck />,
            title: "secure payments",
            description: '100% protected',
        },
    ]
    return (
        <section className="">
            <div className="container mx-auto ">
                <div className="bg-white  rounded-lg border border-[#efefef] px-5  py-5 lg:px-13 lg:py-10  ">
                    <Swiper
                    
                   
                        direction="horizontal"
                        slidesPerView={5}
                        // freeMode={true}
                        mousewheel={{
                            forceToAxis: true,
                            releaseOnEdges: true,
                        }}
                          freeMode={true}
                        scrollbar={{ draggable: true }}
                        modules={[FreeMode, Scrollbar, Mousewheel]}
                        breakpoints={
                            {
                                // Mobile (320px and up)
                                320: { slidesPerView: 1.5, spaceBetween: 0, },
                                // Small Mobile (480px and up)
                                480: { slidesPerView: 2.5, spaceBetween: 0, },
                                // Tablet Portrait (640px and up)
                                640: { slidesPerView: 3, spaceBetween: 0, },
                                // Tablet Landscape (768px and up)
                                768: { slidesPerView: 4, spaceBetween: 0, },
                                // Desktop (1024px and up)
                                1024: { slidesPerView: 5, spaceBetween: 0, },
                                // Large Desktop (1280px and up)
                                1280: { slidesPerView: 5, spaceBetween: 0, },
                            }
                        }
                        className={" px-5  py-5 lg:px-13 lg:py-10 "}
                    >
                        {benefits.map((benefit, index) => (
                            <SwiperSlide key={index}>
                                <div className="flex sm:gap-1 md:gap-2 lg:gap-5 items-center  cursor-pointer">
                                    <span className="text-[35px] md:text-[45px] lg:text-[55px] text-primary ">{benefit.icon}</span>
                                    <div className="">
                                        <h6 className='text-[14px] lg:text-base text-black font-semibold font-inter leading-[150%] capitalize   '>{benefit.title}</h6>
                                        <p className= ' text-[13px] lg:text-[14px] text-[#666] font-normal  font-inter leading-[150%] normal-case '>{benefit.description}</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

            </div>
        </section >
    );
};

export default CustomerBenefits;
// px-5  py-5 lg:px-13 lg:py-10