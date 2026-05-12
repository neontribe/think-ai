'use client';

import { useRouter } from 'next/navigation';
import ProcessGuard from '@/app/components/ProcessGuard';
import TwoColLayout from '@/app/components/TwoColLayout';
import { useGlobalState } from '@/app/contexts/GlobalStateProvider';
import Header from '@/app/components/Header';
import ButTypography from '@/app/components/ButTypography';
import RouteButton from '@/app/components/RouteButton';
import Accordion from '@/app/components/Accordion';

const Response = () => {
  const router = useRouter();
  const { state } = useGlobalState();
  const { responseData } = state;

  const { modelType, promptResponseContent } = responseData;

  return (
    <>
      <Header />
      <TwoColLayout containerClass="flex-col-reverse md:flex-row-reverse">
        <div className="max-w-[80%] p-6 text-left text-[16pt] md:p-12">
          <p>Nice work</p>
          <ButTypography className="mb-4 w-full text-left" />
          <p className="mb-4">
            What could the issues be with asking AI to answer questions or do tasks?
          </p>
          <Accordion text="Think about these things" className="mb-6 w-full text-start">
            <p className="pb-2">1. could the results leave out any important details?</p>
            <p className="pb-2">2. should or could you use these results in your own work?</p>
            <p className="pb-2">3. could the summarised text be one-sided in any way?</p>
          </Accordion>

          <RouteButton
            variant="third"
            type="button"
            onClick={() => router.push('/process/discuss/summary-text')}
          >
            Find Out
          </RouteButton>
        </div>

        <div className="flex max-w-[80%] items-start justify-center rounded-lg bg-white p-6 text-left text-[#23009F] md:p-12">
          {modelType === 'summary' && promptResponseContent && (
            <div className="w-full">
              <h2 className="mb-2 text-lg font-bold md:mb-8">Your answer</h2>
              <div className="space-y-4">
                {promptResponseContent.split(/\n\s*\n|\. /g).map(
                  (paragraph, index) =>
                    paragraph.trim() && (
                      <p key={index} className="bg-transparent leading-normal text-[#23009F]">
                        {paragraph}
                      </p>
                    ),
                )}
              </div>
            </div>
          )}
        </div>
      </TwoColLayout>
    </>
  );
};

export default ProcessGuard(Response);
