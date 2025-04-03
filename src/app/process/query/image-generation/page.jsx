'use client';

import { useRouter } from 'next/navigation';
import { useGlobalState } from '@/app/contexts/GlobalStateProvider';
import { useEffect } from 'react';
import PromptInput from '@/app/components/PromptInput';
import ButTypography from '@/app/components/ButTypography';
import Header from '@/app/components/Header';
import TwoColLayout from '@/app/components/TwoColLayout';
import ContentBox from '@/app/components/ContentBox';
import ExpandAccordion from '@/app/components/Accordian';
import Image from 'next/image';
import exampleImage from '@/app/assets/exampleImage.png';

export default function Query() {
  const router = useRouter();
  // we need to visit this page before we can visit guarded pages
  const { state, setState } = useGlobalState();

  useEffect(() => {
    setState((prevState) => ({ ...prevState, auth: true }));
  }, [setState]);

  return (
    <div className="full-width-container">
      <Header />
      <div className="mx-auto max-w-[1200px] px-4">
        <TwoColLayout containerClass="flex flex-col md:flex-row gap-6 py-6 md:py-12">
          <div id="leftColumn">
            <ContentBox>
              <p className="mb-4 text-2xl text-[22pt]">1. Think of an idea for an image</p>

              <ButTypography text="think about..." className="mb-4 w-full text-left" />

              <ExpandAccordion text="How to ask AI for the image">
                <div className="mt-2 px-4 pb-4">
                  <ul className="list-disc space-y-2 pl-5">
                    <li>Be clear about details like style and layout.</li>
                    <li>
                      Give context like the time period, culture, or art style to make sure it’s
                      unique.
                    </li>
                    <li>
                      Avoid describing unclear scenes or describing clashing things e.g. a sad and
                      happy person.
                    </li>
                  </ul>
                </div>
              </ExpandAccordion>

              <ExpandAccordion text="Some risks to think about">
                <div className="mt-2 px-4 pb-4">
                  <ul className="list-disc space-y-2 pl-5">
                    <li>
                      AI-generated images are based on thousands of images the ai learns from.
                    </li>
                    <li>
                      If those images aren’t a fair example of the thing it’s trying to make, the
                      result wont be fair either, this is known as ‘image bias’ in the ai world.
                    </li>
                    <li>
                      Fine details like text, hands, and emotions can sometimes look off or
                      unnatural with ai images.
                    </li>
                  </ul>
                </div>
              </ExpandAccordion>

              <ExpandAccordion text="Here’s an example. What are the issues here?">
                <div className="mt-2 px-4 pb-4">
                  <p>
                    Description{' '}
                    <em>
                      “an image of a head teacher wearing a dark grey suit, having a conversation
                      with a student. There’s a computer on the desk behind them”
                    </em>
                    .
                  </p>
                  <Image
                    src={exampleImage}
                    alt="Example AI image"
                    width={500}
                    height={247}
                    className="mx-auto mt-4 rounded-xl border-2 shadow-md"
                  />
                </div>
              </ExpandAccordion>
            </ContentBox>
          </div>

          <div id="rightColumn">
            <ContentBox bg="bg-transparent">
              <p className="mb-6 text-2xl text-[22pt]">2. Describe your image</p>
              <PromptInput
                apiEndpoint="/api/image"
                suggestedText="Describe your idea clearly and fairly, trying to avoid stereotypes and provide clear details"
                modelType="image-generation"
                buttonText="Make Image"
                onSubmit={() => router.push('/process/response/image-generation')}
              />
            </ContentBox>
          </div>
        </TwoColLayout>
      </div>
    </div>
  );
}
