import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { EvidenceDetailRecord } from "../data/evidenceDetailData";

interface EvidenceDetailModalProps {
  record: EvidenceDetailRecord | null;
  onClose: () => void;
}

export const EvidenceDetailModal: React.FC<EvidenceDetailModalProps> = ({ record, onClose }) => {
  const [lightboxImg, setLightboxImg] = useState<{ url: string; caption: string } | null>(null);

  useEffect(() => {
    if (record) {
      document.body.style.overflow = "hidden";
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (lightboxImg) {
          setLightboxImg(null);
        } else {
          onClose();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [record, lightboxImg, onClose]);

  if (!record) return null;

  const primaryImage = record.images.find((img) => img.isPrimary) || record.images[0];
  const secondaryImages = record.images.filter((img) => img !== primaryImage);

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[99999] w-full h-full bg-[#FAF7F2] text-[#111111] overflow-y-auto lg:overflow-hidden flex flex-col p-3 sm:p-4 lg:p-4 xl:p-5 select-none print-lines">
        
        {/* Coffee Ring Stain Micro-Detail in Background */}
        <svg className="absolute top-8 right-14 w-48 h-48 opacity-15 pointer-events-none overflow-visible rotate-12 z-0" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="42" fill="none" stroke="#8A3B2D" strokeWidth="6" strokeDasharray="3 2" />
          <circle cx="50" cy="50" r="39" fill="none" stroke="#6B2E23" strokeWidth="2" />
        </svg>

        {/* ========================================================================= */}
        {/* Main Full-Screen Container */}
        {/* ========================================================================= */}
        <motion.div
          initial={{ opacity: 0, scale: 0.99 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.99 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="flex-1 flex flex-col lg:h-full lg:overflow-hidden max-w-[1300px] w-full mx-auto relative z-10"
        >
          {/* Top Header Navigation Bar */}
          <div className="flex justify-between items-center border-b-2 border-[#111111] pb-2 sm:pb-2.5 mb-2 sm:mb-2.5 shrink-0 relative">
            <div className="text-center hidden lg:block">
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

          {/* ========================================================================= */}
          {/* MOBILE & TABLET SINGLE VERTICAL READING EXPERIENCE (<1024px) */}
          {/* ========================================================================= */}
          <div className="flex lg:hidden flex-col space-y-4 pb-12 w-full">
            {/* 1. Case Title & Subtitle */}
            <div className="border-b border-[#111111] pb-3">
              <span className="font-mono-meta text-[10px] font-bold tracking-[0.2em] text-[#8A3B2D] uppercase block mb-1">
                CONFIDENTIAL DOSSIER · CASE FILE {record.caseCode}
              </span>
              <h1 className="font-newspaper-title text-2xl text-[#111111] font-bold leading-tight mb-1">
                {record.title}
              </h1>
              <p className="font-mono-meta text-[10.5px] text-[#555] uppercase tracking-wider">
                {record.subtitle}
              </p>
            </div>

            {/* 2. Quick Facts */}
            <div className="bg-[#F2ECE0] border-2 border-[#111111] p-3.5 shadow-xs">
              <span className="font-mono-meta text-[10px] font-bold tracking-[0.2em] text-[#8A3B2D] uppercase block mb-2">
                QUICK FACTS & PARAMETERS
              </span>
              <div className="grid grid-cols-2 gap-3 text-left">
                <div className="border-r border-[#111111] pr-2">
                  <span className="font-mono-meta text-[9px] text-[#666] uppercase block">CASE DATE</span>
                  <span className="font-newspaper-title text-sm font-bold text-[#111] leading-tight block mt-0.5">{record.date}</span>
                </div>
                <div>
                  <span className="font-mono-meta text-[9px] text-[#666] uppercase block">LOCATION</span>
                  <span className="font-newspaper-title text-sm font-bold text-[#111] leading-tight block mt-0.5">{record.location}</span>
                </div>
                <div className="border-r border-[#111111] pr-2 pt-2 border-t">
                  <span className="font-mono-meta text-[9px] text-[#666] uppercase block">CATEGORY</span>
                  <span className="font-newspaper-title text-sm font-bold text-[#111] leading-tight block mt-0.5">{record.category}</span>
                </div>
                <div className="pt-2 border-t border-[#111111]">
                  <span className="font-mono-meta text-[9px] text-[#666] uppercase block">HIGHLIGHT</span>
                  <span className="font-newspaper-title text-sm font-bold text-[#8A3B2D] leading-tight block mt-0.5">{record.statusHighlight}</span>
                </div>
              </div>
            </div>

            {/* 3. Large Evidence Photo Frame */}
            {primaryImage && (
              <div className="border-2 border-[#111111] bg-[#111111] p-2 relative shadow-md">
                {/* 3D Push Pin */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-40 pointer-events-none">
                  <div className="w-5 h-5 rounded-full bg-[#1A1816] border border-[#444] shadow-md flex items-center justify-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#666]" />
                  </div>
                </div>

                <div 
                  onClick={() => setLightboxImg(primaryImage)}
                  className="cursor-pointer relative overflow-hidden bg-black/40 min-h-[220px] max-h-[420px] flex items-center justify-center"
                >
                  <img
                    src={primaryImage.url}
                    alt={primaryImage.caption}
                    className="w-full h-full object-contain filter contrast-[1.03]"
                  />
                  <div className="absolute top-2 left-2 bg-[#8A3B2D] text-white font-mono text-[9px] font-bold uppercase px-2 py-0.5 tracking-wider">
                    EXHIBIT PHOTO
                  </div>
                </div>

                <div className="pt-2 pb-1 px-2 bg-[#FAF7F2] border-t border-[#111111] text-[10.5px] font-mono text-[#333] flex justify-between items-center">
                  <span className="truncate pr-2 font-medium">EXHIBIT: {primaryImage.caption}</span>
                  <button 
                    onClick={() => setLightboxImg(primaryImage)}
                    className="font-bold text-[#8A3B2D] uppercase tracking-wider text-[10px] min-h-[44px] flex items-center"
                  >
                    INSPECT &rarr;
                  </button>
                </div>
              </div>
            )}

            {/* 4. Key Findings & Verified Milestones */}
            <div className="py-1">
              <span className="font-mono-meta text-[10.5px] font-bold tracking-[0.2em] text-[#8A3B2D] uppercase block mb-2">
                KEY FINDINGS & VERIFIED MILESTONES
              </span>
              <div className="space-y-2 font-sans text-xs text-[#222]">
                {record.keyFindings.map((finding, idx) => (
                  <div key={idx} className="flex items-start gap-2 border-b border-[#D4CEBF] pb-1.5">
                    <span className="font-mono font-bold text-[#8A3B2D] text-sm leading-none pt-0.5">&bull;</span>
                    <span className="leading-snug text-[#111111] font-medium">{finding}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 5. Evidence Collected Chips */}
            <div>
              <span className="font-mono-meta text-[10.5px] font-bold tracking-[0.2em] text-[#8A3B2D] uppercase block mb-2">
                EVIDENCE COLLECTED ON FILE
              </span>
              <div className="flex flex-wrap gap-2">
                {record.evidenceCollected.map((item, idx) => (
                  <div
                    key={idx}
                    className="font-mono-meta text-[10.5px] font-bold bg-[#F2ECE0] border border-[#111111] px-2.5 py-1 text-[#111111] flex items-center gap-1.5 shadow-xs"
                  >
                    <span className="text-[#8A3B2D]">{item.tag}</span>
                    <span>{item.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 6. Investigation Summary Quote */}
            <div className="relative pt-1">
              <div className="bg-[#FFFDF9] border-l-4 border-[#8A3B2D] border-y border-r border-[#111111] p-3 shadow-xs">
                <div className="font-mono-meta text-[9.5px] font-bold tracking-widest text-[#8A3B2D] uppercase mb-1">
                  INVESTIGATION SUMMARY
                </div>
                <p className="font-newspaper-title text-sm leading-snug text-[#222] italic">
                  "{record.investigationNotes}"
                </p>
              </div>

              {/* Attached Yellow Sticky Note */}
              <div className="mt-2 bg-[#FFF6C5] border border-[#D8CE9A] p-2 shadow-xs rotate-1 w-fit ml-auto">
                <p className="font-newspaper text-[10px] leading-tight text-[#4A421D] italic font-semibold">
                  "Verified exhibit record."
                </p>
              </div>
            </div>

            {/* 7. Bottom Stamp & Return Action Bar */}
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 border-t-2 border-[#111111] pt-4">
              <motion.div
                initial={{ scale: 1.2, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="border-3 border-[#8A3B2D] px-4 py-1.5 bg-[#FAF7F2] -rotate-2 shadow-xs"
              >
                <span className="font-newspaper text-base font-bold tracking-[0.2em] text-[#8A3B2D] uppercase">
                  {record.stampText}
                </span>
              </motion.div>

              <div className="flex flex-col sm:flex-row items-center gap-2.5 w-full sm:w-auto">
                {record.link && record.link !== "#" && (
                  <a
                    href={record.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto font-mono-meta text-xs font-bold text-[#F7F3EA] bg-[#8A3B2D] hover:bg-[#111111] px-5 py-3 transition-colors uppercase tracking-widest text-center min-h-[44px] flex items-center justify-center gap-2 cursor-pointer shadow-xs"
                  >
                    <span>{record.linkText || "VIEW LIVE PROJECT"} &rarr;</span>
                  </a>
                )}
                <button
                  onClick={onClose}
                  className="w-full sm:w-auto font-mono-meta text-xs font-bold text-[#F7F3EA] bg-[#111111] hover:bg-[#8A3B2D] px-6 py-3 transition-colors uppercase tracking-widest text-center min-h-[44px] flex items-center justify-center cursor-pointer"
                >
                  &larr; RETURN TO EVIDENCE BOARD
                </button>
              </div>
            </div>
          </div>

          {/* ========================================================================= */}
          {/* DESKTOP 2-COLUMN SPLIT GRID (Strictly Fits 1 Viewport - UNCHANGED) */}
          {/* ========================================================================= */}
          <div className="hidden lg:grid flex-1 grid-cols-12 gap-5 lg:gap-6 overflow-hidden items-stretch py-1 relative">
            
            {/* LEFT COLUMN: High-Resolution Attached Evidence Photo Frame */}
            <div className="col-span-5 flex flex-col h-full overflow-hidden border-2 border-[#111111] bg-[#111111] p-2 relative shadow-md">
              {/* 3D Black Push Pin Anchor */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-40 pointer-events-none">
                <div className="w-5 h-5 rounded-full bg-[#1A1816] border border-[#444] shadow-[2px_3px_6px_rgba(0,0,0,0.5)] flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#666]" />
                </div>
              </div>

              {/* Scotch Tape Strip */}
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
              <div className="pt-2 pb-1.5 px-2 bg-[#FAF7F2] border-t border-[#111111] text-xs font-mono text-[#333] flex justify-between items-center shrink-0">
                <span className="truncate pr-2 font-medium">EXHIBIT: {primaryImage?.caption}</span>
                <button 
                  onClick={() => primaryImage && setLightboxImg(primaryImage)}
                  className="font-bold text-[#8A3B2D] hover:underline shrink-0 uppercase tracking-wider text-[11px]"
                >
                  INSPECT &rarr;
                </button>
              </div>

              {/* Secondary Thumbnails */}
              {secondaryImages.length > 0 && (
                <div className="grid grid-cols-2 gap-2 pt-2 border-t border-[#333] shrink-0">
                  {secondaryImages.map((img, idx) => (
                    <div
                      key={idx}
                      onClick={() => setLightboxImg(img)}
                      className="magnify-hover cursor-pointer group border border-[#444] p-1 bg-[#222] flex items-center gap-2 relative"
                    >
                      <img src={img.url} alt={img.caption} className="w-10 h-8 object-cover" />
                      <span className="text-[10px] font-mono text-gray-300 truncate">THUMB #{idx+1}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* RIGHT COLUMN: All Necessary Information (Strictly Non-Scrollable & Perfectly Spaced) */}
            <div className="col-span-7 flex flex-col justify-between h-full overflow-hidden font-sans py-0.5 relative">
              
              {/* Scotch Tape Strip */}
              <div className="absolute -top-2 left-6 w-16 h-4 bg-[#E8E1CF]/75 border border-[#D4CBB4] rotate-[8deg] shadow-sm z-30 pointer-events-none" />

              {/* 1. Quick Facts Block */}
              <div className="bg-[#F2ECE0] border-2 border-[#111111] p-3 sm:p-3.5 shadow-xs shrink-0 relative">
                <span className="font-mono-meta text-[11px] font-bold tracking-[0.2em] text-[#8A3B2D] uppercase block mb-1.5">
                  QUICK FACTS & PARAMETERS
                </span>
                <div className="grid grid-cols-4 gap-3 text-left">
                  <div className="border-r border-[#111111] pr-2">
                    <span className="font-mono-meta text-[10px] text-[#666] uppercase block font-medium">CASE DATE</span>
                    <span className="font-newspaper-title text-sm sm:text-base font-bold text-[#111] leading-tight block mt-0.5">{record.date}</span>
                  </div>
                  <div className="border-r border-[#111111] pr-2">
                    <span className="font-mono-meta text-[10px] text-[#666] uppercase block font-medium">LOCATION</span>
                    <span className="font-newspaper-title text-sm sm:text-base font-bold text-[#111] leading-tight block mt-0.5">{record.location}</span>
                  </div>
                  <div className="border-r border-[#111111] pr-2">
                    <span className="font-mono-meta text-[10px] text-[#666] uppercase block font-medium">CATEGORY</span>
                    <span className="font-newspaper-title text-sm sm:text-base font-bold text-[#111] leading-tight block mt-0.5">{record.category}</span>
                  </div>
                  <div>
                    <span className="font-mono-meta text-[10px] text-[#666] uppercase block font-medium">HIGHLIGHT</span>
                    <span className="font-newspaper-title text-sm sm:text-base font-bold text-[#8A3B2D] leading-tight block mt-0.5">{record.statusHighlight}</span>
                  </div>
                </div>
              </div>

              {/* 2. Key Findings Bullets */}
              <div className="shrink-0">
                <span className="font-mono-meta text-[11px] font-bold tracking-[0.2em] text-[#8A3B2D] uppercase block mb-1.5">
                  KEY FINDINGS & VERIFIED MILESTONES
                </span>
                <div className="space-y-1.5 font-sans text-[13px] sm:text-[13.5px] text-[#222]">
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
                <span className="font-mono-meta text-[11px] font-bold tracking-[0.2em] text-[#8A3B2D] uppercase block mb-1.5">
                  EVIDENCE COLLECTED ON FILE
                </span>
                <div className="flex flex-wrap gap-2">
                  {record.evidenceCollected.map((item, idx) => (
                    <div
                      key={idx}
                      className="font-mono-meta text-[11.5px] sm:text-xs font-bold bg-[#F2ECE0] border border-[#111111] px-3 py-1 text-[#111111] flex items-center gap-2 shadow-xs relative"
                    >
                      <span className="text-[#8A3B2D]">{item.tag}</span>
                      <span>{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* 4. Investigation Summary Quote */}
              <div className="relative shrink-0">
                <div className="bg-[#FFFDF9] border-l-4 border-[#8A3B2D] border-y border-r border-[#111111] p-3 shadow-xs">
                  <div className="font-mono-meta text-[10px] font-bold tracking-widest text-[#8A3B2D] uppercase mb-1">
                    INVESTIGATION SUMMARY
                  </div>
                  <p className="font-newspaper-title text-[13.5px] sm:text-[14.5px] leading-snug text-[#222] italic pr-28 sm:pr-36">
                    "{record.investigationNotes}"
                  </p>
                </div>

                {/* Attached Yellow Sticky Note */}
                <div className="absolute -bottom-1 -right-1 w-30 sm:w-34 bg-[#FFF6C5] border border-[#D8CE9A] p-1.5 shadow-xs z-30 rotate-2 pointer-events-none">
                  <p className="font-newspaper text-[10.5px] leading-tight text-[#4A421D] italic font-semibold text-center">
                    "Verified exhibit record."
                  </p>
                </div>
              </div>

              {/* 5. Bottom Stamp & Return Action Bar */}
              <div className="flex justify-between items-center border-t-2 border-[#111111] pt-2.5 shrink-0">
                <motion.div
                  initial={{ scale: 1.5, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ type: "spring", stiffness: 350, damping: 22, delay: 0.1 }}
                  className="border-2 sm:border-3 border-[#8A3B2D] px-3.5 py-1.5 bg-[#FAF7F2] -rotate-2 shadow-xs"
                >
                  <span className="font-newspaper text-base sm:text-lg font-bold tracking-[0.2em] text-[#8A3B2D] uppercase">
                    {record.stampText}
                  </span>
                </motion.div>

                <div className="flex items-center gap-3">
                  {record.link && record.link !== "#" && (
                    <a
                      href={record.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="magnify-hover font-mono-meta text-xs sm:text-[12.5px] font-bold text-[#F7F3EA] bg-[#8A3B2D] hover:bg-[#111111] px-5 py-2.5 transition-colors uppercase tracking-widest flex items-center gap-2 shadow-xs cursor-pointer min-h-[42px]"
                    >
                      <svg className="w-3.5 h-3.5 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      <span>{record.linkText || "VIEW LIVE PROJECT"} &rarr;</span>
                    </a>
                  )}

                  <button
                    onClick={onClose}
                    className="magnify-hover font-mono-meta text-xs sm:text-[12.5px] font-bold text-[#F7F3EA] bg-[#111111] hover:bg-[#8A3B2D] px-5 py-2.5 transition-colors uppercase tracking-widest flex items-center gap-2 shadow-xs cursor-pointer min-h-[42px]"
                  >
                    <span>&larr; RETURN TO BOARD</span>
                  </button>
                </div>
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
