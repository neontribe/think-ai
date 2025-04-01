"use client";

import React, { useState, useId } from "react";

const ExpandAccordion = ({
  text = "",
  children,
  className = "",
  ...props
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const accordionId= useId();

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };


  const headerClasses = `flex items-center justify-between w-full py-3 px-4 text-left text-white bg-[#291498] 
  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#65E1F1] rounded-full focus-visible:ring-offset-2`;

  const icon = isOpen ? "−" : "+";

  return (
    <div className={`bg-[#291498] overflow-visible transition-all rounded-md ${className}`} {...props}>
      <button
        type="button"
        onClick={handleToggle}
        aria-expanded={isOpen}
        className={headerClasses}
        id={accordionId}
      >
        <span>{text}</span>
        <span className="ml-2 text-4xl leading-none text-[#65E1F1]">{icon}</span>
      </button>

      {isOpen && (
        <div aria-labelledby={accordionId} className="bg-[#291498] p-4">
          {children}
        </div>
      )}
      <div className=" underline border-b-2 border-[#65E1F1] mx-4" />
    </div>
  );
};

export default ExpandAccordion;


