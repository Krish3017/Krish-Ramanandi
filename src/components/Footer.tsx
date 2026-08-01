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
                <li className="text-[15px] break-all">your.email@gmail.com</li>
              </ul>
            </div>

            {/* Wire Services */}
            <div>
              <p className="font-mono-meta text-[11px] tracking-[0.2em] text-[#888888] uppercase mb-2">
                WIRE SERVICES
              </p>
              <ul className="space-y-1.5 font-newspaper-title text-[17px] text-[#F7F3EA]">
                <li>
                  <a href="https://github.com/Krish3017" target="_blank" rel="noopener noreferrer" className="magnify-hover hover:text-[#C8C2B4] transition-colors">
                    GitHub
                  </a>
                </li>
                <li>
                  <a href="#" target="_blank" rel="noopener noreferrer" className="magnify-hover hover:text-[#C8C2B4] transition-colors">
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
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#444444] pt-4 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="font-mono-meta text-[10px] sm:text-[11px] tracking-[0.15em] text-[#888888] uppercase text-center sm:text-left">
            © 2026 THE KRISH RAMANANDI TIMES · ALL RIGHTS RESERVED · PRINTED IN SURAT
          </p>

          <div className="flex items-center gap-3">
            <a href="https://github.com/Krish3017" target="_blank" rel="noopener noreferrer" className="w-9 h-9 border border-[#444444] rounded-md flex items-center justify-center hover:border-[#F7F3EA] transition-colors">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="#F7F3EA">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
              </svg>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="w-9 h-9 border border-[#444444] rounded-md flex items-center justify-center hover:border-[#F7F3EA] transition-colors">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="#F7F3EA">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};