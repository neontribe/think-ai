'use client';

import Link from 'next/link';
import React, { useEffect } from "react";
import RouteButton from './RouteButton';

const Header = ({ hidelinks = false }) => {
    useEffect(() => {
        console.log("hidelinks prop value:", hidelinks);
    }, [hidelinks]); 

    return (
        <header role="banner" className="w-full bg-[#1C0080] text-white py-4 px-6 flex justify-between items-center">
            <Link href="/" aria-lable="Return to ohmepa" className="focus:outline-none focus:ring-2 focus:ring-[#65E1F1]">
                <h1 className="text-3xl font-semibold cursor-pointer" id="site-title">
                    <span className="block md:inline">Real Talk</span> 
                    <span className="text-[#87E2D9] md:ml-2">AI</span>
                </h1>
            </Link>
            
            {/* Conditional rendering based on hidelinks prop */}
            {!hidelinks && (
                <nav className="flex md:flex-row flex-col gap-2 md:gap-8 items-end" aria-label="Main navigation">
                    <Link href="/our-team" className="text-lg underline mb-2 md:mb-0 hover:bg-[#3E1C96] focus:ring-2 focus:ring-[#65E1F1] rounded-md" aria-label="View our team">our team</Link>  
                    <RouteButton 
                        href="/group-leaders" 
                        variant="secondary"
                        ariaLabel="Resources for group leaders"
                    >
                        For Group Leaders
                    </RouteButton>  
                </nav>
            )}
        </header>
    );
};

export default Header;