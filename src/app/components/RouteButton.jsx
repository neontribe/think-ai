'use client'

import React from 'react';
import Link from "next/link";

const RouteButton = ({ href, children, className = "", ariaLabel, onClick, ...props }) => {
    return (
        <Link 
        href={href}
        className={`route-button ${className}`}
        aria-label={ariaLabel} 
        onClick={onClick}
        {...props}
        >
            {children}   
        </Link>
    );
};

export default RouteButton;


