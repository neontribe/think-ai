'use client';

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
  isStar = false,
  starSize = 'large',
}) => {
  const sizeStar = {
    small: { width: 86, height: 94 },
    large: { width: 177, height: 193 },
  };

  // Set width & height dynamically
  const finalWidth = isStar ? sizeStar[starSize].width : width;
  const finalHeight = isStar ? sizeStar[starSize].height : height;


  const imageProps = {
    src,
    alt: isStar ? '' : alt,
    width: !fill ? finalWidth : undefined,
    height: !fill ? finalHeight : undefined,
    fill,
    sizes,
    style: {
      borderRadius: isStar ? '0' : borderRadius, 
      objectFit: 'cover',
      ...style,
    },
    className,
    'aria-hidden': isStar ? 'true' : 'false',
    tabIndex: isStar ? -1 : 0,
  };

  const ImageElement = link && !isStar ? (
    <a href={link} target="_blank" rel="noopener noreferrer" aria-label={alt}>
      <Image {...imageProps} />
    </a>
  ) : (
    <Image {...imageProps} />
  );

  return (
    <figure className="relative mx-auto text-center w-full max-w-[75rem]">
      {ImageElement}

      {caption && !isStar && (
        <figcaption className="text-white font-bold mt-2 text-[16px] text-center max-w-[200px] break-words leading-[1.4]">
          {link ? (
            <a href={link} target="_blank" rel="noopener noreferrer" className="text-inherit" tabIndex="0">
              {caption}
            </a>
          ) : (
            caption
          )}
        </figcaption>
      )}

      {overlayText && !isStar && (
        <div className="absolute inset-0 flex items-center justify-center text-white bg-black bg-opacity-30 text-base md:text-lg lg:text-xl font-bold">
          {overlayText}
        </div>
      )}
    </figure>
  );
};

export default CustomImage;


