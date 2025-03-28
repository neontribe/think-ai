'use client'

import React from 'react'
import CustomImage from './CustomImage'
import OffsiteLinkButton from './OffsiteLinkButton'

const LearnBox = ({ src, alt, buttonText, buttonLink, caption, link}) => {
    return (
        <div className='relative flex flex-col items-center bg-[#291498] rounded-2xl mt-8'>
            {/* Image componenet positions at the top with slight overflow */}
            <div className='relative -top-6'>
                    <CustomImage 
                    src={src}
                    alt={alt}
                    caption={caption}
                    link={link}
                    width={191}
                    height={165}
                    borderRadius='20px'
                    tabIndex='0'
                   />    
            </div>

            {/* Button componenet alignes to left */}
            <div className='mb-4 pl-6 self-start w-[16rem] md:w-[16.8rem] ml-4'>
                <OffsiteLinkButton text={buttonText} href={link}  variant='learnMore'
                arial-label={`Open ${caption} (${buttonText})`}>
                    {buttonText}
                </OffsiteLinkButton>
            </div>
        </div>
        
    )
}

export default LearnBox;