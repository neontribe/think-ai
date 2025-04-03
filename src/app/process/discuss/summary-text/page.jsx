'use client';

import {useGlobalState} from '@/app/contexts/GlobalStateProvider';
import ProcessGuard from '@/app/components/ProcessGuard';
import ThreeRowLayout from '@/app/components/ThreeRowLayout';
import Header from '@/app/components/Header';
import Image from 'next/image';
import ResponseCarousel from '@/app/components/ResponseCarousel';
import ExpandAccordion from '@/app/components/Accordion';
import Star from '../assets/Star.png';
import LearnBox from '@/app/components/LearnBox';
import summaryResultData from '@/app/data/summaryResultData';
import Link from 'next/link';
import {useRef} from 'react';

const Discuss = () => {
  const { state } = useGlobalState();
  const { responseData } = state;
  const { modelType, promptResponseContent, splitRiskPoints } = responseData;

  const slides = splitRiskPoints.filter(Boolean).map((risk, index) => ({
    number: index + 1,
    paragraph: risk,
  }));

  const bottomRef = useRef(null);

  const scrollToBottom = () => {
    if (bottomRef.current) {
      bottomRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <Header />
      <ThreeRowLayout
        top={
          <div className="flex flex-col gap-6">
            <h2 className="text-[16pt] font-bold md:ml-10">Let’s dive deeper into this answer</h2>

            {/* LEFT + RIGHT layout */}
            <div className="flex flex-col-reverse items-center md:flex-row">
              {/* LEFT */}
              <div className="z-20 -mt-5 w-[90%] md:mt-0 md:-mr-5 md:w-[60%]">
                <ResponseCarousel slideData={slides} />
              </div>

              {/* RIGHT */}
              <div className="flex md:w-full">
                {modelType === 'summary' && promptResponseContent && (
                  <div className="relative w-full max-w-xl overflow-hidden rounded-2xl bg-white shadow-md">
                    {/* Scrollable content */}
                    <div className="max-h-[420px] space-y-4 overflow-y-auto p-6">
                      {promptResponseContent.split(/\n\s*\n|\. /g).map((paragraph, index) =>
                        paragraph.trim() ? (
                          <p key={'key_' + index} className="leading-normal text-[#23009F]">
                            {paragraph}
                          </p>
                        ) : null,
                      )}
                    </div>

                    {/* fade gradient */}
                    <div className="pointer-events-none absolute bottom-0 left-0 h-20 w-full bg-gradient-to-b from-transparent via-white/60 to-[#291498]"></div>
                  </div>
                )}
              </div>
            </div>
          </div>
        }
        middle={
          <div className="flex w-full flex-col items-center gap-4 md:flex-row">
            <div className="flex w-full flex-col gap-4 md:ml-8 md:w-3/4">
              <h2 className="mb-4 text-[16pt] font-bold">Take some time to reflect</h2>
              <ExpandAccordion text="Let's stop and think back">
                <div className="mt-2 space-y-2 px-4 pb-4">
                  <p className="mt-1">1. What have you learnt about generating text with ai?</p>
                  <p>
                    2. Will you use text generation ai in your life? Is it helpful for some things
                    and not others?
                  </p>
                </div>
              </ExpandAccordion>

              <ExpandAccordion text="Think about what comes next">
                <div className="mt-2 space-y-2 px-4 pb-4">
                  <p>
                    1. You might jump into learning more about how it works, check out the{' '}
                    <span
                      onClick={scrollToBottom}
                      className="cursor-pointer text-[#65E1F1] hover:underline"
                    >
                      {' '}
                      guides below
                    </span>
                    .
                  </p>
                  <p>
                    2. You might want to experiment with generating text and trying to get more fair
                    results.
                    <br /> If you feel confident on how to generate text and what to be aware of,
                    check out other tools like,&nbsp;
                    <a
                      href="https://openai.com/index/gpt-4/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#65E1F1] hover:underline"
                    >
                      GPT-4
                    </a>
                    ,&nbsp;
                    <a
                      href="https://gemini.google.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#65E1F1] hover:underline"
                    >
                      Google’s Gemini
                    </a>{' '}
                    or&nbsp;
                    <a
                      href="https://claude.ai/login?returnTo=%2F%3F"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#65E1F1] hover:underline"
                    >
                      Claude
                    </a>{' '}
                    for more advanced features.
                  </p>
                  <p>
                    3. You could leave it there with text and learn more about another type of
                    generative AI with us,&nbsp;
                    <Link
                      ariaLabel="generate some text"
                      className="text-[#65E1F1] underline hover:underline"
                      href="/process/query/image-generation"
                    >
                      image generation
                    </Link>
                    .
                  </p>
                </div>
              </ExpandAccordion>

              <ExpandAccordion text="If you do use ai to generate text,  try following these points">
                <div className="mt-2 space-y-2 px-4 pb-4">
                  <p>
                    1. Make sure you describe your request clearly and in detail, so the AI knows
                    exactly what you&#39;re asking for.
                  </p>
                  <p>
                    2. Be aware that the AI has learned from lots of text, so it may reflect certain
                    ideas, stereotypes, or one-sided views from what it’s seen before. For example,
                    if you ask the AI about political leaders, it might unintentionally favour
                    certain political parties or views more than others, because it’s seen more
                    examples of those ideas before.
                  </p>
                  <p>
                    3. If you want to avoid the AI being one-sided, be clear in your question to
                    guide it toward a more balanced answer.
                  </p>
                  <p>
                    4. AI text generation can sometimes use harmful stereotypes or be unfair to
                    certain groups, like assuming things about people based on their race, gender,
                    or background. Be mindful of how the AI might shape its answers and try to ask
                    in ways that avoid one-sided views.
                  </p>
                  <p>
                    5. Remember, text generation tools are still improving, and the rules around
                    them are changing as the technology grows. They aren’t perfect, so it’s always a
                    good idea to review the policies and guidelines of the tool you’re using if
                    you&#39;re unsure.
                  </p>
                </div>
              </ExpandAccordion>
            </div>

            <div className="mt-4 flex flex-col items-center md:mt-0 md:ml-10 md:w-1/3">
              <Image
                src={Star}
                alt="Decorative star"
                className="h-[94px] w-[86px] md:h-[193px] md:w-[177px]"
              />
            </div>
          </div>
        }
        bottom={
          <div ref={bottomRef} className="mx-auto w-full px-2">
            <h2 className="text-[16pt] font-bold md:ml-10">
              Go further and learn more about generating text with AI
            </h2>
            <div className="mt-16 flex flex-col flex-wrap gap-8 md:ml-10 md:flex-row">
              {summaryResultData.map((item, index) => (
                <LearnBox
                  key={'key_' + index}
                  src={item.src}
                  alt={item.alt}
                  caption={item.caption}
                  link={item.link}
                  buttonText={item.buttonText}
                />
              ))}
            </div>
          </div>
        }
      />
    </>
  );
};

export default ProcessGuard(Discuss);
