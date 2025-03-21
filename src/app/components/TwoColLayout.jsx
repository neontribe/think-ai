"use client"

import React from "react";

const TwoColLayout = ({leftColumn, rightColumn, children, stackReverse = false}) => {
  // Combine left, children, and right into a single array
  const combinedContent = [
    ...(leftColumn ? [leftColumn] : []),
    ...React.Children.toArray(children),
    ...(rightColumn ? [rightColumn] : []),
  ];

  // Calculate the width based on the number of combined items
  const widthClass = `md:w-1/${combinedContent.length}`;
  const stackOrder = stackReverse ? 'flex-col-reverse' : 'flex-col';

  return (<div className={`w-full min-h-screen flex p-6 md:p-12 ${stackOrder} md:flex-row`}>
      {combinedContent.map((content, index) => (
        <div
          key={'key_'+index}
          className={`w-full ${widthClass} text-white flex flex-col items-center justify-center md:order-${index + 1} flex-grow`}
        >
          {content}
        </div>))}
    </div>);
};

export default TwoColLayout;
