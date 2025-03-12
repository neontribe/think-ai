'use client';

import React from "react";
import Link from 'next/link';

const Header = ({hidelinks = false, ...props}) => {
    
    return (
        <header {...props} className="w-full bg-[#1C0080] text-white py-4 px-6 flex justify-between items-center">
            <Link href="/">
            <h1 className="text-3xl font-semibold cursor-pointer">Real Talk <spam className="text-[#87E2D9]">AI</spam></h1>
            </Link>
            
            {/* Link and button block - can be hidden via prop */}
            {!hidelinks && (
                <div className="flex gap-8 items-center px-4 py-2">
                    <Link href="/our-team" className="text-lg underline">our team</Link>
                    <Link href="/group-leaders"> 
                    <button className="px-4 py-2 text-lg text-white bg-[#1C0080] border-2 border-[#65E1F1] rounded-full cursor-pointer">for group leaders</button>
                    </Link>
                </div>

            )}
            
        </header>
    )
}

export default Header;