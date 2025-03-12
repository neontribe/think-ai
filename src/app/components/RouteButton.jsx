import React from 'react';
import Link from "next/link";


const  RouteButton = ({ href, children, className, ariaLabel, ...props}) => {

    return (
        <Link href={href} passHref legacyBehaviour>
            <a className={`route-button ${className}`} {...props}>
                {children}
            </a>
        </Link>
        
    );
};

export default RouteButton;
