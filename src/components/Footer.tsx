import React from "react";

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#111111] text-[#F7F3EA]">
      <div className="max-w-[1300px] mx-auto w-full px-6 sm:px-10 lg:px-[60px] xl:px-[80px] pt-8 pb-5">
        {/* Big Name — centered */}
        <h2 className="font-editorial-headline text-5xl md:text-6xl lg:text-7xl font-normal text-[#F7F3EA] mb-4 text-center">
          Krish Ramanandi
        </h2>

        <div className="border-t border-[#444444] pt-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {/* About blurb */}
            <div className="lg:col-span-1">
              <p className="font-sans text-[14px] leading-[1.55] text-[#C8C2B4]">
                An AI Engineer in Surat, India. Building AI agents, full-stack applications, and automation systems. This broadsheet is hand-set in Caslon and Franklin.
              </p>
            </div>

            {/* Sections */}
            <div>
              <p className="font-mono-meta text-[11px] tracking-[0.2em] text-[#888888] uppercase mb-2">
                SECTIONS
              </p>
              <ul className="space-y-1.5 font-newspaper-title text-[17px] text-[#F7F3EA]">
                <li>
                  <a href="#work" className="magnify-hover hover:text-[#C8C2B4] transition-colors">
                    Selected Works
                  </a>
                </li>
                <li>
                  <a href="#stack" className="magnify-hover hover:text-[#C8C2B4] transition-colors">
                    The Stack
                  </a>
                </li>
                <li>
                  <a href="#contact" className="magnify-hover hover:text-[#C8C2B4] transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* The Desk */}
            <div>
              <p className="font-mono-meta text-[11px] tracking-[0.2em] text-[#888888] uppercase mb-2">
                THE DESK
              </p>
              <ul className="space-y-1.5 font-newspaper-title text-[17px] text-[#F7F3EA]">
                <li>Surat, India</li>
                <li>IST · Remote-friendly</li>
                <li className="text-[15px] break-all">krishramanandi30@gmail.com</li>
              </ul>
            </div>

            {/* Wire Services */}
            <div>
              <p className="font-mono-meta text-[11px] tracking-[0.2em] text-[#888888] uppercase mb-2">
                WIRE SERVICES
              </p>
              <ul className="space-y-1.5 font-newspaper-title text-[17px] text-[#F7F3EA]">
                <li>
                  <a
                    href="https://github.com/Krish3017"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="magnify-hover hover:text-[#C8C2B4] transition-colors"
                  >
                    GitHub
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/krish-ramanandi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="magnify-hover hover:text-[#C8C2B4] transition-colors"
                  >
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Case Closed Stamp — wavy hand-drawn border */}
          <div className="flex justify-center py-6">
            <div className="relative px-6 py-2.5 -rotate-3">
              <svg
                className="absolute inset-0 w-full h-full"
                viewBox="0 0 220 70"
                preserveAspectRatio="none"
              >
                <path
                  d="M4,6 C20,2 40,8 60,4 C90,1 130,7 160,3 C180,1 200,6 216,4
                     C214,15 218,25 215,35 C217,45 213,55 216,64
                     C195,68 170,63 145,67 C110,70 75,64 45,68
                     C25,66 10,69 4,63
                     C7,50 2,38 5,28 C1,18 6,12 4,6 Z"
                  fill="none"
                  stroke="#B5573F"
                  strokeWidth="1.5"
                />
              </svg>
              <span className="relative font-newspaper text-lg sm:text-xl font-bold tracking-[0.15em] uppercase text-[#B5573F]">
                Case Closed
              </span>
            </div>
          </div>

          {/* Copyright row */}
          <div className="text-center font-mono-meta text-[10px] sm:text-[11px] text-[#888888] tracking-widest uppercase border-t border-[#333333] pt-4">
            &copy; {new Date().getFullYear()} KRISH RAMANANDI. ALL RIGHTS RESERVED.
          </div>
        </div>
      </div>
    </footer>
  );
};