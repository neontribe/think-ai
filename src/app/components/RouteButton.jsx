"use client"

import React from "react";
import Link from "next/link";

const RouteButton = ({ href, children, className = "", ariaLabel, onClick, variant ="primary", type= "button", ...props }) => {
    const routeStyle = {
        primary: "bg-[#63E2F1] text-[#1B0080] px-6 py-3 w-[171px] h-[48px] text-lg inline-flex items-center justify-center font-bold rounded-full transition durantion-300 hover:bg-[#9747FF] hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#9747FF]",
        secondary: "w-full md:w-auto px-4 py-2 text-lg text-white bg-[#1C0080] border-2 border-[#65E1F1] rounded-full cursor-pointer hover:bg-[#3E1C96] focus:ring-2 focus:ring-[#65E1F1]",
    }

    if (href) {
        return (
            <Link 
        href={href}
        className={`route-button ${routeStyle[variant]} ${className}`}
        aria-label={ariaLabel || children}
        aria-describedby='route-link-description'
        tabIndex= "0" 
        onClick={onClick}
        {...props}
        >
            {children}   
        </Link>
    );
    }

    return (
        <button 
        type={type || "button"}
        className={`route-button ${routeStyle[variant]} ${className}`}
        aria-label={ariaLabel || children}
        aria-describedby='submit-prompt-description'
        tabIndex= "0" 
        onClick={onClick}
        {...props}
        >
            {children}   
        </button>
    );
};

export default RouteButton;


