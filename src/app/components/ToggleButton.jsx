'use client'

import React from 'react';
import { useState } from "react";

const ToggleButton = () => {
    const [isChecked, setIsChecked] = useState(false);

    return (
         <label className="">
            <input
            type="checkbox"
            className="hidden"
            checked={isChecked}
            onChange={() => setIsChecked(!isChecked)}
            />
            <div className={`w-12 h-6 rounded-full border-2 border-[#66E1F1] p-1 transition-all duration-300 ${isChecked ? "bg-[#1B0080]" : "bg-transparent"}`}>
                <div className={`w-4 h-4 bg-[#66E1F1] rounded-full transition-all duration-300 ${isChecked ? "translate-x-6" : "translate-x-0"}`}></div>
            </div>

         </label>
    );

};

export default ToggleButton;