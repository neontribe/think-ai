'use client';

import {useRouter} from 'next/navigation';
import ProcessGuard from '@/app/components/ProcessGuard';
import TwoColLayout from '@/app/components/TwoColLayout';
import {useGlobalState} from '@/app/contexts/GlobalStateProvider';
import Header from '@/app/components/Header';
import ButTypography from '@/app/components/ButTypography';
import RouteButton from '@/app/components/RouteButton';
import Accordion from '@/app/components/Accordion';
import Image from 'next/image';

const Response = () => {
  const router = useRouter();
  const { state } = useGlobalState();
  const { responseData } = state;
  console.log(responseData);

  const { modelType, promptResponseContent } = responseData;

  return (
    <>
      <Header />
      <TwoColLayout>
        <div className="w-full p-6 text-left text-[16pt] md:max-w-[80%] md:p-12">
          <p>Nice image!</p>
          <ButTypography className="mb-4 w-full text-left" />
          <p className="mb-4">What could the issues be with generating images in this way?</p>
          <Accordion text="Think about these things" className="mb-6 w-full text-start">
            <p className="pb-2">1. could this image show a stereotype?</p>
            <p className="pb-2">
              2. could there be anywhere you shouldn’t use this image? Think about using it for
              school work, or posting online. Is it ok do do that?
            </p>
            <p className="pb-2">
              3. could this image make anyone have the wrong idea about the places/people/things in
              it?
            </p>
          </Accordion>

          <RouteButton
            variant="third"
            type="button"
            onClick={() => router.push('/process/discuss/image-generation')}
            className="mx-auto w-full max-w-[350px]"
          >
            Find Out
          </RouteButton>
        </div>

        <div className="flex w-full items-center justify-center p-4">
          {modelType === 'image-generation' && promptResponseContent && (
            <Image src={promptResponseContent} alt="Requested asset" width={702} height={702} />
          )}
        </div>
      </TwoColLayout>
    </>
  );
};

export default ProcessGuard(Response);
