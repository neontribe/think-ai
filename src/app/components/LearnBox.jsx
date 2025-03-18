'use client'

import React from 'react'
import CustomImage from './CustomImage'
import OffsiteLinkButton from './OffsiteLinkButton'

const LearnBox = ({ src, alt, buttonText, buttonLink}) => {
    return (
        <div>
            {/* Image componenet positions at the top with slight overflow */}
            <div>
                <CustomImage src={src} alt={alt} />
            </div>

            {/* Button componenet alignes to left */}
            <div>
                <OffsiteLinkButton />
            </div>
        </div>
        
    )
}

export default LearnBox;