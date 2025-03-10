"use client"

import React, { useState } from "react";
import ArrowButton from "./ArrowButton";

const ResponseCarousel = () => {
    const slideData = [ 
        {number: "1", paragraph: "This is a placeholder slide number one. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries."},
        {number: "2", paragraph: "This is a placeholder slide number two. There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. "},
        {number: "3", paragraph: "This is a placeholder slide number three. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."},
        
    ]
    const [localSlides] = useState(slideData.length > 0 ? slideData : defaultSlides);
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
                <div className="flex flex-col items-starts pace-y-4 transition-transform duration-500 ease-in-out"
                >
                    {localSlides.map((slide, index) => {
                        return (
                        
                            <div 
                            key={index}
                            className="absolute inset-0 flex items-center justify-center text-white transition-transform duration-700 ease-in-out"
                            style={{ transform: `translateX(${(index - currentIndex) * 100}%)` }}
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
                        <ArrowButton direction="left" onClick={nextSlide}  ariaLabel="Next slide"
                        className={currentIndex === 0 ? "hidden" : ""}/>
                        <ArrowButton direction="right" onClick={prevSlide} arialLabel="Previous slide"
                        className={currentIndex === slideData.length -1 ? "hidden" : ""}/>
                    </div>
                </div>
            </div>
            </>
        );
        
    };
    
    export default ResponseCarousel;
