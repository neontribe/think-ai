'use client'
import React from 'react';
import Image from 'next/image';

const CustomImage = ({
  src,
  alt,
  width,
  height,
  fill = false,
  caption = '',
  link = '',
  sizes = '',
  borderRadius = '0',
  style = {},
  className = '',
  overlayText = '',
}) => {

  return (
    <figure style={{ textAlign: 'center', margin: '0', position: 'relative' }}>
      {/* if link not provided, the image should no be wrapped in a <a> tag */}
      { link ? (
         <a
         href={link || '#'} 
         target='_blank'
         rel='noopener noreferrer'
         aria-label={alt} 
       >
         <Image
           src={src}
           alt={alt}
           width={!fill ? width : undefined}
           height={!fill ? width : undefined}
           fill={fill}
           sizes={sizes}
           style= { {borderRadius, objectFit: 'cover', ...style }}
           className={className}
         /> 
       </a>
      ) : (
        <Image
        src={src}
        alt={alt}
        width={!fill ? width : undefined}
        height={!fill ? width : undefined}
        fill={fill}
        sizes={sizes}
        style= { {borderRadius, objectFit: 'cover', ...style }}
        className={className}
      /> 
      )}
     
      {caption && (
        <figcaption className="text-sm text-white font-bold mt-2">{caption}</figcaption>
      )}

      {overlayText && (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-lg font-bold">
          {overlayText}
        </div>
      )}

      
    </figure>
  );
};

export default CustomImage;





