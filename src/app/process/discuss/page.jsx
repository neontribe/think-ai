'use client';

import { useRouter } from 'next/navigation';
import { useGlobalState } from "@/app/contexts/GlobalStateProvider";
import ProcessGuard from "@/app/components/ProcessGuard";
import ThreeRowLayout from "@/app/components/ThreeRowLayout";
import Header from '@/app/components/Header';
import Image from 'next/image';
import ResponseCarousel from '@/app/components/ResponseCarousel';
import ExpandAccordion from '@/app/components/Accordian';
import CustomImage from '@/app/components/CustomImage';
import Star from "@/app/assets/Star.png"

  const Discuss = () => {
    const router = useRouter();
    const { state } = useGlobalState();
    const { responseData } = state;
    const { modelType, promptResponseContent, splitRiskPoints } = responseData;

  const slides = splitRiskPoints.filter(Boolean).map((risk, index) => ({
    number: index + 1,
    paragraph: risk,
  }));

  

  return (
    <>
      <Header />
      <ThreeRowLayout
        top={
          <div className="flex flex-col gap-6">
            <h2 className="text-2xl font-bold mb-4 ml-15">
              Let’s Dive Deeper Into This Image
            </h2>
        
            {/* LEFT*/}
            <div className="relative flex flex-col md:flex-row">
              <div className="md:w-1/2 relative z-20 md:w-[80%] md:-mr-30">
                <ResponseCarousel slideData={slides} />
              </div>
        
              {/* RIGHT */}
              <div className="md:w-1/2 flex md:justify-start md:-mt-8">
                {modelType === 'image-generation' && promptResponseContent && (
                  <Image
                    src={promptResponseContent}
                    alt="Requested asset"
                    width={379}
                    height={379}
                    className="rounded-lg shadow-md"
                  />
                )}
              </div>
            </div>
          </div>
        }
        
        middle={
          <div className="gap-4 w-full flex flex-col md:flex-row">
            <div className='flex flex-col gap-4 w-full md:w-3/4 ml-10'>
            <h2 className="text-2xl font-bold mb-4">
              Take some time to reflect
            </h2>
            <ExpandAccordion text="Let's stop and think back">
              <div className="mt-2 px-4 pb-4">
                <p>1. What have you learnt about making image with ai?</p>
                <p>2. Will you use ai for image generation? Is it helpul for osme things and not others?</p>
              </div>
            </ExpandAccordion>

            <ExpandAccordion text="Think about what comes next">
              <div className="mt-2 px-4 pb-4">
                <p>1. You might jump into learning more about how it works, check out the guides below.</p>
                <p>2. You might want to experiment with making images and trying to get more fair results.</p>
                <p>If you feel confident on how to generate images and what to be aware of, check out other tools like 
                  <a 
                  href="https://www.adobe.com/uk/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                  >Adobe Firefly</a>, 
                  or {' '} <a 
                  hrfe="https://www.midjourney.com/home"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                  >Mid Journey</a>{' '}
                  for more advanced features.</p>
                <p>3. You could leave it there with images and learn more about another type of generative AI with us, like text generation.</p>
              </div>
            </ExpandAccordion>

            <ExpandAccordion text="If you do make images with ai, try following these points">
              <div className="mt-2 px-4 pb-4">
                <p>1. Make sure you describe the features and layout of your image clearly and in detail.</p>
                <p>2. Be aware of the fact that the AI will already have ideas about the type of people, things or places you want to make from the images it’s scanned before. For example, ai might produce more images of doctors that are white middle age men than any other appearance, because so are most images it’s seen of doctors before.</p>
                <p>3. If you don’t want ai to unfairly weight the image result towards what it’s learnt before, then be clear about that in your description.</p>
                <p>4. Be aware of copyright, and that styling things to be like another artist could feel like stealing their creative ideas. Think for yourself and do your research about where that line is. Some tools won’t let you style work based on another artist, for example.</p>
                <p>5. Remember image generation tools are still growing and policies are still changing as the tech develops. They aren’t perfect, and you can check out the use policies and regulations of the tool you are using if you are unsure.</p>
              </div>
            </ExpandAccordion> 
            </div>

            <div className="hidden md:flex md:w-1/3 items-end ml-30">
            <CustomImage
            src={Star}
            alt="Decorative star"
            width={150}
            height={150}
            />
            </div>
          </div>
        }
        bottom={
          <div className="flex">
            <button
              className="bg-[#63E2F1] text-[#1B0080] px-6 py-3 w-[171px] h-[48px] text-lg inline-flex items-center justify-center font-bold rounded-full transition duration-300 hover:bg-[#9747FF] hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#9747FF]"
              type="button"
              onClick={() => router.push('/process/query')}
            >
              Start again
            </button>
          </div>
        }
      />
    </>
  );
};

export default ProcessGuard(Discuss);

