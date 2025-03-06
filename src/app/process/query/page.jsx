'use client';

import { useRouter } from 'next/navigation';
import { useGlobalState } from "@/app/contexts/GlobalStateProvider";
import { useEffect } from "react";

export default function Query() {
  const router = useRouter();
  // we need to visit this page before we can visit guarded pages
  const { state, setState } = useGlobalState();

  useEffect(() => {
    setState((prevState) => ({ ...prevState, auth: true }));
  }, [setState]);

  return (<>
    <div>
      <p> Think of an idea for an image</p>
      <p><strong>BUT</strong> think about ...</p>
      <div>What makes a good prompt?</div>
      <div>What to be aware of?</div>
    </div>
    <textarea id="query" name="query" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-[#9747FF]" defaultValue="Describe something ..."/>
    <button className="bg-[#63E2F1] text-[#1B0080] px-6 py-3 w-[171px] h-[48px] text-lg inline-flex items-center justify-center font-bold rounded-full transition durantion-300 hover:bg-[#9747FF] hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#9747FF]" type="button" onClick={() => router.push('/process/response')}>
      Create!
    </button>
  </>);
}
