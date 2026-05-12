'use client';

import TwoColLayout from '@/app/components/TwoColLayout';
import PulseStar from '@/app/components/PulseStar';
import { useGlobalState } from '@/app/contexts/GlobalStateProvider';
import RouteButton from '@/app/components/RouteButton';

const Modal = ({ message = null }) => {
  const { registerValue } = useGlobalState();

  return message ? (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-[#291498] opacity-75"></div>
      <div className="relative z-10 flex h-1/3 items-center rounded bg-[#1C0080] p-3 shadow-lg md:p-6">
        <TwoColLayout containerClass="flex-col-reverse" alignRows={true}>
          <div id="leftColumn" className="text-center">
            <p className="text-2xl leading-[1.5] font-semibold md:text-5xl">{message}</p>
          </div>
          <div id="rightColumn">
            <div className="flex flex-col items-center">
              <RouteButton
                type="button"
                variant="primary"
                className="md:justify-left mt-4 justify-center font-normal text-[#1B1806]"
                onClick={() => {
                  registerValue('modalVisible', false);
                  registerValue('modalMessage', null);
                }}
              >
                OK
              </RouteButton>
            </div>
          </div>
        </TwoColLayout>
      </div>
    </div>
  ) : (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-[#291498] opacity-75"></div>
      <div className="relative z-10 flex h-1/3 items-center rounded bg-[#1C0080] p-3 shadow-lg md:p-6">
        <TwoColLayout containerClass="flex-col-reverse" alignRows={true}>
          <div id="leftColumn" className="text-center">
            <p className="text-2xl leading-[1.5] font-semibold md:text-5xl">
              Just let me get that for you ...
            </p>
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
