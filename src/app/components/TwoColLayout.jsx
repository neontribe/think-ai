"use client"

import React from "react";

const TwoColLayout=({
    children,
    leftColumn,
    rightColumn,
    containerClass = "w-full md:w-[1150px] h-auto md:h-[466px]",
}) => {
    return (
        <div className={` ${containerClass} bg-[#1C0080] flex mx-auto md:flex-row`}>
            <div className="w-full md:w-1/2 h-full text-white flex flex-col items-center justify-center md:order-1 3xl:order-2">
            {leftColumn || children}
            </div>
            <div className="w-full md:w-1/2 h-full text-white flex flex-col items-center justify-center md:oder-2 3xl:order-1">
            {rightColumn || children}
            </div>
        </div>
    )

}

export default TwoColLayout;


