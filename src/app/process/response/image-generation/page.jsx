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
        <div className="p-6 md:p-12 text-left w-full md:max-w-[80%] text-[16pt]">
          <p>Nice image!</p>
          <ButTypography className="text-left w-full mb-4" />
          <p className="mb-4">What could the issues be generating images in this wat?</p>
          <Accordian
          text="Think about these things"
          className="text-start mb-6 w-full"
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
            className="w-full max-w-[350px] mx-auto"
          >
            Find Out
          </RouteButton>
        </div>

        <div className="p-4 flex justify-center items-center w-full">
      {modelType === "image-generation" && promptResponseContent && (
            <img
              src={promptResponseContent}
              alt="Requested asset"
              width={702}
              height={702}
            />
          )}
          </div>
      </TwoColLayout>
    </>
  );

}

export default ProcessGuard(Response);