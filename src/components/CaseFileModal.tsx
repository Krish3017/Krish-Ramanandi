import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Variants } from "framer-motion";

export interface CaseFileDetail {
  id: string;
  exhibitLetter: string;
  sub: string;
  title: string;
  headline: string;
  subtitle: string;
  byline: string;
  figCaption: string;
  bodyParagraph1: string;
  bodyParagraph2: string;
  pullQuote: string;
  bodyParagraph3: string;
  frontend: string;
  data: string;
  admin: string;
  role: string;
  entered: string;
  status: string;
  relatedExhibits: { name: string; title: string }[];
  link: string;
  imageBg: string;
  imageUrl?: string;
}

interface CaseFileModalProps {
  caseData: CaseFileDetail | null;
  onClose: () => void;
  onSelectExhibit?: (exhibitLetter: string) => void;
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.22,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 45 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export const CaseFileModal: React.FC<CaseFileModalProps> = ({
  caseData,
  onClose,
  onSelectExhibit,
}) => {
  // Prevent body scroll when modal is open
  useEffect(() => {
    if (caseData) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [caseData]);

  if (!caseData) return null;

  return (
    <AnimatePresence>
      <motion.div
        key={caseData.id}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 40 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        className="fixed inset-0 z-[100] bg-[#efeadd] overflow-y-auto text-[#111111]"
      >
        {/* TOP STICKY BAR */}
        <div className="sticky top-0 z-50 bg-[#efeadd] border-b border-[#111111] px-4 sm:px-8 py-3">
          <div className="max-w-[1200px] mx-auto flex justify-between items-center">
            <button
              onClick={onClose}
              className="magnify-hover font-mono-meta text-[11px] sm:text-[12.5px] font-bold text-[#111111] hover:text-[#8A3B2D] flex items-center gap-2 cursor-pointer uppercase tracking-wider transition-colors"
            >
              &larr; BACK TO THE CASE
            </button>
            <span className="font-mono-meta text-[10px] sm:text-[11.5px] tracking-[0.18em] text-[#555555] font-bold uppercase hidden md:inline">
              THE KRISH RAMANANDI TIMES &middot; CASE FILES
            </span>
            <span className="font-mono-meta text-[10px] sm:text-[11.5px] tracking-[0.18em] text-[#555555] font-bold uppercase">
              FILED FROM MELBOURNE
            </span>
          </div>
        </div>

        {/* MAIN CASE CONTENT CONTAINER WITH VIVID STAGGERED REVEAL ANIMATIONS */}
        <motion.main
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-[1100px] mx-auto px-4 sm:px-8 py-6 sm:py-8"
        >
          {/* CASE FILE EYEBROW & HEADLINE */}
          <motion.div variants={itemVariants} className="mb-4">
            <span className="font-mono-meta text-[11px] sm:text-[12px] font-bold text-[#8A3B2D] tracking-[0.2em] uppercase block mb-1">
              CASE FILE &middot; {caseData.exhibitLetter} &middot; {caseData.sub}
            </span>
            <h1 className="font-newspaper-title text-3xl sm:text-5xl lg:text-6xl text-[#111111] font-normal leading-[1.06] mb-3">
              {caseData.headline}
            </h1>

            {/* ITALIC SUBTITLE CALLOUT WITH LEFT BORDER */}
            <div className="border-l-4 border-[#111111] pl-4 py-1 mb-2">
              <p className="font-serif italic text-lg sm:text-xl md:text-2xl text-[#222222] leading-snug">
                {caseData.subtitle}
              </p>
            </div>

            <p className="font-mono-meta text-[10px] sm:text-[11px] text-[#555555] tracking-widest uppercase">
              BY {caseData.byline} &middot; {caseData.entered}
            </p>
          </motion.div>

          {/* FEATURED SCREENSHOT POSTER FRAME */}
          <motion.div
            variants={itemVariants}
            className="relative mb-6 border border-[#111111] bg-[#111111] p-3 text-white shadow-md overflow-hidden"
          >
            {/* Tape Strip */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-20 h-5 bg-[#E4DDCF]/90 border border-[#C8C2B4] rotate-[-1deg] z-20" />

            {/* Browser top controls */}
            <div className="flex gap-2 mb-2 pb-2 border-b border-gray-800">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500 inline-block"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-500 inline-block"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-green-500 inline-block"></span>
              <span className="font-mono text-[11px] text-gray-400 ml-3">
                {caseData.sub.toLowerCase()}
              </span>
            </div>

            {/* Display Real Image if available, or fallback to visual graphic area */}
            {caseData.imageUrl ? (
              <div className="relative overflow-hidden border border-gray-800 max-h-[420px] bg-[#09090D] flex items-center justify-center">
                <img
                  src={caseData.imageUrl}
                  alt={caseData.title}
                  className="w-full max-h-[420px] object-cover object-top"
                />
              </div>
            ) : (
              <div className={`relative ${caseData.imageBg} border border-gray-800 p-6 sm:p-10 min-h-[220px] sm:min-h-[280px] flex flex-col justify-between`}>
                <div className="flex justify-between items-center text-[10px] font-mono text-cyan-400 tracking-widest uppercase">
                  <span>STATUS: {caseData.status}</span>
                  <span>CONFIDENTIAL EVIDENCE</span>
                </div>

                <div className="my-4">
                  <span className="font-mono text-xs text-cyan-300 uppercase tracking-widest block mb-1">
                    • {caseData.exhibitLetter} — {caseData.title}
                  </span>
                  <h3 className="font-serif text-2xl sm:text-4xl text-white font-bold max-w-xl leading-tight">
                    {caseData.headline}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {caseData.frontend.split(" · ").concat(caseData.data.split(" · ")).map((tech) => (
                    <span key={tech} className="font-mono text-[10px] bg-white/10 px-2 py-0.5 border border-white/20 text-gray-200">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Bottom Caption Row */}
            <div className="flex justify-between items-center pt-2 px-1 font-mono text-[10px] sm:text-[11px] text-gray-400 border-t border-gray-800 mt-2">
              <span className="font-bold text-white">{caseData.exhibitLetter}</span>
              <span>Fig. 1 &mdash; {caseData.figCaption}</span>
            </div>
          </motion.div>

          {/* TWO-COLUMN NEWSPAPER BODY & SPECIFICATIONS TABLE */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-8"
          >
            {/* LEFT: EDITORIAL ARTICLE BODY */}
            <div className="lg:col-span-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <p className="font-serif text-[16.5px] sm:text-[17.5px] leading-[1.65] text-[#222222] mb-4 drop-cap-k">
                    {caseData.bodyParagraph1}
                  </p>
                </div>
                <div>
                  <p className="font-serif text-[16.5px] sm:text-[17.5px] leading-[1.65] text-[#222222] mb-4">
                    {caseData.bodyParagraph2}
                  </p>
                </div>
              </div>

              {/* CENTERED PULL QUOTE */}
              <div className="border-y-2 border-[#111111] py-4 my-5 text-center">
                <blockquote className="font-newspaper-title italic text-xl sm:text-2xl lg:text-3xl text-[#111111] font-normal leading-snug">
                  &ldquo;{caseData.pullQuote}&rdquo;
                </blockquote>
              </div>

              <p className="font-serif text-[16.5px] sm:text-[17.5px] leading-[1.65] text-[#222222]">
                {caseData.bodyParagraph3}
              </p>
            </div>

            {/* RIGHT: SPECIFICATIONS TABLE (HOW IT WAS BUILT) */}
            <div className="lg:col-span-4">
              <div className="border border-[#111111] bg-[#efeadd] overflow-hidden">
                <div className="bg-[#111111] text-white px-4 py-2 font-mono-meta text-[11px] font-bold tracking-[0.18em] uppercase">
                  HOW IT WAS BUILT
                </div>

                <div className="divide-y divide-[#C8C2B4] font-mono-meta text-[11.5px] text-[#111111]">
                  <div className="px-4 py-2.5 flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1">
                    <span className="font-bold text-[#555555] shrink-0 text-[10.5px]">FRONT-END</span>
                    <span className="font-semibold text-left sm:text-right text-[11.5px] leading-tight text-[#111111]">{caseData.frontend}</span>
                  </div>
                  <div className="px-4 py-2.5 flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1">
                    <span className="font-bold text-[#555555] shrink-0 text-[10.5px]">DATA</span>
                    <span className="font-semibold text-left sm:text-right text-[11.5px] leading-tight text-[#111111]">{caseData.data}</span>
                  </div>
                  <div className="px-4 py-2.5 flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1">
                    <span className="font-bold text-[#555555] shrink-0 text-[10.5px]">ADMIN</span>
                    <span className="font-semibold text-left sm:text-right text-[11.5px] leading-tight text-[#111111]">{caseData.admin}</span>
                  </div>
                  <div className="px-4 py-2.5 flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1">
                    <span className="font-bold text-[#555555] shrink-0 text-[10.5px]">ROLE</span>
                    <span className="font-semibold text-left sm:text-right text-[11.5px] leading-tight text-[#111111]">{caseData.role}</span>
                  </div>
                  <div className="px-4 py-2.5 flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1">
                    <span className="font-bold text-[#555555] shrink-0 text-[10.5px]">ENTERED</span>
                    <span className="font-semibold text-left sm:text-right text-[11.5px] leading-tight text-[#111111]">{caseData.entered}</span>
                  </div>
                  <div className="px-4 py-2.5 flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1">
                    <span className="font-bold text-[#555555] shrink-0 text-[10.5px]">STATUS</span>
                    <span className="font-semibold text-left sm:text-right text-[11.5px] leading-tight text-[#111111]">{caseData.status}</span>
                  </div>

                  {/* RELATED EXHIBITS */}
                  <div className="px-4 py-3 bg-[#EBE4D5]">
                    <span className="font-bold text-[#111111] tracking-wider uppercase block mb-1.5 text-[10.5px]">
                      RELATED EXHIBITS
                    </span>
                    <div className="space-y-1">
                      {caseData.relatedExhibits.map((rel) => (
                        <button
                          key={rel.name}
                          onClick={() => onSelectExhibit && onSelectExhibit(rel.name)}
                          className="magnify-hover block font-sans text-xs text-[#8A3B2D] hover:underline font-semibold cursor-pointer text-left"
                        >
                          {rel.name} &mdash; {rel.title}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* BOTTOM ACTION BAR */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-between items-center gap-4 pt-4 border-t-2 border-[#111111]"
          >
            <button
              onClick={onClose}
              className="magnify-hover px-5 py-2.5 border border-[#111111] bg-[#efeadd] hover:bg-[#E2DBCB] font-mono-meta text-[12px] font-bold uppercase tracking-wider cursor-pointer transition-colors"
            >
              &larr; BACK TO THE CASE
            </button>

            <a
              href={caseData.link}
              target="_blank"
              rel="noreferrer"
              onClick={(e) => {
                if (caseData.link === "#") {
                  e.preventDefault();
                  alert(`Inspecting live evidence: ${caseData.title}`);
                }
              }}
              className="magnify-hover px-6 py-2.5 bg-[#111111] text-[#efeadd] hover:bg-[#333333] font-mono-meta text-[12px] font-bold uppercase tracking-widest flex items-center gap-2 cursor-pointer transition-colors"
            >
              INSPECT THE EVIDENCE &mdash; VISIT THE SITE &rarr;
            </a>
          </motion.div>
        </motion.main>
      </motion.div>
    </AnimatePresence>
  );
};
