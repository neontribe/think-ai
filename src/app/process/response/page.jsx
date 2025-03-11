'use client';

import { useRouter } from 'next/navigation';
import ProcessGuard from "@/app/components/ProcessGuard";

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
    {/* whole screen size */}
    <div className="bg-gray-400 flex justyfy-center items-center min-h-screen">
      
      <div className=" container mx-auto w-[1150px] h-[466px] bg-gray-700 flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 h-full bg-blue-500 text-white flex flex-col items-center justify-center md:order-1 3xl:order-2">
          <h1>Column 1</h1>
        </div>
        <div className="w-full md:w-1/2 h-full bg-green-700 text-white flex flex-col items-center justify-center md:oder-2 3xl:order-1">
          <h1>Column 2</h1>
        </div>
        
      </div>
      

    </div>
  </>);
}

export default ProcessGuard(Response);
