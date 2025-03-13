import React from 'react';
import Link from "next/link";

const RouteButton = ({ href, children, className = '', ariaLabel, ...props }) => {
    return (
        <Link href={href} passHref aria-label={ariaLabel} {...props}>
            <span className={`route-button ${className}`}>
                {children}
            </span>
        </Link>
    );
};

export default RouteButton;


