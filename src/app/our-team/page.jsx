'use client';

import Header from "../components/Header";
import Image from "next/image";
import BeatsBusLogo from "../assets/logos/beats-bus-625.png";
import CastLogo from "../assets/logos/cast-500.png";
import NcsLogo from "../assets/logos/ncs-500.png";
import NeonTribeLogo from "../assets/logos/neontribe-500.png";
import PoliticsProjectLogo from "../assets/logos/politics-project-500.png";
import WarringtonYZLogo from "../assets/logos/warrington-yz-large.png";

export default function OurTeamPage() {
  return (<div>
    <Header hideLinks={false}/>
    <section className="flex flex-col items-center text-2xl bg-[#291498] pt-16 pb-16">
      <div className="w-2/3 space-y-8">
        <h1 className="text-5xl leading-[1.5] font-semibold text-white">
          Our Team
        </h1>
        <p>
          We want to say a huge thank you to all the young people from Warrington Youth Zone, Politics Project, and Beats Bus for being a big part of our collaborative generative AI project!
        </p>
      </div>
    </section>
    <section className="flex flex-col items-center text-2xl pt-16 pb-16">
      <div className="w-2/3 space-y-8">
        <p>
          You were an important part of creating a tool that will go on to help other young people think carefully and critically about AI (artificial intelligence). You helped make something special, and we couldn’t have done it without you!
        </p>
        <p>
          From the start, you showed so much excitement and interest in learning and sharing about AI. We loved how you jumped right in, shared ideas, asked smart questions, and worked together to help build something new. You were not just part of the project—you were the heart of it. Whether you were brainstorming ideas with idea napkins, testing things out with us, or giving feedback, your effort and creativity helped make the project a success.
        </p>
        <p>
          This project wasn’t just about creating a tool; it was about helping you understand how AI works, why it matters, and how we should think about it. Your ideas have helped build a tool that will encourage other young people to think carefully about AI too. By being part of this project, you’ve shown that young people are not just users of technology but also creators and problem-solvers. You are helping guide how technology, like AI, will grow in the future.
        </p>
        <p>
          It was amazing to see how everyone worked together. Whether you were from Warrington Youth Zone, Politics Project, or Beats Bus, you all brought something unique to the table. Everyone respected each other’s ideas and worked in a fun, supportive way, guided brilliantly by our youth organisation leads.
        </p>
        <p>
          Once again, thank you to each and every one of you for being such an amazing part of this project and joining with Neontribe, CAST and NCS on this journey!
        </p>
      </div>
    </section>
    <footer className="bg-white h-32 md:h-48 flex items-center justify-center p-3 md:p-4">
      <div className=" flex flex-row justify-center items-center gap-3 md:gap-6 h-full">
        <Image src={PoliticsProjectLogo} alt="The Politics Project" className="w-1/6 max-h-full object-contain" />
        <Image src={BeatsBusLogo} alt="Beats Bus" className="w-1/12 max-h-full object-contain" />
        <Image src={WarringtonYZLogo} alt="Warrington Youth Zone" className="w-1/12 max-h-full object-contain" />
        <Image src={NeonTribeLogo} alt="NeonTribe" className="w-1/6 max-h-full object-contain" />
        <Image src={CastLogo} alt="CAST" className="w-1/12 max-h-full object-contain" />
        <Image src={NcsLogo} alt="NCS" className="w-1/12 max-h-full object-contain" />
      </div>
    </footer>
  </div>);
}
