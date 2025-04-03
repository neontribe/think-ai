import React from 'react';

const OffsiteLinkButton = ({
  href,
  variant = 'learnMore',
  children,
  className = '',
  ariaLabel,
}) => {
  const buttonStyles = {
    default: 'bg-[#63E2F1] text-[#1B0080] px-6 py-3 w-[171px] h-[48px] text-lg',
    findOut: 'bg-[#63E2F1] text-[#1C1806] px-6 py-3 w-[179px] h-[80px] text-lg',
    learnMore: 'bg-[#63E2F1] text-[#1B0080] px-4 py-2 w-[65px] h-[24px] text-xs',
  };
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`durantion-300 inline-flex items-center justify-center rounded-full font-bold transition hover:bg-[#9747FF] hover:text-white focus:ring-2 focus:ring-[#9747FF] focus:ring-offset-2 focus:outline-none ${buttonStyles[variant]} ${className}`}
      aria-label={ariaLabel || children}
      aria-describedby="offsite-link-description"
      tabIndex="0"
    >
      {children}
    </a>
  );
};

export default OffsiteLinkButton;
