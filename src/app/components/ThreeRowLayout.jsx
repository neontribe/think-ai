'use client';

import React from 'react';

const ThreeRowLayout = ({
  top,
  middle,
  bottom,
  containerClass = 'w-full flex flex-col gap-12',
  topClass = 'bg-transparent py-12',
  middleClass = 'bg-[#291498] py-16 min-h-[60vh]',
  bottomClass = 'bg-transparent py-12',
  innerClass = 'max-w-screen-xl mx-auto px-6',
}) => {
  return (
    <div className={containerClass}>
      <div className={`w-full ${topClass}`}>
        <div className={innerClass}>{top}</div>
      </div>

      <div className={`w-full ${middleClass}`}>
        <div className={innerClass}>{middle}</div>
      </div>

      <div className={`w-full ${bottomClass}`}>
        <div className={innerClass}>{bottom}</div>
      </div>
    </div>
  );
};

export default ThreeRowLayout;
