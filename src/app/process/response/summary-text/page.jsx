'use client';

import { useRouter } from 'next/navigation';
import ProcessGuard from "@/app/components/ProcessGuard";
import TwoColLayout from '@/app/components/TwoColLayout';
import { useGlobalState } from "@/app/contexts/GlobalStateProvider";
import Header from "@/app/components/Header"
import ButTypography from '@/app/components/ButTypography';
import Accordian from '@/app/components/Accordian'


const Response = () => {
  const router = useRouter();
  const { state} = useGlobalState();
  const { responseData } = state;
  console.log(responseData);

  const { modelType, promptResponseContent, splitRiskPoints } = responseData;

  return (
    <>
      <Header />
      <TwoColLayout>
        <div className="p-6 md:p-12 text-left max-w-[80%] text-[16pt]">
          <p>Nice work</p>
          <ButTypography className="text-left w-full mb-4" />
          <p className="mb-4">What could the issues be with asking AI to answer questions or do tasks?</p>

          <Accordian
          text="Think about these things"
          className="text-start"
          >
            <ul className="list-disc pl-6 space-y-2">
            {splitRiskPoints.map((risk, index) => (
              risk && <li key={index}>{risk}</li>
            ))}
          </ul>
          </Accordian>
  
          <button
            className="bg-[#63E2F1] text-[#1B0080] px-6 py-3 w-[171px] h-[48px] text-lg inline-flex items-center justify-center font-bold rounded-full transition duration-300 hover:bg-[#9747FF] hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#9747FF] mt-8"
            type="button"
            onClick={() => router.push('/process/discuss')}
          >
            Find Out
          </button>
        </div>
  
        <div className="p-6 md:p-12 text-left max-w-[80%] flex justify-center items-start bg-white text-[#23009F] rounded-lg">
          {modelType === "summary" && promptResponseContent && (
            <div className="w-full">
              <h2 className="text-lg font-bold mb-2">Your answer</h2>
              <div className="space-y-4">
                {promptResponseContent.split(/\n\s*\n|\. /g).map((paragraph, index) => (
                  paragraph.trim() && (
                    <p key={index} className="bg-transparent text-[#23009F] leading-normal">
                      {paragraph}
                    </p>
                  )
                ))}
              </div>
            </div>
          )}
        </div>
      </TwoColLayout>
    </>
  );  
 
}

export default ProcessGuard(Response);