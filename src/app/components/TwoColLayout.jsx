'use client';

import React from 'react';

const TwoColLayout = ({
  leftColumn,
  rightColumn,
  children,
  containerClass = 'w-full min-h-screen md:min-h-screen p-6 md:p-12 flex flex-col md:flex-row flex-wrap',
  alignRows = false,
}) => {
  // Combine left, children, and right into a single array
  const combinedContent = [
    ...(leftColumn ? [leftColumn] : []),
    ...React.Children.toArray(children),
    ...(rightColumn ? [rightColumn] : []),
  ];
  const alignStyle = alignRows ? 'items-center justify-center self-center' : '';

  // Calculate the width based on the number of combined items
  return (
    <div className={`flex w-full md:flex-row ${containerClass}`}>
      {combinedContent.map((content, index) => (
        <div
          key={'key_' + index}
          className={`flex w-full flex-1 flex-col items-center text-white order-${index + 1} ${alignStyle}`}
        >
          {content}
        </div>
      ))}
    </div>
  );
};

export default TwoColLayout;
