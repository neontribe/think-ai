'use client';

import {useRouter} from 'next/navigation';
import {useGlobalState} from "@/app/contexts/GlobalStateProvider";
import {useEffect} from "react";
import PromptInput from '@/app/components/PromptInput';
import ButTypography from '@/app/components/ButTypography';
import Header from '@/app/components/Header';


export default function Query() {
  const router = useRouter();
  // we need to visit this page before we can visit guarded pages
  const {state, setState} = useGlobalState();

  useEffect(() => {
    setState((prevState) => ({...prevState, auth: true}));
  }, [setState]);

return (
    <>
      <Header />

      <TwoColLayout>
        <div className="p-6 md:p-12 text-left max-w-[80%] text-[16pt]">
          
        </div>

        <div className="p-6 md:p-12">
          <PromptInput
            apiEndpoint="/api/summary"
            suggestedText="Add your text here, it could be somthing like summarising text e.g. a new article, research paper, essay etc. or asking ..."
            modelType="summary"
            buttonText="Go"
            onSubmit={() => router.push("/process/response/summary-text")}
          />
        </div>
      </TwoColLayout>
    </>
  ); 
}
