'use client';

import { useRouter } from 'next/navigation';
import ProcessGuard from "@/app/components/ProcessGuard";
import TwoColLayout from '@/app/components/TwoColLayout';


const Response = () => {
  const router = useRouter();
  return (<>
    <div>
      <p>Nice!</p>
      <p><strong>BUT...</strong></p>
      <p>What could be the problem with generating content this way </p>
    </div>
    <button className="bg-[#63E2F1] text-[#1B0080] px-6 py-3 w-[171px] h-[48px] text-lg inline-flex items-center justify-center font-bold rounded-full transition durantion-300 hover:bg-[#9747FF] hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#9747FF]" type="button" onClick={() => router.push('/process/discuss')}>
      Find Out
    </button>
    <TwoColLayout>

    </TwoColLayout>
   
    
      

  </>);
}

export default ProcessGuard(Response);
