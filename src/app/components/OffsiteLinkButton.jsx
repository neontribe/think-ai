import React from 'react'

const  OffsiteLinkButton = ({href, children, onClick, className}) => {
    return (
        <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        onClick={onClick}
        className={`inline-block rounded-full bg-blue-600 px-6 py-2 text-white font-semibold hover:bg-blue-400 focus:outline-none ${className}`}
        >
            {children}
        </a>
    );
};

export default OffsiteLinkButton;

