"use client"

import React, { useState } from "react";
import ArrowButton from "./ArrowButton";

const ResponseCarousel = () => {
    const slideData = [
        {
            number: "1.",
            paragraph: "This is the first slide"
        },
        {
            number: "2.",
            paragraph: "This is the second slide"
        },
    ];

   
    const [currentIndex, setCurrentIndex] = useState(0)
    console.log("current index:", currentIndex);

    const updateSlide = (newIndex) => {
        console.log( `Initial currentIndex : ${currentIndex}`)
        setCurrentIndex(newIndex);
    };
    
const prevSlide = () => {
    let newIndex = currentIndex-1;
    console.log("previous")
    if (newIndex < 0) {
        newIndex = slideData.length -1;
    } 
    return updateSlide(newIndex)
}


const nextSlide = () => {
    let newIndex = currentIndex+1;
    console.log("next")
    if (newIndex == slideData.length) {
        newIndex = 0;
    } 
    return updateSlide(newIndex)
}
    


    return (
    <>
        {/* outer container */}
        <div className="relative w-full max-w-4xl h-72 md:h-80 lg:h-[28rem] bg-[#291498] rounded-3xl overflow-hidden mx-auto">
            {/* slider container */}
            <div className="relative w-full h-full flex">
                {slideData.map((slide, index) => {
                    const isActive = index === currentIndex;
                    return (
                    
                    <div 
                        key={index}
                        className={`absolute  bg-green inset-0 flex items-center justify-center text-white transition-opacity duration-500 
                            ${isActive ? "opacity-100 z-10" : "opacity-0 z-0"}`}
                    >
                        {/* slide content */}
                        <div className="p-8 bg-blue-700/80 rounded-3xl max-w-[90%] flex">
                        <div className="text-5xl font-bold mr-4">{slide.number}</div>
                        <div className="flex-1">
                            <h1 className="mt-4 text-lg font-bold">{slide.paragraph}</h1>
                            </div>
                        </div>
                    </div>
                    )
                    })}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center justify-between w-full max-w-[90%] bg-red-500 px-4 z-20">
                    <ArrowButton direction="left" onClick={nextSlide}  ariaLabel="Next slide"/>
                    <ArrowButton direction="right" onClick={prevSlide} arialLabel="Previous slide"/>
                </div>
            </div>
        </div>
        </>
    );
    
};

export default ResponseCarousel;

