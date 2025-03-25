"use client";

import TwoColLayout from "@/app/components/TwoColLayout";

const Modal = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="absolute inset-0 bg-[#291498] opacity-75"></div>
      <div className="relative bg-[#1C0080] rounded p-6 shadow-lg z-10">
        <TwoColLayout containerClass="items-start md:items-center p-6 md:p-12 md:h-[200px]">
          <div id="leftColumn">
            <p className="text-3xl md:text-5xl font-semibold leading-[1.5]">Working on your query</p>
          </div>
          <div id="rightColumn">

          </div>
        </TwoColLayout>
      </div>
    </div>
  );
};

export default Modal;
