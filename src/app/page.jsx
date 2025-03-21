'use client';

import Header from "./components/Header";
import TwoColLayout from "@/app/components/TwoColLayout";
import Image from "next/image";
import SplashImage from "@/app/assets/SplashImage.png";
import Link from "next/link";
import RouteButton from "@/app/components/RouteButton";

export default function Home() {
  return (
    <div className="full-width-container">
      <Header/>
      <div className="constrained-width-container">
        <TwoColLayout>
          <div className="">
          <p className="text-5xl font-semibold leading-[1.5] pb-12">Learn <span className="text-[#87E2D9] md:ml-2">how to use generative AI</span> while you use it</p>

            <nav className="flex flex-col gap-2 md:flex-row md:gap-8 md:justify-between w-full" aria-label="Choose how to explore">
              <RouteButton
                ariaLabel="generate an image"
                href="/process/query?modelType=image-generation"
              >
                generate an image
              </RouteButton>
              <RouteButton
                ariaLabel="generate some text"
                href="/process/query?modelType=summary"
              >
                generate text
              </RouteButton>
            </nav>
          </div>
          <div>
            <Image src={SplashImage} alt=''/>
          </div>
        </TwoColLayout>
      </div>
    </div>
  );
}
