import React from 'react';

const ArrowButton = ({
  href = '',
  direction = '',
  children,
  onClick,
  className = '',
  ariaLabel,
}) => {
  const rotationMap = {
    up: 'rotate-0',
    down: 'rotate-180',
    left: 'rotate-270',
    right: 'rotate-90',
  };

  return (
    <button
      onClick={onClick}
      target="_blank"
      rel="noopener noreferrer"
      className={`flex h-12 w-12 items-center justify-center rounded-full bg-[#3F4ADF] transition-transform hover:scale-110 focus:ring-2 focus:ring-white ${className} arial-label=Arrow pointing ${direction}`}
      aria-label={ariaLabel || children}
      aria-describedby=""
      tabIndex="0"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="29"
        height="30"
        viewBox="0 0 29 30"
        fill="none"
        className={`h-8 w-8 ${rotationMap[direction]}`}
      >
        <circle cx="14.5" cy="15" r="14.5" transform="rotate(-90 14.5 15)" fill="#3F4ADF" />
        <path
          d="M15.8975 6.69763C15.507 6.30711 14.8738 6.30711 14.4833 6.69763L8.11936 13.0616C7.72884 13.4521 7.72884 14.0853 8.11936 14.4758C8.50989 14.8663 9.14305 14.8663 9.53358 14.4758L15.1904 8.81895L20.8473 14.4758C21.2378 14.8663 21.871 14.8663 22.2615 14.4758C22.652 14.0853 22.652 13.4521 22.2615 13.0616L15.8975 6.69763ZM16.1904 22.5952L16.1904 7.40474L14.1904 7.40474L14.1904 22.5952L16.1904 22.5952Z"
          fill="white"
        />
      </svg>
      {children}
    </button>
  );
};

export default ArrowButton;
