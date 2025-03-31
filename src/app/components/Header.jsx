'use client';

import Link from 'next/link';

const Header = ({ hideLinks = false }) => {
    return (
        <header role="banner" className="w-full bg-[#1C0080] text-white py-4 px-6 flex justify-between items-center">
            <Link href="/"
            className="focus:outline-none focus:ring-2 focus:ring-[#65E1F1]">
                <h1 className="text-[28pt] font-semibold cursor-pointer leading-tight" id="site-title">
                    Real Talk
                    <br className="md:hidden" />
                    <span className="text-[#87E2D9] md:ml-2">AI</span>
                </h1>
            </Link>

            {/* Conditional rendering based on hideLinks prop */}
            {!hideLinks && (
                <nav className="flex md:flex-row flex-col gap-2 md:gap-8 items-end" aria-label="Main navigation">
                    <Link
                      href="/our-team"
                      className="px-4 py-2 text-[16pt] hover:text-[#87E2D9] underline mb-2 md:mb-0 focus-visible:ring-2 rounded-md"
                      aria-label="View our team">our team
                    </Link>
                    <Link href="/group-leaders"
                          className="px-4 py-2 text-[16pt] border-2 border-[#65E1F1] rounded-full cursor-pointer hover:text-[#87E2D9] w-full md:w-auto focus:outline-none focus:ring-2"
                          aria-label="resources for group leaders">for group leaders
                    </Link>
                </nav>
            )}
        </header>
    );
};

export default Header;
