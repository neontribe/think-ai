'use client';

import React, { useState } from 'react';
import ArrowButton from './ArrowButton';

const ResponseCarousel = ({ slideData = [] }) => {
  const [localSlides] = useState(slideData);
  const [currentIndex, setCurrentIndex] = useState(0);

  const updateSlide = (newIndex) => {
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    let newIndex = currentIndex - 1;
    if (newIndex < 0) {
      newIndex = localSlides.length - 1;
    }
    return updateSlide(newIndex);
  };

  const prevSlide = () => {
    let newIndex = currentIndex + 1;
    if (newIndex === localSlides.length) {
      newIndex = 0;
    }
    return updateSlide(newIndex);
  };

  return (
    <div className="relative mx-auto max-w-4xl overflow-hidden rounded-3xl bg-[#291498] shadow-lg md:w-full">
      {/* slider container */}
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%` }}
      >
        {localSlides.map((slide, index) => {
          return (
            <div key={'key_' + index} className="w-full shrink-0 p-4 text-white">
              {/* slide content */}
              <div className="-mt-2 mr-4 flex self-start rounded-3xl p-12">
                <div className="relative mt-2 mr-2 text-5xl font-bold md:text-8xl">
                  {slide.number + '.'}
                </div>
                <div className="flex-1">
                  <h1 className="text-lg">{slide.paragraph}</h1>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="absolute bottom-8 left-1/2 z-20 flex w-full max-w-[90%] -translate-x-1/2 transform items-center justify-between px-4">
        <div className={currentIndex === 0 ? 'invisible' : ''}>
          <ArrowButton direction="left" onClick={nextSlide} ariaLabel="Next slide" />
        </div>
        <div className={currentIndex === slideData.length - 1 ? 'invisible' : ''}>
          <ArrowButton direction="right" onClick={prevSlide} arialLabel="Previous slide" />
        </div>
      </div>
    </div>
  );
};

export default ResponseCarousel;
