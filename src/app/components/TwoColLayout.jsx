"use client"

import React from "react";

const TwoColLayout=({
    children,
    leftColumn,
    rightColumn,
    containerClass = "w-full md:w-[1150px] min-h-screen p-6 md:p-12 flex flex-col md:flex-row flex-wrap",
}) => {
    return (
        <div className={` ${containerClass} bg-[#1C0080] mx-auto`}>
            <div className="w-full md:w-1/2 h-full text-white flex flex-col items-center justify-center md:order-1 3xl:order-2 flex-grow">
            {/* left Column */}
            {children[0]}
            </div>
            <div className="w-full md:w-1/2 h-full text-white flex flex-col items-center justify-center md:oder-2 3xl:order-1 flex-grow">
            {/* right column */}
            {children[1]}
            </div>
        </div>
    )

}

export default TwoColLayout;


