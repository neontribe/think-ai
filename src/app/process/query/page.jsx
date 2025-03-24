'use client';

import {useRouter} from 'next/navigation';
import {useGlobalState} from "@/app/contexts/GlobalStateProvider";
import {useEffect} from "react";
import PromptInput from '@/app/components/PromptInput';
import ButTypography from '@/app/components/ButTypography';
import Header from '@/app/components/Header';
import TwoColLayout from '@/app/components/TwoColLayout';
import ContentBox from '@/app/components/ContentBox';

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
        <ContentBox width="w-[530px]" height="h-[466px]">
          <h3 className="text-2xl mb-4">1. Think of something you want AI to help with</h3>

          <ButTypography text="think about..." className="text-left w-full mb-4" />

          <h3 text="How to ask AI questions">
            <p>Content about how to ask questions to AI.</p>
          </h3>

          <h3 text="Some risks to think about">
            <p>Content about potential risks or caveats.</p>
          </h3>

          <h3 text="Here’s an example. What are the issues here?">
            <p>Content illustrating an example scenario or issue.</p>
          </h3>
        </ContentBox>

        <div className="p-6 md:p-12">
        <h3 className="text-2xl mb-4">2. Write your message.</h3>
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



// <div className="full-width-container">
  //   <Header/>
  //   <div className="constrained-width-container">
  //     <div className='flex'>
  //       <p> Think of an idea for an image</p>
  //       <ButTypography text="Think about..." className="mt-4"/>
  //     </div>

  //     {/* Prompt Input Component */}
  //     <PromptInput
  //       apiEndpoint="/api/image"
  //       suggestedText="Describe something ..."
  //       modelType="image-generation"
  //       buttonText="Make Image"
  //       onSubmit={() => router.push("/process/response/image-generation")}
  //     />

  //     <PromptInput
  //       apiEndpoint="/api/summary"
  //       suggestedText="Describe something ..."
  //       modelType="summary"
  //       buttonText="Go"
  //       onSubmit={() => router.push("/process/response/summary-text")}
  //     />  
  //   </div>
  // </div>