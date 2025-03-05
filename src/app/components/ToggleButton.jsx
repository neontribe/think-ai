'use client'

import React from 'react';
import { useState } from "react";

const ToggleButton = ({initialState = false,
    onChange, disable= false,
    ariaLabel = "Toggle switch",
    labelLeft= "Individual",
    labelRight= "Group",
    disabled= false
}) => {
    const [isChecked, setIsChecked] = useState(initialState);

    const handleToggle = () => {
        setIsChecked(!isChecked)
    }

    // const handleKeyDown = (e) => {
    //     if(e.key === 'Enter' || e.key === ' ') {
    //         e.preventDefault();
    //         handleToggle();
    //     }
    // };

    return (
        <div className="flex items-center space-x-4"> 
              {/* Left Label */}
            <span className={`text-blue text-lg font-medium ${isChecked ? "text-gray-400" : "text-blue"}`}>
             Use in a group
            </span>
    
        
         <label className={`relative inline-flex items-center cursor-pointer`}> 
            <input
            type="checkbox"
            className="hidden"
            checked={isChecked}
            onChange={handleToggle}
            role="switch"
            aria-checked={isChecked}
            aria-disabled={disable}
            />
            <div className={`w-12 h-6 rounded-full border-2 border-[#66E1F1] p-1 transition-all duration-300 ${isChecked ? "bg-[#1B0080]" : "bg-transparent"}`}>
                <div className={`w-4 h-4 bg-[#66E1F1] rounded-full transition-all duration-300 ${isChecked ? "translate-x-6" : "translate-x-0"}`}></div>
            </div>

         </label>
         {/* Right Label */}
         <span className={`text-blue text-lg font-medium ${isChecked ? "text-gray-400" : "text-blue"}`}>
                It's just me
            </span>

        </div>
    );

};

export default ToggleButton;