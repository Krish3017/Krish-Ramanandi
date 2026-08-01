import React from "react";

export const Masthead: React.FC = () => {
  const getFormattedDate = () => {
    const now = new Date();
    const weekday = now.toLocaleDateString("en-US", { weekday: "long" }).toUpperCase();
    const day = now.getDate();
    const month = now.toLocaleDateString("en-US", { month: "long" }).toUpperCase();
    const year = now.getFullYear();
    return `${weekday} ${day} ${month} ${year}`;
  };

  return (
    <header className="w-full pt-4 pb-1">
      <div className="max-w-[1300px] mx-auto w-full px-6 sm:px-10 lg:px-[60px] xl:px-[80px]">
        {/* Top Metadata Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center text-[10px] sm:text-[11px] md:text-[12px] font-mono-meta tracking-[0.2em] text-[#111111] pb-1.5 border-b border-[#111111]">
          <span>SURAT, INDIA</span>
          <span className="font-semibold my-0.5 sm:my-0">THE INVESTIGATION EDITION</span>
          <span>EST. 2026</span>
        </div>

        {/* Main Title: Krish Ramanandi */}
        <div className="text-center py-3 sm:py-4 md:py-5">
          <h1 className="font-newspaper-title text-[3.2rem] sm:text-[4.5rem] md:text-[5.5rem] lg:text-[6.5rem] leading-[0.85] font-normal tracking-[-0.03em] text-[#111111] select-none">
            Krish Ramanandi
          </h1>
          <p className="font-mono-meta text-[12px] sm:text-[14px] md:text-[16px] tracking-[0.35em] text-[#333333] mt-1 uppercase font-bold">
            THE PERSONAL RECORD OF AN AI ENGINEER
          </p>
        </div>

        {/* Information Strip */}
        <div className="border-t-2 border-b-2 border-[#111111] py-1">
          <div className="flex flex-wrap justify-center items-center gap-2 md:gap-6 text-[11.5px] sm:text-[13px] font-bold font-mono-meta tracking-[0.18em] text-[#222222] text-center">
            <span>{getFormattedDate()}</span>
            <span className="hidden sm:inline">•</span>
            <span>VOL. I</span>
            <span className="hidden sm:inline">•</span>
            <span>SELECTED WORKS & NOTES</span>
            <span className="hidden sm:inline">•</span>
            <span>PRICE: ONE COFFEE</span>
          </div>
        </div>
      </div>
    </header>
  );
};
