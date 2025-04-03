'use client';

import React from 'react';
import CustomImage from './CustomImage';
import OffsiteLinkButton from './OffsiteLinkButton';

const LearnBox = ({ src, alt, buttonText, caption, link }) => {
  return (
    <div className="relative mt-8 flex flex-col items-center justify-between rounded-2xl bg-[#291498]">
      {/* Image component positions at the top with slight overflow */}
      <div className="relative -top-6">
        <CustomImage
          src={src}
          alt={alt}
          caption={caption}
          link={link}
          width={191}
          height={165}
          borderRadius="20px"
          tabIndex="0"
        />
      </div>

      {/* Button component aligns to left */}
      <div className="mb-4 ml-4 w-[16rem] self-start pl-6 md:w-[16.8rem]">
        <OffsiteLinkButton
          text={buttonText}
          href={link}
          variant="learnMore"
          arial-label={`Open ${caption} (${buttonText})`}
        >
          {buttonText}
        </OffsiteLinkButton>
      </div>
    </div>
  );
};

export default LearnBox;
