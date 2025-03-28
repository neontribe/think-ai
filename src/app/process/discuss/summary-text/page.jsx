'use client';

import { useRouter } from 'next/navigation';
import { useGlobalState } from "@/app/contexts/GlobalStateProvider";
import ProcessGuard from "@/app/components/ProcessGuard";
import ThreeRowLayout from "@/app/components/ThreeRowLayout";
import Header from '@/app/components/Header';
import Image from 'next/image';
import ResponseCarousel from '@/app/components/ResponseCarousel';
import ExpandAccordion from '@/app/components/Accordian';
import Star from "@/app/assets/Star.png"
import LearnBox from '@/app/components/LearnBox';
import summaryResultData from '@/app/data/summaryResultData'
import Link from 'next/link';


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
          <h2 className="text-[16pt] font-bold md:ml-10">
            Let’s dive deeper into this answer
          </h2>
      
          {/* LEFT + RIGHT layout */}
          <div className="flex flex-col-reverse md:flex-row items-center">
            
            {/* LEFT */}
            <div className="z-20 w-[90%] -mt-5 md:mt-0 md:w-[60%] md:-mr-5">
              <ResponseCarousel slideData={slides} />
            </div>
      
            {/* RIGHT */}
            <div className="md:w-full flex">
              {modelType === "summary" && promptResponseContent && (
                <div className="relative w-full max-w-xl bg-white rounded-2xl shadow-md overflow-hidden">
                  {/* Scrollable content */}
                  <div className="max-h-[420px] overflow-y-auto p-6 space-y-4">
                    {promptResponseContent
                      .split(/\n\s*\n|\. /g)
                      .map((paragraph, index) =>
                        paragraph.trim() ? (
                          <p key={index} className="text-[#23009F] leading-normal">
                            {paragraph}
                          </p>
                        ) : null
                      )}
                  </div>
      
                  {/* fade gradient */}
                  <div className="pointer-events-none absolute bottom-0 left-0 w-full h-20 bg-gradient-to-b from-transparent via-white/60 via-white to-[#23009F]"></div>
                </div>
              )}
            </div>
          </div>
        </div>
      }
      


        middle={
          <div className="gap-4 w-full flex flex-col md:flex-row items-center">
            <div className="flex flex-col gap-4 w-full md:w-3/4 md:ml-8">
            <h2 className="text-[16pt] font-bold mb-4">
              Take some time to reflect
            </h2>
            <ExpandAccordion text="Let's stop and think back">
              <div className="mt-2 px-4 pb-4 space-y-2">
                <p className="mt-1">1. What have you learnt about generating text with ai?</p>
                <p>2. Will you use text generation ai in your life? Is it helpful for some things and not others?</p>
              </div>
            </ExpandAccordion>

            <ExpandAccordion text="Think about what comes next">
              <div className="mt-2 px-4 pb-4 space-y-2">
                <p>1. You might jump into learning more about how it works, check out the guides below.</p>
                <p>2. You might want to experiment with generating text and trying to get more fair results.<br /> If you feel confident on how to generate text and what to be aware of, check out other tools like,&nbsp;
                <a href="https://openai.com/index/gpt-4/"
                   target="_blank"
                   rel="noopener noreferrer"
                   className="text-[#65E1F1] hover:underline"
                >GPT-4</a>,&nbsp;  
                 <a href="https://gemini.google.com/"
                   target="_blank"
                   rel="noopener noreferrer"
                   className="text-[#65E1F1] hover:underline"
                >Google’s Gemin</a> or&nbsp;
                <a href="https://claude.ai/login?returnTo=%2F%3F"
                   target="_blank"
                   rel="noopener noreferrer"
                   className="text-[#65E1F1] hover:underline"
                >Claude</a> for more advanced features.</p>
                <p>3. You could leave it there with text and learn more about another type of generative AI with us,&nbsp;
                  <Link
                    ariaLabel="generate some text"
                    className="underline text-[#65E1F1] hover:underline"
                    href="/process/query/image-generation">image generation
                  </Link>.
                </p>
              </div>
            </ExpandAccordion>

            <ExpandAccordion text="If you do use ai to generate text,  try following these points">
              <div className="mt-2 px-4 pb-4 space-y-2">
                <p>1. Make sure you describe your request clearly and in detail, so the AI knows exactly what you're asking for.</p>
                <p>2. Be aware that the AI has learned from lots of text, so it may reflect certain ideas, stereotypes, or one-sided views from what it’s seen before. For example, if you ask the AI about political leaders, it might unintentionally favour certain political parties or views more than others, because it’s seen more examples of those ideas before.</p>
                <p>3. If you want to avoid the AI being one-sided, be clear in your question to guide it toward a more balanced answer.</p>
                <p>4. AI text generation can sometimes use harmful stereotypes or be unfair to certain groups, like assuming things about people based on their race, gender, or background. Be mindful of how the AI might shape its answers and try to ask in ways that avoid one-sided views.</p>
                <p>5. Remember, text generation tools are still improving, and the rules around them are changing as the technology grows. They aren’t perfect, so it’s always a good idea to review the policies and guidelines of the tool you’re using if you're unsure.</p>
              </div>
            </ExpandAccordion>
            </div>

            <div className="flex flex-col md:w-1/3 items-center mt-4 md:mt-0 md:ml-10">
            <Image
            src={Star}
            alt="Decorative star"
            className="w-[86px] h-[94px] md:w-[177px] md:h-[193px]"
            />
            </div>
          </div>
        }
        bottom={
        <div className="w-full mx-auto px-2">
          <h2 className="text-[16pt] font-bold md:ml-10">
            Go further and learn more about generating text with AI
            </h2>
            <div className="flex flex-col md:flex-row flex-wrap md:ml-10 gap-8 mt-16 md:space-y-6 sm:space-y-6 items-start">
            {summaryResultData.map((item, index) => (
              <LearnBox
              key={index}
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
