'use client'
 import React from 'react'
import Image from 'next/image'
 
const Image = ({
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
  const imageElement = (
    <Image
      src={src}
      alt={alt}
      width={!fill ? width : undefined}
      height={!fill ? height : undefined}
      fill={fill}
      sizes={sizes}
      style={{
        borderRadius: borderRadius,
        objectFit: 'cover',
        ...style,
      }}
      className={className}
    />
  );

  return (
    <figure style={{ textAlign: "center", margin: "0"}}>
    </figure>
  )
}

export default Image;