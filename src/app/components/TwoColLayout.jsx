"use client"

import React from "react";
import ContentBox from '@/app/components/ContentBox';

const TwoColLayout=({
    leftColumn,
    rightColumn,
    containerClass = "w-full md:w-[1150px] h-auto md:min-h-[466px]",
}) => {
    return (
        <div className={` ${containerClass} bg-[#1C0080] flex p-2 mx-auto md:flex-row`}>
            <div className="text-white flex flex-col items-center justify-center md:order-1 3xl:order-2">
            {leftColumn}
            </div>
            <div className="w-full md:w-1/2 h-full text-white flex flex-col items-center justify-center md:oder-2 3xl:order-1">
            {rightColumn}
            <ContentBox>
            </ContentBox>
            </div>
        </div>
    )

}

export default TwoColLayout;




