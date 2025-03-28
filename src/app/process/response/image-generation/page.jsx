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

  const { modelType, promptResponseContent} = responseData;

  return (
    <>
      <Header hideLinks={true}/>
      <TwoColLayout>
        <div className="p-6 md:p-12 text-left w-full md:max-w-[80%] text-[16pt]">
          <p>Nice image!</p>
          <ButTypography className="text-left w-full mb-4" />
          <p className="mb-4">What could the issues be with generating images in this way?</p>
          <Accordian text="Think about these things" className="text-start mb-6 w-full">
              <p className="pb-2">1. could this image show a stereotype?</p>
              <p className="pb-2">2. could there be anywhere you shouldn’t use this image? Think about using it for school work, or posting online. Is it ok do do that?</p>
              <p className="pb-2">3. could this image make anyone have the wrong idea about the places/people/things in it?</p>
          </Accordian>

          <RouteButton
            variant="third"
            type="button"
            onClick={() => router.push('/process/discuss/image-generation')}
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
