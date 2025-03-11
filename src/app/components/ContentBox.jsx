'use client';

import { useEffect } from "react";

const ContentBox = ({
    children, 
    width = "w-[530px]",
    height = "h-[466px]",
}) => {
    return (
        <div className={`${width} ${height} bg-[#291498] text-white p-6 rounded-3xl shadow-lg`}>
            {children}
        </div>

    )
}

export default ContentBox;

