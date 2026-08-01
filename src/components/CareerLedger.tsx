import React from "react";

interface CareerEntry {
  period: string;
  role: string;
  organization: string;
  description: string;
}

export const CareerLedger: React.FC = () => {
  const ledgerEntries: CareerEntry[] = [
    {
      period: "Apr 2026 — Now",
      role: "Founder & Web Developer",
      organization: "PROJECT 43",
      description:
        "Subject last seen founding a small studio to take on more than standard websites — he looks after the web work while the team handles fuller application builds for clients.",
    },
    {
      period: "2024 — Now",
      role: "AI & Full-Stack Engineer",
      organization: "INDEPENDENT CONTRACTS (GLOBAL)",
      description:
        "Observed daily, building web applications — the storefront, quoting engine and an interactive 3D design platform — working across both front-end and back-end.",
    },
    {
      period: "2022 — 2024",
      role: "Software Developer",
      organization: "SURAT TECH BUREAU",
      description:
        "First recorded appearance. Ran shifts at the engineering desk — leading a team, keeping service tight under pressure, and learning the trade before the code.",
    },
  ];

  return (
    <section id="career" className="w-full py-5 md:py-6 bg-[#F7F3EA]">
      <div className="max-w-[1300px] mx-auto w-full px-6 sm:px-10 lg:px-[60px] xl:px-[80px]">
        {/* Section Header */}
        <div className="flex justify-between items-end pb-2">
          <div>
            <span className="font-mono-meta text-[11px] md:text-[12px] tracking-[0.2em] font-bold text-[#111111] uppercase">
              KNOWN WHEREABOUTS
            </span>
            <h2 className="font-newspaper-title text-4xl md:text-5xl lg:text-6xl text-[#111111] font-normal mt-0.5">
              The Career Ledger
            </h2>
          </div>
          <span className="font-mono-meta text-[10px] md:text-[11px] tracking-[0.18em] text-[#555555] font-semibold uppercase hidden sm:inline">
            MOVEMENTS ON RECORD SINCE 2022
          </span>
        </div>

        {/* Thick Double Line Rule */}
        <div className="border-b-4 border-[#111111] mb-2" />
        <div className="border-b border-[#111111] mb-6" />

        {/* Ledger Entries List */}
        <div className="divide-y divide-[#C8C2B4] border-b border-[#C8C2B4]">
          {ledgerEntries.map((entry) => (
            <div
              key={entry.organization}
              className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 py-6 hover:bg-[#F2ECE0]/50 transition-colors"
            >
              {/* Period Column */}
              <div className="md:col-span-3 font-mono-meta text-[11px] md:text-[12px] text-[#555555] tracking-wider pt-1">
                {entry.period}
              </div>

              {/* Role & Organization Column */}
              <div className="md:col-span-4">
                <h3 className="font-newspaper-title text-2xl md:text-3xl text-[#111111] font-normal leading-tight">
                  {entry.role}
                </h3>
                <span className="font-mono-meta text-[10px] md:text-[10.5px] font-bold text-[#111111] uppercase tracking-widest mt-1 block">
                  {entry.organization}
                </span>
              </div>

              {/* Journalistic Description Column */}
              <div className="md:col-span-5 font-sans text-[13.5px] leading-[1.65] text-[#333333] text-justify">
                {entry.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
