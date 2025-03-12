'use client';

import React from "react";
import Link from 'next/link';

const Header = () => {
    return (
        <header className="w-full bg-[#1C0080] text-white py-4 px-6 flex justify-between items-center">
            <div>
                <Link href="/">
                <h1 className="text-3xl font-semibold cursor-pointer">Real Talk <spam className="text-[#87E2D9]">AI</spam></h1>
                </Link>

                <div>
                    {/* button block goes here */}

                </div>
            </div>
        </header>
    )
}

export default Header;