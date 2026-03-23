import React from 'react';

const BrandingBannarSection = () => {
    const bannars = [
        {
            id: 1,
            image: "/bg-images/branding-bannar-chips.jpg",
            badge: "healthy meals",
            productTitle: "doritos",
            productName: "spicy chips",
            benefits: "start from $25",

        },
              {
            id: 2,
            image: "/bg-images/branding-bannar-green-tea.jpg",
            badge: "extra 10% off",
            productTitle: "get joy of",
            productName: "hot green tea",
            benefits: "code: Flat10",

        },
              {
            id: 3,
            image: "/bg-images/branding-bannar-kfc.jpg",
            badge: "fast food",
            productTitle: "hot fried",
            productName: "spicy chickens",
            benefits: "1kg - 4kg / 40pcs",

        }
    ]
    return (
        <section className=" py-5 lg:py-7 ">
            <div className="container mx-auto">
                {/* entire layout start */}
                <div className="px-4 lg:px-0 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-2 lg:gap-7.25 ">
                    {/* each content start */}
                    {bannars.map((bannar)=>(
                        <div className="group relative overflow-hidden rounded-[10px] cursor-pointer ">
                        {/* 0 .image */}
                        <img
                            src={bannar.image}
                            alt=""
                            className="w-full h-auto object-cover rounded-[10px] hover:scale-115 transition-transform duration-1000  "
                        />
                        <div className="absolute z-10 top-1/2 -translate-y-1/2 left-5 md:left-3 lg:left-10  ">
                            {/* 1.badge */}
                            <span className="px-1 lg:px-2.5 py-0.5 rounded-[3px] bg-white text-xs lg:text-sm  text-black font-semibold font-inter leading-[150%] uppercase "> {bannar.badge} </span>
                            {/* 2.title */}
                            <h4 className="text-[18px] lg:text-[28px] text-white font-light font-inter mt-3 md:mt-1 lg:mt-5 leading-[120%] capitalize  "> {bannar.productTitle} </h4>
                            {/* product-name */}
                            <h3 className="text-[18px] lg:text-[28px] text-white font-semibold font-inter  leading-[120%] capitalize mb-5 md:mb-3 lg:mb-8 ">{bannar.productName}  </h3>
                            {/* 3.price */}
                            <span className=" text-sm lg:text-lg text-white font-normal font-inter leading-[150%] capitalize  ">{bannar.benefits}  </span>
                        </div>
                    </div>
                    ))}
                    {/* each content end */}
                </div>
                {/* entire layout end */}
            </div>
        </section>
    );
};

export default BrandingBannarSection;