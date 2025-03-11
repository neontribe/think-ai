'use client';

import Link from "next/link";
import ArrowButton from "@/app/components/ArrowButton";
import ToggleButton from "@/app/components/ToggleButton";
import ResponseCarousel from "./components/ResponseCarousel";

export default function Home() {
  return (
    <div className="full-width-container">
      <div className="constrained-width-container">
        <h1>
          <span>Welcome to</span> <span>Think AI</span>
        </h1>
        <Link className="bg-[#63E2F1] text-[#1B0080] px-6 py-3 w-[171px] h-[48px] text-lg inline-flex items-center justify-center font-bold rounded-full transition durantion-300 hover:bg-[#9747FF] hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#9747FF]" href="/process/query">Start</Link>
      </div>
      <ArrowButton direction="right" />
      <ArrowButton direction="left" />
      <ArrowButton direction="up" />
      <ArrowButton direction="down" />
      <div className="flex items-center space-x-2">
        <ToggleButton
          labelLeft="Use in a group"
          labelRight="It's just me"
          ariaLabel="Toggle between group and individual mode"/>
      </div>
      <p className="text-2xl font-mono">Fonts</p>
      <div>
        <p className="text-6xl">the quick brown fox jumped over the lazy dog</p>
        <p className="text-5xl">the quick brown fox jumped over the lazy dog</p>
        <p className="text-4xl">the quick brown fox jumped over the lazy dog</p>
        <p className="text-3xl">the quick brown fox jumped over the lazy dog</p>
        <p className="text-3xl">THE QUICK BROWN FOX JUMPED OVER THE LAZY DOG</p>
        <p className="text-2xl">01234567890.:,;(&#34;*!?&#39;)</p>
        <p className="text-2xl">the quick brown fox jumped over the lazy dog</p>
        <p className="text-2xl font-semibold">the quick brown fox jumped over the lazy dog</p>
        <p className="text-2xl font-bold">the quick brown fox jumped over the lazy dog</p>
        <p className="">the quick brown fox jumped over the lazy dog</p>
        <p className="italic">the quick brown fox jumped over the lazy dog</p>
        <p className="italic">01234567890.:,;(&#34;*!?&#39;)</p>
      </div>
      <ResponseCarousel />
    </div>
  );
}
