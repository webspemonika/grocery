import React from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css"
import "swiper/css/navigation"
import VerticalProductLayout from '../components/VerticalProductLayout';
import { Navigation } from 'swiper/modules';

const SpecialProductSection = () => {
    const products = [
        {
            id: 1,
            productName: "Red Cabbage 1 kg (Approx. 900 g - 1000 g)",
            defaultImage: "/images/products/red-cabage-default.jpg",
            hoverImage: '/images/products/red-cabage-hover.jpg',
            rating: "3.5",
            discount: "10%",
            stockStatus: "",
            currentPrice: "$55",
            regularPrice: "",
        }, {
            id: 2,
            productName: "Papaya (Each) (Approx. 500 g - 3500 g)",
            defaultImage: "/images/products/papaya-default.jpg",
            hoverImage: '/images/products/papaya-hover.jpg',
            rating: "4",
            discount: "",
            stockStatus: "",
            currentPrice: "$2",
            regularPrice: "",
        },
        {
            id: 3,
            productName: "Pomegranate Medium Premium 4 pc (Approx 1.13 kg - 5.2 kg)",
            defaultImage: "/images/products/pomegranate-default.jpg",
            hoverImage: '/images/products/pomegranate-hover.jpg',
            rating: "",
            discount: "",
            stockStatus: "",
            currentPrice: "",
            regularPrice: "",
        },
        {
            id: 4,
            productName: "Cucumber 500 g (Approx. 200 g - 2500 g)",
            defaultImage: "/images/products/cucumber-default.jpg",
            hoverImage: '/images/products/cucumber-hover.jpg',
            rating: "5",
            discount: "20%",
            stockStatus: "",
            currentPrice: "$30",
            regularPrice: "",
        },

        {
            id: 5,
            productName: "Potato per kg (Approx. 950 g - 1000 g)",
            defaultImage: "/images/products/potato-default.jpg",
            hoverImage: '/images/products/potato-hover.jpg',
            rating: "5",
            discount: "",
            stockStatus: "",
            currentPrice: "$45",
            regularPrice: "$50",
        },
        {
            id: 6,
            productName: "Coconut Kalash 5 pcs (Pack) (Approx 1600 g - 2000 g)",
            defaultImage: "/images/products/coconat-default.jpg",
            hoverImage: '/images/products/coconat-hover.jpg',
            rating: "5",
            discount: "",
            stockStatus: "",
            currentPrice: "$5",
            regularPrice: "$10",
        },

        {
            id: 7,
            productName: "Coconut Kalash 5 pcs (Pack) (Approx 1600 g - 2000 g)",
            defaultImage: "/images/products/palong-shak.jpg",
            hoverImage: '/images/products/palong-shak-hover.jpg',
            rating: "5",
            discount: "",
            stockStatus: "",
            currentPrice: "$5",
            regularPrice: "$10",
        },
        {
            id: 8,
            productName: "",
            defaultImage: "/images/products/kinder-joy-default.jpg",
            hoverImage: '/images/products/kinder-joy-hover.jpg',
            rating: "5",
            discount: "",
            stockStatus: "",
            currentPrice: "$5",
            regularPrice: "$10",
        },

    ]
    return (
        <section id="special-procuct" className="py-5 ">
            <div className="container mx-auto">
                {/* entire layout start -----------*/}
                <div className="px-3 lg:px-0">
                    {/* 1.header start---------- */}
                    <div className=" py-0 lg:py-3.75 mb-2 lg:mb-2 flex items-center justify-between lg:justify-start">
                        {/* 1.heading text */}
                        <h2 className="text-[18px] lg:text-[28px] text-black font-semibold font-inter leading-1 capitalize  ">our special products</h2>
                        {/* 2. line */}
                        <div className="grow border border-[#e5e5e5] mx-5 lg:block hidden"></div>
                        {/* 3. navigation btn */}
                        <div className="">
                            <span className="special-pro-prev-btn mr-1 normal-swiper-left ">  <IoIosArrowBack /> </span>
                            <span className="special-pro-next-btn normal-swiper-right"> <IoIosArrowForward /></span>
                        </div>

                    </div>
                    {/* 1.header end */}
                    {/* 2.products  */}
                    <Swiper
                        slidesPerView={6}
                        spaceBetween={30}
                        loop={true}
                        speed={1000}
                        navigation={{
                            prevEl: ".special-pro-prev-btn",
                            nextEl: ".special-pro-next-btn"
                        }}
                        modules={[Navigation]}
                        breakpoints={{

                            // Mobile (320px and up)
                            320: { slidesPerView: 2, spaceBetween: 10, },
                            // Small Mobile (480px and up)
                            480: { slidesPerView: 2, spaceBetween: 10, },
                            // Tablet Portrait (640px and up)
                            640: { slidesPerView: 3, spaceBetween: 10, },
                            // Tablet Landscape (768px and up)
                            768: { slidesPerView: 4, spaceBetween: 10, },
                            // Desktop (1024px and up)
                            1024: { slidesPerView: 5, spaceBetween: 20, },
                            // Large Desktop (1280px and up)
                            1280: { slidesPerView: 6, spaceBetween: 30, },

                        }}
                    >
                        {products.map((product) => (
                            <SwiperSlide key={product.id}>
                                <VerticalProductLayout product={product} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
                {/* entire layout end */}
            </div>
        </section>
    );
};

export default SpecialProductSection;