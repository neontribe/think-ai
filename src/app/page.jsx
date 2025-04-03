'use client';

import Header from './components/Header';
import TwoColLayout from '@/app/components/TwoColLayout';
import Image from 'next/image';
import SplashImage from '@/app/assets/SplashImage.png';
import RouteButton from '@/app/components/RouteButton';

export default function Home() {
  return (
    <div className="full-width-container">
      <Header />
      <div className="constrained-width-container">
        <TwoColLayout containerClass="flex-col-reverse items-start md:items-center p-6 md:p-12">
          <div id="leftColumn">
            <p className="pb-6 text-4xl leading-[1.5] font-semibold md:pb-12 md:text-5xl">
              Learn <span className="text-[#87E2D9] md:ml-2">how to use generative AI</span> while
              you use it
            </p>

            <nav
              className="flex w-full flex-wrap justify-center gap-2 md:gap-8"
              aria-label="Choose how to explore"
            >
              <RouteButton ariaLabel="generate an image" href="/process/query/image-generation">
                generate an image
              </RouteButton>
              <RouteButton ariaLabel="generate some text" href="/process/query/summary-text">
                generate text
              </RouteButton>
            </nav>
          </div>
          <div id="rightColumn">
            <Image src={SplashImage} alt="" className="h-auto max-w-full" />
          </div>
        </TwoColLayout>
      </div>
    </div>
  );
}
