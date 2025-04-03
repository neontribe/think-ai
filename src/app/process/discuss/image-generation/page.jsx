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
import imageResultData from '@/app/data/imageResultData';
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
            <h2 className="text-[16pt] font-bold md:ml-10">Let’s dive deeper into this image</h2>

            {/* LEFT*/}
            <div className="flex flex-col-reverse items-center md:flex-row">
              <div className="z-20 -mt-5 w-[90%] md:mt-0 md:-mr-5 md:w-[60%]">
                <ResponseCarousel slideData={slides} />
              </div>

              {/* RIGHT */}
              <div className="flex md:w-full">
                {modelType === 'image-generation' && promptResponseContent && (
                  <Image
                    src={promptResponseContent}
                    alt="Requested asset"
                    width={379}
                    height={379}
                    className="rounded-2xl shadow-md"
                  />
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
                  <p className="mt-1">1. What have you learnt about making image with ai?</p>
                  <p>
                    2. Will you use ai for image generation? Is it helpful for some things and not
                    others?
                  </p>
                </div>
              </ExpandAccordion>

              <ExpandAccordion text="Think about what comes next">
                <div className="mt-2 space-y-2 px-4 pb-4">
                  <p>
                    1. You might jump into learning more about how it works, check out the guides{' '}
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
                    2. You might want to experiment with making images and trying to get more fair
                    results.
                  </p>
                  <p>
                    If you feel confident on how to generate images and what to be aware of, check
                    out other tools like
                    <a
                      href="https://www.adobe.com/uk/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#65E1F1] hover:underline"
                    >
                      Adobe Firefly
                    </a>
                    , or
                    <a
                      href="https://www.midjourney.com/home"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#65E1F1] hover:underline"
                    >
                      Mid Journey
                    </a>{' '}
                    for more advanced features.
                  </p>
                  <p>
                    3. You could leave it there with images and learn more about another type of
                    generative AI with us,&nbsp;
                    <Link
                      ariaLabel="generate some text"
                      className="text-[#65E1F1] underline hover:underline"
                      href="/process/query/summary-text"
                    >
                      text generation
                    </Link>
                    .
                  </p>
                </div>
              </ExpandAccordion>

              <ExpandAccordion text="If you do make images with ai, try following these points">
                <div className="mt-2 space-y-2 px-4 pb-4">
                  <p>
                    1. Make sure you describe the features and layout of your image clearly and in
                    detail.
                  </p>
                  <p>
                    2. Be aware of the fact that the AI will already have ideas about the type of
                    people, things or places you want to make from the images it’s scanned before.
                    For example, ai might produce more images of doctors that are white middle age
                    men than any other appearance, because so are most images it’s seen of doctors
                    before.
                  </p>
                  <p>
                    3. If you don’t want ai to unfairly weight the image result towards what it’s
                    learnt before, then be clear about that in your description.
                  </p>
                  <p>
                    4. Be aware of copyright, and that styling things to be like another artist
                    could feel like stealing their creative ideas. Think for yourself and do your
                    research about where that line is. Some tools won’t let you style work based on
                    another artist, for example.
                  </p>
                  <p>
                    5. Remember image generation tools are still growing and policies are still
                    changing as the tech develops. They aren’t perfect, and you can check out the
                    use policies and regulations of the tool you are using if you are unsure.
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
              Go further and learn more about making images with AI
            </h2>
            <div className="mt-16 flex flex-col flex-wrap items-center gap-8 sm:space-y-6 md:ml-10 md:flex-row md:space-y-6">
              {imageResultData.map((item, index) => (
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
