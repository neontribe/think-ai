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
      className="relative w-full max-w-4xl md:h-80 lg:h-[28rem] bg-[#291498] rounded-3xl shadow-lg overflow-hidden mx-auto">
      {/* slider container */}
      <div className="flex flex-col items-start space-y-4 transition-transform duration-500 ease-in-out"
      >
        {localSlides.map((slide, index) => {
          return (<div
            key={'key_'+index}
            className="absolute inset-0 flex items-center justify-center text-white transition-transform duration-700 ease-in-out"
            style={{transform: `translateX(${(index - currentIndex) * 100}%)`}}
          >

            {/* slide content */}
            <div className="flex items-start self-start -mt-2 p-14 mr-4 rounded-3xl max-w-[90%]">
              <div className="text-8xl font-bold relative mt-4 mr-4">{slide.number}.</div>
              <div className="flex-1">
                <h1 className="text-lg">{slide.paragraph}</h1>
              </div>
            </div>
          </div>)
        })}

        <div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center justify-between w-full max-w-[90%] px-4 z-20">
          <div className={currentIndex === 0 ? "invisible" : ""}>
            <ArrowButton direction="left" onClick={nextSlide} ariaLabel="Next slide"/>
          </div>
          <div className={currentIndex !== 0 ? "invisible" : ""}>
            <ArrowButton direction="right" onClick={prevSlide} arialLabel="Previous slide"
                         className={currentIndex === slideData.length - 1 ? "hidden" : ""}/>
          </div>
        </div>
      </div>
    </div>);

};

export default ResponseCarousel;



