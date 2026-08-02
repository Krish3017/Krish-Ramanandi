import React from "react";
import { motion } from "framer-motion";
import resumePdf from "../assets/Resume.pdf";

export const FinalReport: React.FC = () => {
  const checklistItems = [
    "10+ Engineering Projects",
    "Industry Internship",
    "National Hackathons",
    "Open Source Contributions",
    "Leadership Experience",
    "Academic Excellence",
  ];

  const scrollToContact = () => {
    const el = document.getElementById("contact");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="report" className="w-full py-12 md:py-20 bg-transparent relative overflow-hidden select-none print-lines">
      <div className="max-w-[900px] mx-auto px-4 sm:px-8 font-sans text-[#111111]">
        
        {/* ========================================================================= */}
        {/* Unified Single-Page Official Final Investigation Report Sheet */}
        {/* ========================================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="bg-[#FAF7F2] border-2 border-[#111111] p-6 sm:p-9 shadow-lg rounded-sm relative overflow-hidden text-[#111111]"
        >
          {/* Top Archival Fold Corner */}
          <div className="absolute top-0 right-0 w-9 h-9 bg-[#EFE9DC] border-b border-l border-[#111111] shadow-xs pointer-events-none" />

          {/* Report Top Header Bar */}
          <div className="border-b-2 border-[#111111] pb-4 mb-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 mb-2">
              <span className="font-mono-meta text-[11px] font-bold tracking-[0.22em] text-[#8A3B2D] uppercase">
                THE FINAL CONCLUSION · DOSSIER FILE NO. KR-043
              </span>
              <span className="font-mono text-[10px] font-bold bg-[#111111] text-[#F7F3EA] px-2 py-0.5 uppercase tracking-wider">
                CONFIDENTIAL ARCHIVE
              </span>
            </div>

            <h2 className="font-newspaper-title text-3xl sm:text-4xl text-[#111111] font-bold tracking-tight">
              Final Investigation Report
            </h2>
            <p className="font-sans text-xs sm:text-sm text-[#555] mt-0.5">
              The investigation has concluded. The following findings summarize the evidence collected.
            </p>
          </div>

          {/* Section 1: Subject Case Parameters (Compact 4-Column Row) */}
          <div className="bg-[#F2ECE0] border border-[#111111] p-3.5 mb-6 shadow-xs">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-left">
              <div className="sm:border-r border-[#111111] pr-2">
                <span className="font-mono-meta text-[9.5px] text-[#666] uppercase block">SUBJECT</span>
                <span className="font-newspaper-title text-sm sm:text-base font-bold text-[#111] block">Krish Ramanandi</span>
              </div>
              <div className="sm:border-r border-[#111111] pr-2">
                <span className="font-mono-meta text-[9.5px] text-[#666] uppercase block">STATUS</span>
                <span className="font-newspaper-title text-sm sm:text-base font-bold text-[#8A3B2D] block">IDENTIFIED</span>
              </div>
              <div className="sm:border-r border-[#111111] pr-2">
                <span className="font-mono-meta text-[9.5px] text-[#666] uppercase block">CLASSIFICATION</span>
                <span className="font-newspaper-title text-xs sm:text-sm font-bold text-[#111] block truncate">AI & Full Stack Engineer</span>
              </div>
              <div>
                <span className="font-mono-meta text-[9.5px] text-[#666] uppercase block">TIMELINE</span>
                <span className="font-newspaper-title text-sm sm:text-base font-bold text-[#111] block">2024 – 2026</span>
              </div>
            </div>
          </div>

          {/* Section 2: Investigation Summary Note */}
          <div className="mb-6 font-newspaper-title text-base sm:text-lg text-[#222] leading-relaxed italic border-l-4 border-[#8A3B2D] pl-4 py-0.5 bg-[#FFFDF9] border-y border-r border-[#111111]/30">
            "The investigation confirms that the subject demonstrates strong capabilities in AI, Full Stack Development, Enterprise Software, and modern web technologies. Through internships, hackathons, leadership roles, and independent engineering projects, sufficient evidence establishes technical proficiency, problem-solving ability, and continuous learning."
          </div>

          {/* Section 3: Verified Evidence Checklist (2-Column Compact Grid) */}
          <div className="mb-6">
            <span className="font-mono-meta text-[10.5px] font-bold tracking-[0.2em] text-[#8A3B2D] uppercase block mb-2">
              EVIDENCE REVIEWED & VERIFIED
            </span>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {checklistItems.map((item, idx) => (
                <div
                  key={idx}
                  className="font-mono-meta text-[11px] font-bold bg-[#FAF7F2] border border-[#111111] px-2.5 py-1.5 text-[#111111] flex items-center gap-2 shadow-xs"
                >
                  <span className="text-[#8A3B2D] font-bold text-xs">[✓]</span>
                  <span className="truncate">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Section 4: Final Verdict & Recommendation */}
          <div className="bg-[#F2ECE0] border border-[#111111] p-4 mb-6 shadow-xs">
            <div className="flex justify-between items-center mb-1">
              <span className="font-newspaper-title text-lg font-bold text-[#111]">FINAL VERDICT</span>
              <span className="font-mono-meta text-[10px] font-bold text-[#8A3B2D] uppercase">VERIFIED VERDICT</span>
            </div>
            <p className="font-sans text-xs sm:text-sm text-[#222] leading-relaxed mb-3">
              After reviewing all collected evidence, the investigation concludes that the subject demonstrates strong engineering fundamentals, practical experience building production-ready software, and the ability to solve real-world problems.
            </p>
            <div className="font-mono text-xs font-bold text-[#8A3B2D] bg-[#FAF7F2] border border-[#8A3B2D] px-3 py-1.5 inline-block tracking-wider uppercase">
              RECOMMENDATION: PROCEED WITH INTERVIEW &rarr;
            </div>
          </div>

          {/* Section 5: Warm Personal Closing Note */}
          <div className="mb-6 pt-1 border-t border-[#111111] text-center max-w-xl mx-auto">
            <p className="font-newspaper text-sm sm:text-base leading-snug text-[#333] italic">
              "Thank you for taking the time to investigate this case. Every exhibit represents a step in my journey as an engineer. I hope this investigation gave you a clear picture of who I am and what I enjoy building."
            </p>
            <span className="font-newspaper-title text-base font-bold text-[#111111] mt-1 block">
              — Krish Ramanandi
            </span>
          </div>

          {/* Section 6: Action Triggers */}
          <div className="flex flex-wrap justify-center items-center gap-3 pt-2 border-t border-[#111111]">
            <a
              href={resumePdf}
              target="_blank"
              rel="noopener noreferrer"
              download="Krish_Ramanandi_Resume.pdf"
              title="Download Krish Ramanandi Resume PDF"
              className="magnify-hover font-mono-meta text-[11px] font-bold text-[#F7F3EA] bg-[#111111] hover:bg-[#8A3B2D] px-4 py-2 transition-colors uppercase tracking-widest border border-[#111111] shadow-xs"
            >
              RETRIEVE RESUME
            </a>

            <a
              href="https://github.com/Krish3017"
              target="_blank"
              rel="noopener noreferrer"
              className="magnify-hover font-mono-meta text-[11px] font-bold text-[#111111] bg-[#FAF7F2] hover:bg-[#8A3B2D] hover:text-[#F7F3EA] px-4 py-2 transition-colors uppercase tracking-widest border border-[#111111] shadow-xs"
            >
              VIEW GITHUB
            </a>

            <button
              onClick={scrollToContact}
              className="magnify-hover font-mono-meta text-[11px] font-bold text-[#8A3B2D] bg-[#F2ECE0] hover:bg-[#8A3B2D] hover:text-[#F7F3EA] px-4 py-2 transition-colors uppercase tracking-widest border border-[#8A3B2D] shadow-xs"
            >
              CONTACT SUBJECT
            </button>
          </div>

          {/* ========================================================================= */}
          {/* Heavy Impact Red Ink CASE CLOSED Stamp (Punched on bottom right of sheet when scrolled into view) */}
          {/* ========================================================================= */}
          <motion.div
            initial={{ scale: 2.5, opacity: 0, rotate: -15 }}
            whileInView={{ scale: 1, opacity: 1, rotate: -4 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 350, damping: 18, delay: 0.3 }}
            className="absolute bottom-2 right-2 sm:bottom-6 sm:right-6 md:bottom-8 md:right-8 z-30 pointer-events-none border-3 sm:border-4 border-[#8A3B2D] px-3 sm:px-6 py-1 sm:py-1.5 bg-[#FAF7F2]/95 backdrop-blur-[1px] shadow-lg font-newspaper text-lg sm:text-2xl md:text-3xl font-bold tracking-[0.18em] sm:tracking-[0.2em] text-[#8A3B2D] uppercase select-none"
          >
            CASE CLOSED
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};
