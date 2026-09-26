import React, { useState } from "react";
import { motion } from "framer-motion";
import { evidenceItemsData, type EvidenceItemData } from "../data/evidenceData";

interface EvidenceBoardProps {
  onOpenCase?: (exhibitName: string) => void;
}

export const EvidenceBoard: React.FC<EvidenceBoardProps> = ({ onOpenCase }) => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [zoomingId] = useState<string | null>(null);

  const handleInspect = (item: EvidenceItemData) => {
    if (onOpenCase) {
      onOpenCase(item.exhibitKey);
    }
  };

  return (
    <section id="evidence" className="w-full py-8 md:py-14 bg-transparent relative overflow-hidden">
      <div className="max-w-[1020px] mx-auto w-full px-4 sm:px-8 lg:px-10">
        {/* Section Header */}
        <div className="border-b border-[#111111] pb-3 mb-5">
          <div className="flex justify-between items-end">
            <div>
              <span className="font-mono-meta text-[11px] md:text-[12px] tracking-[0.22em] font-bold text-[#8A3B2D] uppercase block">
                THE INVESTIGATION WALL · EVIDENTIARY ARCHIVE
              </span>
              <h2 className="font-newspaper-title text-3xl sm:text-4xl md:text-5xl text-[#111111] font-normal mt-0.5 tracking-tight">
                The Evidence Board
              </h2>
            </div>
            <span className="font-mono-meta text-[10px] md:text-[11px] tracking-[0.18em] text-[#555555] uppercase hidden sm:inline">
              RECOVERED ARTIFACTS · 8 ITEMS PINNED
            </span>
          </div>
          <p className="font-sans text-[13.5px] sm:text-[14.5px] text-[#444444] mt-1 max-w-3xl">
            Major breakthroughs collected throughout the investigation. Click any evidence to inspect the complete case file.
          </p>
        </div>

        {/* Investigation Archive Wall Canvas */}
        <div className="relative w-full max-w-[940px] mx-auto bg-[#FAF7F2] border-2 border-[#111111] shadow-[inset_0_2px_15px_rgba(0,0,0,0.06)] rounded-sm p-3 sm:p-4 md:p-5 pb-2.5 sm:pb-3 md:pb-3.5 overflow-hidden select-none">
          {/* Archival Grid Overlay */}
          <div 
            className="absolute inset-0 opacity-[0.18] pointer-events-none"
            style={{
              backgroundImage: `radial-gradient(#111 1px, transparent 1px)`,
              backgroundSize: "24px 24px"
            }}
          />

          {/* Coffee Ring Stain Micro-Detail */}
          <svg className="absolute top-6 right-16 w-44 h-44 opacity-20 pointer-events-none overflow-visible rotate-12" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="42" fill="none" stroke="#8A3B2D" strokeWidth="6" strokeDasharray="3 2" />
            <circle cx="50" cy="50" r="39" fill="none" stroke="#6B2E23" strokeWidth="2" />
          </svg>

          {/* Archival Stamp Mark (Top Left) */}
          <div className="absolute top-3 left-6 pointer-events-none opacity-40 font-mono text-[9.5px] tracking-[0.3em] uppercase text-[#111111] border border-[#111111] px-2 py-0.5 rotate-[-2deg]">
            FILE ROOM 884-EV · EVIDENCE WALL NETWORK
          </div>

          {/* Red Rubber Stamp Mark: CONFIDENTIAL (Bottom Left) */}
          <div className="absolute bottom-5 left-6 pointer-events-none opacity-25 -rotate-12">
            <div className="border-2 border-[#A8382B] px-2.5 py-0.5 font-mono font-bold text-xs tracking-[0.35em] text-[#A8382B] uppercase">
              CONFIDENTIAL
            </div>
          </div>

          {/* Staggered Non-Row Canvas (Trimmed Max-Width & Compact Min-Height) */}
          <div className="relative max-w-[820px] mx-auto min-h-[480px] md:min-h-[520px]">

            {/* Interconnected Red Evidence Thread Network (SVG Layer precisely aligned to pin anchors) */}
            <svg viewBox="0 0 820 520" preserveAspectRatio="none" className="absolute inset-0 w-full h-full pointer-events-none z-10 overflow-visible block">
              {/* Thread 1: EV-001 (Top-Left) to EV-004 (Top-High-Center) */}
              <motion.path
                d={hoveredId === "ev-001" || hoveredId === "ev-004" ? "M 130 50 C 230 20, 330 15, 430 25" : "M 130 50 C 220 25, 340 18, 430 25"}
                fill="none"
                stroke="#A8382B"
                strokeWidth="2.2"
                strokeDasharray="5 1"
                strokeLinecap="round"
                className="transition-all duration-300 drop-shadow-[1px_2px_3px_rgba(0,0,0,0.3)]"
              />
              {/* Thread 2: EV-004 (Top-High-Center) to EV-003 (Top-Right) */}
              <motion.path
                d={hoveredId === "ev-004" || hoveredId === "ev-003" ? "M 430 25 C 530 15, 630 20, 715 35" : "M 430 25 C 520 18, 620 22, 715 35"}
                fill="none"
                stroke="#A8382B"
                strokeWidth="2.2"
                strokeDasharray="5 1"
                strokeLinecap="round"
                className="transition-all duration-300 drop-shadow-[1px_2px_3px_rgba(0,0,0,0.3)]"
              />
              {/* Thread 3: EV-001 (Top-Left) to EV-007 (Center Heart) */}
              <motion.path
                d={hoveredId === "ev-001" || hoveredId === "ev-007" ? "M 130 50 C 230 110, 330 140, 423 210" : "M 130 50 C 220 120, 320 150, 423 210"}
                fill="none"
                stroke="#A8382B"
                strokeWidth="2.2"
                strokeDasharray="5 1"
                strokeLinecap="round"
                className="transition-all duration-300 drop-shadow-[1px_2px_3px_rgba(0,0,0,0.3)]"
              />
              {/* Thread 4: EV-004 (Top-High-Center) to EV-007 (Center Heart) */}
              <motion.path
                d={hoveredId === "ev-004" || hoveredId === "ev-007" ? "M 430 25 C 440 90, 430 140, 423 210" : "M 430 25 C 435 95, 428 145, 423 210"}
                fill="none"
                stroke="#A8382B"
                strokeWidth="2.2"
                strokeDasharray="5 1"
                strokeLinecap="round"
                className="transition-all duration-300 drop-shadow-[1px_2px_3px_rgba(0,0,0,0.3)]"
              />
              {/* Thread 5: EV-001 (Top-Left) to EV-005 (Low-Left) */}
              <motion.path
                d={hoveredId === "ev-001" || hoveredId === "ev-005" ? "M 130 50 C 90 130, 100 200, 147 280" : "M 130 50 C 95 140, 105 210, 147 280"}
                fill="none"
                stroke="#A8382B"
                strokeWidth="2.2"
                strokeDasharray="5 1"
                strokeLinecap="round"
                className="transition-all duration-300 drop-shadow-[1px_2px_3px_rgba(0,0,0,0.3)]"
              />
              {/* Thread 6: EV-005 (Low-Left) to EV-007 (Center Heart) */}
              <motion.path
                d={hoveredId === "ev-005" || hoveredId === "ev-007" ? "M 147 280 C 240 240, 330 230, 423 210" : "M 147 280 C 230 250, 330 235, 423 210"}
                fill="none"
                stroke="#A8382B"
                strokeWidth="2.2"
                strokeDasharray="5 1"
                strokeLinecap="round"
                className="transition-all duration-300 drop-shadow-[1px_2px_3px_rgba(0,0,0,0.3)]"
              />
              {/* Thread 7: EV-003 (Top-Right) to EV-002 (Deep-Mid-Right) */}
              <motion.path
                d={hoveredId === "ev-003" || hoveredId === "ev-002" ? "M 715 35 C 750 110, 720 170, 662 230" : "M 715 35 C 740 115, 715 175, 662 230"}
                fill="none"
                stroke="#A8382B"
                strokeWidth="2.2"
                strokeDasharray="5 1"
                strokeLinecap="round"
                className="transition-all duration-300 drop-shadow-[1px_2px_3px_rgba(0,0,0,0.3)]"
              />
              {/* Thread 8: EV-007 (Center Heart) to EV-006 (Low-Right) */}
              <motion.path
                d={hoveredId === "ev-007" || hoveredId === "ev-006" ? "M 423 210 C 470 270, 520 320, 570 375" : "M 423 210 C 460 275, 515 325, 570 375"}
                fill="none"
                stroke="#A8382B"
                strokeWidth="2.2"
                strokeDasharray="5 1"
                strokeLinecap="round"
                className="transition-all duration-300 drop-shadow-[1px_2px_3px_rgba(0,0,0,0.3)]"
              />
              {/* Thread 9: EV-002 (Deep-Mid-Right) to EV-006 (Low-Right) */}
              <motion.path
                d={hoveredId === "ev-002" || hoveredId === "ev-006" ? "M 662 230 C 640 290, 605 330, 570 375" : "M 662 230 C 630 295, 595 335, 570 375"}
                fill="none"
                stroke="#A8382B"
                strokeWidth="2.2"
                strokeDasharray="5 1"
                strokeLinecap="round"
                className="transition-all duration-300 drop-shadow-[1px_2px_3px_rgba(0,0,0,0.3)]"
              />
              {/* Thread 10: EV-005 (Low-Left) to EV-008 (Low-Left-Center) */}
              <motion.path
                d={hoveredId === "ev-005" || hoveredId === "ev-008" ? "M 147 280 C 165 320, 195 355, 230 385" : "M 147 280 C 160 325, 190 360, 230 385"}
                fill="none"
                stroke="#A8382B"
                strokeWidth="2.2"
                strokeDasharray="5 1"
                strokeLinecap="round"
                className="transition-all duration-300 drop-shadow-[1px_2px_3px_rgba(0,0,0,0.3)]"
              />
              {/* Thread 11: EV-008 (Low-Left-Center) to EV-006 (Low-Right) */}
              <motion.path
                d={hoveredId === "ev-008" || hoveredId === "ev-006" ? "M 230 385 C 330 425, 470 420, 570 375" : "M 230 385 C 340 420, 460 415, 570 375"}
                fill="none"
                stroke="#A8382B"
                strokeWidth="2.2"
                strokeDasharray="5 1"
                strokeLinecap="round"
                className="transition-all duration-300 drop-shadow-[1px_2px_3px_rgba(0,0,0,0.3)]"
              />
            </svg>

            {/* Desktop Asymmetrical Organic Card Placements & Mobile Responsive Staggered Layout */}
            <div className="relative z-20 space-y-6 md:space-y-0">
              
              {/* ITEM 4: EV-004 — Odoo Hackathon 2025 (Top High Center) */}
              <div className="relative md:absolute md:top-[15px] md:left-[49%] md:-translate-x-1/2 z-25 mb-4 md:mb-0">
                <motion.div
                  initial={{ opacity: 0, y: 15, rotate: 3 }}
                  whileInView={{ opacity: 1, y: 0, rotate: 4 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  onHoverStart={() => setHoveredId("ev-004")}
                  onHoverEnd={() => setHoveredId(null)}
                  onClick={() => handleInspect(evidenceItemsData[3])}
                  className={`magnify-hover relative cursor-pointer group transition-all duration-300 max-w-[245px] sm:max-w-[255px] w-full ${
                    zoomingId === "ev-004" ? "scale-110 z-50" : "hover:-translate-y-1.5"
                  }`}
                >
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4.5 h-2 rounded-full bg-[#111] border border-[#444] z-40 flex items-center justify-center">
                    <div className="w-2 h-0.5 rounded-full bg-[#FAF7F2]" />
                  </div>

                  <div className="bg-[#FAF7F2] border-2 border-[#111111] p-3 sm:p-3.5 shadow-[4px_6px_14px_rgba(0,0,0,0.12)] group-hover:shadow-[8px_12px_22px_rgba(0,0,0,0.2)] transition-shadow">
                    <div className="flex justify-between items-center border-b border-[#111111] pb-1 mb-1.5">
                      <span className="font-mono-meta text-[9px] font-bold tracking-[0.16em] text-[#8A3B2D] uppercase">
                        EV-004 · BADGE
                      </span>
                      <span className="font-mono text-[8px] font-bold bg-[#714B67] text-white px-1 py-0.5">
                        ODOO 2025
                      </span>
                    </div>

                    <div className="bg-[#714B67] text-white p-1 text-center font-mono text-[8.5px] font-bold tracking-widest uppercase mb-1">
                      TOP 350 TEAMS IN INDIA
                    </div>

                    <h3 className="font-newspaper-title text-base text-[#111111] font-normal mb-0.5">
                      Odoo Hackathon 2025
                    </h3>
                    <p className="font-mono-meta text-[8px] text-[#555] font-semibold uppercase mb-1">
                      24-Hr Grand Finale · Gandhinagar
                    </p>

                    <div className="flex justify-between items-center pt-1 border-t border-dashed border-[#999]">
                      <span className="font-newspaper text-[10px] font-bold tracking-widest text-[#8A3B2D] border border-[#8A3B2D] px-1 py-0.5 rotate-3">
                        QUALIFIED
                      </span>
                      <span className="font-mono-meta text-[8px] font-bold text-[#111] group-hover:text-[#8A3B2D] transition-colors">
                        INSPECT &rarr;
                      </span>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* ITEM 1: EV-001 — Bull Agritech (High Left) */}
              <div className="relative md:absolute md:top-[40px] md:left-[2%] z-20 mb-4 md:mb-0">
                <motion.div
                  initial={{ opacity: 0, y: 15, rotate: -4 }}
                  whileInView={{ opacity: 1, y: 0, rotate: -4.5 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                  onHoverStart={() => setHoveredId("ev-001")}
                  onHoverEnd={() => setHoveredId(null)}
                  onClick={() => handleInspect(evidenceItemsData[0])}
                  className={`magnify-hover relative cursor-pointer group transition-all duration-300 max-w-[245px] sm:max-w-[255px] w-full ${
                    zoomingId === "ev-001" ? "scale-110 z-50" : "hover:-translate-y-1.5"
                  }`}
                >
                  <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 z-40 pointer-events-none">
                    <div className="w-3.5 h-3.5 rounded-full bg-[#1A1816] border border-[#444] shadow-sm flex items-center justify-center">
                      <div className="w-1 h-1 rounded-full bg-[#666]" />
                    </div>
                  </div>

                  <div className="bg-[#FAF7F2] border-2 border-[#111111] p-3 sm:p-3.5 shadow-[4px_6px_14px_rgba(0,0,0,0.12)] group-hover:shadow-[8px_12px_22px_rgba(0,0,0,0.2)] transition-shadow relative">
                    <div className="flex justify-between items-start border-b border-[#111111] pb-1 mb-1.5">
                      <div>
                        <span className="font-mono-meta text-[9px] font-bold tracking-[0.16em] text-[#8A3B2D] uppercase block">
                          EV-001 · DOSSIER
                        </span>
                        <span className="font-mono-meta text-[8px] text-[#666] uppercase">BULL AGRITECH</span>
                      </div>
                      <span className="font-mono text-[8px] font-bold bg-[#111111] text-[#F7F3EA] px-1 py-0.5 uppercase">
                        INTERN
                      </span>
                    </div>

                    <h3 className="font-newspaper-title text-base text-[#111111] font-normal mb-0.5">
                      Bull Agritech
                    </h3>
                    <p className="font-mono-meta text-[8px] text-[#555] font-semibold uppercase mb-1">
                      Full Stack Developer · Dec 25–Jul 26
                    </p>

                    <div className="flex justify-between items-center pt-1 border-t border-dashed border-[#999]">
                      <span className="font-newspaper text-[10px] font-bold tracking-widest text-[#8A3B2D] border border-[#8A3B2D] px-1 py-0.5 -rotate-3">
                        VERIFIED
                      </span>
                      <span className="font-mono-meta text-[8px] font-bold text-[#111] group-hover:text-[#8A3B2D] transition-colors">
                        INSPECT &rarr;
                      </span>
                    </div>
                  </div>

                  {/* Sticky Note */}
                  <div className="absolute -bottom-2.5 -left-2 w-32 bg-[#FFF6C5] border border-[#D8CE9A] p-1 shadow-md z-30 -rotate-3 group-hover:rotate-0 transition-transform">
                    <p className="font-newspaper text-[9.5px] leading-tight text-[#4A421D] italic">
                      "Production deployment."
                    </p>
                  </div>
                </motion.div>
              </div>

              {/* ITEM 3: EV-003 — GDG Sprintathon (High Right) */}
              <div className="relative md:absolute md:top-[25px] md:left-[72%] z-22 mb-4 md:mb-0">
                <motion.div
                  initial={{ opacity: 0, y: 15, rotate: 3 }}
                  whileInView={{ opacity: 1, y: 0, rotate: -3 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                  onHoverStart={() => setHoveredId("ev-003")}
                  onHoverEnd={() => setHoveredId(null)}
                  onClick={() => handleInspect(evidenceItemsData[2])}
                  className={`magnify-hover relative cursor-pointer group transition-all duration-300 max-w-[245px] sm:max-w-[255px] w-full ${
                    zoomingId === "ev-003" ? "scale-110 z-50" : "hover:-translate-y-1.5"
                  }`}
                >
                  <div className="absolute -top-2 left-5 z-40 pointer-events-none">
                    <div className="w-3.5 h-3.5 rounded-full bg-[#A8382B] border border-[#666] shadow-sm" />
                  </div>
                  <div className="absolute -top-1.5 right-3 w-12 h-3.5 bg-[#E8E1CF]/70 border border-[#D4CBB4] rotate-[-12deg] shadow-sm z-30 pointer-events-none" />

                  <div className="bg-[#FFFDF9] border-2 border-[#111111] p-3 sm:p-3.5 shadow-[4px_6px_14px_rgba(0,0,0,0.12)] group-hover:shadow-[8px_12px_22px_rgba(0,0,0,0.2)] transition-shadow">
                    <div className="flex justify-between items-center border-b border-[#111111] pb-1 mb-1.5">
                      <span className="font-mono-meta text-[9px] font-bold tracking-[0.16em] text-[#8A3B2D] uppercase">
                        EV-003 · POLAROID
                      </span>
                      <span className="font-mono text-[8px] font-bold bg-[#8A3B2D] text-white px-1 py-0.5">
                        🏆 2ND RANK
                      </span>
                    </div>

                    <div className="w-full h-15 bg-[#161616] border border-[#333] p-1 flex flex-col justify-between text-white mb-1.5 relative overflow-hidden">
                      <span className="font-mono text-[7.5px] text-gray-400">GDG HACKATHON · ₹6000</span>
                      <p className="font-newspaper text-xs font-bold text-white leading-none">
                        Team #152 · 480 Pts
                      </p>
                    </div>

                    <h3 className="font-newspaper-title text-base text-[#111111] font-normal mb-0.5">
                      GDG Sprintathon
                    </h3>

                    <div className="flex justify-between items-center pt-1 border-t border-dashed border-[#999]">
                      <span className="font-newspaper text-[10px] font-bold tracking-widest text-[#8A3B2D] border border-[#8A3B2D] px-1 py-0.5 rotate-2">
                        RUNNER UP
                      </span>
                      <span className="font-mono-meta text-[8px] font-bold text-[#111] group-hover:text-[#8A3B2D] transition-colors">
                        INSPECT &rarr;
                      </span>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* ITEM 5: EV-005 — NPTEL DBMS (Low Left) */}
              <div className="relative md:absolute md:top-[270px] md:left-[-5%] z-15 mb-4 md:mb-0">
                <motion.div
                  initial={{ opacity: 0, y: 15, rotate: -3 }}
                  whileInView={{ opacity: 1, y: 0, rotate: 2.5 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
                  onHoverStart={() => setHoveredId("ev-005")}
                  onHoverEnd={() => setHoveredId(null)}
                  onClick={() => handleInspect(evidenceItemsData[4])}
                  className={`magnify-hover relative cursor-pointer group transition-all duration-300 max-w-[245px] sm:max-w-[255px] w-full ${
                    zoomingId === "ev-005" ? "scale-110 z-50" : "hover:-translate-y-1.5"
                  }`}
                >
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 z-40 pointer-events-none">
                    <div className="w-3.5 h-3.5 rounded-full bg-[#B8860B] border border-[#7A5800] shadow-sm flex items-center justify-center">
                      <div className="w-1 h-1 rounded-full bg-[#FFE893]" />
                    </div>
                  </div>

                  <div className="bg-[#FAF7F2] border-2 border-[#111111] p-3 sm:p-3.5 shadow-[4px_6px_14px_rgba(0,0,0,0.12)] group-hover:shadow-[8px_12px_22px_rgba(0,0,0,0.2)] transition-shadow">
                    <div className="border border-double border-[#B8860B] p-1.5 bg-[#FFFDF9]">
                      <div className="flex justify-between items-center border-b border-[#111111] pb-1 mb-1">
                        <span className="font-mono-meta text-[8.5px] font-bold tracking-[0.14em] text-[#8A3B2D] uppercase">
                          EV-005 · ACADEMIC
                        </span>
                        <span className="font-mono text-[7.5px] font-bold bg-[#B8860B] text-white px-1 py-0.5">
                          TOP 1%
                        </span>
                      </div>

                      <h3 className="font-newspaper-title text-base text-[#111111] font-normal mb-0.5">
                        NPTEL DBMS Cert
                      </h3>
                      <p className="font-mono-meta text-[8px] text-[#555] font-semibold uppercase mb-1">
                        Score: 85% · Elite + Silver
                      </p>

                      <div className="flex justify-between items-center pt-1 border-t border-dashed border-[#999]">
                        <span className="font-newspaper text-[10px] font-bold tracking-widest text-[#8A3B2D] border border-[#8A3B2D] px-1 py-0.5 -rotate-2">
                          ELITE+SILVER
                        </span>
                        <span className="font-mono-meta text-[8px] font-bold text-[#111] group-hover:text-[#8A3B2D] transition-colors">
                          INSPECT &rarr;
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* ITEM 7: EV-007 — CyberKavach (CENTER HEART - Deep Overlap!) */}
              <div className="relative md:absolute md:top-[200px] md:left-[35%] md:-translate-x-1/2 z-30 mb-4 md:mb-0">
                <motion.div
                  initial={{ opacity: 0, y: 15, rotate: -2 }}
                  whileInView={{ opacity: 1, y: 0, rotate: -2 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
                  onHoverStart={() => setHoveredId("ev-007")}
                  onHoverEnd={() => setHoveredId(null)}
                  onClick={() => handleInspect(evidenceItemsData[6])}
                  className={`magnify-hover relative cursor-pointer group transition-all duration-300 max-w-[255px] sm:max-w-[265px] w-full ${
                    zoomingId === "ev-007" ? "scale-110 z-50" : "hover:-translate-y-1.5"
                  }`}
                >
                  <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 z-40 pointer-events-none">
                    <div className="w-4 h-4 rounded-full bg-[#1A1816] border border-[#444] shadow-sm flex items-center justify-center">
                      <div className="w-1 h-1 rounded-full bg-[#666]" />
                    </div>
                  </div>

                  <div className="bg-[#FAF7F2] border-2 border-[#111111] p-3.5 sm:p-4 shadow-[6px_10px_22px_rgba(0,0,0,0.18)] group-hover:shadow-[12px_16px_32px_rgba(0,0,0,0.28)] transition-shadow relative">
                    <div className="flex justify-between items-start border-b border-[#111111] pb-1.5 mb-1.5">
                      <div>
                        <span className="font-mono-meta text-[9px] font-bold tracking-[0.16em] text-[#8A3B2D] uppercase block">
                          EV-007 · LEADERSHIP
                        </span>
                        <span className="font-mono-meta text-[8px] text-[#666] uppercase">CYBERKAVACH</span>
                      </div>
                      <span className="font-mono text-[8px] font-bold bg-[#111] text-white px-1.5 py-0.5 uppercase">
                        COORDINATOR
                      </span>
                    </div>

                    <h3 className="font-newspaper-title text-base text-[#111111] font-normal mb-0.5">
                      CyberKavach Club
                    </h3>
                    <p className="font-mono-meta text-[8px] text-[#555] font-semibold uppercase mb-1">
                      Web Development Coordinator · Jul 26–Present
                    </p>

                    <div className="flex justify-between items-center pt-1.5 border-t border-dashed border-[#999]">
                      <span className="font-newspaper text-[10px] font-bold tracking-widest text-[#8A3B2D] border border-[#8A3B2D] px-1.5 py-0.5 rotate-2">
                        LEADERSHIP
                      </span>
                      <span className="font-mono-meta text-[8px] font-bold text-[#111] group-hover:text-[#8A3B2D] transition-colors">
                        INSPECT &rarr;
                      </span>
                    </div>
                  </div>

                  {/* Sticky Note */}
                  <div className="absolute -bottom-3 -right-2 w-36 bg-[#FFF6C5] border border-[#D8CE9A] p-1.5 shadow-md z-30 rotate-2 group-hover:rotate-0 transition-transform">
                    <p className="font-newspaper text-[9.5px] leading-tight text-[#4A421D] italic font-semibold">
                      "Campus security platform."
                    </p>
                  </div>
                </motion.div>
              </div>

              {/* ITEM 2: EV-002 — GSSoC 2026 (Deep Mid Right) */}
              <div className="relative md:absolute md:top-[220px] md:left-[68%] z-18 mb-4 md:mb-0">
                <motion.div
                  initial={{ opacity: 0, y: 15, rotate: -2 }}
                  whileInView={{ opacity: 1, y: 0, rotate: 4 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
                  onHoverStart={() => setHoveredId("ev-002")}
                  onHoverEnd={() => setHoveredId(null)}
                  onClick={() => handleInspect(evidenceItemsData[1])}
                  className={`magnify-hover relative cursor-pointer group transition-all duration-300 max-w-[245px] sm:max-w-[255px] w-full ${
                    zoomingId === "ev-002" ? "scale-110 z-50" : "hover:-translate-y-1.5"
                  }`}
                >
                  <div className="absolute -top-3 left-4 z-40 pointer-events-none">
                    <svg width="16" height="32" viewBox="0 0 24 48" fill="none">
                      <path d="M 6 12 L 6 36 C 6 41, 18 41, 18 36 L 18 8 C 18 3, 10 3, 10 8 L 10 30" stroke="#777" strokeWidth="3.5" strokeLinecap="round" />
                      <path d="M 6 12 L 6 36 C 6 41, 18 41, 18 36 L 18 8 C 18 3, 10 3, 10 8 L 10 30" stroke="#E0E0E0" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  </div>

                  <div className="bg-[#FFFDF9] border-2 border-[#111111] p-3 sm:p-3.5 shadow-[4px_6px_14px_rgba(0,0,0,0.12)] group-hover:shadow-[8px_12px_22px_rgba(0,0,0,0.2)] transition-shadow">
                    <div className="flex justify-between items-start border-b border-[#111111] pb-1 mb-1.5">
                      <div>
                        <span className="font-mono-meta text-[9px] font-bold tracking-[0.16em] text-[#8A3B2D] uppercase block">
                          EV-002 · CERTIFICATE
                        </span>
                        <span className="font-mono-meta text-[8px] text-[#666] uppercase">OPEN SOURCE</span>
                      </div>
                    </div>

                    <h3 className="font-newspaper-title text-base text-[#111111] font-normal mb-0.5">
                      GSSoC 2026
                    </h3>
                    <p className="font-mono-meta text-[8px] text-[#555] font-semibold uppercase mb-1">
                      GirlScript Summer of Code · Contributor
                    </p>

                    <div className="flex justify-between items-center pt-1 border-t border-dashed border-[#999]">
                      <span className="font-newspaper text-[10px] font-bold tracking-widest text-[#8A3B2D] border border-[#8A3B2D] px-1 py-0.5 rotate-3">
                        SELECTED
                      </span>
                      <span className="font-mono-meta text-[8px] font-bold text-[#111] group-hover:text-[#8A3B2D] transition-colors">
                        INSPECT &rarr;
                      </span>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* ITEM 8: EV-008 — TCS Technology Day 2026 (Low Left) */}
              <div className="relative md:absolute md:top-[375px] md:left-[14%] z-24 mb-4 md:mb-0">
                <motion.div
                  initial={{ opacity: 0, y: 15, rotate: -2 }}
                  whileInView={{ opacity: 1, y: 0, rotate: -3 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.55 }}
                  onHoverStart={() => setHoveredId("ev-008")}
                  onHoverEnd={() => setHoveredId(null)}
                  onClick={() => handleInspect(evidenceItemsData.find(e => e.id === "ev-008") || evidenceItemsData[7])}
                  className={`magnify-hover relative cursor-pointer group transition-all duration-300 max-w-[245px] sm:max-w-[255px] w-full ${
                    zoomingId === "ev-008" ? "scale-110 z-50" : "hover:-translate-y-1.5"
                  }`}
                >
                  {/* Push Pin Anchor */}
                  <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 z-40 pointer-events-none">
                    <div className="w-3.5 h-3.5 rounded-full bg-[#A8382B] border border-[#666] shadow-sm flex items-center justify-center">
                      <div className="w-1 h-1 rounded-full bg-[#FAF7F2]" />
                    </div>
                  </div>

                  <div className="bg-[#FAF7F2] border-2 border-[#111111] p-3 sm:p-3.5 shadow-[4px_6px_14px_rgba(0,0,0,0.12)] group-hover:shadow-[8px_12px_22px_rgba(0,0,0,0.2)] transition-shadow relative">
                    <div className="flex justify-between items-center border-b border-[#111111] pb-1 mb-1.5">
                      <span className="font-mono-meta text-[9px] font-bold tracking-[0.16em] text-[#8A3B2D] uppercase">
                        EV-008 · WINNER
                      </span>
                      <span className="font-mono text-[8px] font-bold bg-[#A8382B] text-white px-1 py-0.5">
                        🏆 WINNER
                      </span>
                    </div>

                    <div className="bg-[#111111] text-[#FAF7F2] p-1 text-center font-mono text-[8px] font-bold tracking-widest uppercase mb-1">
                      30 TEAMS · 2-HR SPRINT
                    </div>

                    <h3 className="font-newspaper-title text-base text-[#111111] font-normal mb-0.5">
                      TCS Tech Day 2026
                    </h3>
                    <p className="font-mono-meta text-[8px] text-[#555] font-semibold uppercase mb-1">
                      Hackathon Winner · RAG Assistant
                    </p>

                    <div className="flex justify-between items-center pt-1 border-t border-dashed border-[#999]">
                      <span className="font-newspaper text-[10px] font-bold tracking-widest text-[#8A3B2D] border border-[#8A3B2D] px-1 py-0.5 -rotate-2">
                        WINNER
                      </span>
                      <span className="font-mono-meta text-[8px] font-bold text-[#111] group-hover:text-[#8A3B2D] transition-colors">
                        INSPECT &rarr;
                      </span>
                    </div>
                  </div>

                  {/* Sticky Note */}
                  <div className="absolute -bottom-2.5 -right-2 w-32 bg-[#FFF6C5] border border-[#D8CE9A] p-1 shadow-md z-30 rotate-2 group-hover:rotate-0 transition-transform">
                    <p className="font-newspaper text-[9.5px] leading-tight text-[#4A421D] italic">
                      "Built in 2-Hr window!"
                    </p>
                  </div>
                </motion.div>
              </div>

              {/* ITEM 6: EV-006 — Odoo Hackathon 2026 (Low Right) */}
              <div className="relative md:absolute md:top-[365px] md:left-[54%] z-20 mb-4 md:mb-0">
                <motion.div
                  initial={{ opacity: 0, y: 15, rotate: 3 }}
                  whileInView={{ opacity: 1, y: 0, rotate: 3 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.6 }}
                  onHoverStart={() => setHoveredId("ev-006")}
                  onHoverEnd={() => setHoveredId(null)}
                  onClick={() => handleInspect(evidenceItemsData.find(e => e.id === "ev-006") || evidenceItemsData[5])}
                  className={`magnify-hover relative cursor-pointer group transition-all duration-300 max-w-[245px] sm:max-w-[255px] w-full ${
                    zoomingId === "ev-006" ? "scale-110 z-50" : "hover:-translate-y-1.5"
                  }`}
                >
                  <div className="absolute -top-2 right-8 w-14 h-3.5 bg-[#E8E1CF]/70 border border-[#D4CBB4] rotate-[-8deg] shadow-sm z-30 pointer-events-none" />

                  <div className="bg-[#FFFDF9] border-2 border-[#111111] p-3 sm:p-3.5 shadow-[4px_6px_14px_rgba(0,0,0,0.12)] group-hover:shadow-[8px_12px_22px_rgba(0,0,0,0.2)] transition-shadow relative">
                    <div className="flex justify-between items-center border-b border-[#111111] pb-1 mb-1.5">
                      <span className="font-mono-meta text-[9px] font-bold tracking-[0.16em] text-[#8A3B2D] uppercase">
                        EV-006 · MEMO SLIP
                      </span>
                      <span className="font-mono text-[8px] font-bold bg-[#714B67] text-white px-1 py-0.5">
                        ODOO 2026
                      </span>
                    </div>

                    <div className="bg-[#714B67] text-white p-1 text-center font-mono text-[8px] font-bold tracking-widest uppercase mb-1">
                      TOP 850 · 20,000+ TEAMS
                    </div>

                    <h3 className="font-newspaper-title text-base text-[#111111] font-normal mb-0.5">
                      Odoo Hackathon 2026
                    </h3>
                    <p className="font-mono-meta text-[8px] text-[#555] font-semibold uppercase mb-1">
                      National Finalist · DealFlow360
                    </p>

                    <div className="flex justify-between items-center pt-1 border-t border-dashed border-[#999]">
                      <span className="font-newspaper text-[10px] font-bold tracking-widest text-[#8A3B2D] border border-[#8A3B2D] px-1 py-0.5 -rotate-3">
                        FINALIST
                      </span>
                      <span className="font-mono-meta text-[8px] font-bold text-[#111] group-hover:text-[#8A3B2D] transition-colors">
                        INSPECT &rarr;
                      </span>
                    </div>
                  </div>

                  {/* Sticky Note */}
                  <div className="absolute -bottom-2.5 -left-2 w-32 bg-[#FFF6C5] border border-[#D8CE9A] p-1 shadow-md z-30 -rotate-2 group-hover:rotate-0 transition-transform">
                    <p className="font-newspaper text-[9.5px] leading-tight text-[#4A421D] italic">
                      "3 Reviews · 2 Interviews"
                    </p>
                  </div>
                </motion.div>
              </div>

            </div>
          </div>

          {/* Bottom Archival Status Bar */}
          <div className="border-t border-[#111111] pt-2.5 mt-3 flex flex-col sm:flex-row justify-between items-center text-[9.5px] sm:text-[10.5px] font-mono-meta tracking-[0.2em] text-[#555555] uppercase">
            <span>TOTAL EVIDENTIARY ARTIFACTS: 8 ON RECORD</span>
            <span className="mt-1 sm:mt-0 text-[#8A3B2D] font-bold">STATUS: INVESTIGATION CONTINUING</span>
          </div>
        </div>
      </div>
    </section>
  );
};
