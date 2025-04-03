'use client';

import React from 'react';

const ButTypography = ({ text = '', className = '' }) => {
  return (
    <div
      className={`flex flex-row items-baseline justify-start bg-transparent text-[3.75rem] text-[#65E1F1] ${className} h-20 w-full max-w-lg md:h-24 md:max-w-xl lg:h-[28rem] lg:max-w-4xl`}
      aria-labelledby="but-text"
    >
      <span className="mr-4 block font-bold">BUT</span>
      {text && <p className="top-1 text-lg text-[18px] text-white">{text}</p>}
    </div>
  );
};

export default ButTypography;
