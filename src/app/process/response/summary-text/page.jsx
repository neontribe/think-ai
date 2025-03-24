'use client';

import { useRouter } from 'next/navigation';
import ProcessGuard from "@/app/components/ProcessGuard";
import TwoColLayout from '@/app/components/TwoColLayout';
import { useGlobalState } from "@/app/contexts/GlobalStateProvider";
import Header from "@/app/components/Header"
import ButTypography from '@/app/components/ButTypography';
import RouteButton from '@/app/components/RouteButton';
import Accordian from '@/app/components/Accordian'


const Response = () => {
  const router = useRouter();
  const { state} = useGlobalState();
  const { responseData } = state;
  console.log(responseData);

  const { modelType, promptResponseContent, splitRiskPoints } = responseData;

  return (
    <>
      <Header hideLinks={true}/>
      <TwoColLayout>
        <div className="p-6 md:p-12 text-left max-w-[80%] text-[16pt]">
          <p>Nice work</p>
          <ButTypography className="text-left w-full mb-4" />
          <p className="mb-4">What could the issues be with asking AI to answer questions or do tasks?</p>
          <Accordian
          text="Think about these things"
          className="text-start mb-6"
          >
            <ul className="list-disc pl-6 space-y-2">
            {splitRiskPoints.map((risk, index) => (
              risk && <li key={index}>{risk}</li>
            ))}
          </ul>
          </Accordian>
  
          <RouteButton
            variant="third"
            type="button"
            onClick={() => router.push('/process/discuss')}
          >
            Find Out
          </RouteButton>
        </div>
  
        <div className="p-6 md:p-12 text-left max-w-[80%] flex justify-center items-start bg-white text-[#23009F] rounded-lg">
          {modelType === "summary" && promptResponseContent && (
            <div className="w-full">
              <h2 className="text-lg font-bold mb-2 mb-8">Your answer</h2>
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