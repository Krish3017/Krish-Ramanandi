import { useState, lazy, Suspense } from "react";
import { motion } from "framer-motion";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { Masthead } from "./components/Masthead";
import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { SelectedWorks } from "./components/SelectedWorks";
import { Stack } from "./components/Stack";
import { CareerLedger } from "./components/CareerLedger";
import { EvidenceBoard } from "./components/EvidenceBoard";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { MagnifyingCursor } from "./components/MagnifyingCursor";
import { caseFilesMap } from "./data/caseFilesData";
import { evidenceDetailMap } from "./data/evidenceDetailData";

import { DetectiveIntro } from "./components/DetectiveIntro";

// Lazy-loaded heavy modal and concluding components for initial bundle optimization
const CaseFileModal = lazy(() => import("./components/CaseFileModal").then(m => ({ default: m.CaseFileModal })));
const EvidenceDetailModal = lazy(() => import("./components/EvidenceDetailModal").then(m => ({ default: m.EvidenceDetailModal })));
const FinalReport = lazy(() => import("./components/FinalReport").then(m => ({ default: m.FinalReport })));

export default function App() {
  const [activeCaseKey, setActiveCaseKey] = useState<string | null>(null);
  const [showIntro, setShowIntro] = useState<boolean>(true);

  const handleOpenCase = (exhibitName: string) => {
    // Normalise exhibit string
    const key = exhibitName.toUpperCase();
    if (evidenceDetailMap[key] || caseFilesMap[key]) {
      setActiveCaseKey(key);
    } else {
      // Fallback to EXHIBIT G
      setActiveCaseKey("EXHIBIT G");
    }
  };

  const handleCloseCase = () => {
    setActiveCaseKey(null);
  };

  const isEvidenceDetailKey = activeCaseKey ? activeCaseKey.startsWith("EV-") : false;

  return (
    <div className="paper-texture print-lines min-h-screen w-full text-[#111111] bg-[#F7F3EA] overflow-x-clip selection:bg-[#111111] selection:text-[#F7F3EA] relative">
      {/* Interactive AAA Detective-Style Opening Sequence */}
      {showIntro && (
        <DetectiveIntro onComplete={() => setShowIntro(false)} />
      )}

      {/* Custom Outlined Magnifying Glass Cursor */}
      <MagnifyingCursor />

      {/* Top Newspaper Masthead */}
      <Masthead />

      {/* Sticky Editorial Navigation Bar (Sticks top-0 as user scrolls) */}
      <Navigation />

      {/* Hero Section with a premium multi-directional reveal landing animation */}
      <div className="overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <Hero />
        </motion.div>
      </div>

      {/* Bold separator line */}
      <div className="max-w-[1400px] mx-auto w-full px-6 sm:px-10 lg:px-[60px] xl:px-[80px]">
        <div className="border-b-3 border-[#111111]" />
      </div>

      {/* Selected Works (Exhibits A-G) - Reveal/Slide in from LEFT */}
      <motion.div
        initial={{ opacity: 0, x: -45 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <SelectedWorks onOpenCase={handleOpenCase} />
      </motion.div>

      {/* Bold separator line */}
      <div className="max-w-[1400px] mx-auto w-full px-6 sm:px-10 lg:px-[60px] xl:px-[80px]">
        <div className="border-b-3 border-[#111111]" />
      </div>

      {/* The Lab Report / Stack - Reveal/Slide in from RIGHT */}
      <motion.div
        initial={{ opacity: 0, x: 45 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <Stack />
      </motion.div>

      {/* Bold separator line */}
      <div className="max-w-[1400px] mx-auto w-full px-6 sm:px-10 lg:px-[60px] xl:px-[80px]">
        <div className="border-b-3 border-[#111111]" />
      </div>

      {/* The Career Ledger - Reveal/Slide in from LEFT */}
      <motion.div
        initial={{ opacity: 0, x: -45 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <CareerLedger />
      </motion.div>

      {/* Bold separator line */}
      <div className="max-w-[1400px] mx-auto w-full px-6 sm:px-10 lg:px-[60px] xl:px-[80px]">
        <div className="border-b-3 border-[#111111]" />
      </div>

      {/* The Evidence Board - Pinboard & Archival Wall */}
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <EvidenceBoard onOpenCase={handleOpenCase} />
      </motion.div>

      {/* Bold separator line */}
      <div className="max-w-[1400px] mx-auto w-full px-6 sm:px-10 lg:px-[60px] xl:px-[80px]">
        <div className="border-b-3 border-[#111111]" />
      </div>

      {/* Official Correspondence / Contact - Reveal/Slide in from RIGHT */}
      <motion.div
        initial={{ opacity: 0, x: 45 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <Contact />
      </motion.div>

      {/* Bold separator line */}
      <div className="max-w-[1400px] mx-auto w-full px-6 sm:px-10 lg:px-[60px] xl:px-[80px]">
        <div className="border-b-3 border-[#111111]" />
      </div>

      {/* Final Investigation Report — Portfolio Conclusion */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <Suspense fallback={null}>
          <FinalReport />
        </Suspense>
      </motion.div>

      {/* Bold separator line */}
      <div className="max-w-[1400px] mx-auto w-full px-6 sm:px-10 lg:px-[60px] xl:px-[80px]">
        <div className="border-b-3 border-[#111111]" />
      </div>

      {/* Newspaper Footer */}
      <Footer />

      {/* Dedicated Confidential Evidence Detail View for EV-001 through EV-007 */}
      {isEvidenceDetailKey && activeCaseKey && evidenceDetailMap[activeCaseKey] && (
        <Suspense fallback={null}>
          <EvidenceDetailModal
            record={evidenceDetailMap[activeCaseKey]}
            onClose={handleCloseCase}
          />
        </Suspense>
      )}

      {/* Standard Case File View for Selected Works Exhibits A through G */}
      {!isEvidenceDetailKey && activeCaseKey && (
        <Suspense fallback={null}>
          <CaseFileModal
            caseData={caseFilesMap[activeCaseKey] || null}
            onClose={handleCloseCase}
            onSelectExhibit={handleOpenCase}
          />
        </Suspense>
      )}
      {/* Vercel Web Analytics & Speed Insights Trackers */}
      <Analytics />
      <SpeedInsights />
    </div>
  );
}