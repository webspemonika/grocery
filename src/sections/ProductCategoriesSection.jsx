import React from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { Link } from 'react-router';
// import Swiper from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import "swiper/css";
import "swiper/css/navigation";

const ProductCategoriesSection = () => {
    const categories = [
        {
            id: 1,
            image: "/images/product-category/bread.jpg",
            category: "fresh bakery",
            quantity: "12 products"
        },
        {
            id: 2,
            image: "/images/product-category/eggmeat.jpg",
            category: "meat & eggs ",
            quantity: "2 products"
        },
        {
            id: 3,
            image: "/images/product-category/snacks.jpg",
            category: "snacks",
            quantity: "2 products"
        },
        {
            id: 4,
            image: "/images/product-category/milk.jpg",
            category: "milk",
            quantity: "2 products"
        },
        {
            id: 5,
            image: "/images/product-category/cold-drinks.jpg",
            category: "cold-drinks",
            quantity: "22 products"
        },
        {
            id: 6,
            image: "/images/product-category/lean-meats.jpg",
            category: "lean meats",
            quantity: "42 products"
        },
        {
            id: 7,
            image: "/images/product-category/vegetable.jpg",
            category: "vegetables",
            quantity: "2 products"
        },
        {
            id: 8,
            image: "/images/product-category/fresh-food.png",
            category: "fresh friut",
            quantity: "2 products"
        },
        {
            id: 9,
            image: "/images/product-category/dried-fruit.png",
            category: "dried friut",
            quantity: "2 products"
        },
        {
            id: 10,
            image: "/images/product-category/organic-oli.png",
            category: "organic oil",
            quantity: "2 products"
        },

    ]
    return (
        <section id="product-category" className="py-10 ">
            <div className="container mx-auto ">
                <div className="px-4 lg:px-0  ">
                    {/* 1.header */}
                    <h2 className=" text-[18px] lg:text-[28px] text-black font-semibold font-inter leading-[150%] mb-2 lg:mb-10 capitalize  "> shop by categories</h2>
                    {/* 2.content */}
                    <div className="relative group ">
                        {/* 2.1 navigation btn */}
                        <span className="cat-prev-btn swiper-left lg:invisible visible lg:group-hover:visible"> <IoIosArrowBack /></span>
                        <span className="cat-next-btn swiper-right lg:invisible visible lg:group-hover:visible"><IoIosArrowForward /></span>
                        {/* <span className=""><IoIosArrowForward /></span> */}
                        <Swiper
                            slidesPerView={8}
                            spaceBetween={25}
                            modules={[Navigation]}
                            navigation={{
                                prevEl: ".cat-prev-btn",
                                nextEl: ".cat-next-btn"
                            }}
                            loop={true}
                            speed={1000}
                            breakpoints={{

                                // Mobile (320px and up)
                                320: { slidesPerView: 2, spaceBetween: 10, },
                                // Small Mobile (480px and up)
                                480: { slidesPerView: 3, spaceBetween: 10, },
                                // Tablet Portrait (640px and up)
                                640: { slidesPerView: 4, spaceBetween: 10, },
                                // Tablet Landscape (768px and up)
                                768: { slidesPerView: 4, spaceBetween: 10, },
                                // Desktop (1024px and up)
                                1024: { slidesPerView: 6, spaceBetween: 25, },
                                // Large Desktop (1280px and up)
                                1280: { slidesPerView: 8, spaceBetween: 25, },

                            }}

                        >
                            {categories.map((category) => (
                                <SwiperSlide>
                                    <div className=" shadow shadow-[1.5px_2.598px_7px_0_rgba(0, 0, 0, 0.1)]  ">
                                        {/* 2.1 image  */}
                                 <div className="bg-white  rounded-t-[10px]">
                                           <img
                                            src={category.image}
                                            alt={category.category}
                                            className='p-1 w-full h-full object-contain'
                                        />
                                 </div>
                                        <div className=" bg-white dark:bg-black rounded-b-[10px] ">
                                            {/* 2.2 product category  */}
                                            <Link to={'/shop'} className='pt-5 pb-1.25 block text-center text-[14px] text-black dark:text-white dark:hover:text-[#ffd21d] hover:text-primary font-bold font-inter leading-[150%] capitalize '> {category.category} </Link>
                                            {/* 2.3 product quantity  */}
                                            <h6 className="pb-5 text-[14px] text-[#666] dark:text-white font-normal font-inter leading-[150%] capitalize text-center"> {category.quantity} </h6>
                                        </div>

                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ProductCategoriesSection;