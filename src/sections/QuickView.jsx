import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

const QuickView = () => {
    const products=[

      
    ]
    return (
        //quick-view-overlay...
        <div className="inset-0 z-100 fixed bg-black/50  flex justify-center items-center px-4 lg:px-0 ">
            {/* quick-view container start */}
            <div className="max-w-[922px] w-full bg-white  ">
                {/* product image swiper start */}
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
                    <div className="bg-amber-00" >
                        <Swiper>
                            {products.map((product) => (
                                <SwiperSlide>
                                    <div className="">
                                        <img
                                            src={product.image}
                                            alt={product.name}
                                            className=""
                                        />
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                    {/* product image swiper end */}
                    {/* product details start  */}
                    <div className="bg-amber-00" >
                        <h2 className=""> {product.name} </h2>
                        Red Cabbage 1 kg (Approx. 900 g - 1000 g)
                        4.00 out of 5based on 1customer rating(1 review)
                        $50

                        This Exquisite Mix Is Crafted To Satisfy Your Taste.
                        It Has A Smooth And Creamy Texture.
                        Making It Perfect For Cooking, Baking.
                    </div>
                    {/* product details end */}

                </div>
            </div>
            {/* quick-view container end */}
        </div>
    );
};

export default QuickView;