import { useState } from "react";
import { motion } from "framer-motion";
import { Masthead } from "./components/Masthead";
import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { SelectedWorks } from "./components/SelectedWorks";
import { Stack } from "./components/Stack";
import { CareerLedger } from "./components/CareerLedger";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { MagnifyingCursor } from "./components/MagnifyingCursor";
import { CaseFileModal } from "./components/CaseFileModal";
import { caseFilesMap } from "./data/caseFilesData";

export default function App() {
  const [activeCaseKey, setActiveCaseKey] = useState<string | null>(null);

  const handleOpenCase = (exhibitName: string) => {
    // Normalise exhibit string
    const key = exhibitName.toUpperCase();
    if (caseFilesMap[key]) {
      setActiveCaseKey(key);
    } else {
      // Fallback to EXHIBIT G
      setActiveCaseKey("EXHIBIT G");
    }
  };

  const handleCloseCase = () => {
    setActiveCaseKey(null);
  };

  return (
    <div className="paper-texture print-lines min-h-screen w-full text-[#111111] bg-[#F7F3EA] overflow-x-clip selection:bg-[#111111] selection:text-[#F7F3EA] relative">
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

      {/* Bold separator line with max width 1300px */}
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

      {/* Bold separator line with max width 1400px */}
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

      {/* Bold separator line with max width 1400px */}
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

      {/* Bold separator line with max width 1400px */}
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

      {/* Bold separator line with max width 1400px */}
      <div className="max-w-[1400px] mx-auto w-full px-6 sm:px-10 lg:px-[60px] xl:px-[80px]">
        <div className="border-b-3 border-[#111111]" />
      </div>

      {/* Newspaper Footer */}
      <Footer />

      {/* Standalone Full-Page Case File View with Smooth Transition */}
      <CaseFileModal
        caseData={activeCaseKey ? caseFilesMap[activeCaseKey] || null : null}
        onClose={handleCloseCase}
        onSelectExhibit={handleOpenCase}
      />
    </div>
  );
}