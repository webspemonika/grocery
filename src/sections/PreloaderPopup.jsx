import React, { useEffect, useState } from 'react';
import { RxCross1 } from 'react-icons/rx';

const PreloaderPopup = () => {
    const [isOpen, setIsOpen] = useState(false); // Initially hidden
    const [isClosing, setIsClosing] = useState(false);
    // Close popup handler
    const handleClose = (e) => {
        e.stopPropagation()
        setIsClosing(true);

        setTimeout(() => {
            setIsClosing(false);
            setIsOpen(false);
        }, 600); // CSS animation সময়ের সাথে মিলবে
    };


    // Checkbox handler 
    const checkboxHandler = (e) => {
        if (e.target.checked) {
            sessionStorage.setItem("hideNewsletterPopup", "true");
            setIsOpen(false);
        }
    };

    // Show popup after 2 minutes if not hidden before
    useEffect(() => {
        const hidePopup = sessionStorage.getItem("hideNewsletterPopup");

        if (hidePopup === "true") {
            setIsOpen(false);
            return;
        }

        // Show popup after 2 minutes (2000 milliseconds)
        const timer = setTimeout(() => { setIsOpen(true); }, 3000);
        return () => clearTimeout(timer);
    }, []);

    // Don't render if popup is closed
    if (!isOpen) return null;
    return (
        <>
            {/* / 1.preloader overlay  */}
            <div id="popup"
               
                onClick={handleClose}
                className=" fixed px-4 lg:px-0 flex justify-center items-center inset-0 bg-black/50 h-screen z-120 ">
                {/* // 2. preloader container container */}
                <div className={` ${isClosing ? "slide-up" : "slide-down"}  max-w-[600px] relative w-full  bg-white z-130  rounded-lg   "`}>
                    {/* 0. cross icon */}
                    <div className="absolute top-5 right-5 text-red-400 ">
                        <span
                            onClick={handleClose}
                            className="absolute top-0 right-0 text-xl text-black cursor-pointer "
                        >
                            <RxCross1 />
                        </span>
                    </div>
                    {/* 1.image */}
                    <div className="">
                        <img
                            src="/images/preloader.jpg"
                            alt=""
                            className="rounded-lg w-full h-auto object-cover"
                        />
                    </div>
                    {/* 2.content */}
                    <div className=" py-4 px-2 lg:py-7.5 lg:px-4 flex flex-col items-center">
                        {/* 2.1 heading  */}
                        <h3 className="lg:w-[72%] w-full text-center  text-[22px] lg:text-[30px] text-black font-semibold font-inter tracking-wid  leading-[150%] capitalize mb-3.75  ">join our newsletter and get 20% off your first order</h3>
                        {/* 2.2 description */}
                        <p className="lg:w-[60%]  w-full text-center text-xs lg:text-sm text-[#777] font-normal font-inter  tracking-wider leading-[150%] normal-case  "> subscribe to our newsletter and get the latest tranding product and offers update </p>
                        {/* 2.3 email and sign up btn container*/}
                        <div className="my-3.5 justify-center w-[72%] md:w-[72%] bg-red-00 flex gap-2 md:flex-row flex-col">
                            <input
                                required
                                placeholder="enter your email address"
                                type="email"
                                className="px-2 lg:px-3.75 py-1 lg:py-1.5 rounded-full focus:outline-2 focus:outline-primary outline outline-gray-300 text-sm text-[#777] placeholder:text-[#777] "
                            />
                            <button
                                type="submit"
                                className='subscribe-btn w-full lg:w-auto'
                            >
                                sign up
                            </button>
                        </div>
                        {/* 2.4checkbox and text container */}
                        <div className="flex gap-2 items-center">
                            <input
                                name=""
                                id=""
                                onChange={checkboxHandler}
                                // onClick={handleClose}
                                type="checkbox"
                                className='cursor-pointer h-5 w-5 rounded-xl accent-primary'
                            />
                            <p className="text-sm lg:text-base text-[#777] font-normal font-inter leading-[150%]  "> Don't show this popup again </p>
                        </div>
                        {/* -------------- */}

                    </div>

                </div>
                {/* container end- */}
            </div>

        </>

    );
};

export default PreloaderPopup;