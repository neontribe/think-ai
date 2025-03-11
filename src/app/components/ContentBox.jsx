'use client';

import { useEffect } from "react";

const ContentBox = ({
    children, 
    width,
    height,
}) => {
    return (
        <div className="">
            {children}
        </div>

    )
}

export default ContentBox;