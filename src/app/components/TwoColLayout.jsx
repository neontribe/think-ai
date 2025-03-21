"use client"

import React from "react";

const TwoColLayout = ({leftColumn, rightColumn, children}) => {
  // Combine left, children, and right into a single array
  const combinedContent = [
    ...(leftColumn ? [leftColumn] : []),
    ...React.Children.toArray(children),
    ...(rightColumn ? [rightColumn] : []),
  ];

  // Calculate the width based on the number of combined items
  const widthClass = `w-full md:w-1/${combinedContent.length}`;

  return (<div className={`w-full h-auto flex flex-wrap mx-auto`}>
      {combinedContent.map((content, index) => (<div
          key={'key_'+index}
          className={`${widthClass} h-full text-white flex flex-col items-center justify-center order-${index + 1}`}
        >
          {content}
        </div>))}
    </div>);
};

export default TwoColLayout;
