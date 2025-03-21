'use client';

import React from 'react';

const ButTypography = ({ text = '' , className = '' }) => {
  return (
    <div
    className={`flex flex-row justify-start items-baseline bg-transparent text-[#65E1F1] text-[3.75rem] ${className} 
    w-full max-w-lg md:max-w-xl lg:max-w-4xl h-20 md:h-24 lg:h-[28rem]`}
      aria-labelledby='but-text'
    >
      <span className='block mr-4 font-bold'>BUT</span>
      {text && <p className='text-lg text-white text-[18px] top-1'>{text}</p>}
    </div>
  );
};

export default ButTypography;
  
