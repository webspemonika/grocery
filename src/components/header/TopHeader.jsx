import React, { useState } from 'react';
import { BiPackage, BiSearch } from 'react-icons/bi';
import { CgMenu } from 'react-icons/cg';
import { HiOutlineMenuAlt1 } from 'react-icons/hi';
import "./hamber-menu.css"
import { FaUserLarge } from 'react-icons/fa6';
import { Link } from 'react-router';
import { GoHeart } from 'react-icons/go';
import { FaShoppingCart } from 'react-icons/fa';
import { IoIosGitCompare } from 'react-icons/io';
import { AiOutlineHome } from 'react-icons/ai';
import { BsClipboardCheck } from 'react-icons/bs';
import { RxCross1 } from 'react-icons/rx';
import { FiHeart } from 'react-icons/fi';
const TopHeader = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false)
    return (
        <>
            <section className="bg-green-900 py-1">
                <div className="container mx-auto">
                    {/* 1.contact-content start */}
                    <div className="text-sm-white py-1 lg:flex hidden  justify-center   divide-x divide-white">
                        {/* 1.phone number  */}
                        <a href="tel:+8801864162004" className="px-5">01864162003  </a>
                        {/* 2.time */}
                        <span className="px-5"> Mon - Fri :8 A.M-4 P.M </span>
                        {/* 3.email */}
                        <a href="mailto:webspecialist@gmail.com" className="px-5 "> webspecialistmonika@gmail.com  </a>
                    </div>
                </div>
            </section>
            <hr className='hidden lg:block border-0.5 border-green-900/90 ' />
            <section className="bg-green-900 py-3 " >
                <div className="container mx-auto ">
                    <div className="grid grid-cols-5 md:grid-cols-8 gap-0 md:gap-10 items-center px-2 md:px-0 ">


                        <div className="col-span-4 gap-8 flex md:col-span-2 items-center">
                            <div className="col-span-1  ">
                                {/* 1.menu bar btn */}
                                <button
                                    onClick={() => setSidebarOpen(true)}
                                    type="button"
                                    className="menu-bar shrink-0 md:hidden inline-flex"
                                >
                                    <span className="default-icon"><HiOutlineMenuAlt1 /> </span>
                                    <span className="hover-icon"><CgMenu /> </span>
                                </button>

                            </div>
                            {/* mobile sidebar overlay */}
                            <div onClick={() => setSidebarOpen(false)}
                                className={`fixed inset-0 z-110 bg-black/30  block lg:hidden 
                           transition-all duration-1000 ease-in-out  
                             ${sidebarOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}
                           `}
                            />
                            {/* sidebar container */}

                            <div
                                className={`fixed top-0 left-0 z-120 h-screen w-[70vw] bg-green-900 
                          transform transition-all duration-1000 ease-in-out 
                          ${sidebarOpen ? 'translate-x-0 opacity-100 visible  ' : '-translate-x-full opacity-0 invisible '}`}
                            //   onMouseEnter={() => setShowCrossIcon(false)}
                            >
                                {/* 1.sidebar header */}
                                <div className="p-5 flex justify-between items-center">
                                    <img
                                        src="/logos/nav-logo.svg"
                                        alt=""
                                        className="w-[150px] h-auto " />
                                    <span onClick={() => setSidebarOpen(false)}
                                        className="text-[20px] text-white "><RxCross1 /> </span>
                                </div>
                                {/*2.sidebar body  */}
                                
                            </div>
                            {/* 2.nav-logo */}
                            <Link to="/" className="col-span-2 flex flex-1 justify-center">
                                <img
                                    src="/logos/nav-logo.svg"
                                    alt=""
                                    className=" inline-block w-[258px] h-auto text-center "
                                />
                            </Link>
                        </div>
                        {/* 2.search */}

                        <form
                            //    onSubmit={handleSearch}
                            className="relative md:inline-grid hidden md:col-span-4 "
                        >
                            <div className="flex items-center bg-white pl-4 pr-1   rounded-lg w-full focus-within:outline-3 focus-within:outline-primary">
                                {/* Search Icon */}
                                <span className=" flex items-center">
                                    <BiSearch className="w-5 h-5 inline-block text-gray-500" />
                                </span>

                                {/* Search Input */}
                                <input
                                    type="text"
                                    //   value={searchQuery}
                                    //   onChange={handleInputChange}
                                    placeholder="Search everything at bumedi store..."
                                    className="w-full bg-red-00 py-3 px-2  text-gray-700 placeholder-gray-400 focus:outline-none "

                                />

                                {/* Search Button */}
                                <button className="px-7 py-2 rounded-lg bg-primary cursor-pointer
                          text-sm text-white font-semibold font-inter leading-[150%]  "> search </button>
                            </div>
                        </form>
                        {/* 3 quick-links */}
                        <ul className="col-span-1 md:col-span-2 flex gap-1 md:gap-5 justify-end md:justify-center ">
                            <li>  <Link className="hidden! md:inline-flex! quick-link-header" > <FaUserLarge /></Link> </li>
                            <li>  <Link className="hidden! md:inline-flex! quick-link-header " > <GoHeart /></Link> </li>
                            <li>  <Link className="quick-link-header " >
                                <FaShoppingCart />
                            </Link> </li>
                            <li>  <Link className="hidden! md:inline-flex! quick-link-header  " > <IoIosGitCompare /></Link> </li>

                        </ul>


                    </div>

                </div>
            </section>
            {/* mobile navigation  */}
            <div className="fixed bottom-0 left-0 right-0 bg-green-900 border-t border-gray-300 shadow-xl z-50 block md:hidden">
                <div className="grid grid-cols-5 gap-3 py-2">
                    {/* Home */}
                    <Link to="/" className="flex flex-col items-center justify-center gap-1">
                        <span className=""> <AiOutlineHome className="w-6 h-6  text-white" />   </span>
                        <span className="text-xs  text-white">Home</span>
                    </Link>

                    {/* Products */}
                    <Link to="/shop" className="flex flex-col items-center justify-center gap-1">

                        <span className=""> <BiPackage className="w-6 h-6 text-white" />  </span>
                        <span className="text-xs text-white">Products</span>
                    </Link>

                    {/* My Cart - with badge */}
                    <Link to="/" className="flex flex-col items-center justify-center gap-1">
                        <div className="relative">
                            <span className=""><FiHeart className="w-6 h-6  text-white" /></span>
                            {/* Badge */}
                            <span className="absolute -top-3 -right-3 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center font-semibold">
                                3
                            </span>
                        </div>
                        <span className="text-xs text-white font-semibold">My Cart</span>
                    </Link>

                    {/* My Order */}
                    <Link to="/" className="flex flex-col items-center justify-center gap-1">
                        <span><BsClipboardCheck className="w-6 h-6  text-white" /></span>
                        <span className="text-xs  text-white">My Order</span>
                    </Link>

                    {/* Profile */}
                    <Link to="/" className="flex flex-col items-center justify-center gap-1">
                        <span ><FaUserLarge className="w-6 h-6  text-white" /></span>
                        <span className="text-xs  text-white">Profile</span>
                    </Link>
                    {/* end----------------------- */}
                </div>
            </div>




            {/* mobile search bar */}

            <form
                //    onSubmit={handleSearch}
                className="relative block md:hidden mt-2  px-2 "
            >
                <div className="flex items-center bg-white pl-4 pr-1   rounded-lg w-full outline-2 outline-primary">
                    {/* Search Icon */}
                    <span className=" flex items-center">
                        <BiSearch className="w-5 h-5 inline-block text-gray-500" />
                    </span>

                    {/* Search Input */}
                    <input
                        type="text"
                        //   value={searchQuery}
                        //   onChange={handleInputChange}
                        placeholder="Search everything at bumedi store..."
                        className="w-full bg-red-00 py-3 px-2  text-gray-700 placeholder-gray-400 focus:outline-none "

                    />

                    {/* Search Button */}
                    <button className="px-7 py-2 rounded-lg bg-primary cursor-pointer
                          text-sm text-white font-semibold font-inter leading-[150%]  "> search </button>
                </div>
            </form>


            
        </>
    );
};

export default TopHeader;