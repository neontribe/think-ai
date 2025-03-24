"use client";

import React, { useState } from "react";

const ExpandAccordion = ({
  text = "",
  children,
  className = "",
  ...props
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };


  const headerClasses = `flex items-center justify-between w-full py-3 px-4 text-left text-white bg-[#291498] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#9747FF]`;

  const icon = isOpen ? "−" : "+";

  return (
    <div className={`bg-[#291498] overflow-hidden transition-all ${className}`} {...props}>
      <button
        type="button"
        onClick={handleToggle}
        aria-expanded={isOpen}
        className={headerClasses}
      >
        <span>{text}</span>
        <span className="ml-2 text-4xl leading-none">{icon}</span>
      </button>

      {isOpen && (
        <div className="mt-2 bg-[#291498] p-4">
          {children}
        </div>
      )}
      <div className="border-b-2 border-[#65E1F1] mx-4" />
    </div>
  );
};

export default ExpandAccordion;


