'use client';

import { useRouter } from 'next/navigation';
import ProcessGuard from "@/app/components/ProcessGuard";
import ThreeRowLayout from "@/app/components/ThreeRowLayout";
import Header from '@/app/components/Header';

const Discuss = () => {
  const router = useRouter();
  return (
    <>
      <Header />
      <ThreeRowLayout
        top={
          <div>
            <p className="text-2xl font-bold mb-4">Let’s Dive Deeper</p>
            <div>
              <p><i>... insert discussion of the response</i></p>
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

