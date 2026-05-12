'use client';

import { useRouter } from 'next/navigation';
import { useGlobalState } from '@/app/contexts/GlobalStateProvider';
import { useEffect } from 'react';
import PromptInput from '@/app/components/PromptInput';
import ButTypography from '@/app/components/ButTypography';
import Header from '@/app/components/Header';
import TwoColLayout from '@/app/components/TwoColLayout';
import ContentBox from '@/app/components/ContentBox';
import ExpandAccordion from '@/app/components/Accordion';

export default function Query() {
  const router = useRouter();
  // we need to visit this page before we can visit guarded pages
  const { setState } = useGlobalState();

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
              <p className="mb-4 text-2xl text-[22pt]">
                1. Think of something you want AI to help with
              </p>

              <ButTypography text="think about..." className="mb-4 w-full text-left" />

              <ExpandAccordion text="How to ask AI questions">
                <div className="mt-2 px-4 pb-4">
                  <ul className="list-disc space-y-2 pl-5">
                    <li>Be clear: Give enough details so the answer makes sense.</li>
                    <li>Stay fair: Ask questions that don’t push one answer over another.</li>
                    <li>Be respectful: Think about how your question might affect others.</li>
                  </ul>
                </div>
              </ExpandAccordion>

              <ExpandAccordion text="Some risks to think about">
                <div className="mt-2 px-4 pb-4">
                  <ul className="list-disc space-y-2 pl-5">
                    <li>
                      Wrong answers: Sometimes AI can give answers that aren’t quite right, so
                      double-check.
                    </li>
                    <li>
                      Unfair ideas: AI might accidentally say something that isn’t fair to some
                      people.
                    </li>
                    <li>
                      Stereotypes: AI might repeat common but unfair ideas, so always be careful
                      with how you ask things.
                    </li>
                  </ul>
                </div>
              </ExpandAccordion>

              <ExpandAccordion text="Here’s an example. What are the issues here?">
                <div className="mt-2 px-4 pb-4">
                  <p>
                    you might feed the ai an article link and ask it to summarise it e.g.{' '}
                    <em>
                      “Summarise this article about women in science and be sure to cover pay
                      differences between men and women.”
                    </em>
                  </p>
                </div>
              </ExpandAccordion>
            </ContentBox>
          </div>

          <div id="rightColumn">
            <ContentBox bg="bg-transparent">
              <p className="mb-6 text-2xl text-[22pt]">2. Write your message.</p>
              <PromptInput
                apiEndpoint="/api/summary"
                suggestedText="Add your text here, it could be something like summarising text e.g. a news article, research paper, essay etc. or asking it for some information on a topic you are interested in. "
                modelType="summary"
                buttonText="Go"
                onSubmit={() => router.push('/process/response/summary-text')}
              />
            </ContentBox>
          </div>
        </TwoColLayout>
      </div>
    </div>
  );
}
