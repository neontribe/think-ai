'use client';

import { useEffect } from 'react';

const ContentBox = ({
  children,
  width = 'w-full md:w-[530px]',
  height = '',
  bg = 'bg-[#291498]',
}) => {
  return (
    <div className={`w-full ${width} ${height} ${bg} rounded-3xl p-6 text-white shadow-lg`}>
      {children}
    </div>
  );
};

export default ContentBox;
