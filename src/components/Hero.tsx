import React from "react";
import profileImg from "../assets/profile.jpeg";
import { MetricsStrip } from "./MetricsStrip";

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="w-full pt-3 pb-3">
      <div className="max-w-[1300px] mx-auto w-full px-6 sm:px-10 lg:px-[60px] xl:px-[80px]">
        {/* Front Page Header Bar */}
        <div className="flex justify-between items-center text-[11px] md:text-[12px] font-mono-meta tracking-[0.2em] text-[#111111] pb-1.5 mb-1.5 border-b border-[#111111] uppercase">
          <span className="font-semibold">FRONT PAGE</span>
          <span className="text-[#555555]">FILED UNDER: OPEN INVESTIGATIONS</span>
        </div>

        {/* Main Split Grid (65% Left / 35% Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 pt-0">
          {/* LEFT COLUMN */}
          <div className="lg:col-span-7 xl:col-span-8 flex flex-col justify-between pr-0 lg:pr-6">
            <div>
              {/* Case Tag */}
              <p className="font-mono-meta text-[11px] md:text-[12px] tracking-[0.2em] font-bold text-[#111111] uppercase mb-1.5 md:mb-2">
                CASE NO. 107 — FINDINGS PUBLISHED
              </p>

              {/* Main Editorial Headline */}
              <h2 className="font-editorial-headline text-[2.5rem] xs:text-[2.9rem] sm:text-[4.2rem] md:text-[5rem] lg:text-[5.6rem] leading-[0.88] text-[#111111] font-normal tracking-[-0.03em] mb-2 md:mb-3">
                An AI & <br />
                Full Stack Engineer <br />
                building<br />
                intelligent systems—<br />
                <span className="italic font-normal">beyond code.</span>
              </h2>

              {/* Pull Quote with Left Border */}
              <div className="border-l-2 border-[#111111] pl-4 md:pl-5 py-0.5 my-2 md:my-2.5 max-w-2xl">
                <p className="font-editorial-headline text-[1.4rem] sm:text-[1.7rem] md:text-[1.9rem] leading-[1.15] italic text-[#222222]">
                 Designing AI agents, enterprise applications, and automation systems that turn ambitious ideas into production-ready software.
                </p>
              </div>

              {/* Byline */}
              <p className="font-mono-meta text-[10px] sm:text-[11px] md:text-[12px] tracking-[0.18em] text-[#111111] font-semibold uppercase mb-2 md:mb-2.5">
                BY <span className="underline">THE INVESTIGATION DESK</span> · REPORTING FROM SURAT
              </p>
            </div>

            <div>
              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-0 mb-4">
                <button 
                  onClick={() => {
                    const el = document.getElementById("work");
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="magnify-hover bg-[#111111] text-[#F7F3EA] border border-[#111111] px-6 sm:px-8 py-2.5 font-mono-meta text-[11px] sm:text-[12px] tracking-[0.2em] font-semibold hover:bg-[#333333] hover:underline transition-all cursor-pointer"
                >
                  READ THE WORK &rarr;
                </button>

                <button 
                  onClick={() => {
                    const el = document.getElementById("contact");
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="magnify-hover bg-[#EBE4D5] text-[#111111] border border-[#111111] px-6 sm:px-8 py-2.5 font-mono-meta text-[11px] sm:text-[12px] tracking-[0.2em] font-semibold hover:bg-[#111111] hover:text-[#F7F3EA] hover:underline transition-all cursor-pointer"
                >
                  GET IN TOUCH
                </button>
              </div>

              {/* Metrics Strip */}
              <MetricsStrip variant="hero" />
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="lg:col-span-5 xl:col-span-4 border-t lg:border-t-0 lg:border-l border-[#111111] pt-2 lg:pt-0 lg:pl-8 flex flex-col">
            {/* Newspaper Image Frame */}
            <div className="border border-[#111111] p-2.5 bg-[#EFE9DC] mb-1">
              <div className="border border-[#111111] bg-[#F7F3EA] overflow-hidden">
                <img 
                  src={profileImg} 
                  alt="Krish Ramanandi — Subject in his natural habitat" 
                  loading="eager"
                  fetchPriority="high"
                  decoding="sync"
                  width="400"
                  height="450"
                  className="w-full h-auto object-cover filter grayscale contrast-110"
                />
              </div>
            </div>

            {/* Caption */}
            <p className="font-mono-meta text-[10px] tracking-[0.16em] text-[#555555] mt-1 mb-1.5 uppercase">
              <span className="font-bold text-[#111111]">PICTURED:</span> the subject, in his natural habitat.
            </p>

            {/* Article */}
            <div className="font-sans text-[13.5px] leading-[1.55] text-[#222222] space-y-2.5 text-justify">
              <p className="drop-cap-k">
                He builds AI agents, intelligent automation systems, and full-stack applications that transform ambitious ideas into reliable, production-ready software. Every solution is designed with scalability, usability, and long-term maintainability in mind.
              </p>

              <p>
                From multi-agent AI workflows and retrieval-augmented generation (RAG) systems to enterprise platforms and cloud-native applications, his work reflects a consistent focus on clean architecture, thoughtful engineering, and solving meaningful real-world problems.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};