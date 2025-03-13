'use client';

import Link from 'next/link';
import React, { useEffect } from "react";

const Header = ({ hidelinks = false }) => {
    useEffect(() => {
        console.log("hidelinks prop value:", hidelinks);
    }, [hidelinks]); 

    return (
        <header role="banner" className="w-full bg-[#1C0080] text-white py-4 px-6 flex justify-between items-center">
            <Link href="/" className="focus:outline-none focus:ring-2 focus:ring-[#65E1F1]">
                <h1 className="text-3xl font-semibold cursor-pointer" id="site-title">
                    <span className="block md:inline">Real Talk</span> 
                    <span className="text-[#87E2D9] md:ml-2">AI</span>
                </h1>
            </Link>
            
            {/* Conditional rendering based on hidelinks prop */}
            {!hidelinks && (
                <nav className="flex md:flex-row flex-col gap-2 md:gap-8 items-end" aria-label="Main navigation">
                    <Link href="/our-team" className="text-lg underline mb-2 md:mb-0 focus:outline-none focus:ring-[#65E1F1] rounded-md" aria-label="View our team">our team</Link>  
                    <Link href="/group-leaders" className="w-full md:w-auto focus:outline-none focus:ring-2 focus:ring-[#65E1F1]" aria-label="resources for group leaders"> 
                        <button className="px-4 py-2 text-lg text-white bg-[#1C0080] border-2 border-[#65E1F1] rounded-full cursor-pointer" type="button">for group leaders</button>
                    </Link>    
                </nav>
            )}
        </header>
    );
};

export default Header;
