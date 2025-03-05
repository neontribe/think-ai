'use client'

import React from 'react';
import { useState } from "react";

const ToggleButton = ({}) => {
    const [isChecked, setIsChecked] = useState(false);

    const handleToggle = () => {
        setIsChecked(!isChecked);
    }

    const handleKeyDown = (e) => {
        if(e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            handleToggle();
        }
    };

    return (
    
        
         <label className="flex items-center cursor-pointer">
            <input
            type="checkbox"
            className="hidden"
            checked={isChecked}
            onChange={handleToggle}
            onKeyDown={handleKeyDown}
            role="switch"
            aria-checked={isChecked}
            />
            <div className={`w-12 h-6 rounded-full border-2 border-[#66E1F1] p-1 transition-all duration-300 ${isChecked ? "bg-[#1B0080]" : "bg-transparent"}`}>
                <div className={`w-4 h-4 bg-[#66E1F1] rounded-full transition-all duration-300 ${isChecked ? "translate-x-6" : "translate-x-0"}`}></div>
            </div>

         </label>
    );

};

export default ToggleButton;