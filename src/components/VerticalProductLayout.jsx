import React, { useState } from 'react';
import { FiEye } from 'react-icons/fi';
import { GoStar, GoStarFill } from 'react-icons/go';
import { IoIosHeartEmpty } from 'react-icons/io';
import { IoGitCompareOutline } from 'react-icons/io5';
import Rating from 'react-rating';
import { Link } from 'react-router';

const VerticalProductLayout = ({ product }) => {


    const [hover, setHover] = useState(false)
    return (
        <div className="rounded-[10px] bg-white dark:bg-[#0E0E0E] shadow-[1.5px_2.598px_7px_0_rgba(0,0,0,0.1)] relative group overflow-x-hidden">
            {/* 1.image */}
            <div className="">
                <img
                    onMouseEnter={() => setHover(true)}
                    onMouseLeave={() => setHover(false)}
                    src={`${ hover ? product.hoverImage : product.defaultImage} `}
                    alt={product.productName}
                    className="w-full h-auto object-cover p-1 cursor-pointer transition-opactiy duration-300 rounded-t-[10px] "
                />
            </div>
            {/* 2.content*/}
            <div className="p-2.5 md:p-3 lg:p-5">
                {/* 2.1 title */}
                <Link className="pb-1.5 inline-block  text-[14px] text-black dark:text-white hover:text-primary font-semibold font-inter leading-[150%] capitalize "> {product.productName} </Link>

                {/* 2.2.rating */}
                <Rating
                    readonly
                    initialRating={product.rating}
                    fullSymbol={<GoStarFill className='text-lg text-[#ffab00] ' />}
                    emptySymbol={<GoStar className='text-lg text-[#ffab00] ' />}
                />
                {/* 2.3.price */}
                <p className="text-sm font-semibold font-inter leading-[150%] my-1.5 ">
                    <span className="text-[#c6c6c6] line-through"> {product.regularPrice} </span>
                    <span className="text-black  "> {product.currentPrice} </span>
                </p>

                {/* 2.4. add to btn */}
                <Link to={""} className='inline-flex justify-center items-center py-1.25 lg:py-1.5 w-full bg-primary  dark:bg-[#25282B]  hover:bg-green-900 dark:hover:bg-[#ffd21d] rounded-full text-sm text-white dark:hover:text-black font-medium font-inter leading-[200%] capitalize cursor-pointer   '> add to cart </Link>

                {/* 2.5.quick view 3 icons */}
                <div className="   
                flex flex-col gap-1
      absolute top-4 
      opacity-0 group-hover:opacity-100
      
      -left-8 group-hover:left-3
      transition-all duration-500 ease-out
      pointer-events-none group-hover:pointer-events-auto    ">
                    {/* 1.heart icon */}
                    <span className="quick-link"> <IoIosHeartEmpty /> </span>
                    {/* 2.eye icon */}
                    <span className="quick-link"> <FiEye /> </span>
                    {/* 3.compare icon */}
                    <span className="quick-link"> <IoGitCompareOutline /> </span>
                </div>
                {/* 2.6 discount */}
                {product.discount && (
                    <p className=" text-[10px] text-white font-normal font-inter leading-[100%] py-1 px-2 bg-primary rounded-[30px] absolute top-1.5 right-1.5 "> {product.discount} </p>
                )}
            </div>
        </div>
    );
};

export default VerticalProductLayout;
//   productName: "Red Cabbage 1 kg (Approx. 900 g - 1000 g)",
//             defaultImage: "/images/products/red-cabage-default.jpg",
//             hoverImage: '/images/products/red-cabage-hover.jpg',
//             rating: "3.5",
//             discount: "",
//             stockStatus: "",
//             currentPrice: "$55",
//             regularPrice: "",