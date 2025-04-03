'use client';

import React, { useState } from 'react';

const ToggleButton = ({
  initialState = false,
  ariaLabel = 'Toggle switch',
  labelLeft = 'Individual',
  labelRight = 'Group',
}) => {
  const [isChecked, setIsChecked] = useState(initialState);

  const handleToggle = () => {
    setIsChecked(!isChecked);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleToggle();
    }
  };

  return (
    <div className="flex items-center space-x-4">
      {/* Left Label */}
      <span id="toggle-left-label" className={`text-blue mr-1 text-lg font-medium`}>
        {labelLeft}
      </span>

      <label
        className={`relative inline-flex cursor-pointer items-center`}
        htmlFor="toggle-checkbox"
      ></label>
      <input
        type="checkbox"
        className="sr-only"
        checked={isChecked}
        onChange={handleToggle}
        aria-labelledby="toggle-left-label  toggle-right-label"
        aria-label={ariaLabel}
        role="switch"
        aria-checked={isChecked}
        onKeyDown={handleKeyDown}
        tabIndex={0}
        onClick={handleToggle}
      />

      <div onClick={handleToggle}>
        <div
          className={`bg-[#1B0080]"} h-6 w-12 rounded-full border-2 border-[#66E1F1] bg-[##1B0080] p-1 py-[2px] transition-all duration-300`}
        >
          <div
            className={`h-4 w-4 rounded-full bg-[#66E1F1] transition-all duration-300 ${isChecked ? 'translate-x-6' : 'translate-x-0'}`}
          ></div>
        </div>
      </div>
      {/* Right Label */}
      <span id="toggle-right-label" className={`text-blue ml-1 text-lg font-medium`}>
        {labelRight}
      </span>
    </div>
  );
};

export default ToggleButton;
