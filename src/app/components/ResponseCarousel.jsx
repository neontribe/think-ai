"use client"

import React, { useState } from "react";
import ArrowButton from "./ArrowButton";

const ResponseCarousel = ({ slideData = [] }) => {
    const [currentSlide, setCurrentSlide] = useState();

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev -1 + slideData.length) % slideData.lenght);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev -1 + slideData.lenght) % slideData.lengh);
    }


    return (
    <>
        <div className="relative w-full max-w-4xl h-72 md:h-80 lg:h-[28rem] bg-[#291498] rounded-3xl overflow-hidden mx-auto">
            {/* slider container */}
            <div className="relative w-full h-full flex transition-transform duration-500">
                {slideData.map((slide, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 flex items-center justify-center text-white transition-opacity duration-500 ${index === currentSlide ? "opacity-100" : "opacity-0"}`}
                    >
                        {/* slide content */}
                        <div className="p-8 bg-blue-700/80 rounded-3xl max-w-[90%]">
                            <h1 className="text-3xl font-bold">{slide.paragraph}</h1>
                        </div>
                    </div>
                ))}
            </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center justify-between w-full max-w-[90%] bg-red-500 px-4">
        <ArrowButton direction="left" onClick={nextSlide}  ariaLabel="Next slide"/>
        <ArrowButton direction="right" onClick={prevSlide} arialLabel="Previous slide" />
        </div>


        </>
    );
    
};

export default ResponseCarousel;

