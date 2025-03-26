'use client';

import { useRouter } from 'next/navigation';
import { useGlobalState } from "@/app/contexts/GlobalStateProvider";
import ProcessGuard from "@/app/components/ProcessGuard";
import ThreeRowLayout from "@/app/components/ThreeRowLayout";
import Header from '@/app/components/Header';
import Image from 'next/image';
import ResponseCarousel from '@/app/components/ResponseCarousel';

  const Discuss = () => {
    const router = useRouter();
    const { state } = useGlobalState();
    const { responseData } = state;
    const { modelType, promptResponseContent, splitRiskPoints } = responseData;
    

  return (
    <>
      <Header />
      <ThreeRowLayout
        top={
          <div className="flex flex-col gap-6">
            <h2 className="text-2xl font-bold mb-4 ml-15">
              Let’s Dive Deeper Into This Image
            </h2>
        
            {/* LEFT*/}
            <div className="relative flex flex-col md:flex-row">
              <div className="md:w-1/2 relative z-20 md:w-[80%] md:-mr-30">
                <ResponseCarousel />
              </div>
        
              {/* RIGHT */}
              <div className="md:w-1/2 flex md:justify-start md:-mt-8">
                {modelType === 'image-generation' && promptResponseContent && (
                  <Image
                    src={promptResponseContent}
                    alt="Requested asset"
                    width={379}
                    height={379}
                    className="rounded-lg shadow-md"
                  />
                )}
              </div>
            </div>
          </div>
        }
        

        middle={
          <div className="flex">
            
          </div>
        }
        bottom={
          <div className="flex">
            <button
              className="bg-[#63E2F1] text-[#1B0080] px-6 py-3 w-[171px] h-[48px] text-lg inline-flex items-center justify-center font-bold rounded-full transition duration-300 hover:bg-[#9747FF] hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#9747FF]"
              type="button"
              onClick={() => router.push('/process/query')}
            >
              Start again
            </button>
          </div>
        }
      />
    </>
  );
};

export default ProcessGuard(Discuss);

