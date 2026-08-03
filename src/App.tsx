import { useState, useEffect, useRef, lazy, Suspense } from "react";
import { motion } from "framer-motion";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { Masthead } from "./components/Masthead";
import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { MagnifyingCursor } from "./components/MagnifyingCursor";
import { caseFilesMap } from "./data/caseFilesData";
import { evidenceDetailMap } from "./data/evidenceDetailData";

import { DetectiveIntro } from "./components/DetectiveIntro";

// Selective Lazy-loading for heavy below-the-fold sections to minimize initial JS bundle
const SelectedWorks = lazy(() => import("./components/SelectedWorks").then(m => ({ default: m.SelectedWorks })));
const Stack = lazy(() => import("./components/Stack").then(m => ({ default: m.Stack })));
const CareerLedger = lazy(() => import("./components/CareerLedger").then(m => ({ default: m.CareerLedger })));
const EvidenceBoard = lazy(() => import("./components/EvidenceBoard").then(m => ({ default: m.EvidenceBoard })));
const CaseFileModal = lazy(() => import("./components/CaseFileModal").then(m => ({ default: m.CaseFileModal })));
const EvidenceDetailModal = lazy(() => import("./components/EvidenceDetailModal").then(m => ({ default: m.EvidenceDetailModal })));
const FinalReport = lazy(() => import("./components/FinalReport").then(m => ({ default: m.FinalReport })));

// Helper to convert exhibit/case key to clean URL hash (e.g. "EXHIBIT A" -> "#exhibit-a", "EV-001" -> "#ev-001")
const keyToHash = (key: string): string => {
  return "#" + key.toLowerCase().replace(/\s+/g, "-");
};

// Helper to convert URL hash back to uppercase exhibit/case key
const hashToKey = (hash: string): string | null => {
  if (!hash || hash === "#") return null;
  const cleaned = hash.replace("#", "").trim().toLowerCase();

  // 1. Check exhibit match: "exhibit-a" -> "EXHIBIT A"
  if (cleaned.startsWith("exhibit-")) {
    const letter = cleaned.replace("exhibit-", "").toUpperCase();
    const key = `EXHIBIT ${letter}`;
    if (caseFilesMap[key]) return key;
  }

  // 2. Check evidence match: "ev-001" -> "EV-001"
  if (cleaned.startsWith("ev-")) {
    const code = cleaned.toUpperCase();
    if (evidenceDetailMap[code] || caseFilesMap[code]) return code;
  }

  // 3. Fallback: try direct uppercase lookups
  const rawUpper = cleaned.toUpperCase();
  if (evidenceDetailMap[rawUpper] || caseFilesMap[rawUpper]) return rawUpper;
  const rawSpace = rawUpper.replace(/-/g, " ");
  if (evidenceDetailMap[rawSpace] || caseFilesMap[rawSpace]) return rawSpace;

  return null;
};

export default function App() {
  const [activeCaseKey, setActiveCaseKey] = useState<string | null>(null);
  const [showIntro, setShowIntro] = useState<boolean>(true);

  // Flag to ignore redundant popstate processing when handleCloseCase programmatically calls history.back()
  const isClosingRef = useRef<boolean>(false);

  // 1. Initial Page Load & Refresh: Sync modal state from URL hash
  useEffect(() => {
    const initialKey = hashToKey(window.location.hash);
    if (initialKey) {
      setActiveCaseKey(initialKey);
    }
  }, []);

  // 2. Sync modal state with Browser History Popstate (Back/Forward buttons, Trackpad & Mobile Edge Swipes)
  useEffect(() => {
    const handlePopState = (event: PopStateEvent) => {
      if (isClosingRef.current) {
        isClosingRef.current = false;
        return;
      }

      const modalKeyFromState = event.state?.modalKey as string | undefined;
      if (modalKeyFromState) {
        const key = (evidenceDetailMap[modalKeyFromState] || caseFilesMap[modalKeyFromState]) ? modalKeyFromState : null;
        setActiveCaseKey(key);
      } else {
        const keyFromHash = hashToKey(window.location.hash);
        setActiveCaseKey(keyFromHash);
      }
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  // 3. Open Modal & Push History State
  const handleOpenCase = (exhibitName: string) => {
    const key = exhibitName.toUpperCase();
    const resolvedKey = (evidenceDetailMap[key] || caseFilesMap[key]) ? key : "EXHIBIT G";
    const targetHash = keyToHash(resolvedKey);

    if (activeCaseKey !== resolvedKey) {
      if (window.location.hash !== targetHash) {
        window.history.pushState(
          { modalKey: resolvedKey, pushedByApp: true },
          "",
          targetHash
        );
      }
      setActiveCaseKey(resolvedKey);
    }
  };

  // 4. Close Modal & Clean Up History State
  const handleCloseCase = () => {
    if (!activeCaseKey) return;

    const pushedByApp = window.history.state?.pushedByApp;

    if (pushedByApp) {
      // History entry was created during this session.
      // Calling history.back() pops the entry and returns to the pre-modal history state.
      isClosingRef.current = true;
      setActiveCaseKey(null);
      window.history.back();
    } else {
      // Direct deep-link or refreshed page — replace hash without exiting site
      if (window.location.hash) {
        window.history.replaceState(null, "", window.location.pathname + window.location.search);
      }
      setActiveCaseKey(null);
    }
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

      {/* Hero Section with immediate Frame 1 paint for LCP optimization */}
      <div className="overflow-hidden">
        <Hero />
      </div>

      {/* Bold separator line */}
      <div className="max-w-[1400px] mx-auto w-full px-6 sm:px-10 lg:px-[60px] xl:px-[80px]">
        <div className="border-b-2 border-[#111111]" />
      </div>

      {/* Selected Works (Exhibits A-G) - Reveal/Slide in from LEFT */}
      <motion.div
        initial={{ opacity: 0, x: -45 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <Suspense fallback={null}>
          <SelectedWorks onOpenCase={handleOpenCase} />
        </Suspense>
      </motion.div>

      {/* Bold separator line */}
      <div className="max-w-[1400px] mx-auto w-full px-6 sm:px-10 lg:px-[60px] xl:px-[80px]">
        <div className="border-b-2 border-[#111111]" />
      </div>

      {/* The Lab Report / Stack - Reveal/Slide in from RIGHT */}
      <motion.div
        initial={{ opacity: 0, x: 45 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <Suspense fallback={null}>
          <Stack />
        </Suspense>
      </motion.div>

      {/* Bold separator line */}
      <div className="max-w-[1400px] mx-auto w-full px-6 sm:px-10 lg:px-[60px] xl:px-[80px]">
        <div className="border-b-2 border-[#111111]" />
      </div>

      {/* The Career Ledger - Reveal/Slide in from LEFT */}
      <motion.div
        initial={{ opacity: 0, x: -45 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <Suspense fallback={null}>
          <CareerLedger />
        </Suspense>
      </motion.div>

      {/* Bold separator line */}
      <div className="max-w-[1400px] mx-auto w-full px-6 sm:px-10 lg:px-[60px] xl:px-[80px]">
        <div className="border-b-2 border-[#111111]" />
      </div>

      {/* The Evidence Board - Pinboard & Archival Wall */}
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <Suspense fallback={null}>
          <EvidenceBoard onOpenCase={handleOpenCase} />
        </Suspense>
      </motion.div>

      {/* Bold separator line */}
      <div className="max-w-[1400px] mx-auto w-full px-6 sm:px-10 lg:px-[60px] xl:px-[80px]">
        <div className="border-b-2 border-[#111111]" />
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
        <div className="border-b-2 border-[#111111]" />
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