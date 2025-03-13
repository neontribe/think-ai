import React from 'react';
import Link from "next/link";

const RouteButton = ({ href, children, className = '', ariaLabel, ...props }) => {
    return (
        <Link href={href} passHref aria-label={ariaLabel} {...props}>
            {/* Remove the 'a' tag here; Link automatically renders the anchor tag */}
            <span className={`route-button ${className}`}>
                {children}
            </span>
        </Link>
    );
};

export default RouteButton;


