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

  return (<div className="full-width-container">
    <Header/>
    <div className="constrained-width-container">
      <div className='flex'>
        <p> Think of an idea for an image</p>
        <ButTypography text="Think about..." className="mt-4"/>
      </div>

      {/* Prompt Input Component */}
      <PromptInput
        apiEndpoint="/api/image"
        suggestedText="Describe something ..."
        modelType="image-generation"
        buttonText="Make Image"
        onSubmit={() => router.push("/process/response/image-generation")}
      />

      <PromptInput
        apiEndpoint="/api/summary"
        suggestedText="Describe something ..."
        modelType="summary"
        buttonText="Go"
        onSubmit={() => router.push("/process/response/summary-text")}
      />  
    </div>
  </div>);
}
