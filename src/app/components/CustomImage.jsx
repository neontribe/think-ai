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
}) => {
  const isDecorative = !alt && !caption && !overlayText;

  const imageProps = {
    src,
    alt: isDecorative ? '' : alt,
    width: !fill ? width : undefined,
    height: !fill ? height : undefined,
    fill,
    sizes,
    style: {
      borderRadius,
      objectFit: 'cover',
      ...style,
    },
    className,
    'aria-hidden': isDecorative ? 'true' : 'false',
    tabIndex: isDecorative ? -1 : 0,
  };

  const ImageElement =
    link && !isDecorative ? (
      <a href={link} target="_blank" rel="noopener noreferrer" aria-label={alt}>
        <Image {...imageProps} />
      </a>
    ) : (
      <Image {...imageProps} />
    );

  return (
    <figure className="relative mx-auto w-full max-w-[75rem] text-center">
      {ImageElement}

      {caption && !isDecorative && (
        <figcaption className="mt-2 max-w-[200px] text-center text-[16px] leading-[1.4] break-words text-white">
          {link ? (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-inherit"
              tabIndex="0"
            >
              {caption}
            </a>
          ) : (
            caption
          )}
        </figcaption>
      )}

      {overlayText && !isDecorative && (
        <div className="bg-opacity-30 absolute inset-0 flex items-center justify-center bg-black text-base font-bold text-white md:text-lg lg:text-xl">
          {overlayText}
        </div>
      )}
    </figure>
  );
};

export default CustomImage;
