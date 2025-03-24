'use client';

import {useRouter} from 'next/navigation';
import {useGlobalState} from "@/app/contexts/GlobalStateProvider";
import {useEffect} from "react";
import PromptInput from '@/app/components/PromptInput';
import ButTypography from '@/app/components/ButTypography';
import Header from '@/app/components/Header';
import TwoColLayout from '@/app/components/TwoColLayout';
import ContentBox from '@/app/components/ContentBox';
import ExpandAccordion from '@/app/components/Accordian';

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
        <ContentBox>
          <p className="text-2xl mb-4 text-[22pt]">1. Think of something you want AI to help with</p>

          <ButTypography text="think about..." className="text-left w-full mb-4" />

          <ExpandAccordion text="How to ask AI questions">
            <p>Content about how to ask questions to AI.</p>
          </ExpandAccordion>

          <ExpandAccordion text="Some risks to think about">
            <p>Content about potential risks or caveats.</p>
          </ExpandAccordion>

          <ExpandAccordion text="Here’s an example. What are the issues here?">
            <p>Content illustrating an example scenario or issue.</p>
          </ExpandAccordion>
        </ContentBox>

        <div className="p-6 md:p-6">
          <p className="text-2xl text-[22pt] mb-6">2. Write your message.</p>
            <PromptInput
            apiEndpoint="/api/summary"
            suggestedText="Add your text here, e.g. summarizing a news article or asking AI a question..."
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