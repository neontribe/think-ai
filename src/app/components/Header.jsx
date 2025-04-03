'use client';

import Link from 'next/link';

const Header = ({ hideLinks = false }) => {
  return (
    <header
      role="banner"
      className="flex w-full items-center justify-between bg-[#1C0080] px-6 py-4 text-white"
    >
      <div className="flex-shrink-0">
        <Link
          href="/"
          className="inline-block rounded focus:ring-[#65E1F1] focus:outline-none focus-visible:ring-2"
        >
          <h1 className="cursor-pointer text-[28pt] leading-tight font-semibold" id="site-title">
            <span className="block md:inline">Real Chat</span>
            <span className="text-[#87E2D9] md:ml-2">AI</span>
          </h1>
        </Link>
      </div>

      {/* Conditional rendering based on hideLinks prop */}
      {!hideLinks && (
        <nav
          className="flex flex-col items-end gap-2 md:flex-row md:gap-8"
          aria-label="Main navigation"
        >
          <Link
            href="/our-team"
            className="mb-2 rounded-md px-4 py-2 text-[16pt] underline hover:text-[#87E2D9] focus-visible:ring-2 md:mb-0"
            aria-label="View our team"
          >
            our team
          </Link>
          <Link
            href="/group-leaders"
            className="w-full cursor-pointer rounded-full border-2 border-[#65E1F1] px-4 py-2 text-center text-[16pt] hover:text-[#87E2D9] focus:ring-2 focus:outline-none md:w-auto"
            aria-label="resources for group leaders"
          >
            for group leaders
          </Link>
        </nav>
      )}
    </header>
  );
};

export default Header;
