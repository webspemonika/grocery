import React from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import VerticalProductLayout from '../components/VerticalProductLayout';

const TopCategoriesProduct = () => {
      const products = [
        {
            id: 1,
            productName: "Red Cabbage 1 kg (Approx. 900 g - 1000 g)",
            defaultImage: "/images/fresh-fruit/avacado-default.jpg",
            hoverImage:  '/images/fresh-fruit/avacado-hover.jpg',
            rating: "3.5",
            discount: "10%",
            stockStatus: "",
            currentPrice: "$55",
            regularPrice: "",
        }, {
            id: 2,
            productName: "Papaya (Each) (Approx. 500 g - 3500 g)",
            defaultImage: "/images/fresh-fruit/bannar-default.jpg",
            hoverImage: '/images/fresh-fruit/bannar-hover.jpg',
            rating: "4",
            discount: "",
            stockStatus: "",
            currentPrice: "$2",
            regularPrice: "",
        },
        {
            id: 3,
            productName: "Pomegranate Medium Premium 4 pc (Approx 1.13 kg - 5.2 kg)",
            defaultImage:"/images/fresh-fruit/coconut-tender-default.jpg",
            hoverImage: '/images/fresh-fruit/coconut-tender-hover.jpg',
            rating: "",
            discount: "",
            stockStatus: "",
            currentPrice: "",
            regularPrice: "",
        },
        {
            id: 4,
            productName: "Cucumber 500 g (Approx. 200 g - 2500 g)",
            defaultImage: "/images/fresh-fruit/dragon-default.jpg",
            hoverImage: '/images/fresh-fruit/dragon-hover.jpg',
            rating: "5",
            discount: "20%",
            stockStatus: "",
            currentPrice: "$30",
            regularPrice: "",
        },

        {
            id: 5,
            productName: "Potato per kg (Approx. 950 g - 1000 g)",
            defaultImage: "/images/fresh-fruit/grape-fruit-pink-default.jpg",
            hoverImage: '/images/fresh-fruit/grape-fruit-pink-hover.jpg',
            rating: "5",
            discount: "",
            stockStatus: "",
            currentPrice: "$45",
            regularPrice: "$50",
        },
        {
            id: 6,
            productName: "Coconut Kalash 5 pcs (Pack) (Approx 1600 g - 2000 g)",
            defaultImage: "/images/fresh-fruit/kiwi-default.jpg",
            hoverImage: '/images/fresh-fruit/kiwi-hover.jpg',
            rating: "5",
            discount: "",
            stockStatus: "",
            currentPrice: "$5",
            regularPrice: "$10",
        },

        {
            id: 7,
            productName: "Coconut Kalash 5 pcs (Pack) (Approx 1600 g - 2000 g)",
            defaultImage: "/images/fresh-fruit/musk-melon-default.jpg",
            hoverImage: '/images/fresh-fruit/musk-melon-hover.jpg',
            rating: "5",
            discount: "",
            stockStatus: "",
            currentPrice: "$5",
            regularPrice: "$10",
        },
        {
            id: 8,
            productName: "",
            defaultImage: "/images/fresh-fruit/orange-default.jpg",
            hoverImage: '/images/fresh-fruit/orange-hover.jpg',
            rating: "5",
            discount: "",
            stockStatus: "",
            currentPrice: "$5",
            regularPrice: "$10",
        },

    ]
    return (
        <section className="py-5 lg:py-10">
            <div className="container mx-auto">
        {/* entire layout start */}
                <div className="px-4 lg:px-0 ">
                    {/* 1.header start */}
                    <div className="py-0 lg:py-3.75 mb-2 lg:mb-2 flex flex-col lg:flex-row lg:items-center lg:gap-0 gap-5">
                        {/* 1.1.title */}
                        <h2 className="text-[18px] lg:text-[28px] text-black dark:text-white font-semibold font-inter leading-1 capitalize  ">our Tranding products</h2>
                        {/* 1.2.line */}
                        <hr className="grow border  border-gray-200 mx-5 lg:block hidden"/>
                        {/*1.3 btn */}
                        <div className="flex justify-between md:justify-start gap-2 items-center">
                            <div className="flex gap-2.5 ">
                                <button className="filter-btn"> fresh fruit </button>
                                <button className="filter-btn"> root vegetable </button>
                            </div>

                            {/* 1.4.swiper-navigation-btn */}
                            <div className="flex gap-0.5">
                                <span className="tranding-pro-prev-btn mr-1 normal-swiper-left ">  <IoIosArrowBack /> </span>
                                <span className="tranding-pro-next-btn normal-swiper-right"> <IoIosArrowForward /></span>
                            </div>
                        </div>
                    </div>
                    {/* 1.header end */}
                    {/* 2. 6 products start--------------------------*/}
                    <Swiper
                        slidesPerView={6}
                        spaceBetween={30}
                        loop={true}
                        speed={1000}
                        navigation={{
                            prevEl: ".tranding-pro-prev-btn",
                            nextEl: ".tranding-pro-next-btn"
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
                    {/* 2. 6products end */}
                </div>
                {/* entire layout end */}
            </div>
        </section>
    );
};

export default TopCategoriesProduct;