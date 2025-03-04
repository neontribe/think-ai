import React from 'react'

const  OffsiteLinkButton = ({href, children, onClick, className = ""}) => {
    return (
        <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        onClick={onClick}
        className={`inline-flex items-center justify-center px-6 py-3 text-lg font-bold rounded-full transition durantion-300 bg-[#63E2F1] text-[#1B0080] hover:bg-[#9747FF] hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring[#1B0080] ${className}`}
        >
            {children}
        </a>
    );
};

export default OffsiteLinkButton;

