"use client"

import React, { useState } from "react";
import ArrowButton from "./ArrowButton";

const ResponseCarousel = () => {
    const slideData = [ 
        {number: "1", paragraph: "This is a placeholder slide number one."},
        {number: "2", paragraph: "This is a placeholder slide number two."},
        {number: "3", paragraph: "This is a placeholder slide number three."},
        
    ]
    const [localSlides] = useState(slideData);
    const [currentIndex, setCurrentIndex] = useState(0)

    const updateSlide = (newIndex) => {
        setCurrentIndex(newIndex);
    };
    
    const nextSlide = () => {
        let newIndex = currentIndex-1;
        if (newIndex < 0) {
            newIndex = localSlides.length -1;
        }
        return updateSlide(newIndex)
    }
    
    const prevSlide = () => {
        let newIndex = currentIndex+1;
        if (newIndex == localSlides.length) {
            newIndex = 0;
        }
        return updateSlide(newIndex)
    }
    


    return (
        <>
            {/* outer container */}
            <div className="relative w-full max-w-4xl md:h-80 lg:h-[28rem] bg-[#291498] rounded-3xl shadwo-lg overflow-hidden mx-auto">
                {/* slider container */}
                <div className="flex flex-col items-startspace-y-4 ">
                    {slideData.map((slide, index) => {
                        const isActive = index === currentIndex;
                        return (
                        
                        <div 
                            key={index}
                            className={`absolute  bg-green inset-0 flex items-center justify-center text-white transition-opacity duration-500 
                                ${isActive ? "opacity-100 z-10" : "opacity-0 z-0"}`}
                        >
                            {/* slide content */}
                            <div className="flex items-start self-start -mt-2 p-14 mr-4 rounded-3xl max-w-[90%] flex">
                            <div className="text-8xl font-bold relative mt-8 mr-4">{slide.number}</div>
                            <div className="flex-1">
                                <h1 className="text-lg">{slide.paragraph}</h1>
                                </div>
                            </div>
                        </div>
                        )
                        })}
                    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center justify-between w-full max-w-[90%] px-4 z-20">
                        <ArrowButton direction="left" onClick={nextSlide}  ariaLabel="Next slide"/>
                        <ArrowButton direction="right" onClick={prevSlide} arialLabel="Previous slide"/>
                    </div>
                </div>
            </div>
            </>
        );
        
    };
    
    export default ResponseCarousel;
