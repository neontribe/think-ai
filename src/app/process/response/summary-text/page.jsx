'use client';

import { useRouter } from 'next/navigation';
import ProcessGuard from "@/app/components/ProcessGuard";
import TwoColLayout from '@/app/components/TwoColLayout';
import { useGlobalState } from "@/app/contexts/GlobalStateProvider";


const Response = () => {
  const router = useRouter();
  const { state} = useGlobalState();
  const { responseData } = state;
  console.log(responseData);

  const { modelType, promptResponseContent, splitRiskPoints } = responseData;

  return (
    <>
      <TwoColLayout>
        <div className="p-4">
          <h2>But...</h2>
          <p>Nice!</p>
          <p><strong>BUT...</strong></p>
          <p>What could be the problem with generating content this way?</p>
  
          <ol>
            {splitRiskPoints.map((risk, index) => (
              risk && <li key={index}>{risk}</li>
            ))}
          </ol>
  
          <button
            className="bg-[#63E2F1] text-[#1B0080] px-6 py-3 w-[171px] h-[48px] text-lg inline-flex items-center justify-center font-bold rounded-full transition duration-300 hover:bg-[#9747FF] hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#9747FF]"
            type="button"
            onClick={() => router.push('/process/discuss')}
          >
            Find Out
          </button>
        </div>
  
        <div className="p-4 flex justify-center items-start">
          {/* Replace <img> with text rendering */}
          {modelType === "summary" && promptResponseContent && (
            <div>
              <h2 className="text-lg font-bold mb-2">Your answer</h2>
              <p>{promptResponseContent}</p>
            </div>
          )}
        </div>
      </TwoColLayout>
    </>
  );
  
}

export default ProcessGuard(Response);
