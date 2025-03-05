'use client'

import React from 'react';
import { useState } from "react";

const ToggleButton = ({
    initialState = false,
    onChange,
    ariaLabel = "Toggle switch",
    labelLeft= "Individual",
    labelRight= "Group",
}) => {
    const [isChecked, setIsChecked] = useState(initialState);

    const handleToggle = () => {
        setIsChecked((prev) => !prev);
    if(onChange) onChange (!isChecked);
    }

    const handleKeyDown = (e) => {
        if(e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            handleToggle();
        }
    };

    

    return (
        <div className="flex items-center space-x-4"> 
              {/* Left Label */}
            <span id="toggle-left-label" className={`text-blue text-lg font-medium mr-1`}>
             {labelLeft}
            </span>
    
        
         <label className={`relative inline-flex items-center cursor-pointer`}
         htmlFor='toggle-checkbox'> 
         </label>
         <input
            type="checkbox"
            className="sr-only"
            checked={isChecked}
            onChange={handleToggle}
            aria-labelledby="toggle-left-label  toggle-right-label"
            aria-label="Toggle switch"
            role="switch"
            aria-checked={isChecked}
            onKeyDown={handleKeyDown}
            />

            <div onClick={handleToggle}>

            <div className={`w-12 h-6 bg-[##1B0080] rounded-full border-2 border-[#66E1F1] p-1 py-[2px] transition-all duration-300 ${isChecked ? "bg-[#1B0080]" : "bg-[#1B0080]"}`}>
                <div className={`w-4 h-4 bg-[#66E1F1] bg-[#1B0080] rounded-full transition-all duration-300 ${isChecked ? "translate-x-6" : "translate-x-0"}`}></div>
            </div>
            </div>
         {/* Right Label */}
         <span id= "toggle-right-label" className={`text-blue text-lg font-medium ml-1`}>
                It's just me
            </span>

        </div>
    );

};

export default ToggleButton;