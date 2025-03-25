"use client";

import TwoColLayout from "@/app/components/TwoColLayout";
import PulseStar from "@/app/components/PulseStar";

const Modal = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="absolute inset-0 bg-[#291498] opacity-75"></div>
      <div className="relative bg-[#1C0080] rounded shadow-lg z-10 p-3 md:p-6 h-1/3 flex items-center">
        <TwoColLayout containerClass="flex-col-reverse" alignRows={true}>
          <div id="leftColumn" className="text-center">
            <p className="text-2xl md:text-5xl font-semibold leading-[1.5]">Just let me get that for you ...</p>
          </div>
          <div id="rightColumn">
            <div className="flex flex-col items-center">
              <PulseStar />
            </div>
          </div>
        </TwoColLayout>
      </div>
    </div>
  );
};

export default Modal;
