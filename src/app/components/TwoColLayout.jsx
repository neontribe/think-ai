"use client"

import React from "react";

const TwoColLayout = ({leftColumn, rightColumn, children, style = ''}) => {
  // Combine left, children, and right into a single array
  const combinedContent = [
    ...(leftColumn ? [leftColumn] : []),
    ...React.Children.toArray(children),
    ...(rightColumn ? [rightColumn] : []),
  ];

  // Calculate the width based on the number of combined items
  return (<div className={`w-full md:min-h-screen flex md:flex-row ${style}`}>
      {combinedContent.map((content, index) => (
        <div
          key={'key_'+index}
          className={`w-full flex-1 text-white flex flex-col items-center order-${index + 1}`}
        >
          {content}
        </div>))}
    </div>);
};

export default TwoColLayout;
