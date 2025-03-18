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
  sizes = `(max-width: 37.5rem) 100w, (max-width: 56.25rem) 40rem, 50rem`,
  borderRadius = '0',
  style = {},
  className = '',
  overlayText = '',
}) => {

  return (
    <figure className='relative mx-auto text-center w-full max-w-[75rem]'>
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
           tabIndex='0'
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
        tabIndex='0'
      /> 
      )}
     
      {caption && (
        <figcaption className="text-white font-bold mt-2 text-[16px] text-center max-w-[200px] break-words leading-[1.4]">
          {link ? (
            <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: 'none', color: 'inherit' }}
            tabIndex='0'
            >
              {caption}
              </a>
              ) : (
                caption)}
          </figcaption>
        )}

      {overlayText && (
        <div className="absolute insert-0 flex items-center justify-center text-white bg-black bg-opacity-30 text-base md:text-lg lg:text-xl font-bold">
          {overlayText}
        </div>
      )}

      
    </figure>
  );
};

export default CustomImage;




