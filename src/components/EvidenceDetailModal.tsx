import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { type EvidenceDetailRecord } from "../data/evidenceDetailData";

interface EvidenceDetailModalProps {
  record: EvidenceDetailRecord | null;
  onClose: () => void;
}

export const EvidenceDetailModal: React.FC<EvidenceDetailModalProps> = ({ record, onClose }) => {
  const [lightboxImg, setLightboxImg] = useState<{ url: string; caption: string } | null>(null);

  useEffect(() => {
    if (record) {
      document.body.style.overflow = "hidden";
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [record]);

  if (!record) return null;

  const primaryImage = record.images.find((img) => img.isPrimary) || record.images[0];
  const secondaryImages = record.images.filter((img) => img !== primaryImage);

  return (
    <AnimatePresence>
      <div className="fixed top-0 left-0 right-0 bottom-0 z-[99999] w-screen h-[100dvh] bg-[#FAF7F2] text-[#111111] overflow-y-auto md:overflow-hidden flex flex-col p-3 sm:p-5 md:p-6 select-none print-lines">
        
        {/* Coffee Ring Stain Micro-Detail in Background */}
        <svg className="absolute top-8 right-14 w-48 h-48 opacity-15 pointer-events-none overflow-visible rotate-12 z-0" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="42" fill="none" stroke="#8A3B2D" strokeWidth="6" strokeDasharray="3 2" />
          <circle cx="50" cy="50" r="39" fill="none" stroke="#6B2E23" strokeWidth="2" />
        </svg>

        {/* ========================================================================= */}
        {/* Main Standalone Full-Screen Layout (Single Viewport on Desktop, Scrollable on Mobile) */}
        {/* ========================================================================= */}
        <motion.div
          initial={{ opacity: 0, scale: 0.99 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.99 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="flex-1 flex flex-col min-h-min md:h-full md:overflow-hidden max-w-[1300px] w-full mx-auto relative z-10"
        >
          {/* Top Header Navigation Bar */}
          <div className="flex justify-between items-center border-b-2 border-[#111111] pb-3 mb-3 shrink-0 relative">
            <button
              onClick={onClose}
              className="magnify-hover font-mono-meta text-xs font-bold text-[#111111] hover:text-[#8A3B2D] uppercase tracking-widest flex items-center gap-1.5 border border-[#111111] px-3.5 py-1.5 bg-[#F2ECE0] transition-colors shadow-xs"
            >
              &larr; RETURN TO EVIDENCE BOARD
            </button>

            <div className="text-center hidden sm:block">
              <span className="font-mono-meta text-[11px] font-bold tracking-[0.22em] text-[#8A3B2D] uppercase block">
                CONFIDENTIAL DOSSIER · CASE FILE {record.caseCode}
              </span>
              <h1 className="font-newspaper-title text-2xl sm:text-3xl text-[#111111] font-bold leading-tight mt-0.5">
                {record.title}
              </h1>
            </div>

            {/* Red Rubber Stamp Badge */}
            <div className="border-2 border-[#8A3B2D] px-3 py-1 bg-[#FAF7F2] -rotate-2 shadow-xs">
              <span className="font-newspaper text-xs font-bold tracking-[0.18em] text-[#8A3B2D] uppercase">
                STATUS: {record.status}
              </span>
            </div>
          </div>

          {/* Mobile Header Title (Small screens only) */}
          <div className="sm:hidden mb-2 shrink-0 border-b border-[#111111] pb-2">
            <span className="font-mono-meta text-[9.5px] font-bold tracking-[0.18em] text-[#8A3B2D] uppercase block">
              CASE FILE {record.caseCode} · {record.category}
            </span>
            <h1 className="font-newspaper-title text-xl text-[#111111] font-bold leading-tight">
              {record.title}
            </h1>
          </div>

          {/* Main 2-Column Split Grid (Strictly fits inside 1 Viewport) */}
          <div className="flex-1 grid grid-cols-1 md:grid-cols-12 gap-5 lg:gap-6 overflow-hidden items-stretch py-1 relative">
            
            {/* ========================================================================= */}
            {/* LEFT COLUMN: High-Resolution Attached Evidence Photo Frame */}
            {/* ========================================================================= */}
            <div className="md:col-span-5 flex flex-col h-full overflow-hidden border-2 border-[#111111] bg-[#111111] p-2 relative shadow-md">
              {/* 3D Black Push Pin Anchor at Top Center */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-40 pointer-events-none">
                <div className="w-5 h-5 rounded-full bg-[#1A1816] border border-[#444] shadow-[2px_3px_6px_rgba(0,0,0,0.5)] flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#666]" />
                </div>
              </div>

              {/* Scotch Tape Strip at Top Right Corner */}
              <div className="absolute -top-2.5 right-4 w-18 h-4.5 bg-[#E8E1CF]/75 border border-[#D4CBB4] rotate-[-12deg] shadow-sm z-30 pointer-events-none backdrop-blur-[0.5px]" />

              {primaryImage && (
                <div 
                  onClick={() => setLightboxImg(primaryImage)}
                  className="magnify-hover cursor-pointer group flex-1 w-full relative overflow-hidden flex flex-col items-center justify-center bg-black/40"
                >
                  <img
                    src={primaryImage.url}
                    alt={primaryImage.caption}
                    className="w-full h-full object-contain filter contrast-[1.03] group-hover:scale-102 transition-transform duration-300"
                  />
                  <div className="absolute top-2.5 left-2.5 bg-[#8A3B2D] text-white font-mono text-[9.5px] font-bold uppercase px-2 py-0.5 shadow-sm tracking-wider z-20">
                    EXHIBIT PHOTO
                  </div>
                </div>
              )}

              {/* Photo Caption & Zoom Trigger */}
              <div className="pt-2 pb-1.5 px-2 bg-[#FAF7F2] border-t border-[#111111] text-[11px] font-mono text-[#333] flex justify-between items-center shrink-0">
                <span className="truncate pr-2 font-medium">EXHIBIT: {primaryImage?.caption}</span>
                <button 
                  onClick={() => primaryImage && setLightboxImg(primaryImage)}
                  className="font-bold text-[#8A3B2D] hover:underline shrink-0 uppercase tracking-wider text-[10px]"
                >
                  INSPECT &rarr;
                </button>
              </div>

              {/* Secondary Thumbnails (If available) */}
              {secondaryImages.length > 0 && (
                <div className="grid grid-cols-2 gap-2 pt-2 border-t border-[#333] shrink-0">
                  {secondaryImages.map((img, idx) => (
                    <div
                      key={idx}
                      onClick={() => setLightboxImg(img)}
                      className="magnify-hover cursor-pointer group border border-[#444] p-1 bg-[#222] flex items-center gap-2 relative"
                    >
                      <img src={img.url} alt={img.caption} className="w-10 h-8 object-cover" />
                      <span className="text-[9.5px] font-mono text-gray-300 truncate">THUMB #{idx+1}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* ========================================================================= */}
            {/* RIGHT COLUMN: All Necessary Information (Quick Facts, Findings, Notes) */}
            {/* ========================================================================= */}
            <div className="md:col-span-7 flex flex-col justify-between h-full overflow-hidden font-sans py-0.5 relative">
              
              {/* Scotch Tape Strip on Top Left of Right Column */}
              <div className="absolute -top-2 left-6 w-16 h-4 bg-[#E8E1CF]/75 border border-[#D4CBB4] rotate-[8deg] shadow-sm z-30 pointer-events-none" />

              {/* 1. Quick Facts Block */}
              <div className="bg-[#F2ECE0] border-2 border-[#111111] p-3.5 shadow-xs shrink-0 relative">
                <span className="font-mono-meta text-[10.5px] font-bold tracking-[0.2em] text-[#8A3B2D] uppercase block mb-2">
                  QUICK FACTS & PARAMETERS
                </span>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-left">
                  <div className="sm:border-r border-[#111111] pr-2">
                    <span className="font-mono-meta text-[9.5px] text-[#666] uppercase block">CASE DATE</span>
                    <span className="font-newspaper-title text-sm sm:text-base font-bold text-[#111] leading-tight block mt-0.5">{record.date}</span>
                  </div>
                  <div className="sm:border-r border-[#111111] pr-2">
                    <span className="font-mono-meta text-[9.5px] text-[#666] uppercase block">LOCATION</span>
                    <span className="font-newspaper-title text-sm sm:text-base font-bold text-[#111] leading-tight block mt-0.5">{record.location}</span>
                  </div>
                  <div className="sm:border-r border-[#111111] pr-2">
                    <span className="font-mono-meta text-[9.5px] text-[#666] uppercase block">CATEGORY</span>
                    <span className="font-newspaper-title text-sm sm:text-base font-bold text-[#111] leading-tight block mt-0.5">{record.category}</span>
                  </div>
                  <div>
                    <span className="font-mono-meta text-[9.5px] text-[#666] uppercase block">HIGHLIGHT</span>
                    <span className="font-newspaper-title text-sm sm:text-base font-bold text-[#8A3B2D] leading-tight block mt-0.5">{record.statusHighlight}</span>
                  </div>
                </div>
              </div>

              {/* 2. Key Findings Bullets */}
              <div className="overflow-hidden flex-1 flex flex-col justify-center py-1">
                <span className="font-mono-meta text-[10.5px] font-bold tracking-[0.2em] text-[#8A3B2D] uppercase block mb-2">
                  KEY FINDINGS & VERIFIED MILESTONES
                </span>
                <div className="space-y-1.5 font-sans text-xs sm:text-[13px] text-[#222]">
                  {record.keyFindings.map((finding, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 border-b border-[#D4CEBF] pb-1.5">
                      <span className="font-mono font-bold text-[#8A3B2D] text-sm leading-none pt-0.5">&bull;</span>
                      <span className="leading-snug text-[#111111] font-medium">{finding}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* 3. Evidence Collected Chips */}
              <div className="shrink-0">
                <span className="font-mono-meta text-[10.5px] font-bold tracking-[0.2em] text-[#8A3B2D] uppercase block mb-2">
                  EVIDENCE COLLECTED ON FILE
                </span>
                <div className="flex flex-wrap gap-2">
                  {record.evidenceCollected.map((item, idx) => (
                    <div
                      key={idx}
                      className="font-mono-meta text-[11px] font-bold bg-[#F2ECE0] border border-[#111111] px-3 py-1 text-[#111111] flex items-center gap-2 shadow-xs relative"
                    >
                      <span className="text-[#8A3B2D]">{item.tag}</span>
                      <span>{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* 4. Investigation Summary Quote with Attached Yellow Sticky Note Overlay */}
              <div className="relative shrink-0">
                <div className="bg-[#FFFDF9] border-l-4 border-[#8A3B2D] border-y border-r border-[#111111] p-3 shadow-xs">
                  <div className="font-mono-meta text-[9.5px] font-bold tracking-widest text-[#8A3B2D] uppercase mb-1">
                    INVESTIGATION SUMMARY
                  </div>
                  <p className="font-newspaper-title text-sm sm:text-base leading-snug text-[#222] italic pr-28 sm:pr-36">
                    "{record.investigationNotes}"
                  </p>
                </div>

                {/* Attached Yellow Sticky Note (Bottom Right Overlap) */}
                <div className="absolute -bottom-2 -right-2 w-32 sm:w-36 bg-[#FFF6C5] border border-[#D8CE9A] p-1.5 shadow-md z-30 rotate-2 group-hover:rotate-0 transition-transform pointer-events-none">
                  <div className="w-2 h-2 rounded-full bg-[#E5D793] mx-auto -mt-1 mb-1 border border-[#C5B876]" />
                  <p className="font-newspaper text-[10px] leading-tight text-[#4A421D] italic font-semibold">
                    "Verified exhibit record."
                  </p>
                </div>
              </div>

              {/* 5. Bottom Stamp & Return Action Bar */}
              <div className="flex justify-between items-center border-t-2 border-[#111111] pt-2.5 mt-1 shrink-0">
                {/* Large Dual-Stroke Red Ink Stamp */}
                <motion.div
                  initial={{ scale: 1.5, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ type: "spring", stiffness: 350, damping: 22, delay: 0.1 }}
                  className="border-3 border-[#8A3B2D] px-3.5 py-1 bg-[#FAF7F2] -rotate-2 shadow-sm"
                >
                  <span className="font-newspaper text-base sm:text-lg font-bold tracking-[0.2em] text-[#8A3B2D] uppercase">
                    {record.stampText}
                  </span>
                </motion.div>

                <button
                  onClick={onClose}
                  className="magnify-hover font-mono-meta text-xs font-bold text-[#F7F3EA] bg-[#111111] hover:bg-[#8A3B2D] px-5 py-2.5 transition-colors uppercase tracking-widest flex items-center gap-2 shadow-sm"
                >
                  <span>&larr; RETURN TO BOARD</span>
                </button>
              </div>

            </div>
          </div>
        </motion.div>

        {/* Lightbox Inspector Overlay */}
        <AnimatePresence>
          {lightboxImg && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setLightboxImg(null)}
              className="fixed inset-0 z-70 bg-black/90 p-4 sm:p-8 flex flex-col items-center justify-center cursor-pointer"
            >
              <div className="max-w-4xl w-full bg-[#FAF7F2] border-2 border-[#111111] p-3 text-[#111111]">
                <img src={lightboxImg.url} alt={lightboxImg.caption} className="w-full max-h-[75vh] object-contain mb-3 bg-[#111]" />
                <div className="flex justify-between items-center font-mono text-xs border-t border-[#111111] pt-2">
                  <span>EXHIBIT PHOTO: {lightboxImg.caption}</span>
                  <span className="font-bold text-[#8A3B2D]">CLICK ANYWHERE TO CLOSE ✕</span>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </AnimatePresence>
  );
};
