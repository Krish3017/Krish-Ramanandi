import React from "react";

export const Footer: React.FC = () => {
  const scrollToSection = (id: string) => {
    if (id === "hero") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <footer className="w-full bg-[#111111] text-[#F7F3EA] border-t border-[#222222]">
      <div className="max-w-[1300px] mx-auto w-full px-6 sm:px-10 lg:px-[60px] xl:px-[80px] pt-8 pb-6">
        {/* Big Name — centered */}
        <h2 className="font-editorial-headline text-5xl sm:text-6xl md:text-7xl font-normal text-[#F7F3EA] mb-6 text-center tracking-tight">
          Krish Ramanandi
        </h2>

        {/* Top Border Line */}
        <div className="border-t border-[#333333] pt-6">
          {/* 4-Column Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-6">
            {/* About blurb */}
            <div>
              <p className="font-sans text-[13.5px] sm:text-[14px] leading-[1.55] text-[#C8C2B4]">
                An AI Engineer in Surat, India. Building AI agents, full-stack applications, and automation systems. This broadsheet is hand-set in Caslon and Franklin.
              </p>
            </div>

            {/* Sections */}
            <div>
              <p className="font-mono-meta text-[11px] tracking-[0.2em] text-[#888888] uppercase mb-2">
                SECTIONS
              </p>
              <ul className="space-y-1.5 font-newspaper-title text-[15.5px] sm:text-[16.5px] text-[#F7F3EA]">
                <li>
                  <button
                    onClick={() => scrollToSection("work")}
                    className="magnify-hover hover:text-[#C8C2B4] transition-colors text-left"
                  >
                    Selected Works
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("stack")}
                    className="magnify-hover hover:text-[#C8C2B4] transition-colors text-left"
                  >
                    The Stack
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("career")}
                    className="magnify-hover hover:text-[#C8C2B4] transition-colors text-left"
                  >
                    Career Ledger
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("evidence")}
                    className="magnify-hover hover:text-[#C8C2B4] transition-colors text-left"
                  >
                    Evidence Board
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("contact")}
                    className="magnify-hover hover:text-[#C8C2B4] transition-colors text-left"
                  >
                    Contact
                  </button>
                </li>
              </ul>
            </div>

            {/* The Desk */}
            <div>
              <p className="font-mono-meta text-[11px] tracking-[0.2em] text-[#888888] uppercase mb-2">
                THE DESK
              </p>
              <ul className="space-y-1.5 font-newspaper-title text-[15.5px] sm:text-[16.5px] text-[#F7F3EA]">
                <li>Surat, India</li>
                <li>IST · Remote-friendly</li>
                <li className="text-[14px] font-mono break-all text-[#C8C2B4]">
                  krishramanandi30@gmail.com
                </li>
              </ul>
            </div>

            {/* Wire Services */}
            <div>
              <p className="font-mono-meta text-[11px] tracking-[0.2em] text-[#888888] uppercase mb-2">
                WIRE SERVICES
              </p>
              <ul className="space-y-1.5 font-newspaper-title text-[15.5px] sm:text-[16.5px] text-[#F7F3EA]">
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

          {/* Wavy Hand-Stamped CASE CLOSED Stamp — Centered */}
          <div className="flex justify-center my-6 py-2">
            <div className="relative group cursor-pointer -rotate-[4deg] hover:rotate-0 transition-transform duration-300 drop-shadow-md">
              <svg
                width="220"
                height="56"
                viewBox="0 0 220 56"
                className="overflow-visible"
              >
                {/* Solid paper background fill with shallow multi-curve wavy border */}
                <path
                  d="M 6 8 Q 35 6, 65 10 T 110 7 T 155 10 T 212 8 C 216 20, 213 36, 215 48 Q 160 45, 110 49 T 55 45 T 6 48 C 3 36, 7 20, 6 8 Z"
                  fill="#1A1816"
                  stroke="#A8382B"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                {/* Subtle inner accent stroke line */}
                <path
                  d="M 5 7 Q 36 5, 64 9 T 111 6 T 154 9 T 213 7 C 217 21, 212 37, 216 49 Q 161 44, 109 48 T 54 44 T 5 47 C 2 35, 6 19, 5 7 Z"
                  fill="none"
                  stroke="#A8382B"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                {/* Stamped Text CASE CLOSED */}
                <text
                  x="110"
                  y="34"
                  textAnchor="middle"
                  fill="#A8382B"
                  fontSize="17.5"
                  fontWeight="800"
                  fontFamily="'Permanent Marker', 'Special Elite', 'IBM Plex Mono', cursive, monospace"
                  letterSpacing="3.5"
                >
                  CASE CLOSED
                </text>
              </svg>
            </div>
          </div>

          {/* Bottom Row: Left Copyright, Right 3 Square Action Icon Boxes */}
          <div className="border-t border-[#333333] pt-5 flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="font-mono-meta text-[10px] sm:text-[11px] text-[#888888] tracking-widest uppercase">
              &copy; {new Date().getFullYear()} KRISH RAMANANDI · ALL RIGHTS RESERVED
            </div>

            {/* Square Icon Buttons on Bottom Right */}
            <div className="flex items-center gap-2.5">
              {/* GitHub Box */}
              <a
                href="https://github.com/Krish3017"
                target="_blank"
                rel="noopener noreferrer"
                title="GitHub Profile"
                className="w-9 h-9 sm:w-10 sm:h-10 border border-[#444444] bg-[#161616] hover:bg-[#252525] hover:border-[#F7F3EA] text-[#F7F3EA] transition-all duration-200 flex items-center justify-center group"
              >
                <svg className="w-4 h-4 fill-current group-hover:scale-110 transition-transform" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                </svg>
              </a>

              {/* LinkedIn Box */}
              <a
                href="https://www.linkedin.com/in/krish-ramanandi"
                target="_blank"
                rel="noopener noreferrer"
                title="LinkedIn Profile"
                className="w-9 h-9 sm:w-10 sm:h-10 border border-[#444444] bg-[#161616] hover:bg-[#252525] hover:border-[#F7F3EA] text-[#F7F3EA] transition-all duration-200 flex items-center justify-center group"
              >
                <svg className="w-4 h-4 fill-current group-hover:scale-110 transition-transform" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.7a1.62 1.62 0 1 0 0 3.24 1.62 1.62 0 0 0 0-3.24z"/>
                </svg>
              </a>

              {/* Fingerprint Box (Reload Page) */}
              <button
                onClick={() => window.location.reload()}
                title="Click Fingerprint to Reload Page"
                className="w-9 h-9 sm:w-10 sm:h-10 border border-[#444444] bg-[#161616] hover:bg-[#A8382B] hover:border-[#A8382B] text-[#F7F3EA] transition-all duration-200 flex items-center justify-center group relative"
              >
                <svg className="w-4 h-4 stroke-current fill-none group-hover:scale-110 transition-transform" viewBox="0 0 24 24" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 10a2 2 0 0 0-2 2c0 1.02-.1 2.51-.26 4"/>
                  <path d="M14 13.12c0 2.38 0 6.38-1 8.88"/>
                  <path d="M17.29 21.02c.12-.6.43-2.3.43-5.02 0-3.03-.2-4.97-2.18-6.57a7.22 7.22 0 0 0-7.08-.82"/>
                  <path d="M6.5 9a7 7 0 0 1 11.23-2.36"/>
                  <path d="M12 2a10 10 0 0 0-9.95 9"/>
                  <path d="M2.5 16c.45 2.1 1.5 4.5 3 6.5"/>
                  <path d="M21.5 16c-.5 2.1-1.5 4.5-3 6.5"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};