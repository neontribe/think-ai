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
  // All props for Image component in one object
  const imageProps = {
    src,
    alt,
    width: !fill ? width : undefined,
    height: !fill ? height : undefined,
    fill,
    sizes,
    style: { borderRadius, objectFit: 'cover', ...style },
    className,
  };

  return (
    <figure style={{ textAlign: 'center', margin: '0', position: 'relative' }}>
      <a
        href={link || '#'} 
        target='_blank'
        rel='noopener noreferrer'
        aria-label={alt} 
      >
        <Image {...imageProps} /> 
      </a>
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





// image
{/* <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="191" height="165" vieBox="0 0 191 165" fill="none"> */}