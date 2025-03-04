import React from 'react'

const  OffsiteLinkButtons = ({href, children, onClick, className}) => {
    return (
        <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        onClick={onClick}
        className={`px-4 py2 bg-green-500 text-white roundend-lg ${className}`}
        >
            {children}
        </a>
    );
};

export default OffsiteLinkButtons;

