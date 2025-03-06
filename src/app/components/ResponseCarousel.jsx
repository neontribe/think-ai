"use client"

import React, { useState } from "react";

const ResponseCarousel = ({ slideData}) => {
    const [currentSlide, setCurrentSlide] = useState();


    return (
        <div className="relative w-full max-w-4xl h-72 md:h-80 lg:h-[28rem] bg-[#291498] rounded-3xl overflow-hidden">
            {/* slider container */}
            <div className="relative w-full h-full flex transition-transform duration-500">
                {slideData.map((slide, index) => (
                    <div 
                        key={index}
                        className={`absolute inset-0 flex items-center justify-center text-white transition-opacity duration-500 ${index === currentSlide ? "opacity-100" : "opacity-0"}`}
                    >
                        <div className="p-8 bg-blue-700/80 rounded-3xl max-w-[90%]">
                            <h1 className="text-3xl font-bold">{slide.paragraph}</h1> 
                        </div>
                    </div>
                ))} 
            </div>
        </div>
    );
    
};

export default ResponseCarousel;

