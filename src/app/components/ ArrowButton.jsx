import React from 'react';
import ArrowIcon from "../assets/arrow-btn.svg";

const ArrowButton = ({ href = "", direction = "right", children, onClick, className = "", ariaLabel }) => {
    const rotationMap = {
        up: "-rotate-0",
        left: 'rotate-90',
        right: 'rotate-180',
    };

    console.log("ArrowButton direction:", direction, rotationMap[direction]);

    return (
        <a href={href}>
            <button
            onClick={onClick}
            target="_blank"
            rel="noopener noreferrer"
            className={`w-12 h-12 flex items-center justify-center rounded-full bg-[#3F4ADF] transition-transform hover:scale-110 focus:ring-2 focus:ring-white ${className} arial-label={Arrow pointing ${direction}`}
            aria-label={ariaLabel || children}
            aria-describedby=''
            tabIndex="0"
            >
                
             <ArrowIcon className={'w-8 h-8 ${rotationMap[direction] || ""}'}/>
            </button>
        
            {children}
        </a>
    );
}

export default ArrowButton;