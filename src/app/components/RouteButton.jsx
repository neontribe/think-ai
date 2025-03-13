import React from 'react';
import Link from "next/link";

const RouteButton = ({ href, children, className = '', ariaLabel, ...props }) => {
    return (
        <Link href={href} passHref>
            <a className={`route-button ${className}`} aria-label={ariaLabel} {...props}>
                {children}
            </a>
        </Link>
    );
};

export default RouteButton;

