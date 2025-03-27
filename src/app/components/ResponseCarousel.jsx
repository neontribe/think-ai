"use client"

import React, {useState} from "react";
import ArrowButton from "./ArrowButton";

const ResponseCarousel = ({slideData = []}) => {
  const [localSlides] = useState(slideData);
  const [currentIndex, setCurrentIndex] = useState(0)

  const updateSlide = (newIndex) => {
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    let newIndex = currentIndex - 1;
    if (newIndex < 0) {
      newIndex = localSlides.length - 1;
    }
    return updateSlide(newIndex)
  }

  const prevSlide = () => {
    let newIndex = currentIndex + 1;
    if (newIndex === localSlides.length) {
      newIndex = 0;
    }
    return updateSlide(newIndex)
  }


  return (
    <div
      className="relative overflow-hidden md:w-full max-w-4xl mx-auto rounded-3xl shadow-lg bg-[#291498]">
      {/* slider container */}
      <div className="flex transition-transform duration-700 ease-in-out"
           style={{transform: `translateX(-${(currentIndex * 100)}%`}}
      >
        {localSlides.map((slide, index) => {
          return (<div
            key={'key_'+index}
            className="w-full shrink-0 p-4 text-white "
          >

            {/* slide content */}
            <div className="flex self-start -mt-2 p-12 mr-4 rounded-3xl">
              <div className="text-5xl md:text-8xl font-bold relative mt-2 mr-2">{slide.number+"."}</div>
              <div className="flex-1">
                <h1 className="text-lg">{slide.paragraph}</h1>
              </div>
            </div>
          </div>)
        })}
      </div>
        <div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center justify-between w-full max-w-[90%] px-4 z-20">
          <div className={currentIndex === 0 ? "invisible" : "" }>
            <ArrowButton direction="left" onClick={nextSlide} ariaLabel="Next slide"/>
          </div>
          <div className={currentIndex === slideData.length -1 ? "invisible" : "" }>
            <ArrowButton direction="right" onClick={prevSlide} arialLabel="Previous slide"/>
          </div>
        </div>
    </div>);

};

export default ResponseCarousel;



