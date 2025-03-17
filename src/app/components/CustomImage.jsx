'use client'
 import React from 'react'
import Image from 'next/image'

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
          height={!fill ? height : undefined} 
          fill={fill}  
          sizes={sizes}
          style={{ borderRadius, objectFit: 'cover', ...style }} 
          className={className}
        />
      </a>

      
    </figure>
  );
};

export default CustomImage;




// image
{/* <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="191" height="165" vieBox="0 0 191 165" fill="none"> */}