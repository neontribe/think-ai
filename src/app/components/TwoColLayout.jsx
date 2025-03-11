"use client"

import React, { useState } from "react";

const TwoColLayout=() => {
    return (
        <div className=" container mx-auto w-[1150px] h-[466px] bg-gray-700 flex flex-col md:flex-row">
            <div className="w-full md:w-1/2 h-full bg-blue-500 text-white flex flex-col items-center justify-center md:order-1 3xl:order-2">
            <h1>Column 1</h1>
            </div>
            <div className="w-full md:w-1/2 h-full bg-green-700 text-white flex flex-col items-center justify-center md:oder-2 3xl:order-1">
            <h1>Column 2</h1>
            </div>
        </div>
    )

}

export default TwoColLayout;




