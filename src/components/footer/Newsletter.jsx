import React from 'react';

const Newsletter = () => {
    return (
        <section className="py-7.25 lg:py-20 bg-[url(/bg-images/footer-top-bg.jpg)] bg-no-repeat bg-cover bg-center ">
            <div className="container mx-auto">
                {/* entire layout start */}
                <div className=" px-4 lg:px-0 w-full lg:w-[45%] space-y-2.5 ">
                    {/* 1.icon+ text container */}
                    <div className="flex gap-1 lg:gap-2.5 items-center lg:justify-start justify-center">
                        {/* 1.1 icon */}
                        <img 
                        src="/icons/newsletter-icon.svg"
                        className="w-10 h-10 lg:w-[55px] lg:h-[55px] inline-block "/>
                        {/* 1.2 text */}
                        <h3 className="text-xl lg:text-[24px] text-black font-medium font-inter leading-[160%] capitalize  "> Sign Up For Newsletter </h3>
                    </div>
                    {/* 2. email + subscribe btn */}
                    <div className="w-full relative focus-within:outline-2 focus-within:outline-primary rounded-full ">
                      {/* email address input */}
                      <input 
                      required
                      placeholder='enter your email address'
                      type="email"
                       className="text-sm text-[#777] font-normal font-inter leading-[150%] tracking-[0.1px] capitalize 
                       px-5 py-2.5 rounded-full w-full bg-white outline-none
                       " 
                      />
                      {/* subscribe btn */}
                      <button type="submit" 
                      className='absolute top-0 right-0 subscribe-btn '
                      >
                        subscribe
                      </button>
                    </div>
                </div>
                {/* entire layout end */}
            </div>
        </section>
    );
};

export default Newsletter;